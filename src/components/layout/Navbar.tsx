'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Phone, X, Menu, ChevronRight } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={false}
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top: {
            backgroundColor: 'rgba(255,255,255,0)',
            backdropFilter: 'blur(0px)',
            borderBottomColor: 'rgba(226,232,240,0)',
            boxShadow: '0 0 0 0 rgba(0,0,0,0)',
          },
          scrolled: {
            backgroundColor: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(20px)',
            borderBottomColor: 'rgba(226,232,240,1)',
            boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
          },
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ borderBottom: '1px solid transparent' }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary-dark transition-colors duration-200">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 13V7l5-4 5 4v6H10v-3H6v3H3z" fill="white" />
                </svg>
              </div>
              <span className="font-semibold text-[15px] tracking-tight text-foreground">
                Chicago Commercial Cleaner
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-text-muted hover:text-foreground hover:bg-slate-100 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:877-322-8833"
                className="flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-3.5 h-3.5" />
                877-322-8833
              </a>
              <Link
                href="/get-a-quote"
                className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Free Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-lg border border-surface-border flex items-center justify-center text-foreground cursor-pointer"
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              className="fixed top-0 right-0 bottom-0 z-40 w-80 bg-white shadow-2xl md:hidden flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-surface-border">
                <span className="font-semibold text-sm">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg border border-surface-border flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <nav className="flex-1 p-5 flex flex-col gap-1 overflow-y-auto">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between px-3 py-3 rounded-xl text-base font-medium text-foreground hover:bg-slate-50 transition-colors group"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-text-subtle group-hover:text-primary transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t border-surface-border flex flex-col gap-3">
                <a
                  href="tel:877-322-8833"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-surface-border rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  877-322-8833
                </a>
                <Link
                  href="/get-a-quote"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
