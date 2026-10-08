import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import PageHead from '@/components/PageHead';
import { PRACTICE_AREAS } from '@/lib/data';

export const metadata: Metadata = pageMeta({ path: '/practice-areas', title: 'Areas of Practice', description: 'Litigation, corporate advisory, commercial transactions and RERA consultancy.' });

export default function Areas() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Areas of Practice' }]} title="Areas of Practice" lead="The Firm's work spans dispute resolution, corporate advisory, commercial and real estate transactions, and RERA compliance." />
      <section className="sec">
        <div className="wrap">
          <div className="ledger c2">
            {PRACTICE_AREAS.map((p) => (
              <Link key={p.slug} href={`/practice-areas/${p.slug}`} className="cell">
                <h2 className="h-sm">{p.title}</h2><p className="body-sm">{p.short}</p>
                <span className="more label"><span className="link">Read more</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
