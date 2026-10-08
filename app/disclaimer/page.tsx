import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import { DISCLAIMER } from '@/lib/data';

export const metadata: Metadata = { title: 'Acknowledgement & Disclaimer' };

export default function Disclaimer() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Disclaimer' }]} title="Acknowledgement & Disclaimer" />
      <section className="sec"><div className="wrap" style={{ maxWidth: 860 }}>
        {DISCLAIMER.map((d) => (<div key={d.t} style={{ marginBottom: '2rem' }}><h2 className="h-sm">{d.t}</h2><p className="prose" style={{ marginTop: '.5rem' }}>{d.b}</p></div>))}
      </div></section>
    </>
  );
}
