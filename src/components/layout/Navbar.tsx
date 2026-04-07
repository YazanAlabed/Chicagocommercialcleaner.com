'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-cream/95 backdrop-blur-md border-b border-border-light">
        <nav className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-accent-terracotta flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="font-display text-white text-xl font-semibold">
                  CC
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-xs uppercase tracking-wider text-fg-muted block">
                  Commercial Cleaning
                </span>
                <span className="font-display text-fg-primary text-lg">
                  Chicago
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
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:877-322-8833"
                className="flex items-center gap-2 text-fg-secondary hover:text-accent-terracotta transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-sm">
                  877-322-8833
                </span>
              </a>
              <Link href="/get-a-quote" className="btn-primary">
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-fg-primary hover:text-accent-terracotta transition-colors"
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
            className="absolute inset-0 bg-fg-primary/10 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-bg-surface rounded-2xl shadow-xl border border-border-light overflow-hidden">
            <nav className="p-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-fg-primary hover:bg-bg-warm hover:text-accent-terracotta rounded-xl font-heading font-medium transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-border my-4" />

              <a
                href="tel:877-322-8833"
                className="flex items-center gap-3 px-4 py-3 text-fg-secondary hover:text-accent-terracotta transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-sm">877-322-8833</span>
              </a>

              <Link href="/get-a-quote" onClick={() => setIsOpen(false)}>
                <div className="mt-4 btn-primary w-full text-center">
                  Get a Quote
                </div>
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}