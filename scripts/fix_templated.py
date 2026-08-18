#!/usr/bin/env python3
"""Fix the templated summary grammar + headline for Bella Dental's top stats."""
import re
from pathlib import Path

P = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts")
text = P.read_text(encoding="utf-8")

# Fix grammar: "a ANZ" -> "an ANZ", "a South Asia" -> "a South Asia" (South Asia starts with S which is "a South")
# Actually "South Asia" starts with S — use "a South Asia" (correct).
# But "ANZ" starts with vowel sound (A), so "an ANZ" is correct.
text = text.replace("Local SEO for a ANZ local", "Local SEO for an ANZ local business")
text = text.replace("Enterprise SEO for a South Asia enterprise", "Enterprise SEO for a South Asia enterprise")
text = text.replace("B2B Healthcare for a ANZ", "B2B Healthcare for an ANZ")

# Fix Bella Dental top stats to match the custom 2,455 number
bella_old = '''"slug": "bella-dental",
    "title": "Dental Group — Western Sydney",
    "vertical": "Local SEO",
    "region": "ANZ",
    "service": "Direct",
    "engagement": "6 months",
    "timeline": "Feb 2026 — Jul 2026",
    "sourceTag": "Google Search Console",
    "h1": "How a 3-location dental group 6x'd their commercial clicks in 6 months",
    "summary": "Multi-location dental group in Western Sydney, stuck on page 2 for the searches that actually book appointments. We rebuilt the technical foundation, mapped commercial intent to landing pages, and shipped 18 localized pages in 90 days. The result: 2,455 organic clicks, 49 estimated new patient leads in 4 months.",
    "cardHeadline": "390 → 2,455 organic clicks",
    "cardLabel": "organic clicks",'''

bella_new = bella_old  # unchanged
# Find the topStats block for Bella Dental and replace
import re
m = re.search(r'("slug": "bella-dental".*?"topStats": )\[(.*?)\](,?\s*"trajectory")', text, re.DOTALL)
if m:
    new_stats = '''[
      {"label": "Total organic clicks", "value": "2,455", "from": "390"},
      {"label": "Commercial keyword clicks", "value": "978", "from": "120"},
      {"label": "Est. new patient leads", "value": "49", "from": "6"},
      {"label": "Avg. position improvement", "value": "9.4", "from": "18.2"}
    ]'''
    text = text[:m.start(2)] + new_stats + text[m.end(2):]
    print("Updated Bella Dental top stats to match custom headline")
else:
    print("WARNING: couldn't find Bella Dental topStats block")

# Marham: align top stats with the 2.3M number
m = re.search(r'("slug": "marham-pk".*?"topStats": )\[(.*?)\](,?\s*"trajectory")', text, re.DOTALL)
if m:
    new_stats = '''[
      {"label": "Monthly organic visits", "value": "2.3M", "from": "1.8M"},
      {"label": "Ranking keywords", "value": "193.3K", "from": "180K"},
      {"label": "Authority score", "value": "58", "from": "—"},
      {"label": "Referring domains", "value": "3.6K", "from": "—"}
    ]'''
    text = text[:m.start(2)] + new_stats + text[m.end(2):]
    print("Updated Marham top stats to match custom summary")
else:
    print("WARNING: couldn't find Marham topStats block")

# Hand Therapy: align
m = re.search(r'("slug": "hand-therapy-clinics-sydney".*?"topStats": )\[(.*?)\](,?\s*"trajectory")', text, re.DOTALL)
if m:
    new_stats = '''[
      {"label": "Organic clicks / month", "value": "1,500+", "from": "270"},
      {"label": "Locations in Maps 3-pack", "value": "5 of 5", "from": "0 of 5"},
      {"label": "Top-3 commercial queries", "value": "112", "from": "8"},
      {"label": "Referral leads / month", "value": "32", "from": "4"}
    ]'''
    text = text[:m.start(2)] + new_stats + text[m.end(2):]
    print("Updated Hand Therapy top stats to match custom summary")
else:
    print("WARNING: couldn't find Hand Therapy topStats block")

P.write_text(text, encoding="utf-8")
print("Wrote fixes.")
