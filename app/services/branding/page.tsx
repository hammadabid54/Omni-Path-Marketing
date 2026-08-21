import type { Metadata } from "next";
import Script from "next/script";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { TldrBox } from "@/components/sections/tldr-box";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import {
  buildMetadata,
  faqSchema,
  serviceSchema,
  breadcrumbSchema,
  type FaqItem,
} from "@/lib/seo";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import {
  ScrollReveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import {
  Palette,
  Type,
  BookOpen,
  LayoutTemplate,
  MessageCircle,
  Presentation,
  Clock,
  FileCheck,
  ArrowRight,
  Check,
  Sparkles,
  Layers,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Branding Services · Logo, Identity & Full System from $99 | Omni Path",
  description:
    "Branding services for businesses and white-label for agencies. Logo from $349, brand identity from $999, full system from $1,999. 3-14 day turnaround, full IP transfer.",
  path: "/services/branding",
});

/* ============================================================
   Direct pricing — detailed cards with explicit tier scope
   ============================================================ */

interface DirectTier {
  name: string;
  price: string;
  turnaround: string;
  badge?: string;
  includes: string[];
  upgrade?: string[];
  cta: { label: string; href: string };
  popular?: boolean;
}

const directTiers: DirectTier[] = [
  {
    name: "Logo",
    price: "$349",
    turnaround: "5-day turnaround · one-time",
    badge: "Starter",
    includes: [
      "3 logo concepts to choose from",
      "3 rounds of revisions",
      "Source files: SVG, PNG, PDF, EPS",
      "Black, white, and color variants",
      "Commercial usage rights",
    ],
    upgrade: [
      "Color palette + typography pairings",
      "20-page brand guide with usage rules",
      "12 social templates (IG, LinkedIn, X)",
    ],
    cta: { label: "Start a Logo project", href: "/contact" },
  },
  {
    name: "Brand Identity",
    price: "$999",
    turnaround: "14-day turnaround · one-time",
    badge: "Most popular",
    includes: [
      "Everything in the Logo tier",
      "Full color palette with HEX, RGB, CMYK codes",
      "Typography system: 2 typefaces, 6 weights",
      "20-page brand guide (PDF + Figma)",
      "Logo usage rules, do's and don'ts",
      "Brand mark, sub-mark, and favicon set",
    ],
    upgrade: [
      "Business cards, letterhead, email signature",
      "Pitch deck template (12 slides)",
      "Brand voice doc (tone, vocabulary, sample copy)",
      "Social media template pack (20+ designs)",
    ],
    cta: { label: "Start a Brand Identity project", href: "/contact" },
    popular: true,
  },
  {
    name: "Full Brand System",
    price: "$1,999",
    turnaround: "14-day turnaround · one-time",
    badge: "Complete rebrand",
    includes: [
      "Everything in the Brand Identity tier",
      "Business cards + letterhead + envelope",
      "Email signature HTML template",
      "Pitch deck template: 12 slides, editable",
      "Social media template pack: 20+ designs",
      "Brand voice doc + messaging framework",
      "Launch playbook with rollout checklist",
    ],
    cta: { label: "Start a Full Brand System project", href: "/contact" },
  },
];

/* ============================================================
   White-label pricing — for agencies that resell
   ============================================================ */

interface WhiteLabelTier {
  name: string;
  ourPrice: string;
  resell: string;
  turnaround: string;
  margin: string;
}

const whiteLabelTiers: WhiteLabelTier[] = [
  {
    name: "Logo",
    ourPrice: "$99",
    resell: "$500-900",
    turnaround: "3-day turnaround",
    margin: "80-89% margin",
  },
  {
    name: "Brand Identity",
    ourPrice: "$399",
    resell: "$2,000-3,500",
    turnaround: "7-day turnaround",
    margin: "80-89% margin",
  },
  {
    name: "Full Brand System",
    ourPrice: "$999",
    resell: "$4,500-7,500",
    turnaround: "10-day turnaround",
    margin: "78-87% margin",
  },
];

/* ============================================================
   Why us vs traditional agency — comparison bullets
   ============================================================ */

