#!/usr/bin/env bash
# Smoke test: verify new content is live on the production site.
set -e

URL="https://omnipathmarketing.com"

echo "=== HOME: Full Growth Stack hero package present? ==="
HITS=$(curl -sL "$URL/" | grep -c 'Full Growth Stack')
echo "  matches: $HITS"

echo ""
echo "=== HOME: Transparent pricing table present? ==="
HITS=$(curl -sL "$URL/" | grep -c 'Transparent pricing')
echo "  matches: $HITS"

echo ""
echo "=== Service pages: title from each ==="
for p in paid-ads branding web-design social-media tiktok-linkedin-ads email-lifecycle analytics; do
    TITLE=$(curl -sL "$URL/services/$p/" | grep -oE '<title>[^<]+</title>' | head -1)
    echo "  /services/$p/ : $TITLE"
done

echo ""
echo "=== Service pages: byte sizes (should be 100KB+ now, were 5-6 KB) ==="
for p in paid-ads branding web-design social-media tiktok-linkedin-ads email-lifecycle analytics; do
    SIZE=$(curl -sL "$URL/services/$p/" | wc -c)
    echo "  /services/$p/ : ${SIZE} bytes"
done

echo ""
echo "=== Sample new copy on each page (proves new content live) ==="
declare -A CHECKS=(
    [paid-ads]="Without the agency overhead"
    [branding]="ship in days"
    [web-design]="Sites that"
    [social-media]="Social that"
    [tiktok-linkedin-ads]="Two platforms"
    [email-lifecycle]="prints money"
    [analytics]="actually read"
)
for p in "${!CHECKS[@]}"; do
    NEEDLE="${CHECKS[$p]}"
    HITS=$(curl -sL "$URL/services/$p/" | grep -c "$NEEDLE" 2>/dev/null)
    HITS=${HITS:-0}
    if [ "$HITS" -gt 0 ]; then
        echo "  /services/$p/ : '$NEEDLE' FOUND ($HITS)"
    else
        echo "  /services/$p/ : '$NEEDLE' NOT FOUND"
    fi
done
