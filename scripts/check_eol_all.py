#!/usr/bin/env python3
"""Check EOL for all new + modified files in this commit."""
import sys
from pathlib import Path

ROOT = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing")
files = [
    "app/case-studies/page.tsx",
    "app/case-studies/[slug]/page.tsx",
    "components/case-study/trajectory-chart.tsx",
    "components/case-study/data-tables.tsx",
    "components/case-study/activity-checklist.tsx",
    "components/case-study/case-study-toc.tsx",
    "components/case-study/case-study-card.tsx",
    "components/charts/sparkline.tsx",
    "content/case-studies.ts",
    "scripts/extract_case_studies_v2.py",
]

for f in files:
    p = ROOT / f
    if not p.exists():
        continue
    raw = p.read_bytes()
    crlf = raw.count(b"\r\n")
    lone_lf = raw.count(b"\n") - crlf
    eol = "CRLF" if crlf > lone_lf else "LF"
    if eol == "CRLF":
        print(f"  FIX NEEDED {eol:4s} | CRLF={crlf:5d} | LF={lone_lf:5d} | {f}")
    else:
        print(f"  OK         {eol:4s} | LF={lone_lf:5d} | {f}")
