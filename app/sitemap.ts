import { MetadataRoute } from 'next';
import { feederPrograms } from '@/data/programs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://180math.com';
  const currentDate = new Date().toISOString();

  const feederRoutes: MetadataRoute.Sitemap = Object.keys(feederPrograms).map((slug) => ({
    url: `${baseUrl}/programs/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing.html`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact.html`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  return [...staticRoutes, ...feederRoutes];
}
