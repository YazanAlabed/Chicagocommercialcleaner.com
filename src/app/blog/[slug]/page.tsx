import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBlogPost, getAllBlogPosts } from '@/lib/content';
import Container from '@/components/ui/Container';
import ArticleSchema from '@/components/seo/ArticleSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.frontmatter.title} | Chicago Commercial Cleaner`,
    description: post.frontmatter.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <>
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        url={`https://chicagocommercialcleaner.com/blog/${slug}`}
        author={frontmatter.author}
        publishedDate={frontmatter.publishedDate}
        modifiedDate={frontmatter.lastUpdated}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: frontmatter.title, url: `/blog/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <nav className="text-sm text-[#64748B] mb-4">
              <Link href="/" className="hover:text-[#0891B2]">
                Home
              </Link>
              {' / '}
              <Link href="/blog" className="hover:text-[#0891B2]">
                Blog
              </Link>
              {' / '}
              <span className="text-[#164E63]">{frontmatter.title}</span>
            </nav>

            <div className="flex items-center gap-2 text-sm text-[#64748B] mb-4">
              <span>{frontmatter.category}</span>
              <span>•</span>
              <span>{frontmatter.readTime} read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164E63] mb-4">
              {frontmatter.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-[#64748B]">
              <span>By {frontmatter.author}</span>
              <span>•</span>
              <time dateTime={frontmatter.publishedDate}>
                {new Date(frontmatter.publishedDate).toLocaleDateString(
                  'en-US',
                  {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  }
                )}
              </time>
              {frontmatter.lastUpdated !== frontmatter.publishedDate && (
                <>
                  <span>•</span>
                  <span>
                    Updated:{' '}
                    {new Date(frontmatter.lastUpdated).toLocaleDateString(
                      'en-US',
                      {
                        month: 'long',
                        year: 'numeric',
                      }
                    )}
                  </span>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <article className="prose prose-lg max-w-none prose-headings:text-[#164E63] prose-a:text-[#0891B2] hover:prose-a:text-[#0E7490]">
              <div
                dangerouslySetInnerHTML={{
                  __html: content
                    .replace(/\n/g, '<br />')
                    .replace(/#{1,6}\s+(.+)/g, (match, p1) => {
                      const hashes = match.match(/#/g);
                      const level = hashes ? hashes.length : 1;
                      return `<h${level}>${p1}</h${level}>`;
                    })
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
                    .replace(/---/g, '<hr />'),
                }}
              />
            </article>

            {/* CTA */}
            <div className="mt-12 p-6 bg-[#ECFEFF] rounded-xl border border-[#0891B2]/20">
              <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                Need Professional Cleaning Services?
              </h3>
              <p className="text-[#64748B] mb-4">
                Get a free, customized quote for your commercial cleaning needs.
              </p>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center text-[#0891B2] font-semibold hover:text-[#0E7490]"
              >
                Get Your Free Quote →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
