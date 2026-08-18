/**
 * CaseStudyCard — list-page card for one case study.
 * Server component. Used on /case-studies.
 */
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/charts/sparkline";

export interface CaseStudyCardData {
  slug: string;
  title: string;
  vertical: string;
  region: string;
  service?: string;
  engagement: string;
  summary: string;
  /** Compact stat for the card, e.g. "390 → 2,455 organic clicks" */
  headline: string;
  /** Mini trajectory for the sparkline (6-12 points) */
  sparkline: number[];
  /** Tags shown as pills */
  tags: string[];
}

export function CaseStudyCard({ data }: { data: CaseStudyCardData }) {
  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className="bento bento-lg group block hover:border-lime-400/40"
    >
      <div className="flex flex-wrap gap-2">
        <span className="pill pill-accent text-[10px]">{data.vertical}</span>
        <span className="pill text-[10px]">{data.region}</span>
        <span className="pill text-[10px]">{data.engagement}</span>
      </div>

      <h3 className="mt-4 text-xl md:text-2xl font-bold text-white leading-snug">
        {data.title}
      </h3>

      <p className="mt-3 text-sm text-white/65 leading-relaxed">{data.summary}</p>

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-2xl font-bold text-lime">{data.headline.split("→").pop()?.trim() ?? ""}</span>
        <span className="text-xs text-white/45">
          {data.headline.split("→")[0]?.trim() ?? ""}
        </span>
      </div>

      <div className="mt-3">
        <Sparkline values={data.sparkline} />
      </div>

      <div className="mt-5 inline-flex items-center gap-1.5 text-sm text-lime group-hover:gap-2.5 transition-all">
        Read full case study
        <ArrowUpRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
}
