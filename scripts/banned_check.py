#!/usr/bin/env python3
"""Banned-words sweep over the 2 new about files."""
import re
import sys
from pathlib import Path

BANNED = re.compile(
    r"\b(solutions?|leverage|synergy|holistic|journey|empower|unlock|"
    r"transform|disrupt|ecosystem|optimi[sz]e|optimization|optimised|optimising|"
    r"optimizable|optimise|optimising|optimization|reimagine|revolutionize|"
    r"revolutionise|seamless|seamlessly|game[\s-]?changing|cutting[\s-]?edge|"
    r"best[\s-]?in[\s-]?class|next[\s-]?gen|world[\s-]?class)\b",
    re.IGNORECASE,
)

files = [
    Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\about\page.tsx"),
    Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\about\[slug]\page.tsx"),
]

total = 0
for f in files:
    if not f.exists():
        print(f"MISSING: {f}")
        continue
    text = f.read_text(encoding="utf-8")
    matches = list(BANNED.finditer(text))
    print(f"=== {f.name} ===")
    if not matches:
        print("  CLEAN")
    else:
        for m in matches:
            line_no = text[: m.start()].count("\n") + 1
            print(f"  L{line_no}: {m.group(0)!r}")
            total += 1
    print(f"  -> {len(matches)} hits")

print(f"\nTotal banned-word hits: {total}")
sys.exit(1 if total else 0)
