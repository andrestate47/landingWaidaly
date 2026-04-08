---
description: Deploy Landing Page to Vercel
---

## Prerequisites
- A Vercel account (https://vercel.com/signup)
- A GitHub account (https://github.com/join)
- Git installed locally (already available on Windows)
- Node.js and npm installed (project already uses them)

## Steps
1. **Initialize a Git repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. **Create a remote repository on GitHub**
   - Go to GitHub → New repository → name it `landing-1` (or any name you prefer).
   - Do **not** initialize with a README, .gitignore or license (the local repo already has these).
   - Copy the remote URL (e.g., `https://github.com/your-username/landing-1.git`).
3. **Add the remote and push**
   ```bash
   git remote add origin https://github.com/your-username/landing-1.git
   git branch -M main
   git push -u origin main
   ```
4. **Connect the repository to Vercel**
   - Log in to Vercel and click **New Project**.
   - Select the GitHub repository you just pushed.
   - Vercel will auto‑detect the framework (Vite) and suggest:
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**.
5. **Configure environment (optional)**
   - If you need any environment variables, add them under **Settings → Environment Variables** in the Vercel dashboard.
6. **Verify the deployment**
   - After the build finishes, Vercel provides a preview URL (e.g., `https://landing-1.vercel.app`).
   - Open the URL to ensure the site works as expected.
7. **Set up automatic redeploys**
   - Every push to the `main` branch will trigger a new deployment automatically.

## Tips for a Premium Look
- Add a `vercel.json` to customise redirects, headers, or enable the **edge functions** if needed.
- Enable **Analytics** in Vercel for performance insights.
- Use Vercel's **Git Integration** to preview pull requests automatically.

---
*This workflow can be executed step‑by‑step or copied into your own documentation.*
