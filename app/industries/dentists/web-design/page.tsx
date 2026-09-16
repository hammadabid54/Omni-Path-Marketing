import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  CalendarCheck,
  Code2,
  ShieldCheck,
  Check,
  ArrowRight,
  Layers,
  Globe,
  Layout,
  Wrench,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { Hero } from "@/components/sections/hero";
import { ServiceDefinition } from "@/components/sections/service-definition";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";
import { cn } from "@/lib/cn";
import { LinkButton } from "@/components/ui/button";
import {
  getDirectService,
  type DirectTier as DirectTierConfig,
} from "@/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Dental Website Design · Booking-Ready, Mobile-First",
  description:
    "Dental website design — mobile-first, online booking, procedure-page schema, HIPAA-safe intake forms. Built in 10-21 days. Get a free conversion audit.",
  path: "/industries/dentists/web-design",
});

/* ============================================================
   3 structural decisions — feature cards
   ============================================================ */

const siteDecisions = [
  {
    title: "Online booking integration",
    description:
      "Online booking is the single highest-impact feature on a dental site. We integrate directly with your practice management software — Eaglesoft, Dentrix, Practice-Web, Open Dental — so a booked appointment lands on the hygienist's schedule without a front-desk handoff. New builds without a PMS in place use Cal.com as a stopgap that drops directly into a Google Calendar, Outlook, or iCloud account. Confirmation emails and SMS reminders ship on the same integration. Patients who land on the home page on a phone should be able to tap \"book cleaning\" and finish the flow before they put the phone down.",
    icon: <CalendarCheck className="h-5 w-5" />,
  },
  {
    title: "Procedure-page schema",
    description:
      "Procedure pages are the SEO battleground for dental sites. One page per high-value service — implants, Invisalign, full-arch, cosmetic, sedation, same-day emergency — each shipped with procedure-specific Service schema, FAQPage schema for common procedure questions, and BreadcrumbList schema so Google can read the site structure. The schema is generated from the actual page content and validated against Google's Rich Results Test before launch. Schema done right is the difference between a procedure page ranking page three and ranking top three.",
    icon: <Code2 className="h-5 w-5" />,
  },
  {
    title: "HIPAA-safe intake forms",
    description:
      "Most dental intake forms leak PHI through third-party form plugins, analytics cookies, or ad pixels. We build intakes that post server-side to your PMS, so medical history, insurance IDs, and date-of-birth fields never transit through a browser-side tag. HIPAA-safe intake is a competitive edge on this spoke — name it, build it, ship it.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

/* ============================================================
   Direct pricing — read from pricing.ts (web-design service id)
   ============================================================ */

const directService = getDirectService("web-design")!;

interface DirectTier {
  name: string;
  price: string;
  badge?: string;
  includes: string[];
  upgrade?: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

const directTiers: DirectTier[] = directService.tiers.map((t: DirectTierConfig, i) => ({
  name: t.id,
  price: t.price,
  badge: t.id === "Bronze" ? "Starter" : t.id === "Gold" ? "Custom" : "Most popular",
  includes: t.features,
  upgrade: i < directService.tiers.length - 1 ? directService.tiers[i + 1].features : undefined,
  cta: { label: `Start with ${t.id} Web Design`, href: "/contact" },
  popular: t.popular,
}));

/* ============================================================
   Build timelines
   ============================================================ */

const buildTimelines = [
  {
    label: "5-day landing page",
    body: "one page, one goal, one CTA. Used for paid-traffic campaigns and procedure-specific lead-capture. Pairs with Google Ads for dentists.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    label: "10-day standard site",
    body: "up to 10 pages — home, about, services, team, contact, plus 2-4 procedure pages with schema. Standard builds for solo practices.",
    icon: <Layout className="h-5 w-5" />,
  },
  {
    label: "21-day custom build",
    body: "full multi-page site with booking integration, custom procedure pages with illustrated explainers, multi-location structure if relevant. The default for DSOs.",
    icon: <Wrench className="h-5 w-5" />,
  },
];

/* ============================================================
   Stack — tools
   ============================================================ */

const stackNotes = [
  {
    name: "Next.js",
    body: "for custom builds and high-traffic sites. Server-side rendering, image handling, and Core Web Vitals baked in from the first commit.",
  },
  {
    name: "Puppeteer + Lighthouse",
    body: "on every deploy catches the slow build, the missing alt tag, the layout shift, the bad meta — before patients do, not after.",
  },
  {
    name: "Webflow",
    body: "for fast standard sites when a CMS matters more than custom code.",
  },
  {
    name: "WordPress",
    body: "when a practice genuinely needs it — you own the CMS login and the domain, always.",
  },
];

/* ============================================================
   FAQ
   ============================================================ */

const dentistWebFaq: FaqItem[] = [
  {
    question: "How long does a dental website take to build?",
    answer:
      "Landing pages in 5 days. Standard sites (up to 10 pages) in 10 days. Custom builds with booking integration in 21 days. Clock starts the day you approve the brief.",
  },
  {
    question: "Can the site integrate with my practice management software?",
    answer:
      "Yes — Eaglesoft, Dentrix, Practice-Web, Open Dental. If your PMS isn't on that list, we build a custom integration.",
  },
  {
    question: "Can the site stay HIPAA-safe when patients fill out forms?",
    answer:
      "Yes. Intake forms post server-side to your PMS. PHI never transits browser-side pixels, ad tags, or analytics cookies. We sign a BAA where it applies.",
  },
  {
    question: "Do you handle multi-location and DSO dental site builds?",
    answer:
      "Yes. Each location gets its own page on the group domain (or sub-domain), its own GBP landing experience, and its own line in the monthly report. Group rollups for the marketing director.",
  },
  {
    question: "What happens after launch?",
    answer:
      "The monthly retainer covers ongoing design updates, new pages, security patches, hosting, and CRO. Bigger rebuilds are quoted separately. We do not ghost after launch — that is the whole point of a retainer engagement.",
  },
];

export default function DentistWebDesignPage() {
  return (
    <>
      <Hero
        eyebrow="Dental web design · booking-ready, mobile-first"
        title={
          <>
            Dental websites that book appointments.{" "}
            <em className="font-serif not-italic text-blue-600">
              Without the agency overhead.
            </em>
          </>
        }
        subhead="Mobile-first dental sites with online booking, procedure-page schema, and HIPAA-safe intake forms. Built in 10-21 days. Retainer covers hosting, security, and updates. Works for solo, multi-location, and DSO groups."
        primaryCta={{ label: "Get a free conversion audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <ServiceDefinition text="Dental website design is the build of mobile-first practice sites with online booking, procedure-page schema, and HIPAA-safe intake forms — designed for the patient's phone first and the desktop second. A dental site should load in under two seconds on real 4G, rank in Map Pack organic, and book a consultation in two taps." />

      {/* ============================================================
          3 structural decisions
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What a dental practice website actually needs</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three structural decisions.{" "}
            <em className="font-serif not-italic text-blue-600">
              Decide right, the rest follows.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Most dental sites miss the basics because they were built by
            generalist designers who do not know the patient flow. Three
            structural decisions decide whether the site books consultations
            or collects dust.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {siteDecisions.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="bento bento-feature h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Direct pricing — web-design tier table
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing for dental web design</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Bronze, Silver, Gold.{" "}
            <em className="font-serif not-italic text-blue-600">
              Hosting + CRO included.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Direct engagements run on the Bronze, Silver, and Gold tiers
            below. The monthly retainer covers hosting, security, ongoing
            updates, and CRO — not just the initial build. Multi-location
            and DSO engagements add per-location cadence on top of the chosen
            tier.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-5 lg:grid-cols-3"
          stagger={0.06}
        >
          {directTiers.map((tier, i) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "bento h-full flex flex-col",
                  tier.popular && "border-blue-600/40 bg-blue-600/[0.03]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-blue-600" />
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Direct · {tier.name}
                    </h3>
                  </div>
                  {tier.badge && (
                    <span
                      className={cn(
                        "pill text-[10px]",
                        tier.popular ? "pill-accent" : ""
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-600">
                    {tier.price}
                  </span>
                  <span className="text-xs text-neutral-900/55">per month</span>
                </div>

                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
                    What we do under this tier
                  </p>
                  <ul className="mt-3 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-neutral-900/80 leading-relaxed"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.upgrade && tier.upgrade.length > 0 && (
                  <div className="mt-6 rounded-lg border border-neutral-200/8 bg-neutral-900/[0.02] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                      Upgrade to {directTiers[i + 1]?.name ?? "next tier"} for:
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {tier.upgrade.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-neutral-900/70 leading-relaxed"
                        >
                          <ArrowRight className="h-3.5 w-3.5 mt-1 text-neutral-900/40 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <LinkButton
                    href={tier.cta.href}
                    variant={tier.popular ? "primary" : "ghost"}
                    size="md"
                    className="w-full"
                  >
                    {tier.cta.label}
                  </LinkButton>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Build timelines
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How we ship dental sites in days</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three timelines.{" "}
            <em className="font-serif not-italic text-blue-600">
              Picked by tier and brief.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            The clock starts the day you approve the brief, not the day you
            book the call. Every build ships mobile-first with sub-2-second
            load times on real 4G and Lighthouse mobile scores of 90+ across
            performance, accessibility, best practices, and SEO. We test on a
            throttled mobile connection, not on the office Wi-Fi.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {buildTimelines.map((item) => (
            <StaggerItem key={item.label}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {item.icon}
                </div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                  Timeline
                </p>
                <h3 className="mt-2 text-lg font-semibold text-neutral-900">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Behind the build — stack
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the build</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The stack carries the heavy lifting.{" "}
            <em className="font-serif not-italic text-blue-600">
              Senior focus on the 20% that wins.
            </em>
          </h2>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.05}
        >
          {stackNotes.map((tool) => (
            <StaggerItem key={tool.name}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {tool.name}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {tool.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="rounded-2xl border border-blue-600/20 bg-blue-600/[0.04] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
              Post-launch
            </p>
            <p className="mt-3 text-base md:text-lg text-neutral-900/85 leading-relaxed">
              Every build ships with a post-launch CRO loop: heatmaps and
              session recordings flow back into the next design pass. The
              screen recording tells you where people tap, where they leave,
              and where they rage-click — and the next design pass fixes it.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          Internal links
          ============================================================ */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-neutral-200/8 bg-neutral-900/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
            Pair dental web design with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <Link
              href="/industries/dentists/seo"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              SEO for dentists — the new site needs procedure-page rankings
            </Link>
            <Link
              href="/industries/dentists/google-ads"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Google Ads for dentists — feed the new site paid traffic
            </Link>
            <Link
              href="/industries/dentists"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              See the dentist marketing hub
            </Link>
            <Link
              href="/services/web-design"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              ← See our full Web Design capability
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Dental web design questions,{" "}
            <em className="font-serif not-italic text-blue-600">
              answered honestly.
            </em>
          </>
        }
        subhead="If you don&apos;t see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={dentistWebFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            See what your site is missing.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free audit, yours to keep.
            </em>
          </>
        }
        subhead="Free conversion audit — booking flow, mobile speed, procedure-page schema, HIPAA-safe intake. Yours to keep."
        primaryCta={{ label: "Get a free conversion audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-service-dentist-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Dental website design",
              description:
                "Mobile-first dental practice websites with online booking, procedure-page schema, and HIPAA-safe intake forms. Built in 10-21 days with retainer for ongoing updates.",
              path: "/industries/dentists/web-design",
              serviceType: "DentalMarketing",
              areaServed: "Worldwide",
              priceRange: "$$",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-dentist-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(dentistWebFaq)),
        }}
      />
      <Script
        id="ld-bc-dentist-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: "Dentists", url: "/industries/dentists" },
              { name: "Web Design", url: "/industries/dentists/web-design" },
            ])
          ),
        }}
      />
    </>
  );
}
