#!/usr/bin/env bash
# Focused SEO wave verification.
echo "=== 1. Sitemap URL count ==="
SM=$(curl -sL https://omnipathmarketing.com/sitemap.xml)
echo "  Total <url>:     $(echo "$SM" | grep -c '<url>')"
echo "  Case studies:    $(echo "$SM" | grep -c 'case-studies/')"
echo "  Blog posts:      $(echo "$SM" | grep -c '/blog/')"
echo "  Bios (about/):   $(echo "$SM" | grep -c '/about/')"
echo "  Service pages:   $(echo "$SM" | grep -c '/services/')"

echo ""
echo "=== 2. Robots.txt — 11 AI bots ==="
R=$(curl -sL https://omnipathmarketing.com/robots.txt)
for bot in GPTBot ChatGPT-User OAI-SearchBot ClaudeBot Claude-User anthropic-ai PerplexityBot Perplexity-User Google-Extended Applebot-Extended CCBot; do
    H=$(echo "$R" | grep -c "User-Agent: $bot")
    [ "$H" -gt 0 ] && echo "  $bot: OK" || echo "  $bot: MISSING"
done

echo ""
echo "=== 3. Schema checks ==="
echo "  [1] curl home"
curl -sL https://omnipathmarketing.com/ -o /tmp/home.html
echo "  [2] curl case study"
curl -sL https://omnipathmarketing.com/case-studies/bella-dental/ -o /tmp/case.html
echo "  [3] curl bio"
curl -sL https://omnipathmarketing.com/about/hammad-abid/ -o /tmp/bio.html
echo "  [4] curl blog"
curl -sL https://omnipathmarketing.com/blog/state-of-seo-2026/ -o /tmp/blog.html
echo "  [5] curl service seo"
curl -sL https://omnipathmarketing.com/services/seo/ -o /tmp/seo.html
echo "  [6] curl service branding"
curl -sL https://omnipathmarketing.com/services/branding/ -o /tmp/brand.html
echo "  [7] curl service paid-ads"
curl -sL https://omnipathmarketing.com/services/paid-ads/ -o /tmp/pa.html
echo "  [8] curl service web-design"
curl -sL https://omnipathmarketing.com/services/web-design/ -o /tmp/wd.html
echo "  [9] curl samples"
curl -sL https://omnipathmarketing.com/samples/ -o /tmp/samples.html
echo "  [10] curl blog index"
curl -sL https://omnipathmarketing.com/blog/ -o /tmp/blogidx.html
echo "  [11] curl case studies index"
curl -sL https://omnipathmarketing.com/case-studies/ -o /tmp/csidx.html
echo "  [12] curl about index"
curl -sL https://omnipathmarketing.com/about/ -o /tmp/about.html
echo "  [13] curl contact"
curl -sL https://omnipathmarketing.com/contact/ -o /tmp/contact.html

echo ""
echo "  Organization knowsAbout (home):     $(grep -c 'knowsAbout' /tmp/home.html)"
echo "  Organization sameAs (home):         $(grep -c 'sameAs' /tmp/home.html)"
echo "  CreativeWork (case study):          $(grep -c 'CreativeWork' /tmp/case.html)"
echo "  Person knowsAbout (bio):            $(grep -c 'knowsAbout' /tmp/bio.html)"
echo "  Article keywords (blog):            $(grep -c '\"keywords\"' /tmp/blog.html)"
echo "  Article mainEntityOfPage (blog):    $(grep -c 'mainEntityOfPage' /tmp/blog.html)"
echo "  Article author url (blog → bio):    $(grep -c '/about/hammad-abid' /tmp/blog.html)"
echo "  Service schema (seo):               $(grep -c '\"@type\":\"Service\"' /tmp/seo.html)"
echo "  Service schema (branding):          $(grep -c '\"@type\":\"Service\"' /tmp/brand.html)"
echo "  ServiceDefinition (seo 'AI SEO is'): $(grep -c 'AI SEO is' /tmp/seo.html)"
echo "  ServiceDefinition (paid-ads 'AI'):  $(grep -c 'AI paid media' /tmp/pa.html)"
echo "  ServiceDefinition (web-design):     $(grep -c 'AI web design' /tmp/wd.html)"
echo "  FAQPage (samples):                  $(grep -c 'FAQPage' /tmp/samples.html)"
echo "  BreadcrumbList (blog idx):          $(grep -c 'BreadcrumbList' /tmp/blogidx.html)"
echo "  BreadcrumbList (case studies idx):  $(grep -c 'BreadcrumbList' /tmp/csidx.html)"
echo "  BreadcrumbList (about):             $(grep -c 'BreadcrumbList' /tmp/about.html)"
echo "  BreadcrumbList (samples):           $(grep -c 'BreadcrumbList' /tmp/samples.html)"
echo "  BreadcrumbList (contact):           $(grep -c 'BreadcrumbList' /tmp/contact.html)"

echo ""
echo "=== 4. AI keywords on home (7 expected) ==="
grep -oE 'AI marketing agency|AI SEO|AI ads|marketing automation agency|automated SEO|white-label marketing agency|agency reseller program|white-label SEO services' /tmp/home.html | sort -u

echo ""
echo "=== 5. PM2 status ==="
pm2 list | grep omni-path-marketing

echo ""
echo "=== 6. HTTP status for key pages ==="
for p in / /services/seo/ /about/hammad-abid/ /case-studies/bella-dental/ /blog/state-of-seo-2026/ /samples/ /sitemap.xml /robots.txt; do
    CODE=$(curl -sL -o /dev/null -w '%{http_code}' "https://omnipathmarketing.com$p")
    echo "  $p : $CODE"
done

echo ""
echo "=== 7. Build artefact sanity ==="
ls -la /var/www/omnipathmarketing.com/.next/server/app/sitemap.xml.body 2>/dev/null | head -1
ls -la /var/www/omnipathmarketing.com/.next/server/app/robots.txt.body 2>/dev/null | head -1

echo ""
echo "=== DONE ==="
