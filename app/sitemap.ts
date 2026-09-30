import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { CASE_STUDIES } from "@/content/case-studies";
import { BLOG_POST_BY_SLUG } from "@/content/blog";
import { TEAM_BY_SLUG } from "@/content/team";
import { PROGRAMS } from "./reviews/[program]/_programs";
import { getAllHubSlugs } from "@/content/hubs";
import { getReviewArticle } from "@/content/reviews";

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
    // Niche industries cluster (Wave 1: Dentists)
    { path: "/industries", changeFrequency: "monthly", priority: 0.7 },
    { path: "/industries/dentists", changeFrequency: "monthly", priority: 0.8 },
    { path: "/industries/dentists/seo", changeFrequency: "monthly", priority: 0.7 },
    { path: "/industries/dentists/google-ads", changeFrequency: "monthly", priority: 0.7 },
    { path: "/industries/dentists/web-design", changeFrequency: "monthly", priority: 0.7 },
    { path: "/industries/dentists/social-media", changeFrequency: "monthly", priority: 0.7 },
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

  // Affiliate review program pillars — high commercial intent, high priority
  const reviewHubEntries: MetadataRoute.Sitemap = [
    { url: `${SITE}/reviews`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE}/reviews/disclosure`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.4 },
    ...PROGRAMS.map((p) => ({
      url: `${SITE}/reviews/${p.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...getAllHubSlugs().map((slug) => ({
      url: `${SITE}/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];

  // Affiliate review cluster articles — only the ones with live articles
  const reviewClusterEntries: MetadataRoute.Sitemap = [];
  for (const p of PROGRAMS) {
    for (const c of p.clusters) {
      // Skip if no article exists in the registry (skip the coming-soon placeholders)
      const article = getReviewArticle(p.slug, c.slug);
      if (!article || article.status !== "live") continue;
      reviewClusterEntries.push({
        url: `${SITE}/reviews/${p.slug}/${c.slug}`,
        lastModified: new Date(article.dateModified ?? article.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      });
    }
  }

  // Dedupe by URL (defensive — service routes appear in both static and dynamic
  // paths and we want one entry per URL).
  const allEntries = [
    ...staticEntries,
    ...caseStudyEntries,
    ...blogEntries,
    ...teamEntries,
    ...reviewHubEntries,
    ...reviewClusterEntries,
  ];
  const seen = new Set<string>();
  return allEntries.filter((e) => {
    if (seen.has(e.url)) return false;
    seen.add(e.url);
    return true;
  });
}
