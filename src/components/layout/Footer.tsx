import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#0891B2] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <span className="font-semibold text-lg">Chicago Commercial Cleaner</span>
            </div>
            <p className="text-[#94A3B8] text-sm mb-4">
              Professional commercial cleaning services across Chicagoland.
              Licensed, bonded, insured & eco-friendly.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{BUSINESS.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-[#94A3B8] hover:text-[#22D3EE] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-2 text-[#94A3B8]">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Locations</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.chicagoNeighborhoods.slice(0, 5).map((area) => (
                <li key={area}>
                  <Link
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/get-a-quote"
                  className="text-[#94A3B8] hover:text-[#22D3EE] text-sm transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-sm">
              © {currentYear} Chicago Commercial Cleaner. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-[#64748B] hover:text-[#22D3EE] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-[#64748B] hover:text-[#22D3EE] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
