#!/usr/bin/env bash
# Debug: inspect /about and one bio page's raw HTML.
echo "=== /about : count of 'Read full bio' occurrences ==="
curl -sL "https://omnipathmarketing.com/about" | grep -o "Read full bio" | wc -l

echo ""
echo "=== /about : first 3 'Read full bio' link contexts ==="
curl -sL "https://omnipathmarketing.com/about" | grep -oE "href=\"/about/[a-z-]+\"[^>]*>Read full bio" | head -10

echo ""
echo "=== /about : all unique /about/ href targets ==="
curl -sL "https://omnipathmarketing.com/about" | grep -oE "href=\"/about/[a-z-]+\"" | sort -u

echo ""
echo "=== /about/hammad : all <script> tags ==="
curl -sL "https://omnipathmarketing.com/about/hammad" | grep -oE "<script[^>]*>" | head -20

echo ""
echo "=== /about/hammad : JSON-LD payload (first 800 chars) ==="
curl -sL "https://omnipathmarketing.com/about/hammad" | grep -oE "\{\"@context\"[^<]{1,800}" | head -1

echo ""
echo "=== /about/hammad : full ld-person* content ==="
curl -sL "https://omnipathmarketing.com/about/hammad" | grep -oE "ld-person-hammad[^<]{1,1500}" | head -1

echo ""
echo "=== /about : Person schema search (variations) ==="
curl -sL "https://omnipathmarketing.com/about/hammad" | grep -oE '@type[' ']*:[' ']*"Person"' | head -3
