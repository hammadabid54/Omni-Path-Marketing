import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TldrBox } from "@/components/sections/tldr-box";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { buildMetadata, faqSchema, serviceSchema, breadcrumbSchema, type FaqItem } from "@/lib/seo";
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
  title: "Web Design & CRO Services · From $249 | Omni Path",
  description:
    "Web design services for businesses and white-label partners. Landing pages, multi-page sites, e-commerce, and conversion rate optimization. From $499 direct, $249 white-label. 5-21 day turnaround.",
  path: "/services/web-design",
});

const webDesignFaq: FaqItem[] = [
  {
    question: "How long does a typical website take?",
    answer:
      "Landing pages ship in 5 days. Standard sites ship in 10 days. Custom sites take 21 days. E-commerce builds take 14 days. The clock starts the day you sign off on the brief, not the day you book the call. We don't promise dates we can't keep, and we hit our dates on 95%+ of builds.",
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
      "Every build includes 30 days of free bug-fix support after launch — if something breaks, we fix it at no charge. Larger changes, new pages, or new features are billed at $95/hour or quoted as a small project. We're not the agency that ghosts you after the invoice is paid.",
  },
  {
    question: "Do you build on WordPress or something else?",
    answer:
      "We build on whatever fits the brief. Next.js for custom builds and high-traffic projects. Webflow for fast standard sites. Shopify for e-commerce. WordPress when you genuinely need it. You own the code, the CMS login, and the domain — always, no exceptions, no lock-in.",
  },
];

