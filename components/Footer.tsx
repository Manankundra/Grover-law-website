import Link from 'next/link';
import { FIRM, NAV, SHORT_DISCLAIMER } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="cols">
          <div>
            <p className="h-sm">Grover Law Offices</p>
            <p className="body-sm" style={{ marginTop: '.75rem', maxWidth: '34ch' }}>Advocates &amp; Consultants. Litigation, commercial advisory and regulatory practice, New Delhi. Established {FIRM.est}.</p>
          </div>
          <div>
            <p className="label brass" style={{ marginBottom: '1rem' }}>Offices</p>
            {FIRM.offices.map((o) => (
              <address key={o.label} className="body-sm" style={{ fontStyle: 'normal', marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{o.label}</strong><br />{o.lines.map((l) => (<span key={l}>{l}<br /></span>))}
              </address>
            ))}
          </div>
          <div>
            <p className="label brass" style={{ marginBottom: '1rem' }}>Correspondence</p>
            <ul className="body-sm">
              {FIRM.phones.map((p) => (<li key={p.href}><a href={p.href}>{p.label}</a></li>))}
              <li><a href={`mailto:${FIRM.email}`}>{FIRM.email}</a></li>
            </ul>
          </div>
          <div>
            <p className="label brass" style={{ marginBottom: '1rem' }}>Navigate</p>
            <ul className="body-sm">
              {NAV.map((n) => (<li key={n.href}><Link href={n.href}>{n.label}</Link></li>))}
            </ul>
          </div>
        </div>
        <div className="stat">
          <p className="label brass" style={{ marginBottom: '.5rem' }}>Statutory Disclaimer · Bar Council of India (Rule 36)</p>
          <p className="body-sm">{SHORT_DISCLAIMER}</p>
        </div>
        <div className="bot body-sm">
          <span>© {new Date().getFullYear()} Grover Law Offices. All rights reserved.</span>
          <span style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/disclaimer">Disclaimer</Link><Link href="/privacy">Privacy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
