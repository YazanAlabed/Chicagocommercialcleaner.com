# Chicago Commercial Cleaner — Brand Guidelines

> **Domain:** chicagocommercialcleaner.com
> **Brand Position:** Chicago's most trusted commercial cleaning partner. Professional but not corporate. Clean but not sterile. Local but not small-time.

---

## Table of Contents

1. [Brand Identity](#1-brand-identity)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Logo Direction](#4-logo-direction)
5. [Imagery & Photography](#5-imagery--photography)
6. [Iconography](#6-iconography)
7. [UI Component Guidelines](#7-ui-component-guidelines)
8. [Landing Page Structure](#8-landing-page-structure)
9. [Tone of Voice](#9-tone-of-voice)
10. [Do's and Don'ts](#10-dos-and-donts)

---

## 1. Brand Identity

### Who We Are
A commercial cleaning company serving Chicagoland businesses. We clean offices, medical facilities, restaurants, warehouses, and everything in between. We're local, we know the city, and we do the job right.

### Brand Personality

| Trait | What It Means | What It Doesn't Mean |
|-------|--------------|---------------------|
| **Trustworthy** | Reliable, consistent, shows up on time | Stiff, overly formal, corporate |
| **Professional** | Knows the work, does it thoroughly | Suits and jargon |
| **Clean** | Literally and visually — fresh, uncluttered | Sterile, clinical, cold |
| **Chicago-rooted** | Knows the neighborhoods, the weather, the buildings | Tourist-y, deep-dish cliches |
| **Direct** | Says what they mean, no fluff | Aggressive, pushy, salesy |

### Brand Promise
We make Chicago businesses cleaner than they thought possible. No shortcuts. No missed baseboards.

---

## 2. Color System

### Primary Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary** | Cyan 600 | `#0891B2` | Headers, primary buttons, nav, links |
| **Secondary** | Cyan 400 | `#22D3EE` | Accents, highlights, hover states, badges |
| **CTA / Success** | Green 500 | `#22C55E` | Quote buttons, success states, phone CTA |
| **Background** | Cyan 50 | `#ECFEFF` | Page backgrounds, section alternation |
| **Text Primary** | Cyan 900 | `#164E63` | Body text, headings |
| **Text Muted** | Slate 500 | `#64748B` | Secondary text, captions, meta info |

### Supporting Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **White** | Pure White | `#FFFFFF` | Cards, form backgrounds, nav background |
| **Light Gray** | Slate 100 | `#F1F5F9` | Alternate section backgrounds, dividers |
| **Border** | Slate 200 | `#E2E8F0` | Card borders, input borders, dividers |
| **Dark** | Slate 900 | `#0F172A` | Footer background, dark sections |
| **Error** | Red 500 | `#EF4444` | Form errors, validation messages |
| **Warning** | Amber 500 | `#F59E0B` | Alerts, cautionary notices |

### Why These Colors
- **Cyan** = clean, fresh, water — literally what cleaning evokes. Not the generic blue every contractor uses.
- **Green CTA** = action, go, money. High contrast against cyan. Proven to convert on service sites.
- **Dark text on light backgrounds** = readability, trust, professionalism. No gimmicks.

### Color Contrast (WCAG AA Compliance)

| Combination | Ratio | Pass? |
|-------------|-------|-------|
| `#164E63` on `#FFFFFF` | 9.4:1 | AAA |
| `#164E63` on `#ECFEFF` | 8.1:1 | AAA |
| `#FFFFFF` on `#0891B2` | 4.6:1 | AA |
| `#FFFFFF` on `#22C55E` | 3.1:1 | AA Large only |
| `#0F172A` on `#22C55E` | 6.2:1 | AA |

**CTA button rule:** Use dark text (`#0F172A`) on green buttons, not white, for full AA compliance.

### Tailwind Config
```js
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
}
```

---

## 3. Typography

### Font Pairing: Poppins + Open Sans

| Role | Font | Weight | Size | Line Height |
|------|------|--------|------|-------------|
| **H1** | Poppins | 700 (Bold) | 48px / 3rem | 1.2 |
| **H2** | Poppins | 600 (Semibold) | 36px / 2.25rem | 1.25 |
| **H3** | Poppins | 600 (Semibold) | 24px / 1.5rem | 1.3 |
| **H4** | Poppins | 500 (Medium) | 20px / 1.25rem | 1.35 |
| **Body** | Open Sans | 400 (Regular) | 16px / 1rem | 1.65 |
| **Body Large** | Open Sans | 400 (Regular) | 18px / 1.125rem | 1.6 |
| **Small / Caption** | Open Sans | 400 (Regular) | 14px / 0.875rem | 1.5 |
| **Button** | Poppins | 600 (Semibold) | 16px / 1rem | 1.0 |
| **Nav Link** | Open Sans | 500 (Medium) | 16px / 1rem | 1.0 |

### Why This Pairing
- **Poppins** — Geometric sans-serif. Modern, clean, confident. Reads as professional without being stuffy. The rounded letterforms feel approachable.
- **Open Sans** — Humanist sans-serif. One of the most readable body fonts on the web. Friendly, neutral, optimized for screens.

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
```

### Tailwind Config
```js
fontFamily: {
  heading: ['Poppins', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
}
```

### Typography Rules
- **Max line length:** 65-75 characters for body text
- **Mobile body:** Minimum 16px (never smaller)
- **No all-caps** except for small badges/labels (and only in Poppins 600 with letter-spacing)
- **No thin weights** (300) for body text — use 400 minimum
- **Heading spacing:** Always add margin-bottom equal to ~50% of the heading font size

---

## 4. Logo Direction

### Concept
The logo should feel like a **mark of quality** — not a generic cleaning icon. No clip-art mops, no sparkle stars, no cartoon spray bottles.

### Recommended Approach

**Option A: Wordmark + Geometric Icon (Recommended)**
- Clean geometric icon: abstract "C" shape or building silhouette suggesting Chicago skyline
- Wordmark in Poppins 700
- Icon works standalone at small sizes (favicon, app icon)
- Color: Primary cyan `#0891B2` on white, or white on dark

**Option B: Monogram**
- "CC" or "CCC" monogram in a contained shape (circle or rounded square)
- Works great as favicon and social media avatar
- Wordmark "Chicago Commercial Cleaner" alongside in Poppins 600

### Logo Specifications

| Usage | Min Size | Clear Space |
|-------|----------|-------------|
| Full logo (icon + wordmark) | 120px wide | 1x icon height on all sides |
| Icon only | 32px | 0.5x icon size on all sides |
| Favicon | 32x32px | Edge-to-edge |
| Social avatar | 400x400px | Centered with padding |

### Logo Color Variants
1. **Primary:** Cyan icon + dark text on white background
2. **Reversed:** White icon + white text on dark/cyan background
3. **Mono dark:** All `#0F172A` on white (for print, formal use)
4. **Mono light:** All white on dark (for dark sections, footer)

### Logo Don'ts
- Don't stretch or distort
- Don't add drop shadows or gradients
- Don't place on busy photo backgrounds without a container
- Don't use colors outside the brand palette
- Don't rearrange icon and wordmark positioning

---

## 5. Imagery & Photography

### Photography Style

**The Look:** Real, bright, modern. Not stock-photo-generic. Think "what a good cleaning company would actually post on their Instagram."

| Do | Don't |
|----|-------|
| Real office environments (desks, lobbies, break rooms) | Staged, overly-lit studio shots |
| Actual cleaning in progress (team working) | Models posing with mops they've never held |
| Chicago-recognizable backgrounds (skyline, L trains, neighborhood buildings) | Generic cityscape that could be anywhere |
| Before/after shots of real spaces | Photoshop-enhanced "transformations" |
| Diverse team reflecting Chicago's workforce | All-matching uniforms in a perfect row |
| Natural lighting, slight warmth | Cold fluorescent or heavily filtered |

### Image Treatment
- **No heavy filters.** Slight warmth (+5-10%) and contrast boost is fine.
- **No overlays** on hero images — use a semi-transparent gradient for text readability instead
- **Compression:** WebP format, max 200KB for hero images, max 100KB for content images
- **Aspect ratios:** 
  - Hero: 16:9 or 21:9
  - Blog thumbnails: 3:2
  - Team photos: 1:1 (circles or rounded squares)
  - Before/after: 4:3 side-by-side

### Stock Photo Sources (if needed)
- Unsplash: search "office cleaning," "commercial building," "Chicago skyline"
- Pexels: search "janitorial," "office space," "cleaning crew"
- **Always prefer real photos** over stock when available

### Before/After Photography
This is the highest-converting visual element for cleaning companies.

- Show the same angle, same lighting
- Use a slider component (not side-by-side on mobile)
- Include the location: "West Loop office, 12,000 sq ft"
- Keep it real — don't oversaturate the "after"

---

## 6. Iconography

### Icon System: Lucide Icons

- **Library:** [Lucide](https://lucide.dev/) (open source, consistent, clean)
- **Size:** 24x24px base (w-6 h-6 in Tailwind)
- **Stroke width:** 1.5px (default)
- **Color:** Inherit from text color or use primary cyan
- **Never use emojis as icons.** No sparkles, no mops emoji, no checkmark emoji.

### Common Icons Needed

| Purpose | Lucide Icon Name |
|---------|-----------------|
| Phone / Call | `phone` |
| Email | `mail` |
| Location | `map-pin` |
| Quote / Free Estimate | `calculator` or `clipboard-list` |
| Checkmark / Included | `check-circle` |
| Office | `building-2` |
| Cleaning | `sparkles` (the icon, not emoji) |
| Calendar / Schedule | `calendar` |
| Shield / Trust | `shield-check` |
| Star / Reviews | `star` |
| Clock / Hours | `clock` |
| Arrow / CTA | `arrow-right` |
| Menu (mobile) | `menu` |
| Close | `x` |

### Icon Usage Rules
- Always pair icons with text labels (never icon-only for critical actions)
- Use `aria-label` on icon-only buttons
- Consistent sizing within each context (don't mix 20px and 24px icons in the same row)
- Icons in buttons: left side, with 8px gap to text

---

## 7. UI Component Guidelines

### Design Style: Soft UI Evolution
Modern, clean elevation using subtle shadows instead of heavy borders. Not full neumorphism — evolved soft UI with better contrast and accessibility.

### Buttons

**Primary CTA (Get a Quote)**
```
Background: #22C55E (green)
Text: #0F172A (dark)
Font: Poppins 600, 16px
Padding: 14px 28px
Border-radius: 8px
Shadow: 0 1px 3px rgba(0,0,0,0.1)
Hover: #16A34A (darker green), shadow increases
Transition: all 200ms ease
```

**Secondary Button**
```
Background: transparent
Border: 2px solid #0891B2
Text: #0891B2
Hover: Background #0891B2, Text #FFFFFF
```

**Ghost Button (links styled as buttons)**
```
Background: transparent
Text: #0891B2
Underline on hover
No border, no shadow
```

### Cards (Service Cards, Location Cards)
```
Background: #FFFFFF
Border: 1px solid #E2E8F0
Border-radius: 12px
Shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)
Padding: 24px
Hover: Shadow increases to 0 4px 12px rgba(0,0,0,0.08)
Transition: shadow 200ms ease
Cursor: pointer (if clickable)
```

### Forms (Quote Form)
```
Input background: #FFFFFF
Input border: 1px solid #E2E8F0
Input border-radius: 8px
Input padding: 12px 16px
Input font: Open Sans 400, 16px
Focus border: 2px solid #0891B2
Focus shadow: 0 0 0 3px rgba(8,145,178,0.15)
Label: Open Sans 500, 14px, #164E63
Error: border #EF4444, message text #EF4444, 14px
```

### Navigation
```
Position: fixed top
Background: #FFFFFF / rgba(255,255,255,0.95) with backdrop-blur
Shadow: 0 1px 3px rgba(0,0,0,0.06)
Height: 72px
Logo: left
Links: center (desktop) / hamburger (mobile)
CTA button: right
Mobile breakpoint: 768px
Floating: top-4 left-4 right-4 with border-radius: 12px
```

### Footer
```
Background: #0F172A (dark)
Text: #94A3B8 (slate-400)
Link color: #E2E8F0 (slate-200)
Link hover: #FFFFFF
Padding: 64px top, 32px bottom
Columns: 4 on desktop, stacked on mobile
Bottom bar: border-top 1px #1E293B, copyright + legal links
```

### Trust Badges Bar
A horizontal strip of trust signals that appears below the hero and/or in the footer:
```
Icons + text in a row: 
"Licensed & Insured" | "Locally Owned" | "Eco-Friendly" | "Free Estimates"
Background: #F1F5F9 or transparent
Icon color: #0891B2
Text: Open Sans 500, 14px, #164E63
```

### Spacing Scale (Tailwind)
```
4px   (p-1)  - tight gaps
8px   (p-2)  - icon-to-text gaps
16px  (p-4)  - inner card padding, input padding
24px  (p-6)  - card padding, section inner spacing
32px  (p-8)  - between components
48px  (p-12) - between sections (mobile)
64px  (p-16) - between sections (desktop)
96px  (p-24) - major section breaks
```

### Border Radius Scale
```
4px  (rounded)    - small badges, tags
8px  (rounded-lg) - buttons, inputs, small cards
12px (rounded-xl) - cards, nav, modals
16px (rounded-2xl)- hero sections, large containers
Full (rounded-full) - avatars, review photos
```

---

## 8. Landing Page Structure

### Homepage Section Order

Based on the **Hero + Social Proof + CTA** conversion pattern (highest converting for service businesses):

```
1. HERO
   - H1: "Commercial Cleaning Chicago Businesses Trust"
   - Subheading: 1 sentence value prop
   - CTA button: "Get Your Free Quote"
   - Phone number: click-to-call
   - Background: subtle gradient or real photo with overlay

2. TRUST BAR
   - "Licensed & Insured" | "Locally Owned" | "Eco-Friendly" | "Free Estimates"
   - Optional: Google review stars + count

3. SERVICES GRID
   - 6-8 service cards in a 2x3 or 2x4 grid
   - Icon + title + 1-line description + "Learn More" link
   - Each links to full service page

4. BEFORE/AFTER
   - Slider component showing real cleaning results
   - Location caption: "West Loop office, 12,000 sq ft"

5. WHY US / DIFFERENTIATORS
   - 3-4 columns: what makes this company different
   - Specific claims with numbers, not vague benefits

6. TESTIMONIALS
   - 3-5 reviews carousel
   - Name + role + company (or "Loop office manager")
   - Star rating
   - Photo if available

7. SERVICE AREAS MAP
   - Interactive or static map showing coverage
   - List of neighborhoods + suburbs served
   - Links to location pages

8. BLOG PREVIEW
   - 3 latest posts in a card grid
   - Thumbnail + title + excerpt
   - Link to full blog

9. FINAL CTA
   - Full-width section
   - "Get Your Free Quote Today"
   - Short form (or link to full quote page)
   - Phone number

10. FOOTER
    - 4-column: Services, Locations, Company, Contact
    - Phone, email, address
    - Social links
    - Copyright + privacy/terms
```

### Mobile Adaptations
- Hero: stack vertically, full-width CTA button
- Services grid: 1 column
- Testimonials: swipeable horizontal scroll
- Trust bar: 2x2 grid
- Sticky bottom bar with phone + quote CTA

---

## 9. Tone of Voice

### Quick Reference

| Context | Tone | Example |
|---------|------|---------|
| **Homepage** | Confident, direct | "We clean Chicago offices the right way." |
| **Service pages** | Knowledgeable, specific | "Our team strips, seals, and buffs VCT floors using commercial-grade finish." |
| **Blog posts** | Honest, experienced | "Most cleaning companies skip the baseboards. We don't." |
| **Quote form** | Warm, easy | "Takes 30 seconds. We'll get back to you within an hour." |
| **Error messages** | Helpful, human | "Something went wrong. Try again, or call us at [number]." |
| **Reviews response** | Grateful, professional | "Thanks for the kind words. Your West Loop office is always a great stop for our crew." |

### Voice Principles

1. **Talk like a person, not a brochure.** Use contractions. Use short sentences. Be direct.
2. **Show, don't tell.** Don't say "we're the best." Show specific results, specific numbers, specific neighborhoods.
3. **Respect the reader's time.** Get to the point. No filler paragraphs. No fluffy intros.
4. **Be Chicago.** Reference real places, real weather, real situations. This isn't a template site.
5. **Have an opinion.** "Most cleaners skip high-touch surfaces" is better than "cleaning is important."

### Full writing rules: see `docs/human-seo-writing-guide.md`

---

## 10. Do's and Don'ts

### Visual Do's
- Use consistent spacing from the scale
- Use the color system — no off-brand colors
- Keep it clean (white space is your friend)
- Use real photography over illustrations when possible
- Use Lucide icons consistently
- Maintain 4.5:1 minimum contrast ratio
- Use subtle shadows for depth (Soft UI style)
- Add `cursor-pointer` to all clickable elements
- Test at 375px, 768px, 1024px, 1440px

### Visual Don'ts
- No gradients on text
- No emojis as UI icons
- No stock photos of people pointing at whiteboards
- No heavy drop shadows or glows
- No more than 2 font weights per element
- No rounded corners above 16px (except full circles for avatars)
- No animations longer than 300ms
- No layout shift on hover (don't scale cards)
- No hidden pricing — always show ranges or "starting at"

### Content Do's
- Reference `docs/human-seo-writing-guide.md` for every piece of content
- Include Chicago-specific details on every page
- Use specific numbers and stats
- Write like you're talking to the business owner across the table
- Include clear CTAs on every page

### Content Don'ts
- No generic city descriptions
- No banned words or phrases (see writing guide)
- No "contact us today" as a CTA (be specific about what happens next)
- No walls of text without subheadings
- No content that could be about any cleaning company in any city

---

## Technical Implementation Notes

### Style: Soft UI Evolution
- Subtle box shadows instead of heavy borders
- Background blur on glass elements (`backdrop-blur-sm`)
- Smooth transitions: 200ms for micro-interactions, 300ms for page elements
- Focus-visible states for keyboard navigation
- `prefers-reduced-motion` respected for all animations

### Performance Targets
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- All images: WebP, lazy-loaded below fold, responsive srcset
- Font loading: `display=swap` to prevent FOIT

### Recommended Stack
- **Framework:** Next.js (SSG for SEO speed) or Astro (even faster, less JS)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React or Lucide SVG
- **Forms:** React Hook Form or native with server action
- **Hosting:** Vercel or Netlify (edge deployment, fast TTFB)
- **CMS (for blog):** MDX files or Contentlayer (keeps it in the repo, no external CMS dependency)

### Pre-Delivery Checklist
- [ ] No emojis as icons (use Lucide SVGs)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth 200ms transitions
- [ ] Light mode text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll on mobile
- [ ] All images have alt text
- [ ] Form inputs have visible labels

---

*Brand guidelines created April 2026. Review when selling the site or onboarding a new design resource.*
