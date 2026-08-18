#!/usr/bin/env bash
# Install the Omni Path nginx site on the VPS.
# Idempotent — re-runs are safe.
set -e

CONF_SRC="/tmp/nginx-omnipath.conf"
CONF_DST="/etc/nginx/sites-available/omnipathmarketing.com.conf"
SYMLINK="/etc/nginx/sites-enabled/omnipathmarketing.com.conf"

if [ ! -f "$CONF_SRC" ]; then
    echo "ERR: $CONF_SRC not found (upload nginx-omnipath.conf to /tmp first)" >&2
    exit 1
fi

cp "$CONF_SRC" "$CONF_DST"
chmod 644 "$CONF_DST"
echo "copied to $CONF_DST"

# Ensure sites-enabled symlink exists.
if [ ! -L "$SYMLINK" ]; then
    ln -s "$CONF_DST" "$SYMLINK"
    echo "symlinked $SYMLINK"
else
    echo "symlink $SYMLINK already exists"
fi

# Test config.
echo "--- nginx -t ---"
nginx -t

# Reload (don't restart — won't drop existing connections to brandmeup).
echo "--- systemctl reload nginx ---"
systemctl reload nginx
echo "nginx reloaded"

# Show status.
echo "--- pm2 status ---"
pm2 status
echo ""
echo "--- sites-enabled ---"
ls -la /etc/nginx/sites-enabled/

# Local HTTP smoke test.
echo ""
echo "--- curl localhost:3000 (HEAD) ---"
curl -sI http://127.0.0.1:3000/ | head -3
