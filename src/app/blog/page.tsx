import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog | Chicago Commercial Cleaner',
  description:
    'Expert tips on commercial cleaning, office maintenance, and facility management for Chicago businesses.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              Chicago Commercial Cleaning Blog
            </h1>
            <p className="text-lg text-[#64748B]">
              Expert advice on commercial cleaning, facility management, and
              maintaining a healthy workplace for Chicago businesses.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-[#E2E8F0] hover:border-[#0891B2] hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-[#64748B] mb-3">
                      <span>{post.frontmatter.category}</span>
                      <span>•</span>
                      <span>{post.frontmatter.readTime} read</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#164E63] mb-2 group-hover:text-[#0891B2] transition-colors">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-[#64748B] text-sm line-clamp-2">
                      {post.frontmatter.description}
                    </p>
                    <p className="text-sm text-[#64748B] mt-4">
                      {new Date(
                        post.frontmatter.publishedDate
                      ).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#64748B]">
                Blog posts coming soon! Check back for expert cleaning tips and
                advice.
              </p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
