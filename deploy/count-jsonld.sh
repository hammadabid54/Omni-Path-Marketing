#!/usr/bin/env bash
# Search for Person JSON-LD on each bio page (handles Next.js streaming RSC payload).
for slug in hammad rana-moneeb adnan-ameer haider-mateen saad-yawar; do
    echo "=== /about/$slug ==="
    # Search for the Person JSON-LD in the streaming payload (escaped form)
    hits=$(curl -sL "https://omnipathmarketing.com/about/$slug" | grep -oE 'Person\\?":\\?"[A-Z][a-z]+ [A-Z][a-z]+' | head -3)
    if [ -z "$hits" ]; then
        # Try the unescaped form too
        hits=$(curl -sL "https://omnipathmarketing.com/about/$slug" | grep -oE '"@type":"Person"[^}]{0,400}' | head -1)
    fi
    if [ -z "$hits" ]; then
        # Try within the __next_s streaming payload
        hits=$(curl -sL "https://omnipathmarketing.com/about/$slug" | grep -oE 'ld-person-[a-z-]+' | head -1)
    fi
    echo "  $hits"
    echo ""
done
