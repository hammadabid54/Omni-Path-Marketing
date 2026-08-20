import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { CASE_STUDIES } from "@/content/case-studies";
import { BLOG_POST_BY_SLUG } from "@/content/blog";
import { TEAM_BY_SLUG } from "@/content/team";

const SITE = env().NEXT_PUBLIC_SITE_URL;

/**
 * Sitemap — single XML file generated at build time.
 *
 * All URLs come from the same content sources as the dynamic pages:
 *   - /case-studies/[slug]  ←  content/case-studies.ts (CASE_STUDIES)
 *   - /blog/[slug]          ←  content/blog.ts            (BLOG_POST_BY_SLUG)
 *   - /about/[slug]         ←  content/team.ts            (TEAM_BY_SLUG)
 *
 * Adding a new case study / blog post / bio is automatically picked up here.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
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
    { path: "/case-studies", changeFrequency: "weekly", priority: 0.7 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/services", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services/seo", changeFrequency: "monthly", priority: 0.9 },
    { path: "/services/paid-ads", changeFrequency: "monthly", priority: 0.8 },
    { path: "/services/branding", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services/web-design", changeFrequency: "monthly", priority: 0.7 },
    { path: "/services/social-media", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services/tiktok-linkedin-ads", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services/email-lifecycle", changeFrequency: "monthly", priority: 0.6 },
    { path: "/services/analytics", changeFrequency: "monthly", priority: 0.6 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${SITE}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = Object.keys(BLOG_POST_BY_SLUG).map(
    (slug) => ({
      url: `${SITE}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  const teamEntries: MetadataRoute.Sitemap = Object.keys(TEAM_BY_SLUG).map(
    (slug) => ({
      url: `${SITE}/about/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    })
  );

  // Dedupe by URL (defensive — service routes appear in both static and dynamic
  // paths and we want one entry per URL).
  const allEntries = [
    ...staticEntries,
    ...caseStudyEntries,
    ...blogEntries,
    ...teamEntries,
  ];
  const seen = new Set<string>();
  return allEntries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}
