#!/usr/bin/env bash
# Verify the rewritten SEO page is live with new content + pricing.
set -e

URL="https://omnipathmarketing.com/services/seo"

echo "=== Title ==="
curl -sL "$URL/" | grep -oE '<title>[^<]+</title>' | head -1

echo ""
echo "=== Size (should be ~140KB, was 5KB before rewrite) ==="
SIZE=$(curl -sL "$URL/" | wc -c)
echo "  $SIZE bytes"

echo ""
echo "=== Headline keywords (should be > 0 each) ==="
for needle in "SEO that ranks" "Without the agency overhead" "White-label pricing" "Direct pricing" "Upgrade to" "technical SEO" "white-label SEO"; do
    HITS=$(curl -sL "$URL/" | grep -c "$needle" 2>/dev/null || echo 0)
    HITS=${HITS:-0}
    echo "  '$needle' : $HITS"
done

echo ""
echo "=== Tier prices (should each appear at least once) ==="
for price in "250" "200" "150" "400" "800" "2,000"; do
    HITS=$(curl -sL "$URL/" | grep -c "\$$price" 2>/dev/null || echo 0)
    HITS=${HITS:-0}
    echo "  '\$$price' : $HITS"
done

echo ""
echo "=== Word count of visible body prose (should be 1000-1500) ==="
WORDS=$(curl -sL "$URL/" | sed 's/<[^>]*>/ /g' | tr -s ' \n' '\n' | grep -cE '\w+' 2>/dev/null)
WORDS=${WORDS:-0}
echo "  $WORDS words (rough estimate from stripped HTML)"

echo ""
echo "=== HTTP status (should be 200 after redirect) ==="
curl -sIL "$URL/" | grep -E '^HTTP' | tail -1
