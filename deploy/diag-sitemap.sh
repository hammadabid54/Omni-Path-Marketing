#!/usr/bin/env bash
echo "=== 1. Curl sitemap with verbose headers (what Google sees) ==="
curl -sIL -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://omnipathmarketing.com/sitemap.xml 2>&1
echo ""
echo "=== 2. Sitemap content (first 2000 bytes) ==="
curl -sL -A "Googlebot" https://omnipathmarketing.com/sitemap.xml | head -c 2000
echo ""
echo ""
echo "=== 3. Sitemap stats ==="
SM=$(curl -sL https://omnipathmarketing.com/sitemap.xml)
echo "  Total bytes:    $(echo "$SM" | wc -c)"
echo "  <url> count:    $(echo "$SM" | grep -c '<url>')"
echo "  <loc> count:    $(echo "$SM" | grep -c '<loc>')"
echo "  XML declaration: $(echo "$SM" | grep -c '<?xml')"
echo "  <urlset> open:   $(echo "$SM" | grep -c '<urlset')"
echo "  </urlset> close: $(echo "$SM" | grep -c '</urlset>')"
echo "  Last <lastmod>:  $(echo "$SM" | grep -oE '<lastmod>[^<]+' | tail -1)"
echo ""
echo "=== 4. As Googlebot with compression ==="
curl -sL -A "Googlebot" -H "Accept-Encoding: gzip" -o /tmp/sm.gz -w 'HTTP %{http_code}, size %{size_download}, content-type %{content_type}\n' https://omnipathmarketing.com/sitemap.xml
file /tmp/sm.gz 2>&1 || echo "(file command not available)"
