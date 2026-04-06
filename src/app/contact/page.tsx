import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Chicago Commercial Cleaner',
  description:
    'Get in touch with Chicago Commercial Cleaner. Phone, email, or visit us. Free quotes available.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0891B2]/5 to-[#22C55E]/5 py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#164E63] mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-[#64748B]">
              Have questions? We'd love to hear from you. Get in touch and we'll
              respond as soon as possible.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="tel:877-322-8833"
              className="p-6 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0891B2] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#0891B2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                Phone
              </h3>
              <p className="text-[#64748B]">877-322-8833</p>
            </a>

            <a
              href="mailto:info@chicagocommercialcleaner.com"
              className="p-6 bg-white rounded-xl border border-[#E2E8F0] hover:border-[#0891B2] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#0891B2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                Email
              </h3>
              <p className="text-[#64748B]">
                info@chicagocommercialcleaner.com
              </p>
            </a>

            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0]">
              <div className="w-12 h-12 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#0891B2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                Location
              </h3>
              <p className="text-[#64748B]">180 N Ada, Suite 821\nChicago, IL 60607</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#E2E8F0]">
              <div className="w-12 h-12 bg-[#ECFEFF] rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-[#0891B2]" />
              </div>
              <h3 className="text-lg font-semibold text-[#164E63] mb-2">
                Hours
              </h3>
              <div className="text-[#64748B] text-sm">
                <p>Mon-Fri: 8AM - 6PM</p>
                <p>Sat: 9AM - 2PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
