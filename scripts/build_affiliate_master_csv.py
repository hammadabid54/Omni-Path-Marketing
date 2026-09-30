"""Build MASTER CSV for the affiliate marketing topical map.

Reads per-program CSVs + the existing Semrush CSV, normalizes columns, adds
Program + Estimated_Monthly_Value columns, computes publication order, and writes
a single MASTER CSV that becomes the source of truth for what to publish next.

Publication-order heuristic (lower = publish first):
  - Tier 1 keyword: SV >= 200 AND KD <= 40
  - Tier 2 keyword: SV 50-199 OR (Tier 1 conditions not met)
  - Tier 3 keyword: SV < 50 OR KD > 50
  - Skip: no volume or 'Skip' status

Within a tier, sort by (1 / KD) descending — i.e. lowest KD first.
"""
import csv
import os
from pathlib import Path

ROOT = Path(r"C:\Users\hamma\OneDrive\Documents\Omni Path Marketing\omni-path-marketing")
DATA = ROOT / "data" / "affiliate-keywords"

PROGRAM_FILES = [
    ("Semrush", Path(r"C:\Users\hamma\.minimax\v2\assets\2026\09\28\06-38-13-371-asset_20260928-063813-371_1eeaad4e75be_3ba2cf61-semrush-keyword-research.csv")),
    ("Mangools", DATA / "mangools.csv"),
    ("SE Ranking", DATA / "se-ranking.csv"),
    ("Surfer SEO", DATA / "surfer-seo.csv"),
    ("Hunter.io", DATA / "hunter-io.csv"),
    ("Frase", DATA / "frase.csv"),
    ("Ahrefs", DATA / "ahrefs.csv"),
    ("Use-case Hubs", DATA / "use-case-hubs.csv"),
]

COMMISSION_RATES = {
    "Semrush": 0.40,        # Semrush Beast/Sigma 40% recurring (typical SaaS partner program)
    "Mangools": 0.35,       # 35% lifetime
    "SE Ranking": 0.30,     # 30% lifetime
    "Surfer SEO": 1.00,     # 75-125% CPA — use 100% as midpoint for estimate
    "Hunter.io": 0.30,      # 30% recurring
    "Frase": 0.30,          # 30% × 12mo
    "Ahrefs": 0.20,         # 20% recurring (typical)
    "Use-case Hubs": 0.00,  # cross-program; commission handled per-link
}

EST_CTR_BY_POSITION = {  # rough CTR × conversion × cookie rate by avg SERP position
    1: 0.30, 2: 0.15, 3: 0.10, 4: 0.06, 5: 0.04, 6: 0.03, 7: 0.02, 8: 0.015, 9: 0.01, 10: 0.008
}

def parse_int(v):
    if v in (None, "", "null"): return None
    try: return int(v)
    except: return None

def parse_float(v):
    if v in (None, "", "null"): return None
    try: return float(v)
    except: return None

def load_csv(path, program):
    if not path.exists():
        print(f"SKIP missing: {path}")
        return []
    rows = []
    with open(path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            row["Program"] = program
            # Normalize fields
            row["SV"]  = parse_int(row.get("SV"))
            row["KD"]  = parse_int(row.get("KD"))
            row["CPC"] = parse_float(row.get("CPC"))
            row["PPC"] = parse_int(row.get("PPC"))
            rows.append(row)
    return rows

all_rows = []
for program, path, *_ in PROGRAM_FILES:
    rows = load_csv(path, program)
    print(f"Loaded {len(rows):>3} rows: {program}")
    all_rows.extend(rows)

print(f"\nTotal rows: {len(all_rows)}")

# Compute Estimated_Monthly_Value per keyword:
# SV × CTR(top-3 avg ~0.18) × Conversion_Rate(0.02) × Commission_Rate
# Use a fixed position-3 CTR × 2% conversion for top-of-funnel estimate.
for row in all_rows:
    sv = row.get("SV") or 0
    cpc = row.get("CPC") or 0
    rate = COMMISSION_RATES.get(row["Program"], 0)
    # Conservative: rank #5 (CTR ~0.04), 1.5% conversion (info / mid-funnel traffic), commission rate
    row["Est_Monthly_USD"] = round(sv * 0.04 * 0.015 * cpc * rate, 2)
    # Auto-priority override: SV >= 200 and KD <= 40 -> Tier 1 (if not Skip)
    status = row.get("Status") or ""
    if status.startswith("Skip"):
        continue
    sv = row.get("SV") or 0
    kd = row.get("KD")
    if sv >= 500 and (kd is None or kd <= 40):
        row["Priority"] = "Tier 1"
    elif sv >= 100:
        row["Priority"] = "Tier 2"
    elif sv >= 10:
        row["Priority"] = "Tier 3"
    else:
        row["Priority"] = "Tier 3"

# Sort by Priority (Tier 1 first), then by (KD ASC, SV DESC) for publication order
priority_rank = {"Tier 1": 1, "Tier 2": 2, "Tier 3": 3, "Skip": 4}
def sort_key(r):
    kd = r.get("KD") if r.get("KD") is not None else 999
    sv = r.get("SV") if r.get("SV") is not None else 0
    return (
        priority_rank.get(r.get("Priority", "Tier 3"), 3),
        kd,                  # lower KD = first
        -sv,                 # higher SV = first within same KD
    )

all_rows.sort(key=sort_key)

# Write MASTER CSV
master_path = DATA / "MASTER.csv"
fieldnames = ["Program", "Keyword", "SV", "KD", "CPC", "PPC", "Cluster", "Intent", "Priority", "Target_Article", "Status", "Est_Monthly_USD"]
with open(master_path, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
    writer.writeheader()
    for row in all_rows:
        writer.writerow({k: row.get(k, "") for k in fieldnames})

print(f"\nMASTER CSV written: {master_path}")
print(f"Total keywords: {len(all_rows)}")
print(f"Skip: {sum(1 for r in all_rows if (r.get('Status') or '').startswith('Skip'))}")
print(f"Tier 1: {sum(1 for r in all_rows if r.get('Priority') == 'Tier 1')}")
print(f"Tier 2: {sum(1 for r in all_rows if r.get('Priority') == 'Tier 2')}")
print(f"Tier 3: {sum(1 for r in all_rows if r.get('Priority') == 'Tier 3')}")

# Top 15 by publication order
print("\nTop 15 publication order:")
for i, r in enumerate(all_rows[:15], 1):
    status = r.get("Status") or ""
    if status.startswith("Skip"):
        continue
    print(f"  {i:>2}. [{r['Program']:<14}] KD={str(r.get('KD','')):<4} SV={str(r.get('SV','')):<6} Est=${r.get('Est_Monthly_USD', 0):>6}/mo  {r['Keyword']}")

# Revenue projection per program
print("\nRevenue projection per program (sum of est_monthly_usd for Tier 1 + Tier 2):")
from collections import defaultdict
prog_revenue = defaultdict(float)
prog_count = defaultdict(int)
for r in all_rows:
    status = r.get("Status") or ""
    if status.startswith("Skip"):
        continue
    if r.get("Priority") in ("Tier 1", "Tier 2"):
        prog_revenue[r["Program"]] += r.get("Est_Monthly_USD", 0)
        prog_count[r["Program"]] += 1
for prog, rev in sorted(prog_revenue.items(), key=lambda x: -x[1]):
    print(f"  {prog:<16} ${rev:>8.2f}/mo  ({prog_count[prog]} keywords)")
print(f"  {'TOTAL':<16} ${sum(prog_revenue.values()):>8.2f}/mo")
