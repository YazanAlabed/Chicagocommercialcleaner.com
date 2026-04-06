# Chicago Commercial Cleaner — Full Site Build Design Spec

> **Date:** 2026-04-05
> **Stack:** Next.js 15 (App Router) + Tailwind CSS 4 + MDX + Vercel
> **Scope:** Full site — homepage, 13 service pages, 27 location pages, 8 industry pages, blog (4 launch posts), quote form, contact, about, pricing, reviews

---

## 1. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 15 (App Router) | SSG, image optimization, SEO metadata API, React Server Components |
| Styling | Tailwind CSS 4 | Utility-first, matches brand config, fast iteration |
| Content | MDX via @next/mdx or next-mdx-remote | Markdown + React components, frontmatter for metadata |
| Icons | Lucide React | Per brand guidelines, consistent 24x24 SVG icons |
| Forms | React Hook Form + Zod | Client validation, type-safe, lightweight |
| Email | Resend or Nodemailer via API route | Quote form submission notifications |
| Deployment | Vercel | Git push deploys, edge CDN, free tier sufficient |
| Analytics | Google Analytics 4 + Google Search Console | Traffic tracking, SEO monitoring |
| Font Loading | next/font/google | Zero layout shift, self-hosted Google Fonts |

## 2. Project Structure

```
chicagocommercialcleaner/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    — Root layout: fonts, nav, footer, global schema
│   │   ├── page.tsx                      — Homepage (10 sections)
│   │   ├── services/
│   │   │   └── [slug]/page.tsx           — Service page template
│   │   ├── locations/
│   │   │   └── [slug]/page.tsx           — Location page template
│   │   ├── industries/
│   │   │   └── [slug]/page.tsx           — Industry page template
│   │   ├── blog/
│   │   │   ├── page.tsx                  — Blog index (card grid)
│   │   │   └── [slug]/page.tsx           — Blog post template
│   │   ├── get-a-quote/page.tsx          — Quote form (primary conversion page)
│   │   ├── about/page.tsx                — About page
│   │   ├── contact/page.tsx              — Contact page + form + map embed
│   │   ├── pricing/page.tsx              — Pricing ranges + CTA
│   │   ├── reviews/page.tsx              — Reviews/testimonials page
│   │   ├── sitemap.ts                    — Dynamic sitemap generation
│   │   └── robots.ts                     — Dynamic robots.txt
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                — Fixed floating nav, mobile hamburger
│   │   │   ├── Footer.tsx                — 4-column dark footer
│   │   │   └── MobileMenu.tsx            — Slide-out mobile nav
│   │   ├── ui/
│   │   │   ├── Button.tsx                — Primary, secondary, ghost variants
│   │   │   ├── Card.tsx                  — Soft UI card with hover shadow
│   │   │   ├── Badge.tsx                 — Trust badges, service tags
│   │   │   ├── Input.tsx                 — Form input with label + error
│   │   │   ├── Select.tsx                — Dropdown select
│   │   │   └── Container.tsx             — Max-width wrapper (max-w-7xl)
│   │   ├── sections/
│   │   │   ├── Hero.tsx                  — Homepage hero with CTA
│   │   │   ├── TrustBar.tsx              — Licensed, insured, eco-friendly strip
│   │   │   ├── ServicesGrid.tsx          — 2x3/2x4 service card grid
│   │   │   ├── BeforeAfter.tsx           — Image comparison slider
│   │   │   ├── WhyUs.tsx                 — 3-4 column differentiators
│   │   │   ├── Testimonials.tsx          — Review carousel/grid
│   │   │   ├── ServiceAreaMap.tsx         — Map + neighborhood/suburb list
│   │   │   ├── BlogPreview.tsx           — 3 latest posts card row
│   │   │   └── CTABanner.tsx             — Full-width final CTA section
│   │   ├── forms/
│   │   │   ├── QuoteForm.tsx             — 6-field lead capture form
│   │   │   └── ContactForm.tsx           — Name, email, phone, message
│   │   └── seo/
│   │       ├── JsonLd.tsx                — Generic JSON-LD injector
│   │       ├── LocalBusinessSchema.tsx   — LocalBusiness markup
│   │       ├── FAQSchema.tsx             — FAQ page markup
│   │       ├── ArticleSchema.tsx         — Blog post markup
│   │       └── BreadcrumbSchema.tsx      — Breadcrumb markup
│   ├── content/
│   │   ├── services/                     — 13 MDX files
│   │   ├── locations/                    — 27 MDX files
│   │   ├── industries/                   — 8 MDX files
│   │   └── blog/                         — 4 launch post MDX files
│   ├── lib/
│   │   ├── content.ts                    — MDX file loading, frontmatter parsing, slug generation
│   │   ├── schema.ts                     — JSON-LD builder functions
│   │   ├── metadata.ts                   — generateMetadata() helpers per page type
│   │   └── constants.ts                  — Site-wide constants (business name, phone, address, etc.)
│   └── styles/
│       └── globals.css                   — Tailwind directives, custom utilities
├── public/
│   ├── images/                           — Static images, logos, og-images
│   └── llms.txt                          — AI discovery file (per GEO strategy)
├── tailwind.config.ts                    — Brand colors, fonts, spacing, border-radius
├── next.config.ts                        — MDX config, image domains
├── tsconfig.json
├── package.json
└── docs/                                 — Strategy docs (existing)
```

