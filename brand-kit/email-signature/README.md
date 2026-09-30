# Email Signature — Hammad Abid · Omni Path Marketing

Brand-aligned email signature for `hammad@omnipathmarketing.com`. Drop-in for Gmail, Outlook, and Apple Mail.

## Files

| File | What it is |
|---|---|
| `signature.html` | Table-based signature for **Outlook / Apple Mail** — paste into the signature editor |
| `signature-quick.html` | Same as `signature.html`, pre-filled with the LinkedIn CDN photo URL (expires 12 Oct 2026) |
| `signature-gmail.html` | Gmail-friendly version — no tables, inline `<span>` styling, vertical layout |
| `signature-gmail-quick.html` | Same as `signature-gmail.html`, pre-filled with the LinkedIn CDN photo URL |
| `signature-preview.html` | Visual preview of the table version (light surface, mobile 320px, in-email sample) |
| `gmail-preview.html` | Visual preview of the Gmail version (standalone + in-email sample) |
| `assets/photo.jpg` | 400×400 headshot (downloaded from LinkedIn, expires ~12 Oct 2026) |
| `assets/logo-720x192.png` | Horizontal Omni Path wordmark, transparent background |

> **Why two signature files?** Gmail's signature editor strips `<table>` layout, so the Outlook/Apple-Mail design won't paste cleanly. Use `signature-gmail.html` for Gmail and `signature.html` for everything else.

## Before you install

The signature references two images via URL. Replace the two placeholders in whichever signature file you use:

| Placeholder | Replace with |
|---|---|
| `PHOTO_URL` | Public URL of `assets/photo.jpg` (hosted on your server or CDN) |
| `LOGO_URL` | Public URL of `assets/logo-720x192.png` (hosted on your server or CDN) |

**Why not embed them?** LinkedIn's CDN URL (the one I downloaded from) expires on 12 Oct 2026. Self-host both files for a permanent signature. The PNG logo is also large enough that base64-embedding it would bloat every email by ~25 KB.

**Self-hosting on your VPS (one-time):**

```bash
# from this repo, after pushing
scp -i ~/.ssh/id_rsa brand-kit/email-signature/assets/photo.jpg \
            brand-kit/email-signature/assets/logo-720x192.png \
  root@13.140.132.52:/var/www/omnipathmarketing.com/email/
```

Then use:

- `PHOTO_URL` → `https://omnipathmarketing.com/email/photo.jpg`
- `LOGO_URL` → `https://omnipathmarketing.com/email/logo-720x192.png`

If you'd rather skip self-hosting, the **fastest path** below uses the LinkedIn CDN URL for the photo — works today, expires 12 Oct 2026.

## Install

### Gmail (web) — fastest path

1. Open `signature-gmail-quick.html` in any browser (e.g. `start signature-gmail-quick.html` from this folder, or just double-click the file). It already has your LinkedIn photo URL baked in.
2. Select everything in the rendered signature: click anywhere in the rendered block, press **Ctrl+A**.
3. Copy: **Ctrl+C**.
4. In Gmail: click the **gear icon** → **See all settings** → **General** tab → scroll down to the **Signature** section.
5. Click **Create new**, name it "Work", and the cursor lands in the editor.
6. Paste: **Ctrl+V**.
7. Set defaults: **For new emails** → "Work", **On reply/forward** → "Work".
8. Scroll to the bottom, click **Save Changes**.

> Gmail will convert the inline-styled HTML to its own format. The photo and logo may briefly appear as broken images while Gmail uploads them — give it 10–20 seconds, then refresh. If the images still don't appear, use the manual rebuild below.

### Gmail (web) — manual rebuild (if paste looks broken)

