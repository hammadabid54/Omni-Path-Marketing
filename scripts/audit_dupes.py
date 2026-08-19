import re, sys, io, json
from collections import Counter
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open(r'C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts', encoding='utf-8').read()

# Better block extractor: split on "  {" at line start (after the array open) up to next "  }" or array close
# Find each "  { ... }" segment. We need to track brace depth.
# Simple: split by "  }," or "  }" patterns
import re
# Match each block from "  {" to "  }," or "  }" (last block)
pattern = re.compile(r'\{\s*\n\s*"slug":\s*"([^"]+)"(.*?)\n  \}(?:,|\s*\n\];)', re.DOTALL)
blocks = pattern.findall(content)
print(f'Total blocks: {len(blocks)}')
print()

# Now look for duplicates
fields_to_check = ['cardHeadline', 'cardLabel', 'summary', 'h1']
for field in fields_to_check:
    print(f'--- {field} ---')
    values = []
    for slug, body in blocks:
        m = re.search(rf'"{field}":\s*"([^"]*)"', body)
        if m:
            values.append((slug, m.group(1)))
    counts = Counter(v for _, v in values)
    dupes = {v: c for v, c in counts.items() if c > 1}
    if dupes:
        print(f'  Duplicates ({len(dupes)} unique values appearing 2+ times):')
        for v, c in sorted(dupes.items(), key=lambda x: -x[1])[:10]:
            print(f'    x{c}: {v[:80]!r}')
    else:
        print('  No duplicates.')
    print()

# Check topStats values
print('--- topStats first value ---')
ts_values = []
for slug, body in blocks:
    m = re.search(r'"topStats":\s*\[(.*?)\n  \]', body, re.DOTALL)
    if m:
        first = re.search(r'"value":\s*"([^"]*)"', m.group(1))
        if first:
            ts_values.append((slug, first.group(1)))
counts = Counter(v for _, v in ts_values)
dupes = {v: c for v, c in counts.items() if c > 1}
if dupes:
    print(f'  Duplicates ({len(dupes)} unique topStats first-values):')
    for v, c in sorted(dupes.items(), key=lambda x: -x[1])[:10]:
        print(f'    x{c}: {v!r}')

# Check trajectory data
print()
print('--- trajectory data ---')
for slug, body in blocks:
    m = re.search(r'"trajectory":\s*\[(.*?)\n  \]', body, re.DOTALL)
    if m:
        vals = re.findall(r'"value":\s*([\d.]+)', m.group(1))
        print(f'  {slug:30s}  {vals}')
