import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageHead from '@/components/PageHead';
import EnquiryForm from '@/components/EnquiryForm';
import { FIRM } from '@/lib/data';

export const metadata: Metadata = pageMeta({ path: '/contact', title: 'Contact', description: 'Offices and correspondence details of Grover Law Offices, New Delhi.' });

export default function Contact() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Contact' }]} title="Contact" lead="Enquiries may be addressed to the Law Office using the form below, by email or by telephone." />
      <section className="sec">
        <div className="wrap split">
          <div style={{ display: 'grid', gap: '2rem', alignContent: 'start' }}>
            {FIRM.offices.map((o) => (
              <address key={o.label} style={{ fontStyle: 'normal' }}>
                <p className="label brass" style={{ marginBottom: '.5rem' }}>{o.label}</p>
                <p className="body-sm" style={{ color: 'var(--ink)' }}>{o.lines.map((l) => (<span key={l}>{l}<br /></span>))}</p>
              </address>
            ))}
            <div>
              <p className="label brass" style={{ marginBottom: '.5rem' }}>Correspondence</p>
              <ul className="body-sm" style={{ color: 'var(--ink)' }}>
                {FIRM.phones.map((p) => (<li key={p.href}><a href={p.href} className="link">{p.label}</a></li>))}
                <li style={{ marginTop: '.5rem' }}><a href={`mailto:${FIRM.email}`} className="link">{FIRM.email}</a></li>
              </ul>
            </div>
          </div>
          <div className="panel"><h2 className="h-md" style={{ marginBottom: '1.5rem' }}>Make an Enquiry</h2><EnquiryForm /></div>
        </div>
      </section>
    </>
  );
}
