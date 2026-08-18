#!/usr/bin/env bash
# Smoke test the contact form on a deployed Omni Path instance.
# Usage: bash smoke-test.sh [email]
#   email defaults to hammadabid54@gmail.com
set -e
EMAIL="${1:-hammadabid54@gmail.com}"

cat > /tmp/req.json <<JSON
{"type":"business","name":"VPS Smoke Test","email":"$EMAIL","note":"Smoke test from VPS at $(date -u +%FT%TZ). Should deliver 2 emails: internal notify + auto-reply."}
JSON

echo "--- file contents ---"
cat /tmp/req.json
echo ""
echo ""
echo "--- POST /api/contact ---"
curl -s -X POST "http://127.0.0.1:3000/api/contact" \
    -H "Content-Type: application/json" \
    --data-binary @/tmp/req.json
echo ""
echo ""
echo "--- waiting 4s for async email side-effects ---"
sleep 4
echo "--- pm2 email log lines ---"
pm2 logs omni-path-marketing --lines 50 --nostream --raw 2>&1 | grep -iE 'email|notify|delivery' | tail -6
rm -f /tmp/req.json
