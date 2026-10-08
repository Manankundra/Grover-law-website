import type { MetadataRoute } from 'next';
import { PRACTICE_AREAS } from '@/lib/data';
import { SITE } from '@/lib/seo';
// No lastModified: a build-time timestamp marks every page as changed on every deploy,
// which teaches crawlers to ignore it.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/firm', '/practice-areas', '/counsel', '/forums', '/contact', '/disclaimer', '/privacy', ...PRACTICE_AREAS.map((p) => `/practice-areas/${p.slug}`)];
  return pages.map((p) => ({ url: `${SITE}${p}` }));
}
