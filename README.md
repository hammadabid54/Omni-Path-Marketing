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

VPS (Ubuntu) via **nginx + PM2 + Let's Encrypt**. See `deploy/DEPLOY.md` for the full step-by-step.

```bash
ssh root@YOUR_VPS_IP
cd /opt && git clone https://github.com/YOUR_USER/omni-path-marketing.git
cd omni-path-marketing/deploy && sudo ./setup-vps.sh
# After DNS A record propagates:
sudo certbot --nginx -d omnipathmarketing.com --non-interactive --agree-tos -m hammadabid54@gmail.com
```

The setup script installs Node 20, PM2, and nginx; clones the repo; builds the app; and starts it under PM2. `deploy/ecosystem.config.cjs` is the PM2 config, `deploy/nginx-omnipath.conf` is the vhost.

To redeploy after a push:

```bash
ssh root@YOUR_VPS_IP "cd /var/www/omnipathmarketing.com && git pull && npm install && npm run build && pm2 restart omni-path-marketing"
```

## Required env vars (production)

Set these in `/var/www/omnipathmarketing.com/.env.local` on the server:

```bash
NEXT_PUBLIC_SITE_URL=https://omnipathmarketing.com
RESEND_API_KEY=re_xxx                # from https://resend.com/api-keys
RESEND_FROM_EMAIL=contact@omnipathmarketing.com   # must be a domain verified in Resend
RESEND_NOTIFY_EMAIL=hammadabid54@gmail.com
```

Optional:

```bash
NEXT_PUBLIC_CALCOM_URL=https://cal.com/your-handle
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=omnipathmarketing.com
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser   # only if audits fail
```
