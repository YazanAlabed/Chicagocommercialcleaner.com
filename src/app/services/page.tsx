import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { SERVICES } from '@/lib/constants';
import { Building2, ArrowRight, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Cleaning Services | Chicago Commercial Cleaner',
  description:
    'Professional commercial cleaning services in Chicago. Office cleaning, janitorial services, post-construction, medical facilities, and more.',
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section - Industrial Minimalist */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <Container>
          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bg text-primary-dark text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20"
            >
              <Layers className="w-3 h-3" />
              Service Catalog
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            >
              Precision <span className="text-primary">Cleaning</span> <br />Systems
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted leading-relaxed mb-0"
            >
              From daily office maintenance to specialized clinical disinfection,
              we provide engineered cleaning solutions that exceed
              industry standards for Chicago businesses.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Services Grid - High Contrast Precision */}
      <section className="py-24 lg:py-32 relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.slug}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <div className="p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-white font-bold text-xl">{service.name}</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-text-muted text-sm leading-relaxed mb-6">
                      Industrial-grade {service.name.toLowerCase()} protocols
                      optimized for high-traffic commercial environments.
                    </p>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                      VIEW SYSTEM SPECS
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