export default function WebDesignServicePage() {
  return (
    <>
      <Hero
        eyebrow="Web Design & CRO · design + build + conversion"
        title={
          <>
            Sites that <em className="font-serif not-italic text-lime-400">convert.</em>
          </>
        }
        subhead="Web design services built for one thing: revenue. Landing pages, multi-page sites, e-commerce, and conversion rate optimization — from $499, delivered in 5-21 days."
        primaryCta={{ label: "Get a free conversion audit", href: "/contact" }}
        secondaryCta={{ label: "See pricing", href: "#pricing" }}
        trustMicrocopy="No setup fees · 30 days of post-launch support · White-label available for agencies"
      />

      {/* 1. What we do */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Every page type. <em className="font-serif not-italic text-lime-400">Built to ship.</em>
          </h2>
          <p className="mt-4 text-white/70">
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
              description: "New builds or website redesigns — up to 15 pages: home, about, services, case studies, contact. Responsive web design, on-page SEO, real CMS access.",
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
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* 2. Direct Pricing */}
      <Section id="pricing">
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Direct pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For businesses. <em className="font-serif not-italic text-lime-400">No agency markup.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Four tiers, fixed price, real deadlines. Pick the one that fits the brief — or talk to us
            about a custom build. Every tier ships mobile-first, with on-page SEO and source files
            included. See the full <Link href="/pricing" className="text-lime-400 hover:underline">pricing breakdown</Link>{" "}
            for retainer bundles and ongoing care plans.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-2" stagger={0.05}>
          {/* Landing Page */}
          <StaggerItem>
            <div className="bento h-full flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">Landing Page</h3>
                <span className="text-2xl font-semibold text-lime-400">$499</span>
              </div>
              <p className="mt-1 text-sm text-white/55">One-time · 5-day turnaround</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/55">
                What&rsquo;s included
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> 1 page, mobile-first, conversion-optimized</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Built on Next.js or Webflow</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> AI-drafted, human-edited copy (up to 600 words)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Contact form integration</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Google Analytics + Search Console setup</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> 1 round of revisions</li>
              </ul>
              <div className="mt-6 rounded-lg border border-lime-400/20 bg-lime-400/5 p-4">
                <p className="text-sm text-white/85">
                  <strong className="text-lime-400">Upgrade to Standard for:</strong> up to 5 pages,
                  10-day turnaround, on-page SEO, contact form, responsive web design, source files.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Standard Site */}
          <StaggerItem>
            <div className="bento h-full flex flex-col border-lime-400/30">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-white">Standard Site</h3>
                  <span className="pill pill-accent text-[10px]">Popular</span>
                </div>
                <span className="text-2xl font-semibold text-lime-400">$999</span>
              </div>
              <p className="mt-1 text-sm text-white/55">One-time · 10-day turnaround</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/55">
                What&rsquo;s included
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Up to 5 pages, responsive web design</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> On-page SEO baseline baked in</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Contact form on every page</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> AI-drafted, human-edited copy (up to 1,500 words)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Google Analytics + Search Console setup</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> 2 rounds of revisions</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Source files on delivery</li>
              </ul>
              <div className="mt-6 rounded-lg border border-lime-400/20 bg-lime-400/5 p-4">
                <p className="text-sm text-white/85">
                  <strong className="text-lime-400">Upgrade to Custom for:</strong> up to 15 pages,
                  custom design, CMS, blog, advanced animations, 21-day turnaround.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Custom Site */}
          <StaggerItem>
            <div className="bento h-full flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">Custom Site</h3>
                <span className="text-2xl font-semibold text-lime-400">$1,999</span>
              </div>
              <p className="mt-1 text-sm text-white/55">One-time · 21-day turnaround</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/55">
                What&rsquo;s included
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Custom design — no template, no theme</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Up to 15 pages</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> CMS — headless, Webflow, or WordPress</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Blog with categories and tags</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Advanced animations + interactions</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> AI-drafted, human-edited copy (up to 5,000 words)</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> 3 rounds of revisions + Figma source</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Lighthouse 90+ on mobile + desktop</li>
              </ul>
              <div className="mt-6 rounded-lg border border-lime-400/20 bg-lime-400/5 p-4">
                <p className="text-sm text-white/85">
                  <strong className="text-lime-400">Add E-commerce for $1,000:</strong> Shopify or
                  Stripe integration, up to 25 products, payments, shipping, tax — 14-day turnaround.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* E-commerce */}
          <StaggerItem>
            <div className="bento h-full flex flex-col">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">E-commerce</h3>
                <span className="text-2xl font-semibold text-lime-400">$1,699</span>
              </div>
              <p className="mt-1 text-sm text-white/55">One-time · 14-day turnaround</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-widest text-white/55">
                What&rsquo;s included
              </div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Shopify or Stripe — your call</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Up to 25 products with copy + images</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Payments, shipping, and tax configured</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Abandoned cart email flow</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> AI-drafted, human-edited product copy</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> 2 rounds of revisions</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" /> Source files + admin training</li>
              </ul>
              <div className="mt-6 rounded-lg border border-lime-400/20 bg-lime-400/5 p-4">
                <p className="text-sm text-white/85">
                  <strong className="text-lime-400">Pair with a Custom Site for:</strong> a full
                  marketing site + e-commerce on one cohesive design system — 21-day combined delivery.
                </p>
              </div>
            </div>
          </StaggerItem>
        </StaggerGroup>

        <ScrollReveal delay={0.15} className="mt-8 text-center text-sm text-white/55">
          All prices in USD. No setup fees. No hidden costs. Hosting + maintenance from $50/mo.
        </ScrollReveal>
      </Section>

      {/* 3. White-label Pricing */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">White-label pricing</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            For agencies. <em className="font-serif not-italic text-lime-400">75-89% margin.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Resell our work under your brand. Your client never sees us. Same deliverables, your logo,
            your domain, your markup. Built for agencies — see the{" "}
            <Link href="/for-agencies" className="text-lime-400 hover:underline">white-label partner program</Link>{" "}
            for full terms and onboarding details.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-2xl border border-white/8">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-white/8 text-white/55 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-4 font-medium">Tier</th>
                  <th className="px-5 py-4 font-medium">Your cost</th>
                  <th className="px-5 py-4 font-medium">Resell at</th>
                  <th className="px-5 py-4 font-medium">Your margin</th>
                  <th className="px-5 py-4 font-medium hidden md:table-cell">Turnaround</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: "Landing Page", cost: "$249", resell: "$1,000-2,000", margin: "75-88%", time: "3 days" },
                  { tier: "Standard Site", cost: "$599", resell: "$3,000-5,500", margin: "80-89%", time: "7 days", popular: true },
                  { tier: "Custom Site", cost: "$1,499", resell: "$6,000-10,000", margin: "75-85%", time: "14 days" },
                  { tier: "E-commerce", cost: "$1,299", resell: "$5,500-9,000", margin: "76-86%", time: "14 days" },
                ].map((row) => (
                  <tr
                    key={row.tier}
                    className={
                      row.popular
                        ? "border-b border-white/5 bg-lime-400/5 last:border-0"
                        : "border-b border-white/5 last:border-0"
                    }
                  >
                    <td className="px-5 py-4 text-white/85 font-medium">
                      {row.tier}
                      {row.popular && <span className="ml-2 pill pill-accent text-[10px]">Popular</span>}
                    </td>
                    <td className="px-5 py-4 text-white/75">{row.cost}</td>
                    <td className="px-5 py-4 text-lime-400 font-semibold">{row.resell}</td>
                    <td className="px-5 py-4 text-white/85">{row.margin}</td>
                    <td className="px-5 py-4 text-white/65 hidden md:table-cell">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-white/45">
            Margin = (resell midpoint − your cost) ÷ resell midpoint. Real numbers, not marketing math.
          </p>
        </ScrollReveal>
      </Section>

      {/* 4. Behind the scenes — how we ship web design so fast */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Behind the scenes</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Sites built <em className="font-serif not-italic text-lime-400">in days, not months.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Six tools in our stack carry the heavy lifting on every project, so our senior designers
            and developers focus on the 20% that actually wins the click. Here&rsquo;s the exact
            automation behind a $499 landing page that ships in five days, a $999 standard site that
            ships in ten, and a $1,999 custom build that ships in twenty-one.
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
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{tool.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.15} className="mt-10">
          <div className="rounded-2xl border border-lime-400/25 bg-lime-400/5 p-6 md:p-8">
            <div className="flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold">
              <Zap className="h-4 w-4" />
              What this means for you
            </div>
            <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
              Real speed. <em className="font-serif not-italic text-lime-400">Real numbers.</em>
            </h3>
            <ul className="mt-6 grid gap-3 md:grid-cols-3">
              <li className="flex gap-2 text-white/85">
                <Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">5-day landing page turnaround</strong>, not 5 weeks.</span>
              </li>
              <li className="flex gap-2 text-white/85">
                <Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Sub-2-second load times</strong>, guaranteed on real 4G.</span>
              </li>
              <li className="flex gap-2 text-white/85">
                <Check className="h-4 w-4 text-lime-400 mt-0.5 shrink-0" />
                <span><strong className="text-white">Around 8 hours of senior designer time</strong>, not 80.</span>
              </li>
            </ul>
            <p className="mt-6 text-sm text-white/70 leading-relaxed">
              That&rsquo;s how a Standard Site ships at $999 direct — and resells at $3,000-5,500 to
              your clients if you&rsquo;re a white-label partner. Same engineering, same craft, no
              agency overhead, no six-week kickoff phase, no padded hourly billing. The automation
              is the margin, and we pass the margin to you.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* 5. Why us vs traditional */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why us vs a traditional agency</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            The old way is <em className="font-serif not-italic text-lime-400">slow and expensive.</em>
          </h2>
          <p className="mt-4 text-white/70">
            A traditional web agency burns 25-30 hours of human time on a single project, charges
            $5,000-15,000, and ships in 6-12 weeks. We run AI + automation on the 80% that&rsquo;s
            repetitive, and put senior humans on the 20% that actually moves the needle. Same
            deliverables, lower overhead, faster delivery, fixed price.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {[
            {
              icon: <Zap className="h-5 w-5" />,
              title: "5-21 day turnaround",
              body: "Landing pages in 5 days, custom sites in 21. Not 6-12 weeks. Real deadlines, hit 95%+ of the time.",
            },
            {
              icon: <ShieldCheck className="h-5 w-5" />,
              title: "Fixed price, no surprises",
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
              body: "Around 5h of senior human time per project. We don't pad hours — there's no incentive to bill more.",
            },
            {
              icon: <FileCheck2 className="h-5 w-5" />,
              title: "AI + human, not just humans",
              body: "AI drafts the copy and layouts. Senior humans review, edit, and ship. Speed of AI, judgment of a person.",
            },
            {
              icon: <Wrench className="h-5 w-5" />,
              title: "No ghosting after launch",
              body: "30 days of free bug-fix support. Hosting + maintenance from $50/mo. We're the team you call when something breaks.",
            },
          ].map((card) => (
            <ScrollReveal key={card.title}>
              <div className="bento h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-lime-400/15 text-lime-400">
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{card.body}</p>
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
            The baseline we <em className="font-serif not-italic text-lime-400">never skip.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Whether you buy a $499 landing page or a $1,999 custom build, these ship in every project.
            No upsell, no add-on fees, no fine print. If you want ongoing SEO on top of the launch
            baseline, see our <Link href="/services/seo" className="text-lime-400 hover:underline">SEO services</Link>.
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
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{f.body}</p>
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
            From brief to launch in <em className="font-serif not-italic text-lime-400">days, not months.</em>
          </h2>
          <p className="mt-4 text-white/70">
            Five steps. No project managers, no weekly status meetings, no 40-slide kickoff deck.
            You talk to the people doing the work, you get a real deadline, and we hit it.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {[
            { number: "1", title: "Brief", meta: "Day 1", description: "15-min call + written brief. Offer, audience, tone of voice, examples of sites you like." },
            { number: "2", title: "Wireframe", meta: "Day 2", description: "We send a wireframe + visual direction. You approve before we write a line of code." },
            { number: "3", title: "Build", meta: "Day 3-5", description: "We build, write the copy, and run QA across 6 devices. You get a staging URL to follow along." },
            { number: "4", title: "Review", meta: "Day 4-7", description: "You review on the staging URL. We push to production when you sign off." },
            { number: "5", title: "Launch", meta: "Day 5-21", description: "DNS cutover, monitoring, and 30 days of free bug-fix support. Hosting + maintenance optional." },
          ].map((step) => (
            <StaggerItem key={step.number}>
              <div className="bento h-full">
                <div className="flex items-center gap-2 text-lime-400 text-xs uppercase tracking-widest font-semibold">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-400/10">
                    {step.number}
                  </span>
                  Step
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{step.description}</p>
                <p className="mt-3 text-xs text-white/45 inline-flex items-center gap-1.5">
                  <span className="dot" /> {step.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* 8. FAQ */}
      <FaqSection
        eyebrow="FAQ"
        title={<>Web design <em className="font-serif not-italic text-lime-400">questions.</em></>}
        subhead="Straight answers to the five questions we get most often. If yours isn't here, book a call."
        items={webDesignFaq}
      />

      {/* 9. Final CTA */}
      <CtaSection
        variant="panel"
        title={<>Ready for a site that <em className="font-serif not-italic text-lime-400">converts?</em></>}
        subhead="Get a free conversion audit, or book a 15-min call. Web design services from $499 direct, $249 white-label. No setup fees, no contracts, no surprises — just a site that pays for itself."
        primaryCta={{ label: "Get a free conversion audit", href: "/contact" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />

      {/* 10. TldrBox */}
      <TldrBox
        items={[
          "Web design services from $499 direct, $249 white-label. 5-21 day turnaround, fixed price.",
          "Four tiers: Landing, Standard, Custom, E-commerce. Source files + CMS on every build.",
          "Built on Next.js, Webflow, Shopify, or WordPress. You own the code, always.",
        ]}
      />

      {/* 11. JSON-LD */}
      <Script
        id="ld-service-web"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Web Design & CRO Services",
              description:
                "Web design services for businesses and white-label partners. Landing pages, multi-page sites, e-commerce, and conversion rate optimization. From $499 direct, $249 white-label.",
              path: "/services/web-design",
              serviceType: "Web Design & CRO",
              priceRange: "$249-$1999",
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
