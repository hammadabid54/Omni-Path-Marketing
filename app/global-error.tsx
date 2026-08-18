"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[global-error]", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ background: "#0a0a0f", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", padding: "120px 24px", textAlign: "center" }}>
          <p style={{ color: "#a3e635", letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 12, fontWeight: 600 }}>
            Something went wrong
          </p>
          <h1 style={{ fontSize: 48, margin: "16px 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            We hit a snag.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
            Try again, or jump back to the homepage. We&apos;ve been notified if it&apos;s our fault.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
            <button
              onClick={reset}
              style={{
                background: "#a3e635",
                color: "#0a0a0f",
                border: 0,
                padding: "12px 20px",
                borderRadius: 10,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Try again
            </button>
            <Link
              href="/"
              style={{
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.16)",
                padding: "12px 20px",
                borderRadius: 10,
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Go home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
