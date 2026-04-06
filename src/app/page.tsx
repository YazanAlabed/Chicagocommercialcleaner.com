import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { SERVICES, TRUST_BADGES } from '@/lib/constants';
import {
  Shield,
  MapPin,
  Leaf,
  BadgeCheck,
  Building2,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Shield,
  MapPin,
  Leaf,
  BadgeCheck,
  Building2,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content - Spanning 7 columns */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="text-center lg:text-left lg:col-span-7 z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bg text-primary-dark text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Precision Cleaning Experts
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
              >
                Industrial Precision <br />
                <span className="text-primary relative">
                  Cleaning Services
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                  </svg>
                </span>
                <span className="block text-foreground mt-2">in Chicago</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Licensed, bonded, insured & eco-friendly. We bring clinical precision to
                offices, medical facilities, and warehouses across Chicagoland.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              >
                <Link href="/get-a-quote">
                  <Button variant="primary" size="lg" className="group relative overflow-hidden px-8 py-4">
                    <span className="relative z-10 flex items-center gap-2">
                      Get Your Free Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
                <a
                  href="tel:877-322-8833"
                  className="text-foreground/80 font-medium hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-8 h-8 rounded-full bg-surface-light flex items-center justify-center text-primary">
                    <Building2 className="w-4 h-4" />
                  </span>
                  Call: 877-322-8833
                </a>
              </motion.div>
            </motion.div>

            {/* Hero Image - Offset & Geometric */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:col-span-5"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/hero/hero-commercial-cleaning.png"
                  alt="Professional commercial cleaning team at work"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                  priority
                />
              </div>
              {/* Geometric Accents */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-cta/10 rounded-full blur-3xl" />
              <div className="absolute -inset-4 border border-primary/20 rounded-2xl -z-10 translate-x-4 translate-y-4" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Trust Bar - Minimalist Precision */}
      <section className="py-12 bg-surface-light border-y border-surface-border">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {TRUST_BADGES.map((badge, idx) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 justify-center group"
              >
                <div className="w-12 h-12 bg-white rounded-xl border border-surface-border flex items-center justify-center group-hover:border-primary transition-colors shadow-sm">
                  {React.createElement(iconMap[badge.icon] || Shield, {
                    className: "w-5 h-5 text-primary group-hover:scale-110 transition-transform"
                  })}
                </div>
                <span className="font-bold text-text-default text-sm uppercase tracking-tight">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid - High Contrast & Interactive */}
      <section className="py-24 lg:py-32 relative">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Specialized <span className="text-primary">Cleaning</span><br />Systems
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                We don't just clean; we implement precision-engineered maintenance
                protocols tailored to your specific industry requirements.
              </p>
            </div>
            <Link href="/services" className="hidden lg:block">
              <Button variant="ghost" className="text-primary hover:bg-primary/5">
                View All Specialized Systems →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block h-full bg-white rounded-2xl overflow-hidden border border-surface-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={`/images/services/${service.slug}.png`}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-white font-bold text-xl">{service.name}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      Precision {service.name.toLowerCase()} designed for high-traffic
                      Chicago commercial environments.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      SYSTEM DETAILS
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button variant="ghost" className="text-primary hover:bg-primary/5">
                Explore All 13 Service Systems →
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA Banner - Brutalist Industrial */}
      <section className="relative bg-surface-dark py-24 lg:py-32 overflow-hidden">
        {/* Design Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 skew-x-12 translate-x-20" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-cta/5 blur-3xl rounded-full" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Elevate Your <span className="text-primary">Business</span> Standard
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                Stop settling for "clean enough". Get a high-precision maintenance
                plan that protects your assets and impresses your clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-a-quote">
                  <Button variant="secondary" size="lg" className="px-10 py-6 text-lg font-bold">
                    Request a Precision Quote
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-slate-500 text-sm font-medium">
                Typical response time: &lt; 60 minutes during business hours.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
