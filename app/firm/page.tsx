import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import { PRINCIPLES, FIRM } from '@/lib/data';

export const metadata: Metadata = { title: 'The Firm', description: 'About Grover Law Offices, its practice and its approach.' };

export default function Firm() {
  return (
    <>
      <PageHead crumbs={[{ label: 'The Firm' }]} title="The Firm" lead={`Grover Law Offices, Advocates & Consultants, established in ${FIRM.est}.`} />
      <section className="sec">
        <div className="wrap split">
          <h2 className="h-lg">About the Law Office</h2>
          <div className="prose">
            <p>Grover Law Offices is a full-service law firm established in 2021, providing legal advisory, commercial contracting, regulatory compliance and dispute resolution services to corporates, startups and private clients.</p>
            <p>The Firm combines litigation expertise with commercially focused legal advisory, assisting clients in managing legal risks, ensuring regulatory compliance and facilitating business growth. Its practice spans advisory, documentation, contract management, corporate governance and representation before courts, tribunals and regulatory authorities.</p>
            <p>Every engagement is handled with a practical approach, with an emphasis on timely advice, commercially viable solutions and effective legal risk management.</p>
          </div>
        </div>
      </section>
      <section className="sec rule-t">
        <div className="wrap">
          <h2 className="h-lg" style={{ marginBottom: '2rem' }}>Approach</h2>
          <div className="ledger c3">
            {PRINCIPLES.map((p) => (<div key={p.title} className="cell"><h3 className="h-sm">{p.title}</h3><p className="body-sm">{p.body}</p></div>))}
          </div>
          <div className="prose" style={{ marginTop: '3rem' }}>
            <p>Advice is grounded in a practical understanding of judicial processes, regulatory frameworks and commercial realities, with a focus on solutions that are legally sound and commercially effective.</p>
          </div>
        </div>
      </section>
    </>
  );
}
