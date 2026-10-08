import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Per-instance limiter. For multi-instance production, swap for Upstash/Redis.
const hits = new Map<string, number[]>();
const WINDOW = 10 * 60_000, MAX = 5;

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= MAX) return NextResponse.json({ error: 'Too many attempts. Please try again later.' }, { status: 429 });
  hits.set(ip, [...recent, now]);

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  const s = (k: string, max: number) => (typeof b[k] === 'string' ? (b[k] as string).trim().slice(0, max) : '');

  if (s('website', 100)) return NextResponse.json({ ok: true }); // honeypot: pretend success
  const name = s('name', 120), email = s('email', 160), phone = s('phone', 24), area = s('area', 160), message = s('message', 5000);
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 10 || b.consent !== 'yes')
    return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });

  const key = process.env.RESEND_API_KEY, to = process.env.ENQUIRY_TO;
  if (!key || !to) {
    console.error('Enquiry email not configured (RESEND_API_KEY / ENQUIRY_TO).');
    return NextResponse.json({ error: 'Enquiry service is not available right now.' }, { status: 503 });
  }
  const html = `<p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone || '-')}</p><p><b>Subject:</b> ${esc(area)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: process.env.ENQUIRY_FROM ?? 'Website <onboarding@resend.dev>', to: [to], reply_to: email, subject: `Website enquiry: ${area}`, html }),
  });
  if (!r.ok) return NextResponse.json({ error: 'Could not send your enquiry.' }, { status: 502 });
  return NextResponse.json({ ok: true });
}
