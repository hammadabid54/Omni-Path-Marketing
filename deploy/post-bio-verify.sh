#!/usr/bin/env bash
# Post-bio-deploy verification: status codes with -L, JSON-LD, /about cards, sitemap.
# No `set -e` because `grep -c` returns 1 on zero matches, which would abort early.


echo "=== HTTP status with -L (follow redirect) ==="
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about/$slug")
    size=$(curl -sL "https://omnipathmarketing.com/about/$slug" | wc -c)
    echo "  /about/$slug : HTTP $code, ${size} bytes"
done

echo ""
echo "=== /about status (follow) ==="
code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about")
size=$(curl -sL "https://omnipathmarketing.com/about" | wc -c)
echo "  /about : HTTP $code, ${size} bytes"

echo ""
echo "=== Person JSON-LD on each bio page ==="
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    hits=$(curl -sL "https://omnipathmarketing.com/about/$slug" | grep -c '"@type":"Person"' || true)
    echo "  /about/$slug : Person schema hits: ${hits:-0}"
done

echo ""
echo "=== /about has 5 team cards (Read full bio) ==="
cards=$(curl -sL "https://omnipathmarketing.com/about" | grep -c "Read full bio" || true)
echo "  Read full bio buttons: ${cards:-0}"

echo ""
echo "=== Sitemap URL count ==="
sitemap=$(curl -sL "https://omnipathmarketing.com/sitemap.xml" | grep -c "<loc>" || true)
echo "  sitemap.xml URLs: ${sitemap:-0}"

echo ""
echo "=== Final: home + key pages still 200 ==="
for p in / /about/ /services/seo/ /services/paid-ads/; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com$p")
    echo "  $p : HTTP $code"
done
