import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Puppeteer + @sparticuz/chromium must be required at runtime, not bundled.
  // @sparticuz/chromium extracts a Chromium tarball via fs at runtime, so
  // webpack bundling breaks the path resolution.
  serverExternalPackages: ["puppeteer-core", "@sparticuz/chromium"],
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      // Renamed /about/hammad → /about/hammad-abid (2026-08-19).
      { source: "/about/hammad", destination: "/about/hammad-abid", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
