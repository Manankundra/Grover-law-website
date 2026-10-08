import Link from 'next/link';
import JsonLd from './JsonLd';
import { SITE } from '@/lib/seo';

export default function PageHead({ crumbs, title, lead }: { crumbs: { href?: string; label: string }[]; title: string; lead?: string }) {
  // The last crumb is the current page; schema.org allows it without an `item` URL.
  const ld = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [{ href: '/', label: 'Home' }, ...crumbs].map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c.label, ...(c.href && { item: `${SITE}${c.href === '/' ? '' : c.href}` }),
    })),
  };
  return (
    <section className="pagehead">
      <JsonLd data={ld} />
      <div className="wrap">
        <nav className="crumbs label" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (<span key={c.label}>/ {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="brass" style={{ color: 'var(--brass-text)' }}>{c.label}</span>}</span>))}
        </nav>
        <h1 className="display" style={{ maxWidth: '22ch' }}>{title}</h1>
        {lead && <p className="lead" style={{ marginTop: '1.5rem' }}>{lead}</p>}
      </div>
    </section>
  );
}
