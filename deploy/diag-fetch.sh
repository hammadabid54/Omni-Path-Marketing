#!/usr/bin/env bash
echo "=== 1. robots.txt (what Googlebot reads) ==="
curl -sL -A "Googlebot" https://omnipathmarketing.com/robots.txt
echo ""
echo ""
echo "=== 2. nginx config — any rules on sitemap.xml or robots.txt? ==="
grep -rE 'sitemap|robots' /etc/nginx/sites-enabled/ 2>&1 | head -20
echo ""
echo "=== 3. Recent server logs (last 50 lines, Googlebot + sitemap) ==="
if [ -f /var/log/nginx/access.log ]; then
    tail -100 /var/log/nginx/access.log | grep -iE 'sitemap|googlebot|google-inspectiontool' | tail -20
else
    echo "  no nginx access log found"
fi
echo ""
echo "=== 4. Any 4xx/5xx for sitemap.xml in last 200 lines? ==="
tail -200 /var/log/nginx/access.log 2>&1 | grep 'sitemap' | head -20
echo ""
echo "=== 5. Test fetch with Googlebot from a clean IP range ==="
curl -sL -A "Googlebot/2.1 (+http://www.google.com/bot.html)" -o /dev/null -w 'HTTP %{http_code} | size %{size_download} | time %{time_total}s\n' https://omnipathmarketing.com/sitemap.xml
echo ""
echo "=== 6. Any rate limiting / WAF rules? ==="
grep -rE 'limit_req|limit_conn|deny|return 4' /etc/nginx/sites-enabled/ 2>&1 | head -10
echo ""
echo "=== 7. PM2 uptime / recent restart ==="
pm2 list | grep omni
echo ""
echo "=== 8. Sitemap header check from another angle ==="
curl -sIL -A "Googlebot" https://omnipathmarketing.com/sitemap.xml 2>&1 | grep -E 'HTTP|Content-Type|Content-Length|Location'
