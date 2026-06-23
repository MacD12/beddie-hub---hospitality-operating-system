import type { MetadataRoute } from 'next';
import { articles } from '@/components/articles';

const SITE = 'https://www.beddlehub.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/platform', '/solutions', '/pricing', '/resources', '/about', '/careers', '/contact'].map(
    (path) => ({
      url: `${SITE}${path || '/'}`,
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })
  );

  const articleRoutes = articles.map((a) => ({
    url: `${SITE}/resources/${a.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}
