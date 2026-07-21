# Phase 0 — Orientation: Dorian Apps Production Website Rebuild

**Date:** 2026-07-20  
**Status:** DRAFT — awaiting stakeholder review  
**Repository:** `erector666/dorianapps` (18 commits, `main` branch)  
**Live URL:** `https://dorianapps.vercel.app`  

---

## 1. OBJECTIVE STATEMENT

**Rebuild the Dorian Apps website as a calm, precise, premium product-studio marketing site that positions Nik Velkovski's work as "software for work that has outgrown spreadsheets, documents, and manual coordination" — replacing the current sci-fi cyberpunk hero and narrative with an editorial, restrained visual system that converts founders, SMEs, and operations managers from first impression to project inquiry.**

---

## 2. PRIMARY USER JOURNEY

| Stage | Action | Route | Visitor Experience |
|-------|--------|-------|-------------------|
| **Arrive** | Land on homepage | `/` | Immediate clarity: "This is a serious product studio that solves operational problems." Calm dark hero, no sci-fi, no red glowing eyes. Identity and positioning are unmistakable within 3 seconds. |
| **Understand** | Scan products & scroll | `/` → product sections | The narrative is "operational pressure → systematic solution." Each product is presented as an answer to a real business friction. Products are distinguished: Field Ops (construction), DocVault (documents), CodexPilot (developer tools), 0Brain (agent infrastructure). |
| **Interest** | Click into a product | `/products/[slug]` | Full product page with: problem context, capabilities, tech stack, use cases, screenshots, external links where applicable. Each page answers "what operational problem does this solve?" |
| **Action** | Navigate to Contact | `/contact` | "Describe the problem you want to solve" — not "Buy now." Form captures name, email, and problem description. No pricing tables, no "request demo" as the primary CTA. |
| **Result** | Conversion | — | Visitor submits a project inquiry. Nik receives a direct message describing an operational problem. The site has qualified the lead by demonstrating domain credibility before the conversation starts. |

**Critical path:** Home (3s positioning) → scroll through products (credibility) → click a product (depth) → Contact (describe problem).

**Time-to-clarity target:** A first-time visitor must understand what Dorian Apps does within 3 seconds of page load. Current state fails this — "THE MACHINE IS OFFLINE" tells them nothing about the studio.

---

## 3. ASSUMPTIONS REGISTER

| # | Assumption | Impact if wrong | Risk level |
|---|-----------|----------------|------------|
| A1 | The PRD's positioning ("software for work that has outgrown spreadsheets") is final and approved by Nik | Reversing the whole visual and narrative direction mid-build wastes substantial effort | **HIGH** |
| A2 | The AIAwakeningHero must be completely replaced, not evolved | If it only needs toning down (not removal), the scope is smaller | Medium |
| A3 | The ai-awakening DALL-E assets (355MB, 94 PNGs) are NOT reusable for the new direction | If they can be repurposed, asset generation effort drops significantly | Medium |
| A4 | The current Next.js 16 + React 19 + Tailwind 3 stack stays — no migration to a different framework | Migration mid-project would add 1-2 weeks | Low |
| A5 | The existing product pages (DocVault, CodexPilot, Field Ops, 0Brain) need content revision, not structural rebuild | If structural rebuild needed, scope increases substantially | Medium |
| A6 | Framer Motion stays in the stack (currently installed at 12.42.2 despite animation test expecting its absence) | If removed, all AnimatePresence transitions need GSAP reimplementation | Low |
| A7 | The dual CSS system (flow-shell for homepage + site-shell for interior pages) should be consolidated into one | If kept separate, maintenance cost is ongoing | Medium |
| A8 | The contact form remains simulated (no backend API) — future work, not Phase 0 concern | If backend integration is required for launch, scope increases | Low |
| A9 | The `visual-direction-table.md` reference document at `/root/visual-direction-table.md` (external to the repo, 18 rows across 13 distinct aesthetic domains + 5 reference sites) represents the approved design direction | If it's aspirational rather than approved, design tokens may need reconciliation | **HIGH** |
| A10 | The Vercel deployment at dorianapps.vercel.app remains the deployment target | If moving to a different platform, CI/CD setup changes | Low |
| A11 | `dorianapps.com` domain is owned and ready to connect (google2177f9c8a60ae3b3.html exists) | If domain not owned, launch is blocked | Medium |
| A12 | The existing product screenshots (docvault.png, fenix-live-map.png, fenix-login.png, codexpilot-mockup*.png, 0brain-dashboard.png) are accurate and current | Stale screenshots undermine product credibility | Medium |

