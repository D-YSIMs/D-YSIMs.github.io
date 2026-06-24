# 🚀 D-YSIMs Studios — Deployment Guide
**Domain:** d-ysims.com (via GitHub Pages + custom domain)

---

## Step 1 — Create the GitHub Repo

1. Go to github.com and sign into the **D-YSIMs** account
2. Create a new repo named exactly: `D-YSIMs.github.io`
3. Set it to **Public**
4. Don't add README (we have our own)

---

## Step 2 — Upload All Files

Upload these files to the root of the repo:
```
index.html              ← Home page (this file)
animation-studio.html   ← Animation Studio
anime-studio.html       ← Anime Battle Studio
story-studio.html       ← Story Studio
manifest.json           ← PWA manifest
sw.js                   ← Service Worker
CNAME                   ← Custom domain file
README.md               ← GitHub profile README
```

You can drag-and-drop all files at once on GitHub, or use:
```bash
git clone https://github.com/D-YSIMs/D-YSIMs.github.io
cd D-YSIMs.github.io
# copy all files here
git add .
git commit -m "feat: launch D-YSIMs Studios"
git push
```

---

## Step 3 — Enable GitHub Pages

1. Go to repo **Settings** → **Pages**
2. Under **Source**, select: `Deploy from a branch`
3. Branch: `main` / `root`
4. Click **Save**
5. Site goes live at: `https://d-ysims.github.io`

---

## Step 4 — Add Custom Domain (d-ysims.com)

### A. Create the CNAME file
The `CNAME` file in the repo should contain exactly:
```
d-ysims.com
```

### B. Configure DNS (at your domain registrar)
Add these DNS records:

| Type  | Host | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | d-ysims.github.io      |

### C. Back in GitHub Pages settings
- Enter `d-ysims.com` in the **Custom domain** field
- Check **Enforce HTTPS** ✓

DNS propagation takes 5–30 minutes.

---

## Step 5 — Verify It Works

- [ ] https://d-ysims.com loads the home page
- [ ] All 3 studio links work
- [ ] On mobile: browser shows "Add to Home Screen" prompt (PWA)
- [ ] HTTPS padlock shows ✓

---

## Future: Real AI Image Gen

To wire up Stable Diffusion / Replicate:
1. Sign up at replicate.com
2. Get your API token
3. In `story-studio.html`, find `// REPLICATE_API_KEY_HERE`
4. Replace with your token
5. The image gen will call `https://api.replicate.com/v1/predictions`

Model to use: `stability-ai/sdxl` or `lucataco/anime-xl`

---

## Future: User Accounts (Supabase)

1. Create project at supabase.com
2. Copy your `SUPABASE_URL` and `SUPABASE_ANON_KEY`
3. Add `<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script>`
4. Auth flow: email/password or Google OAuth

---

*Built by Marcelo & Mimi · D-YSIMs Studios · d-ysims.com*
