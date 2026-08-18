#!/usr/bin/env bash
# Test the audit tool on the live server.
# Usage: bash run-audit.sh <url> <email> <name>
set -e
URL="${1:-https://example.com}"
EMAIL="${2:-hammadabid54@gmail.com}"
NAME="${3:-VPS Audit Test}"

cat > /tmp/audit-req.json <<JSON
{"url":"$URL","email":"$EMAIL","name":"$NAME"}
JSON

echo "--- request body ---"
cat /tmp/audit-req.json
echo ""
echo ""
echo "--- POST /api/audit (30-120s for Puppeteer) ---"
START=$(date +%s)
curl -s -X POST http://127.0.0.1:3000/api/audit \
    -H "Content-Type: application/json" \
    --data-binary @/tmp/audit-req.json
echo ""
END=$(date +%s)
echo ""
echo "elapsed: $((END - START))s"
echo ""
echo "--- waiting 6s for async email side-effects ---"
sleep 6
echo ""
echo "--- pm2 audit + email log lines ---"
pm2 logs omni-path-marketing --lines 80 --nostream --raw 2>&1 | grep -iE "audit|pdf|chromium|browser|email" | tail -10
rm -f /tmp/audit-req.json
