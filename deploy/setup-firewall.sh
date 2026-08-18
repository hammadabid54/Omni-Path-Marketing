#!/usr/bin/env bash
# Configure UFW firewall to allow SSH + HTTP + HTTPS.
# Idempotent.
set -e

if ! command -v ufw >/dev/null 2>&1; then
    apt-get install -y ufw
fi

# Default policies.
ufw default deny incoming >/dev/null
ufw default allow outgoing >/dev/null

# Allow SSH (so we don't lock ourselves out).
ufw allow OpenSSH >/dev/null 2>&1 || ufw allow 22/tcp >/dev/null
# Allow HTTP + HTTPS.
ufw allow 'Nginx Full' >/dev/null 2>&1 || { ufw allow 80/tcp >/dev/null; ufw allow 443/tcp >/dev/null; }

# Enable without prompting (--force skips the interactive confirm).
ufw --force enable >/dev/null

echo "--- ufw status ---"
ufw status verbose
