#!/usr/bin/env bash
echo "=== Find nginx log location ==="
ls -la /var/log/nginx/ 2>&1 | head -10
echo ""
echo "=== Look for any sitemap.xml requests in last 500 lines of any log ==="
for f in /var/log/nginx/access.log /var/log/nginx/omnipath.access.log /var/log/nginx/access.log.1; do
    if [ -f "$f" ]; then
        echo "  $f:"
        grep -i 'sitemap' "$f" | tail -10
    fi
done
echo ""
echo "=== Look for Googlebot User-Agent anywhere ==="
for f in /var/log/nginx/access.log /var/log/nginx/omnipath.access.log /var/log/nginx/access.log.1; do
    if [ -f "$f" ]; then
        echo "  $f:"
        grep -iE 'googlebot|google-inspectiontool' "$f" | tail -10
    fi
done
echo ""
echo "=== Total sitemap fetches in last 24h ==="
for f in /var/log/nginx/access.log /var/log/nginx/omnipath.access.log; do
    if [ -f "$f" ]; then
        echo "  $f: $(grep -c sitemap "$f" 2>/dev/null) requests"
    fi
done
echo ""
echo "=== Where is the access log defined? ==="
grep -E 'access_log|error_log' /etc/nginx/sites-enabled/* /etc/nginx/nginx.conf /etc/nginx/conf.d/*.conf 2>&1 | head -10
