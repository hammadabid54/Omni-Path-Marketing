# Omni Path Marketing — VPS deploy guide

One-time setup of a fresh Ubuntu VPS to run the Omni Path marketing site in production, served over HTTPS via nginx + Let's Encrypt, kept alive by PM2.

## Prerequisites (what you need before you start)

1. **A VPS** running Ubuntu 22.04 or 24.04. Any provider works — Hostinger, Hetzner, DigitalOcean, Vultr, etc. Minimum 1 GB RAM, 25 GB disk.
2. **SSH access** as root (or a sudo user).
3. **A GitHub repo** containing this code, pushed to the default branch (`main`).
4. **DNS**: an A record for `omnipathmarketing.com` pointing to the VPS public IP. (And optionally `www.omnipathmarketing.com` if you want the www redirect to work — otherwise the www block in nginx will 301 to apex anyway.)
5. **An `.env.local` file** on the server (the setup script will warn if it's missing).

## What the script does

`deploy/setup-vps.sh` (run once on a fresh VPS as root):

1. Installs system packages: `curl git nginx certbot ufw`.
2. Installs Node.js 20 LTS via NodeSource.
3. Installs PM2 globally.
4. Creates the app dir at `/var/www/omnipathmarketing.com` (owned by `www-data`).
5. Clones the repo (or pulls if it already exists).
6. Installs deps + runs `npm run build`.
7. Starts the app with PM2 and enables it on boot.
8. Copies the nginx vhost from `deploy/nginx-omnipath.conf` and reloads nginx.
9. Opens firewall for SSH + HTTP+HTTPS.
10. Prints the certbot command for you to run **after** DNS propagates.

## Step-by-step

### 1. Push to GitHub first

```bash
# (from your local machine, in the project root)
git remote add origin git@github.com:YOUR_USERNAME/omni-path-marketing.git
git push -u origin main
```

### 2. Edit `deploy/setup-vps.sh` on the VPS

Before running, change this line near the top:

```bash
REPO_URL="https://github.com/<YOUR_GH_USER>/omni-path-marketing.git"
```

Replace with your real GitHub repo URL (SSH or HTTPS — HTTPS with a PAT works fine if the server only has read access).

### 3. SSH to your VPS and run the script

```bash
ssh root@YOUR_VPS_IP
# upload the script + nginx + ecosystem files (or just git clone first, then run the script)
apt update && apt install -y git
git clone https://github.com/YOUR_USERNAME/omni-path-marketing.git /tmp/omni
cd /tmp/omni/deploy
chmod +x setup-vps.sh
sudo ./setup-vps.sh
```

### 4. Create `.env.local` on the server

After the script finishes, the app is running but emails will fail until you put keys in place. Create `/var/www/omnipathmarketing.com/.env.local`:

```bash
sudo nano /var/www/omnipathmarketing.com/.env.local
```

Minimum required for production:

```bash
NEXT_PUBLIC_SITE_URL=https://omnipathmarketing.com
RESEND_API_KEY=re_xxx
RESEND_FROM_EMAIL=contact@omnipathmarketing.com
RESEND_NOTIFY_EMAIL=hammadabid54@gmail.com
```

Then restart the app to pick up the new env:

```bash
sudo -u www-data pm2 restart omni-path-marketing
```

### 5. Get HTTPS

After the DNS A record has propagated (usually 5-30 min):

```bash
certbot --nginx -d omnipathmarketing.com --non-interactive --agree-tos -m hammadabid54@gmail.com
```

Certbot will:
- Issue a Let's Encrypt cert
- Modify the nginx config to serve HTTPS
- Set up auto-renewal (runs twice daily via systemd timer)

### 6. Verify

```bash
pm2 status                 # app should be "online"
pm2 logs omni-path-marketing --lines 50
curl -I https://omnipathmarketing.com
```

## Updating the site later

After the initial setup, deploying a new version is two commands (run from your local machine, with your SSH key added to the VPS):

```bash
ssh root@YOUR_VPS_IP "cd /var/www/omnipathmarketing.com && git pull && npm install && npm run build && pm2 restart omni-path-marketing"
```

## Troubleshooting

- **PM2 says "errored"** → `pm2 logs omni-path-marketing` to see why. Usually a missing env var or port conflict.
- **502 Bad Gateway** → Next.js is not running. Check `pm2 status` and `pm2 logs`.
- **Emails not delivering** → verify your domain in Resend's dashboard (https://resend.com/domains). The dev log will say `[email] notifyLead failed: The omnipathmarketing.com domain is not verified`.
- **Nginx config test fails** → `nginx -t` shows the error; usually a typo in the conf.
- **Audit tool fails** → Puppeteer needs a Chromium binary. The build uses `@sparticuz/chromium` which downloads on first use. If it can't, install system Chrome: `apt install -y chromium-browser` and set `PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser` in `.env.local`.
