import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

content = open(r'C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing\content\case-studies.ts', encoding='utf-8').read()

# Find all slug positions
slugs = list(re.finditer(r'^\s\s\{\n\s*"slug":\s*"([^"]+)"', content, re.MULTILINE))
print(f'Found {len(slugs)} case studies')
print()

# For each case, find the next slug start and use that as the boundary
for i, m in enumerate(slugs):
    slug = m.group(1)
    start = m.start()
    end = slugs[i+1].start() if i+1 < len(slugs) else len(content)
    blk = content[start:end]

    ch = re.search(r'"cardHeadline":\s*"([^"]+)"', blk)
    cl = re.search(r'"cardLabel":\s*"([^"]+)"', blk)
    summ = re.search(r'"summary":\s*"([^"]+)"', blk)
    # topStats values
    ts_m = re.search(r'"topStats":\s*\[(.*?)\n\s*\]', blk, re.DOTALL)
    if ts_m:
        items = re.findall(r'"value":\s*"([^"]+)"', ts_m.group(1))
    else:
        items = []
    # trajectory values
    tr_m = re.search(r'"trajectory":\s*\[(.*?)\n\s*\]', blk, re.DOTALL)
    if tr_m:
        vals = re.findall(r'"value":\s*([\d.]+)', tr_m.group(1))
    else:
        vals = []
    print(f'{slug:30s}  card={(ch.group(1) if ch else "?")!r:50s}')
    print(f'  summary: {(summ.group(1) if summ else "?")[:120]}...')
    print(f'  topStats: {items}  traj_n={len(vals)} traj={vals}')
    print()
