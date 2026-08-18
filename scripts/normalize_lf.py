#!/usr/bin/env python3
"""Normalize edited files to LF line endings (matches repo convention)."""
from pathlib import Path

files = [
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\globals.css",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\app\layout.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\components\sections\hero.tsx",
    r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\next.config.ts",
]

for f in files:
    p = Path(f)
    raw = p.read_bytes()
    # Convert CRLF -> LF
    new = raw.replace(b"\r\n", b"\n")
    if new != raw:
        p.write_bytes(new)
        print(f"  normalized {p.name} ({raw.count(chr(13).encode())} CRLF -> LF)")
    else:
        print(f"  already LF {p.name}")
