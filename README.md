# Omni Path Marketing

Production marketing site for **Omni Path Marketing** — a global white-label + direct digital growth agency.

> Stop hiring five agencies. Hire us once.

## Stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** with `@theme` directive (no `tailwind.config.ts` for tokens)
- **Framer Motion 12** + **Lenis** (smooth scroll)
- **React Hook Form** + **Zod**
- **Resend** (email), **Cal.com** (booking), **Plausible** (analytics)
- **MDX** in repo, **Notion** CRM
- **Vercel** hosting

## Brand

- Base: **Charcoal `#0A0A0F`**
- Accent: **Lime `#A3E635`**
- UI: **Geist Sans**
- Headlines: **Instrument Serif** (italic, last clause only)
- Voice: Direct · Confident · Specific · Plain English
- Positioning: **Global** (no city pages, no AU-specific copy)

## Quick start

```bash
cp .env.example .env.local   # add your keys (optional for dev)
npm install
npm run dev                  # http://localhost:3000
npm run build                # production build
npm run lint
```

## Project layout

```
app/                 # 21 routes + API
components/
  nav/               # header, footer
  sections/          # hero, bento, faq, cta, ...
  ui/                # button, section, badge, accordion
  motion/            # LenisProvider, ScrollReveal
  forms/             # contact, partner, audit
lib/
  seo.ts             # buildMetadata + JSON-LD schemas
  motion.ts          # framer-motion timing tokens
  email.ts           # Resend templates
  notion.ts          # CRM integration
  lead-score.ts      # 0-120 lead scoring
  env.ts             # Zod-validated env
content/             # MDX blog posts (Phase 2)
public/              # logo, favicon, og
```

## Routes (21)

Home, for-agencies, for-businesses, white-label-seo, automated-seo, pricing, audit (+ thank-you), contact, process, tools, samples, case-studies, about, blog, services (index), 8 service pages, privacy-policy, terms.

## Source of truth

- `PLAN.md` — services, pricing, sales, timeline
- `MOTION.md` — animation spec, reduced-motion rules
- `COPY.md` — all page copy (H1s, subheads, FAQs, meta, CTAs)

## Deploy

Push to `main` → Vercel builds → preview at `*.vercel.app`. Production at `omnipathmarketing.com` (configure in Vercel + add `RESEND_API_KEY`, `NOTION_API_KEY`, etc.).
