import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getLocationContent, getAllLocations } from '@/lib/content';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const locations = await getAllLocations();
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = await getLocationContent(slug);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  return {
    title: `${location.frontmatter.title} | Chicago Commercial Cleaner`,
    description: location.frontmatter.description,
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = await getLocationContent(slug);

  if (!location) {
    notFound();
  }

  const { frontmatter, content } = location;
  const nearby = frontmatter.nearbyLocations || [];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <nav className="text-sm text-[#64748B] mb-4">
              <Link href="/" className="hover:text-[#0891B2]">
                Home
              </Link>
              {' / '}
              <Link href="/locations" className="hover:text-[#0891B2]">
                Locations
              </Link>
              {' / '}
              <span className="text-[#164E63]">{frontmatter.neighborhood}</span>
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

              {/* Nearby Locations */}
              {nearby.length > 0 && (
                <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
                  <h3 className="text-lg font-semibold text-[#164E63] mb-4">
                    Nearby Service Areas
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {nearby.map((nearbySlug: string) => (
                      <Link
                        key={nearbySlug}
                        href={`/locations/${nearbySlug}`}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-[#ECFEFF] text-[#0891B2] rounded-lg hover:bg-[#0891B2] hover:text-white transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        <span className="capitalize">
                          {nearbySlug.replace(/-/g, ' ')}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0F172A] rounded-xl p-6 text-white sticky top-24">
                <h3 className="text-xl font-semibold mb-4">
                  Get Your Free Quote in {frontmatter.neighborhood}
                </h3>
                <p className="text-[#94A3B8] mb-6">
                  We provide commercial cleaning services throughout{' '}
                  {frontmatter.neighborhood}. Get a customized quote for your
                  business.
                </p>

                <Link href="/get-a-quote">
                  <Button variant="secondary" className="w-full">
                    Request Quote
                  </Button>
                </Link>

                <hr className="my-6 border-[#1E293B]" />

                <div className="space-y-4">
                  <a
                    href="tel:877-322-8833"
                    className="flex items-center gap-3 text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#0891B2]/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span>877-322-8833</span>
                  </a>
                </div>

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