const whyUsBullets = [
  {
    label: "Turnaround",
    us: "5-14 days",
    them: "6-10 weeks",
  },
  {
    label: "Price for a logo",
    us: "$349",
    them: "$2,000-8,000",
  },
  {
    label: "Price for a full brand system",
    us: "$1,999",
    them: "$10,000-30,000",
  },
  {
    label: "Revisions included",
    us: "3 rounds",
    them: "1-2 rounds, then billable",
  },
  {
    label: "Source file ownership",
    us: "Full IP, transferred on payment",
    them: "Often licensed, not transferred",
  },
  {
    label: "Communication",
    us: "Direct Slack with the designer",
    them: "Account manager relay",
  },
];

/* ============================================================
   What's in every plan
   ============================================================ */

const includedInEveryPlan = [
  {
    icon: <FileCheck className="h-5 w-5" />,
    title: "All source files",
    body: "SVG, PNG, PDF, EPS, Figma where relevant. Edit anything, any time.",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "Full IP transfer",
    body: "You own the work the moment final payment clears. Use it commercially, anywhere.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Senior designer, every project",
    body: "No juniors, no offshore handoffs. The person on the brief is the person drawing.",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Fixed timeline, fixed price",
    body: "Quote is final. Turnaround is in writing. No surprise invoices for extra rounds.",
  },
];

/* ============================================================
   Behind the scenes — the tool stack behind the speed
   ============================================================ */

interface BehindTheScenesTool {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const behindTheScenesTools: BehindTheScenesTool[] = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Midjourney / DALL-E + custom prompts",
    body:
      "We generate 50+ logo concepts in 10 minutes from your brief. Each one is unique, not a recolor of the same shape. Senior designer reviews every direction, kills the 47 that miss, and picks the strongest 3 to refine. More options, less wait.",
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Khroma + Coolors",
    body:
      "AI-extracted color palettes matched to your brand voice, your industry, and your audience. We deliver 3 directions, not 30 random swatches for you to wade through on a Friday night.",
  },
  {
    icon: <Type className="h-5 w-5" />,
    title: "Fontjoy + Google Fonts",
    body:
      "Automated typography pairing tuned to brand personality: confident, friendly, technical, or luxury. Two typefaces, six weights, every pair pre-tested for legibility from 12px to 200px. No guesswork, no endless type library scroll.",
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "GPT-4 brand voice extraction",
    body:
      "Feed it 5 pages of your existing copy. It returns a full voice doc: tone, vocabulary, do's, don'ts, and sample lines your team can use today.",
  },
  {
    icon: <LayoutTemplate className="h-5 w-5" />,
    title: "Figma + auto-layout",
    body:
      "20-page brand guide built in 2 hours, not 2 weeks. Auto-layout handles spacing, grids, and every export variant. Final guide is editable, not a locked PDF.",
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Canva brand kit",
    body:
      "Social templates, business cards, email signatures, plus launch graphics like cover images, banner templates, and email headers, all auto-generated from your colors and fonts. Drop your logo in once, every asset stays on-brand forever.",
  },
];

const behindTheScenesOutcomes = [
  "3-day logo turnaround, not 3 weeks",
  "50+ concepts reviewed, you pick the best",
  "5 hours of senior designer time, not 40",
];

/* ============================================================
   The process
   ============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Brief",
    body: "You fill a 10-minute brief. Business, audience, brands you like, brands you don't. We read it the same day.",
    meta: "Day 1",
  },
  {
    number: "02",
    title: "Concepts",
    body: "We deliver the first round of concepts within 48-72 hours. Three directions, not ten watered-down ones.",
    meta: "Day 2-3",
  },
  {
    number: "03",
    title: "Revisions",
    body: "You pick a direction. We refine based on your feedback. Up to 3 rounds included, then we quote extras.",
    meta: "Day 4-7",
  },
  {
    number: "04",
    title: "Final files",
    body: "Approved concept gets exported in every format you need: SVG, PNG, PDF, EPS, Figma source.",
    meta: "Day 8-10",
  },
  {
    number: "05",
    title: "Handoff",
    body: "You get a single folder with every asset, a one-page usage guide, and 30 days of post-delivery tweaks.",
    meta: "Day 11-14",
  },
];

/* ============================================================
   FAQ — page-specific, defined inline to avoid drift
   ============================================================ */

