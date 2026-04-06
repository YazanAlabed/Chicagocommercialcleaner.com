import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type ContentType = 'services' | 'locations' | 'industries' | 'blog';

interface BaseFrontmatter {
  title: string;
  slug: string;
  description: string;
  lastUpdated?: string;
}

export interface ServiceFrontmatter extends BaseFrontmatter {
  h1: string;
  keywords: string[];
  serviceType: string;
  priceRange?: string;
  icon?: string;
  order?: number;
  faqs?: { q: string; a: string }[];
}

export interface LocationFrontmatter extends BaseFrontmatter {
  h1: string;
  keywords: string[];
  neighborhood?: string;
  city: string;
  state: string;
  mapCenter?: { lat: number; lng: number };
  nearbyLocations?: string[];
  landmarks?: string[];
}

export interface IndustryFrontmatter extends BaseFrontmatter {
  h1: string;
  keywords: string[];
  industryType: string;
  icon?: string;
  compliance?: string[];
}

export interface BlogFrontmatter extends BaseFrontmatter {
  author: string;
  publishedDate: string;
  lastUpdated: string;
  category: string;
  readTime: string;
  keywords?: string[];
}

export interface ContentItem<T extends BaseFrontmatter> {
  slug: string;
  frontmatter: T;
  content: string;
}

const contentDir = path.join(process.cwd(), 'src', 'content');

export async function getContentFile(
  type: ContentType,
  slug: string
): Promise<ContentItem<BaseFrontmatter> | null> {
  try {
    const filePath = path.join(contentDir, type, `${slug}.mdx`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data as BaseFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllContent(
  type: ContentType
): Promise<ContentItem<BaseFrontmatter>[]> {
  try {
    const dirPath = path.join(contentDir, type);
    const files = await fs.readdir(dirPath);

    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));

    const contentPromises = mdxFiles.map(async (file) => {
      const slug = file.replace('.mdx', '');
      const filePath = path.join(dirPath, file);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug,
        frontmatter: data as BaseFrontmatter,
        content,
      };
    });

    const contents = await Promise.all(contentPromises);

    // Sort by order if available (for services)
    return contents.sort((a, b) => {
      const orderA = (a.frontmatter as ServiceFrontmatter).order || 0;
      const orderB = (b.frontmatter as ServiceFrontmatter).order || 0;
      return orderA - orderB;
    });
  } catch {
    return [];
  }
}

export async function getAllSlugs(type: ContentType): Promise<string[]> {
  try {
    const dirPath = path.join(contentDir, type);
    const files = await fs.readdir(dirPath);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace('.mdx', ''));
  } catch {
    return [];
  }
}

// Type-specific helpers
export async function getServiceContent(
  slug: string
): Promise<ContentItem<ServiceFrontmatter> | null> {
  const content = await getContentFile('services', slug);
  return content as ContentItem<ServiceFrontmatter> | null;
}

export async function getAllServices(): Promise<
  ContentItem<ServiceFrontmatter>[]
> {
  const contents = await getAllContent('services');
  return contents as ContentItem<ServiceFrontmatter>[];
}

export async function getLocationContent(
  slug: string
): Promise<ContentItem<LocationFrontmatter> | null> {
  const content = await getContentFile('locations', slug);
  return content as ContentItem<LocationFrontmatter> | null;
}

export async function getAllLocations(): Promise<
  ContentItem<LocationFrontmatter>[]
> {
  const contents = await getAllContent('locations');
  return contents as ContentItem<LocationFrontmatter>[];
}

export async function getIndustryContent(
  slug: string
): Promise<ContentItem<IndustryFrontmatter> | null> {
  const content = await getContentFile('industries', slug);
  return content as ContentItem<IndustryFrontmatter> | null;
}

export async function getAllIndustries(): Promise<
  ContentItem<IndustryFrontmatter>[]
> {
  const contents = await getAllContent('industries');
  return contents as ContentItem<IndustryFrontmatter>[];
}

export async function getBlogPost(
  slug: string
): Promise<ContentItem<BlogFrontmatter> | null> {
  const content = await getContentFile('blog', slug);
  return content as ContentItem<BlogFrontmatter> | null;
}

export async function getAllBlogPosts(): Promise<
  ContentItem<BlogFrontmatter>[]
> {
  const contents = await getAllContent('blog');
  // Sort by published date, newest first
  return (contents as ContentItem<BlogFrontmatter>[]).sort((a, b) => {
    const dateA = new Date(a.frontmatter.publishedDate);
    const dateB = new Date(b.frontmatter.publishedDate);
    return dateB.getTime() - dateA.getTime();
  });
}
