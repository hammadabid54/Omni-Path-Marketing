#!/usr/bin/env bash
echo "=== /etc/nginx/sites-enabled/ ==="
ls -la /etc/nginx/sites-enabled/
echo ""
echo "=== /etc/nginx/sites-available/ ==="
ls -la /etc/nginx/sites-available/
echo ""
for f in /etc/nginx/sites-enabled/*; do
    if [ -f "$f" ]; then
        echo ""
        echo "=== $f ==="
        cat "$f"
    fi
done
echo ""
echo "=== /etc/nginx/nginx.conf (top 40 lines) ==="
head -40 /etc/nginx/nginx.conf
