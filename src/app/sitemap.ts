import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { SERVICES } from '@/lib/constants';
import { getAllContent } from '@/lib/content';

const BASE_URL = 'https://chicagocommercialcleaner.com';
const TODAY = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,             lastModified: TODAY, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${BASE_URL}/get-a-quote`,  lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/services`,     lastModified: TODAY, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/locations`,    lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/industries`,   lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`,         lastModified: TODAY, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE_URL}/pricing`,      lastModified: TODAY, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`,        lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,      lastModified: TODAY, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/reviews`,      lastModified: TODAY, changeFrequency: 'weekly',  priority: 0.7 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic content from MDX files
  const [blogPosts, locationPages, industryPages] = await Promise.all([
    getAllContent('blog').catch(() => []),
    getAllContent('locations').catch(() => []),
    getAllContent('industries').catch(() => []),
  ]);

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.frontmatter?.lastUpdated || TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const locationUrls: MetadataRoute.Sitemap = locationPages.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const industryUrls: MetadataRoute.Sitemap = industryPages.map((ind) => ({
    url: `${BASE_URL}/industries/${ind.slug}`,
    lastModified: TODAY,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...blogUrls,
    ...locationUrls,
    ...industryUrls,
  ];
}
