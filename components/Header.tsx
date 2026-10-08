'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV } from '@/lib/data';
import Logo from './Logo';

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const cur = (h: string) => (path === h || path.startsWith(h + '/') ? 'page' : undefined);
  return (
    <header className="hdr">
      <div className="wrap in">
        <Link href="/" className="brand" aria-label="Grover Law Offices, home">
          <Logo />
          <span><b>Grover Law Offices</b><small>Advocates &amp; Consultants</small></span>
        </Link>
        <nav className="nav" aria-label="Primary">
          {NAV.slice(0, -1).map((n) => (<Link key={n.href} href={n.href} aria-current={cur(n.href)}>{n.label}</Link>))}
        </nav>
        <Link href="/contact" className="btn btn-p cta">Make an Enquiry</Link>
        <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mnav" onClick={() => setOpen(!open)}>
          <i /><i />
        </button>
      </div>
      {open && (
        <nav id="mnav" className="mnav" aria-label="Mobile">
          {NAV.map((n) => (<Link key={n.href} href={n.href} aria-current={cur(n.href)}>{n.label}</Link>))}
          <Link href="/contact" className="btn btn-p">Make an Enquiry</Link>
        </nav>
      )}
    </header>
  );
}
