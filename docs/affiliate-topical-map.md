# Affiliate Topical Map — Omni Path Marketing

**Site**: omnipathmarketing.com (agency + operator-led reviews on `/reviews/*`)
**Programs**: Semrush · Mangools · SE Ranking · Surfer SEO · Hunter.io · Frase · Ahrefs
**Articles planned**: ~42
**Keywords researched**: 185 (Tier 1: 25 · Tier 2: 53 · Tier 3: 97 · Skip: 10)
**Source of truth for publication order**: `data/affiliate-keywords/MASTER.csv`

---

## 1. URL strategy (locked)

**`/reviews/[program]/[cluster-slug]/`** — subdirectory pattern.

- 6 program pillars: `/reviews/semrush/`, `/reviews/mangools/`, `/reviews/se-ranking/`, `/reviews/surfer-seo/`, `/reviews/hunter-io/`, `/reviews/frase/`
- Use-case hubs: `/best-seo-tools-for-agencies-2026/`, `/shopify-seo-tools/`, `/seo-tools-for-beginners/`, `/best-seo-tools-for-ecommerce/`, `/agency-rank-tracker/` (top-level paths because they target "best X" hub keywords that rank better as root paths)
- Hub index: `/reviews/` lists all 6 program pillars
- Compare-only secondary: `/reviews/ahrefs/` exists but most Ahrefs-targeted articles live as clusters under `/reviews/semrush/` (e.g. `/reviews/semrush/vs-ahrefs/`)

**Why this split**: Use-case hubs target root-domain authority (best X queries). Program pillars use the subdirectory to keep topical authority scoped.

---

## 2. Pillar hierarchy (7 nodes + 4 hubs)

```
/reviews/                                  ← hub index, lists all 6 program pillars
├── /reviews/semrush/                       PILLAR 1   440 SV   $13.76 CPC
│   ├── /pricing/                          1,900 SV   $4.13 CPC
│   ├── /pro-plan/                           570 SV
│   ├── /alternatives/                       800 SV  $17.43 CPC
│   ├── /vs-ahrefs/                          740 SV  KD 18 ★
│   ├── /vs-ahrefs-vs-moz/                   120 SV
│   ├── /vs-se-ranking/                      TBD    KD 30
│   ├── /vs-surfer-seo/                      TBD
│   ├── /free-alternatives/                  310 SV
│   ├── /cheap-alternatives/                  30 SV  KD 23
│   ├── /free-trial/                         cluster
│   ├── /worth-it/                            10 SV  KD 31
│   ├── /affiliate-program/                   10 SV  KD 27
│   ├── /nonprofit-pricing/                   10 SV  KD 12
│   └── /seo-writing-assistant/              cluster
│
├── /reviews/mangools/                      PILLAR 2    90 SV  $51.59 CPC ★
│   ├── /pricing/                             30 SV  KD 68
│   ├── /kwfinder-guide/                      920 SV  KD 26
│   ├── /vs-semrush/                           70 SV
│   ├── /vs-ahrefs/                            50 SV  KD 15
│   └── /affiliate-program/                   free
│
├── /reviews/se-ranking/                    PILLAR 3   360 SV  $22.56 CPC
│   ├── /pricing/                             140 SV  KD 28
│   ├── /alternatives/                         60 SV
│   ├── /vs-semrush/                          360 SV  KD 30
│   └── /vs-ahrefs/                           150 SV  KD 16
│
├── /reviews/surfer-seo/                    PILLAR 4   190 SV  $21.01 CPC
│   ├── /pricing/                             130 SV  KD 28
│   ├── /vs-frase/                             10 SV  KD 17
│   ├── /vs-semrush/                           90 SV
│   └── /alternatives/                        490 SV
│
├── /reviews/hunter-io/                     PILLAR 5    70 SV  $13.55 CPC
│   ├── /pricing/                             220 SV
│   ├── /alternatives/                         80 SV  KD 18
│   └── /chrome-extension-guide/              220 SV
│
├── /reviews/frase/                         PILLAR 6   100 SV   $8.03 CPC
│   ├── /pricing/                              20 SV
│   ├── /vs-surfer-seo/                        20 SV  KD 17
│   ├── /vs-jasper/                            10 SV
│   └── /alternatives/                        100 SV  KD 28
│
└── /reviews/ahrefs/                        SECONDARY  44,300 SV (BRAND POWER)
    ├── /vs-semrush/                           760 SV  (covered by Semrush cluster)
    └── /vs-mangools/                           30 SV  KD 19 (covered by Mangools cluster)

Top-level use-case hubs (root paths for "best X" keyword authority):
├── /best-seo-tools-for-agencies-2026/      HUB     830 SV  $57.65 CPC ★ HIGHEST
├── /seo-tools-for-beginners/                HUB     310 SV  KD 35
├── /best-seo-tools-for-ecommerce/           HUB     150 SV  KD 19 ★
├── /agency-rank-tracker/                    HUB   1,300 SV  KD 23 ★
├── /shopify-seo-tools/                      HUB     590 SV
└── /white-label-seo-tools/                  HUB     380 SV  KD 26
```

