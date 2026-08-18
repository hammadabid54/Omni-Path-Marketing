#!/usr/bin/env bash
set -e
APP="/var/www/omnipathmarketing.com"
ENV="$APP/.env.local"

# Append Plausible env if not present
if ! grep -q "NEXT_PUBLIC_PLAUSIBLE_DOMAIN" "$ENV"; then
    echo "" >> "$ENV"
    echo "# Plausible analytics" >> "$ENV"
    echo "NEXT_PUBLIC_PLAUSIBLE_DOMAIN=omnipathmarketing.com" >> "$ENV"
    echo "Appended Plausible env to $ENV"
else
    echo "NEXT_PUBLIC_PLAUSIBLE_DOMAIN already in $ENV"
fi

echo ""
echo "=== Final env ==="
cat "$ENV"

echo ""
echo "=== Restart PM2 ==="
cd "$APP"
pm2 restart omni-path-marketing 2>&1 | tail -3
sleep 3

echo ""
echo "=== Verify Plausible script tag in HTML ==="
curl -sL "https://omnipathmarketing.com/" | grep -oE 'plausible[^"]*' | head -3 || true
echo ""
echo "=== Curl plausible.io (no domain check) ==="
curl -sI "https://plausible.io/js/script.js" | head -2