## 3. Content Model (MDX Frontmatter)

### Service Pages
```yaml
---
title: "Office Cleaning Chicago"
slug: "office-cleaning"
description: "Professional office cleaning services in Chicago. Licensed, insured, eco-friendly."
h1: "Office Cleaning in Chicago, IL"
keywords: ["office cleaning Chicago", "office cleaning services Chicago"]
serviceType: "Office Cleaning"
priceRange: "$0.15-$0.35 per sq ft"
icon: "building-2"
order: 1
faqs:
  - q: "How much does office cleaning cost in Chicago?"
    a: "Office cleaning in Chicago typically costs $0.15-$0.35 per square foot, or $500-$2,500/month depending on size and frequency."
  - q: "How often should an office be professionally cleaned?"
    a: "Most Chicago offices need cleaning 2-3 times per week. High-traffic areas may need daily service."
lastUpdated: "2026-04-05"
---
```

### Location Pages
```yaml
---
title: "Commercial Cleaning Loop Chicago"
slug: "loop"
description: "Commercial cleaning services in Chicago's Loop. Office cleaning, janitorial services for Loop businesses."
h1: "Commercial Cleaning in the Loop, Chicago"
keywords: ["commercial cleaning Loop Chicago", "office cleaning Loop"]
neighborhood: "The Loop"
city: "Chicago"
state: "IL"
mapCenter: { lat: 41.8827, lng: -87.6233 }
nearbyLocations: ["river-north", "west-loop", "south-loop", "streeterville"]
landmarks: ["Willis Tower", "Art Institute", "Millennium Park", "Merchandise Mart"]
lastUpdated: "2026-04-05"
---
```

### Industry Pages
```yaml
---
title: "Medical Facility Cleaning Chicago"
slug: "medical-facilities"
description: "HIPAA-compliant medical facility cleaning in Chicago. Specialized disinfection for clinics, dental offices, and healthcare facilities."
h1: "Medical Facility Cleaning Services in Chicago"
keywords: ["medical office cleaning Chicago", "healthcare cleaning Chicago"]
industryType: "Medical Facilities"
icon: "heart-pulse"
compliance: ["HIPAA", "OSHA", "CDC Guidelines"]
lastUpdated: "2026-04-05"
---
```

### Blog Posts
```yaml
---
title: "How Much Does Commercial Cleaning Cost in Chicago? (2026 Guide)"
slug: "commercial-cleaning-cost-chicago"
description: "Commercial cleaning in Chicago costs $0.15-$0.45/sq ft. Full pricing breakdown by service type, building size, and frequency."
keywords: ["commercial cleaning cost Chicago", "office cleaning price Chicago"]
author: "Chicago Commercial Cleaner"
publishedDate: "2026-04-05"
lastUpdated: "2026-04-05"
category: "Pricing"
readTime: "8 min"
---
```

