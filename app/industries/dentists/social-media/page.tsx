import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Calendar,
  Megaphone,
  Star,
  ShieldCheck,
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
  title: "Social Media for Dentists · Content, Reviews, Community",
  description:
    "Social media for dentists — Instagram, Facebook, and TikTok content, paid social for high-value procedures, review-driving community management. HIPAA-aware tracking. Get a free social audit.",
  path: "/industries/dentists/social-media",
});

/* ============================================================
   3 roles social plays for dental practices
   ============================================================ */

const socialRoles = [
  {
    title: "Organic content cadence",
    description:
      "Organic posts keep the practice visible between appointments. Instagram and Facebook carry the main calendar — team Q&As, illustrated procedure explainers, hygienist tips, community spotlights. TikTok carries short educational video for the under-35 patient base. Cadence scales by tier: 12 posts per month at Bronze, 20 at Silver, 30 at Gold, spread across platforms. Each post goes through an approval flow before it ships. Every illustrated explainer replaces a before/after gallery by default — staff-led content, education, and team culture carry the visual weight instead.",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Paid social for high-value procedures",
    description:
      "Paid social on Meta and TikTok runs the same procedure-level funnels as paid search — implants, Invisalign, full-arch, cosmetic. Cost per lead on paid social runs higher than paid search in most markets, but the awareness lift compounds into cheaper paid-search CPL the next month, and the brand-search volume it generates feeds the SEO and Map Pack rankings. Paid social and paid search run from the same team when stacked, so budget allocation is shared and reporting lines up.",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    title: "Review-driving community management",
    description: (
      <>
        The third role is the loop back to the GBP. Every comment, DM, and
        review response is logged. Negative reviews get flagged within four
        business hours and routed to the practice owner for the response. The
        reply templates are drafted by us, approved by you, and sent by the
        front desk. The cadence is the lever: 8-15 fresh Google reviews per
        location per month beats a static 300, especially after the March 2026
        core update (
        <a
          href="https://petejohnsoniv.com/guide/dental-seo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300"
        >
          Pete Johnson IV&apos;s dental SEO guide
        </a>
        ).
      </>
    ),
    icon: <Star className="h-5 w-5" />,
  },
];

/* ============================================================
   Direct pricing — read from pricing.ts (social-media service id)
   ============================================================ */

const directService = getDirectService("social-media")!;

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
  cta: { label: `Start with ${t.id} Social Media`, href: "/contact" },
  popular: t.popular,
}));

/* ============================================================
   Calendar rules
   ============================================================ */

const calendarRules = [
  {
    title: "Review by the 20th",
    body: "The next month's calendar lands for review by the 20th of the current month. You see every post, caption, and asset before it ships.",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "One approval, no chase",
    body: "Approval is a single Slack or email reply. We do not chase approval threads — posts on the calendar ship on their scheduled date once approved.",
    icon: <Check className="h-5 w-5" />,
  },
  {
    title: "Repurpose across platforms",
    body: "Content gets repurposed across platforms. A 30-second TikTok clip becomes a Reel, a Facebook post, and a YouTube Short with platform-specific captions. One shoot, three placements.",
    icon: <Megaphone className="h-5 w-5" />,
  },
];

/* ============================================================
   HIPAA-aware paid social
   ============================================================ */

const hipaaRules = [
  "We sign a BAA where protected health information is touched.",
  "We route paid social events server-side through Meta Conversions API.",
  "We don't load remarketing pixels on patient-only pages.",
  "No before/after patient photos without written consent.",
];

/* ============================================================
   Content types
   ============================================================ */

const contentTypes = [
  "Illustrated procedure explainers (no patient photos)",
  "Team Q&As",
  "Hygienist tips",
  "Community spotlights",
  "Office-event recaps",
  "Patient testimonial posts (only with written photo consent on file)",
  "Short-form educational video",
];

/* ============================================================
   FAQ
   ============================================================ */

const dentistSocialFaq: FaqItem[] = [
  {
    question: "Do you run paid social for dental practices?",
    answer:
      "Yes — Meta works for high-value procedure funnels (implants, Invisalign, full-arch, cosmetic). Paid social and paid search run from the same team when stacked.",
  },
  {
    question: "Can we use before-and-after patient photos in social content?",
    answer:
      "Only with written consent. We avoid unconsented before/after photos on the marketing site by default. If your practice collects photo-release forms, we use real cases with authorization. Otherwise: illustration, staff-led content, educational video.",
  },
  {
    question: "Can you keep patient data out of paid social pixels?",
    answer:
      "Yes. We sign a BAA where PHI is touched, route paid social events server-side through Meta CAPI, and don't load remarketing pixels on patient-only pages.",
  },
  {
    question: "Do you handle multi-location and DSO social channels?",
    answer:
      "Yes. Each location gets its own content plan, posting calendar, and monthly report line. Single-brand and multi-brand voices both work.",
  },
  {
    question: "How long until social media moves the phone?",
    answer:
      "Brand-search lift shows in 60-90 days. Paid social booked consultations start arriving inside the first two weeks of campaign launch. Review-velocity changes show up on the GBP dashboard within the first month. We report all three monthly on a single written PDF.",
  },
];

