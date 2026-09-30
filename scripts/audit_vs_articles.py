"""Audit the rewritten vs-articles for word counts, inline links, and sources block entries."""
import re
from pathlib import Path

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")
vs_files = sorted([f for f in articles_dir.glob("*.ts") if "vs-" in f.stem])


def extract_body(text):
    """Extract the top-level body: [...] array (not the body: '...' string in affiliate-cta blocks)."""
    body_match = re.search(r"^  body:\s*\[", text, re.MULTILINE)
    if not body_match:
        return ""
    start = body_match.end()
    end = text.find("\n  ]", start)
    if end < start:
        return ""
    return text[start:end]


stats = []
for f in vs_files:
    text = f.read_text(encoding="utf-8")
    body_text = extract_body(text)

    words = len(body_text.split())
    links = re.findall(r"\[([^\]]+)\]\(([^)]+)\)", body_text)

    src_items_match = re.search(r'type:\s*["\']sources["\'].*?items:\s*\[(.*?)\]', text, re.DOTALL)
    src_count = src_items_match.group(1).count("name:") if src_items_match else 0

    unique_links = {url for _, url in links}
    stats.append((f.name, words, len(links), len(unique_links), src_count))


print("=== VS article stats after rewrite ===")
print(f"{'File':<55} {'Words':>7} {'Links':>7} {'Uniq':>5} {'Srcs':>5}")
print("-" * 84)
for n, w, l, u, s in stats:
    print(f"{n:<55} {w:>7} {l:>7} {u:>5} {s:>5}")

total_words = sum(w for _, w, _, _, _ in stats)
total_links = sum(l for _, _, l, _, _ in stats)
total_unique = sum(u for _, _, _, u, _ in stats)
total_src = sum(s for _, _, _, _, s in stats)
print()
print(f"Totals: {total_words} words, {total_links} inline links, {total_unique} unique URLs, {total_src} sources")
print(f"Avg:   {total_words // len(stats)} words/article, {total_links // len(stats)} inline links/article")
