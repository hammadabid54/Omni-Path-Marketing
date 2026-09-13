import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { ServiceDefinition } from "@/components/sections/service-definition";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema, type FaqItem } from "@/lib/seo";
import { getDirectService, WL_OTHER_SERVICES, WL_PRICE_RANGE } from "@/content/pricing";
import {
  LayoutTemplate,
  Layers,
  ShoppingBag,
  BarChart2,
  Smartphone,
  Search,
  Check,
  Zap,
  Globe,
  ShieldCheck,
  Rocket,
  FileCheck2,
  Wrench,
  Code2,
  Gauge,
  Activity,
  Bot,
  FlaskConical,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "AI Web Design & CRO Services · Bronze $150 to Gold $500/mo | Omni Path",
  description:
    "AI-assisted web design on Next.js, Webflow, WordPress, Shopify. Direct Bronze $150 / Silver $300 / Gold $500 per month. White-label $150-250 per client. Mobile-first, Lighthouse 90+, monthly retainer.",
  path: "/services/web-design",
});

const webDesignFaq: FaqItem[] = [
  {
    question: "How long does a typical website take to build?",
    answer:
      "Landing pages ship in 5 days. Standard sites ship in 10 days. Custom builds take 21 days. The clock starts the day you sign off on the brief, not the day you book the call. After launch, the monthly retainer covers ongoing design updates, hosting, security, and CRO. We don't promise dates we can't keep, and we hit our dates on 95%+ of builds.",
  },
  {
    question: "Do you write the copy or do I?",
    answer:
      "We write it. AI drafts the first pass, a senior human editor polishes the words, tightens the structure, and checks the tone. You give us a short brief — your offer, your audience, your tone of voice — and we handle the rest. If you'd rather write it yourself, send it over and we'll polish what you wrote.",
  },
  {
    question: "Will the site be fast on mobile?",
    answer:
      "Yes. Every build hits a Lighthouse mobile score of 90+ for performance. We test on real 4G, not on fiber Wi-Fi at our office. Fast sites rank better on Google, convert more visitors into customers, and feel more professional on every device your customers carry in their pocket.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "Every monthly plan includes ongoing design updates, new pages, and new copy in scope. Bigger rebuilds are quoted separately. We do not ghost after launch — that is the whole point of a retainer engagement.",
  },
  {
    question: "Do you build on WordPress or something else?",
    answer:
      "We build on whatever fits the brief. Next.js for custom builds and high-traffic projects. Webflow for fast standard sites. Shopify for e-commerce. WordPress when you genuinely need it. You own the code, the CMS login, and the domain — always, no exceptions, no lock-in.",
  },
];

/* ============================================================
   Direct pricing — read from central config
   ============================================================ */
const directService = getDirectService("web-design")!;

interface DirectTierRow {
  name: string;
  price: string;
  blurb: string;
  includes: string[];
  upgrade?: string;
  popular?: boolean;
  cta: { label: string; href: string };
}

const blurbByTier: Record<string, string> = {
  Bronze: "Template design, basic hosting, the foundation that ships.",
  Silver: "Custom design + ongoing updates + CRO baked in.",
  Gold: "Full custom + e-com + speed + dedicated senior attention.",
};

const directTiers: DirectTierRow[] = directService.tiers.map((t, i) => ({
  name: t.id,
  price: t.price,
  blurb: blurbByTier[t.id] ?? "",
  includes: t.features,
  upgrade:
    i < directService.tiers.length - 1
      ? `Upgrade to ${directService.tiers[i + 1].id} for: ${directService.tiers[i + 1]!.features.slice(0, 3).join(" + ")}.`
      : undefined,
  popular: t.popular,
  cta: { label: `Start with ${t.id}`, href: "/contact" },
}));

const WL_ROW = WL_OTHER_SERVICES.find((s) => s.id === "web-design")!;

