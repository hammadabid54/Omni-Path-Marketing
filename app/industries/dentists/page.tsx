import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  Search,
  Megaphone,
  Globe,
  Share2,
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  FileText,
  Rocket,
  PenLine,
  BarChart3,
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

export const metadata: Metadata = buildMetadata({
  title: "Dental Marketing for Practices, Multi-Location Groups, and DSOs",
  description:
    "Marketing for solo practices, multi-location groups, and DSOs. SEO, paid ads, web design, and social — HIPAA-aware tracking throughout. Get a free audit.",
  path: "/industries/dentists",
});

/* ============================================================
   Spokes — surfaced as cards linking to the four sub-pages
   ============================================================ */

const spokes = [
  {
    title: "SEO for dentists",
    description:
      "Google Business Profile optimization, review velocity, service-page SEO, HIPAA-aware tracking. Map Pack + organic, both.",
    href: "/industries/dentists/seo",
    icon: <Search className="h-5 w-5" />,
  },
  {
    title: "Google Ads for dentists",
    description:
      "Procedure-level bidding on implants, Invisalign, full-arch, and cosmetic. HIPAA-aware conversion tracking throughout.",
    href: "/industries/dentists/google-ads",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    title: "Dental web design and booking",
    description:
      "Mobile-first dental sites with online booking, procedure-page schema, HIPAA-safe intake forms. Built in 10-21 days.",
    href: "/industries/dentists/web-design",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Social media for dental practices",
    description:
      "Instagram, Facebook, and TikTok content, paid social for high-value procedures, review-driving community management.",
    href: "/industries/dentists/social-media",
    icon: <Share2 className="h-5 w-5" />,
  },
];

/* ============================================================
   Numbers behind dental patient acquisition
   ============================================================ */

const acquisitionNumbers = [
  {
    stat: "77%",
    body: "of patients search online before booking a first dental appointment.",
    sourceLabel: "MSI Services, 2026 dental marketing statistics",
    sourceHref:
      "https://misservices.us/dental-practice-marketing-statistics-2026",
  },
  {
    stat: "1.2M+",
    body: "US searches every month for \"dentist near me.\"",
    sourceLabel: "Dentalbase keyword research, 2026",
    sourceHref:
      "https://www.dentalbase.ai/blogs/marketing/top-10-dental-keywords-you-should-be-ranking-for",
  },
  {
    stat: "32%",
    body: "of Local Pack ranking weight sits on Google Business Profile signals.",
    sourceLabel: "Pete Johnson IV, dental SEO guide",
    sourceHref: "https://petejohnsoniv.com/guide/dental-seo",
  },
  {
    stat: "2.3x",
    body: "weight on fresh reviews vs. older reviews for Local Pack ranking (post-March 2026 core update).",
    sourceLabel: "Pete Johnson IV, dental SEO guide",
    sourceHref: "https://petejohnsoniv.com/guide/dental-seo",
  },
];

/* ============================================================
   How we ship — five-step process
   ============================================================ */

