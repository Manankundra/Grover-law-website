import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import { FIRM } from '@/lib/data';

export const metadata: Metadata = { title: 'Privacy' };

export default function Privacy() {
  return (
    <>
      <PageHead crumbs={[{ label: 'Privacy' }]} title="Privacy" />
      <section className="sec"><div className="wrap prose">
        <p>Personal information submitted through the enquiry form (name, email, telephone and message) is used solely for professional correspondence and is not disclosed to any third party, save as required by law.</p>
        <p>This website stores a single entry in your browser to remember that you have acknowledged the disclaimer. It does not use advertising or tracking cookies.</p>
        <p>Questions may be sent to <a className="link" href={`mailto:${FIRM.email}`}>{FIRM.email}</a>.</p>
      </div></section>
    </>
  );
}
