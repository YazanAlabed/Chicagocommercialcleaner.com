import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-fg-primary mt-auto">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-accent-terracotta flex items-center justify-center">
                <span className="font-display text-white text-xl font-semibold">
                  CC
                </span>
              </div>
              <div>
                <span className="font-heading text-xs uppercase tracking-wider text-fg-muted block">
                  Commercial Cleaning
                </span>
                <span className="font-display text-bg-cream text-lg">
                  Chicago
                </span>
              </div>
            </div>

            <p className="text-fg-muted text-sm leading-relaxed mb-8 max-w-sm">
              Premium commercial cleaning services across Chicagoland.
              Licensed, bonded, insured. We treat every space with care.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-fg-muted hover:text-accent-terracotta-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-fg-muted/30 flex items-center justify-center group-hover:border-accent-terracotta transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.phone}
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-fg-muted hover:text-accent-terracotta-light transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-fg-muted/30 flex items-center justify-center group-hover:border-accent-terracotta transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-fg-muted">
                <div className="w-8 h-8 rounded-full border border-fg-muted/30 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="font-heading text-sm">
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-display text-bg-cream mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-fg-muted hover:text-bg-cream text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-display text-bg-cream mb-5">
              Locations
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.chicagoNeighborhoods.slice(0, 5).map((area) => (
                <li key={area}>
                  <Link
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-fg-muted hover:text-bg-cream text-sm transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-display text-bg-cream mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/about', label: 'About' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-fg-muted hover:text-bg-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center gap-2 bg-accent-terracotta text-white px-5 py-2.5 rounded-full font-heading text-sm font-semibold hover:bg-accent-terracotta-light transition-colors"
            >
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-fg-muted/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-fg-muted text-xs">
              © {currentYear} Chicago Commercial Cleaner. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-fg-muted hover:text-bg-cream text-xs transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-fg-muted hover:text-bg-cream text-xs transition-colors"
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