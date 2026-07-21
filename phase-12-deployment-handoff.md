# Phase 12 — Deployment Handoff: Dorian Apps

**Repo:** `erector666/dorianapps` (https://github.com/erector666/dorianapps)  
**Commit:** `ae64d3f`  
**Date:** 2026-07-21  
**Status:** ✅ Ready for production deployment

---

## 1. Build Status

```
▲ Next.js 16.2.9 (Turbopack)
✓ Compiled successfully in 2.9s
✓ TypeScript passed in 4.6s
✓ Generating static pages (15/15) in 400ms
```

| Metric | Result |
|---|---|
| Errors | **0** |
| Static routes | 14 |
| Dynamic routes | 1 (`/lab/[slug]` — SSR) |
| Total routes | 15 |
| Build time | ~8s total |

### Route map

| Route | Render |
|---|---|
| `/` | ○ Static |
| `/about` | ○ Static |
| `/ai-awakening` | ○ Static |
| `/approach` | ○ Static |
| `/capabilities` | ○ Static |
| `/contact` | ○ Static |
| `/lab` | ○ Static |
| `/lab/[slug]` | ƒ Dynamic (SSR) |
| `/products/0brain` | ○ Static |
| `/products/codexpilot` | ○ Static |
| `/products/docvault` | ○ Static |
| `/products/fenix-construction-tracker` | ○ Static |
| `/work` | ○ Static |
| `/work/fenix-plus-sa` | ○ Static |
| `/_not-found` | ○ Static |

---

## 2. Environment Variables

**None required.** No `.env`, `.env.local.example`, or `NEXT_PUBLIC_*` variables exist in the codebase. The site is fully static with no runtime secret dependencies.

The contact form currently simulates submission client-side (no backend). When a real contact form backend is added, you'll need:
- `NEXT_PUBLIC_FORM_ENDPOINT` (or similar) — if client-side POST
- Or a server-side API route (preferred — no env var needed)

---

## 3. vercel.json

Updated from bare `{ "version": 2 }` to explicit Next.js config:

```json
{
  "version": 2,
  "framework": "nextjs",
  "buildCommand": "next build",
  "installCommand": "npm install"
}
```

---

## 4. Deploy to Vercel

### Option A — Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import `erector666/dorianapps` from GitHub
3. Vercel auto-detects Next.js — no manual config needed
4. Framework preset: **Next.js**
5. Build command: `next build` (auto-filled)
6. Output directory: `.next` (auto-filled)
7. Environment variables: **none** (leave empty)
8. Click **Deploy**

### Option B — Vercel CLI

```bash
npm i -g vercel
cd /root/dorianapps
vercel --prod
```

Follow the prompts — Vercel auto-detects the Next.js framework.

### Option C — Manual via GitHub Integration

Every push to `main` triggers an auto-deploy if the Vercel GitHub integration is installed. Just push:

```bash
git push origin main
```

---

## 5. Post-Deploy Verification Checklist

- [ ] Homepage loads at production URL
- [ ] All 15 routes return 200 (spot-check `/about`, `/work`, `/lab`, `/contact`, `/products/0brain`)
- [ ] `/lab/[slug]` dynamic route works (e.g., `/lab/ai-awakening`)
- [ ] `/ai-awakening` standalone page loads
- [ ] GSAP animations fire on scroll (parallax, reveals)
- [ ] Framer Motion page transitions work between routes
- [ ] Three.js 3D scenes render (lab pages, product pages)
- [ ] Contact form validates and shows success state (no backend yet — simulated)
- [ ] Tailwind CSS renders correctly (visual regression check)
- [ ] Mobile responsive (test at 375px and 768px widths)
- [ ] Lighthouse performance ≥ 90
- [ ] No console errors in DevTools
- [ ] Open Graph / meta tags populate (share on Twitter/LinkedIn to verify)
- [ ] Custom 404 page renders for non-existent routes
- [ ] SSL/HTTPS working (Vercel auto-provisions)

---

## 6. Rollback Instructions

### Via Vercel Dashboard
1. Go to project → **Deployments**
2. Find the previous working deployment
3. Click **…** → **Promote to Production**
3. Instant rollback — no rebuild

### Via Vercel CLI
```bash
vercel rollback
```
(Select the deployment to roll back to from the list.)

### Via Git
```bash
git revert <bad-commit-sha>
git push origin main
```
Triggers a new deployment with the reverted code.

---

## 7. Known Risks & Caveats

### 🔴 HIGH — Contact form is a no-op
**File:** `src/app/contact/page.tsx:44`  
```typescript
console.log("Contact form submission:", { name, email, message });
```
The form has validation UI but submits to nowhere. It shows "success" after a 1.2s simulated delay but never sends data. **This leaks no data but is misleading to users.** Either:
- Wire up a real API route (`app/api/contact/route.ts`) before launch
- Or add a visible note that the form is coming soon

### 🟡 MEDIUM — ErrorBoundary uses console.error
**File:** `src/components/ErrorBoundary.tsx:24-25`  
Production builds should ideally pipe errors to a logging service (Sentry, Logtail, etc.) rather than just `console.error`. Not blocking, but worth monitoring.

### 🟢 LOW — Turbopack workspace warning
Build emits: `"Warning: Next.js inferred your workspace root, but it may not be correct."`  
This is caused by a stray `package-lock.json` at `/root/`. In production (Vercel's clean build environment or a fresh clone), this warning won't appear. To silence locally, either remove the parent lockfile or set `turbopack.root` in `next.config.ts`.

### 🟢 LOW — Lighthouse script references localhost
**File:** `package.json:14`  
`"lighthouse": "lighthouse http://127.0.0.1:3000 ..."` — this is a dev-only npm script, not production code. No action needed.

### ✅ GOOD — No hardcoded localhost URLs in application code
No `fetch("http://localhost:...")` or similar patterns in any component or page.

### ✅ GOOD — No NEXT_PUBLIC_ variables
No client-side env var exposure risk.

### ✅ GOOD — All images and assets are local
No external CDN dependencies that could break. Three.js and GSAP are npm packages, bundled at build time.

---

## 8. Tech Stack Summary

| Layer | Choice |
|---|---|
| Framework | Next.js 16.2.9 (App Router, Turbopack) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 12 + GSAP 3 |
| 3D | React Three Fiber 9 + Drei 9 + Three.js 185 |
| Text effects | SplitType 0.3 |
| Smooth scroll | Lenis 1.0 (Studio Freight) |
| Language | TypeScript 6.0 (strict) |
| Testing | Custom smoke + animation test runners |
| Hosting | Vercel (target) |

---

## 9. Quick Reference

| What | Where |
|---|---|
| Source | `erector666/dorianapps` on GitHub |
| Build output | `.next/` (gitignored) |
| Static export | N/A — using SSR for dynamic routes |
| Config | `vercel.json`, `next.config.ts` |
| Env vars | None |
| Contact form backend | Not implemented |
