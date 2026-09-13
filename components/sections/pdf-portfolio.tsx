"use client";

import { useMemo, useRef, useState } from "react";
import { CASE_STUDY_PDFS, type CaseStudyPdf, type PdfCategory } from "@/content/case-study-pdfs";
import { PdfModal } from "@/components/ui/pdf-modal";
import { cn } from "@/lib/cn";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

const FILTERS: { id: "all" | PdfCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "dental", label: "Dental" },
  { id: "healthcare", label: "Healthcare" },
  { id: "platform", label: "Health platforms" },
];

function categoryCount(c: CaseStudyPdf[], id: "all" | PdfCategory): number {
  if (id === "all") return c.length;
  return c.filter((x) => x.category === id).length;
}

/**
 * PDF Portfolio — horizontal slider of 14 anonymized case study PDFs.
 * Click any card → modal opens with the PDF in the browser's native viewer.
 * Native CSS scroll-snap (no carousel dependency).
 */
export function PdfPortfolio() {
  const [filter, setFilter] = useState<"all" | PdfCategory>("all");
  const [active, setActive] = useState<CaseStudyPdf | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? CASE_STUDY_PDFS : CASE_STUDY_PDFS.filter((c) => c.category === filter)),
    [filter],
  );

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 356, behavior: "smooth" });
  };

  return (
    <Section spacing="default" className="relative">
      <ScrollReveal>
        <Eyebrow className="mb-5">Portfolio · 14 client engagements</Eyebrow>
      </ScrollReveal>

      <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight max-w-3xl">
            Real work. <em className="font-serif not-italic text-blue-600">Real numbers.</em>
            <br className="hidden md:block" />
            Tap any case to open the PDF.
          </h2>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-sm text-neutral-900/55 max-w-sm">
            Anonymized previews available on request. <strong className="text-neutral-900/75 font-medium">Full audit reports under NDA.</strong>
          </p>
        </ScrollReveal>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        {FILTERS.map((f) => {
          const count = categoryCount(CASE_STUDY_PDFS, f.id);
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full border text-xs font-medium transition-colors",
                active
                  ? "bg-blue-600 border-blue-600 text-[#0A0A0F]"
                  : "border-neutral-200/10 text-neutral-900/65 hover:border-neutral-200/25 hover:text-neutral-900/85",
              )}
            >
              {f.label} <span className={cn("ml-1", active ? "opacity-70" : "opacity-60")}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Slider */}
      <div className="relative -mx-6 px-6">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-5"
          style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(255,255,255,0.08) transparent" }}
        >
          {filtered.map((c) => (
            <PdfCard key={c.slug} pdf={c} onOpen={() => setActive(c)} />
          ))}
        </div>

        {/* Slider controls */}
        <div className="flex items-center justify-between mt-5">
          <div className="text-xs text-neutral-900/45 font-mono">
            {filtered.length} case {filtered.length === 1 ? "study" : "studies"}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full bg-white border border-neutral-200/15 text-neutral-900/85 hover:bg-blue-600 hover:text-[#0A0A0F] hover:border-blue-600 transition-colors flex items-center justify-center shadow-sm"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full bg-white border border-neutral-200/15 text-neutral-900/85 hover:bg-blue-600 hover:text-[#0A0A0F] hover:border-blue-600 transition-colors flex items-center justify-center shadow-sm"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <PdfModal pdf={active} onClose={() => setActive(null)} />
    </Section>
  );
}

interface PdfCardProps {
  pdf: CaseStudyPdf;
  onOpen: () => void;
}

function PdfCard({ pdf, onOpen }: PdfCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group shrink-0 snap-start w-[320px] sm:w-[340px] text-left bg-[#11111A] border border-neutral-200/10 rounded-[18px] overflow-hidden transition-all duration-300 hover:border-blue-600/30 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(163,230,53,0.15)] focus:outline-none focus:ring-2 focus:ring-blue-600/40"
    >
      {/* PDF cover — second-to-last page rendered as PNG by scripts/build-pdf-covers.mjs */}
      <div className="relative aspect-[8.5/11] overflow-hidden border-b border-neutral-200/5 bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pdf.cover}
          alt={`${pdf.name} case study preview`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {/* Subtle top-left badge for service line + bottom gradient for the PDF pill */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-neutral-200/20 rounded-md px-2 py-1 text-[9px] font-semibold text-blue-600 uppercase tracking-[0.06em] shadow-sm">
          {pdf.service}
        </div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md border border-neutral-200/20 rounded-md px-2 py-1 text-[9px] font-semibold text-neutral-900/90 uppercase tracking-[0.06em] shadow-sm">
          PDF
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between gap-2">
          <span className="text-[10px] text-neutral-900/70 uppercase tracking-[0.06em] font-mono">
            {pdf.region} · {pdf.year}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-blue-600 uppercase tracking-[0.08em] font-semibold">{pdf.service}</span>
          <span className="text-[10px] text-neutral-900/45 font-mono">{pdf.year}</span>
        </div>
        <h4 className="text-base font-semibold text-neutral-900 leading-snug mb-1.5">{pdf.name}</h4>
        <p className="text-xs text-neutral-900/45 mb-3.5">
          {pdf.region === "AU" ? "Australia" : pdf.region === "PK" ? "Pakistan" : pdf.region}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold">
          Open case study
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </button>
  );
}
