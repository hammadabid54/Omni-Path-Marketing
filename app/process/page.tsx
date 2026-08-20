import type { Metadata } from "next";
import Script from "next/script";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { FaqSection } from "@/components/sections/faq";
import { CtaSection } from "@/components/sections/cta";
import { TimingTable } from "@/components/sections/process-steps";
import { processFaq } from "@/content/faqs";
import { buildMetadata, faqSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our AI Marketing Process · Tools + Time + Team | Omni Path",
  description:
    "80% AI-automated, 20% senior strategy. We show the actual process: tools, time per task, who does what. The full delivery pipeline, in plain English.",
  path: "/process",
});

const TIMING = [
  { step: "1. AI site audit", what: "Puppeteer crawls, Lighthouse runs, Ahrefs pulls", time: "5 min", type: "Automated" as const, tool: "Puppeteer, Lighthouse, Ahrefs" },
  { step: "2. Senior strategist", what: "Reviews audit, picks top 5, writes 90-day plan", time: "30 min", type: "Human" as const, tool: "Notion, ClickUp" },
  { step: "3. AI content draft", what: "AI drafts, Surfer optimizes, image generated", time: "60 min/post", type: "Automated" as const, tool: "AI, Surfer, image gen" },
  { step: "4. QA + edit", what: "Strategist reviews, adds insights, approves", time: "15 min/post", type: "Human" as const, tool: "Notion" },
  { step: "5. Publish + report", what: "Live, backlinks tracked, PDF auto-generated", time: "5 min", type: "Automated" as const, tool: "n8n, Looker Studio" },
];

const TOOLS = [
  { fn: "SEO research", list: "Ahrefs, SEMrush, Surfer SEO" },
  { fn: "Content", list: "AI models, Surfer, Frase" },
  { fn: "Automation", list: "Make, n8n, custom Python" },
  { fn: "Reporting", list: "Looker Studio, AgencyAnalytics" },
  { fn: "Project management", list: "ClickUp, Linear" },
  { fn: "Hosting", list: "Cloudways, WP Engine, Vercel" },
  { fn: "Design", list: "Figma, Canva Pro, Adobe CC" },
  { fn: "Code", list: "Cursor, GitHub Copilot" },
];

export default function ProcessPage() {
  return (
    <>
      <Hero
        eyebrow="How we work · Transparent by default"
        title={
          <>
            5 hours per client per month.{" "}
            <em className="font-serif not-italic text-lime-400">Not 25.</em>
          </>
        }
        subhead="80% of our work is automated. 20% is senior strategy. Here's exactly what happens — every step, every tool, every minute."
      />

      <TimingTable
        eyebrow="The exact workflow"
        title={
          <>
            End to end. <em className="font-serif not-italic text-lime-400">Step by step.</em>
          </>
        }
        rows={TIMING}
        totalNote="Total per client per month: ~5 hours (vs 25-30 at traditional agencies)."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <ScrollReveal>
            <Eyebrow className="mb-4">The 80/20 rule</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Why automation works <em className="font-serif not-italic text-lime-400">without</em> sacrificing quality.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="text-white/75 leading-relaxed">
            <p>
              AI does the heavy lifting — research, drafts, audits, reports. It doesn&apos;t make strategic decisions. It doesn&apos;t catch brand voice issues. It doesn&apos;t know your industry.
            </p>
            <p className="mt-4">
              Humans do the 20% that matters: positioning, edge cases, content quality, strategy, client relationships. That&apos;s the part that actually moves rankings.
            </p>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Tool stack (public)</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            Same tools the <em className="font-serif not-italic text-lime-400">top agencies</em> use.
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4" stagger={0.04}>
          {TOOLS.map((t) => (
            <StaggerItem key={t.fn}>
              <div className="bento h-full">
                <div className="text-xs uppercase tracking-widest text-lime-400 font-semibold">{t.fn}</div>
                <p className="mt-3 text-white/85">{t.list}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Our team</Eyebrow>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            5 humans. 30+ AI workflows.{" "}
            <em className="font-serif not-italic text-lime-400">100+ clients.</em>
          </h2>
          <p className="mt-4 text-white/75">
            We don&apos;t scale by hiring. We scale by automating. The result: agency-grade work at freelancer prices.
          </p>
        </ScrollReveal>
      </Section>

      <FaqSection eyebrow="FAQ" title="Process questions." items={processFaq} />

      <CtaSection
        title={
          <>
            Want to see <em className="font-serif not-italic text-lime-400">real samples?</em>
          </>
        }
        subhead="Redacted audits, blog posts, and reports from real client work."
        primaryCta={{ label: "See samples", href: "/samples" }}
        secondaryCta={{ label: "Book a call", href: "/contact" }}
      />

      <Script
        id="ld-faq-process"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(processFaq)) }}
      />
      <Script
        id="ld-bc-process"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Process", url: "/process" }])) }}
      />
    </>
  );
}
