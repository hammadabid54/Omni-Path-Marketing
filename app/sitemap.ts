import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const SITE = env().NEXT_PUBLIC_SITE_URL;

const ROUTES: { path: string; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/for-agencies", changeFrequency: "monthly", priority: 0.9 },
  { path: "/for-businesses", changeFrequency: "monthly", priority: 0.9 },
  { path: "/white-label-seo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/automated-seo", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/audit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.6 },
  { path: "/process", changeFrequency: "monthly", priority: 0.6 },
  { path: "/tools", changeFrequency: "monthly", priority: 0.5 },
  { path: "/samples", changeFrequency: "monthly", priority: 0.5 },
  { path: "/case-studies", changeFrequency: "monthly", priority: 0.6 },
  { path: "/about", changeFrequency: "monthly", priority: 0.5 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.6 },
  { path: "/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/seo", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services/paid-ads", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/branding", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/web-design", changeFrequency: "monthly", priority: 0.7 },
  { path: "/services/social-media", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/tiktok-linkedin-ads", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/email-lifecycle", changeFrequency: "monthly", priority: 0.5 },
  { path: "/services/analytics", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
