"""Verify the verifier's CRITICAL findings directly."""
import re
from pathlib import Path

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")

# Critical findings from verifier
checks = [
    ("mangools.ts", ["37.70", "52.70", "97.70", "29.90", "44.90", "89.90", "em_dash"]),
    ("surfer-seo.ts", ["49", "99", "182", "299", "82", "151", "248", "em_dash"]),
    (
        "mangools-affiliate-program.ts",
        ["mangools.com/affiliates", "mangools.com/affiliate-program", "ahrefs.com/affiliate-program", "semrush.com/affiliates"],
    ),
    (
        "semrush-affiliate-program.ts",
        ["semrush.com/affiliates", "ahrefs.com/affiliate-program", "semrush.com/analytics/positiontracking"],
    ),
    ("mangools-pricing.ts", ["em_dash_count"]),
]

for fname, patterns in checks:
    f = articles_dir / fname
    text = f.read_text(encoding="utf-8")
    body_match = re.search(r"^  body:\s*\[", text, re.MULTILINE)
    start = body_match.end()
    end = text.find("\n  ]", start)
    body = text[start:end]
    words = len(body.split())
    em_dashes = body.count("—")
    print(f"=== {fname} ({words} words, {em_dashes} em dashes) ===")
    for p in patterns:
        if p == "em_dash" or p == "em_dash_count":
            continue
        count = body.count(p)
        if count:
            print(f'  has "{p}": {count}x')
    print()
