"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Tiny client component to copy a URL to the clipboard with visual feedback.
 * Used in the admin intake page next to each active token.
 */
export default function CopyButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Fallback: show a prompt with the URL so the user can copy it.
      window.prompt("Copy this URL:", url);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-lime-400 hover:text-lime-300"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
