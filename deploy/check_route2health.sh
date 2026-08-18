#!/usr/bin/env bash
echo "=== All href patterns related to route2health ==="
grep -oE 'href="[^"]*route2health[^"]*"' /tmp/list.html | sort -u
echo ""
echo "=== Search for 'route2health' anywhere ==="
grep -oE '.{0,40}route2health.{0,40}' /tmp/list.html | head -5
echo ""
echo "=== Count of route2health in HTML ==="
grep -c route2health /tmp/list.html || true
echo ""
echo "=== Look at the case-studies.ts data for route2health ==="
grep -A 2 '"slug": "route2health"' /var/www/omnipathmarketing.com/content/case-studies.ts | head -5
