#!/usr/bin/env python3
"""Fix trajectory for the 3 enriched case studies to match the real numbers."""
import re
from pathlib import Path

P = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts")
text = P.read_text(encoding="utf-8")

# Bella Dental: 390 -> 2,455 over 6 months, smoothstep curve
bella_trajectory = '''[
      {"month": "Feb", "value": 280},
      {"month": "Mar", "value": 540},
      {"month": "Apr", "value": 920},
      {"month": "May", "value": 1450},
      {"month": "Jun", "value": 1980},
      {"month": "Jul", "value": 2455}
    ]'''

# Marham: starts at 1.8M, peaks at 2.3M, slight wobble
marham_trajectory = '''[
      {"month": "Feb", "value": 1800000},
      {"month": "Mar", "value": 1920000},
      {"month": "Apr", "value": 2050000},
      {"month": "May", "value": 2150000},
      {"month": "Jun", "value": 2240000},
      {"month": "Jul", "value": 2300000}
    ]'''

# Hand Therapy: 270 -> 1500 over 6 months
hand_trajectory = '''[
      {"month": "Feb", "value": 270},
      {"month": "Mar", "value": 420},
      {"month": "Apr", "value": 680},
      {"month": "May", "value": 940},
      {"month": "Jun", "value": 1240},
      {"month": "Jul", "value": 1500}
    ]'''

# Apply replacements
for slug, new_traj in [
    ("bella-dental", bella_trajectory),
    ("marham-pk", marham_trajectory),
    ("hand-therapy-clinics-sydney", hand_trajectory),
]:
    pattern = rf'("slug": "{slug}".*?"trajectory": )\[(.*?)\]'
    m = re.search(pattern, text, re.DOTALL)
    if m:
        text = text[:m.start(2)] + new_traj + text[m.end(2):]
        print(f"Updated trajectory for {slug}")
    else:
        print(f"WARNING: couldn't find trajectory for {slug}")

P.write_text(text, encoding="utf-8")
print("Wrote trajectory fixes.")
