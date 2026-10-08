import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHead from '@/components/PageHead';
import JsonLd from '@/components/JsonLd';
import { PRACTICE_AREAS } from '@/lib/data';
import { pageMeta, SITE, ORG_ID } from '@/lib/seo';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export const generateStaticParams = () => PRACTICE_AREAS.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = PRACTICE_AREAS.find((x) => x.slug === slug);
  return p ? pageMeta({ path: `/practice-areas/${p.slug}`, title: p.title, description: p.short }) : {};
}

export default async function Area({ params }: Props) {
  const { slug } = await params;
  const p = PRACTICE_AREAS.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = PRACTICE_AREAS.filter((x) => x.slug !== p.slug);
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'Service', name: p.title, description: p.short, serviceType: p.title,
        url: `${SITE}/practice-areas/${p.slug}`, provider: { '@id': ORG_ID },
        areaServed: [{ '@type': 'State', name: 'Delhi' }, { '@type': 'State', name: 'Haryana' }],
        hasOfferCatalog: { '@type': 'OfferCatalog', name: p.servicesTitle, itemListElement: p.services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s } })) },
      }} />
      <PageHead crumbs={[{ href: '/practice-areas', label: 'Areas of Practice' }, { label: p.title }]} title={p.title} />
      <section className="sec">
        <div className="wrap split">
          <div className="prose">{p.intro.map((t) => (<p key={t}>{t}</p>))}</div>
          <div>
            <h2 className="h-md" style={{ marginBottom: '1.5rem' }}>{p.servicesTitle}</h2>
            <ul className="rows">{p.services.map((s) => (<li key={s}>{s}</li>))}</ul>
          </div>
        </div>
      </section>
      <section className="sec rule-t">
        <div className="wrap">
          <p className="label brass" style={{ marginBottom: '1.5rem' }}>Other Areas of Practice</p>
          <div className="ledger c3">
            {others.map((o) => (<Link key={o.slug} href={`/practice-areas/${o.slug}`} className="cell"><h3 className="h-sm">{o.title}</h3></Link>))}
          </div>
          <p style={{ marginTop: '2.5rem' }}><Link href="/contact" className="link label">Make an Enquiry</Link></p>
        </div>
      </section>
    </>
  );
}
