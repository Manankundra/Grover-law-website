import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DisclaimerGate from '@/components/DisclaimerGate';
import JsonLd from '@/components/JsonLd';
import { FIRM, PRACTICE_AREAS } from '@/lib/data';
import { SITE, DEFAULT_TITLE, ORG_ID } from '@/lib/seo';

const serif = Playfair_Display({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-serif', display: 'swap' });
const sans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-sans', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: { default: DEFAULT_TITLE, template: '%s | Grover Law Offices' },
  description: 'Grover Law Offices, Advocates & Consultants, New Delhi. Information on the Law Office, its areas of practice and the forums before which it appears.',
  openGraph: { type: 'website', siteName: FIRM.name, locale: 'en_IN' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F6F5F2' };

// Runs before first paint so returning visitors never see the gate.
const ackScript = `try{if(localStorage.getItem('glo-ack-v1')==='1')document.documentElement.dataset.ack='1'}catch(e){}`;

const tel = (i: number) => FIRM.phones[i].href.replace('tel:', '');
const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${SITE}/#website`, url: SITE, name: FIRM.name, inLanguage: 'en-IN', publisher: { '@id': ORG_ID },
    },
    {
      '@type': 'LegalService', '@id': ORG_ID, name: FIRM.name, alternateName: `${FIRM.name}, ${FIRM.tagline}`,
      url: SITE, logo: `${SITE}/logo.jpg`, image: `${SITE}/logo.jpg`,
      email: FIRM.email, telephone: tel(0), foundingDate: String(FIRM.est),
      address: { '@type': 'PostalAddress', streetAddress: 'A-83, 1st Floor, Okhla Phase II, Okhla Industrial Area', addressLocality: 'New Delhi', addressRegion: 'Delhi', postalCode: '110020', addressCountry: 'IN' },
      areaServed: [{ '@type': 'State', name: 'Delhi' }, { '@type': 'State', name: 'Haryana' }],
      knowsAbout: PRACTICE_AREAS.map((p) => p.title),
      founder: { '@id': `${SITE}/counsel#person` },
      department: {
        '@type': 'LegalService', name: `${FIRM.name}, Radheypuri Office`, url: `${SITE}/contact`, telephone: tel(1), email: FIRM.email,
        address: { '@type': 'PostalAddress', streetAddress: '23/2, Ground Floor, St No. 3, Radheypuri Extn II', addressLocality: 'Delhi', addressRegion: 'Delhi', postalCode: '110051', addressCountry: 'IN' },
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ackScript }} />
        <JsonLd data={ld} />
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