---

## 4. SCOPE CLASSIFICATION

**Category: REPOSITIONING + REDESIGN (not greenfield, not minor refresh)**

This is a **repositioning** because:
- The brand narrative changes fundamentally: from "AI awakening / machine consciousness" to "software for operational problems"
- The target audience shifts from "AI-curious tech visitors" to "founders, SMEs, operations managers with real workflow pain"
- The conversion goal changes from "explore our AI products" to "describe the problem you want to solve"

This is a **redesign** because:
- The hero section must be completely rebuilt (AIAwakeningHero → calm, editorial hero)
- The visual language must shift from cyberpunk/sci-fi to restrained/premium/editorial
- The tone of all copy must be revised from dramatic to precise
- The CSS system may need consolidation (flow-shell + site-shell → unified design system)

**What stays:**
- Next.js 16 App Router architecture
- All product pages (structural layout preserved, content revised)
- About page (substantial, well-structured — minor copy revisions)
- Contact page form structure (copy revised for PRD positioning)
- Design tokens system (values may shift, but the centralized approach stays)
- Navigation structure (7 routes preserved, labels may change)
- Vercel deployment
- Google verification file

**What changes completely:**
- Homepage hero (AIAwakeningHero → new editorial hero)
- Homepage narrative flow (origin, products, agents, proof, close sections need PRD-aligned copy)
- Visual tone (red/black sci-fi → calm dark premium with controlled accent)
- Primary CTA language ("START" → "Describe your problem")

**What needs verification before scope lock:**
- Is the HomeAgents section (agent orbit diagram) aligned with PRD direction?
- Does the HomeOrigin "construction work in Switzerland" narrative stay?
- Are the HomeProof principles ("Useful before impressive" etc.) PRD-aligned?

---

## 5. PRODUCT EVIDENCE INVENTORY

### Verified by Inspection

| Product | Evidence | Verification Method | Status |
|---------|----------|-------------------|--------|
| **DocVault** | Product page at `/products/docvault` with capabilities, tech stack (Next.js, Supabase, OpenAI RAG, pgvector), use cases. External link to docvault.dev. Screenshot exists at `public/assets/screenshots/docvault.png`. | Code inspection | ✅ Verified |
| **CodexPilot** | Product page at `/products/codexpilot` with capabilities, Android platform claim, repository control features. Uses generic `3.jfif` image (not a CodexPilot screenshot). External URL absent. | Code inspection | ⚠️ Needs product screenshot |
| **Field Ops (FENIX)** | Product page at `/products/fenix-construction-tracker` with live map + login screenshots, Firebase/Google Maps stack, Capacitor deployment. Has real screenshots. | Code inspection | ✅ Verified |
| **0Brain** | Product page at `/products/0brain` with 5-stage agent cycle diagram, persistent memory features. Uses generic `3.jfif` image. Has `0brain-loop.svg` diagram. | Code inspection | ⚠️ Needs product screenshot |
| **Fenix Plus SA** | Work page at `/work/fenix-plus-sa` clearly labeled as "company website work" (not tracker app). External link to fenixplus.ch. | Code inspection | ✅ Verified |

### Needs Verification

| Item | What needs checking | Why it matters |
|------|-------------------|----------------|
| CodexPilot actual product state | Is the Android APK functional and in Google Play? What does the actual app look like? | Product page currently shows a generic dev setup photo, not the product |
| 0Brain actual product state | Is 0Brain deployed and functional? What does the dashboard actually look like? | Product page uses 3.jfif (same stock image as CodexPilot) |
| DocVault production state | Is docvault.dev functional? Screenshot appears legitimate but needs live verification | External link is a primary conversion path |
| Field Ops production state | Are the live map and login screenshots current? | Screenshots are the primary evidence of a complex operational system |
| Product URLs/domains | Are docvault.dev, 0brain URLs owned and pointing to functional products? | Dead links undermine the studio's credibility |

---

## 6. EXISTING ASSET INVENTORY

### Code Assets (Reusable)

