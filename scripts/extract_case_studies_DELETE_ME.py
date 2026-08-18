#!/usr/bin/env python3
"""Inventory and basic analysis of case study docs."""
import os
import re
from pathlib import Path
from collections import defaultdict

ROOT = Path(r"C:\Users\hamma\Downloads\New folder\Case Studies\Case Studies")

# Inventory
print("=" * 70)
print("INVENTORY")
print("=" * 70)

clients = defaultdict(list)
for p in sorted(ROOT.rglob("*")):
    if p.is_file():
        rel = p.relative_to(ROOT)
        # First folder = client
        client = rel.parts[0] if len(rel.parts) > 1 else "(root)"
        clients[client].append((rel, p.suffix, p.stat().st_size))

for client, files in sorted(clients.items()):
    print(f"\n{client} ({len(files)} file{'s' if len(files) != 1 else ''})")
    for rel, ext, size in files:
        kb = size / 1024
        print(f"  {ext:6s} {kb:7.1f} KB  {rel}")

# Summary
print("\n" + "=" * 70)
print("SUMMARY")
print("=" * 70)
total = sum(len(f) for f in clients.values())
print(f"  Clients:       {len(clients)}")
print(f"  Total files:   {total}")
exts = defaultdict(int)
for files in clients.values():
    for _, ext, _ in files:
        exts[ext] += 1
print(f"  File types:    {dict(exts)}")

# Detect which have Omni Path version
print("\n--- Clients with both Brand Me Up + Omni Path versions ---")
op_clients = []
for client, files in clients.items():
    has_op = any("Omni_Path" in str(rel) for rel, _, _ in files)
    if has_op:
        op_clients.append(client)
print(f"  {len(op_clients)} clients with Omni Path version: {op_clients}")
