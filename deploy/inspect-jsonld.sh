#!/usr/bin/env bash
# Inspect the actual rendered JSON-LD on a bio page.
echo "=== Search for application/ld+json in the HTML ==="
curl -sL "https://omnipathmarketing.com/about/hammad" > /tmp/hammad.html
grep -c "application/ld+json" /tmp/hammad.html
echo ""

echo "=== Show context around 'application/ld+json' (first hit) ==="
grep -oE ".{120}application/ld\+json.{500}" /tmp/hammad.html | head -1
echo ""

echo "=== Show context around '@type\":\"Person' (escaped form) ==="
grep -oE ".{40}@type.{120}" /tmp/hammad.html | head -3
echo ""

echo "=== Search for unescaped 'application/ld+json' in the HTML ==="
grep -oE 'application/ld\+json' /tmp/hammad.html | wc -l
echo ""

echo "=== Last 2000 chars of HTML to see the body/scripts ==="
tail -c 2000 /tmp/hammad.html
