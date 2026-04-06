# Chicago Commercial Cleaner — Full Site Build Implementation Plan

> **Date:** 2026-04-05
> **Spec:** `docs/superpowers/specs/2026-04-05-full-site-build-design.md`

---

## Step 1: Scaffold Next.js Project

**Time estimate:** 10 min

**What to do:**
1. Open terminal in `C:\Users\alabe\chicagocommercialcleaner\`
2. Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --yes`
3. Install dependencies: `npm install lucide-react react-hook-form zod @hookform/resolvers`
4. Copy `tailwind.config.ts` from spec into project root
5. Update `src/app/globals.css` with Tailwind directives + custom CSS variables

**Verification:** `npm run dev` starts without errors. Homepage loads at localhost:3000.

---

## Step 2: Configure Next.js + Fonts + MDX

**Time estimate:** 15 min

**What to do:**
1. Install MDX: `npm install @next/mdx @mdx-js/loader @mdx-js/react remark-frontmatter remark-mdx-frontmatter gray-matter`
2. Update `next.config.ts` to enable MDX and image domains
3. Create `src/app/providers.tsx` with `next/font/google` for Poppins + Open Sans
4. Add CSS vars to `globals.css` for font families
5. Create `src/styles/globals.css` if not merged into main globals

**Verification:** MDX files can be imported in Next.js pages without build errors.

---

## Step 3: Set Up Brand Design Tokens

**Time estimate:** 20 min

**What to do:**
1. Create `src/lib/constants.ts` with all business constants:
   - Business name, phone, email, address
   - Service areas list
   - Social links
2. Create `src/lib/schema.ts` with JSON-LD builder functions:
   - `buildLocalBusinessSchema()`
   - `buildFAQSchema(questions[])`
   - `buildArticleSchema(post)`
   - `buildBreadcrumbSchema(crumbs[])`
   - `buildServiceSchema(service, priceRange)`
   - `buildAggregateRatingSchema(reviews)`
3. Create `src/lib/metadata.ts` with `generatePageMetadata()` helper

**Verification:** All functions exported and type-correct. No console errors.

---

## Step 4: Build UI Components

**Time estimate:** 45 min

**What to do:**
1. Create `src/components/ui/Container.tsx` — max-w-7xl wrapper
2. Create `src/components/ui/Button.tsx` — primary, secondary, ghost variants with all brand colors
3. Create `src/components/ui/Card.tsx` — soft UI card with hover shadow
4. Create `src/components/ui/Badge.tsx` — rounded badge for tags/trust signals
5. Create `src/components/ui/Input.tsx` — form input with label, error state, focus ring
6. Create `src/components/ui/Select.tsx` — dropdown select matching Input style

**Verification:** Each component renders correctly with all variants. No TypeScript errors.

---

## Step 5: Build Layout Components

**Time estimate:** 30 min

**What to do:**
1. Create `src/components/layout/Navbar.tsx` — fixed floating nav, 72px, logo left, links center, CTA right, mobile hamburger at 768px
2. Create `src/components/layout/MobileMenu.tsx` — slide-out menu for mobile
3. Create `src/components/layout/Footer.tsx` — 4-column dark footer, social links
4. Update `src/app/layout.tsx` to wrap children with Navbar + Footer, inject LocalBusiness schema, load fonts

**Verification:** Navbar floats at top with blur backdrop. Mobile menu opens/closes. Footer renders 4 columns on desktop, stacks on mobile.

---

## Step 6: Build SEO Components

**Time estimate:** 15 min

**What to do:**
1. Create `src/components/seo/JsonLd.tsx` — generic `<script type="application/ld+json">` injector
2. Create `src/components/seo/BreadcrumbSchema.tsx` — uses JsonLd + BreadcrumbList schema
3. Update root layout to include JSON-LD LocalBusiness schema globally

**Verification:** View page source on any page — JSON-LD block present in `<head>`.

---

## Step 7: Build Homepage Sections

**Time estimate:** 45 min

**What to do:**
1. Create `src/components/sections/Hero.tsx` — H1, subheading, CTA button, phone. Background gradient.
2. Create `src/components/sections/TrustBar.tsx` — 4 trust badges in a row
3. Create `src/components/sections/ServicesGrid.tsx` — 6-8 service cards in responsive grid
4. Create `src/components/sections/BeforeAfter.tsx` — image comparison slider
5. Create `src/components/sections/WhyUs.tsx` — 3-4 column differentiators with icons
6. Create `src/components/sections/Testimonials.tsx` — 3-5 review cards
7. Create `src/components/sections/ServiceAreaMap.tsx` — static map + location links
8. Create `src/components/sections/BlogPreview.tsx` — 3 latest post cards
9. Create `src/components/sections/CTABanner.tsx` — full-width CTA section
10. Assemble in `src/app/page.tsx` in correct order

**Verification:** Homepage renders all 10 sections. Responsive at 375px, 768px, 1024px.

---

