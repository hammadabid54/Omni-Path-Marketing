#!/usr/bin/env bash
# Reset analytics env: remove the Plausible line that was just added,
# leave GA unset (user will add their GA4 ID later).
set -e
APP="/var/www/omnipathmarketing.com"
ENV="$APP/.env.local"

if grep -q "NEXT_PUBLIC_PLAUSIBLE_DOMAIN" "$ENV"; then
    # Remove the 3 lines: blank, comment, env line
    sed -i '/^# Plausible analytics$/d' "$ENV"
    sed -i '/^NEXT_PUBLIC_PLAUSIBLE_DOMAIN=/d' "$ENV"
    # Remove the blank line that was right before the Plausible block
    # (find the pattern and remove preceding blank line)
    sed -i '/^$/N;/^\n$/D' "$ENV"
    echo "Removed Plausible env from $ENV"
else
    echo "Plausible env not present in $ENV (already clean)"
fi

echo ""
echo "=== Current env ==="
cat "$ENV"
