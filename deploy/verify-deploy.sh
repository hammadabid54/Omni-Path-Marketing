#!/usr/bin/env bash
# Verify the deploy: public HTTP, brandmeup untouched, PM2, logs.
set -e

echo "=== 1. Local Next.js (port 3000) ==="
curl -sI http://127.0.0.1:3000/ | head -3

echo ""
echo "=== 2. Public HTTP via IP (Host: omnipathmarketing.com) ==="
curl -sI -H "Host: omnipathmarketing.com" http://13.140.132.52/ | head -8

echo ""
echo "=== 3. Public HTTP via IP (Host: brandmeup.org) — should still serve Brand Me Up ==="
curl -sI -H "Host: brandmeup.org" http://13.140.132.52/ | head -3

echo ""
echo "=== 4. PM2 status ==="
pm2 status

echo ""
echo "=== 5. nginx sites ==="
ls -la /etc/nginx/sites-enabled/

echo ""
echo "=== 6. Contact form HTML check ==="
curl -s http://127.0.0.1:3000/ | grep -oE 'id="footer-(name|email|message)"' | sort -u

echo ""
echo "=== 7. Resend test (last 3 email log lines) ==="
pm2 logs omni-path-marketing --lines 100 --nostream --raw 2>&1 | grep -iE '\[email\]' | tail -3
