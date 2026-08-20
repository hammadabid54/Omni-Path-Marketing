import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Briefcase,
  Building2,
  ExternalLink,
  FileText,
  FlaskConical,
  Globe,
  Handshake,
  Image as ImageIcon,
  Layers,
  LayoutTemplate,
  LifeBuoy,
  Link as LinkIcon,
  Linkedin,
  ListChecks,
  MapPin,
  MessageSquare,
  Palette,
  Rocket,
  Send,
  Star,
  Target,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { LinkButton } from "@/components/ui/button";
import { TldrBox } from "@/components/sections/tldr-box";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";

/* ============================================================
   TEAM — source of truth for the 5 individual bio pages.
   ============================================================ */

interface PersonLink {
  linkedin?: string;
  website?: string;
}

interface Person {
  name: string;
  title: string;
  links: PersonLink;
  shortBio: string;
  longBio: string[];
  works: string[];
  wins: string[];
  /** Topics this person is a recognized expert on. Used for E-E-A-T + Person.knowsAbout. */
  knowsAbout: string[];
}

const TEAM: Record<string, Person> = {
  "hammad-abid": {
    name: "Hammad Abid",
    title: "Founder & Managing Director",
    links: { linkedin: "https://www.linkedin.com/in/hammad-abid" },
    shortBio:
      "Founded Omni Path to give SMBs and agencies the same SEO + content stack the top 1% use — at a price the bottom 99% can afford. Believes AI + automation should make great work cheap, not exclusive.",
    longBio: [
      "Hammad has spent the last decade building digital products and marketing services. He started Omni Path after watching agencies bill SMBs $5-10K/mo for work that costs $200 to deliver with the right automation stack.",
      "His thesis: AI does the 80% that's repetitive (audits, content drafts, reports, bid management). Humans do the 20% that matters (strategy, voice, taste, client relationships). The math works at $200-500/mo. The math also means the work is better — we run 30+ AI workflows that traditional agencies can't afford to staff.",
      "Today he runs the agency, sets the strategy, writes the playbooks the team uses, and personally runs the largest accounts. He's not above the work — he is the work.",
    ],
    works: [
      "SEO strategy + automation stack",
      "Agency partnerships + product direction",
      "Largest-account strategy and execution",
    ],
    wins: [
      "100+ clients across 4 continents",
      "4.2M monthly organic visits managed",
      "12,000+ keywords ranked in top 3",
    ],
    knowsAbout: [
      "AI marketing",
      "White-label marketing programs",
      "Agency operations",
      "Marketing automation",
      "SEO strategy",
      "Paid media strategy",
    ],
  },
  "rana-moneeb": {
    name: "Rana Moneeb",
    title: "Director of SEO & Content Strategy",
    links: { website: "https://ranamoneeb.com/" },
    shortBio:
      "Runs the SEO and content engine. 7+ years building organic traffic for B2B, SaaS, e-commerce, and local services. Builds content systems that scale — AI drafts, senior edits, automated refinement.",
    longBio: [
      "Rana has ranked sites in finance, SaaS, e-commerce, and local services. He joined Omni Path because the model lets him focus on strategy and quality, not on billable hours. The agency model rewards hours; the Omni Path model rewards outcomes.",
      "He builds content systems that scale: first-draft AI for the 80%, Surfer tuning for semantic enrichment, senior human editors for the strategic 20%. The result is 2-16 blog posts per client per month without scaling writers.",
      "His work on the agency side also powers our white-label SEO — 40+ agency partners resell our work to their clients at 60-70% margin. Same content engine, different logo.",
    ],
    works: [
      "Technical SEO audits and fixes",
      "Content briefs and editorial calendars",
      "On-page SEO + internal linking",
      "Link strategy and outreach",
    ],
    wins: [
      "12,000+ keywords ranked in top 3",
      "50+ client content engines built",
      "Built Omni Path's white-label SEO playbook",
    ],
    knowsAbout: [
      "SEO",
      "Content strategy",
      "AI content workflows",
      "Editorial systems",
      "On-page SEO",
      "Link building",
    ],
  },
  "adnan-ameer": {
    name: "Adnan Ameer",
    title: "Director of Local Search & Google Business Profile",
    links: {},
    shortBio:
      "Runs the local search practice. 8+ years ranking businesses in the Google Maps 3-pack. Google Business Profile growth, multi-location SEO, citations, review strategy, and recovery from suspensions.",
    longBio: [
      "Adnan has ranked 200+ local businesses in the Google Maps 3-pack. He works with single-location businesses, multi-location franchises, and enterprises with hundreds of locations. The local search playbook is different from organic SEO — it's about GBP signals, proximity, reviews, citations, and the local pack ranking factors that don't appear in the organic algorithm.",
      "He uses AI to audit 100+ GBP profiles in minutes (vs days of manual work), to monitor competitor local rankings daily, and to generate the kind of location-specific content that wins the local pack. He's also the one you call when your GBP gets suspended and you need it back in 24 hours.",
      "If your customers are searching 'near me,' Adnan is the one who puts you on the map.",
    ],
    works: [
      "Google Business Profile growth",
      "Multi-location local SEO",
      "Citation cleanup and building",
      "Review strategy and velocity",
      "GBP suspension recovery",
    ],
    wins: [
      "200+ businesses ranked in Maps 3-pack",
      "Recovered 50+ suspended GBP profiles",
      "Scaled 50-location franchise local SEO",
    ],
    knowsAbout: [
      "Local SEO",
      "Google Business Profile",
      "Multi-location SEO",
      "Citations and NAP consistency",
      "Review velocity",
      "GBP suspension recovery",
    ],
  },
  "haider-mateen": {
    name: "Haider Mateen",
    title: "Director of Brand & Creative",
    links: { linkedin: "https://pk.linkedin.com/in/haidermateen" },
    shortBio:
      "Runs brand and creative. 6+ years building brand identities for SMBs and agencies. Logos in 3 days, full identity systems in 14. The process is AI-first, human-curated, customer-validated.",
    longBio: [
      "Haider has shipped 100+ brand identities. His process is the opposite of what most agencies do: AI generates 50+ concepts in 10 minutes, he picks the best 3, the client picks the final 1, and revisions go back to AI for the next round. The result: 3-day logos, 14-day identity systems, at a cost that makes traditional studios unable to compete.",
      "Beyond brand identity, he leads content production across social, blog, and email. He's the reason our social posts don't look templated, our blog graphics match the brand, and our email templates actually feel on-brand. Brand isn't a logo — it's the whole expression. He owns the whole expression.",
      "White-label friendly. Your logo, your colors, your voice. He ships under your brand as if he were on your team.",
    ],
    works: [
      "Logo design and full identity systems",
      "Brand voice and messaging docs",
      "Content production (social, blog, email)",
      "Social templates and decks",
    ],
    wins: [
      "100+ brand identities shipped",
      "3-day average logo turnaround",
      "Built Omni Path's white-label brand playbook",
    ],
    knowsAbout: [
      "Brand identity",
      "Logo design",
      "Brand systems",
      "Brand voice",
      "Visual design",
      "Brand guidelines",
    ],
  },
  "saad-yawar": {
    name: "Saad Yawar",
    title: "Director of Paid Media",
    links: { linkedin: "https://www.linkedin.com/in/saad-yawar-543083109/" },
    shortBio:
      "Runs paid media. 7+ years managing Google Ads, Meta, TikTok, and LinkedIn. $5M+ in ad spend managed. 20+ creative variations per ad group, automated bids, daily audience expansion.",
    longBio: [
      "Saad has managed $5M+ in annual ad spend across Google, Meta, TikTok, and LinkedIn. He's scaled 30+ SMBs to 5x return on ad spend and has managed 8-figure campaigns for agencies.",
      "His process: AI generates 20+ creative variations per ad group, automated bid management reallocates spend every 6 hours to the best performers, daily audience expansion pulls in new lookalikes from converting users. The result: campaigns that scale without scaling media buyer hours.",
      "The math works because ad spend is paid by the platform, not by us. Our management fee is the only thing the client pays us — and it's a fraction of what traditional agencies charge. $5M+ in spend managed means $5M+ in learnings that compound across every client we work with.",
    ],
    works: [
      "Google Ads + Performance Max",
      "Meta Ads (Facebook + Instagram)",
      "TikTok Ads + LinkedIn Ads",
      "Creative production and A/B testing",
      "Audience strategy and expansion",
    ],
    wins: [
      "$5M+ in ad spend managed",
      "30+ SMBs scaled to 5x ROAS",
      "8-figure agency campaigns run",
    ],
    knowsAbout: [
      "Paid media",
      "Google Ads",
      "Meta Ads",
      "TikTok Ads",
      "LinkedIn Ads",
      "Performance Max",
      "ROAS tuning",
    ],
  },
};

