#!/usr/bin/env bash
# Smoke test: verify all 22 case study pages and the list page.
# No `set -e` because `grep -c` returns 1 on zero hits.

echo "=== /case-studies (list) ==="
code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/case-studies")
size=$(curl -sL "https://omnipathmarketing.com/case-studies" | wc -c)
echo "  HTTP $code, ${size} bytes"

echo ""
echo "=== /case-studies has 22 case study cards ==="
cards=$(curl -sL "https://omnipathmarketing.com/case-studies" | grep -c "Read full case study" || true)
echo "  'Read full case study' buttons: $cards"

echo ""
echo "=== Each /case-studies/[slug] page status + size ==="
for slug in albany-creek-dental bella-dental crestmead-dental dental-corner dental-specialists ferny-hills-dental finetooth glenroy-smiles-dental grand-prom-dental hand-therapy-clinics-sydney macquarie-dental marham-pk miami-village-dental my-dentist palm-beach-dental pymble-dental route2health southlakes-dental tamworth-dental-care taree-dental-care top-class-dental torquay-dental; do
    code=$(curl -sL -o /dev/null -w "%{http_code}" "https://omnipathmarketing.com/case-studies/$slug")
    size=$(curl -sL "https://omnipathmarketing.com/case-studies/$slug" | wc -c)
    printf "  /case-studies/%-32s HTTP %s  %sb\n" "$slug" "$code" "$size"
done

echo ""
echo "=== Chart + tables + checklist present on key pages ==="
for slug in bella-dental marham-pk hand-therapy-clinics-sydney; do
    chart=$(curl -sL "https://omnipathmarketing.com/case-studies/$slug" | grep -c "Monthly organic clicks" || true)
    checklist=$(curl -sL "https://omnipathmarketing.com/case-studies/$slug" | grep -c "Technical SEO audit" || true)
    quote=$(curl -sL "https://omnipathmarketing.com/case-studies/$slug" | grep -c "Business impact" || true)
    echo "  /case-studies/$slug : chart=$chart checklist=$checklist impact=$quote"
done
