/**
 * Team data — 5 senior strategists. Mirrors the data in /about and
 * /about/[slug]/page.tsx so blog posts can link authors.
 */
export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  links: { linkedin?: string; website?: string };
  shortBio: string;
  longBio?: string[];
  works?: string[];
  wins?: string[];
}

export const TEAM: TeamMember[] = [
  {
    slug: "hammad-abid",
    name: "Hammad Abid",
    title: "Founder & Managing Director",
    links: { linkedin: "https://www.linkedin.com/in/hammad-abid" },
    shortBio:
      "Founded Omni Path to give SMBs and agencies the same SEO + content stack the top 1% use — at a price the bottom 99% can afford.",
  },
  {
    slug: "rana-moneeb",
    name: "Rana Moneeb",
    title: "Director of SEO & Content Strategy",
    links: { website: "https://ranamoneeb.com/" },
    shortBio:
      "Runs the SEO and content engine. 7+ years building organic traffic for B2B, SaaS, e-commerce, and local services.",
  },
  {
    slug: "adnan-ameer",
    name: "Adnan Ameer",
    title: "Director of Local Search & Google Business Profile",
    links: {},
    shortBio:
      "Runs the local search practice. 8+ years ranking businesses in the Google Maps 3-pack. GBP growth, multi-location SEO, citations, review strategy, and recovery from suspensions.",
  },
  {
    slug: "haider-mateen",
    name: "Haider Mateen",
    title: "Director of Brand & Creative",
    links: { linkedin: "https://pk.linkedin.com/in/haidermateen" },
    shortBio:
      "Runs brand and creative. 6+ years building brand identities for SMBs and agencies. Logos in 3 days, full identity systems in 14.",
  },
  {
    slug: "saad-yawar",
    name: "Saad Yawar",
    title: "Director of Paid Media",
    links: { linkedin: "https://www.linkedin.com/in/saad-yawar-543083109/" },
    shortBio:
      "Runs paid media. 7+ years managing Google Ads, Meta, TikTok, and LinkedIn. $5M+ in ad spend managed. 20+ creative variations per ad group.",
  },
];

export const TEAM_BY_SLUG: Record<string, TeamMember> = Object.fromEntries(
  TEAM.map((m) => [m.slug, m]),
);
