import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test.html', '/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: 'https://180math.com/sitemap.xml',
    host: 'https://180math.com',
  };
}
