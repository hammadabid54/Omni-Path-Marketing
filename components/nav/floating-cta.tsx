"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * FloatingCta — persistent "Get a free audit" button fixed to the
 * bottom-right of the viewport. Appears after the user has scrolled
 * past the hero (~400px). Dismissible; remembers dismissal in
 * sessionStorage so it doesn't pester the user.
 *
 * On /audit, /contact, /audit/thank-you: hidden (the user is already
 * in the conversion funnel).
 */
export function FloatingCta() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Hide on conversion pages
  const isConversionPage =
    pathname?.startsWith("/audit") || pathname?.startsWith("/contact");

  useEffect(() => {
    if (isConversionPage) return;
    if (typeof window === "undefined") return;
    // Restore dismissed state from session storage
    if (sessionStorage.getItem("floating-cta-dismissed") === "1") {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      // Show once user has scrolled past 400px (i.e. past the hero on most pages)
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isConversionPage, pathname]);

  if (isConversionPage || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem("floating-cta-dismissed", "1");
    } catch {
      // sessionStorage may be unavailable (private mode); fall back to no-op
    }
  };

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed z-50 transition-all duration-300 ease-out",
        // Mobile: bottom-center, full-width-ish pill
        "bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6",
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none",
      )}
    >
      <div className="bento-lg bento flex items-center gap-3 shadow-2xl shadow-black/50 md:gap-4">
        <a
          href="/audit"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-lime-400 px-4 py-2.5 text-sm font-semibold text-[#0a0a0f] transition-all hover:bg-lime-300 hover:shadow-lg hover:shadow-lime-400/30 md:py-3 md:text-base"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          <span>Get a free audit</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
        <a
          href="/contact"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/30 hover:bg-white/10"
        >
          Talk to us
        </a>
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white/45 transition-colors hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
