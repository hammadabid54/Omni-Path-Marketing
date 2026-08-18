#!/usr/bin/env bash
# Verify: hammad redirect, hammad-abid 200, ambient-bg in HTML.
echo "=== /about/hammad -> should 301 -> /about/hammad-abid ==="
curl -sI "https://omnipathmarketing.com/about/hammad" | head -5
echo ""

echo "=== /about/hammad-abid -> 200 ==="
code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about/hammad-abid")
size=$(curl -sL "https://omnipathmarketing.com/about/hammad-abid" | wc -c)
echo "  /about/hammad-abid : HTTP $code, ${size} bytes"
echo ""

echo "=== Other 4 bio pages still 200 ==="
for slug in rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/about/$slug")
    size=$(curl -sL "https://omnipathmarketing.com/about/$slug" | wc -c)
    echo "  /about/$slug : HTTP $code, ${size} bytes"
done
echo ""

echo "=== AmbientBackground present on multiple pages ==="
for path in / /about/ /about/hammad-abid/ /services/seo/ /pricing/ /contact/; do
    hits=$(curl -sL "https://omnipathmarketing.com${path}" | grep -c "ambient-bg")
    orbs=$(curl -sL "https://omnipathmarketing.com${path}" | grep -c "ambient-orb-")
    grain=$(curl -sL "https://omnipathmarketing.com${path}" | grep -c "ambient-grain")
    grid=$(curl -sL "https://omnipathmarketing.com${path}" | grep -c "ambient-grid")
    echo "  $path : bg=$hits orbs=$orbs grain=$grain grid=$grid"
done
echo ""

echo "=== CSS file contains the ambient animations ==="
css_path=$(curl -sL "https://omnipathmarketing.com/" | grep -oE '/_next/static/css/[^"]+\.css' | head -1)
echo "  CSS file: $css_path"
if [ -n "$css_path" ]; then
    curl -sL "https://omnipathmarketing.com$css_path" > /tmp/site.css
    echo "  ambient-bg class:    $(grep -c 'ambient-bg' /tmp/site.css)"
    echo "  ambient-orb-1 class: $(grep -c 'ambient-orb-1' /tmp/site.css)"
    echo "  @keyframes ambient-orb-1: $(grep -c '@keyframes ambient-orb-1' /tmp/site.css)"
    echo "  prefers-reduced-motion guard: $(grep -c 'prefers-reduced-motion' /tmp/site.css)"
fi
echo ""

echo "=== Sample home page HTML — first 500 chars of <body> ==="
curl -sL "https://omnipathmarketing.com/" | grep -oE '<body>.{0,800}' | head -c 800
echo ""