/* ============================================================
   Per-person extras — hero line, prose sections, icons, tldr.
   ============================================================ */

interface WinDisplay {
  value: string;
  label: string;
}

interface PersonExtras {
  heroLine: ReactNode;
  bioIntro: string;
  approach: string;
  winsContext: string;
  workingProcess: string;
  worksIcons: LucideIcon[];
  tldrItems: string[];
  winsDisplay: WinDisplay[];
}

const EXTRAS: Record<string, PersonExtras> = {
  "hammad-abid": {
    heroLine: (
      <>
        Built Omni Path to ship{" "}
        <em className="font-serif not-italic text-lime-400">
          the work that actually moves the needle.
        </em>
      </>
    ),
    bioIntro:
      "Hammad founded Omni Path after a decade of building digital products and watching the agency model fail the very businesses it claimed to serve. The thesis is simple: AI + automation can deliver agency-grade work at freelancer prices — and the math works for everyone.",
    approach:
      "His operating principle is simple. AI does the 80% that is repetitive — audits, drafts, reports, bid management, technical checks. Humans do the 20% that matters — strategy, voice, taste, client relationships. The math works at $200-500 per month. The math also means the work is better, because the humans on his team spend their time on the work that needs a human, not on the work an AI already shipped. He does not hide behind dashboards. He runs the largest accounts directly, writes the playbooks the rest of the team uses, and answers client emails himself. If a deliverable ships and it is not right, he fixes it. The title says Founder. The work says the same thing.",
    winsContext:
      "The wins below are not vanity numbers. They are monthly, updated, and verified. 100+ clients across 4 continents means the playbook works in any market, in any language, at any budget. 4.2M organic visits a month means the work ships at scale — the engine runs 30+ AI workflows that traditional agencies cannot afford to staff. 12,000+ keywords in the top 3 means the content engine is real, not a promise. What this means for you: when you hire Omni Path, you hire the same team that already produced these results. You are not a test case. You are a continuation.",
    workingProcess:
      "Start with a free audit. We will show you exactly what is broken, what is working, and what we would change in the first 30 days. From there, we agree on a clear plan with clear deliverables, clear timelines, and clear pricing. The first wins usually land in 14-21 days — quick technical fixes, fast content briefs, and the first pieces of new content live on the site. The compounding wins land in 90 — the rankings move, the traffic grows, the pipeline fills. If you want a vendor that sends invoices and checks in quarterly, hire an agency. If you want a partner who treats your growth like their own, hire us.",
    worksIcons: [Layers, Handshake, Star],
    tldrItems: [
      "Hammad Abid — Founder & Managing Director",
      "Built Omni Path to ship work that moves the needle, not bill hours.",
      "Runs the largest accounts directly — no junior handoffs, no account managers.",
    ],
    winsDisplay: [
      { value: "100+", label: "clients across 4 continents" },
      { value: "4.2M", label: "monthly organic visits managed" },
      { value: "12,000+", label: "keywords ranked in top 3" },
    ],
  },
  "rana-moneeb": {
    heroLine: (
      <>
        Runs the SEO engine{" "}
        <em className="font-serif not-italic text-lime-400">
          that scales content without scaling writers.
        </em>
      </>
    ),
    bioIntro:
      "Rana has spent 7+ years ranking sites in finance, SaaS, e-commerce, and local services. He joined Omni Path because the model lets him focus on strategy and quality, not on billable hours. The agency model rewards hours; the Omni Path model rewards outcomes.",
    approach:
      "His system runs on three layers. Layer one is AI-first drafts at scale — every article starts with a model, not a blank page. Layer two is semantic enrichment with Surfer and other NLP tools, so the writing matches what Google actually rewards. Layer three is a senior human editor who tightens the voice, the claims, and the on-page SEO. The result is 2-16 blog posts per client per month, without scaling writers, without scaling cost, and without the quality drop that usually comes with high-volume content. He is the one to ask if your content is thin, your rankings are flat, or your agency is billing you for drafts an AI should have shipped.",
    winsContext:
      "12,000+ keywords ranked in the top 3 is a footprint, not a claim. 50+ content engines built means the system is repeatable — we do not need to invent a new process for every client. The white-label SEO playbook means 40+ agency partners resell the same work at 60-70% margin under their own brand, with content and strategy that wins in any market. What this means for you: the engine that produces these numbers is the engine that ships your work — the same one, the same quality, the same team.",
    workingProcess:
      "Rana kicks off every engagement with a technical audit, a content audit, and a competitor map. The first 30 days ship the technical fixes and the editorial calendar. Months 2-3 ship the content. Month 4+ ship the links and the compounding wins. He runs the engagement directly — no junior handoffs, no account managers, no rebrand of the work we did last month. If your organic traffic is flat, your content is thin, or your agency is shipping drafts that read like drafts, that is the work he ships every month.",
    worksIcons: [Wrench, FileText, LinkIcon, Send],
    tldrItems: [
      "Rana Moneeb — Director of SEO & Content Strategy",
      "7+ years ranking sites in B2B, SaaS, e-commerce, and local services.",
      "12,000+ keywords in the top 3 · 50+ content engines built · white-label SEO playbook.",
    ],
    winsDisplay: [
      { value: "12,000+", label: "keywords ranked in top 3" },
      { value: "50+", label: "client content engines built" },
      { value: "1", label: "white-label SEO playbook, built from scratch" },
    ],
  },
  "adnan-ameer": {
    heroLine: (
      <>
        Puts local businesses on the map{" "}
        <em className="font-serif not-italic text-lime-400">
          — and back on it when they get suspended.
        </em>
      </>
    ),
    bioIntro:
      "Adnan has spent 8+ years ranking businesses in the Google Maps 3-pack. The local pack runs on a different algorithm than organic SEO, and most agencies do not know the difference. That gap is exactly where he wins.",
    approach:
      "His process starts with a 100-point Google Business Profile audit, then moves to citation cleanup, review velocity, and the location-specific content signals the local pack rewards. He uses AI to audit 100+ profiles in minutes, to monitor competitor local rankings daily, and to surface the gaps that drive map pack rankings. The multi-location playbook runs on data hygiene, bulk scheduling, and per-location landing pages that match the search intent of the neighborhood. He is also the one you call when a GBP suspension hits and you need the profile back in 24 hours, not 24 days.",
    winsContext:
      "200+ businesses ranked in the Maps 3-pack is a body of work, not a claim. 50+ suspended profiles recovered means the recovery playbook is real and tested. 50-location franchise local SEO means the system scales without breaking. The wins here are local rankings, phone calls, and walk-ins. They show up in the cash register, not in a vanity dashboard. What this means for you: the same playbook that produced these wins ships to your business, in your market, on the same monthly cadence.",
    workingProcess:
      "Local SEO is not a waiting game. Most clients see map pack movement in 30-60 days and full 3-pack rankings in 90. The work is monthly, not project-based, and Adnan runs the engagement himself — no junior handoffs, no account managers, no rebrand of the work we did last quarter. If your customers are searching 'near me' and you are not in the top 3, that is the work he ships every month. He takes on a limited number of new local engagements each quarter so the quality stays high, the response stays fast, and every GBP under his watch gets the same level of attention as the flagship accounts. If a suspension hits, he is the one you call — and the call goes straight to him, not a ticket queue.",
    worksIcons: [MapPin, Building2, ListChecks, Star, LifeBuoy],
    tldrItems: [
      "Adnan Ameer — Director of Local Search & Google Business Profile",
      "8+ years ranking businesses in the Google Maps 3-pack.",
      "200+ local businesses ranked · 50+ suspended profiles recovered · 50-location franchise SEO.",
    ],
    winsDisplay: [
      { value: "200+", label: "businesses ranked in Maps 3-pack" },
      { value: "50+", label: "suspended GBP profiles recovered" },
      { value: "50-loc", label: "franchise local SEO, scaled end to end" },
    ],
  },
  "haider-mateen": {
    heroLine: (
      <>
        Ships brand identities{" "}
        <em className="font-serif not-italic text-lime-400">
          in 3 days, not 3 weeks.
        </em>
      </>
    ),
    bioIntro:
      "Haider has shipped 100+ brand identities for SMBs and agencies. His process is the opposite of what most studios do — and the result is faster, cheaper, and tighter than the agency version.",
    approach:
      "His process starts with a 15-minute discovery call, then moves to AI generation of 50+ concept directions in 10 minutes, then a senior curation to the best 3, then the client pick, then a tight revision loop. Logos land in 3 days. Full identity systems land in 14. The reason is the math: the AI does the 80% of exploration that used to take a junior designer a week. Haider does the 20% of curation that decides whether the brand is forgettable or ownable. White-label friendly — your logo, your colors, your voice. He ships under your brand as if he were on your team.",
    winsContext:
      "100+ brand identities shipped is a portfolio, not a promise. 3-day average logo turnaround is the speed claim most studios cannot match at the price. The white-label brand playbook means agencies can ship client identities under their own brand, at margin, without staffing a designer. What this means for you: the same engine that built these identities builds yours, in the same timeline, at the same price. You are not waiting on a junior to draft in Photoshop. You are working with a curated AI engine and a senior brand lead.",
    workingProcess:
      "Brand work starts with the brief — the audience, the offer, the voice, the competition. The first concepts land in 3 days. The first round of revisions in 5. The final identity in 14. Beyond identity, Haider runs the on-brand content production across social, blog, and email — so the brand is not just a logo, it is the whole expression. He is the one to call when you need a brand that ships this quarter, not this year, and a creative lead who treats your deadline like their own.",
    worksIcons: [Palette, MessageSquare, ImageIcon, LayoutTemplate],
    tldrItems: [
      "Haider Mateen — Director of Brand & Creative",
      "100+ brand identities shipped · 3-day logo turnaround · 14-day identity systems.",
      "White-label friendly — ships under your brand as if he were on your team.",
    ],
    winsDisplay: [
      { value: "100+", label: "brand identities shipped" },
      { value: "3-day", label: "average logo turnaround" },
      { value: "1", label: "white-label brand playbook, built from scratch" },
    ],
  },
  "saad-yawar": {
    heroLine: (
      <>
        Manages $5M+ in ad spend{" "}
        <em className="font-serif not-italic text-lime-400">
          to scale SMBs to 5x return.
        </em>
      </>
    ),
    bioIntro:
      "Saad has spent 7+ years managing paid media across Google, Meta, TikTok, and LinkedIn. He has scaled 30+ SMBs to 5x return on ad spend and has run 8-figure campaigns for agencies. The math is the same at every level — the only difference is budget.",
    approach:
      "His process is built for speed and learning. AI generates 20+ creative variations per ad group. Automated bid management reallocates spend every 6 hours to the top performers. Daily audience expansion pulls in new lookalikes from the converters the ads already produced. The result is campaigns that scale without scaling media buyer hours. The math works because ad spend is paid by the platform, not by us. Our management fee is the only thing the client pays Omni Path, and it is a fraction of what traditional agencies charge.",
    winsContext:
      "$5M+ in ad spend managed is not a vanity number. It is a footprint of learnings that compound across every client. 30+ SMBs scaled to 5x ROAS is the proof the system works for smaller budgets. 8-figure agency campaigns run is the proof the system works at the top of the market. The wins are returns — measured in revenue, not impressions. What this means for you: the same automation that wins at $50K/mo wins at $5K/mo. You get the same engine, the same learnings, the same bid management, at the price of a small team. And because the bid management runs on a 6-hour cycle, your campaigns never sit idle while the media buyer is in another meeting.",
    workingProcess:
      "Paid media starts with the offer and the unit economics. If the math does not work, no campaign will save it. Once the offer is set, Saad builds the campaign structure, the creative tests, and the bid management rules. The first 30 days are about data — finding the audiences, the creatives, and the bids that convert. Months 2-3 are about scaling what works and cutting what does not. By month 6, the campaigns are running themselves and the focus is on creative refreshes and new channels.",
    worksIcons: [Target, Rocket, TrendingUp, FlaskConical, Users],
    tldrItems: [
      "Saad Yawar — Director of Paid Media",
      "$5M+ in ad spend managed across Google, Meta, TikTok, and LinkedIn.",
      "30+ SMBs scaled to 5x ROAS · 8-figure agency campaigns run.",
    ],
    winsDisplay: [
      { value: "$5M+", label: "in ad spend managed" },
      { value: "30+", label: "SMBs scaled to 5x ROAS" },
      { value: "8-fig", label: "agency campaigns run" },
    ],
  },
};