---

## 3. Publication order (top 15 from MASTER.csv)

| # | Article | Program | KD | SV | Est $/mo |
|---|---|---|---|---|---|
| 1 | semrush-vs-ahrefs/ | Semrush | 18 | 740 | $1.66 |
| 2 | /agency-rank-tracker/ | Hub | 23 | 1,300 | — |
| 3 | /white-label-seo-reports/ | Hub | 23 | 560 | — |
| 4 | /reviews/hunter-io/ (hunter email finder sub-keyword) | Hunter.io | 25 | 3,600 | $6.99 |
| 5 | /reviews/mangools/kwfinder-guide/ | Mangools | 26 | 920 | $1.84 |
| 6 | /reviews/mangools/ | Mangools | 28 | 1,500 | $6.16 |
| 7 | /reviews/semrush/pro-plan/ | Semrush | 28 | 570 | — |
| 8 | /reviews/ahrefs/ | Ahrefs | 31 | 44,300 | $106.53 |
| 9 | /local-seo-tools/ | Hub | 31 | 1,600 | — |
| 10 | /reviews/semrush/vs-ahrefs/ (if not already #1) | Semrush | 31 | 760 | $0.85 |
| 11 | /reviews/ahrefs/alternatives/ | Ahrefs | 31 | 570 | $1.02 |
| 12 | /shopify-seo/ | Hub | 32 | 1,600 | — |
| 13 | /reviews/semrush/pricing/ | Semrush | 33 | 1,900 | $1.88 |
| 14 | /reviews/surfer-seo/ | Surfer SEO | 35 | 5,500 | $41.58 |
| 15 | /shopify-seo-tools/ | Hub | 36 | 590 | — |

(Full order in `data/affiliate-keywords/MASTER.csv`. Tie-breaks: lower KD → higher SV.)

---

## 4. Estimated revenue by program (Tier 1 + Tier 2 only)

| Program | Est $/mo (top-5 rank) | Keywords | Commission rate |
|---|---|---|---|
| Ahrefs | **$115.36** | 8 | 20% recurring |
| Surfer SEO | $51.67 | 4 | 75–125% CPA |
| Hunter.io | $26.99 | 4 | 30% recurring |
| Semrush | $18.37 | 22 | 40% recurring |
| SE Ranking | $15.52 | 6 | 30% lifetime |
| Frase | $13.95 | 5 | 30% × 12mo |
| Mangools | $9.52 | 4 | 35% lifetime |
| Use-case hubs | (cross-program) | 25 | — |
| **TOTAL Tier 1+2** | **$251.38/mo** | 78 | — |

These are conservative rank-5 estimates. Top-3 ranks would 3–4× this. Tier 3 long-tail adds another ~$50–100/mo once the cluster articles are indexed.

---

## 5. Cross-pillar 6-node graph

Every program pillar cross-links to every other program pillar exactly once. This creates a closed graph so PageRank circulates among the 6 highest-value pages.

| From → To | Semrush | Mangools | SE Ranking | Surfer SEO | Hunter.io | Frase |
|---|---|---|---|---|---|---|
| **Semrush** | — | ✅ "budget alternative" | ✅ "vs SE Ranking" | ✅ "vs Surfer SEO" | (no link) | (no link) |
| **Mangools** | ✅ "vs Semrush" | — | (no link) | (no link) | (no link) | (no link) |
| **SE Ranking** | ✅ "vs Semrush" | ✅ "vs Mangools" | — | (no link) | (no link) | (no link) |
| **Surfer SEO** | ✅ "vs Semrush" | (no link) | ✅ "vs SE Ranking" | — | (no link) | ✅ "vs Frase" |
| **Hunter.io** | (no link) | (no link) | (no link) | (no link) | — | (no link) |
| **Frase** | (no link) | (no link) | (no link) | ✅ "vs Surfer SEO" | (no link) | — |

**Why this asymmetry**: only programs that share a "vs" article cross-link. Adding more links dilutes anchor text signals and looks unnatural. The 6-node graph still closes (every pillar is reachable from every other within 2 hops via the Semrush hub).

---

## 6. New-article boost checklist

Every new article gets 5 contextual inbound links in week 1 (or Google won't crawl or trust it):

1. ☐ Link from pillar parent (in a relevant paragraph, varied anchor)
2. ☐ Link from 2 sibling cluster articles (in "related comparisons" or "see also")
3. ☐ Link from 1 cross-pillar article (in the comparison table)
4. ☐ Link from `/reviews/` hub index (in "Latest reviews")
5. ☐ Link from the homepage "Latest Articles" block
6. ☐ Submit URL in Google Search Console for indexing

For use-case hubs, replace pillar parent with the closest program review.

---

## 7. Affiliate CTA placement rule

Per FTC guidelines, every article includes:

- **Soft disclosure in intro** (above the fold, first 100 words): operator-voice disclosure ("I use [Tool] daily on client campaigns. If you sign up via my link, I earn a commission at no cost to you.")
- **Contextual CTA mid-article** (after a key data point or comparison): action anchor ("Try [Tool] Pro free for 14 days →")
- **Primary CTA before conclusion**: full affiliate button block with disclosure

**Avoid**: more than 3 CTAs per article (looks spammy), sitewide sidebar affiliate links (Google penalty risk).

---

## 8. Anchor text rotation

Across the 6 program pillars, vary anchor text per this split:

- **30% brand**: "Semrush", "Mangools", "SE Ranking"
- **20% generic**: "this tool", "the platform", "the SEO tool"
- **30% long-tail**: "Semrush Pro plan", "Mangools KWFinder", "SE Ranking alternatives"
- **20% action**: "try Mangools free", "start the SE Ranking trial", "see current pricing"

Never use the same anchor twice on a single page.

---

## 9. Editorial disclosure (FTC compliance)

Every review opens with:

> **Affiliate disclosure**: I use [Tool] on real client campaigns. If you sign up via my link, I earn a commission at no extra cost to you. That's how this site stays free. I only recommend tools I actually use. Read my [editorial policy](/reviews/disclosure).

Templates live in `docs/affiliate-disclosure-policy.md` (to be created).

---

## 10. Integration with existing OPM content

### `/blog/*` articles → link down to `/reviews/*`

The 35 existing SEO articles reference tools by name. Add contextual links from:

| Existing article | Link to |
|---|---|
| `rank-tracking-tools` | `/reviews/semrush/`, `/reviews/mangools/`, `/agency-rank-tracker/` |
| `seo-audit-tools` | `/reviews/semrush/`, `/reviews/ahrefs/` |
| `keyword-research-tool` mentions | `/reviews/mangools/kwfinder-guide/`, `/reviews/semrush/` |
| `link-building-tactics` mentions | `/reviews/ahrefs/`, `/reviews/mangools/linkminer/` |

### `/tools/` (agency stack page)

Add banner at top: "**Want our operator-led reviews?** See `/reviews/` for honest, hands-on reviews of every tool we use."

### Navigation

Main nav: add "Reviews" between "Tools" and "Blog" — points to `/reviews/`.

---

## 11. Phase plan (re-baselined against the MASTER.csv)

### Phase 0 — UNBLOCK (do this week)

1. **Apply to 5 new affiliate programs**: Mangools, SE Ranking, Surfer SEO, Hunter.io, Frase. Email drafts in `docs/affiliate-program-application-emails.md` (created this session).
2. **Wait for approval** (3–7 days typical).

### Phase 1 — Build scaffolding (week 1)

3. Create `/reviews/` index page + `/reviews/[program]/` dynamic route (this session: scaffold built).
4. Add "Reviews" to main nav.
5. Update `/tools/` with banner.
6. Build 1 SEO-ready stub article (e.g. `/reviews/semrush/vs-ahrefs/` since it's Tier 1, KD 18).

### Phase 2 — First 4 articles (weeks 2–5)

7. Publish `/reviews/semrush/vs-ahrefs/` (KD 18, fastest rank)
8. Publish `/reviews/mangools/` (Hammad uses daily, $51.59 CPC)
9. Publish `/agency-rank-tracker/` (KD 23, 1,300 SV)
10. Publish `/best-seo-tools-for-agencies-2026/` ($57.65 CPC, highest revenue)

### Phase 3 — Expansion (weeks 6–24)

11. Publish remaining Tier 1 + Tier 2 articles in MASTER.csv order.
12. Refresh existing `/blog/*` articles to add contextual `/reviews/*` links.

### Phase 4 — Maintenance (ongoing)

13. Quarterly `dateModified` refresh.
14. Affiliate-program meta reviews (low priority, opportunistic).
15. Per-program revenue tracking via UTM parameters.

---

## 12. Unresolved decisions (need user input)

1. **Which tools does Hammad actually use on client campaigns?** Determines which pillars can use the operator-voice disclosure. Currently assumed: Semrush (yes, primary), Mangools (yes, daily), others = "honest third-party review."
2. **Drop or keep the 4 secondary programs** (Sitechecker, Keyword.com, Link Whisper, NitroPack) in the revenue math?
3. **Approve the route scaffolding before any code ships**? (Per OPM approval-required workflow.)
