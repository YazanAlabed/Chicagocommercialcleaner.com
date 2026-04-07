'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/industries', label: 'Industries' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      {/* Main Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-white/95 backdrop-blur-sm border-b border-border-light">
        <nav className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-sm font-semibold text-text-primary block -mb-0.5">
                  Chicago Commercial
                </span>
                <span className="font-heading text-xs text-text-muted">
                  Professional Cleaning
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:877-322-8833"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-sm font-medium">
                  877-322-8833
                </span>
              </a>
              <Link href="/get-a-quote" className="btn-cta">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-text-secondary hover:text-primary transition-colors cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-text-primary/5"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-16 left-4 right-4 bg-bg-white rounded-xl shadow-lg border border-border-light overflow-hidden">
            <nav className="p-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-text-secondary hover:text-primary hover:bg-primary-bg rounded-lg font-heading font-medium transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-border-light my-4" />

              <a
                href="tel:877-322-8833"
                className="flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-primary transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-sm">877-322-8833</span>
              </a>

              <Link href="/get-a-quote" onClick={() => setIsOpen(false)}>
                <div className="mt-3 btn-cta w-full text-center">
                  Get Free Quote
                </div>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-16 lg:h-20" />
    </>
  );
}