#!/usr/bin/env bash
# Redeploy + verify the new content is live with new pricing + Behind the scenes section.
set -e

APP="/var/www/omnipathmarketing.com"

echo "=== Git pull + build + restart ==="
cd "$APP"
git fetch origin main 2>&1 | tail -2
git pull --ff-only 2>&1 | tail -3
npm run build 2>&1 | tail -5
pm2 restart omni-path-marketing 2>&1 | tail -3
sleep 3

echo ""
echo "=== Page sizes (each should be 130-200 KB now) ==="
for p in seo paid-ads branding web-design social-media tiktok-linkedin-ads email-lifecycle analytics; do
    S=$(curl -sL "https://omnipathmarketing.com/services/$p/" 2>/dev/null | wc -c)
    echo "  /services/$p/ : ${S}b"
done

echo ""
echo "=== New DIRECT pricing present on each page (except SEO which we kept) ==="
declare -A PRICE_CHECKS=(
    [paid-ads]='$350'
    [paid-ads]='$700'
    [paid-ads]='$1,200'
    [branding]='$349'
    [branding]='$999'
    [branding]='$1,999'
    [web-design]='$499'
    [web-design]='$999'
    [web-design]='$1,999'
    [web-design]='$1,699'
    [social-media]='$349'
    [social-media]='$699'
    [social-media]='$999'
    [tiktok-linkedin-ads]='$349'
    [tiktok-linkedin-ads]='$599'
    [tiktok-linkedin-ads]='$999'
    [tiktok-linkedin-ads]='$1,699'
    [email-lifecycle]='$349'
    [email-lifecycle]='$699'
    [email-lifecycle]='$999'
    [analytics]='$349'
    [analytics]='$699'
    [analytics]='$999'
)

echo "  paid-ads: $350 $(curl -sL https://omnipathmarketing.com/services/paid-ads/ | grep -c '\$350' 2>/dev/null) / $700 $(curl -sL https://omnipathmarketing.com/services/paid-ads/ | grep -c '\$700' 2>/dev/null) / $1,200 $(curl -sL https://omnipathmarketing.com/services/paid-ads/ | grep -c '\$1,200' 2>/dev/null)"
echo "  branding:  $349 $(curl -sL https://omnipathmarketing.com/services/branding/ | grep -c '\$349' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/branding/ | grep -c '\$999' 2>/dev/null) / $1,999 $(curl -sL https://omnipathmarketing.com/services/branding/ | grep -c '\$1,999' 2>/dev/null)"
echo "  web-design: $499 $(curl -sL https://omnipathmarketing.com/services/web-design/ | grep -c '\$499' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/web-design/ | grep -c '\$999' 2>/dev/null) / $1,999 $(curl -sL https://omnipathmarketing.com/services/web-design/ | grep -c '\$1,999' 2>/dev/null) / $1,699 $(curl -sL https://omnipathmarketing.com/services/web-design/ | grep -c '\$1,699' 2>/dev/null)"
echo "  social:    $349 $(curl -sL https://omnipathmarketing.com/services/social-media/ | grep -c '\$349' 2>/dev/null) / $699 $(curl -sL https://omnipathmarketing.com/services/social-media/ | grep -c '\$699' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/social-media/ | grep -c '\$999' 2>/dev/null)"
echo "  tiktok+li: $349 $(curl -sL https://omnipathmarketing.com/services/tiktok-linkedin-ads/ | grep -c '\$349' 2>/dev/null) / $599 $(curl -sL https://omnipathmarketing.com/services/tiktok-linkedin-ads/ | grep -c '\$599' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/tiktok-linkedin-ads/ | grep -c '\$999' 2>/dev/null) / $1,699 $(curl -sL https://omnipathmarketing.com/services/tiktok-linkedin-ads/ | grep -c '\$1,699' 2>/dev/null)"
echo "  email:     $349 $(curl -sL https://omnipathmarketing.com/services/email-lifecycle/ | grep -c '\$349' 2>/dev/null) / $699 $(curl -sL https://omnipathmarketing.com/services/email-lifecycle/ | grep -c '\$699' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/email-lifecycle/ | grep -c '\$999' 2>/dev/null)"
echo "  analytics: $349 $(curl -sL https://omnipathmarketing.com/services/analytics/ | grep -c '\$349' 2>/dev/null) / $699 $(curl -sL https://omnipathmarketing.com/services/analytics/ | grep -c '\$699' 2>/dev/null) / $999 $(curl -sL https://omnipathmarketing.com/services/analytics/ | grep -c '\$999' 2>/dev/null)"
echo "  seo (kept): $400 $(curl -sL https://omnipathmarketing.com/services/seo/ | grep -c '\$400' 2>/dev/null) / $800 $(curl -sL https://omnipathmarketing.com/services/seo/ | grep -c '\$800' 2>/dev/null)"

echo ""
echo "=== 'Behind the scenes' section present on every service page ==="
for p in seo paid-ads branding web-design social-media tiktok-linkedin-ads email-lifecycle analytics; do
    HITS=$(curl -sL "https://omnipathmarketing.com/services/$p/" 2>/dev/null | grep -c 'Behind the scenes' 2>/dev/null)
    HITS=${HITS:-0}
    if [ "$HITS" -gt 0 ]; then
        echo "  /services/$p/ : 'Behind the scenes' FOUND ($HITS)"
    else
        echo "  /services/$p/ : 'Behind the scenes' NOT FOUND"
    fi
done

echo ""
echo "=== Home page: new direct prices in the pricing table ==="
echo "  paid-ads \$350: $(curl -sL https://omnipathmarketing.com/ | grep -c '\$350' 2>/dev/null)"
echo "  branding \$349:  $(curl -sL https://omnipathmarketing.com/ | grep -c '\$349' 2>/dev/null)"
echo "  social \$349:   $(curl -sL https://omnipathmarketing.com/ | grep -c '\$349' 2>/dev/null)"
echo "  email \$349:    $(curl -sL https://omnipathmarketing.com/ | grep -c '\$349' 2>/dev/null)"
echo "  analytics \$349: $(curl -sL https://omnipathmarketing.com/ | grep -c '\$349' 2>/dev/null)"

echo ""
echo "=== PM2 status ==="
pm2 status | head -10