1. Open Gmail Settings → **General** → **Signature** → **Create new** → name it "Work".
2. In the toolbar, click the **Insert photo** icon (mountain icon).
3. Click **Upload** → select `assets\photo.jpg` → **Choose**. Gmail hosts it on its CDN.
4. After the image, press **Enter**, then type `Hammad Abid` → select it → make it **Bold** (Ctrl+B) and change size to **Large** (or font-size 16 via the size dropdown).
5. **Enter**, type `Founder, SEO & AEO Specialist` → leave normal size.
6. **Enter**, type `Omni Path Marketing` → leave normal size.
7. **Enter**, **Enter**, then type `hammad@omnipathmarketing.com` → select it → click the link icon → set URL to `mailto:hammad@omnipathmarketing.com` → **OK**.
8. Repeat the link pattern for `omnipathmarketing.com` (URL: `https://omnipathmarketing.com`) and `LinkedIn` (URL: `https://www.linkedin.com/in/hammad-abid/`).
9. To change link colour: select the link → click the text-colour icon → pick `#0070F3` (only for LinkedIn).
10. **Enter**, **Enter**, then click **Insert photo** again → upload `assets\logo-720x192.png`.
11. To shrink the logo: click the image → drag the corner handle until ~180px wide, or right-click → **Size** → set width to 180px.
12. Set defaults and Save.

### Gmail (mobile)

Gmail mobile doesn't render complex signatures well. Two options:

- Configure the signature on Gmail web — it'll sync to mobile automatically.
- Or set a plain-text fallback signature on mobile (see "Mobile fallback" below).

### Outlook (desktop — Windows / Mac)

1. **File** → **Options** → **Mail** → **Signatures…**
2. Click **New**, name it "Work".
3. Paste the contents of `signature.html` into the edit box.
4. Choose "Work" for **New messages** and **Replies/forwards**.
5. Click **OK**.

> **Outlook on Windows note:** The round photo renders as a square — that's an Outlook-on-Windows rendering limitation, not a bug. Apple Mail, Gmail web, Outlook web, and Outlook on Mac all show the round crop.

### Outlook (web)

Settings → **Mail** → **Compose and reply** → scroll to **Email signature** → paste contents of `signature.html`.

### Apple Mail (macOS)

1. **Mail** → **Settings** → **Signatures** tab.
2. Select the target account in the middle column.
3. Click **+**, name it "Work".
4. **Important:** uncheck "Always match my default message font" so the signature's inline styles win.
5. Paste the contents of `signature.html`.
6. Close the settings window (auto-saves).
7. In **Mail** → **Settings** → **Composing**, pick "Work" as the default signature for new and reply messages.

## Mobile fallback

Most mobile clients strip table HTML. Optional: keep the signature on desktop/web only and let mobile use a plain-text fallback like:

```
Hammad Abid
Founder, SEO & AEO Specialist · Omni Path Marketing
hammad@omnipathmarketing.com · omnipathmarketing.com
```

Set this per-client:
- **Gmail mobile:** Settings → tap your account → **Mobile Signature**
- **iOS Mail:** Settings → Mail → **Signature**
- **Outlook mobile:** Settings → tap account → **Signature**

## Test it

After install, send a test email to yourself (or a friend) and check:

- Round photo renders (not square) — modern clients only
- Logo shows below the contact block, slightly faded
- Vercel-blue accent bar between photo and info (table version only)
- All links click to the right places

## Tweaking the design

Three knobs in `signature.html`:

| Knob | Where | Current |
|---|---|---|
| Photo size | `<img width="72" height="72"` | 72×72 (round in modern clients) |
| Accent bar color | `bgcolor="#0070F3"` | Vercel blue |
| Logo height | `<img height="22"` | 22px (≈180px wide on this asset) |

In `signature-gmail.html`:

| Knob | Where | Current |
|---|---|---|
| Photo size | `<img width="80" height="80"` | 80×80 (round) |
| Name style | first `<span style="...">` | 16px semibold, `#0a0a0f` |
| LinkedIn link colour | last `<a style="color:...">` | `#0070F3` |

If you change the photo crop, re-export it as a square JPG, re-upload, and update `PHOTO_URL`.
