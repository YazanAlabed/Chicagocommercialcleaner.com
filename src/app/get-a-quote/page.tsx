import type { Metadata } from 'next';
import QuoteForm from '@/components/forms/QuoteForm';
import Container from '@/components/ui/Container';
import { Shield, BadgeCheck, Clock, Leaf } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get a Free Quote | Chicago Commercial Cleaner',
  description:
    'Get a free, no-obligation quote for commercial cleaning services in Chicago. Licensed, bonded, insured & eco-friendly. Response within 1 hour.',
};

const trustSignals = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Full coverage for your peace of mind',
  },
  {
    icon: BadgeCheck,
    title: 'Free Estimates',
    description: 'No obligation, detailed quotes',
  },
  {
    icon: Clock,
    title: '1-Hour Response',
    description: 'Quick reply guaranteed',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Green cleaning products',
  },
];

export default function GetAQuotePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#164E63] mb-4">
              Get Your Free Commercial Cleaning Quote
            </h1>
            <p className="text-lg text-[#64748B] mb-2">
              Professional cleaning services tailored to your business needs.
            </p>
            <p className="text-[#0891B2] font-medium">
              Response guaranteed within 1 business hour.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6 md:p-8">
                <h2 className="text-xl font-semibold text-[#164E63] mb-6">
                  Request Your Free Quote
                </h2>
                <QuoteForm />
              </div>
            </div>

            {/* Trust Signals Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-[#0F172A] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-6">Why Choose Us?</h3>
                <div className="space-y-5">
                  {trustSignals.map((signal) => (
                    <div key={signal.title} className="flex gap-3">
                      <div className="flex-shrink-0 w-10 h-10 bg-[#0891B2]/20 rounded-lg flex items-center justify-center">
                        <signal.icon className="w-5 h-5 text-[#22D3EE]" />
                      </div>
                      <div>
                        <h4 className="font-medium">{signal.title}</h4>
                        <p className="text-sm text-[#94A3B8]">
                          {signal.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 bg-[#ECFEFF] rounded-xl p-6 border border-[#0891B2]/20">
                <h3 className="text-lg font-semibold text-[#164E63] mb-3">
                  Prefer to Call?
                </h3>
                <p className="text-[#64748B] mb-4">
                  Speak directly with our team for immediate assistance.
                </p>
                <a
                  href="tel:630-349-2862"
                  className="inline-flex items-center gap-2 text-[#0891B2] font-semibold hover:text-[#0E7490]"
                >
                  Call 630-349-2862
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
