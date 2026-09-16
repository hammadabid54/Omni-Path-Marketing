import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  MapPin,
  Star,
  FileText,
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
import { cn } from "@/lib/cn";
import { LinkButton } from "@/components/ui/button";
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";
import {
  getDirectService,
  type DirectTier as DirectTierConfig,
} from "@/content/pricing";

export const metadata: Metadata = buildMetadata({
  title: "Local SEO for Dentists · Map Pack + Service Pages",
  description:
    "Local SEO for dentists — Google Business Profile optimization, review velocity, service-page SEO, and HIPAA-aware tracking. Map Pack + organic, both. Get a free audit.",
  path: "/industries/dentists/seo",
});

/* ============================================================
   4 features in the bento grid (verbatim from draft)
   ============================================================ */

const seoFeatures = [
  {
    title: "Google Business Profile optimization",
    description:
      "Profile completeness — categories, services, hours, photos, attributes — is the cheapest ranking win in dental SEO. We rewrite the business description, set the right primary and secondary categories, add procedure-level service entries, post weekly GBP updates, and refresh photos monthly. Each location gets its own profile with its own login, posts, and ranking report.",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    title: "Review velocity system",
    description: (
      <>
        Review count matters less than review velocity after the March 2026
        core update — fresh reviews carry about 2.3x the weight of older
        reviews (
        <a
          href="https://petejohnsoniv.com/guide/dental-seo"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300"
        >
          Pete Johnson IV&apos;s dental SEO guide
        </a>
        ). We install a text-back review request flow tied to appointment
        close-out, draft response templates your front desk can send in under
        a minute, and flag negative reviews within four business hours.
        Targets: 8-15 fresh reviews per location per month, 4.7+ star average,
        100% response rate on new reviews.
      </>
    ),
    icon: <Star className="h-5 w-5" />,
  },
  {
    title: "Service-page SEO",
    description:
      "One procedure page per high-value service — implants, Invisalign, full-arch, cosmetic, sedation, same-day emergency. Each page ships with procedure-specific schema, illustrated explainers in place of before/after galleries, internal links from the homepage, and a booking CTA above the fold. We rewrite titles, H1s, and meta descriptions against the current top 10 ranking pages every quarter.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "HIPAA-aware tracking",
    description:
      "We sign a BAA where protected health information is touched. We route ad tracking server-side (Meta CAPI, GA4 server-side) so patient-level identifiers never sit in browser pixels. We never load remarketing pixels on patient-only pages — booking confirmation, patient portal, intake forms. This is a named feature on the engagement, not an upsell.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

/* ============================================================
   Direct pricing — read from central config
   ============================================================ */

const directService = getDirectService("seo")!;

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
  cta: { label: `Start with ${t.id} SEO`, href: "/contact" },
  popular: t.popular,
}));

/* ============================================================
   FAQ
   ============================================================ */

const dentistSeoFaq: FaqItem[] = [
  {
    question: "How long until my practice ranks in the Map Pack?",
    answer:
      "Movement shows in 60-90 days on long-tail local queries and 4-6 months on \"dentist [city].\" We show movement monthly on a real-time dashboard.",
  },
  {
    question: "How many reviews does my practice need?",
    answer:
      "4.7+ stars and 50+ reviews to compete in most metros. The lever is velocity — 8-15 fresh reviews per month beats a static 300.",
  },
  {
    question: "Do you handle multi-location and DSO GBP work?",
    answer:
      "Yes. Each location gets its own GBP, landing page, keyword set, and report line. Group-level dashboards roll up for the DSO marketing director.",
  },
  {
    question: "Can you keep us HIPAA-safe while running ads and tracking rankings?",
    answer:
      "We sign a BAA where PHI is touched, route ad tracking server-side (Meta CAPI, GA4 server-side) so patient-level identifiers never sit in browser pixels, and never load remarketing pixels on patient-only pages (booking, portal, intake). This is a named feature on the engagement, not an upsell.",
  },
  {
    question: "What's the difference between Map Pack SEO and regular SEO?",
    answer:
      "Map Pack SEO targets the local map results — Google Business Profile, reviews, and proximity do the heavy lifting. Regular organic SEO targets the ten blue links — content quality, links, and on-page signals do the heavy lifting. Dental local SEO needs both: Map Pack for \"dentist [city]\" and organic for high-value procedure terms.",
  },
];

/* ============================================================
   90-day roadmap
   ============================================================ */

const roadmapSteps = [
  {
    number: "01",
    title: "Audit",
    body: "GBP audit, site crawl, citation scan, backlink profile, competitor ranking report. You get the audit in writing, yours to keep.",
    meta: "Week 1",
  },
  {
    number: "02",
    title: "Strategy",
    body: "90-day roadmap with target keywords, content plan, link plan, GBP update cadence, and reporting. Approved in writing before we touch the profile.",
    meta: "Week 2",
  },
  {
    number: "03",
    title: "Ship",
    body: "GBP overhaul, on-page SEO across priority pages, citation cleanup, first round of content and link placements.",
    meta: "Month 1-3",
  },
  {
    number: "04",
    title: "Report",
    body: "Written PDF with rankings movement, GBP actions, review count, content shipped, links shipped, and the next 30-day plan. Plain English, no screenshot dumps.",
    meta: "Monthly",
  },
];

