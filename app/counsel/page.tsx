import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import Logo from '@/components/Logo';

export const metadata: Metadata = { title: 'Counsel', description: 'Vaibhav Grover, Managing Counsel and Founder, Grover Law Offices.' };

export default function Counsel() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Counsel' }]} title="Vaibhav Grover" lead="Managing Counsel and Founder" />
      <section className="sec">
        <div className="wrap split">
          {/* Replace with a portrait: <Image src="/vaibhav-grover.jpg" ... /> once supplied */}
          <div className="panel alt" style={{ aspectRatio: '4/5', display: 'grid', placeItems: 'center' }}><Logo size={96} /></div>
          <div>
            <div className="prose">
              <p>Vaibhav Grover has been enrolled as an Advocate since 2021 and leads the practice at Grover Law Offices. He advises corporates, startups and private clients on commercial advisory, regulatory compliance, contract drafting and negotiation, employment-related matters and dispute resolution.</p>
              <p>He regularly advises businesses on legal and regulatory issues arising from their day-to-day commercial operations, while representing clients before various courts, tribunals and statutory authorities.</p>
            </div>
            <h2 className="h-md" style={{ margin: '3rem 0 1.5rem' }}>Areas of Work</h2>
            <ul className="rows">
              {['Commercial advisory', 'Regulatory compliance', 'Contract drafting and negotiation', 'Employment-related advisory', 'Dispute resolution and litigation strategy'].map((s) => (<li key={s}>{s}</li>))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