export default function DentistSocialMediaPage() {
  return (
    <>
      <Hero
        eyebrow="Social media for dentists · content + reviews + community"
        title={
          <>
            Social media that fills the awareness funnel.{" "}
            <em className="font-serif not-italic text-blue-600">
              Without the agency overhead.
            </em>
          </>
        }
        subhead="Instagram, Facebook, and TikTok content, community management, and review-driving campaigns for dental practices. We run the calendar, you approve the posts. Works for solo, multi-location, and DSO groups. HIPAA-aware paid social tracking."
        primaryCta={{ label: "Get a free social audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <ServiceDefinition text="Social media for dentists is the combination of organic content, paid social campaigns, and review-driving community management on Instagram, Facebook, and TikTok — designed to fill the awareness funnel that paid search and SEO close. Content stays HIPAA-aware: no patient identifiers in paid pixels, no before/after patient photos without written consent." />

      {/* ============================================================
          What social media actually does — 3 roles
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What social media actually does for a dental practice</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Social is not the channel that fills the schedule.{" "}
            <em className="font-serif not-italic text-blue-600">
              It fills the funnel that fills it.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Social media is not the channel that fills the schedule. It is
            the channel that fills the brand-search funnel so paid search and
            SEO close. Three roles run together every month.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {socialRoles.map((role) => (
            <StaggerItem key={role.title}>
              <div className="bento bento-feature h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {role.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {role.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Direct pricing — social-media tier table
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing for dental social media</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Bronze, Silver, Gold.{" "}
            <em className="font-serif not-italic text-blue-600">
              Ad spend billed separately.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Direct engagements run on the Bronze, Silver, and Gold tiers
            below. The monthly fee covers content, community management, and
            reporting. Paid-ad spend on Meta and TikTok is billed
            separately. Multi-location and DSO engagements add per-location
            calendars on top of the chosen tier.
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
          Calendar rules
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How we run the calendar</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Three rules.{" "}
            <em className="font-serif not-italic text-blue-600">
              Predictable calendar, no approval bottleneck.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Three rules keep the calendar predictable and the practice owner
            out of the approval bottleneck.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-3"
          stagger={0.06}
        >
          {calendarRules.map((rule) => (
            <StaggerItem key={rule.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {rule.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {rule.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-10" delay={0.1}>
          <div className="rounded-2xl border border-blue-600/20 bg-blue-600/[0.04] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
              Content types we ship
            </p>
            <ul className="mt-4 grid gap-2 md:grid-cols-2 text-sm text-neutral-900/85">
              {contentTypes.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">→</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-900/65 italic">
              We never run before/after galleries without a signed
              photo-release form on file for the specific case.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          HIPAA-aware paid social
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">HIPAA-aware paid social</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Paid social pixels are the most common HIPAA leak point.{" "}
              <em className="font-serif not-italic text-blue-600">
                We close them at the source.
              </em>
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-neutral-900/80 leading-relaxed">
              <p>
                Paid social pixels are the most common HIPAA leak point in
                dental marketing. We route every booked-consultation and
                form-fill event server-side through Meta CAPI, so
                patient-level identifiers never pass through browser pixels.
                Remarketing audiences are excluded from any audience builder
                that touches PHI.
              </p>
              <p>
                Patient-only routes — booking confirmation, patient portal,
                intake forms — carry no ad tags at all. The photo-consent
                rule is enforced at the calendar level: a before/after post
                does not ship unless a signed photo-release form is on file
                for that specific patient.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bento bento-feature bento-lg h-full">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                The four rules
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-900/85">
                {hipaaRules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================================
          Internal links
          ============================================================ */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-neutral-200/8 bg-neutral-900/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
            Pair social with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <Link
              href="/industries/dentists/seo"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              SEO for dentists — capture the brand-search lift
            </Link>
            <Link
              href="/industries/dentists/google-ads"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Google Ads for dentists — capture the high-value procedure clicks
            </Link>
            <Link
              href="/industries/dentists"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              See the dentist marketing hub
            </Link>
            <Link
              href="/services/social-media"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              ← See our full Social Media capability
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Dental social questions,{" "}
            <em className="font-serif not-italic text-blue-600">
              answered honestly.
            </em>
          </>
        }
        subhead="If you don&apos;t see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={dentistSocialFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            See where your funnel is leaking.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free audit, yours to keep.
            </em>
          </>
        }
        subhead="Free social audit — content calendar, paid social setup, HIPAA posture, review flow. Yours to keep."
        primaryCta={{ label: "Get a free social audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-service-dentist-social"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Social media for dentists",
              description:
                "Organic content, paid social campaigns, and review-driving community management for dental practices on Instagram, Facebook, and TikTok. HIPAA-aware tracking.",
              path: "/industries/dentists/social-media",
              serviceType: "DentalMarketing",
              areaServed: "Worldwide",
              priceRange: "$$",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-dentist-social"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(dentistSocialFaq)),
        }}
      />
      <Script
        id="ld-bc-dentist-social"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: "Dentists", url: "/industries/dentists" },
              { name: "Social Media", url: "/industries/dentists/social-media" },
            ])
          ),
        }}
      />
    </>
  );
}
