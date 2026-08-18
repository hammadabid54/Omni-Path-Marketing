"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, XCircle, RefreshCcw } from "lucide-react";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { motion } from "framer-motion";
import type { AuditCheck } from "@/lib/audit";

interface StoredResult {
  score: number;
  bucket: "hot" | "warm" | "cold";
  signals: string[];
  url: string;
  statusCode: number;
  checks: AuditCheck[];
}

const STATUS_ICON = {
  pass: <CheckCircle2 className="h-4 w-4 text-lime-400" />,
  warn: <AlertTriangle className="h-4 w-4 text-amber-400" />,
  fail: <XCircle className="h-4 w-4 text-rose-400" />,
};

export default function ThankYouPage() {
  const [result, setResult] = useState<StoredResult | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = sessionStorage.getItem("audit_result");
      if (raw) setResult(JSON.parse(raw));
    } catch {}
  }, []);

  if (!hydrated) {
    return (
      <Section>
        <div className="container-page text-center max-w-xl mx-auto py-20">
          <div className="skeleton h-10 w-3/4 mx-auto" />
          <div className="skeleton h-4 w-1/2 mx-auto mt-4" />
        </div>
      </Section>
    );
  }

  if (!result) {
    return (
      <Section>
        <div className="container-page text-center max-w-xl mx-auto py-20">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            No audit found. <em className="font-serif not-italic text-lime-400">Let&apos;s run one.</em>
          </h1>
          <p className="mt-4 text-white/70">Drop in your URL and we&apos;ll scan 20 SEO issues in 60 seconds.</p>
          <LinkButton href="/audit" variant="primary" size="lg" className="mt-8" magnetic>
            Run my free audit
          </LinkButton>
        </div>
      </Section>
    );
  }

  const colorByBucket = {
    hot: "text-lime-400",
    warm: "text-amber-400",
    cold: "text-rose-400",
  } as const;

  return (
    <>
      <Section>
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <span className="pill pill-accent mb-6 inline-flex">
              <CheckCircle2 className="h-3.5 w-3.5" /> Audit complete
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Your report. <em className="font-serif not-italic text-lime-400">In 60 seconds.</em>
            </h1>
            <p className="mt-3 text-white/65">
              We scanned <span className="text-white/85">{result.url}</span> and ranked 20 SEO signals. Here&apos;s the headline.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="bento bento-lg">
                <div className="text-xs uppercase tracking-widest text-white/55">Overall score</div>
                <motion.div
                  className={`mt-3 text-6xl font-bold ${colorByBucket[result.bucket]}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {result.score}<span className="text-2xl text-white/40">/100</span>
                </motion.div>
                <div className="mt-2 text-sm text-white/60">
                  Bucket: <span className={`uppercase font-semibold ${colorByBucket[result.bucket]}`}>{result.bucket}</span>
                </div>
              </div>
              <div className="bento bento-lg">
                <div className="text-xs uppercase tracking-widest text-white/55">What we checked</div>
                <div className="mt-3 text-5xl font-bold text-white">{result.checks.length}</div>
                <div className="mt-1 text-sm text-white/60">SEO signals scanned</div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs">
                  <div>
                    <div className="text-2xl font-bold text-lime-400">
                      {result.checks.filter((c) => c.status === "pass").length}
                    </div>
                    <div className="text-white/55">Pass</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-amber-400">
                      {result.checks.filter((c) => c.status === "warn").length}
                    </div>
                    <div className="text-white/55">Warn</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rose-400">
                      {result.checks.filter((c) => c.status === "fail").length}
                    </div>
                    <div className="text-white/55">Fail</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10">
              <h2 className="text-2xl font-semibold">Check-by-check</h2>
              <div className="mt-4 rounded-2xl border border-white/8 divide-y divide-white/8">
                {result.checks.map((c) => (
                  <div key={c.id} className="flex items-start gap-3 p-4">
                    <div className="mt-0.5 shrink-0">{STATUS_ICON[c.status]}</div>
                    <div className="flex-1">
                      <div className="font-medium text-white/90">{c.label}</div>
                      <div className="text-sm text-white/60">{c.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href="/contact" variant="primary" size="lg" magnetic>
                Book a 15-min call
              </LinkButton>
              <LinkButton href="/pricing" variant="ghost" size="lg">
                See pricing
              </LinkButton>
              <Link href="/audit" className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-lime-400 ml-auto">
                <RefreshCcw className="h-4 w-4" /> Run another audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section>
        <div className="container-page max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <ol className="mt-6 space-y-4 text-white/80">
              <li className="flex gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 text-sm font-semibold">1</span>
                <span><strong className="text-white">Email.</strong> The full PDF is on its way to your inbox now (check spam if you don&apos;t see it).</span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 text-sm font-semibold">2</span>
                <span><strong className="text-white">Walk-through.</strong> Book a 15-min call and a senior strategist will walk you through the top 3 wins.</span>
              </li>
              <li className="flex gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400/15 text-lime-400 text-sm font-semibold">3</span>
                <span><strong className="text-white">Plan.</strong> Get a 90-day plan with pricing. No obligation.</span>
              </li>
            </ol>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
