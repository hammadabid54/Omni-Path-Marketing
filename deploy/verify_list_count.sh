#!/usr/bin/env bash
echo "=== Count all 22 case study card links ==="
curl -sL "https://omnipathmarketing.com/case-studies" > /tmp/list.html
# Count href="/case-studies/<slug>" occurrences (excluding the list page itself)
count=$(grep -oE 'href="/case-studies/[a-z-]+"' /tmp/list.html | sort -u | wc -l)
echo "  Unique /case-studies/[slug] links on /case-studies: $count"
echo ""
echo "=== Sample first 5 unique slugs found ==="
grep -oE 'href="/case-studies/[a-z-]+"' /tmp/list.html | sort -u | head -5
echo ""
echo "=== 'Read full case study' occurrences (grep -o) ==="
grep -oE "Read full case study" /tmp/list.html | wc -l
echo ""
echo "=== Case study card structure check ==="
grep -oE "class=\"[^\"]*bento bento-lg[^\"]*group block[^\"]*\"" /tmp/list.html | wc -l
