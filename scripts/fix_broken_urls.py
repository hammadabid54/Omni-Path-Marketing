"""Surgical URL fixes for the 36 broken URLs flagged by the verifier."""
import re
from pathlib import Path

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")

# (file_pattern, old_url, new_url) — applied only when old_url appears in the body
url_fixes = [
    # Affiliate program URLs — 2-3x in 2 files
    ("mangools-affiliate-program.ts", "mangools.com/affiliates", "mangools.com/affiliate-program"),
    ("semrush-affiliate-program.ts", "semrush.com/affiliates", "semrush.com/affiliate-program"),
    ("mangools-affiliate-program.ts", "ahrefs.com/affiliate-program", "ahrefs.com/affiliates"),
    ("semrush-affiliate-program.ts", "ahrefs.com/affiliate-program", "ahrefs.com/affiliates"),
    # Semrush product paths — vendor restructured
    ("semrush-pricing.ts", "semrush.com/blog/semrush-pricing/", "semrush.com/pricing/seo-ai-search/"),
    ("semrush-pro-plan.ts", "semrush.com/blog/semrush-pricing/", "semrush.com/pricing/seo-ai-search/"),
    # Moz domain-authority — moved into /learn/seo/
    ("semrush-vs-ahrefs-vs-moz.ts", "moz.com/domain-authority", "moz.com/learn/seo/domain-authority"),
    # Site profiler URL typo (slash direction)
    ("mangools-vs-ahrefs.ts", "mangools.com/site-profiler/", "mangools.com/siteprofiler/"),
    # Semrush PPC feature — page moved/404
    ("mangools-vs-semrush.ts", "semrush.com/semrush-features/ppc/", "semrush.com/features/ppc-tool/"),
    ("se-ranking-vs-semrush.ts", "semrush.com/semrush-features/ppc/", "semrush.com/features/ppc-tool/"),
    ("semrush-vs-se-ranking.ts", "semrush.com/semrush-features/ppc/", "semrush.com/features/ppc-tool/"),
    ("surfer-seo-vs-semrush.ts", "semrush.com/semrush-features/ppc/", "semrush.com/features/ppc-tool/"),
    ("semrush-vs-ahrefs-vs-moz.ts", "semrush.com/semrush-features/ppc/", "semrush.com/features/ppc-tool/"),
    # Position tracking — page path moved
    ("semrush-free-trial.ts", "semrush.com/analytics/positiontracking/", "semrush.com/position-tracking/"),
]

# Skip the neilpatel 403s — those are vendor bot-blocks, not true 404s; leave them alone.

for fname, old, new in url_fixes:
    f = articles_dir / fname
    text = f.read_text(encoding="utf-8")
    if old not in text:
        print(f"SKIP {fname}: '{old}' not found (probably already fixed)")
        continue
    new_text = text.replace(old, new)
    f.write_text(new_text, encoding="utf-8")
    count = text.count(old)
    print(f"FIXED {fname}: {count}x '{old}' -> '{new}'")

print()
print("Done.")
