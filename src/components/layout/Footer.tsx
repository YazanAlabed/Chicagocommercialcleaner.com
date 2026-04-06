import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { SERVICES, SERVICE_AREAS, BUSINESS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-base mt-auto">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(226, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(226, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-accent-primary/50 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-accent-primary transform rotate-45" />
                <div className="absolute inset-2 bg-accent-primary transform rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-bg-base text-lg font-bold">
                  CC
                </span>
              </div>
              <div>
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-fg-muted block">
                  Commercial Cleaning
                </span>
                <span className="font-display text-fg-primary text-xl tracking-tight">
                  CHICAGO
                </span>
              </div>
            </div>

            <p className="font-body text-fg-secondary text-sm leading-relaxed mb-8 max-w-sm">
              Industrial-grade cleaning precision. Professional commercial cleaning
              services across Chicagoland. Licensed, bonded, insured.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-fg-secondary hover:text-accent-primary transition-colors group"
              >
                <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-heading text-xs uppercase tracking-wider">
                  {BUSINESS.phone}
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-fg-secondary hover:text-accent-primary transition-colors group"
              >
                <div className="w-8 h-8 border border-border flex items-center justify-center group-hover:border-accent-primary transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-heading text-xs uppercase tracking-wider">
                  {BUSINESS.email}
                </span>
              </a>
              <div className="flex items-center gap-3 text-fg-secondary">
                <div className="w-8 h-8 border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-heading text-xs uppercase tracking-wider">
                  {BUSINESS.address.city}, {BUSINESS.address.state}
                </span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-accent-primary mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service, idx) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-body text-fg-secondary hover:text-fg-primary text-sm transition-colors group flex items-center gap-2"
                  >
                    <span className="text-fg-muted group-hover:text-accent-primary transition-colors">
                      0{idx + 1}
                    </span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Column */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-accent-primary mb-6">
              Locations
            </h4>
            <ul className="space-y-3">
              {SERVICE_AREAS.chicagoNeighborhoods.slice(0, 5).map((area, idx) => (
                <li key={area}>
                  <Link
                    href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-body text-fg-secondary hover:text-fg-primary text-sm transition-colors group flex items-center gap-2"
                  >
                    <span className="text-fg-muted group-hover:text-accent-primary transition-colors">
                      0{idx + 1}
                    </span>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-heading text-xs uppercase tracking-[0.2em] text-accent-primary mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/reviews', label: 'Reviews' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-fg-secondary hover:text-fg-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex items-center gap-2 bg-accent-primary text-bg-base px-6 py-3 font-heading text-xs uppercase tracking-wider hover:bg-fg-primary transition-colors"
            >
              Get Quote <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-fg-muted text-xs">
              © {currentYear} Chicago Commercial Cleaner. Industrial precision cleaning.
            </p>
            <div className="flex gap-8">
              <Link
                href="/privacy-policy"
                className="font-body text-fg-muted hover:text-fg-secondary text-xs transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="font-body text-fg-muted hover:text-fg-secondary text-xs transition-colors"
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