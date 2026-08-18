#!/usr/bin/env bash
# =============================================================
# Omni Path Marketing — VPS setup script
# Run once on a fresh Ubuntu 22.04 / 24.04 VPS as root.
# =============================================================
set -euo pipefail

APP_DIR="/var/www/omnipathmarketing.com"
APP_USER="www-data"
LOG_DIR="/var/log/omnipath"
REPO_URL="https://github.com/<YOUR_GH_USER>/omni-path-marketing.git"   # <-- CHANGE THIS
DOMAIN="omnipathmarketing.com"
EMAIL="hammadabid54@gmail.com"   # for Let's Encrypt registration

# --- 1. System packages ---
apt-get update
apt-get install -y --no-install-recommends \
    curl ca-certificates git ufw nginx certbot python3-certbot-nginx

# --- 2. Node.js 20 LTS (via NodeSource) ---
if ! command -v node >/dev/null 2>&1; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
fi
node --version
npm --version

# --- 3. PM2 globally ---
if ! command -v pm2 >/dev/null 2>&1; then
    npm install -g pm2
fi

# --- 4. App directory + log dir ---
mkdir -p "$APP_DIR" "$LOG_DIR" /var/www/letsencrypt
chown -R "$APP_USER:$APP_USER" "$APP_DIR" "$LOG_DIR"

# --- 5. Clone the repo (idempotent: pull if exists, clone if not) ---
if [ -d "$APP_DIR/.git" ]; then
    sudo -u "$APP_USER" git -C "$APP_DIR" pull --ff-only
else
    sudo -u "$APP_USER" git clone "$REPO_URL" "$APP_DIR"
fi

# --- 6. Install deps + build ---
cd "$APP_DIR"
sudo -u "$APP_USER" npm ci --omit=dev || sudo -u "$APP_USER" npm install
# Build needs devDependencies (typescript, etc.) — install full
sudo -u "$APP_USER" npm install
sudo -u "$APP_USER" npm run build

# --- 7. .env.local on the server (you must create this manually) ---
if [ ! -f "$APP_DIR/.env.local" ]; then
    echo "WARN: $APP_DIR/.env.local missing. Create it with your Resend + Plausible keys before starting PM2."
    echo "  See deploy/DEPLOY.md for the required variables."
fi

# --- 8. PM2 ---
sudo -u "$APP_USER" pm2 start "$APP_DIR/deploy/ecosystem.config.cjs"
sudo -u "$APP_USER" pm2 save
pm2 startup systemd -u "$APP_USER" --hp "/var/www/$APP_USER" || true   # follow printed hint

# --- 9. Nginx site ---
cp "$APP_DIR/deploy/nginx-omnipath.conf" /etc/nginx/sites-available/omnipathmarketing.com
ln -sf /etc/nginx/sites-available/omnipathmarketing.com /etc/nginx/sites-enabled/omnipathmarketing.com
# Disable default site
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl reload nginx

# --- 10. Firewall ---
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

# --- 11. HTTPS via Let's Encrypt (only after DNS A record points to this VPS) ---
echo ""
echo "Once the A record for $DOMAIN points to this server's IP, run:"
echo "  certbot --nginx -d $DOMAIN --non-interactive --agree-tos -m $EMAIL"
echo ""

echo "===== Setup complete ====="
echo "App dir:  $APP_DIR"
echo "Logs:     $LOG_DIR"
echo "PM2:      pm2 status"
echo "Site:     http://$DOMAIN  (HTTPS after certbot)"
