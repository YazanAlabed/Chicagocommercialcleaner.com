import { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { SERVICES } from '@/lib/constants';
import { Building2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industries We Serve | Chicago Commercial Cleaner',
  description:
    'Specialized commercial cleaning services for offices, medical facilities, restaurants, warehouses, and more industries in Chicago.',
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              Industries We Serve
            </h1>
            <p className="text-lg text-[#64748B]">
              Specialized cleaning solutions tailored to the unique needs of
              your industry. From HIPAA-compliant medical facility cleaning to
              food-safe restaurant sanitation.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Offices',
                description:
                  'Daily cleaning and maintenance for corporate offices, co-working spaces, and professional suites.',
                slug: 'offices',
              },
              {
                title: 'Medical Facilities',
                description:
                  'HIPAA-compliant cleaning for clinics, dental offices, and healthcare facilities.',
                slug: 'medical-facilities',
              },
              {
                title: 'Restaurants',
                description:
                  'Health code-compliant cleaning for kitchens, dining areas, and food service spaces.',
                slug: 'restaurants',
              },
              {
                title: 'Warehouses',
                description:
                  'Industrial cleaning for distribution centers, storage facilities, and logistics hubs.',
                slug: 'warehouses',
              },
              {
                title: 'Retail Stores',
                description:
                  'Customer-ready cleaning for retail spaces, showrooms, and shopping centers.',
                slug: 'retail-stores',
              },
              {
                title: 'Schools & Universities',
                description:
                  'Safe, thorough cleaning for educational institutions of all sizes.',
                slug: 'schools-universities',
              },
              {
                title: 'Gyms & Fitness Centers',
                description:
                  'Sanitation-focused cleaning for workout areas, locker rooms, and equipment.',
                slug: 'gyms-fitness-centers',
              },
              {
                title: 'Churches & Religious Facilities',
                description:
                  'Respectful, thorough cleaning for places of worship and religious institutions.',
                slug: 'churches-religious-facilities',
              },
            ].map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group bg-white rounded-xl p-6 border border-[#E2E8F0] hover:border-[#0891B2] hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0891B2] transition-colors">
                  <Building2 className="w-6 h-6 text-[#0891B2] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                  {industry.title}
                </h3>
                <p className="text-[#64748B] text-sm">{industry.description}</p>
                <span className="inline-flex items-center text-[#0891B2] font-medium text-sm mt-4 group-hover:text-[#0E7490]">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