export default function WebDesignServicePage() {
  return (
    <>
      <Hero
        eyebrow="Web Design & CRO · design + build + conversion"
        title={
          <>
            Sites that <em className="font-serif not-italic text-blue-600">convert.</em>
          </>
        }
        subhead="Web design services built for one thing: revenue. Landing pages, multi-page sites, e-commerce, and conversion rate optimization — monthly retainers from $150/mo, no setup fees, 30-day post-launch support, white-label available for agencies."
        primaryCta={{ label: "Get a free conversion audit", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "#pricing" }}
        trustMicrocopy="No setup fees · Monthly retainer · White-label available for agencies"
      />

      <ServiceDefinition
        text="AI-assisted web design is the build of conversion-focused websites on Next.js, Webflow, WordPress, or Shopify using AI for content drafts, layout generation, and CRO analysis, with a senior designer and developer polishing the final output. Shipped in 5-21 days, mobile-first, Lighthouse 90+ across the board, and covered by a monthly retainer for ongoing updates, hosting, and CRO."
      />

      {/* 1. What we do */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Every page type. <em className="font-serif not-italic text-blue-600">Built to ship.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Six core services cover 95% of what a business needs from its web presence. We pick the
            right one for your brief, build it on the right stack, and ship it on a real deadline —
            not a &ldquo;we&apos;ll get back to you with a timeline&rdquo; deadline.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {[
            {
              title: "Landing page design",
              description: "One page, one goal, one CTA. Built to convert paid traffic, run A/B tests, or validate an offer before you scale spend.",
              icon: <LayoutTemplate className="h-5 w-5" />,
            },
            {
              title: "Multi-page websites",
              description: "New builds or website redesigns — up to 20 pages: home, about, services, case studies, contact. Responsive web design, on-page SEO, real CMS access.",
              icon: <Layers className="h-5 w-5" />,
            },
            {
              title: "E-commerce stores",
              description: "Shopify or Stripe. Product setup, payments, shipping, tax, abandoned cart flows. Ready to take orders on day one.",
              icon: <ShoppingBag className="h-5 w-5" />,
            },
            {
              title: "Conversion rate optimization",
              description: "Heatmaps, session recordings, A/B tests, funnel analysis. We find the leaks in your funnel and patch them with a fix.",
              icon: <BarChart2 className="h-5 w-5" />,
            },
            {
              title: "Mobile-first design",
              description: "Designed for thumbs first, desktop second. Sub-2-second load on real 4G. Lighthouse 90+ across the board.",
              icon: <Smartphone className="h-5 w-5" />,
            },
            {
              title: "SEO-ready builds",
              description: "On-page SEO baked in: title tags, meta, schema, internal links, sitemap, robots. Ready to rank from launch day.",
              icon: <Search className="h-5 w-5" />,
            },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* 2. Direct Pricing — Bronze / Silver / Gold monthly retainers */}
      <Section id="pricing">
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For businesses. <em className="font-serif not-italic text-blue-600">No agency markup.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Three monthly tiers, fixed monthly fee, real deadlines. Pick the level of design + hosting + ongoing updates that fits your business — or talk to us about a custom build. Every tier ships mobile-first, with on-page SEO and source files included. See the full <Link href="/pricing" className="text-blue-600 hover:underline">pricing breakdown</Link>{" "}
            for retainer bundles and ongoing care plans.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3" stagger={0.05}>
          {directTiers.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className={
                  t.popular
                    ? "bento h-full flex flex-col border-blue-600/40 bg-blue-600/[0.04]"
                    : "bento h-full flex flex-col"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-neutral-900">Direct · {t.name}</h3>
                  {t.popular && <span className="pill pill-accent text-[10px]">Most popular</span>}
                </div>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-blue-600">{t.price}</span>
                  <span className="text-xs text-neutral-900/55">monthly retainer</span>
                </div>
                <p className="mt-2 text-sm text-neutral-900/70 leading-relaxed">{t.blurb}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-neutral-900/55">
                  What&rsquo;s included
                </p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-900/75">
                  {t.includes.map((line) => (
                    <li key={line} className="flex gap-2">
                      <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                {t.upgrade && (
                  <div className="mt-6 rounded-lg border border-blue-600/20 bg-blue-600/5 p-4">
                    <p className="text-sm text-neutral-900/85">
                      <strong className="text-blue-600">{t.upgrade.split(":")[0]}:</strong>
                      {t.upgrade.includes(":")
                        ? t.upgrade.split(":").slice(1).join(":")
                        : ""}
                    </p>
                  </div>
                )}
                <div className="mt-auto pt-6">
                  <Link
                    href={t.cta.href}
                    className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold text-[#0A0A0F] hover:bg-blue-300 transition-colors"
                  >
                    {t.cta.label}
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.15} className="mt-8 text-center text-sm text-neutral-900/55">
          All prices in USD. No setup fees. No hidden costs. Build timeline: 5-21 days, then ongoing retainer for design updates + hosting + CRO.
        </ScrollReveal>
      </Section>

      {/* 3. White-label Pricing — standard $150-250 / client / mo structure */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For agencies. <em className="font-serif not-italic text-blue-600">60-70% margin.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            {WL_ROW.description} Resell our work under your brand. Your client never sees us. Same deliverables, your logo, your domain, your markup. Built for agencies — see the{" "}
            <Link href="/for-agencies" className="text-blue-600 hover:underline">white-label partner program</Link>{" "}
            for full terms and onboarding details.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-neutral-200/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-neutral-200/8 text-neutral-900/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">Your cost (per client)</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "Starter (1 client)", cost: "$250/mo", resell: "$750-1,200/mo", margin: "67-79%" },
                  { tier: "Growth (5+ clients)", cost: "$200/mo", resell: "$750-1,200/mo", margin: "73-83%", popular: true },
                  { tier: "Scale (15+ clients)", cost: "$150/mo", resell: "$750-1,200/mo", margin: "80-88%" },
                ].map((row) => (
                  <tr
                    key={row.tier}
                    className={
                      row.popular
                        ? "border-b border-neutral-200/5 bg-blue-600/5 last:border-0"
                        : "border-b border-neutral-200/5 last:border-0"
                    }
                  >
                    <td className="px-5 py-4 text-neutral-900/85 font-medium">
                      {row.tier}
                      {row.popular && <span className="ml-2 pill pill-accent text-[10px]">Popular</span>}
                    </td>
                    <td className="px-5 py-4 text-neutral-900/75">{row.cost}</td>
                    <td className="px-5 py-4 text-blue-600 font-semibold">{row.resell}</td>
                    <td className="px-5 py-4 text-neutral-900/85">{row.margin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-neutral-900/45">
            Same web design + CRO engine at every tier. Volume unlocks price, not features.
          </p>
        </ScrollReveal>
      </Section>

      {/* 4. Behind the scenes — how we ship web design so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Sites built <em className="font-serif not-italic text-blue-600">in days, not months.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Six tools in our stack carry the heavy lifting on every project, so our senior designers
            and developers focus on the 20% that actually wins the click. Same automation on every tier — Bronze, Silver, and Gold all ship with the same engine.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            {
              title: "v0.dev + Cursor + Claude",
              description:
                "AI code generation, design prompts, and inline refactors. About 80% of the HTML, CSS, and component logic is scaffolded before a senior human ever opens the file. That's how a 5-day deadline actually holds.",
              icon: <Code2 className="h-5 w-5" />,
            },
            {
              title: "Next.js + Tailwind + shadcn/ui",
              description:
                "Production-grade stack, SEO-fast by default. Server-side rendering, image handling, and accessibility built in from the first commit — no template, no theme, no bloat.",
              icon: <Layers className="h-5 w-5" />,
            },
            {
              title: "Puppeteer + Lighthouse",
              description:
                "Every page is audited for Core Web Vitals on every deploy. We catch the slow build, the missing alt tag, the layout shift, and the bad meta before customers do — not after the invoice.",
              icon: <Gauge className="h-5 w-5" />,
            },
            {
              title: "Hotjar + Microsoft Clarity",
              description:
                "Heatmaps, session recordings, and real conversion data flow back into the next design pass. The screen recording tells you where people tap, where they leave, and where they rage-click.",
              icon: <Activity className="h-5 w-5" />,
            },
            {
              title: "GPT-4 + brand voice doc",
              description:
                "First-draft copy for every section, then a senior editor rewrites for tone, clarity, and the words your buyers actually use in their search bar. AI speed with a human's ear for language.",
              icon: <Bot className="h-5 w-5" />,
            },
            {
              title: "A/B testing automation",
              description:
                "Every landing page ships with two variants running from day one. The data picks the winner inside a week, the losing version goes away, and the winning headline becomes the new baseline.",
              icon: <FlaskConical className="h-5 w-5" />,
            },
          ].map((tool) => (
            <StaggerItem key={tool.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{tool.title}</h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">{tool.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.15} className="mt-10">
          <div className="rounded-2xl border border-blue-600/25 bg-blue-600/5 p-6 md:p-8">
            <div className="flex items-center gap-2 text-blue-600 text-xs uppercase tracking-widest font-semibold">
              <Zap className="h-4 w-4" />
              What this means for you
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-neutral-900">
              Real speed. <em className="font-serif not-italic text-blue-600">Real numbers.</em>
            </h3>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              <li className="flex gap-2 text-neutral-900/85">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong className="text-neutral-900">5-day landing page turnaround</strong>, not 5 weeks.</span>
              </li>
              <li className="flex gap-2 text-neutral-900/85">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong className="text-neutral-900">Sub-2-second load times</strong>, guaranteed on real 4G.</span>
              </li>
              <li className="flex gap-2 text-neutral-900/85">
                <Check className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                <span><strong className="text-neutral-900">Around 8 hours of senior designer time</strong>, not 80.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-neutral-900/70 leading-relaxed">
              That&rsquo;s how Silver ships at $300/mo direct — and resells at $750-1,200/mo to your clients if you&rsquo;re a white-label partner. Same engineering, same craft, no agency overhead, no six-week kickoff phase, no padded hourly billing. The automation is the margin, and we pass the margin to you.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* 5. Why us vs traditional */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why us vs a traditional agency</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The old way is <em className="font-serif not-italic text-blue-600">slow and expensive.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            A traditional web agency burns 25-30 hours of human time on a single project, charges
            $5,000-15,000, and ships in 6-12 weeks. We run AI + automation on the 80% that&rsquo;s
            repetitive, and put senior humans on the 20% that actually moves the needle. Same
            deliverables, lower overhead, faster delivery, fixed monthly fee.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <Zap className="h-5 w-5" />,
              title: "5-21 day build, then monthly retainer",
              body: "Landing pages in 5 days, custom sites in 21. Then ongoing design + CRO for $150-500/mo. Not 6-12 weeks of agency build-out.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Fixed monthly fee, no surprises",
              body: "The price is the price. No hourly billing, no scope-creep invoices, no PM billing you to sit in meetings.",
            },
            {
              icon: <Globe className="h-5 w-5" />,
              title: "Your stack, your choice",
              body: "Next.js, Webflow, Shopify, WordPress. You own the code, the CMS, and the domain. Always.",
            },
            {
              icon: <Rocket className="h-5 w-5" />,
              title: "Built to ship, not to bill",
              body: "Around 5-8h of senior human time per project. We don't pad hours — there's no incentive to bill more.",
            },
            {
              icon: <FileCheck2 className="h-5 w-5" />,
              title: "AI + human, not just humans",
              body: "AI drafts the copy and layouts. Senior humans review, edit, and ship. Speed of AI, judgment of a person.",
            },
            {
              icon: <Wrench className="h-5 w-5" />,
              title: "No ghosting after launch",
              body: "Monthly retainer covers ongoing design updates + hosting + CRO. We're the team you call when something breaks or you want to ship a new page.",
            },
          ].map((card) => (
            <ScrollReveal key={card.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{card.title}</h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">{card.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* 6. What's in every plan */}
      <Section spacing="tight">
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What&rsquo;s in every plan</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The baseline we <em className="font-serif not-italic text-blue-600">never skip.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Whether you start with Bronze or Gold, these ship in every engagement.
            No upsell, no add-on fees, no fine print. If you want ongoing SEO on top of the launch
            baseline, see our <Link href="/services/seo" className="text-blue-600 hover:underline">SEO services</Link>.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {[
            { title: "Mobile-first responsive design", body: "Designed for thumbs first, desktop second. Tested on iPhone, Android, and tablet." },
            { title: "Sub-2-second load on 4G", body: "Lighthouse 90+ for performance. We test on real 4G, not office fiber." },
            { title: "On-page SEO baseline", body: "Title tags, meta, H1s, schema, sitemap, robots. Ready to rank from day one." },
            { title: "Source files on delivery", body: "Figma, code repo, CMS login, asset library. You own it all — no lock-in." },
            { title: "AI-drafted, human-edited copy", body: "Words that read like a person wrote them, because a person did. AI handles the first pass." },
            { title: "Analytics + Search Console", body: "GA4 and Google Search Console set up before launch. Data on day one." },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <div className="bento h-full">
                <h3 className="text-lg font-semibold text-neutral-900">{f.title}</h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">{f.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* 7. The process */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The process</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            From brief to launch in <em className="font-serif not-italic text-blue-600">days, not months.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70">
            Five steps. No project managers, no weekly status meetings, no 40-slide kickoff deck.
            You talk to the people doing the work, you get a real deadline, and we hit it. The monthly retainer kicks in after launch.
          </p>
        </ScrollReveal>
        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {[
            { number: "1", title: "Brief", meta: "Day 1", description: "15-min call + written brief. Offer, audience, tone of voice, examples of sites you like." },
            { number: "2", title: "Wireframe", meta: "Day 2", description: "We send a wireframe + visual direction. You approve before we write a line of code." },
            { number: "3", title: "Build", meta: "Day 3-5", description: "We build, write the copy, and run QA across 6 devices. You get a staging URL to follow along." },
            { number: "4", title: "Review", meta: "Day 4-7", description: "You review on the staging URL. We push to production when you sign off." },
            { number: "5", title: "Retainer", meta: "Day 5-21+", description: "Monthly retainer covers hosting, design updates, security, and CRO. New pages ship in 3-5 days each." },
          ].map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento h-full">
                <div className="flex items-center gap-2 text-blue-600 text-xs uppercase tracking-widest font-semibold">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/10">
                    {step.number}
                  </span>
                  Step
                </div>
                <h3 className="mt-4 text-lg font-semibold text-neutral-900">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-900/65 leading-relaxed">{step.description}</p>
                <p className="mt-3 text-xs text-neutral-900/45 inline-flex items-center gap-1.5">
                  <span className="dot" /> {step.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* 8. TldrBox */}
      <TldrBox
        items={[
          "Web design services from $150/mo direct, $150-250/client white-label. 5-21 day build, monthly retainer after.",
          "Three tiers: Bronze / Silver / Gold. Source files + CMS on every build. CRO baked in.",
          "Built on Next.js, Webflow, Shopify, or WordPress. You own the code, always.",
        ]}
      />

      {/* 9. FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={<>Web design <em className="font-serif not-italic text-blue-600">questions.</em></>}
        subhead="Straight answers to the five questions we get most often. If yours isn't here, book a call."
        items={webDesignFaq}
      />

      {/* 10. Final CTA */}
      <CtaSection
        variant="panel"
        title={<>Ready for a site that <em className="font-serif not-italic text-blue-600">converts?</em></>}
        subhead="Get a free conversion audit, or book a 15-min call. Web design services from $150/mo direct, $150-250/client white-label. No setup fees, no contracts, no surprises — just a site that pays for itself."
        primaryCta={{ label: "Get a free conversion audit", href: "/contact" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      {/* 11. JSON-LD */}
      <Script
        id="ld-service-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "AI Web Design & CRO Services",
              description:
                "AI-assisted web design on Next.js, Webflow, WordPress, Shopify. Direct Bronze $150 / Silver $300 / Gold $500 per month. White-label $150-250 per client. Mobile-first, Lighthouse 90+.",
              path: "/services/web-design",
              serviceType: "AI Web Design",
              priceRange: "$150-$500",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(webDesignFaq)) }}
      />
      <Script
        id="ld-bc-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: "Web Design & CRO", url: "/services/web-design" },
            ])
          ),
        }}
      />
    </>
  );
}
