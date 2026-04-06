'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { SERVICE_AREAS } from '@/lib/constants';
import { MapPin, Map as MapIcon, ChevronRight } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function LocationsPageContent() {
  return (
    <>
      {/* Hero Section - Blueprint Style */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        <Container>
          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-bg text-primary-dark text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20"
            >
              <MapIcon className="w-3 h-3" />
              Deployment Zones
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight leading-tight"
            >
              Our <span className="text-primary">Strategic</span> <br />Service Areas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-text-muted leading-relaxed mb-0"
            >
              Operating across the entire Chicagoland core and key industrial
              suburbs. Locate your business district below for localized
              precision cleaning.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Chicago Neighborhoods - Asymmetric Grid */}
      <section className="py-24 lg:py-32 relative">
        <Container>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Chicago <span className="text-primary">Core</span> Neighborhoods
            </h2>
            <div className="h-px flex-1 bg-surface-border mx-8 hidden md:block" />
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Zone A</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {SERVICE_AREAS.chicagoNeighborhoods.slice(0, 6).map((area, idx) => {
              const slug = area.toLowerCase().replace(/\s+/g, '-');
              const imageExists = ['loop', 'river-north', 'west-loop', 'streeterville', 'gold-coast', 'south-loop', 'lincoln-park', 'wicker-park', 'hyde-park', 'lakeview'].includes(slug);

              return (
                <motion.div
                  key={area}
                  {...fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`/locations/${slug}`}
                    className="group relative block h-64 rounded-2xl overflow-hidden border border-surface-border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl"
                  >
                    {imageExists ? (
                      <Image
                        src={`/images/locations/${slug}.png`}
                        alt={`Commercial cleaning in ${area}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-surface-light" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
                          <MapPin className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-white font-bold text-xl">{area}</span>
                      </div>
                      <div className="p-2 bg-primary text-white rounded-full opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Remaining neighborhoods as precision list */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {SERVICE_AREAS.chicagoNeighborhoods.slice(6).map((area, idx) => (
              <motion.div
                key={area}
                {...fadeInUp}
                transition={{ delay: 0.6 + idx * 0.05 }}
              >
                <Link
                  href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-surface-border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{area}</span>
                  </div>
                  <ChevronRight className="w-3 h-3 text-surface-border group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Suburbs - Industrial Precision List */}
      <section className="py-24 lg:py-32 bg-surface-light relative">
        <Container>
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-3xl font-bold text-foreground tracking-tight">
              Strategic <span className="text-primary">Suburb</span> Deployment
            </h2>
            <div className="h-px flex-1 bg-surface-border mx-8 hidden md:block" />
            <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Zone B</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_AREAS.suburbs.map((area, idx) => (
              <motion.div
                key={area}
                {...fadeInUp}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center justify-between p-4 bg-white rounded-xl border border-surface-border hover:border-primary hover:bg-primary/5 transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">{area}</span>
                  </div>
                  <ChevronRight className="w-3 h-3 text-surface-border group-hover:text-primary transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}