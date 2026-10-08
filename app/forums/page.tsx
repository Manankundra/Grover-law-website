import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import PageHead from '@/components/PageHead';
import { FORUMS } from '@/lib/data';

export const metadata: Metadata = pageMeta({ path: '/forums', title: 'Forums of Practice', description: 'Courts, tribunals and authorities before which Grover Law Offices appears.' });

export default function Forums() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Forums' }]} title="Forums of Practice" lead="Grover Law Offices appears before the District Courts across Delhi NCR, the High Courts of Delhi and Punjab & Haryana, and the following tribunals and authorities." />
      <section className="sec">
        <div className="wrap">
          <div className="ledger c2">
            {FORUMS.map((f) => (
              <div key={f.group} className="cell"><h2 className="h-sm">{f.group}</h2>
                <ul className="rows" style={{ marginTop: '.5rem' }}>{f.items.map((i) => (<li key={i} className="body-sm" style={{ color: 'var(--ink)' }}>{i}</li>))}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
