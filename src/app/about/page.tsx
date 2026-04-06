import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Shield, BadgeCheck, Clock, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Chicago Commercial Cleaner',
  description:
    'Chicago Commercial Cleaner provides professional commercial cleaning services. Licensed, bonded, insured & eco-friendly.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              About Chicago Commercial Cleaner
            </h1>
            <p className="text-lg text-[#64748B]">
              Your trusted partner for professional commercial cleaning
              services across Chicagoland.
            </p>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-16 border-b border-[#E2E8F0]">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-[#164E63] mb-4">Our Story</h2>
            <div className="prose prose-lg text-[#64748B]">
              <p className="mb-4">
                Chicago Commercial Cleaner was founded with a simple mission: to
                provide exceptional commercial cleaning services that businesses
                can rely on.
              </p>
              <p className="mb-4">
                We understand that a clean workplace isn't just about appearance
                — it's about creating a healthy environment where your employees
                can thrive and your business can succeed.
              </p>
              <p>
                Today, we serve businesses across Chicago and the surrounding
                suburbs, from downtown offices in the Loop to warehouses in the
                industrial corridors. Our commitment to quality, reliability,
                and customer satisfaction remains unchanged.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 border-b border-[#E2E8F0]">
        <Container>
          <h2 className="text-2xl font-bold text-[#164E63] mb-8">
            Why Businesses Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description:
                  'Full coverage with $2M general liability insurance. Your business is protected.',
              },
              {
                icon: BadgeCheck,
                title: 'Quality Guarantee',
                description:
                  'Not satisfied? We\'ll make it right. Your satisfaction is our priority.',
              },
              {
                icon: Clock,
                title: 'Reliable Service',
                description:
                  'Same team, same schedule, every time. Count on us to show up.',
              },
              {
                icon: Leaf,
                title: 'Eco-Friendly',
                description:
                  'Green Seal certified products that are safe for people and the planet.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-xl border border-[#E2E8F0]"
              >
                <div className="w-10 h-10 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-[#0891B2]" />
                </div>
                <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#64748B]">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="bg-[#0F172A] rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">
              Get a free, customized quote for your commercial cleaning needs.
            </p>
            <a
              href="/get-a-quote"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#22C55E] text-[#0F172A] font-semibold rounded-lg hover:bg-[#16A34A] transition-colors"
            >
              Get Your Free Quote
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
