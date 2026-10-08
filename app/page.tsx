import Link from 'next/link';
import { FIRM, PRACTICE_AREAS, FORUMS } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ path: '/', description: 'Grover Law Offices, Advocates & Consultants, New Delhi. Information on the Law Office, its areas of practice and the forums before which it appears.' });

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap grid">
          <div className="copy">
            <p className="label brass" style={{ marginBottom: '1.5rem' }}>Advocates &amp; Consultants · New Delhi</p>
            <h1 className="display">Litigation, advisory and regulatory counsel.</h1>
            <p className="lead" style={{ marginTop: '1.5rem' }}>Grover Law Offices is a law office established in {FIRM.est}, practising before courts, tribunals and regulatory authorities across Delhi NCR and Haryana.</p>
            <div className="acts">
              <Link href="/practice-areas" className="btn btn-p">Areas of Practice</Link>
              <Link href="/contact" className="btn btn-g">Contact the Office</Link>
            </div>
          </div>
          <div className="mark"><img src="/logo.jpg" alt="Grover Law Offices monogram" width={640} height={640} /></div>
        </div>
      </section>

      <section className="sec rule-t">
        <div className="wrap">
          <div className="split">
            <div><p className="label brass">Areas of Practice</p><h2 className="h-lg" style={{ marginTop: '.75rem' }}>Four areas of work</h2></div>
            <div className="ledger c2">
              {PRACTICE_AREAS.map((p) => (
                <Link key={p.slug} href={`/practice-areas/${p.slug}`} className="cell">
                  <h3 className="h-sm">{p.title}</h3><p className="body-sm">{p.short}</p>
                  <span className="more label"><span className="link">Read more</span></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec rule-t">
        <div className="wrap split">
          <div><p className="label brass">The Firm</p><h2 className="h-lg" style={{ marginTop: '.75rem' }}>Practical advice, direct involvement</h2></div>
          <div className="prose">
            <p>The Firm combines litigation with commercially focused legal advisory, assisting clients in managing legal risk, meeting regulatory requirements and supporting business growth.</p>
            <p>Its practice spans advisory, documentation, contract management and corporate governance, together with representation before courts, tribunals and regulatory authorities.</p>
            <p style={{ marginTop: '2rem' }}><Link href="/firm" className="link label">About the Firm</Link></p>
          </div>
        </div>
      </section>

      <section className="sec rule-t">
        <div className="wrap">
          <div className="split">
            <div><p className="label brass">Forums</p><h2 className="h-lg" style={{ marginTop: '.75rem' }}>Forums of practice</h2></div>
            <ul className="rows">{FORUMS.map((f) => (<li key={f.group}><span className="label">{f.group}</span><p className="body-sm" style={{ marginTop: '.25rem', color: 'var(--ink)' }}>{f.items.join(' · ')}</p></li>))}</ul>
          </div>
        </div>
      </section>

      <section className="sec rule-t">
        <div className="wrap">
          <div className="panel alt" style={{ display: 'grid', gap: '1.5rem' }}>
            <h2 className="h-md">Write to the Law Office</h2>
            <p className="body-sm" style={{ maxWidth: '60ch' }}>Enquiries may be made through the contact page. In keeping with Bar Council of India Rule 36, this website is maintained for information only.</p>
            <div><Link href="/contact" className="btn btn-p">Make an Enquiry</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
