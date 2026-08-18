#!/usr/bin/env bash
# Check the rendered HTML for mixed-content hazards (any http:// URLs in src/href).
HTML=$(curl -s https://omnipathmarketing.com/)

echo "=== Mixed-content scan (http:// refs that would block HTTPS load) ==="
echo "$HTML" | grep -oE '(http://[a-zA-Z0-9./_-]+|src="//[a-zA-Z0-9./_-]+|href="//[a-zA-Z0-9./_-]+)' | sort -u | head -30 || echo "none found"

echo ""
echo "=== Total HTML size ==="
echo "$HTML" | wc -c

echo ""
echo "=== First 300 chars of body ==="
echo "$HTML" | head -c 300

echo ""
echo ""
echo "=== Title and meta ==="
echo "$HTML" | grep -oE '<title>[^<]+</title>' | head -1
echo "$HTML" | grep -oE '<meta name="description"[^>]+>' | head -1
