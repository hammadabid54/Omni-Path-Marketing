import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Target,
  Ban,
  ShieldCheck,
  FileText,
  Layers,
  ArrowRight,
  Check,
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
  title: "Google Ads for Dentists · Procedure-Level Bidding",
  description:
    "Google Ads for dentists — procedure-level bidding on implants, Invisalign, full-arch, and cosmetic. HIPAA-aware conversion tracking throughout. Get a free PPC audit.",
  path: "/industries/dentists/google-ads",
});

/* ============================================================
   What we bid on (and what we won't) — feature cards
   ============================================================ */

const bidScope = [
  {
    title: "High-value procedures",
    description:
      "Implants, Invisalign, full-arch, cosmetic veneers, sedation dentistry, and same-day emergency care all clear the unit economics. A single booked implant case at $4,000-7,000 covers a month of ad spend at most CPCs we see across US markets. We bid on the procedure terms — \"dental implants [city]\", \"Invisalign provider [city]\", \"full-arch restoration [city]\" — and we run separate campaigns per procedure so budget allocation is clear. Landing pages are procedure-specific: hero copy matches the search query, before/after content is replaced with illustrated explainers, and the booking CTA sits above the fold.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Routine dental care",
    description:
      "We do not run paid search for routine cleanings, check-ups, or six-month recalls. The CPC math does not close. A cleaning might bring in $150 of revenue at best, and the CPC on a competitive \"dentist near me\" term is often the same as the CPC on a high-value procedure term. Burning $600-$1,200/mo to compete on cheap clicks for low-margin patients is a path practice owners regret. The few routine-care campaigns we see work are usually branded defense campaigns — bidding on your own practice name so competitors cannot intercept the search — and even those run at modest budgets.",
    icon: <Ban className="h-5 w-5" />,
  },
];

/* ============================================================
   Account structure — sub-disciplines
   ============================================================ */

const accountDisciplines = [
  {
    title: "HIPAA-aware conversion tracking",
    body: "We send booked-consultation events, phone-call events, and form-fill events through server-side endpoints. Patient identifiers never sit in browser pixels. The ad platforms learn from server-side signals without leaking PHI through ad tags or remarketing audiences. This is a named feature on the engagement, not an upsell.",
    bullets: [
      "We sign a BAA where protected health information is touched.",
      "We route conversion events server-side (Meta CAPI, GA4 server-side).",
      "We never load remarketing pixels on patient-only pages.",
    ],
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Landing pages for procedure ads",
    body: "Each procedure campaign gets its own landing page. The page mirrors the search query — same procedure name in the H1, same price band in the copy, same objection handled in the FAQ. Load time under two seconds on real 4G. Booking widget above the fold. Phone number in a sticky header. CRO tested with two variants per page from launch, winning headline becomes the new baseline after week one. No patient before/after galleries; illustrated explainers carry the education load instead.",
    bullets: [
      "Hero copy mirrors the search query",
      "Sub-2-second load on real 4G",
      "Booking widget above the fold",
      "Sticky-header phone number",
      "Two variants per page, weekly CRO loop",
    ],
    icon: <FileText className="h-5 w-5" />,
  },
];

/* ============================================================
   Direct pricing — read from pricing.ts (paid-ads service id)
   ============================================================ */

const directService = getDirectService("paid-ads")!;

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
  cta: { label: `Start with ${t.id} Google Ads`, href: "/contact" },
  popular: t.popular,
}));

/* ============================================================
   Numbers behind dental PPC
   ============================================================ */

const ppcNumbers = [
  {
    label: "CPC range",
    value: "$6-25",
    body: "on procedure-level terms (implants, Invisalign, cosmetic) in most US markets.",
  },
  {
    label: "Online research first",
    value: "77%",
    body: (
      <>
        of patients search online before booking a first dental appointment (
        <a
          href="https://misservices.us/dental-practice-marketing-statistics-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300"
        >
          MSI Services, 2026 dental marketing statistics
        </a>
        ) — so the paid-search slot is where the booking decision is made.
      </>
    ),
  },
  {
    label: "Multi-location reporting",
    value: "Per location",
    body: "per-location budgets and keyword sets, with a group-level rollup for the marketing director.",
  },
];

/* ============================================================
   FAQ
   ============================================================ */

const dentistPpcFaq: FaqItem[] = [
  {
    question: "How much should a dental practice spend on Google Ads?",
    answer:
      "$1,500-3,000/mo on ad spend is the floor for meaningful data on implant or Invisalign funnels. We don't run a campaign below the platform's data threshold.",
  },
  {
    question: "What should I expect to pay per click?",
    answer:
      "$6-25 on procedure-level terms (implants, Invisalign, cosmetic) in most US markets. \"Dentist near me\" clicks run cheaper but convert at near-zero for high-value procedures.",
  },
  {
    question: "Can I run paid ads without breaking HIPAA?",
    answer:
      "Yes. We sign a BAA where PHI is touched, route conversion events server-side (Meta CAPI, GA4 server-side), and never load pixels on patient-only routes.",
  },
  {
    question: "Do you handle multi-location and DSO ad accounts?",
    answer:
      "Yes. Each location gets its own campaign, budget, landing page, and monthly report line. Group-level dashboards roll up.",
  },
  {
    question: "How long until the first booked consultation shows up?",
    answer:
      "For most practices we onboard, the first booked consultation lands inside the first two weeks of campaign launch — sometimes inside the first week. The first month is mostly data: search-term reviews, negative-keyword cleanup, bid adjustments, landing-page A/B test winners. By month two, CPL typically settles into a usable range and the strategy locks in.",
  },
];

