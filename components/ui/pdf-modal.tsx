"use client";

import { useEffect, useRef } from "react";
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
  const dialogRef = useRef<HTMLDivElement>(null);
  // Lock body scroll + ESC key
  useEffect(() => {
    if (!pdf) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLButtonElement>('button[aria-label="Close"]')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const items = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button');
        if (!items?.length) return;
        const first = items[0], last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [pdf, onClose]);

  if (!pdf) return null;

  const pdfUrl = caseStudyPdfUrl(pdf.file);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${pdf.name} case study`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-3 md:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[1100px] h-[90vh] max-h-[800px] bg-white border border-neutral-200/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-neutral-200/10 bg-white">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-8 h-8 bg-blue-600/15 border border-blue-600/30 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-neutral-900 truncate">{pdf.name}</div>
              <div className="text-[11px] text-neutral-900/45 mt-0.5">
                {pdf.service} · {pdf.region} · {pdf.year}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200/10 text-neutral-900/85 text-xs font-medium hover:bg-neutral-900/5 transition-colors"
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
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200/10 text-neutral-900/85 hover:bg-neutral-900/5 transition-colors"
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
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-neutral-200/10 text-neutral-900/85 hover:bg-neutral-900/5 transition-colors"
            >
              <span className="text-lg leading-none">×</span>
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-blue-50 p-4 md:p-6">
          <p className="mb-4 text-center text-sm text-slate-600">Report preview · <a className="text-blue-700 underline" href={pdfUrl} target="_blank" rel="noopener noreferrer">Open the full PDF</a> to read every page.</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={pdf.cover} alt={`${pdf.name} report preview`} className="mx-auto h-auto w-full max-w-2xl rounded-lg border border-blue-100 bg-white" />
        </div>
      </div>
    </div>
  );
}
