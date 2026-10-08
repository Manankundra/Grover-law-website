import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { FIRM } from './data';

export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.groverlawoffices.com').replace(/\/$/, '');
export const DEFAULT_TITLE = 'Grover Law Offices | Advocates & Consultants, New Delhi';

// Page metadata with a canonical URL. A page's openGraph replaces the layout's
// wholesale, so the shared fields are repeated here rather than inherited.
export function pageMeta({ path, title, description }: { path: string; title?: string; description: string }): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', siteName: FIRM.name, locale: 'en_IN', url: path,
      title: title ? `${title} | ${FIRM.name}` : DEFAULT_TITLE, description,
      // app/opengraph-image.tsx is not inherited once a page sets openGraph, so link it explicitly.
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: DEFAULT_TITLE }],
    },
  };
}

export const ORG_ID = `${SITE}/#organization`;

// The logo as a data URL, for next/og image routes (rendered at build time).
export async function logoDataUrl() {
  const buf = await readFile(join(process.cwd(), 'public', 'logo.jpg'));
  return `data:image/jpeg;base64,${buf.toString('base64')}`;
}