export default function DentistGoogleAdsPage() {
  return (
    <>
      <Hero
        eyebrow="Google Ads for dentists · procedure-level bidding"
        title={
          <>
            Paid search that books high-value cases.{" "}
            <em className="font-serif not-italic text-blue-600">
              Without the agency overhead.
            </em>
          </>
        }
        subhead="We bid on implants, Invisalign, full-arch, and cosmetic procedures for solo practices, multi-location groups, and DSOs — where a single case covers a month of spend. We don&apos;t run paid search for routine cleanings; the economics don&apos;t work. HIPAA-aware conversion tracking throughout."
        primaryCta={{ label: "Get a free PPC audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <ServiceDefinition text="Google Ads for dentists is paid search bidding on procedure-level keywords — implants, Invisalign, cosmetic dentistry, full-arch — at $6-25 cost-per-click, with landing pages built to convert clicks into booked consultations. HIPAA-aware conversion tracking routes patient identifiers server-side so practice reporting stays compliant." />

      {/* ============================================================
          What we bid on — feature cards (2-up)
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we bid on (and what we won&apos;t)</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The economics of dental paid search.{" "}
            <em className="font-serif not-italic text-blue-600">
              Sharp.
            </em>
          </h2>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.06}
        >
          {bidScope.map((feature) => (
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
          Account structure sub-disciplines
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How we structure a dental PPC account</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            A clean dental Google Ads account.{" "}
            <em className="font-serif not-italic text-blue-600">
              Procedure by procedure.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            A clean dental Google Ads account separates campaigns by
            procedure, separates keywords by intent, and sends every click to
            a matching landing page. Three sub-disciplines make the account
            perform.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.06}
        >
          {accountDisciplines.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {item.body}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-neutral-900/85 leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 text-blue-600 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Direct pricing — paid-ads tier table (read from pricing.ts)
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing for dental Google Ads</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Bronze, Silver, Gold.{" "}
            <em className="font-serif not-italic text-blue-600">
              Ad spend billed separately.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Direct engagements run on the Bronze, Silver, and Gold tiers
            below. Ad spend is billed separately — our management fee is
            fixed, your ad spend is your ad spend. Multi-location groups and
            DSOs get per-location budgets on top of the chosen tier, with a
            group-level rollup for the marketing director.
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
          Numbers behind dental PPC
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What good dental PPC looks like</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three ranges anchor every plan.{" "}
            <em className="font-serif not-italic text-blue-600">
              No fake CPL guarantees.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            We will not name guaranteed CPL numbers — every market, every
            procedure, every landing page moves on its own data. What we
            commit to is monthly reporting on cost per booked consultation,
            cost per phone call, and conversion rate, with bids adjusted in
            writing by the same strategist running the account.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {ppcNumbers.map((item) => (
            <StaggerItem key={item.label}>
              <div className="bento h-full">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                  {item.label}
                </p>
                <p className="mt-3 text-4xl font-bold text-neutral-900">
                  {item.value}
                </p>
                <p className="mt-3 text-sm text-neutral-900/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Internal links — pair Google Ads with SEO and web
          ============================================================ */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-neutral-200/8 bg-neutral-900/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
            Pair Google Ads with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <Link
              href="/industries/dentists/seo"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              SEO for dentists — compound the spend you paid into Map Pack
            </Link>
            <Link
              href="/industries/dentists/web-design"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Dental web design — make landing pages that actually convert
            </Link>
            <Link
              href="/industries/dentists"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              See the dentist marketing hub
            </Link>
            <Link
              href="/services/paid-ads"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              ← See our full Paid Ads capability
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Dental PPC questions,{" "}
            <em className="font-serif not-italic text-blue-600">
              answered honestly.
            </em>
          </>
        }
        subhead="If you don&apos;t see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={dentistPpcFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            See where your ad budget is leaking.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free audit, yours to keep.
            </em>
          </>
        }
        subhead="Free PPC audit — campaign structure, landing pages, conversion tracking, HIPAA posture. Yours to keep, no obligation."
        primaryCta={{ label: "Get a free PPC audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-service-dentist-ppc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Google Ads for dentists",
              description:
                "Paid search management for dental practices, with procedure-level bidding on implants, Invisalign, and cosmetic procedures. HIPAA-aware conversion tracking.",
              path: "/industries/dentists/google-ads",
              serviceType: "DentalMarketing",
              areaServed: "Worldwide",
              priceRange: "$$",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-dentist-ppc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(dentistPpcFaq)),
        }}
      />
      <Script
        id="ld-bc-dentist-ppc"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: "Dentists", url: "/industries/dentists" },
              { name: "Google Ads", url: "/industries/dentists/google-ads" },
            ])
          ),
        }}
      />
    </>
  );
}
