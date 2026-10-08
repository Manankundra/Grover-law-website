import Link from 'next/link';

export default function PageHead({ crumbs, title, lead }: { crumbs: { href?: string; label: string }[]; title: string; lead?: string }) {
  return (
    <section className="pagehead">
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
