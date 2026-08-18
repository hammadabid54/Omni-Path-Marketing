import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Section } from "@/components/ui/section";
import { StaggerGroup, StaggerItem } from "@/components/motion/scroll-reveal";
import { CtaSection } from "@/components/sections/cta";
import { buildMetadata } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies · Real Results from Real Clients | Omni Path",
  description:
    "Real case studies from real clients. Rankings, traffic, leads, revenue. See what we've done for agencies and businesses.",
  path: "/case-studies",
});

const CASES = [
  {
    title: "SaaS Co (Direct)",
    summary: "8 → 47 top-3 keywords in 6 months. Inbound leads 12 → 89/month. ROI in 4 months.",
    stats: [
      { label: "Top-3 keywords", from: "8", to: "47" },
      { label: "Monthly traffic", from: "4,200", to: "38,000" },
      { label: "Inbound leads/mo", from: "12", to: "89" },
      { label: "Time to ROI", from: "—", to: "4 mo" },
    ],
    tag: "SaaS · Direct",
  },
  {
    title: "Pixel & Co (White-label Agency)",
    summary: "0 → 12 SEO clients in 6 months. 60-70% margin on every project. 95% retention. $25k MRR added in year 1.",
    stats: [
      { label: "Active clients", from: "0", to: "12" },
      { label: "Margin per project", from: "—", to: "65%" },
      { label: "Retention", from: "—", to: "95%" },
      { label: "MRR added", from: "$0", to: "$25k" },
    ],
    tag: "Agency · White-label",
  },
  {
    title: "E-com Co (Direct)",
    summary: "+312% organic traffic in 8 months. $80k → $420k monthly revenue from organic. 4x ROAS on Google Ads.",
    stats: [
      { label: "Organic traffic", from: "—", to: "+312%" },
      { label: "Monthly revenue", from: "$80k", to: "$420k" },
      { label: "Google Ads ROAS", from: "—", to: "4x" },
      { label: "First-page keywords", from: "6", to: "23" },
    ],
    tag: "E-com · Direct",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        title={
          <>
            Real results. <em className="font-serif not-italic text-lime-400">From real clients.</em>
          </>
        }
        subhead="Rankings, traffic, leads, revenue. See what we've done for agencies and businesses."
      />

      <Section>
        <StaggerGroup className="grid gap-5" stagger={0.08}>
          {CASES.map((c) => (
            <StaggerItem key={c.title}>
              <article className="bento bento-lg">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <span className="pill pill-accent text-[10px]">{c.tag}</span>
                    <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">{c.title}</h2>
                    <p className="mt-3 text-white/75 max-w-2xl">{c.summary}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm text-lime-400 hover:gap-2.5 transition-all"
                  >
                    Read full case <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {c.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/8 p-4 bg-[#0a0a0f]/40">
                      <div className="text-xs text-white/45 uppercase tracking-widest">{s.label}</div>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-sm text-white/45 line-through">{s.from}</span>
                        <span className="text-lg font-bold text-lime-400">{s.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <CtaSection
        title={
          <>
            Want to be the <em className="font-serif not-italic text-lime-400">next case study?</em>
          </>
        }
        primaryCta={{ label: "Get a free audit", href: "/audit" }}
        secondaryCta={{ label: "Book a 15-min call", href: "/contact" }}
      />
    </>
  );
}
