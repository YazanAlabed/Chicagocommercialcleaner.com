'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';

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
      <header className="fixed top-4 left-4 right-4 z-50">
        <nav className="bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-[#E2E8F0] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0891B2] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <span className="font-semibold text-[#164E63] text-lg hidden sm:block">
              Chicago Commercial Cleaner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#64748B] hover:text-[#0891B2] font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:877-322-8833"
              className="flex items-center gap-2 text-[#164E63] hover:text-[#0891B2] font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Link href="/get-a-quote">
              <Button variant="primary">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#64748B] hover:text-[#0891B2]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-[88px] left-4 right-4 bg-white rounded-xl shadow-lg border border-[#E2E8F0] p-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[#164E63] hover:bg-[#ECFEFF] hover:text-[#0891B2] rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-[#E2E8F0]" />
              <a
                href="tel:877-322-8833"
                className="flex items-center gap-2 px-4 py-3 text-[#164E63] hover:bg-[#ECFEFF] rounded-lg font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
              <Link href="/get-a-quote" onClick={() => setIsOpen(false)}>
                <Button variant="primary" className="w-full mt-2">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-[96px]" />
    </>
  );
}