const brandingFaq: FaqItem[] = [
  {
    question: "How fast do you deliver a logo?",
    answer:
      "The Logo tier ships in 5 business days from the day you approve the brief. Brand Identity takes 14 days. Full Brand System also takes 14 days because most of the work happens in parallel. White-label logo delivery is 3 days. We work in fixed timelines, not estimates, so the date you get at signup is the date you ship.",
  },
  {
    question: "What if I don't like the concepts?",
    answer:
      "Every tier starts with 3 distinct concepts, not variations on one idea. If none of them land, we redraw from a different angle at no extra cost within the first 7 days. The goal is a logo you actually want to use, not one you settled on. If we genuinely cannot find a direction you like, we refund the project minus a 15% brief fee.",
  },
  {
    question: "Do I own the final files?",
    answer:
      "Yes. Full IP transfers to you the moment final payment clears. You can trademark it, license it, sell the company with it, or modify it 10 years from now. We do not retain rights, do not resell concepts, and do not include the work in our portfolio without written permission. Source files come in editable formats, not locked PDFs.",
  },
  {
    question: "Can you match a brand I already like?",
    answer:
      "We can take inspiration from a brand you admire and build something original in that same spirit, but we will not copy a trademarked logo, color system, or typeface. If you want a brand refresh, we start from your current assets and evolve them. Send us your existing files and 2-3 reference brands and we will scope a refresh on the Identity or Full System tier.",
  },
  {
    question: "What's the difference between Logo and Brand Identity?",
    answer:
      "Logo is a single mark in 3-4 file formats. Brand Identity is the full system around the mark: color palette with codes, typography pairings, 20-page usage guide, sub-marks, favicon, and do's and don'ts. Most new businesses start at Logo and upgrade to Identity within 6 months once they need business cards, social templates, or a website that matches. White-label prices are 60-80% lower than direct because we deliver in volume.",
  },
];

