#!/usr/bin/env bash
# Redeploy Omni Path on the VPS: pull → install → build → restart pm2.
# Idempotent. Safe to re-run.
set -e

APP_DIR="/var/www/omnipathmarketing.com"
REPO="https://github.com/hammadabid54/Omni-Path-Marketing.git"

cd "$APP_DIR"

echo "--- git fetch ---"
git fetch origin main 2>&1 | tail -3
echo ""
echo "--- git status (before pull) ---"
git status -sb
echo ""

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    echo "Already on latest commit ($LOCAL). Skipping pull."
else
    echo "Local:  $LOCAL"
    echo "Remote: $REMOTE"
    echo "--- git pull (ff-only) ---"
    git pull --ff-only 2>&1 | tail -5
fi

echo ""
echo "--- npm install (production deps + dev deps for build) ---"
npm install --no-audit --no-fund 2>&1 | tail -3

echo ""
echo "--- npm run build ---"
npm run build 2>&1 | tail -10

echo ""
echo "--- pm2 restart ---"
pm2 restart omni-path-marketing 2>&1 | tail -5

echo ""
echo "--- post-deploy verify ---"
sleep 3
echo "Local Next.js:"
curl -sI http://127.0.0.1:3000/ | head -2
echo "Public via HTTPS (omnipathmarketing.com):"
curl -sI https://omnipathmarketing.com/ | head -2
echo ""
echo "pm2 status:"
pm2 status | head -10
