"use client";

import { useEffect } from "react";
import { caseStudyPdfUrl, type CaseStudyPdf } from "@/content/case-study-pdfs";

interface PdfModalProps {
  /** The case study to display, or null when closed. */
  pdf: CaseStudyPdf | null;
  onClose: () => void;
}

/**
 * PDF lightbox. Renders the PDF in the browser's native viewer via <iframe>.
 * Closes on backdrop click, ESC, or ×. Body scroll is locked while open.
 */
export function PdfModal({ pdf, onClose }: PdfModalProps) {
  // Lock body scroll + ESC key
  useEffect(() => {
    if (!pdf) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [pdf, onClose]);

  if (!pdf) return null;

  const pdfUrl = caseStudyPdfUrl(pdf.file);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${pdf.name} case study`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[1100px] h-[90vh] max-h-[800px] bg-[#11111A] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-[#1A1A24]">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 bg-lime-400/15 border border-lime-400/30 rounded-lg flex items-center justify-center text-lime-400 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-white truncate">{pdf.name}</div>
              <div className="text-[11px] text-white/45 mt-0.5">
                {pdf.service} · {pdf.region} · {pdf.year}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-white/85 text-xs font-medium hover:bg-white/5 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new tab"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-white/85 hover:bg-white/5 transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-white/85 hover:bg-white/5 transition-colors"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>
        </div>

        {/* PDF body */}
        <div className="flex-1 bg-[#0d0d14]">
          <iframe
            src={pdfUrl}
            title={`${pdf.name} case study PDF`}
            className="w-full h-full border-0 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
