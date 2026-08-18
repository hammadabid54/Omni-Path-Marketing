#!/usr/bin/env bash
# Post-bio-deploy smoke test: verify 5 /about/[slug] pages and updated /about land live.
set -e

echo "=== /about/[slug] page status codes ==="
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    code=$(curl -s -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about/$slug/")
    size=$(curl -sL "https://omnipathmarketing.com/about/$slug/" | wc -c)
    echo "  /about/$slug/ : HTTP $code, ${size} bytes"
done

echo ""
echo "=== /about status + size ==="
code=$(curl -s -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about/")
size=$(curl -sL "https://omnipathmarketing.com/about/" | wc -c)
echo "  /about/ : HTTP $code, ${size} bytes"

echo ""
echo "=== Sample of team member names on /about ==="
for name in "Hammad Abid" "Rana Moneeb" "Adnan Ameer" "Haider Mateen" "Saad Yawar"; do
    hits=$(curl -sL "https://omnipathmarketing.com/about/" | grep -c "$name")
    echo "  $name : $hits hit(s)"
done

echo ""
echo "=== Each bio page has a 'Recent wins' section ==="
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    hits=$(curl -sL "https://omnipathmarketing.com/about/$slug/" | grep -c "Recent wins")
    echo "  /about/$slug/ : 'Recent wins' FOUND ($hits)"
done

echo ""
echo "=== Bio page has Person JSON-LD ==="
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    hits=$(curl -sL "https://omnipathmarketing.com/about/$slug/" | grep -c '"@type":"Person"')
    echo "  /about/$slug/ : Person JSON-LD: $hits"
done
