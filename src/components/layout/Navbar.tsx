'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/services', label: 'Services' },
    { href: '/locations', label: 'Locations' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <nav className="container">
          <div className="flex items-center justify-between h-14">
            {/* Logo - Just Text */}
            <Link href="/" className="font-semibold text-lg tracking-tight">
              Chicago Cleaner
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA - Text Only */}
            <div className="hidden md:block">
              <Link
                href="/get-a-quote"
                className="text-sm font-medium text-accent hover:opacity-80 transition-opacity"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-sm font-medium"
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-14">
          <nav className="container py-12">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-semibold"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-6" />
              <Link
                href="/get-a-quote"
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold text-accent"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}

      <div className="h-14" />
    </>
  );
}