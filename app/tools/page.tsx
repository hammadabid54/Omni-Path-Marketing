import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Tool Stack · Public | Omni Path",
  description:
    "We publish the full tool stack we use to deliver SEO, paid ads, content, and reporting. No mystery. No black box.",
  path: "/tools",
});

const CATEGORIES = [
  {
    name: "SEO research",
    tools: ["Ahrefs", "SEMrush", "Surfer SEO", "Screaming Frog"],
  },
  {
    name: "Content",
    tools: ["AI models (Anthropic, OpenAI)", "Surfer", "Frase", "Grammarly"],
  },
  {
    name: "Automation",
    tools: ["Make (Integromat)", "n8n", "Custom Python", "Zapier"],
  },
  {
    name: "Reporting",
    tools: ["Looker Studio", "AgencyAnalytics", "Google Sheets"],
  },
  {
    name: "Project management",
    tools: ["ClickUp", "Linear", "Notion"],
  },
  {
    name: "Hosting",
    tools: ["Vercel", "Cloudways", "WP Engine"],
  },
  {
    name: "Design",
    tools: ["Figma", "Canva Pro", "Adobe Creative Cloud"],
  },
  {
    name: "Code",
    tools: ["Cursor", "GitHub Copilot"],
  },
  {
    name: "Paid ads",
    tools: ["Google Ads Manager", "Meta Ads Manager", "TikTok Ads Manager", "LinkedIn Campaign Manager"],
  },
  {
    name: "Email & CRM",
    tools: ["Klaviyo", "HubSpot", "ActiveCampaign", "Resend"],
  },
  {
    name: "Analytics",
    tools: ["Google Analytics 4", "Plausible", "Hotjar", "Microsoft Clarity"],
  },
  {
    name: "SEO audit",
    tools: ["Puppeteer", "Lighthouse", "Custom Node checks"],
  },
];

export default function ToolsPage() {
  return (
    <>
      <Hero
        eyebrow="Tool stack · Public"
        title={
          <>
            The exact tools we use.{" "}
            <em className="font-serif not-italic text-lime-400">No mystery.</em>
          </>
        }
        subhead="We publish every tool in our stack. Same tools the top agencies use. AI + automation is how we ship at our prices."
      />

      <Section>
        <ScrollReveal className="max-w-2xl">
          <Eyebrow className="mb-4">Stack</Eyebrow>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            Every tool. <em className="font-serif not-italic text-lime-400">Every category.</em>
          </h2>
        </ScrollReveal>
        <StaggerGroup className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3" stagger={0.04}>
          {CATEGORIES.map((c) => (
            <StaggerItem key={c.name}>
              <div className="bento h-full">
                <h3 className="text-base font-semibold text-lime-400">{c.name}</h3>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  {c.tools.map((t) => (
                    <li key={t}>· {t}</li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={
          <>
            See how we use them.{" "}
            <em className="font-serif not-italic text-lime-400">Step by step.</em>
          </>
        }
        subhead="The process page breaks down exactly what we run, in what order, and how long it takes."
        primaryCta={{ label: "See our process", href: "/process" }}
        secondaryCta={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
