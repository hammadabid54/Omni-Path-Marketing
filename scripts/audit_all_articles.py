"""Audit ALL affiliate articles for word counts, inline links, and old/new pricing."""
import re
from pathlib import Path

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")
all_files = sorted(articles_dir.glob("*.ts"))


def extract_body(text):
    body_match = re.search(r"^  body:\s*\[", text, re.MULTILINE)
    if not body_match:
        return ""
    start = body_match.end()
    end = text.find("\n  ]", start)
    if end < start:
        return ""
    return text[start:end]


# Old (wrong) prices vs new (verified) prices
OLD = ["$117.33", "$248.17/mo annual"]  # $117.33 was wrong Pro+
NEW = ["$248.17", "$248.17/mo annual"]  # $248.17 is correct

stats = []
for f in all_files:
    text = f.read_text(encoding="utf-8")
    body_text = extract_body(text)
    if not body_text:
        stats.append((f.name, 0, 0, "no body", "no body"))
        continue
    words = len(body_text.split())
    links = re.findall(r"\[([^\]]+)\]\(([^)]+)\)", body_text)
    # Old price check
    old_hits = []
    if "$117.33" in body_text:
        # Check context — sometimes $117.33 is correct (SEO tier)
        if "Pro+" in body_text and "$117.33" in body_text:
            old_hits.append("Pro+ = $117.33 (should be $248.17)")
        elif "SEO" in body_text and "$117.33" in body_text:
            old_hits.append("SEO tier $117.33 (OK if context is SEO)")
    new_hits = []
    if "$248.17" in body_text:
        new_hits.append("$248.17 (correct Pro+)")
    if "$52.70" in body_text:
        new_hits.append("$52.70 (correct Mangools Premium)")
    if "$99" in body_text and ("Surfer" in body_text or "Standard" in body_text):
        new_hits.append("$99 (correct Surfer Standard)")
    stats.append((f.name, words, len(links), ", ".join(new_hits) or "-", ", ".join(old_hits) or "-"))


print("=== All affiliate articles ===")
print(f"{'File':<55} {'Words':>7} {'Links':>6}  New prices found  Old prices (issues)")
print("-" * 130)
total_w = total_l = 0
under_2000 = []
for n, w, l, new_p, old_p in stats:
    flag = " <!>" if w < 2000 else ""
    if w < 2000:
        under_2000.append((n, w))
    print(f"{n:<55} {w:>7} {l:>6}  {new_p[:30]:<32}  {old_p[:30]}{flag}")
    total_w += w
    total_l += l

print()
print(f"Totals: {total_w} words, {total_l} inline links, avg {total_w // len(stats)} words/article")
print(f"Articles under 2000 words: {len(under_2000)}")
for n, w in under_2000:
    print(f"  - {n}: {w} words")
