'use client';
import { useState } from 'react';
import { PRACTICE_AREAS } from '@/lib/data';

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'message' | 'consent', string>>;
type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function EnquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [note, setNote] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const er: Errors = {};
    if (!d.name?.trim()) er.name = 'Enter your full name.';
    if (!/^\S+@\S+\.\S+$/.test(d.email ?? '')) er.email = 'Enter a valid email address.';
    if (d.phone && !/^[+\d][\d\s-]{6,17}$/.test(d.phone)) er.phone = 'Enter a valid phone number.';
    if ((d.message ?? '').trim().length < 10) er.message = 'Describe the matter in at least 10 characters.';
    if (!d.consent) er.consent = 'Please confirm the acknowledgement to proceed.';
    setErrors(er);
    if (Object.keys(er).length) return;
    setStatus('sending');
    try {
      const r = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      const j = (await r.json().catch(() => ({}))) as { error?: string };
      if (!r.ok) throw new Error(j.error ?? 'Request failed');
      setStatus('sent'); form.reset();
    } catch (err) {
      setStatus('error'); setNote(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (status === 'sent')
    return (
      <div className="ok" role="status">
        <p className="h-sm">Enquiry received.</p>
        <p className="body-sm" style={{ marginTop: '.5rem' }}>Your message has been sent to the Law Office. Any response will be sent to the email address you provided.</p>
      </div>
    );

  const fld = (id: keyof Errors, label: string, el: React.ReactNode) => (
    <div className="fld">
      <label htmlFor={id} className="label">{label}</label>{el}
      {errors[id] && <p className="err" id={`${id}-e`} role="alert">{errors[id]}</p>}
    </div>
  );
  const a = (id: keyof Errors) => ({ id, name: id, 'aria-invalid': !!errors[id], 'aria-describedby': errors[id] ? `${id}-e` : undefined });

  return (
    <form className="f" onSubmit={onSubmit} noValidate>
      <div className="hp" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {fld('name', 'Full name', <input {...a('name')} autoComplete="name" required />)}
      <div className="f2">
        {fld('email', 'Email', <input {...a('email')} type="email" autoComplete="email" required />)}
        {fld('phone', 'Phone (optional)', <input {...a('phone')} type="tel" autoComplete="tel" />)}
      </div>
      <div className="fld">
        <label htmlFor="area" className="label">Subject of enquiry</label>
        <select id="area" name="area" defaultValue="General">
          <option>General</option>
          {PRACTICE_AREAS.map((p) => (<option key={p.slug}>{p.title}</option>))}
        </select>
      </div>
      {fld('message', 'Message', <textarea {...a('message')} required />)}
      <div>
        <label className="chk body-sm">
          <input type="checkbox" name="consent" value="yes" />
          <span>I have read the Acknowledgement &amp; Disclaimer. I am writing of my own accord, and I understand that this enquiry does not create an advocate-client relationship.</span>
        </label>
        {errors.consent && <p className="fld"><span className="err" role="alert">{errors.consent}</span></p>}
      </div>
      {status === 'error' && <p className="err" role="alert" style={{ color: '#ba1a1a' }}>{note} You can also write to us directly by email.</p>}
      <div><button className="btn btn-p" disabled={status === 'sending'}>{status === 'sending' ? 'Sending' : 'Send Enquiry'}</button></div>
    </form>
  );
}
