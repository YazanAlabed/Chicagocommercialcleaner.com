import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceContent, getAllServices } from '@/lib/content';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import FAQSchema from '@/components/seo/FAQSchema';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceContent(slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.frontmatter.title} | Chicago Commercial Cleaner`,
    description: service.frontmatter.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceContent(slug);

  if (!service) {
    notFound();
  }

  const { frontmatter, content } = service;
  const faqs = frontmatter.faqs || [];

  return (
    <>
      {faqs.length > 0 && (
        <FAQSchema
          faqs={faqs.map((faq) => ({
            question: faq.q,
            answer: faq.a,
          }))}
        />
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <nav className="text-sm text-[#64748B] mb-4">
              <Link href="/" className="hover:text-[#0891B2]">
                Home
              </Link>
              {' / '}
              <Link href="/services" className="hover:text-[#0891B2]">
                Services
              </Link>
              {' / '}
              <span className="text-[#164E63]">{frontmatter.serviceType}</span>
            </nav>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164E63] mb-4">
              {frontmatter.h1}
            </h1>

            {frontmatter.lastUpdated && (
              <p className="text-sm text-[#64748B] mb-4">
                Last updated:{' '}
                {new Date(frontmatter.lastUpdated).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            )}

            <p className="text-lg text-[#64748B]">{frontmatter.description}</p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2">
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0F172A] rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-semibold mb-4">
                  Get Your Free Quote
                </h3>
                <p className="text-[#94A3B8] mb-6">
                  Ready for professional {frontmatter.serviceType.toLowerCase()}?
                  Get a customized quote for your business.
                </p>

                {frontmatter.priceRange && (
                  <div className="mb-6">
                    <p className="text-sm text-[#94A3B8] mb-1">Starting from:</p>
                    <p className="text-2xl font-bold text-[#22C55E]">
                      {frontmatter.priceRange}
                    </p>
                  </div>
                )}

                <Link href="/get-a-quote">
                  <Button variant="secondary" className="w-full">
                    Request Quote
                  </Button>
                </Link>

                <hr className="my-6 border-[#1E293B]" />

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span>Free, no-obligation quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span>1-hour response time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#22C55E]">✓</span>
                    <span>Licensed & insured</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
