import type { MetadataRoute } from 'next';
import { site } from '@/src/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.meta.url,
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