## 4. Page Templates

### Homepage (10 Sections)
1. **Hero** — H1, subheading, quote CTA button, phone number. Background: subtle gradient or brand color.
2. **TrustBar** — 4 badges: Licensed & Insured, Locally Owned, Eco-Friendly, Free Estimates. Optional: Google review stars.
3. **ServicesGrid** — 6-8 cards linking to service pages. Icon + title + 1-line description.
4. **BeforeAfter** — Image comparison slider. Caption with location.
5. **WhyUs** — 3-4 column differentiators with specific numbers.
6. **Testimonials** — 3-5 reviews. Name + role + stars + quote.
7. **ServiceAreaMap** — Static or embedded map. Clickable neighborhood/suburb links.
8. **BlogPreview** — 3 latest posts in card format.
9. **CTABanner** — Full-width. "Get Your Free Quote Today" + short form or link.
10. **Footer** — 4 columns: Services, Locations, Company, Contact. Social links. Copyright.

### Service Page Template
- Breadcrumb navigation
- H1 from frontmatter
- "Last Updated" date
- TL;DR answer paragraph (first 60 words, per GEO strategy)
- MDX body content (scope, process, who it's for, pricing range)
- FAQ section (from frontmatter, rendered with FAQSchema)
- Related services sidebar or bottom links
- CTA: "Get Your Free Quote" button
- LocalBusiness + FAQ JSON-LD

### Location Page Template
- Breadcrumb navigation
- H1 from frontmatter
- "Last Updated" date
- Intro paragraph with specific landmarks, streets, local details
- MDX body content (area description, services available)
- Google Map embed (centered on mapCenter)
- Services available list (linked to service pages)
- Nearby locations links (from nearbyLocations)
- CTA: "Get Your Free Quote in [Neighborhood]"
- LocalBusiness + BreadcrumbList JSON-LD

### Industry Page Template
- Breadcrumb navigation
- H1 from frontmatter
- MDX body content (challenges, compliance, checklist, case study)
- Compliance badges (from frontmatter)
- CTA: "Get Your Free Quote"
- LocalBusiness JSON-LD

### Blog Post Template
- Breadcrumb: Home > Blog > Post Title
- H1, author, date, read time, "Last Updated"
- MDX body content
- Related posts at bottom (same category or recent)
- CTA: "Get Your Free Quote"
- Article + BreadcrumbList JSON-LD

### Blog Index
- H1: "Chicago Commercial Cleaning Blog"
- Card grid of all posts (thumbnail, title, excerpt, date, read time)
- Category filter (optional, if 10+ posts)
- Pagination (when posts exceed 12)

### Quote Form Page
- H1: "Get Your Free Commercial Cleaning Quote"
- 6-field form: Business Name, Contact Name, Email, Phone, Service Type (dropdown), Square Footage (range)
- Submit → API route → email notification
- Success state: "Thanks! We'll get back to you within 1 hour."
- Trust signals sidebar: Licensed, insured, free estimates, review count

### Contact Page
- Business info: address, phone (click-to-call), email
- Google Map embed
- Contact form (name, email, phone, message)
- Hours of operation

### Pricing Page
- Price ranges by service type (table or card format)
- "Starting at" pricing, not exact quotes
- CTA: "Get Your Custom Quote"
- FAQ section

### Reviews Page
- Aggregate rating (schema markup)
- Individual review cards
- Link to leave a review (Google review URL)

## 5. Component Specifications

### Navbar
- Fixed, floating: `top-4 left-4 right-4` with `rounded-xl`
- Background: `bg-white/95 backdrop-blur-sm`
- Shadow: `shadow-sm`
- Height: 72px
- Logo left, nav links center, "Get a Quote" button right
- Mobile: hamburger menu at 768px breakpoint
- Sticky phone number bar on mobile (below nav)

### Footer
- Background: `#0F172A` (slate-900)
- 4 columns: Services (links), Locations (links), Company (About, Reviews, Blog, Pricing), Contact (phone, email, address)
- Bottom bar: copyright, privacy policy, terms of service
- Social icons (if applicable)

### Quote Form
- React Hook Form + Zod validation
- Fields: businessName (required), contactName (required), email (required, email format), phone (required, phone format), serviceType (required, dropdown), squareFootage (optional, range selector)
- Submit → POST /api/quote
- Loading state on button during submission
- Success message replaces form
- Error handling with inline field messages

### API Route: /api/quote
- POST handler
- Validates with Zod (same schema as client)
- Sends email via Resend (or stores in JSON file as fallback for now)
- Returns 200 with success message
- Rate limiting: basic check (no more than 5 submissions per IP per hour)

## 6. Tailwind Configuration

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0891B2',
          light: '#22D3EE',
          dark: '#0E7490',
          bg: '#ECFEFF',
        },
        cta: {
          DEFAULT: '#22C55E',
          hover: '#16A34A',
          text: '#0F172A',
        },
        text: {
          DEFAULT: '#164E63',
          muted: '#64748B',
          inverse: '#FFFFFF',
        },
        surface: {
          white: '#FFFFFF',
          light: '#F1F5F9',
          border: '#E2E8F0',
          dark: '#0F172A',
        },
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-open-sans)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}

