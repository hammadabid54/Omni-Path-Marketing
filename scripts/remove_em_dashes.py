"""Remove em dashes (U+2014) from main review article bodies. Preserves URLs."""
import re
from pathlib import Path

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")

main_reviews = [
    "ahrefs.ts", "frase.ts", "hunter-io.ts", "mangools.ts",
    "se-ranking.ts", "surfer-seo.ts",
]

# U+2014 is the em dash character
EM_DASH = "\u2014"

for fname in main_reviews:
    f = articles_dir / fname
    text = f.read_text(encoding="utf-8")

    # Find the body array bounds
    body_match = re.search(r"^  body:\s*\[", text, re.MULTILINE)
    start = body_match.end()
    end = text.find("\n  ]", start)
    if end < start:
        print(f"SKIP {fname}: could not find body bounds")
        continue

    body = text[start:end]
    em_dash_count = body.count(EM_DASH)

    # Replace em dashes with periods (with space after)
    # " â€” " (with spaces) → ". " (period for sentence breaks)
    new_body = body.replace(f" {EM_DASH} ", ". ")
    # "Xâ€" as sentence break (mid-sentence em dash) → "X. "
    new_body = re.sub(rf"(\w){EM_DASH}\s+", r"\1. ", new_body)

    if new_body != body:
        text = text[:start] + new_body + text[end:]
        f.write_text(text, encoding="utf-8")
        remaining = new_body.count(EM_DASH)
        print(f"{fname}: removed {em_dash_count - remaining} em dashes ({remaining} remain)")
    else:
        print(f"{fname}: no em dashes found")
