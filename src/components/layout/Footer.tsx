import Link from 'next/link';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary mt-auto">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading text-sm font-semibold text-bg-white block -mb-0.5">
                  Chicago Commercial
                </span>
                <span className="font-heading text-xs text-text-muted">
                  Professional Cleaning
                </span>
              </div>
            </div>

            <p className="text-text-muted text-sm leading-relaxed mb-6 max-w-sm">
              Professional commercial cleaning services across Chicagoland.
              Licensed, bonded, insured. Your trusted partner for clean spaces.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge">Licensed</span>
              <span className="badge badge-success">Insured</span>
              <span className="badge">Bonded</span>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-text-muted hover:text-primary-light transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.phone}
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-text-muted hover:text-primary-light transition-colors cursor-pointer group"
              >
                <div className="w-8 h-8 rounded-lg bg-bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-text-muted">
                <div className="w-8 h-8 rounded-lg bg-bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-bg-white mb-4 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-text-muted hover:text-bg-white text-sm transition-colors cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-bg-white mb-4 uppercase tracking-wide">
              Locations
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.chicagoNeighborhoods.slice(0, 5).map((area) => (
                <li key={area}>
                  <Link
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-muted hover:text-bg-white text-sm transition-colors cursor-pointer"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-bg-white mb-4 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
                { href: '/get-a-quote', label: 'Get a Quote' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-bg-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bg-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-xs">
              © {currentYear} Chicago Commercial Cleaner. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-text-muted hover:text-bg-white text-xs transition-colors cursor-pointer"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-text-muted hover:text-bg-white text-xs transition-colors cursor-pointer"
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