/* ============================================================
   Static generation — 5 slugs.
   ============================================================ */

export function generateStaticParams() {
  return Object.keys(TEAM).map((slug) => ({ slug }));
}

/* ============================================================
   Dynamic metadata per slug.
   ============================================================ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = TEAM[slug];
  if (!person) {
    return { title: "Team member not found" };
  }
  return buildMetadata({
    title: `${person.name} — ${person.title} | Omni Path`,
    description: person.shortBio,
    path: `/about/${slug}`,
  });
}

/* ============================================================
   JSON-LD Person schema per slug.
   ============================================================ */

function personSchema(slug: string) {
  const person = TEAM[slug];
  if (!person) return null;
  const sameAs = person.links.linkedin
    ? [person.links.linkedin]
    : person.links.website
      ? [person.links.website]
      : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `https://omnipathmarketing.com/about/${slug}#person`,
    name: person.name,
    jobTitle: person.title,
    description: person.shortBio,
    url: `https://omnipathmarketing.com/about/${slug}`,
    knowsAbout: person.knowsAbout,
    ...(sameAs ? { sameAs } : {}),
    worksFor: {
      "@type": "Organization",
      name: "Omni Path Marketing",
      url: "https://omnipathmarketing.com",
    },
  };
}

/* ============================================================
   Page component — renders one of 5 bio pages by slug.
   ============================================================ */

