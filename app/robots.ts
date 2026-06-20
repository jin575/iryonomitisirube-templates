import type { MetadataRoute } from 'next';
import { site } from '@/src/data/site';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = site.meta.url.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
