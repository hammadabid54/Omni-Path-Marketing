import type { Metadata } from "next";
import Script from "next/script";
import { ExternalLink } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { aboutFaq } from "@/content/faqs";
import { buildMetadata, faqSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Omni Path Marketing · 5 humans, 30 AI workflows",
  description:
    "We're a small team that ships a lot of work. AI + automation lets us serve 100+ clients without scaling headcount. Here's who we are.",
  path: "/about",
});

const PRINCIPLES = [
  { n: "1", t: "Show your work.", d: "We publish our process, our tool stack, our pricing. No mystery." },
  { n: "2", t: "Earn it every month.", d: "No long contracts. No lock-in. We win on retention." },
  { n: "3", t: "Automate the 80%.", d: "AI does the repetitive. Humans do the strategic. Everyone wins." },
  { n: "4", t: "Be honest about AI.", d: "We use it. We're proud of it. We're transparent about where." },
  { n: "5", t: "Serve agencies, not replace them.", d: "Our success means our agency partners' success." },
];

const STATS = [
  { v: "5", l: "humans on the team" },
  { v: "30+", l: "AI workflows" },
  { v: "100+", l: "clients served" },
  { v: "4.2M", l: "monthly organic visits" },
  { v: "12,000+", l: "keywords ranked #1-3" },
  { v: "40+", l: "agency partners" },
  { v: "18mo", l: "avg client lifetime" },
  { v: "<5%", l: "monthly churn" },
];

const TEAM = [
  {
    slug: "hammad",
    name: "Hammad Abid",
    title: "Founder & Managing Director",
    bio: "Founded Omni Path to give SMBs and agencies the same SEO + content stack the top 1% use — at a price the bottom 99% can afford. Believes AI + automation should make great work cheap, not exclusive.",
    external: { label: "LinkedIn", href: "https://www.linkedin.com/in/hammad-abid" },
  },
  {
    slug: "rana-moneeb",
    name: "Rana Moneeb",
    title: "Director of SEO & Content Strategy",
    bio: "Runs the SEO and content engine. 7+ years building organic traffic for B2B, SaaS, e-commerce, and local services. Builds content systems that scale — AI drafts, senior edits, automated refinement.",
    external: { label: "Website", href: "https://ranamoneeb.com/" },
  },
  {
    slug: "adnan-ameer",
    name: "Adnan Ameer",
    title: "Director of Local Search & Google Business Profile",
    bio: "Runs the local search practice. 8+ years ranking businesses in the Google Maps 3-pack. Google Business Profile growth, multi-location SEO, citations, review strategy, and recovery from suspensions.",
    external: null,
  },
  {
    slug: "haider-mateen",
    name: "Haider Mateen",
    title: "Director of Brand & Creative",
    bio: "Runs brand and creative. 6+ years building brand identities for SMBs and agencies. Logos in 3 days, full identity systems in 14. The process is AI-first, human-curated, customer-validated.",
    external: { label: "LinkedIn", href: "https://pk.linkedin.com/in/haidermateen" },
  },
  {
    slug: "saad-yawar",
    name: "Saad Yawar",
    title: "Director of Paid Media",
    bio: "Runs paid media. 7+ years managing Google Ads, Meta, TikTok, and LinkedIn. $5M+ in ad spend managed. 20+ creative variations per ad group, automated bids, daily audience expansion.",
    external: { label: "LinkedIn", href: "https://www.linkedin.com/in/saad-yawar-543083109/" },
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title={
          <>
            We&apos;re a small team that <em className="font-serif not-italic text-lime-400">ships a lot of work.</em>
          </>
        }
        subhead="5 humans. 30+ AI workflows. 100+ clients. We don't scale by hiring. We scale by automating. The result: agency-grade work at freelancer prices."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <ScrollReveal>
            <Eyebrow className="mb-4">Our story</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Why we <em className="font-serif not-italic text-lime-400">built it this way.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>
              Most agencies bill hours. More hours = more revenue. We built on outcomes. Lower cost, same quality, better for clients.
            </p>
            <p className="mt-4">
              We started by serving 5 agencies under one white-label program. Word spread. Now we serve 100+ clients globally — and we&apos;re still the same small team.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">The principles</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            How we <em className="font-serif not-italic text-lime-400">operate.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {PRINCIPLES.map((p) => (
            <StaggerItem key={p.t}>
              <div className="bento h-full">
                <div className="text-xs text-lime-400 font-semibold uppercase tracking-widest">Principle {p.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-white">{p.t}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{p.d}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">By the numbers</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            The receipts. <em className="font-serif not-italic text-lime-400">Updated monthly.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3" stagger={0.04}>
          {STATS.map((s) => (
            <StaggerItem key={s.l}>
              <div className="bento text-center">
                <div className="text-3xl md:text-4xl font-bold text-lime-400">{s.v}</div>
                <div className="mt-1 text-xs text-white/55">{s.l}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Team</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            5 humans. <em className="font-serif not-italic text-lime-400">Senior only.</em>
          </h2>
          <p className="mt-4 text-white/65">5 humans. 30+ AI workflows. Every senior, every specialist.</p>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {TEAM.map((member) => (
            <StaggerItem key={member.slug}>
              <div className="bento flex h-full flex-col">
                <div className="text-xs text-lime-400 font-semibold uppercase tracking-widest">{member.title}</div>
                <div className="mt-3 text-xl font-semibold text-white">{member.name}</div>
                <p className="mt-3 text-sm text-white/65 leading-relaxed flex-1">{member.bio}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <LinkButton href={`/about/${member.slug}`} variant="link" size="sm">
                    Read full bio
                  </LinkButton>
                  {member.external ? (
                    <LinkButton
                      href={member.external.href}
                      external
                      variant="link"
                      size="sm"
                      aria-label={`${member.name} on ${member.external.label}`}
                    >
                      {member.external.label}
                      <ExternalLink className="ml-1 inline-block h-3.5 w-3.5" aria-hidden="true" />
                    </LinkButton>
                  ) : null}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <FaqSection eyebrow="FAQ" title="About Omni Path." items={aboutFaq} />

      <CtaSection
        title={<>Want to work with us?</>}
        subhead="Get a free audit, or talk to us about your specific needs."
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
      />

      <Script
        id="ld-faq-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(aboutFaq)) }}
      />
    </>
  );
}
