#!/usr/bin/env bash
# Test the audit tool end-to-end on the live server.
# Hits /api/audit with a real URL, expects a PDF generated + emailed via Resend.
set -e

URL="${1:-https://example.com}"
EMAIL="${2:-hammadabid54@gmail.com}"

cat > /tmp/audit-req.json <<JSON
{"url":"$URL","email":"$EMAIL"}
JSON

echo "--- file contents ---"
cat /tmp/audit-req.json
echo ""
echo ""
echo "--- POST /api/audit (this may take 30-90s due to Puppeteer) ---"
START=$(date +%s)
curl -s -X POST http://127.0.0.1:3000/api/audit \
    -H "Content-Type: application/json" \
    --data-binary @/tmp/audit-req.json
END=$(date +%s)
echo ""
echo "elapsed: $((END - START))s"
echo ""
echo "--- waiting 5s for async email ---"
sleep 5
echo "--- pm2 audit + email log lines ---"
pm2 logs omni-path-marketing --lines 100 --nostream --raw 2>&1 | grep -iE 'audit|email|pdf' | tail -8
rm -f /tmp/audit-req.json
