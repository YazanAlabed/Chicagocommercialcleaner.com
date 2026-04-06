'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';

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
      {/* Top accent bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-primary to-transparent z-[101]" />

      {/* Main Navbar */}
      <header className="nav-industrial">
        <nav className="container-industrial">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Industrial Logo Mark */}
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 border-2 border-accent-primary transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-2 bg-accent-primary transform rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center font-display text-bg-base text-lg font-bold">
                  CC
                </span>
              </div>
              <div className="hidden sm:block">
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-fg-muted block -mb-1">
                  Commercial Cleaning
                </span>
                <span className="font-display text-fg-primary text-lg tracking-tight">
                  CHICAGO
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
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:877-322-8833"
                className="flex items-center gap-2 text-fg-secondary hover:text-accent-primary transition-colors group"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-xs uppercase tracking-wider">
                  877-322-8833
                </span>
              </a>
              <Link href="/get-a-quote" className="btn-industrial">
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-fg-primary hover:text-accent-primary transition-colors"
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
        <div className="fixed inset-0 z-[99] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-bg-base/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-20 left-4 right-4 bg-bg-surface border border-border">
            {/* Accent top line */}
            <div className="h-[2px] bg-gradient-to-r from-accent-primary via-accent-tertiary to-accent-primary" />

            <nav className="p-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-heading text-sm uppercase tracking-wider text-fg-secondary hover:text-accent-primary hover:bg-bg-card px-4 py-3 transition-all"
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <span className="text-accent-primary mr-3">0{idx + 1}</span>
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="h-px bg-border my-6" />

              <a
                href="tel:877-322-8833"
                className="flex items-center gap-3 px-4 py-3 text-fg-secondary hover:text-accent-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-heading text-xs uppercase tracking-wider">
                  877-322-8833
                </span>
              </a>

              <Link href="/get-a-quote" onClick={() => setIsOpen(false)}>
                <div className="mt-4 btn-industrial w-full text-center">
                  <span className="flex items-center justify-center gap-2">
                    Get Quote <ArrowRight className="w-4 h-4" />
                  </span>
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