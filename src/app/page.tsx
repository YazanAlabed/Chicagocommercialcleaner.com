'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  type Variants,
} from 'framer-motion';
import {
  Shield,
  MapPin,
  Leaf,
  BadgeCheck,
  Building2,
  ArrowRight,
  Star,
  Phone,
  Clock,
  CheckCircle2,
  Sparkles,
  HeartPulse,
  Hammer,
  Utensils,
  Warehouse,
  Factory,
  ChevronRight,
} from 'lucide-react';
import { SERVICES, TRUST_BADGES } from '@/lib/constants';

/* ─── Animation variants ──────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const stagger = (delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: delay } },
});

/* ─── Icon map ────────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield, MapPin, Leaf, BadgeCheck, Building2,
  Sparkles, Hammer, HeartPulse, Utensils, Warehouse, Factory,
};

/* ─── Reusable animated section wrapper ──── */
function AnimatedSection({ children, className = '', delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      variants={stagger(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stat counter card ───────────────────── */
function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
        className="text-3xl font-bold text-foreground tracking-tight"
      >
        {value}
      </motion.span>
      <span className="text-sm text-text-muted mt-1 font-medium">{label}</span>
    </motion.div>
  );
}

/* ─── Service card ────────────────────────── */
function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  const Icon = iconMap[service.icon] || Building2;
  return (
    <motion.div variants={fadeUp} transition={{ delay: index * 0.05 }}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col gap-4 p-6 bg-white rounded-2xl border border-surface-border
          hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer h-full"
      >
        <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">
            {service.name}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed">
            Professional {service.name.toLowerCase()} for Chicago businesses. Licensed, bonded & eco-friendly.
          </p>
        </div>
        <div className="flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Learn more <ChevronRight className="w-3 h-3" />
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Testimonial card ────────────────────── */
const testimonials = [
  {
    name: 'Marcus T.',
    role: 'Office Manager, River North',
    rating: 5,
    text: 'Switched from our previous cleaner and the difference was immediate. The team is professional, consistent, and actually responds when we have special requests.',
  },
  {
    name: 'Priya K.',
    role: 'Facilities Director, West Loop Tech Co.',
    rating: 5,
    text: 'We manage 40,000 sq ft across two floors. Chicago Commercial Cleaner handles everything without us having to micromanage. That peace of mind is priceless.',
  },
  {
    name: 'James R.',
    role: 'Owner, Schaumburg Medical Clinic',
    rating: 5,
    text: 'Medical-grade cleanliness is non-negotiable for us. They understand HIPAA protocols and health code requirements. Highly recommend for any healthcare facility.',
  },
];

/* ─── Main page ───────────────────────────── */
export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ═══════════════════════════════════════
          HERO
          ═══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-cyan-50/60 to-white">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(8,145,178,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(8,145,178,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Ambient blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-300/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full py-20 lg:py-28"
        >
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left content */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={stagger(0.1)}
                className="lg:col-span-7 text-center lg:text-left"
              >
                {/* Badge */}
                <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Serving Chicagoland Since 2014
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={fadeUp} className="mb-6 text-foreground">
                  Chicago&apos;s Most{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-primary">Trusted</span>
                    <motion.svg
                      className="absolute -bottom-1 left-0 w-full text-primary/25"
                      viewBox="0 0 200 8"
                      preserveAspectRatio="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
                    >
                      <motion.path
                        d="M0 6 Q 50 1 100 5 T 200 4"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </span>{' '}
                  Commercial Cleaner
                </motion.h1>

                {/* Subheadline */}
                <motion.p variants={fadeUp} className="text-lg lg:text-xl text-text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Licensed, bonded & insured. We clean offices, medical facilities, warehouses, and restaurants across Chicagoland with precision and care.
                </motion.p>

                {/* Trust micro-checks */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-text-muted mb-10">
                  {['Eco-friendly products', 'Free estimates', '60-min response'].map((item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0" />
                      {item}
                    </span>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link href="/get-a-quote">
                    <motion.span
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-base font-semibold rounded-xl shadow-md hover:bg-primary-dark hover:shadow-lg transition-all duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Get Your Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                  <a href="tel:877-322-8833">
                    <motion.span
                      className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-foreground text-base font-semibold rounded-xl border border-surface-border shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-200 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      877-322-8833
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: hero image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 relative"
              >
                {/* Floating trust card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-xl border border-surface-border p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-cta/10 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-cta fill-cta" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">4.9 / 5.0 Rating</p>
                    <p className="text-xs text-text-muted">200+ Google reviews</p>
                  </div>
                </motion.div>

                {/* Floating response card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-xl border border-surface-border p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">60-Min Response</p>
                    <p className="text-xs text-text-muted">Mon–Sat, 8 AM–6 PM</p>
                  </div>
                </motion.div>

                {/* Image frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                  <Image
                    src="/images/hero/hero-commercial-cleaning.png"
                    alt="Professional commercial cleaning team at work in Chicago"
                    width={600}
                    height={680}
                    className="object-cover w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          TRUST BAR
          ═══════════════════════════════════════ */}
      <section className="py-6 bg-white border-y border-surface-border">
        <div className="container">
          <AnimatedSection className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => {
              const Icon = iconMap[badge.icon] || Shield;
              return (
                <motion.div
                  key={badge.text}
                  variants={fadeUp}
                  className="flex items-center gap-3 justify-center py-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{badge.text}</span>
                </motion.div>
              );
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS
          ═══════════════════════════════════════ */}
      <section className="py-20 bg-surface">
        <div className="container">
          <AnimatedSection className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border rounded-2xl overflow-hidden shadow-sm">
            {[
              { value: '500+', label: 'Businesses Served', icon: Building2 },
              { value: '10+', label: 'Years in Chicago', icon: MapPin },
              { value: '4.9★', label: 'Average Rating', icon: Star },
              { value: '60min', label: 'Quote Response', icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="bg-white">
                <StatCard {...stat} />
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES GRID
          ═══════════════════════════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              What We Clean
            </motion.div>
            <motion.h2 variants={fadeUp} className="mb-4">
              Services Built for{' '}
              <span className="text-primary">Chicago Business</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-text-muted max-w-xl mx-auto">
              From Loop high-rises to Schaumburg warehouses — we have a specialized protocol for every facility type.
            </motion.p>
          </AnimatedSection>

          <AnimatedSection className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.slice(0, 9).map((service, idx) => (
              <ServiceCard key={service.slug} service={service} index={idx} />
            ))}
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center mt-10"
          >
            <Link href="/services">
              <motion.span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-border text-sm font-semibold text-foreground hover:border-primary/40 hover:bg-primary/4 transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View all 13 services
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WHY US — Feature blocks
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-cyan-50/40 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <AnimatedSection>
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                Why Chicago Businesses Choose Us
              </motion.div>
              <motion.h2 variants={fadeUp} className="mb-6">
                Cleaning Done Right,{' '}
                <span className="text-primary">Every Time</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-text-muted text-lg mb-10 leading-relaxed">
                We&apos;re not a call-center franchise. We&apos;re a locally-owned Chicago operation with dedicated account managers, trained crews, and a satisfaction guarantee.
              </motion.p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: Shield, title: 'Fully Licensed, Bonded & Insured', desc: '$2M general liability coverage. Your facility is protected on every visit.' },
                  { icon: Leaf, title: 'EPA-Approved Eco-Friendly Products', desc: 'Green Seal certified chemicals that are safe for your team, clients, and the environment.' },
                  { icon: BadgeCheck, title: 'Dedicated Account Manager', desc: 'One point of contact. No runaround. Direct line to your account manager 7 days a week.' },
                  { icon: Clock, title: 'Flexible Scheduling', desc: 'Day, evening, or weekend shifts. We work around your business hours, not the other way around.' },
                ].map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: visual proof */}
            <AnimatedSection>
              <motion.div
                variants={fadeIn}
                className="relative rounded-3xl overflow-hidden bg-white border border-surface-border shadow-lg aspect-[4/5]"
              >
                <Image
                  src="/images/hero/hero-commercial-cleaning.png"
                  alt="Chicago commercial cleaning team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-lg border border-surface-border">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                          {['A', 'B', 'C'][n - 1]}
                        </div>
                      ))}
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    &ldquo;Best commercial cleaner we&apos;ve used in 8 years. Shows up, does the job, zero drama.&rdquo;
                  </p>
                  <p className="text-xs font-semibold text-foreground mt-2">— David L., Loop Property Manager</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold tracking-wider uppercase mb-4 border border-amber-200">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              Client Reviews
            </motion.div>
            <motion.h2 variants={fadeUp}>What Chicago Businesses Say</motion.h2>
          </AnimatedSection>

          <AnimatedSection className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-surface-border hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-text-muted leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="text-center mt-10"
          >
            <Link href="/reviews" className="text-sm font-medium text-primary hover:underline">
              Read all 200+ reviews →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CTA BANNER
          ═══════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-foreground">
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/80 via-foreground to-foreground" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cta/10 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-semibold tracking-wider uppercase mb-6 border border-white/20">
              Ready to Get Started?
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-white mb-6">
              Get a Free Quote in{' '}
              <span className="text-cyan-300">60 Minutes</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              Tell us about your space. We&apos;ll respond with a custom cleaning plan and transparent pricing. No obligation, no pushy sales.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/get-a-quote">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-base font-semibold rounded-xl shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-200 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Request a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <a href="tel:877-322-8833">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white text-base font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.span>
              </a>
            </motion.div>
            <motion.p variants={fadeUp} className="text-slate-500 text-sm mt-6">
              Typical response time: under 60 minutes during business hours.
            </motion.p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICE AREAS STRIP
          ═══════════════════════════════════════ */}
      <section className="py-12 bg-surface border-t border-surface-border">
        <div className="container">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2 justify-center">
            <span className="text-xs font-semibold text-text-subtle uppercase tracking-wider mr-3">We Serve:</span>
            {[
              'The Loop', 'River North', 'West Loop', 'Streeterville', 'Gold Coast',
              'Schaumburg', 'Naperville', 'Oak Brook', 'Evanston', 'Arlington Heights',
              'Skokie', 'Downers Grove', 'Orland Park', 'Elk Grove Village',
            ].map((area, i, arr) => (
              <React.Fragment key={area}>
                <Link href={`/locations/${area.toLowerCase().replace(/ /g, '-')}`} className="text-xs text-text-muted hover:text-primary transition-colors font-medium">
                  {area}
                </Link>
                {i < arr.length - 1 && <span className="text-surface-border text-xs">·</span>}
              </React.Fragment>
            ))}
            <span className="text-xs text-text-subtle mx-2">·</span>
            <Link href="/locations" className="text-xs font-semibold text-primary hover:underline">
              + more areas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