export default function DentistSeoPage() {
  return (
    <>
      <Hero
        eyebrow="SEO for dentists · Map Pack + service pages"
        title={
          <>
            Local SEO that gets the phone ringing.{" "}
            <em className="font-serif not-italic text-blue-600">
              Without the agency overhead.
            </em>
          </>
        }
        subhead={
          "We optimize your Google Business Profile, your reviews, and your service pages to rank in the Map Pack for \"dentist [city]\" and convert that ranking into booked appointments. HIPAA-aware tracking throughout."
        }
        primaryCta={{ label: "Get a free local SEO audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />

      <ServiceDefinition text="Local SEO for dentists is ranking a dental practice's Google Business Profile in the Map Pack and its service pages in organic search for high-value procedures like implants, Invisalign, and cosmetic dentistry. The biggest lever is the GBP itself — roughly a third of Local Pack weight — followed by review velocity, on-page signals, and links." />

      {/* ============================================================
          4-feature bento grid
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What local SEO for dentists actually includes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Four levers.{" "}
            <em className="font-serif not-italic text-blue-600">
              One monthly cadence.
            </em>
          </h2>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.06}
        >
          {seoFeatures.map((feature) => (
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
          The Map Pack split — what we move and what we don't
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <Eyebrow className="mb-4">The Map Pack split</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              What we move.{" "}
              <em className="font-serif not-italic text-blue-600">
                And what we can&apos;t.
              </em>
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-900/80 leading-relaxed">
              Honest ranking expectations keep dental buyers from
              over-promising to their teams. On a clean GBP with a steady
              review cadence, local long-tail queries (&ldquo;dentist for
              implants [city]&rdquo;, &ldquo;same-day crown [city]&rdquo;)
              move into the Map Pack within 60-90 days. Top-3 on the head
              term &ldquo;dentist [city]&rdquo; takes 4-6 months and depends
              on review base and how aggressively surrounding practices are
              investing in their own GBP.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-neutral-200/8 bg-white p-6 md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                What we cannot move
              </p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-900/85">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900/5 text-neutral-900/45 text-xs">
                    ×
                  </span>
                  <span>Google&apos;s hard proximity radius from the searcher&apos;s location</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900/5 text-neutral-900/45 text-xs">
                    ×
                  </span>
                  <span>A competitor with 1,000+ reviews and a 4.9-star average</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-900/5 text-neutral-900/45 text-xs">
                    ×
                  </span>
                  <span>A market where the head term is dominated by aggregator sites</span>
                </li>
              </ul>

              <p className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                What we move
              </p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-900/85">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>GBP completeness, categories, services, posts, photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Review velocity, response rate, flag-and-route on negatives</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>On-page SEO, citation cleanup, internal linking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Link placements on relevant healthcare sites</span>
                </li>
              </ul>

              <p className="mt-8 text-sm text-neutral-900/65 italic">
                We name which market you are in during the audit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================================
          Direct pricing tier table — read from pricing.ts
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing for dental SEO</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Bronze, Silver, Gold.{" "}
            <em className="font-serif not-italic text-blue-600">
              One fee per month.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Direct engagements run on the Bronze, Silver, and Gold tiers
            below. Ad spend is not a factor for SEO — the monthly fee is the
            only line item. Multi-location groups and DSOs add per-location
            pricing on top of the chosen tier.
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
          90-day dental SEO roadmap
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Process</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            90-day dental SEO roadmap.{" "}
            <em className="font-serif not-italic text-blue-600">
              Four steps.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            A predictable four-step engagement from kickoff to first ranking
            movement.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {roadmapSteps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento h-full">
                <div className="flex items-center gap-2 text-blue-600 text-xs uppercase tracking-widest font-semibold">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10">
                    {step.number}
                  </span>
                  Step
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">
                  {step.body}
                </p>
                <p className="mt-3 text-xs text-neutral-900/45">{step.meta}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Internal links — pair SEO with paid + web + audit
          ============================================================ */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-neutral-200/8 bg-neutral-900/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
            Pair dental SEO with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <Link
              href="/industries/dentists/google-ads"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Google Ads for dentists — get leads now while SEO compounds
            </Link>
            <Link
              href="/industries/dentists/web-design"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Web design for dentists — fix the technical SEO baseline
            </Link>
            <Link
              href="/industries/dentists"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              See the dentist marketing hub
            </Link>
            <Link
              href="/services/seo"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              ← See our full SEO capability
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Dental SEO questions,{" "}
            <em className="font-serif not-italic text-blue-600">
              answered honestly.
            </em>
          </>
        }
        subhead="If you don't see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={dentistSeoFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            See where your GBP is leaking calls.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free audit, yours to keep.
            </em>
          </>
        }
        subhead="Free local SEO audit — GBP, reviews, service pages, citations. Yours to keep."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-service-dentist-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Local SEO for dentists",
              description:
                "Google Business Profile optimization, review velocity, service-page SEO, and HIPAA-aware tracking for dental practices.",
              path: "/industries/dentists/seo",
              serviceType: "DentalMarketing",
              areaServed: "Worldwide",
              priceRange: "$$",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-dentist-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(dentistSeoFaq)),
        }}
      />
      <Script
        id="ld-bc-dentist-seo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: "Dentists", url: "/industries/dentists" },
              { name: "SEO", url: "/industries/dentists/seo" },
            ])
          ),
        }}
      />
    </>
  );
}
