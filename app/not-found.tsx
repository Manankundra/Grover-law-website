import Link from 'next/link';
export default function NotFound() {
  return (<section className="sec"><div className="wrap"><h1 className="display">Page not found</h1><p className="lead" style={{ margin: '1.5rem 0' }}>The page you requested does not exist or has moved.</p><Link href="/" className="btn btn-p">Return home</Link></div></section>);
}
