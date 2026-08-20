import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from collections import Counter

content = open(r'C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts', encoding='utf-8').read()
pattern = re.compile(r'\{\s*\n\s*"slug":\s*"([^"]+)"(.*?)\n  \}(?:,|\s*\n\];)', re.DOTALL)
blocks = pattern.findall(content)

# Check topStats and keywords/pages data
print('--- topStats ---')
for slug, body in blocks:
    m = re.search(r'"topStats":\s*\[(.*?)\n  \]', body, re.DOTALL)
    if m:
        stats = re.findall(r'"label":\s*"([^"]+)"\s*,\s*"value":\s*"([^"]+)"', m.group(1))
        print(f'  {slug:30s}  {stats}')

print()
print('--- keywords first 3 rows ---')
for slug, body in blocks:
    m = re.search(r'"keywords":\s*\[(.*?)\n  \]', body, re.DOTALL)
    if m:
        rows = re.findall(r'"keyword":\s*"([^"]+)"', m.group(1))
        print(f'  {slug:30s}  {len(rows)} keywords: {rows[:3]}')
