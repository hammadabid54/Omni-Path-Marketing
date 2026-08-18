#!/usr/bin/env bash
curl -sL "https://omnipathmarketing.com/case-studies" > /tmp/list.html
echo "=== All /case-studies/[slug] links (deduped, sorted) ==="
grep -oE 'href="/case-studies/[a-z-]+"' /tmp/list.html | sort -u
echo ""
echo "=== count ==="
grep -oE 'href="/case-studies/[a-z-]+"' /tmp/list.html | sort -u | wc -l
