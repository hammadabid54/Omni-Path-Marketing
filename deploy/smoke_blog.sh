#!/usr/bin/env bash
echo "=== /blog list page ==="
code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/blog")
size=$(curl -sL "https://omnipathmarketing.com/blog" | wc -c)
echo "  HTTP $code, ${size} bytes"

echo ""
echo "=== 4 blog detail pages ==="
for slug in state-of-seo-2026 how-we-cut-seo-from-25-hours-to-5 white-label-seo-80-20 ai-in-marketing-what-we-use; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/blog/$slug")
    size=$(curl -sL "https://omnipathmarketing.com/blog/$slug" | wc -c)
    echo "  /blog/$slug : HTTP $code, ${size} bytes"
done

echo ""
echo "=== Verify blog cards link to slugs ==="
links=$(curl -sL "https://omnipathmarketing.com/blog" | grep -oE 'href="/blog/[a-z0-9-]+"' | sort -u)
echo "$links"

echo ""
echo "=== Verify floating CTA + GA4 no-op (no env) ==="
echo "GA in HTML (should be 0 hits without env):"
curl -sL "https://omnipathmarketing.com/" | grep -c "googletagmanager" || true
echo "Plausible in HTML (should be 0 hits):"
curl -sL "https://omnipathmarketing.com/" | grep -c "plausible" || true
