import { MetadataRoute } from 'next';

const blogPosts = [
  '5-signs-you-need-to-visit-dentist-immediately',
  'complete-guide-teeth-whitening-methods-safety',
  'how-to-maintain-good-oral-hygiene-during-holidays',
  'understanding-dental-implants-procedure-benefits',
  'connection-between-oral-health-and-overall-wellness',
  'invisalign-vs-traditional-braces-which-is-right'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elitedental.com';
  const currentDate = new Date().toISOString();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/Blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/Contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/Doctor`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/Blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}