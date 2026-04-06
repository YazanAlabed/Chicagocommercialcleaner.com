import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Pricing | Chicago Commercial Cleaner',
  description:
    'Commercial cleaning pricing in Chicago. $0.15-$0.45/sq ft. Get a free, customized quote for your business.',
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              Commercial Cleaning Pricing
            </h1>
            <p className="text-lg text-[#64748B]">
              Transparent pricing for professional cleaning services in
              Chicago. Get a free, customized quote.
            </p>
          </div>
        </Container>
      </section>

      {/* Pricing Table */}
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden">
              <div className="p-6 border-b border-[#E2E8F0] bg-[#ECFEFF]">
                <h2 className="text-xl font-semibold text-[#164E63]">
                  Standard Office Cleaning Rates
                </h2>
              </div>
              <div className="divide-y divide-[#E2E8F0]">
                {[
                  {
                    size: 'Small (1,000-2,500 sq ft)',
                    cost: '$300-$800/month',
                    freq: '2-3x/week',
                  },
                  {
                    size: 'Medium (2,500-5,000 sq ft)',
                    cost: '$800-$1,500/month',
                    freq: '3-5x/week',
                  },
                  {
                    size: 'Large (5,000-10,000 sq ft)',
                    cost: '$1,500-$3,000/month',
                    freq: 'Daily',
                  },
                  {
                    size: 'Enterprise (10,000+ sq ft)',
                    cost: 'Custom quote',
                    freq: 'Custom schedule',
                  },
                ].map((row) => (
                  <div
                    key={row.size}
                    className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-[#164E63]">{row.size}</p>
                      <p className="text-sm text-[#64748B]">
                        Frequency: {row.freq}
                      </p>
                    </div>
                    <p className="text-lg font-semibold text-[#0891B2]">
                      {row.cost}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[#64748B] mt-4 text-center">
              *Pricing varies based on square footage, cleaning frequency, and
              specific services needed.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Types */}
      <section className="py-16 bg-[#F8FAFC]">
        <Container>
          <h2 className="text-2xl font-bold text-[#164E63] mb-8 text-center">
            Service Type Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                service: 'Standard Office Cleaning',
                rate: '$0.15-$0.35/sq ft',
              },
              {
                service: 'Medical Facility Cleaning',
                rate: '$0.25-$0.55/sq ft',
              },
              {
                service: 'Restaurant Cleaning',
                rate: '$0.20-$0.40/sq ft',
              },
              {
                service: 'Warehouse Cleaning',
                rate: '$0.10-$0.25/sq ft',
              },
              {
                service: 'Post-Construction',
                rate: '$0.30-$0.60/sq ft',
              },
              {
                service: 'Floor Care/Waxing',
                rate: '$0.15-$0.35/sq ft',
              },
            ].map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#E2E8F0]"
              >
                <span className="text-[#164E63]">{item.service}</span>
                <span className="font-semibold text-[#0891B2]">{item.rate}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#164E63] mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-[#64748B] mb-6">
              Every business is different. Contact us for a free, no-obligation
              quote tailored to your specific needs.
            </p>
            <Link href="/get-a-quote">
              <Button variant="primary" size="lg">Request Quote</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
