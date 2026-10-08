import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerGate from '@/components/DisclaimerGate';
import { FIRM } from '@/lib/data';

const serif = Playfair_Display({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-serif', display: 'swap' });
const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' });

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.groverlawoffices.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: 'Grover Law Offices | Advocates & Consultants, New Delhi', template: '%s | Grover Law Offices' },
  description: 'Grover Law Offices, Advocates & Consultants, New Delhi. Information on the Law Office, its areas of practice and the forums before which it appears.',
  openGraph: { type: 'website', siteName: 'Grover Law Offices', locale: 'en_IN' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F6F5F2' };

// Runs before first paint so returning visitors never see the gate.
const ackScript = `try{if(localStorage.getItem('glo-ack-v1')==='1')document.documentElement.dataset.ack='1'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ld = {
    '@context': 'https://schema.org', '@type': 'LegalService', name: FIRM.name, url: SITE,
    email: FIRM.email, telephone: '+919958386067',
    address: { '@type': 'PostalAddress', streetAddress: 'A-83, 1st Floor, Okhla Phase II, Okhla Industrial Area', addressLocality: 'New Delhi', postalCode: '110020', addressCountry: 'IN' },
  };
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ackScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <DisclaimerGate />
      </body>
    </html>
  );
}