export default config
```

## 7. SEO Implementation

### Metadata (per page)
- Generated via Next.js `generateMetadata()` function
- Title: `[Page H1] | Chicago Commercial Cleaner` (under 60 chars)
- Description: from frontmatter (under 155 chars)
- Open Graph: title, description, image, type
- Canonical URL
- Robots: index, follow

### Schema Markup (per page type)
- **All pages:** LocalBusiness (global, in root layout) + BreadcrumbList
- **Service pages:** LocalBusiness + FAQ
- **Blog posts:** Article (with author, datePublished, dateModified)
- **Reviews page:** AggregateRating
- **Pricing page:** Service (with priceRange)

### robots.txt (dynamic via next config)
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://chicagocommercialcleaner.com/sitemap.xml
```

### Sitemap
- Auto-generated via `app/sitemap.ts`
- Reads all MDX slugs from content directories
- Includes lastmod from frontmatter `lastUpdated`

## 8. Content to Write (Launch)

### 13 Service Pages
1. office-cleaning
2. janitorial-services
3. post-construction-cleaning
4. medical-facility-cleaning
5. restaurant-cleaning
6. warehouse-cleaning
7. industrial-cleaning
8. carpet-cleaning
9. floor-care
10. window-cleaning
11. day-porter-services
12. after-hours-cleaning
13. green-cleaning

### 27 Location Pages
**Chicago neighborhoods (10):** loop, river-north, west-loop, streeterville, gold-coast, south-loop, lincoln-park, wicker-park, hyde-park, lakeview

**Suburbs (17):** schaumburg, naperville, oak-brook, evanston, skokie, arlington-heights, des-plaines, elk-grove-village, orland-park, downers-grove, tinley-park, palatine, lombard, wheaton, oak-park, cicero, bedford-park

### 8 Industry Pages
offices, medical-facilities, restaurants, warehouses, retail-stores, schools-universities, gyms-fitness-centers, churches-religious-facilities

### 4 Launch Blog Posts
1. "How Much Does Commercial Cleaning Cost in Chicago? (2026 Guide)"
2. "Office Cleaning Checklist: The Complete Guide for Chicago Businesses"
3. "7 Questions to Ask Before Hiring a Commercial Cleaning Company"
4. "Janitorial Services vs. Commercial Cleaning: What's the Difference?"

### Static Pages
- Homepage, About, Contact, Pricing, Reviews, Get a Quote

**Total: 58 pages at launch**

## 9. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | 95+ |
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Time to First Byte | < 200ms (Vercel edge) |
| Page size | < 500KB per page |
| Images | WebP, lazy-loaded, responsive srcset |

## 10. Deployment

- **Hosting:** Vercel (free tier)
- **Domain:** chicagocommercialcleaner.com pointed to Vercel
- **Build:** `next build` produces static HTML for all 58 pages
- **Deploy trigger:** Git push to main branch
- **Environment variables:** RESEND_API_KEY (for quote form emails), SITE_URL