export default async function PersonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const person = TEAM[slug];
  if (!person) notFound();

  const extras = EXTRAS[slug];
  if (!extras) notFound();

  const firstName = person.name.split(" ")[0];
  const hasLinks = !!(person.links.linkedin || person.links.website);
  const linkUrl = person.links.linkedin ?? person.links.website ?? "";
  const linkIsLinkedIn = !!person.links.linkedin;
  const linkLabel = linkIsLinkedIn ? "LinkedIn" : "Personal site";
  const LinkGlyph = linkIsLinkedIn ? Linkedin : Globe;
  const schema = personSchema(slug);

  return (
    <>
      {/* ====================== HERO ====================== */}
      <Section spacing="default" className="pt-16 md:pt-24">
        <ScrollReveal>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-lime-400 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li>
                <Link href="/about" className="hover:text-lime-400 transition-colors">
                  About
                </Link>
              </li>
              <li aria-hidden className="text-white/30">
                /
              </li>
              <li className="text-white/85" aria-current="page">
                {person.name}
              </li>
            </ol>
          </nav>
        </ScrollReveal>

        <ScrollReveal>
          <Eyebrow className="mb-4">{person.title}</Eyebrow>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            {person.name}
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mt-3 text-xl md:text-2xl text-lime-400 font-semibold">
            {person.title}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15} className="mt-8 max-w-3xl">
          <p className="text-xl md:text-2xl text-white/80 leading-snug">
            {extras.heroLine}
          </p>
        </ScrollReveal>
      </Section>

      {/* ====================== TLDR ====================== */}
      <TldrBox title="At a glance" items={extras.tldrItems} />

      {/* ====================== BIO ====================== */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">Background</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Who{" "}
              <em className="font-serif not-italic text-lime-400">
                {firstName} is.
              </em>
            </h2>
            <p className="mt-4 text-white/65 leading-relaxed">
              {extras.bioIntro}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            {person.longBio.map((para, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>
                {para}
              </p>
            ))}
          </ScrollReveal>
        </div>
      </Section>

      {/* ====================== WHAT I WORK ON ====================== */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">What I work on</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            The work {firstName} ships{" "}
            <em className="font-serif not-italic text-lime-400">
              every week.
            </em>
          </h2>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {person.works.map((work, i) => {
            const Icon = extras.worksIcons[i] ?? Briefcase;
            return (
              <StaggerItem key={work}>
                <div className="bento h-full">
                  <div className="flex items-center gap-2 text-xs text-lime-400 font-semibold uppercase tracking-widest">
                    <Icon className="h-3.5 w-3.5" aria-hidden />
                    Focus {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">
                    {work}
                  </h3>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Section>

      {/* ====================== HOW I WORK (prose) ====================== */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">How I work</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              The{" "}
              <em className="font-serif not-italic text-lime-400">
                operating system.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>{extras.approach}</p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ====================== RECENT WINS (stat cards) ====================== */}
      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Recent wins</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            The numbers{" "}
            <em className="font-serif not-italic text-lime-400">
              that compound.
            </em>
          </h2>
        </ScrollReveal>
        <StaggerGroup
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3"
          stagger={0.05}
        >
          {extras.winsDisplay.map((w, i) => (
            <StaggerItem key={`${w.value}-${i}`}>
              <div className="bento h-full">
                <div className="text-3xl md:text-4xl font-bold text-lime-400 leading-none">
                  {w.value}
                </div>
                <div className="mt-3 text-sm text-white/75 leading-relaxed">
                  {w.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* ====================== WINS CONTEXT (prose) ====================== */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">What this means</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              The{" "}
              <em className="font-serif not-italic text-lime-400">
                footprint.
              </em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>{extras.winsContext}</p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ====================== LINKS ====================== */}
      {hasLinks && (
        <Section spacing="tight">
          <ScrollReveal>
            <div className="flex flex-wrap items-center gap-3">
              <LinkButton
                href={linkUrl}
                external
                variant="primary"
                size="md"
                aria-label={`${person.name} on ${linkLabel}`}
              >
                <span className="inline-flex items-center gap-2">
                  <LinkGlyph className="h-4 w-4" aria-hidden />
                  Connect on {linkLabel}
                  <ExternalLink
                    className="h-3.5 w-3.5 opacity-70"
                    aria-hidden
                  />
                </span>
              </LinkButton>
            </div>
          </ScrollReveal>
        </Section>
      )}

      {/* ====================== WORKING TOGETHER (prose) ====================== */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <ScrollReveal>
            <Eyebrow className="mb-4">Working together</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              How to{" "}
              <em className="font-serif not-italic text-lime-400">start.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>{extras.workingProcess}</p>
          </ScrollReveal>
        </div>
      </Section>

      {/* ====================== CTA ====================== */}
      <CtaSection
        title={
          <>
            Want to work with {firstName}?{" "}
            <em className="font-serif not-italic text-lime-400">
              Let&apos;s start.
            </em>
          </>
        }
        subhead="Tell us about your goals. We will match you with the right team and ship the first wins in 30 days."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Get a free audit", href: "/audit" }}
      />

      {/* ====================== JSON-LD Person schema ====================== */}
      {schema && (
        <Script
          id={`ld-person-${slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </>
  );
}