| Asset | Location | Reusability | Notes |
|-------|----------|-------------|-------|
| Design tokens | `src/data/design-tokens.ts` | **HIGH** | Centralized, well-structured. Values may need PRD-aligned adjustments |
| Product data model | `src/data/site.ts` | **HIGH** | Complete product catalog with metadata. Extendable. |
| Navigation config | `src/data/navigation.ts` | **HIGH** | Clean, data-driven. Labels may need revision. |
| Product pages (4) | `src/app/products/*/page.tsx` | **MEDIUM** | Structural layout reusable. Copy needs PRD alignment. Feature/use-case content needs review. |
| About page | `src/app/about/page.tsx` | **HIGH** | Substantial (timeline, methodology, toolkit). Minimal copy revision needed. |
| Contact page | `src/app/contact/page.tsx` | **HIGH** | Working form with validation. CTA copy needs revision. |
| Header | `src/components/Header.tsx` | **HIGH** | Clean glass header with mobile nav. Reusable as-is. |
| Footer | `src/components/Footer.tsx` | **HIGH** | Minimal, correct. Reusable. |
| CasePage | `src/components/CasePage.tsx` | **MEDIUM** | Template for product/work pages. Currently unused (products have custom pages). |
| SmoothScroll provider | `src/providers/SmoothScroll.tsx` | **HIGH** | 59 lines. Lenis + GSAP ScrollTrigger integration via dynamic imports. Respects `prefersReducedMotion()`. Exposes scroll progress via CSS custom property `--scroll-progress` and `lenis-scroll` custom event. Marks `html[data-lenis="active"]`. Reusable. |
| ImageWithFallback | `src/components/ImageWithFallback.tsx` | **HIGH** | Graceful image handling. Reusable. |
| PageTransition | `src/components/PageTransition.tsx` | **HIGH** | Framer Motion page transitions. Reusable. |
| ErrorBoundary | `src/components/ErrorBoundary.tsx` | **HIGH** | Error handling. Reusable. |
| globals.css | `src/app/globals.css` | **MEDIUM** | 743 lines. Contains both site-shell and flow-shell CSS. Needs consolidation and PRD-aligned token updates. |
| eslint.config.mjs | `eslint.config.mjs` (repo root) | **HIGH** | 9 lines. Uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript`. Ignores `.next/`, `node_modules/`, `output/`, `.tmp-playwright/`. |
| next.config.ts | `next.config.ts` (repo root) | **HIGH** | 7 lines. Minimal config — only `reactStrictMode: true`. |
| tailwind.config.ts | `tailwind.config.ts` (repo root) | **HIGH** | 65 lines. Extended colors (CSS var tokens), custom fonts, hero/section font sizes, transition timings, box shadows, z-index scale, section spacing. |
| postcss.config.mjs | `postcss.config.mjs` (repo root) | **HIGH** | 8 lines, 103B. Standard Tailwind + Autoprefixer pipeline.
| vercel.json | `vercel.json` (repo root) | **HIGH** | 19B. `{"version": 2}` — Vercel deployment config, auto-detects Next.js framework. |

### Visual Assets (Need Evaluation)

| Asset | Location | Size | PRD Alignment | Notes |
|-------|----------|------|---------------|-------|
| ai-awakening/sequence/ (94 PNGs) | `public/assets/ai-awakening/sequence/` | 355MB | **LOW** — DALL-E generated machine awakening imagery | Unlikely reusable. Sci-fi robot theme. Major storage concern (355MB in repo). |
| ai-awakening stage images (4) | `public/assets/ai-awakening/stage-*.png` | Part of 355MB | **LOW** — "dead machine", "red light", "neural patterns" | Exact opposite of PRD direction. |
| portrait-1.webp | `public/assets/portrait-1.webp` | Unknown | **HIGH** | Nik's portrait. Currently used on About page. |
| portrait-2.webp | `public/assets/portrait-2.webp` | Unknown | **HIGH** | Nik at workstation. Currently used on About page. |
| portrait-3.webp | `public/assets/portrait-3.webp` | Unknown | **HIGH** | Additional portrait. Not currently used in components. |
| logo.svg | `public/assets/logo.svg` | Unknown | **HIGH** | D/A monogram. Core brand asset. |
| favicon.svg | `public/favicon.svg` | Unknown | **HIGH** | Site favicon. |
| og-image.svg | `public/assets/og-image.svg` | Unknown | **HIGH** | Social sharing image. |
| contour-pattern.svg | `public/assets/contour-pattern.svg` | Unknown | **MEDIUM** | Topographic pattern used on Field Ops page. Reusable. |
| 0brain-loop.svg | `public/assets/0brain-loop.svg` | Unknown | **HIGH** | Agent cycle diagram. Used on 0Brain page. |
| preloader.svg | `public/assets/preloader.svg` | Unknown | **LOW** | May not align with new calm direction. |
| 404-graphic.svg | `public/assets/404-graphic.svg` | Unknown | **MEDIUM** | 404 page graphic. May need redesign. |
| hero-scrub-desktop.mp4 | `public/media/hero-scrub-desktop.mp4` | Unknown | **LOW** | Video for previous scroll-scrub hero. Unlikely reusable. |
| hero-scrub-mobile.mp4 | `public/media/hero-scrub-mobile.mp4` | Unknown | **LOW** | Same as above. |
| workshop_video_silent.mp4 | `public/videos/workshop_video_silent.mp4` | Unknown | **UNKNOWN** | May be reusable if it shows Nik working (not AI imagery). |
| workshop_still.jpg | `public/assets/workshop_still.jpg` | Unknown | **MEDIUM** | Poster frame. May be reusable. |
| poster-desktop.jpg, poster-mobile.jpg | `public/assets/poster-*.jpg` | Unknown | **MEDIUM** | Hero poster frames. May need regeneration. |
| neural-core-v2.png | `public/assets/neural-core-v2.png` | Unknown | **LOW** | Generated neural core image. Sci-fi aesthetic. |
| Product screenshots | `public/assets/screenshots/*.png` | Unknown | **HIGH** | Real product evidence. Critical for credibility. |
| CodexPilot mockups (3) | `public/assets/screenshots/codexpilot-*.png` | Unknown | **HIGH** | Product screenshots. Need verification of currency. |

### Components Needing Replacement

| Component | Reason | Effort |
|-----------|--------|--------|
| `AIAwakeningHero.tsx` | Sci-fi "dead machine" narrative contradicts PRD | **LARGE** — complete rebuild |
| `HomeExperience.tsx` | Orchestrates AIAwakeningHero + flow-shell sections | **MEDIUM** — swap hero, revise sections |
| `HomeOrigin.tsx` | Content may need PRD-aligned copy revision | **SMALL** |
| `HomeProducts.tsx` | Product tilt/glare effects may feel wrong for calm direction | **SMALL-MEDIUM** |
| `HomeAgents.tsx` | Agent orbit diagram — verify PRD alignment | **SMALL** |
| `HomeProof.tsx` | Principles seem PRD-aligned ("Useful before impressive") | **SMALL** (copy check only) |
| `HomeClose.tsx` | CTA copy needs revision ("Start the conversation" → "Describe your problem") | **SMALL** |

---

## 7. VERIFIED FACTS

These are facts confirmed by direct inspection of the codebase and live site:

### Technical
1. **Stack verified:** Next.js 16.2.9, React 19.2.7, TypeScript 6.0.3, Tailwind CSS 3.4.17 — all confirmed in `package.json` and `node_modules`.
2. **Framer Motion is installed** (v12.42.2) despite `tests/animation-system.mjs` asserting it must not be present. The animation test will fail.
3. **GSAP 3.15.0, Lenis 1.0.42, SplitType 0.3.4, Three.js 0.185.0** all confirmed installed.
4. **@react-three/drei 9.122.0 and @react-three/fiber 9.6.1** installed — Three.js React bindings present.
5. **Vercel deployment confirmed:** `vercel.json` has `{"version": 2}`, framework auto-detected as Next.js.
6. **17 git commits** from initial "coming soon" to current "AI awakening hero."
7. **Google verification file** exists: `google2177f9c8a60ae3b3.html` at repo root.
8. **No backend API:** Contact form uses simulated `setTimeout` submission (logs to console).
9. **eslint.config.mjs** uses `eslint-config-next/core-web-vitals` + `eslint-config-next/typescript` with global ignores for `.next/`, `node_modules/`, `output/`, `.tmp-playwright/`.
10. **next.config.ts** is minimal — only `reactStrictMode: true` (7 lines).
11. **tailwind.config.ts** is extensively customized: 65 lines with CSS-variable-based colors, custom fonts, hero/section font sizes, transition timings, box shadows, z-index scale, section spacing via `clamp()`.
12. **postcss.config.mjs** is standard: 8 lines (103B), Tailwind + Autoprefixer only.

### Architecture
13. **Dual CSS system:** `flow-shell` classes for homepage scroll sections, `site-shell` classes for interior pages (About, Contact, Products). These are separate CSS systems with different layout approaches.
14. **App Router structure:** 7 routes (Home, 4 Products, 1 Work, About, Contact, Not Found, AI Awakening).
15. **Design tokens centralized** in `src/data/design-tokens.ts` — surface palette, typography, motion config, shadows, z-index.
16. **Product data centralized** in `src/data/site.ts` — 4 products + 1 work case with complete metadata.
17. **Navigation centralized** in `src/data/navigation.ts` — 7 primary links + 1 CTA link.

### Visual & Content
18. **Current hero is sci-fi:** "THE MACHINE IS OFFLINE. Cold. Still. Dead. The slumber before ignition. Emergency lights from below."
19. **Hero uses red color palette:** `#ff4444`, `#ff2222`, `textShadow: "0 0 20px rgba(255,0,0,0.5)"`, gradient overlay `rgba(180,0,0,0.12)`.
20. **Hero uses 4 DALL-E generated stage images** showing a robot/machine with red glowing eyes awakening.
21. **Homepage has 6 sections** in flow-shell: AIAwakeningHero → HomeOrigin → HomeProducts → HomeAgents → HomeProof → HomeClose.
22. **Products on homepage show only 3** (FENIX, DocVault, CodexPilot) — 0Brain is excluded from the main product grid.
23. **About page is substantial** (147 lines): portrait, methodology (5 steps), toolkit (8 items), bio, timeline (4 periods).
24. **Contact form captures:** name, email, message with client-side validation. Success state simulated.

### Assets
25. **Asset directory is 366MB total** — 355MB of that is the ai-awakening sequence (94 DALL-E PNGs).
26. **Portrait images exist:** portrait-1.webp, portrait-2.webp, portrait-3.webp (3 total). All confirmed present in `public/assets/`.
27. **Product screenshots exist** for all products except CodexPilot and 0Brain (which use `3.jfif` — a generic placeholder found at both `public/assets/3.jfif` and `assets/3.jfif`).
28. **Hero stage images duplicated:** both `public/assets/ai-awakening/stage-*.png` and `public/assets/hero/hero-stage-*.png` exist.

### Gaps and Absences
29. **robots.txt does NOT exist** — no SEO crawl directive file in the repo or public directory.
30. **sitemap.xml does NOT exist** — no XML sitemap for search engine discovery.
31. **No .env files found** — the repo has no environment variable files (no `.env`, `.env.local`, `.env.production`, etc.).
32. **3.jfif is a placeholder used across 6 source files** (`src/data/site.ts` twice, `src/components/HomeProducts.tsx`, `src/components/NeuralCoreScene.tsx`, `src/components/WorkSection.tsx`, `tests/smoke.mjs`) — used for CodexPilot, 0Brain, and Work Section, none of which have genuine product screenshots.
33. **vercel.json exists** at repo root — 19 bytes, `{"version": 2}`. Framework auto-detected as Next.js.

---

## 8. UNKNOWNS

These must be resolved before execution can begin:

### Critical (Blocking)
1. **Is the PRD direction approved by Nik?** The current codebase represents significant investment in the AI awakening direction (latest 5 commits). Reversing this without explicit stakeholder sign-off risks wasted work.
2. **What is the approved positioning statement?** The task brief says "Software for work that has outgrown spreadsheets, documents and manual coordination" — is this final and verbatim, or a directional guide?
3. **Does `visual-direction-table.md` (at `/root/visual-direction-table.md`) represent approved design direction?** It references 18 rows spanning 13 distinct aesthetic domains (Linear, Stripe, Vercel, Apple, Sentry, film titles, Dieter Rams/Braun, Brutalism, museum design, industrial materials, and project brand DNA) plus 5 live reference sites — but was never validated against the PRD's "calm, precise, premium" direction.
4. **What happens to the AIAwakeningHero?** Is it: (a) completely removed, (b) preserved as a separate `/ai-awakening` route, (c) toned down and repurposed? The asset investment (355MB, 94 images) is significant.

### Important (Should Resolve)
5. **Are the product screenshots current?** DocVault, Field Ops, and 0Brain screenshots need verification against live products.
6. **Is the `3.jfif` image used for CodexPilot and 0Brain a placeholder?** If so, what are the actual product visuals?
7. **Should 0Brain appear on the homepage product grid?** Currently it's only in the nav and has its own page, but is absent from the main "THREE PRODUCTS" section.
8. **What is the approved color accent for the new direction?** The design tokens define `--color-accent: #2d8cff` (blue) with `--color-accent-strong: #ff244f` (red). The visual-direction-table.md references per-product accent colors. Which is the primary site accent?
9. **Does the "construction work in Switzerland" origin story stay?** It's prominent in HomeOrigin, About, and multiple product descriptions. It's authentic and differentiates — but needs PRD confirmation.
10. **What is the actual domain status?** `dorianapps.com` has a Google verification file but the live site is at `dorianapps.vercel.app`. Is the custom domain connected?

### Nice to Resolve
11. **Should the dual CSS system (flow-shell + site-shell) be consolidated?** It adds maintenance overhead but represents working code.
12. **Is Framer Motion staying or going?** The animation test asserts its absence, but it's installed and used in AIAwakeningHero and PageTransition.
13. **Are the hero-scrub videos still needed?** They were generated for a previous hero iteration. The new hero direction likely doesn't need them.
14. **What is the 0Brain external URL?** DocVault has docvault.dev and Fenix Plus SA has fenixplus.ch, but 0Brain has no external link.
15. **Is there a preferred contact backend?** Currently simulated. Formspree, Resend, Supabase Edge Function, or stay simulated?

---

## 9. RISK REGISTER

| # | Risk | Probability | Impact | Mitigation |
|---|------|------------|--------|------------|
| R1 | **Stakeholder misalignment on direction.** Nik may not fully support the PRD's repositioning away from the AI awakening theme he just built (latest 5 commits). | **HIGH** | **CRITICAL** | Get explicit sign-off on PRD direction AND on the decision to replace the AIAwakeningHero before writing any code. |
| R2 | **355MB of DALL-E assets become dead weight.** Removing them from the repo is a git history concern; keeping them bloats the build. | **HIGH** | **MEDIUM** | Use `git filter-branch` or `bfg-repo-cleaner` to purge sequence assets if they're not reusable. Alternatively, move to external storage. |
| R3 | **Design system fragmentation.** The visual-direction-table.md references 18 different design domains. Without strong editorial filtering, the result could be incoherent. | **MEDIUM** | **HIGH** | Define 3-4 PRIMARY references (e.g., Linear + Stripe + Apple + Dieter Rams) and treat the rest as optional seasoning. |
| R4 | **Scope creep from "rebuild" to "rebuild + new features."** The About page is already substantial; the temptation to add more pages (blog, changelog, case studies) could delay launch. | **MEDIUM** | **MEDIUM** | Lock scope to: replace hero, revise homepage sections, revise product page copy, revise contact copy. Everything else is Phase 2. |
| R5 | **Product evidence gap.** Two products (CodexPilot, 0Brain) use a generic `3.jfif` image. If real screenshots don't exist, product pages lose credibility. | **MEDIUM** | **HIGH** | Verify product screenshots before launch. If unavailable, use abstract geometric representations (Three.js) rather than stock imagery. |
| R6 | **CSS system consolidation risk.** Merging flow-shell and site-shell could introduce regressions across all pages. | **LOW** | **MEDIUM** | Leave consolidation for Phase 2. Keep both systems but ensure the new hero uses the site-shell system (not flow-shell) for consistency with interior pages. |
| R7 | **Build failure after major changes.** The smoke tests check for specific copy strings and component imports. Changing the hero will break tests. | **HIGH** | **LOW** | Update tests alongside code changes. Run `npm test` and `npm run build` before every commit. |
| R8 | **Vercel deployment regression.** A failed deploy after hero replacement would leave the site broken. | **LOW** | **HIGH** | Use Vercel preview deployments. Never push directly to production. Verify build before merging. |
| R9 | **Performance regression.** The AIAwakeningHero is heavy (AnimatePresence, 4 large images). A poorly optimized replacement could be worse. | **LOW** | **MEDIUM** | Lighthouse audit before and after. Target: same or better performance score with new hero. |
| R10 | **Loss of existing visual identity equity.** The dark theme with glass panels and product accents is working well. Changing the hero shouldn't cascade into breaking the entire visual system. | **MEDIUM** | **MEDIUM** | Replace only what's broken (hero + tone). Preserve: dark palette, glass panels, product accent colors, font stack, navigation structure. |

---

## 10. DEFINITION OF DONE

The rebuild is **complete** when all of the following are true:

### Positioning & Narrative
- [ ] A first-time visitor can articulate what Dorian Apps does within 3 seconds of page load
- [ ] The hero section communicates "software for operational problems" — not "AI awakening" or "machine consciousness"
- [ ] No red/neon/cyberpunk visual language remains on any page
- [ ] The tone is calm, precise, and confident — no dramatic/sci-fi language
- [ ] The positioning statement "Software for work that has outgrown spreadsheets, documents and manual coordination" is reflected in the hero and homepage narrative

### Visual System
- [ ] Hero uses the approved design system (dark premium, calm, editorial — not sci-fi)
- [ ] No red glowing elements, no "dead machine" imagery, no DALL-E robot images in hero
- [ ] Design tokens are consistent across all pages (no token drift between homepage and interior pages)
- [ ] Product accent colors remain functional (amber for DocVault, cyan for CodexPilot, green for Field Ops, violet for 0Brain, gold for Fenix Plus SA)

### Content
- [ ] All 5 projects have product pages with current, accurate information
- [ ] CodexPilot and 0Brain have actual product visuals (not `3.jfif` placeholder)
- [ ] Contact form CTA reflects "describe your problem" positioning
- [ ] About page copy is reviewed for PRD alignment
- [ ] Footer and metadata (OG tags, title, description) reflect the new positioning

### Technical
- [ ] `npm test` passes (smoke + animation tests updated for new hero)
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run lint` passes
- [ ] Vercel preview deployment functions correctly
- [ ] Lighthouse performance score ≥ 90 on desktop
- [ ] All routes return 200 (no 404s for any product/work page)

### Operations
- [ ] AIAwakeningHero and its 355MB of DALL-E assets are either: (a) removed from the repo, or (b) quarantined to `/ai-awakening` route only
- [ ] `dorianapps.com` custom domain is connected (or plan is documented)
- [ ] Google verification file preserved and functional
- [ ] Git history is clean (no accidental commits of large unused assets)

### Stakeholder
- [ ] Nik has reviewed and approved the new hero
- [ ] Nik has reviewed and approved the revised homepage copy
- [ ] All unknowns in Section 8 are resolved or explicitly deferred to Phase 2

---

## APPENDIX: Key Files Reference

| File | Lines | Purpose | Phase 0 Relevance |
|------|-------|---------|-------------------|
| `src/components/AIAwakeningHero.tsx` | 226 | Current hero — needs replacement | **PRIMARY TARGET** |
| `src/components/HomeExperience.tsx` | 21 | Homepage orchestrator | **PRIMARY TARGET** |
| `src/app/page.tsx` | 11 | Homepage entry | **PRIMARY TARGET** |
| `src/data/site.ts` | 191 | Product catalog + copy | Copy revision target |
| `src/data/design-tokens.ts` | 111 | Visual system tokens | May need PRD-aligned updates |
| `src/data/navigation.ts` | 24 | Navigation links | Label review only |
| `src/app/globals.css` | 743 | All CSS — two systems | Consolidation candidate (Phase 2) |
| `src/app/layout.tsx` | 94 | Root layout + metadata | Metadata revision |
| `src/app/about/page.tsx` | 147 | About page | Minor copy check |
| `src/app/contact/page.tsx` | 271 | Contact page | CTA copy revision |
| `src/app/products/*/page.tsx` | ~140 each | 4 product pages | Copy/content review |
| `tests/smoke.mjs` | 120 | Content/layout assertions | **WILL BREAK** — needs update |
| `tests/animation-system.mjs` | 93 | Animation stack assertions | **WILL BREAK** (Framer Motion present) |
| `build directive.txt` | 192 | Original build directive | Reference for original intent |
| `visual-direction-table.md` | 80 | Design system reference (at `/root/visual-direction-table.md`, external to repo) | Design guardrails |
| `phase-0-orientation.md` | — | **This document** | Phase 0 deliverable |
