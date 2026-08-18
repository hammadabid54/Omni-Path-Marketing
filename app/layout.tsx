import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import { Header } from "@/components/nav/header";
import { Footer } from "@/components/nav/footer";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { AmbientBackground } from "@/components/background/ambient";
import { orgSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://omnipathmarketing.com"),
  title: {
    default: "Omni Path Marketing — Stop hiring five agencies. Hire us once.",
    template: "%s | Omni Path",
  },
  description:
    "Full-service digital growth partner. SEO, paid ads, branding, content, web — done for you or white-labeled under your brand. From $200/client.",
  applicationName: "Omni Path Marketing",
  keywords: [
    "white label SEO",
    "white label digital marketing",
    "SEO services",
    "paid ads agency",
    "branding services",
    "web design services",
    "marketing agency",
  ],
  authors: [{ name: "Omni Path Marketing" }],
  creator: "Omni Path Marketing",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "Omni Path Marketing",
    title: "Omni Path Marketing",
    description:
      "Full-service digital growth partner. SEO, paid ads, branding, content, web — done for you or white-labeled under your brand. From $200/client.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omni Path Marketing",
    description:
      "Full-service digital growth partner. SEO, paid ads, branding, content, web — done for you or white-labeled under your brand. From $200/client.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/logo.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${instrumentSerif.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <AmbientBackground />
        <LenisProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LenisProvider>

        {/* Global JSON-LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema()) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />

        {/* Plausible analytics (no-op if domain not set) */}
        {plausibleDomain && (
          <Script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