const processSteps = [
  {
    number: "01",
    title: "Audit",
    body: "Full GBP, site, and ad-account audit, written report, yours to keep. We benchmark against the top three competitors in your market so you can see the gap, not just the snapshot.",
    meta: "Week 1",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    number: "02",
    title: "Strategy",
    body: "90-day roadmap with target keywords, ad budget, content plan, and reporting cadence. Approved in writing before any work ships. We lock scope in writing so scope creep does not eat the budget.",
    meta: "Week 1-2",
    icon: <PenLine className="h-5 w-5" />,
  },
  {
    number: "03",
    title: "Build",
    body: "GBP overhaul, on-page fixes, ad account restructure, landing pages. Technical fixes ship before content so every new page has a clean foundation.",
    meta: "Month 1-2",
    icon: <Rocket className="h-5 w-5" />,
  },
  {
    number: "04",
    title: "Publish",
    body: "Blog posts, link placements, ad creative, social content ship on a fixed cadence. Every URL goes through editorial review before it goes live and your team gets a heads-up.",
    meta: "Month 2+",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    number: "05",
    title: "Report",
    body: "Written PDF covering rankings, calls booked, ad spend, GBP actions, and the next 30-day plan. Plain English, no dashboard dumps. The same strategist runs the report and the call, no relay.",
    meta: "Every month",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

/* ============================================================
   FAQ — page-specific, defined inline to avoid drift
   ============================================================ */

const dentistsFaq: FaqItem[] = [
  {
    question: "How long until SEO brings new dental patients?",
    answer:
      "Map Pack movement shows in 60-90 days. Service-page organic leads compound from month 4. Top-3 Map Pack on competitive terms takes 6-12 months and depends on city, review base, and content + link velocity.",
  },
  {
    question: "Is Google Ads worth it for a dental practice?",
    answer:
      "Yes, for high-value procedures — implants, Invisalign, full-arch, cosmetic. CPCs run $6-25 by procedure and market, and one implant case covers a month of spend. We don't run paid ads for routine cleanings; the economics don't work.",
  },
  {
    question: "What's the single most important ranking factor for dentists?",
    answer:
      "Your Google Business Profile. Roughly a third of Local Pack ranking weight sits there. Reviews are second; on-page and links follow.",
  },
  {
    question: "Do you work with DSOs?",
    answer:
      "Yes. Multi-location groups get the same stack with location-level attribution — every location gets its own GBP, landing page, rank-tracked keyword set, and monthly report line. Group-level dashboards roll up for the marketing director.",
  },
  {
    question: "Can you keep us HIPAA-safe while running ads?",
    answer:
      "We sign a BAA where PHI is touched, route ad tracking server-side (Meta CAPI, GA4 server) so patient-level identifiers never sit in browser pixels, and we never load remarketing pixels on patient-only pages.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "14 days from kickoff to first deliverables in market, assuming access to GBP, site analytics, and ad accounts on day one. We run a kickoff call in week 1, deliver the audit and 90-day plan by end of week 2, and ship the first round of work in week 3.",
  },
];

export default function DentistsIndustryPage() {
  return (
    <>
      <Hero
        eyebrow="Marketing for dentists · one team"
        title={
          <>
            Marketing that keeps operatories full.{" "}
            <em className="font-serif not-italic text-blue-600">
              Without the agency overhead.
            </em>
          </>
        }
        subhead="SEO, paid ads, web design, and social for solo practices, multi-location groups, and DSOs. Same AI-powered engine the $1,500-3,000/mo agencies use — at $250-450/mo direct, or white-labeled for agencies at $150-250/client. HIPAA-aware tracking throughout."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
        liveBadge="14-day onboarding"
      />

      <ServiceDefinition text="Dental marketing is SEO, paid ads, web design, and social media working together to fill a dental practice's schedule with new patient appointments. It centers on Google Business Profile ranking and review velocity for local search, plus a HIPAA-aware ad tracking setup. The full stack runs on one senior team under one monthly retainer." />

      {/* ============================================================
          Why dental marketing is its own discipline
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Why dental marketing is its own discipline</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Map Pack, not blog posts.{" "}
            <em className="font-serif not-italic text-blue-600">
              Treat the channel that books.
            </em>
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ScrollReveal>
            <div className="space-y-5 text-base md:text-lg text-neutral-900/80 leading-relaxed">
              <p>
                Dental patients do not search like other buyers. When someone
                types &ldquo;dentist near me&rdquo; or &ldquo;emergency tooth
                extraction,&rdquo; they pick from the top three listings on
                the Map Pack — they do not browse ten blue links. Roughly a
                third of Local Pack ranking weight sits in Google Business
                Profile signals, so a dental marketing program that treats
                the practice website as the only asset will underperform one
                that treats GBP, reviews, and service pages as one system.
              </p>
              <p>
                Local dental queries trigger AI Overviews far less often than
                informational ones. BrightEdge data from late 2025 shows AI
                Overviews appear on roughly 0% of &ldquo;dentist [city]&rdquo;
                searches but on 75-100% of broader dental questions like
                &ldquo;how long do crowns last.&rdquo; The implication is
                direct: Map Pack optimization moves the front desk ringing,
                not blog content. The split is documented across{" "}
                <a
                  href="https://www.chadkubik.com/articles/healthcare-search-changing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300"
                >
                  Chad Kubik on healthcare search
                </a>{" "}
                and the{" "}
                <a
                  href="https://dentree.co.uk/google-ai-overviews-for-dentists-how-to-appear-in-ai-search-results-2026-guide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline decoration-blue-600/40 underline-offset-2 hover:text-blue-300 hover:decoration-blue-300"
                >
                  Dentree 2026 AI Overviews guide
                </a>
                . We plan dental programs accordingly — GBP and reviews first,
                procedure service pages second, supporting content third.
              </p>
              <p>
                The deeper consequence for practice owners is budget
                allocation. Most legacy dental agencies split spend evenly
                across content, social, and ads. That structure was built for
                general-practice businesses; it under-delivers for dental,
                where one channel (Map Pack) drives the majority of qualified
                booked calls. Our dental plans weight GBP, reviews, and
                procedure-page SEO above the rest, then fund the remaining
                channels at a level that supports the main flywheel rather
                than diluting it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bento bento-feature bento-lg h-full">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                The dental search reality
              </p>
              <p className="mt-4 text-3xl font-bold text-neutral-900">
                32% of Local Pack weight sits on the GBP
              </p>
              <p className="mt-3 text-sm text-neutral-900/65 leading-relaxed">
                Reviews are second. On-page and links follow. We plan dental
                programs accordingly so every dollar of marketing spend moves
                the channel that actually books the chair.
              </p>
              <p className="mt-5 text-xs text-neutral-900/45">
                Source: BrightLocal annual local-search survey, via{" "}
                <a
                  href="https://petejohnsoniv.com/guide/dental-seo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-neutral-900/30 underline-offset-2 hover:text-blue-600 hover:decoration-blue-600/40"
                >
                  Pete Johnson IV&apos;s dental SEO guide
                </a>
                .
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================================
          What we do for dental practices — 4 spoke cards
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What we do for dental practices</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            One team.{" "}
            <em className="font-serif not-italic text-blue-600">
              Four spokes. One retainer.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            One senior team runs SEO, paid ads, web design, and social under
            one monthly retainer. Solo practices, multi-location groups, and
            DSOs get the same engine with the same deliverables — what
            changes is reporting depth and per-location spend controls.
            HIPAA-aware tracking is built in, not bolted on.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.06}
        >
          {spokes.map((spoke) => (
            <StaggerItem key={spoke.href}>
              <Link
                href={spoke.href}
                className="bento group flex h-full flex-col gap-4 hover:border-blue-600/40"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-600">
                    {spoke.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {spoke.title}
                  </h3>
                </div>
                <p className="text-sm text-neutral-900/65 leading-relaxed">
                  {spoke.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 group-hover:gap-2.5 transition-all">
                  Read the {spoke.title.toLowerCase()} playbook{" "}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          From the blog — dental playbooks in depth
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">From the blog</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Two playbooks.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free to read.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            Long-form dental marketing playbooks — written for solo practices,
            multi-location groups, and DSOs. Same AI-powered engine we use on
            retainer, documented end to end.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2"
          stagger={0.06}
        >
          <StaggerItem>
            <Link
              href="/blog/dentist-seo-checklist"
              className="bento group flex h-full flex-col gap-4 hover:border-blue-600/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                Checklist
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 leading-snug">
                Dentist SEO checklist: 25 things to ship this quarter
              </h3>
              <p className="text-sm text-neutral-900/65 leading-relaxed">
                A 2026 dental SEO checklist that moves Map Pack rankings — GBP,
                reviews, on-page, links, technical SEO. For solo, multi-location,
                and DSO practices.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 group-hover:gap-2.5 transition-all">
                Read the checklist <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs text-neutral-900/45">~8 min read · Checklist</p>
            </Link>
          </StaggerItem>
          <StaggerItem>
            <Link
              href="/blog/dental-google-business-profile-optimization"
              className="bento group flex h-full flex-col gap-4 hover:border-blue-600/40"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                Playbook
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 leading-snug">
                Google Business Profile for dentists: the optimization playbook
              </h3>
              <p className="text-sm text-neutral-900/65 leading-relaxed">
                How dentists rank in the Map Pack — claim, complete, populate,
                build reviews, track metrics. HIPAA-aware tracking included.
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm text-blue-600 group-hover:gap-2.5 transition-all">
                Read the playbook <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <p className="text-xs text-neutral-900/45">~7 min read · Playbook</p>
            </Link>
          </StaggerItem>
        </StaggerGroup>
      </Section>

      {/* ============================================================
          The numbers behind dental patient acquisition
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The numbers behind dental patient acquisition</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Four data points.{" "}
            <em className="font-serif not-italic text-blue-600">
              Every plan is anchored here.
            </em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            The takeaway is simple: a dental marketing program that does not
            move the GBP and review count every month is leaving booked
            appointments on the table.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {acquisitionNumbers.map((item) => (
            <StaggerItem key={item.stat}>
              <div className="bento h-full">
                <p className="text-4xl font-bold text-blue-600">{item.stat}</p>
                <p className="mt-3 text-sm text-neutral-900/80 leading-relaxed">
                  {item.body}
                </p>
                <p className="mt-4 text-xs text-neutral-900/45">
                  Source:{" "}
                  <a
                    href={item.sourceHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-neutral-900/30 underline-offset-2 hover:text-blue-600 hover:decoration-blue-600/40"
                  >
                    {item.sourceLabel}
                  </a>
                  .
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          How we ship dental marketing
          ============================================================ */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">How we ship dental marketing</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Audit to first deliverables.{" "}
            <em className="font-serif not-italic text-blue-600">14 days.</em>
          </h2>
          <p className="mt-4 text-neutral-900/70 max-w-xl">
            A predictable five-step process, week one through month six.
            Onboarding takes 14 days from kickoff to first deliverables in
            market, assuming we get access to GBP, site analytics, and ad
            accounts on day one.
          </p>
        </ScrollReveal>

        <StaggerGroup
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
          stagger={0.05}
        >
          {processSteps.map((step) => (
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
                <p className="mt-3 text-xs text-neutral-900/45 inline-flex items-center gap-1.5">
                  <Clock className="h-3 w-3" /> {step.meta}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ============================================================
          Pricing and engagement
          ============================================================ */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">Pricing and engagement</Eyebrow>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Month-to-month.{" "}
              <em className="font-serif not-italic text-blue-600">
                Earned every renewal.
              </em>
            </h2>
            <div className="mt-6 space-y-4 text-base md:text-lg text-neutral-900/80 leading-relaxed">
              <p>
                We do not publish a per-procedure or per-location price sheet —
                every dental engagement is scoped after the audit. For
                reference, direct engagements run $250-450 per month across
                Bronze, Silver, and Gold tiers, and white-label partner
                engagements run $150-250 per client per month across Starter,
                Growth, and Scale tiers. See the full Bronze/Silver/Gold
                breakdown on the{" "}
                <Link href="/pricing" className="text-blue-600 hover:underline">
                  pricing page
                </Link>
                .
              </p>
              <p>
                Multi-location groups and DSOs get location-level reporting —
                every location owns its own GBP, landing page, rank-tracked
                keyword set, ad budget, and monthly report line. Group-level
                dashboards roll up for the marketing director. No
                re-negotiation when you add a location.
              </p>
              <p>
                All engagements are month-to-month with 30 days notice to
                cancel. We do not lock practice owners into 12-month contracts
                because the work should earn the renewal every month. No setup
                fees, no percentage of ad spend, no hidden line items. The
                invoice is one number per month.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-blue-600/20 bg-blue-600/[0.04] p-6 md:p-8 h-full">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-600">
                Engagement at a glance
              </p>
              <ul className="mt-5 space-y-3 text-sm text-neutral-900/85">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Direct engagements $250-450/mo (Bronze / Silver / Gold)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>White-label partner pricing $150-250/client/mo (Starter / Growth / Scale)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Per-location cadence for multi-location groups and DSOs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Month-to-month, 30 days notice to cancel</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>$0 setup, $0 hidden line items, $0 percentage of spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>HIPAA-aware tracking built into every engagement</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ============================================================
          Internal links — pair with the rest of the stack
          ============================================================ */}
      <Section spacing="tight">
        <div className="rounded-2xl border border-neutral-200/8 bg-neutral-900/[0.02] p-6 md:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-900/55">
            Pair dental marketing with
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3 text-sm">
            <Link
              href="/services/seo"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              SEO services — see the full playbook
            </Link>
            <Link
              href="/services/paid-ads"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              Paid ads — see the full playbook
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-neutral-900/85 hover:text-blue-600"
            >
              <ArrowRight className="h-4 w-4 text-blue-600" />
              See the full pricing breakdown
            </Link>
          </div>
        </div>
      </Section>

      <FaqSection
        eyebrow="FAQ"
        title={
          <>
            What dental buyers ask first.{" "}
            <em className="font-serif not-italic text-blue-600">
              Honestly.
            </em>
          </>
        }
        subhead="If you don&apos;t see your question here, just ask. We reply within 4 business hours, no sales team in between."
        items={dentistsFaq}
      />

      <CtaSection
        variant="panel"
        title={
          <>
            See what your practice is missing.{" "}
            <em className="font-serif not-italic text-blue-600">
              Free audit, yours to keep.
            </em>
          </>
        }
        subhead="Free audit — GBP, site, ads, reviews, local ranking. Yours to keep, no obligation."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Talk to a strategist", href: "/contact" }}
      />

      <Script
        id="ld-service-dentists"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Dental marketing services",
              description:
                "SEO, paid ads, web design, and social media for dental practices, multi-location groups, and DSOs.",
              path: "/industries/dentists",
              serviceType: "DentalMarketing",
              areaServed: "Worldwide",
              priceRange: "$$",
            })
          ),
        }}
      />
      <Script
        id="ld-faq-dentists"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(dentistsFaq)),
        }}
      />
      <Script
        id="ld-bc-dentists"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: "Dentists", url: "/industries/dentists" },
            ])
          ),
        }}
      />
    </>
  );
}