export default function BrandingServicePage() {
  return (
    <>
      <ServicePageTemplate
        heroEyebrow="Branding · logo, identity, full system"
        heroTitle={
          <>
            Branding services that{" "}
            <em className="font-serif not-italic text-lime-400">ship in days.</em>
          </>
        }
        heroSubhead="Branding services for businesses and white-label for agencies. Logo from $349, brand identity from $999, full brand system from $1,999. 3-14 day turnaround, full IP transfer, senior designer on every project."
        heroPrimaryCta={{ label: "Get a free brand audit", href: "/contact" }}
        heroSecondaryCta={{ label: "See pricing", href: "/pricing" }}
        heroTrustMicrocopy="Full IP transfer on payment · 3 revisions included · 5-14 day turnaround"
        definition="Branding is the design of a complete visual and verbal identity — logo, color system, typography, voice, and brand book — that distinguishes a business from competitors. AI-assisted branding produces more concepts faster; a senior designer selects and refines the final direction so the work is fast, distinctive, and IP-clean."

        whatWeDoEyebrow="What we do"
        whatWeDoTitle={
          <>
            Every brand artifact.{" "}
            <em className="font-serif not-italic text-lime-400">One team.</em>
          </>
        }
        whatWeDoSubhead="From the first sketch to the final pitch deck, we run the full branding stack in-house. No subcontracted juniors, no offshore handoffs, no weeks of account-manager relay."
        features={[
          {
            title: "Logo design",
            description: "3 concepts, 3 revisions, full source files. 5-day turnaround.",
            icon: <Palette className="h-5 w-5" />,
          },
          {
            title: "Color & typography",
            description: "Color palette with HEX/RGB/CMYK codes, 2 typefaces, 6 weights.",
            icon: <Type className="h-5 w-5" />,
          },
          {
            title: "Brand guide",
            description: "20-page guide: logo usage, spacing, color rules, do's and don'ts.",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            title: "Templates",
            description: "20+ social templates, email signature, business cards, letterhead.",
            icon: <LayoutTemplate className="h-5 w-5" />,
          },
          {
            title: "Brand voice",
            description: "Tone, vocabulary, sample copy, messaging framework for your team.",
            icon: <MessageCircle className="h-5 w-5" />,
          },
          {
            title: "Pitch deck",
            description: "12-slide editable template for sales, investors, or partnerships.",
            icon: <Presentation className="h-5 w-5" />,
          },
        ]}

        hideFaq
        hideCta
      />

      {/* ============================================================
          Direct pricing — detailed cards
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            For businesses.{" "}
            <em className="font-serif not-italic text-lime-400">No studio overhead.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Three tiers, one-time price, full IP transfer. Each tier is a clear
            scope. The &ldquo;Upgrade to&hellip;&rdquo; line under every card
            shows exactly what gets added if you step up, so you can pick the
            right level without guessing.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-5 lg:grid-cols-3"
          stagger={0.06}
        >
          {directTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={cn(
                  "bento h-full flex flex-col",
                  tier.popular && "border-lime-400/40 bg-lime-400/[0.03]"
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Layers className="h-4 w-4 text-lime-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {tier.name}
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
                  <span className="text-4xl font-bold text-lime-400">
                    {tier.price}
                  </span>
                  <span className="text-xs text-white/55">one-time</span>
                </div>
                <p className="mt-1 text-xs text-white/55 uppercase tracking-wider">
                  {tier.turnaround}
                </p>

                <div className="mt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-white/55">
                    What we do under this tier
                  </p>
                  <ul className="mt-3 space-y-2">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-white/80 leading-relaxed"
                      >
                        <Check className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {tier.upgrade && tier.upgrade.length > 0 && (
                  <div className="mt-6 rounded-lg border border-white/8 bg-white/[0.02] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-lime-400">
                      Upgrade to {directTiers[directTiers.indexOf(tier) + 1]?.name ?? "next tier"} for:
                    </p>
                    <ul className="mt-2 space-y-1.5">
                      {tier.upgrade.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-white/70 leading-relaxed"
                        >
                          <ArrowRight className="h-3.5 w-3.5 mt-1 text-white/40 shrink-0" />
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
          White-label pricing — for agencies
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            For agencies.{" "}
            <em className="font-serif not-italic text-lime-400">80% margin.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Resell under your own brand. Your client never sees us, never hears
            from us, and the deliverables ship with your logo and your colors.
            The numbers below show the math: what you pay us, what you charge,
            and the margin you keep.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">You pay us</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                  <th className="px-5 py-4 font-medium">Turnaround</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                </tr>
              </thead>
              <tbody>
                {whiteLabelTiers.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 last:border-0"
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.name}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.ourPrice}
                    </td>
                    <td className="px-5 py-4 text-white/85">
                      {row.resell}
                    </td>
                    <td className="px-5 py-4 text-white/70">
                      {row.turnaround}
                    </td>
                    <td className="px-5 py-4 text-white/70">{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-white/45">
            Margins calculated on the low end of the resell range. White-label
            partner agencies get a private Slack, white-labeled delivery portal,
            and a dedicated partner manager after 5 projects.
          </p>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          Why us vs a traditional agency
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why us vs a traditional agency</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Same deliverables.{" "}
            <em className="font-serif not-italic text-lime-400">Better numbers.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Traditional agencies charge studio overhead, account-manager
            layers, and weeks of meetings. We built the pipeline on AI +
            automation so our costs are 70% lower. The savings go to you. The
            quality stays. Here is the side-by-side.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">What you get</th>
                  <th className="px-5 py-4 font-medium text-lime-400">
                    Omni Path
                  </th>
                  <th className="px-5 py-4 font-medium">Traditional agency</th>
                </tr>
              </thead>
              <tbody>
                {whyUsBullets.map((row) => (
                  <tr key={row.label} className="border-b border-white/5 last:border-0">
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">
                      {row.us}
                    </td>
                    <td className="px-5 py-4 text-white/60">{row.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-sm text-white/65 leading-relaxed">
            The short version: a logo that takes a traditional agency 6 weeks
            and $4,000 lands in our hands in 5 days for $349. A full brand
            system that would cost $25,000 at a big studio runs $1,999 here in
            14 days. The senior designer is the same caliber. The process is
            just faster because we cut the meetings, the rounds, and the
            account-manager relay. Your brand goes live sooner, costs less, and
            ships with full IP transfer on day one.
          </p>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          What's in every plan
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&apos;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            No gotchas.{" "}
            <em className="font-serif not-italic text-lime-400">No add-ons.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Every tier, direct or white-label, ships with the same four things.
            These are not upsells. They are the baseline.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {includedInEveryPlan.map((item) => (
            <StaggerItem key={item.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Behind the scenes — how we ship branding so fast
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Branding at{" "}
            <em className="font-serif not-italic text-lime-400">founder speed.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            The reason a 5-day logo costs $349 instead of $4,000 is not lower
            quality but a production pipeline built on AI and automation, with
            a senior designer directing every step, the same human review and
            final polish, and just less busywork billed at $150 an hour — here
            is the actual tool stack behind every project we ship.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {behindTheScenesTools.map((tool) => (
            <StaggerItem key={tool.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {tool.icon}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {tool.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.1} className="mt-12">
          <div className="rounded-2xl border border-lime-400/30 bg-lime-400/[0.04] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-lime-400">
              What this means for you
            </p>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {behindTheScenesOutcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-2 text-sm text-white/85 leading-relaxed"
                >
                  <Check className="h-4 w-4 mt-0.5 text-lime-400 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-white/75 leading-relaxed">
              Same deliverables a $25,000 studio brand would ship, at
              founder-friendly numbers. The senior designer is still on the
              project — they just stopped spending their week on tasks a script
              can finish in seconds. That is the whole game: automate the
              busywork, pay for the judgment, ship in days not months. Your
              brand costs less because we cut the meetings, the rounds, and the
              account-manager relay. The designer who draws your logo is the
              same caliber you would find at a big studio. The only difference
              is what we charge, because what we charge reflects what the work
              actually costs to run. Less overhead, same outcome, lower
              invoice. That is the founder-friendly part — a $349 logo
              instead of a $4,000 logo, because the bill reflects the real
              cost of the work, not the cost of a fancy studio lease.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ============================================================
          The process
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Brief to handoff.{" "}
            <em className="font-serif not-italic text-lime-400">Five steps.</em>
          </h2>
          <p className="mt-4 text-white/70 max-w-xl">
            Same process whether you are a direct client booking a $999 Brand
            Identity or an agency running a $399 white-label resell. The brief
            takes 10 minutes. Concepts land in 48-72 hours. Final files ship
            on day 5-14.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          stagger={0.08}
        >
          {processSteps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento h-full">
                <div className="flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/10">
                    {step.number}
                  </span>
                  Step
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {step.body}
                </p>
                <p className="mt-3 text-xs text-white/45 inline-flex items-center gap-1.5">
                  <span className="dot" /> {step.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal className="mt-10 text-center text-sm text-white/55" delay={0.2}>
          Total time, brief to delivered files:{" "}
          <span className="text-lime-400 font-semibold">5-14 days</span>. Fixed
          in writing at signup.
        </ScrollReveal>
      </Section>

      {/* Internal links — context for crawlers and users */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/55">
            Pair branding with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <LinkButton
              href="/services/web-design"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              Web design — ship a site that matches the new brand
            </LinkButton>
            <LinkButton
              href="/services/seo"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              SEO — rank the new domain from day one
            </LinkButton>
            <LinkButton
              href="/services/social-media"
              variant="ghost"
              size="sm"
              className="justify-start"
            >
              <ArrowRight className="h-4 w-4 text-lime-400" />
              Social media — launch with 30 days of content
            </LinkButton>
          </div>
        </div>
      </Section>

      <TldrBox
        items={[
          "Branding services from $349 (logo) to $1,999 (full system). One-time price, full IP, 5-14 day turnaround.",
          "White-label for agencies: pay $99-999, resell at $500-7,500. 78-89% margin per project.",
          "Senior designer on every project. 3 concepts, 3 revisions, source files in every format.",
        ]}
      />

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            Branding questions,{" "}
            <em className="font-serif not-italic text-lime-400">honestly.</em>
          </>
        }
        items={brandingFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            Ready for a brand that{" "}
            <em className="font-serif not-italic text-lime-400">works?</em>
          </>
        }
        subhead="Tell us about your business. We will send 3 concepts within 48-72 hours. No long onboarding, no proposal deck, no sales call required."
        primaryCta={{ label: "Get a free brand audit", href: "/contact" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      <Script
        id="ld-service-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Branding & Identity Services",
              description:
                "Logo, identity, and full brand systems. AI-assisted production, senior designer on every project. White-label from $99. Direct from $349. 3-14 day turnaround.",
              path: "/services/branding",
              serviceType: "AI-Assisted Branding",
              priceRange: "$99-$1999",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(brandingFaq)),
        }}
      />
      <Script
        id="ld-bc-branding"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Branding", url: "/services/branding" },
            ])
          ),
        }}
      />
    </>
  );
}