## Step 8: Set Up Content System + Write Service Pages

**Time estimate:** 60 min

**What to do:**
1. Create `src/lib/content.ts` with:
   - `getServices()` — reads all MDX from `src/content/services/`
   - `getServiceBySlug(slug)` — returns single service MDX
   - `getAllLocations()` — reads all MDX from `src/content/locations/`
   - `getLocationBySlug(slug)` — returns single location MDX
   - `getAllIndustries()` / `getIndustryBySlug(slug)`
   - `getAllBlogPosts()` / `getBlogPostBySlug(slug)`
2. Create `src/components/seo/FAQSchema.tsx` and `ArticleSchema.tsx`
3. Create `src/components/forms/QuoteForm.tsx` — React Hook Form + Zod, 6 fields
4. Create `src/app/services/[slug]/page.tsx` — service page template with FAQSchema
5. Write all 13 service MDX files in `src/content/services/`

**Verification:** All 13 service pages render with correct content. Quote form submits without errors.

---

## Step 9: Build Location + Industry Pages

**Time estimate:** 45 min

**What to do:**
1. Create `src/app/locations/[slug]/page.tsx` — location page template
2. Create `src/app/industries/[slug]/page.tsx` — industry page template
3. Write all 27 location MDX files in `src/content/locations/`
4. Write all 8 industry MDX files in `src/content/industries/`

**Verification:** All 27 location + 8 industry pages build and render. Map embed visible. Nearby locations links work.

---

## Step 10: Build Blog System

**Time estimate:** 30 min

**What to do:**
1. Create `src/app/blog/page.tsx` — blog index with card grid
2. Create `src/app/blog/[slug]/page.tsx` — blog post template with ArticleSchema
3. Write all 4 launch blog posts in `src/content/blog/`
4. Use `human-seo-writing-guide.md` for all blog content

**Verification:** Blog index shows all 4 posts. Individual post pages render with Article JSON-LD. All content passes human writing guide checklist.

---

## Step 11: Build Static Pages

**Time estimate:** 30 min

**What to do:**
1. `src/app/get-a-quote/page.tsx` — full quote form page
2. `src/app/about/page.tsx` — about page with team/trust content
3. `src/app/contact/page.tsx` — contact info + map + contact form
4. `src/app/pricing/page.tsx` — pricing table/ranges
5. `src/app/reviews/page.tsx` — reviews page with AggregateRating schema

**Verification:** All 5 pages render. Quote form + contact form submit successfully.

---

## Step 12: Set Up API Routes

**Time estimate:** 20 min

**What to do:**
1. Create `src/app/api/quote/route.ts` — POST handler, validates with Zod, sends email via Resend (or logs to console if no API key)
2. Create `src/app/api/contact/route.ts` — POST handler for contact form
3. Add basic rate limiting: max 5 submissions per IP per hour

**Verification:** Both API routes return 200 on valid submission, 400 on invalid data.

---

## Step 13: SEO Files + Deployment Config

**Time estimate:** 20 min

**What to do:**
1. Create `src/app/sitemap.ts` — generates sitemap from all content slugs
2. Create `src/app/robots.ts` — robots.txt per GEO strategy (all AI crawlers allowed)
3. Create `public/llms.txt` — AI discovery file per GEO strategy
4. Create `public/images/` with placeholder/favicon
5. Update `package.json` with scripts for build + deploy
6. Add `.env.local.example` with `RESEND_API_KEY` and `SITE_URL`

**Verification:** `npm run build` completes without errors. All 58 pages pre-rendered. Sitemap XML valid. robots.txt serves correctly.

---

## Step 14: Pre-Launch QA

**Time estimate:** 30 min

**What to do:**
1. Run `npm run build` — zero errors
2. Run `npm run lint` — zero lint errors
3. Check Lighthouse score 95+ on homepage
4. Verify every page has:
   - Correct H1
   - Meta title + description
   - JSON-LD schema
   - Internal links
   - CTA button
5. Test quote form submission end-to-end
6. Test mobile responsive at 375px
7. Verify all images have alt text
8. Run 3 blog posts through AI detector — target 80%+ human score
9. Verify all Chicago content references real neighborhoods/landmarks

**Verification:** Build clean. All checks pass. Site ready to deploy.

---

## Implementation Order

```
Step 1  → Project scaffold
Step 2  → Config + fonts + MDX
Step 3  → Design tokens (constants, schema, metadata)
Step 4  → UI components
Step 5  → Layout components
Step 6  → SEO components
Step 7  → Homepage sections
Step 8  → Content system + service pages
Step 9  → Location + industry pages
Step 10 → Blog system
Step 11 → Static pages (quote, about, contact, pricing, reviews)
Step 12 → API routes
Step 13 → SEO files + deployment
Step 14 → QA + launch
```

**Total estimated time:** ~6-8 hours of implementation work.

**After deployment:** Phase 2 = blog content calendar execution, citation building, backlink outreach.
