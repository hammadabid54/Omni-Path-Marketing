#!/usr/bin/env bash
echo "=== Check www vs non-www ==="
echo "non-www: $(curl -sIL -o /dev/null -w 'HTTP %{http_code} | final %{url_effective}' https://omnipathmarketing.com/sitemap.xml)"
echo "www:     $(curl -sIL -o /dev/null -w 'HTTP %{http_code} | final %{url_effective}' https://www.omnipathmarketing.com/sitemap.xml)"
echo "http:    $(curl -sIL -o /dev/null -w 'HTTP %{http_code} | final %{url_effective}' http://omnipathmarketing.com/sitemap.xml)"
echo ""
echo "=== Check host with path ==="
echo "https://omnipathmarketing.com/sitemap.xml → $(curl -sIL -o /dev/null -w 'HTTP %{http_code} → %{url_effective}' https://omnipathmarketing.com/sitemap.xml)"
echo ""
echo "=== DNS ==="
dig +short omnipathmarketing.com 2>&1 | head -5
echo ""
echo "=== Last 30 minutes of real Googlebot traffic on the site ==="
grep -E 'Googlebot|Google-InspectionTool' /var/log/nginx/omnipath.access.log | tail -20
