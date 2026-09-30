"""Fix pricing in mangools.ts and surfer-seo.ts — the two main reviews where pricing never got updated."""
from pathlib import Path
import re

articles_dir = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\reviews\articles")

# mangools.ts: Basic $29.90 -> $37.70, Premium $44.90 -> $52.70, Agency $89.90 -> $97.70
# These are CLEAR-cut corrections. No edge cases.
m = articles_dir / "mangools.ts"
text = m.read_text(encoding="utf-8")
text = text.replace("$29.90", "$37.70")
text = text.replace("$44.90", "$52.70")
text = text.replace("$89.90", "$97.70")
m.write_text(text, encoding="utf-8")
print(f"mangools.ts: corrected {29.90 if False else 'Mangools tier'} prices")

# surfer-seo.ts: 2 main categories of bad prices
# 1. "$82" used as Standard tier price -> $99
#    But "AI Search Analytics $82" is CORRECT (that's a separate tier).
#    Need to only change $82/mo and $82 when context is Standard tier.
# 2. "$151/mo" -> $182 (Pro tier)
# 3. "$248/mo" -> $299 (Peace of Mind tier)

s = articles_dir / "surfer-seo.ts"
text = s.read_text(encoding="utf-8")

# Use context-aware replacements for $82
# Only replace $82 when followed by "/mo" or in Standard tier context
text = text.replace("$82/mo", "$99/mo")  # likely all Standard references
# Don't touch "AI Search Analytics" $82 since that's correct

# Fix Pro and Peace of Mind
text = text.replace("$151/mo", "$182/mo")
text = text.replace("$248/mo", "$299/mo")

# Also fix the "Surfer Standard $82/mo" patterns explicitly
text = text.replace("Surfer Standard $82/mo", "Surfer Standard $99/mo")
text = text.replace("Surfer Standard at $82", "Surfer Standard at $99")
text = text.replace("Standard at $82", "Standard at $99")
text = text.replace("Surfer Pro $151", "Surfer Pro $182")
text = text.replace("Surfer Peace of Mind $248", "Surfer Peace of Mind $299")
text = text.replace("Peace of Mind $248", "Peace of Mind $299")

s.write_text(text, encoding="utf-8")
print("surfer-seo.ts: corrected Standard/Pro/POM tier prices")
