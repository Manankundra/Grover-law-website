import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS } from '@/lib/data';
const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.groverlawoffices.com';
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/firm', '/practice-areas', '/counsel', '/forums', '/contact', '/disclaimer', '/privacy', ...PRACTICE_AREAS.map((p) => `/practice-areas/${p.slug}`)];
  return pages.map((p) => ({ url: `${SITE}${p}`, lastModified: new Date() }));
}
