import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/blog',
        '/blog/*',
        '/contact',
        '/doctors',
        '/privacy-policy',
      ],
      disallow: [
        '/api/',
        '/admin/',
        '/_next/',
        '/_static/',
        '/_vercel/',
      ],
    },
    sitemap: 'https://elitedental.com/sitemap.xml',
    host: 'https://elitedental.com',
  };
}