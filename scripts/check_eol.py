#!/usr/bin/env python3
"""Check line endings of the modified files."""
import sys
from pathlib import Path

files = [
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\globals.css",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\layout.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\components\sections\hero.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\about\page.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\about\[slug]\page.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\next.config.ts",
]

for f in files:
    p = Path(f)
    raw = p.read_bytes()
    crlf = raw.count(b"\r\n")
    lone_lf = raw.count(b"\n") - crlf
    bare_cr = raw.count(b"\r") - crlf
    eol = "CRLF" if crlf > lone_lf else "LF"
    print(f"  {eol:4s} | CRLF={crlf:5d} | LF={lone_lf:5d} | {p.name}")
