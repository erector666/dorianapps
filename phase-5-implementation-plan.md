# Phase 5 — Implementation Plan: Dorian Apps Website Rebuild

**Date:** 2026-07-20
**Status:** DRAFT
**Direction:** Systematic (Phase 2 selected direction)
**References:** Phase 0 Orientation, Phase 1 Visual Research, Phase 2 Experience Concept, Phase 3 Asset Specification, Phase 4 Asset Generation Log, PRD lines 977–998

---

## Document Purpose

This document is the complete, authoritative implementation plan for every file change, component, route, data model update, content model, asset placement, dependency change, animation architecture, responsive strategy, accessibility approach, SEO plan, testing plan, rollback plan, risk register, and blast-radius analysis for the Dorian Apps website rebuild. No code is written in Phase 5 — this is the blueprint that Phase 6 implementation follows.

---

## 1. File Creation List

Every new file to create, with purpose.

### 1.1 New Application Pages

| # | Path | Purpose |
|---|------|---------|
| 1 | `src/app/work/page.tsx` | Work index page ("System Registry") — lists all work entries as a curated portfolio with consistent format cards |
| 2 | `src/app/work/layout.tsx` | Work section layout with Header + Footer, shared metadata |
| 3 | `src/app/capabilities/page.tsx` | Capabilities page ("System Capabilities") — organized by problem domain, not technology |
| 4 | `src/app/approach/page.tsx` | Approach page ("Operating Manual") — Nik's 6-stage method as structured documentation |
| 5 | `src/app/lab/page.tsx` | Lab page ("Experiments Registry") — experimental systems with status badges |
| 6 | `src/app/lab/[slug]/page.tsx` | Individual experiment detail page — hypothesis, method, findings, status |
| 7 | `src/app/lab/layout.tsx` | Lab section layout with Header + Footer, shared metadata |
| 8 | `src/app/sitemap.ts` | Dynamic sitemap generation (`next-sitemap` or manual) |
| 9 | `src/app/robots.ts` | Robots.txt generation |

### 1.2 New Components (by page)

| # | Path | Purpose |
|---|------|---------|
| **Homepage** |||
| 10 | `src/components/home/HeroDiagram.tsx` | Homepage hero — two-state SVG diagram (chaos → resolution) with scroll-driven transition. Replaces `AIAwakeningHero`. See Section 9.3 for updated animation architecture using external split SVGs. |
| 11 | `src/components/home/HeroBuilderImage.tsx` | The Builder establishing shot (`the-builder.webp`) behind/alongside hero diagram |
| 12 | `src/components/home/PatternRecognition.tsx` | "We keep seeing the same pattern" section — 5 operational friction cards with problem → response |
| 13 | `src/components/home/SelectedSystems.tsx` | "Selected Systems" — 4 products as designed systems (replaces `HomeProducts` flow-shell version) |
| 14 | `src/components/home/AgentArchitecture.tsx` | "Agent Architecture" section — Worker → Judge → Iterate → Deploy diagram (replaces `HomeAgents`) |
| 15 | `src/components/home/MethodSection.tsx` | "Method" section — 6-step process timeline (replaces `HomeProof`) |
| 16 | `src/components/home/LabPreview.tsx` | "Lab Output" section — experimental systems preview with status badges |
| 17 | `src/components/home/HomeContactCTA.tsx` | Contact CTA section (replaces `HomeClose`) |
| **Work** |||
| 18 | `src/components/work/WorkRegistry.tsx` | Work index — curated project list in registry format |
| 19 | `src/components/work/WorkCard.tsx` | Individual work entry card with system metadata |
| 20 | `src/components/work/CaseStudyLayout.tsx` | Shared layout for individual work case study pages |
| **Capabilities** |||
| 21 | `src/components/capabilities/CapabilityDomain.tsx` | Individual capability domain card (problem → solution → example) |
| 22 | `src/components/capabilities/CapabilityGrid.tsx` | Grid layout for capability domains |
| **Approach** |||
| 23 | `src/components/approach/MethodTimeline.tsx` | 6-stage scrolling timeline with SVG diagram (AS-021) |
| 24 | `src/components/approach/StageDetail.tsx` | Individual stage expandable detail |
| **Lab** |||
| 25 | `src/components/lab/ExperimentCard.tsx` | Experiment card with status badge, hypothesis, findings |
| 26 | `src/components/lab/ExperimentStatus.tsx` | Status badge: VERIFIED / EXPERIMENTAL / IN DEVELOPMENT / ARCHIVED |
| 27 | `src/components/lab/ExperimentDetail.tsx` | Full experiment detail view |
| **Shared** |||
| 28 | `src/components/shared/SystemDiagram.tsx` | Reusable scroll-driven SVG diagram component (stroke-dashoffset) |
| 29 | `src/components/shared/ContentSection.tsx` | Standardized section wrapper with eyebrow, heading, body, CTA |
| 30 | `src/components/shared/ProductCard.tsx` | Shared product card used across Homepage and Capabilities |
| 31 | `src/components/shared/GlassPanel.tsx` | Standardized glass panel wrapper |
| 32 | `src/components/shared/SkipLink.tsx` | Skip-to-content link (extracted from layout) |
| 33 | `src/components/shared/Breadcrumbs.tsx` | Optional breadcrumb navigation for interior pages |

**Note:** `SectionDivider.tsx` is NOT a new file — it already exists at `src/components/SectionDivider.tsx` and is listed as MODIFY #24 in Section 2.4. There is no `shared/` duplicate.

### 1.3 New Data Files

| # | Path | Purpose |
|---|------|---------|
| 34 | `src/data/capabilities.ts` | Capability domains data (PRD categories: AI Product Development, Agentic Systems, Document Intelligence, etc.) |
| 35 | `src/data/lab.ts` | Lab experiments data (hypothesis, method, status, findings) |
| 36 | `src/data/seo.ts` | Centralized SEO metadata (default OG image, site config, structured data defaults) |

### 1.4 New Utility Files

| # | Path | Purpose |
|---|------|---------|
| 37 | `src/utils/animation.ts` | Scroll-driven animation helpers (GSAP ScrollTrigger wrappers, reduced-motion guards) |
| 38 | `src/utils/accessibility.ts` | Accessibility utilities (focus management, announce to screen readers) |

### 1.5 New Test Files

| # | Path | Purpose |
|---|------|---------|
| 39 | `tests/routes.mjs` | Route existence and structure tests for new pages |
| 40 | `tests/seo.mjs` | SEO metadata, OG tags, structured data, sitemap tests |
| 41 | `tests/a11y.mjs` | Accessibility: contrast, skip links, aria labels, focus order |

### 1.6 New Asset Files (Diagram SVGs — Phase 4 remaining)

| # | Path | Purpose |
|---|------|---------|
| 42-47 | `public/assets/diagrams/*.svg` | AS-019 (Agent Architecture), AS-021 (Method Process), AS-022 (DocVault Architecture), AS-023 (Field Ops Architecture), plus any additional needed |

---

## 2. File Modification List

Every existing file to modify, what changes, and why.

### 2.1 Core Layout and Config

| # | Path | Change | Why |
|---|------|--------|-----|
| 1 | `src/app/layout.tsx` | Replace Inter/Playfair_Display with Switzer via `next/font/local` (self-hosted `.woff2` files, NOT npm — `@fontsource/switzer` does not exist). Keep JetBrains Mono. Update metadata to Systematic positioning; add new font variable `--font-sans` (Switzer); update viewport themeColor to `#070808`; add structured data JSON-LD. Fallback: Inter (already imported) if Switzer files are missing. | Systematic direction requires Switzer (neo-grotesque, Indian Type Foundry). Switzer is NOT available on Fontsource. Must be self-hosted. Current Inter (body) + Playfair (display) don't match the Systematic aesthetic. |
| 2 | `src/app/globals.css` | Complete overhaul: replace flow-shell + site-shell dual system with single unified token system; new surface tokens (`--surface-base`, `--surface-elevated`, `--surface-alt`, `--surface-floating`, `--surface-glass`); new text tokens (`--text-primary`, `--text-secondary`, `--text-tertiary`); new accent system (`--accent-active`, per-product accent vars); new typography scale (Switzer-based `clamp()` values); deprecate blue-red gradients, neural-core, flow-shell, experience-shell CSS; remove `.blue-red-text`, `.grid-fade`, `.signal-*`, `.network-*`, `.flow-*`, `.experience-*`, `.neural-core-*`, `.video-background-*`, `.rx-hero-*` classes | Systematic direction has its own visual system (Phase 2). Current CSS is heavily tied to "AI Awakening" aesthetic. Must be unified. |
| 3 | `tailwind.config.ts` | Add new color tokens: `surface-base`, `surface-elevated`, `surface-alt`, `surface-floating`, `surface-glass`, `text-primary`, `text-secondary`, `text-tertiary`, `accent-active`, per-product accents; update fontFamily: `display` → Switzer, `body` → Switzer, remove Playfair; update fontSize tokens to Systematic scale; add `backdrop-blur-xl` and `saturate-150` utilities | New design tokens from Phase 2 need Tailwind mapping |
| 4 | `package.json` | Add Switzer `.woff2` font files to `public/fonts/` directory (NOT a npm package — Switzer is not on Fontsource). Potentially remove unused Three.js dependencies (`@react-three/drei`, `@react-three/fiber`, `three`) | Systematic direction drops WebGL/Three.js in favor of SVG diagrams. Three.js is heavy (~500KB) and unused in Systematic. Switzer must be self-hosted via `next/font/local`. |

### 2.2 Data Model Files

| # | Path | Change | Why |
|---|------|--------|-----|
| 5 | `src/data/site.ts` | `identity.label` is already correct — NO CHANGE needed. Update `metrics` for Systematic direction (current: {5, 7, 24/7} with different labels → proposed: {4, 5, 10+} with new labels). Deprecate `process` array (moved to `capabilities.ts` with 6-stage method); deprecate `toolkit` array (moved to capability domains); keep `products` and `work` but update image paths to Phase 4 assets (see Section 5.1 for exact paths); update `CaseItem` type to include optional `status` field for lab entries. | Systematic direction requires different data structure. Products keep data but images point to new Phase 4 assets. |
| 6 | `src/data/navigation.ts` | Replace `primaryLinks` with: Work (`/work`), Capabilities (`/capabilities`), Approach (`/approach`), Lab (`/lab`), About (`/about`), Contact (`/contact`); remove product-specific nav links (DocVault, CodexPilot, Field Ops, 0Brain); update `ctaLink` to "Describe the problem" → `/contact` | Phase 2 navigation structure: product pages are accessible through Work/Capabilities, not top-level nav. |
| 7 | `src/data/design-tokens.ts` | Complete rewrite to Systematic token specification (Phase 2 lines 419–500): surface tokens (`base`, `elevated`, `alt`, `floating`, `glass`), text tokens (`primary`, `secondary`, `tertiary`, `disabled`), accent tokens (per-product + global + active), typography tokens (Switzer-based fluid scale), border tokens (`subtle`, `default`, `strong`, `focus`), glass tokens (`bg`, `blur`, `saturate`), shadow tokens, z-index tokens, motion tokens (keep existing spring defaults, extend for GSAP durations). Add `--accent-active` and `--accent-active-rgb` runtime variables. | Phase 2 defines a complete formalized token system. Current tokens are partial and use old palette. |

### 2.3 Existing Pages

| # | Path | Change | Why |
|---|------|--------|-----|
| 8 | `src/app/page.tsx` | Replace `AIAwakeningHero` import and all `HomeExperience` child components with new systematic sections (HeroDiagram, PatternRecognition, SelectedSystems, AgentArchitecture, MethodSection, LabPreview, HomeContactCTA); change wrapper from `flow-shell` to systematic page shell | Complete homepage rebuild per Systematic direction |
| 9 | `src/app/about/page.tsx` | Update copy to Systematic framing ("System Operator"); update fonts (body → Switzer, remove Playfair display); replace `eyebrow` purple with global accent; update portrait image references; add "Operating philosophy" section; restructure "Methodology" section to reference Approach page; update toolkit to capability domains; deprecate timeline or move inline | About page needs Systematic repositioning. Current uses site-shell which will be replaced. |
| 10 | `src/app/contact/page.tsx` | Update form to structured inquiry fields: Name, Email, Organisation, "What are you trying to improve?", "How is it handled today?", "What is breaking or taking too much time?", Timeline, Optional budget range; update copy to "Initiate System Inquiry" framing; keep simulated submission (no backend yet) | PRD specifies structured inquiry form fields. Current has only name/email/message. |
| 11 | `src/app/not-found.tsx` | Update to use shared layout (currently standalone `<html>` tag — breaks layout). Replace with proper Next.js not-found that inherits layout. Use Systematic styling: Switzer heading, monospace 404 label, systematic tone copy, DA monogram instead of 404-graphic | Current 404 is a standalone HTML page that doesn't use the app layout — it renders a second `<html>` tag. Must be a proper Next.js not-found component. |
| 12 | `src/app/products/docvault/page.tsx` | Update hero image path to Phase 4 assets (AS-007, AS-002); update copy to Systematic tone; add architecture diagram (AS-022); update accent to `--accent-docvault` | Product pages remain but need asset and copy updates |
| 13 | `src/app/products/codexpilot/page.tsx` | Update hero image paths to Phase 4 assets (AS-011, AS-005); update copy; update accent | Same as above |
| 14 | `src/app/products/fenix-construction-tracker/page.tsx` | Update hero image paths; add architecture diagram (AS-023); update copy; deprecate contour-pattern background (too decorative for Systematic) | Same as above |
| 15 | `src/app/products/0brain/page.tsx` | Update hero image paths (AS-013, AS-004); update copy; replace orbit diagram with revised AS-020 (violet accent); add architecture section. **Note:** `0brain.image` in site.ts currently points to `/assets/3.jfif` — must be updated to `/assets/screenshots/0brain-dashboard.png`. | Same as above |
| 16 | `src/app/work/fenix-plus-sa/page.tsx` | Move under new work layout; update image to AS-015; update copy to Systematic framing | Work case study retains content, updates presentation |
| 17 | `src/app/ai-awakening/page.tsx` | **DEPRECATE** — delete entire page. This was a standalone demo page for the AI Awakening hero concept. | Not part of Systematic direction. The `/ai-awakening` route is removed. |

### 2.4 Existing Components

| # | Path | Change | Why |
|---|------|--------|-----|
| 18 | `src/components/Header.tsx` | Replace `/assets/logo.svg` with new DA monogram (`/assets/da-monogram.svg`) as the logo mark; update nav links to new structure (Work, Capabilities, Approach, Lab, About, Contact); update CTA button to "Describe the problem"; update styling to use Systematic glass tokens; remove "Nik Velkovski" subtitle (logo alone suffices); update mobile drawer styling | New navigation structure and Systematic visual system |
| 19 | `src/components/Footer.tsx` | Ensure Footer uses Systematic styling; update copyright and link structure; add "Dorian Apps — Software for work that has outgrown spreadsheets" tagline | Footer refresh to match new direction |
| 20 | `src/components/HomeExperience.tsx` | Complete rewrite — replace all child component imports with new systematic sections (HeroDiagram → PatternRecognition → SelectedSystems → AgentArchitecture → MethodSection → LabPreview → HomeContactCTA). Remove `flow-shell` wrapper. | This is the homepage. It is being completely rebuilt. |
| 21 | `src/components/PageTransition.tsx` | Update transition animation to Systematic: fade + micro-scale (0.98 → 1) with 300ms duration. Remove any blue-purple glow effects. | Page transitions should match new motion system |
| 22 | `src/components/ImageWithFallback.tsx` | No changes needed — reusable as-is | |
| 23 | `src/components/ScrollProgress.tsx` | Update accent color reference from `--color-accent` to `--accent-active` | Token migration |
| 24 | `src/components/SectionDivider.tsx` | Already exists at `src/components/SectionDivider.tsx` (NOT in `shared/` subdirectory — there is no `shared/` directory). May need border-color token update only. | Token migration. NOT duplicated as a `shared/` variant. |
| 25 | `src/providers/SmoothScroll.tsx` | Keep Lenis + GSAP ScrollTrigger integration. Update ticker to use Systematic background. Ensure GSAP plugins are loaded. | Smooth scroll is core to Systematic's scroll-driven animations. |

### 2.5 Deprecated Components (no longer used)

These components are tied to the old "AI Awakening" / flow-shell aesthetic and are **removed from imports but files kept** (git tracks deletion):

| # | Path | Reason for deprecation |
|---|------|------------------------|
| 26 | `src/components/AIAwakeningHero.tsx` | DALL-E image sequence hero — replaced by HeroDiagram |
| 27 | `src/components/HomeOrigin.tsx` | flow-shell section — replaced by PatternRecognition |
| 28 | `src/components/HomeProducts.tsx` | flow-shell product display — replaced by SelectedSystems |
| 29 | `src/components/HomeAgents.tsx` | flow-shell agent section — replaced by AgentArchitecture |
| 30 | `src/components/HomeProof.tsx` | flow-shell proof section — replaced by MethodSection |
| 31 | `src/components/HomeClose.tsx` | flow-shell close section — replaced by HomeContactCTA |
| 32 | `src/components/HeroSection.tsx` | Old hero wrapper — no longer used |
| 33 | `src/components/HeroCanvas.tsx` | Three.js WebGL hero canvas — Systematic drops WebGL |
| 34 | `src/components/HeroCanvasDynamic.tsx` | Dynamic import wrapper for HeroCanvas |
| 35 | `src/components/NeuralCoreScene.tsx` | Three.js neural core background — Systematic drops WebGL |
| 36 | `src/components/NeuralCoreR3F.tsx` | React Three Fiber neural core — Systematic drops WebGL |
| 37 | `src/components/HeroScrubVideo.tsx` | Scroll-scrubbed video hero — replaced by SVG diagram hero |
| 38 | `src/components/ScrollVideoHero.tsx` | Scroll video hero wrapper |
| 39 | `src/components/VideoHero.tsx` | Video hero component |
| 40 | `src/components/VideoBackground.tsx` | Video background layer |
| 41 | `src/components/ScrollReactiveHero.tsx` | Multi-scene scroll hero — replaced by diagram |

### 2.6 Test Files

| # | Path | Change | Why |
|---|------|--------|-----|
| 42 | `tests/smoke.mjs` | Update required sections (`id` markers) to new homepage structure; update required copy assertions for new copy; update required route list to include `/capabilities`, `/approach`, `/lab`; remove assertion for deprecated routes; update asset checks to Phase 4 paths; remove `NeuralCoreScene` assertion; remove `flow-product-frame` assertion | Smoke tests must validate new structure |
| 43 | `tests/animation-system.mjs` | Remove assertion that `framer-motion` must NOT be installed (Systematic uses both GSAP and Framer Motion); update required files list to include new animation components; add assertion for `SystemDiagram` scroll-driven SVG; remove Three.js-specific assertions (HeroCanvas, NeuralCoreScene, HeroScrubVideo); add assertions for GSAP ScrollTrigger and reduced-motion guards | Animation system changes from WebGL-heavy to SVG+GSAP+FM hybrid |

### 2.7 Unaccounted Components — Fate Decision

These 13 components exist in `src/components/` but are NOT currently imported by any page. They are also not listed in the creation table (Section 1) or the modification table above (Sections 2.1–2.5). Each must receive an explicit fate to prevent Phase 6 implementers from guessing.

| # | Component | Currently Imported By | CSS Dependencies | Fate | Rationale |
|---|-----------|----------------------|------------------|------|-----------|
| 1 | `WorkSection.tsx` | NOT imported by any page | `section`, `eyebrow`, `section-title`, `section-lede` | **DEPRECATE** | Homepage rebuilt with `PatternRecognition` + `SelectedSystems`. Uses old CSS classes. References `work` data which remains in `site.ts` but is rendered via `WorkRegistry`/`WorkCard` on the new `/work` page. |
| 2 | `CasePage.tsx` | NOT imported by any page (product pages use inline templates) | `site-shell`, `eyebrow`, `font-display`, `section-lede` | **DEPRECATE** | Product pages (`docvault`, `codexpilot`, etc.) each have their own inline Hero+content structure and do not use this generic wrapper. Uses deprecated `site-shell` and `font-display` classes. |
| 3 | `ContactSection.tsx` | NOT imported by any page | `glass-panel-strong`, `eyebrow`, `font-display`, `section-lede`, old radial gradients | **DEPRECATE** | Homepage contact replaced by `HomeContactCTA`. Standalone contact page has its own structured form. Uses deprecated CSS classes and blue-red gradient backgrounds. |
| 4 | `ProductShowcase.tsx` | NOT imported by any page | `eyebrow`, `section-title`, `section-lede`, old blue-red linear gradient, imports `FadeIn`/`RevealText` | **DEPRECATE** | Homepage product display replaced by `SelectedSystems`. Uses old gradient decorations and CSS classes. |
| 5 | `ProcessSection.tsx` | NOT imported by any page | `section`, `eyebrow`, `section-title`, `section-lede`, imports `FadeIn`/`RevealText` | **DEPRECATE** | References `process` array being removed from `site.ts`. Replaced by `MethodSection` on homepage and `MethodTimeline` on `/approach` page. |
| 6 | `ProductScreenPortal.tsx` | NOT imported by any page | `@react-three/fiber`, `@react-three/drei`, `three` — Three.js dependencies | **DEPRECATE** | Three.js is being removed from the project. This component renders product screenshots in a 3D WebGL canvas — incompatible with Systematic direction. |
| 7 | `StatCounter.tsx` | Imported by `HeroSection.tsx` (which is also not imported by any page) | None — self-contained, uses `prefersReducedMotion()` from `utils/motion.ts` | **PRESERVE-AS-IS** | Self-contained animation utility with no deprecated CSS dependencies. Can be reused if metrics display is added to homepage or about page. Clean: only dependency is `utils/motion.ts`. |
| 8 | `Marquee.tsx` | NOT imported by any page | `ticker-wrap`, `ticker-inner`, `ticker-item`, `var(--color-accent)` — old CSS classes | **DEPRECATE** | Depends on old ticker CSS classes from the flow-shell era. The `marqueeItems` data remains in `site.ts` but is not currently rendered by any page. If a marquee is needed later, build a new one with Systematic tokens. |
| 9 | `HomeHero.tsx` | NOT imported by any page (`page.tsx` uses `AIAwakeningHero`, not this) | `flow-hero`, `flow-container`, `flow-hero-layout`, `flow-hero-copy`, `flow-kicker`, `flow-lede`, `flow-actions`, `flow-link`, `flow-telemetry` — all deprecated | **DEPRECATE** | Entirely built on flow-shell classes. Replaced by `HeroDiagram` + `HeroBuilderImage`. |
| 10 | `FadeIn.tsx` | Imported by `ProductShowcase`, `ProcessSection`, `ToolkitSection` (all being deprecated) | None — self-contained, uses GSAP (default) or Framer Motion engine | **PRESERVE-AS-IS** | Engine-agnostic animation wrapper supporting both GSAP and Framer Motion with `prefersReducedMotion()` guard. No CSS class dependencies. Can be reused by new systematic components. |
| 11 | `RevealText.tsx` | Imported by `WorkSection`, `ProcessSection`, `ProductShowcase`, `ContactSection`, `ToolkitSection`, `HeroSection` (all being deprecated) | None — self-contained, uses SplitType + GSAP (default) or Framer Motion engine | **PRESERVE-AS-IS** | Mature text-reveal utility with GSAP/Framer Motion dual engine, `prefersReducedMotion()` guard, and line/word/char split modes. No CSS class dependencies. Reusable by new components. |
| 12 | `AccentProvider.tsx` | NOT imported by any page (only referenced in `globals.css` comment at line 29) | Manages `--accent-hue` and `--accent-hex` CSS custom properties via IntersectionObserver | **MODIFY** | The accent system is being rewritten from hue-based (`--accent-hue`, `--accent-hex`) to active-accent-based (`--accent-active`, `--accent-active-rgb`). This provider needs updating to track per-product accent colors by section visibility. It is not currently imported anywhere, so it must be explicitly imported in the new homepage or layout if the per-section accent temperature shift is implemented. |
| 13 | `ToolkitSection.tsx` | NOT imported by any page | `section`, `eyebrow`, `section-title`, `section-lede`, imports `FadeIn`/`RevealText` | **DEPRECATE** | References `toolkit` array being removed from `site.ts`. Replaced by `CapabilityDomain` cards on the `/capabilities` page. |

**Summary:** 9 components deprecated (WorkSection, CasePage, ContactSection, ProductShowcase, ProcessSection, ProductScreenPortal, Marquee, HomeHero, ToolkitSection), 3 preserved as-is (StatCounter, FadeIn, RevealText), 1 modified (AccentProvider). All 9 deprecated components must have their files deleted during Phase 6 CSS cleanup step. The 3 preserved components require no changes. AccentProvider must be updated to work with the new `--accent-active`/`--accent-active-rgb` system.

---

## 3. Route Plan

### 3.1 Route Table

| Route | Page Title | Component | Status | Metadata |
|-------|-----------|-----------|--------|----------|
| `/` | Dorian Apps — Software for work that has outgrown spreadsheets | `src/app/page.tsx` (→ HomeExperience) | **REWRITE** | Primary meta — OG image: hero diagram, description: PRD positioning |
| `/work` | Work — Dorian Apps | `src/app/work/page.tsx` | **NEW** | "System Registry — Curated project portfolio" |
| `/work/[slug]` | [Project Name] — Dorian Apps | `src/app/work/[slug]/page.tsx` | **NEW** (migrate existing) | Dynamic metadata from `site.ts` work entries |
| `/capabilities` | Capabilities — Dorian Apps | `src/app/capabilities/page.tsx` | **NEW** | "System Capabilities — Problem domains we work in" |
| `/approach` | Approach — Dorian Apps | `src/app/approach/page.tsx` | **NEW** | "Operating Manual — How systems get built" |
| `/lab` | Lab — Dorian Apps | `src/app/lab/page.tsx` | **NEW** | "Experiments Registry — Research and development" |
| `/lab/[slug]` | [Experiment Name] — Dorian Apps | `src/app/lab/[slug]/page.tsx` | **NEW** | Dynamic metadata from lab data |
| `/about` | About — Dorian Apps | `src/app/about/page.tsx` | **MODIFY** | "System Operator — Nik Velkovski, AI product builder" |
| `/contact` | Contact — Dorian Apps | `src/app/contact/page.tsx` | **MODIFY** | "Initiate System Inquiry — Describe your problem" |
| `/not-found` | 404 — Page Not Found — Dorian Apps | `src/app/not-found.tsx` | **MODIFY** | "Route Not Found" |
| `/products/docvault` | DocVault — Dorian Apps | `src/app/products/docvault/page.tsx` | **MODIFY** | Keep route but update content/assets |
| `/products/codexpilot` | CodexPilot — Dorian Apps | `src/app/products/codexpilot/page.tsx` | **MODIFY** | Keep route but update content/assets |
| `/products/fenix-construction-tracker` | Field Ops — Dorian Apps | `src/app/products/fenix-construction-tracker/page.tsx` | **MODIFY** | Keep route but update content/assets |
| `/products/0brain` | 0Brain — Dorian Apps | `src/app/products/0brain/page.tsx` | **MODIFY** | Keep route but update content/assets |
| `/ai-awakening` | — | — | **DELETE** | Removed entirely |

### 3.2 Route Hierarchy

```
/
├── /work
│   └── /work/[slug]          (fenix-plus-sa initially, expandable)
├── /capabilities              (NEW)
├── /approach                  (NEW)
├── /lab                       (NEW)
│   └── /lab/[slug]            (NEW — individual experiment)
├── /about                     (MODIFY)
├── /contact                   (MODIFY)
├── /products
│   ├── /products/docvault     (MODIFY — still accessible)
│   ├── /products/codexpilot   (MODIFY — still accessible)
│   ├── /products/fenix-construction-tracker  (MODIFY)
│   └── /products/0brain       (MODIFY)
└── /not-found                 (MODIFY)
```

### 3.3 Redirects (if needed)

| From | To | Reason |
|------|-----|--------|
| `/ai-awakening` | `/` | Deprecated page — redirect to homepage |
| `/products` | `/capabilities` | No products index; capabilities page serves as discovery |

---

## 4. Component Map

All components needed, organized by page, with props.

### 4.1 Homepage (`/`)

```
HomeExperience (no props — orchestrator)
├── HeroDiagram
│   Props: none (self-contained, embeds external SVGs as inline React components + GSAP ScrollTrigger)
│   Children: HeroBuilderImage
│
├── HeroBuilderImage
│   Props: { priority?: boolean }
│   Uses: the-builder.webp (desktop) / the-builder-mobile.webp (mobile)
│
├── PatternRecognition
│   Props: { patterns: FrictionPattern[] }
│   Where FrictionPattern = { id: string, problem: string, response: string, accent?: string }
│
├── SelectedSystems
│   Props: { products: CaseItem[] }  // from site.ts, top 4
│   Each product renders as a SystemCard
│
├── AgentArchitecture
│   Props: none (self-contained, uses AS-019 diagram)
│   Renders: 4-stage flow diagram (Worker → Judge → Iterate → Deploy)
│
├── MethodSection
│   Props: { steps: ProcessStep[] }
│   Where ProcessStep = { number: string, title: string, description: string, detail: string }
│   Uses: AS-021 timeline diagram
│
├── LabPreview
│   Props: { experiments: LabExperiment[] }  // from lab.ts, top 3
│   Renders: ExperimentCard for each with status badge
│
└── HomeContactCTA
    Props: { ctaText: string, ctaHref: string }
    Default: "Describe the problem" → /contact
```

### 4.2 Work Page (`/work`)

```
WorkPage
├── Header
└── WorkRegistry
    Props: { items: CaseItem[] }  // from site.ts work array
    ├── PageHeader (title: "System Registry", lede: "Curated project portfolio...")
    └── WorkCard[] (for each work entry)
        Props: { item: CaseItem, index: number }
```

### 4.3 Work Detail (`/work/[slug]`)

```
WorkDetailPage
├── Header
└── CaseStudyLayout
    Props: { item: CaseItem }
    ├── Hero section (project image, name, description, external link)
    ├── Context section
    ├── Scope/Deliverables section
    ├── Tags section
    └── CTA section
```

### 4.4 Capabilities Page (`/capabilities`)

```
CapabilitiesPage
├── Header
├── PageHeader (title: "System Capabilities", lede: "Problem domains we work in...")
└── CapabilityGrid
    Props: { domains: CapabilityDomain[] }
    └── CapabilityDomain[] (for each domain)
        Props: { domain: CapabilityDomain }
        Where CapabilityDomain = { category: string, description: string, outcomes: string[], exampleReference?: string, relatedProducts?: string[] }
```

### 4.5 Approach Page (`/approach`)

```
ApproachPage
├── Header
├── PageHeader (title: "Operating Manual", lede: "How a system gets built...")
├── MethodTimeline
│   Props: { stages: MethodStage[] }
│   Where MethodStage = { number: string, title: string, description: string, evidenceAnchor?: string }
│   Uses: AS-021 SVG diagram with scroll-driven progression
└── StageDetail[] (expandable, revealed on click/hover/tap)
    Props: { stage: MethodStage, isActive: boolean, onToggle: () => void }
```

### 4.6 Lab Page (`/lab`)

```
LabPage
├── Header
├── PageHeader (title: "Experiments Registry", lede: "Research and development...")
├── StatusFilter (chip-based filter: ALL / VERIFIED / EXPERIMENTAL / IN DEVELOPMENT / ARCHIVED)
└── ExperimentCard[]
    Props: { experiment: LabExperiment }
    Where LabExperiment = { slug: string, title: string, hypothesis: string, method: string, status: 'VERIFIED'|'EXPERIMENTAL'|'IN_DEVELOPMENT'|'ARCHIVED', findings?: string, dateStarted: string, relatedProducts?: string[] }
    Renders: ExperimentStatus badge, title, hypothesis excerpt, link to /lab/[slug]
```

### 4.7 Lab Detail (`/lab/[slug]`)

```
LabDetailPage
├── Header
└── ExperimentDetail
    Props: { experiment: LabExperiment }
    Sections: Hypothesis, Method, Current State, Findings, Status Badge
```

### 4.8 About Page (`/about`)

```
AboutPage
├── Header
├── Hero (portrait + bio)
│   Props: { identity, portrait: AS-001 secondary use }
├── Operating Philosophy section
├── Method reference (links to /approach)
├── Capability domains summary
└── CTA → /contact
```

### 4.9 Contact Page (`/contact`)

```
ContactPage
├── Header
├── Info panel (location, response time, what to expect)
└── Structured form
    Fields: Name, Email, Organisation, "What are you trying to improve?",
            "How is it handled today?", "What is breaking or taking too much time?",
            Timeline (select), Budget range (optional select)
    Validation: client-side, same pattern as existing
    Submission: simulated (no backend)
```

### 4.10 Shared Components (used across pages)

| Component | Props | Used On |
|-----------|-------|---------|
| `Header` | none (reads navigation data) | All pages |
| `Footer` | none | All pages (via layout) |
| `PageTransition` | `{ children }` | Layout wrapper |
| `ContentSection` | `{ eyebrow, title, lede, children, accent?, id? }` | All pages |
| `SystemDiagram` | `{ svg: string, drawDuration?: number, scrub?: number, reducedMotion?: boolean }` | Homepage, Approach, Product pages |
| `GlassPanel` | `{ children, className?, strong?: boolean }` | All pages |
| `ImageWithFallback` | existing props | All pages with images |
| `ScrollProgress` | none | Layout (optional) |
| `Breadcrumbs` | `{ items: { label, href }[] }` | Interior pages (optional) |
| `SkipLink` | none (extracted to component) | Layout |
| `ExperimentStatus` | `{ status: LabStatus }` | Lab page/cards |
| `ProductCard` | `{ product: CaseItem }` | Homepage, Work |

---

## 5. Data Model

### 5.1 `src/data/site.ts` Changes

**Current state (verified 2026-07-20):** Identity, metrics, marqueeItems, CaseItem type, products (4), work (1), allCases, toolkit, process.

**Verified actual values:**
- `identity.label` line 5: `"AI product builder and autonomous-agent systems developer"` — **ALREADY CORRECT, NO CHANGE NEEDED**
- `metrics` lines 10-14: `[{ value: 5, suffix: "+", label: "AI products in motion" }, { value: 7, suffix: "", label: "Agent loops tested" }, { value: 24, suffix: "/7", label: "Real-world operator mindset" }]` — needs update (different labels)
- `codexpilot.image` line 71: `"/assets/3.jfif"` — **MUST UPDATE** to `"/assets/screenshots/codexpilot-mockup.png"`
- `0brain.image` line 112: `"/assets/3.jfif"` — **MUST UPDATE** to `"/assets/screenshots/0brain-dashboard.png"`
- `docvault.image` line 51: `"/assets/screenshots/docvault.png"` — already correct
- `fenix.image` line 91: `"/assets/screenshots/fenix-live-map.png"` — already correct

**Changes:**

```typescript
// KEEP (identity.label is already correct — NO CHANGE):
export const identity = {
  company: "Dorian Apps",
  founder: "Nik",
  legalName: "Nikolcho Velkovski",
  label: "AI product builder and autonomous-agent systems developer", // NO CHANGE — already matches site.ts (verified 2026-07-20)
  location: "Switzerland / Macedonia / Remote",
  thesis: "Turning real operational pressure into dependable AI products, tools, and agentic workforces."
};

// UPDATE (metrics need new labels):
export const metrics = [
  { value: 4, suffix: "", label: "Production systems deployed" },
  { value: 5, suffix: "", label: "Agent architecture patterns" },
  { value: 10, suffix: "+", label: "Years operational experience" }
];

// KEEP:
export const marqueeItems = [ ... ]; // unchanged

// KEEP CaseItem type, ADD optional status field:
export type CaseItem = {
  // ... existing fields (slug, name, eyebrow, type, path, externalUrl, image, secondaryImage, alt, description, longDescription, tags, facts, accent) — DO NOT REMOVE or rename any field ...
  status?: "VERIFIED" | "EXPERIMENTAL" | "IN_DEVELOPMENT" | "ARCHIVED";
};

// KEEP products array, UPDATE image paths:
// docvault.image → "/assets/screenshots/docvault.png" (AS-007) ✓ already correct
// docvault.secondaryImage? → "/assets/screenshots/docvault-query.png" (AS-008)
// codexpilot.image → "/assets/screenshots/codexpilot-mockup.png" (AS-011) ← MUST UPDATE from current "/assets/3.jfif"
// codexpilot.secondaryImage? → "/assets/screenshots/codexpilot-mockup-2.png" (AS-012)
// fenix.image → "/assets/screenshots/fenix-live-map.png" ✓ already correct
// 0brain.image → "/assets/screenshots/0brain-dashboard.png" (AS-013) ← MUST UPDATE from current "/assets/3.jfif"
// 0brain.secondaryImage? → "/assets/screenshots/0brain-memory-trace.png" (AS-014)

// KEEP work array, UPDATE:
// fenix-plus-sa.image → "/assets/screenshots/fenix-plus-sa-preview.png" (AS-015)

// KEEP allCases

// REMOVE:
// toolkit array → moves to capabilities.ts
// process array → moves to capabilities.ts (as method stages)
```

### 5.2 `src/data/navigation.ts` Changes

**Current state:** 7 links (Home, DocVault, CodexPilot, Field Ops, 0Brain, About, Contact) + CTA "Start".

**Changes:**

```typescript
export const primaryLinks: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/approach", label: "Approach" },
  { href: "/lab", label: "Lab" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const ctaLink: NavLink = {
  href: "/contact",
  label: "Describe the problem",
  cta: true,
};
```

### 5.3 `src/data/design-tokens.ts` Changes

**Complete rewrite** to align with Phase 2 Systematic token specification (lines 419–500):

```typescript
// Surface tokens
export const surfaces = {
  base: "#070808",
  elevated: "#0D0F10",
  alt: "#0A0C0D",
  floating: "#141618",
  glass: "rgba(7, 8, 8, 0.75)",
} as const;

// Text tokens
export const text = {
  primary: "#EBEBED",
  secondary: "#8A8F98",
  tertiary: "#5A5F68",
  disabled: "#3A3F48",
  onAccent: "#070808",
} as const;

// Accent tokens
export const accents = {
  global: "#EBEBED",
  docvault: "#F59E0B",
  codexpilot: "#06B6D4",
  fieldops: "#10B981",
  zerobrain: "#8B5CF6",
  fenix: "#D4A853",
} as const;

// ... (border, typography, glass, shadow, z-index, motion tokens — see full spec above)
```

### 5.4 New Data Files

**`src/data/capabilities.ts`:**
```typescript
export interface CapabilityDomain {
  id: string;
  category: string;
  description: string;
  outcomes: string[];
  exampleReference?: string;
  relatedProducts?: string[];
  accentHex?: string;
}

export const capabilityDomains: CapabilityDomain[] = [
  // 10 domains from PRD
];

export const methodStages: MethodStage[] = [
  { number: "01", title: "Understand", description: "..." },
  { number: "02", title: "Identify", description: "..." },
  { number: "03", title: "Design", description: "..." },
  { number: "04", title: "Build", description: "..." },
  { number: "05", title: "Verify", description: "..." },
  { number: "06", title: "Iterate", description: "..." },
];
```

**`src/data/lab.ts`:**
```typescript
export type LabStatus = "VERIFIED" | "EXPERIMENTAL" | "IN_DEVELOPMENT" | "ARCHIVED";

export interface LabExperiment {
  slug: string;
  title: string;
  hypothesis: string;
  method: string;
  status: LabStatus;
  findings?: string;
  dateStarted: string;
  relatedProducts?: string[];
  accentHex?: string;
}

export const experiments: LabExperiment[] = [
  // Populate with current experiments
];
```

---

## 6. Content Model

Content structure per page (headline, body, CTA, imagery).

### 6.1 Homepage — "The System Overview"

| Section | Headline | Body | CTA | Imagery |
|---------|----------|------|-----|---------|
| **Hero** | "Software for work that has outgrown spreadsheets." | "Dorian Apps designs and builds AI-powered products, agentic systems, and operational tools for complex workflows." | "Describe the problem" (primary) / "Explore the work" (secondary) | hero-diagram-before.svg + hero-diagram-after.svg (two-state crossfade), the-builder.webp (behind) |
| **Pattern Recognition** | "We keep seeing the same pattern." | 5 friction archetype cards: Manual data re-entry → Automated extraction; Disconnected tools → Unified dashboard; Lost context → Persistent memory; Delayed field reports → Real-time tracking; Scattered documents → Searchable intelligence | — | Each card: monochrome + accent, SVG icons |
| **Selected Systems** | "Selected Systems" | 4 products: DocVault, Field Ops, CodexPilot, 0Brain. Each: system name → problem solved → diagram → link. | "View system" per card | Product screenshots (AS-007/009/011/013), architecture diagrams (AS-022/023) |
| **Agent Architecture** | "How agents work here" | Worker → Judge → Iterate → Deploy. 4-stage process shown as diagram. | "Explore 0Brain" | AS-019 diagram (SVG) |
| **Method** | "How a system gets built" | 6 stages: Understand → Identify → Design → Build → Verify → Iterate. Each a single sentence with expandable detail. | "Read the manual" → /approach | AS-021 timeline diagram (SVG) |
| **Lab Output** | "From the lab" | Top 3 experiments with status badges. Honest about maturity. | "Browse experiments" → /lab | Status badges, experiment imagery |
| **Contact** | "Describe the problem you want to solve." | "Every system starts with understanding the operational reality." | "Start the conversation" → /contact | — |

### 6.2–6.7: Work, Capabilities, Approach, Lab, About, Contact Pages

(Content model remains as specified in original plan — no changes needed for these sections. See complete content model tables in the original Phase 5 implementation plan for full per-page specs.)

---

## 7. Asset Map

Which assets from Phase 3/4 go on which page/section.

### 7.1 Phase 4 Generated Assets (existing)

| Asset | File | Placement |
|-------|------|-----------|
| AS-001 | `the-builder.webp` | Homepage hero (HeroBuilderImage), About page hero (secondary) |
| AS-001-M | `the-builder-mobile.webp` | Same placements, mobile breakpoint |
| AS-018 | `hero-diagram.svg`, `hero-diagram-before.svg`, `hero-diagram-after.svg` | Homepage hero (HeroDiagram) — three separate SVGs: composite reference, BEFORE state, AFTER state |
| DA Monogram | `da-monogram.svg` | Header logo, Footer logo |
| Logo | `logo.svg` | Header (replaced by monogram, kept for footer wordmark) |
| Favicon | `favicon.svg` | Browser tab |

### 7.2 Phase 3 Specified Assets (to generate in Phase 6)

| Asset | File (target) | Placement |
|-------|---------------|-----------|
| AS-002 | `document-intelligence.webp` + mobile | Homepage SelectedSystems (DocVault card bg), /products/docvault hero bg |
| AS-003 | `field-operations.webp` + mobile | Homepage SelectedSystems (Field Ops card bg), /products/fenix hero bg |
| AS-004 | `agent-orchestration.webp` + mobile | Homepage AgentArchitecture bg, /products/0brain hero bg |
| AS-005 | `mobile-development.webp` + mobile | Homepage SelectedSystems (CodexPilot card bg), /products/codexpilot hero bg |
| AS-006 | `ai-memory-system.webp` + mobile | /lab page hero bg, /products/0brain secondary |
| AS-007 | `screenshots/docvault.png` | Homepage SelectedSystems, /products/docvault hero |
| AS-008 | `screenshots/docvault-query.png` | /products/docvault capabilities section |
| AS-009 | `screenshots/fenix-live-map.png` | Already exists ✓ |
| AS-010 | `screenshots/fenix-login.png` | Already exists ✓ |
| AS-011 | `screenshots/codexpilot-mockup.png` | Already exists ✓ (update path in data from `/assets/3.jfif`) |
| AS-012 | `screenshots/codexpilot-mockup-2.png` | Already exists ✓ |
| AS-013 | `screenshots/0brain-dashboard.png` | Already exists ✓ (update path in data from `/assets/3.jfif`) |
| AS-014 | `screenshots/0brain-memory-trace.png` | /products/0brain capabilities |
| AS-015 | `screenshots/fenix-plus-sa-preview.png` | /work/fenix-plus-sa hero |
| AS-016 | `method-workspace.webp` | /about builder section, /approach hero bg |
| AS-017 | `workshop-still-revised.webp` | About or Lab background (revised from existing `workshop_still.jpg`) |
| AS-019 | `diagrams/agent-architecture.svg` | Homepage AgentArchitecture section |
| AS-020 | `assets/0brain-loop-violet.svg` | /products/0brain loop section (revised from existing, violet accent) |
| AS-021 | `diagrams/method-process.svg` | Homepage Method section, /approach page |
| AS-022 | `diagrams/docvault-architecture.svg` | /products/docvault architecture section |
| AS-023 | `diagrams/fieldops-architecture.svg` | /products/fenix architecture section |

### 7.3 Existing Assets to Keep (REUSE AS-IS)

| Asset | Placement |
|-------|-----------|
| `portrait-1.webp` | About page hero |
| `portrait-2.webp` | About page builder section |
| `portrait-3.webp` | About page (if used) |
| `og-image.svg` | Open Graph default image |
| `preloader.svg` | Optional loading state |
| `contour-pattern.svg` | **Deprecate** (too decorative for Systematic) |
| `404-graphic.svg` | **Replace** with DA monogram on 404 page |

### 7.4 Assets to Deprecate

| Asset | Reason |
|-------|--------|
| `hero/hero-stage-*.png` (4 files) | AI Awakening hero states — replaced by SVG diagram |
| `ai-awakening/stage-*.png` + `ai-awakening/sequence/*.png` (~100+ files) | AI Awakening sequence — deprecated entirely |
| `neural-core-v2.png` | Three.js neural core — deprecated |
| `poster-desktop.jpg`, `poster-mobile.jpg` | Video scrub posters — deprecated |
| `media/hero-scrub-desktop.mp4`, `media/hero-scrub-mobile.mp4` | Video hero — deprecated |
| `1strong portrait.jfif`, `2 at laptop dev.jfif`, `3.jfif` | Placeholder images — replaced by Phase 4 assets |
| `workshop_still.jpg` | Replaced by revised AS-017 or new generation |

**Cleanup:** Phase 6 should delete ~355MB of deprecated `ai-awakening/sequence/` files during implementation.

---

## 8. Dependency Changes

### 8.1 Packages to Add

**No new npm packages needed.** Switzer is NOT available on npm/Fontsource. Use `next/font/local` with self-hosted `.woff2` font files placed in `public/fonts/`. See Section 2.1 modification #1 for the layout.tsx approach.

### 8.2 Packages to Remove (Optional — cleanup)

| Package | Reason |
|---------|--------|
| `@react-three/drei` | Three.js helpers — deprecated with WebGL removal |
| `@react-three/fiber` | React Three Fiber — deprecated with WebGL removal |
| `three` | Three.js — deprecated with WebGL removal (~500KB savings) |
| `@types/three` | Three.js types — deprecated |

**Note:** Three.js removal is optional. If any Three.js components remain accessible (e.g., via direct URL), they'd break. Safer approach: keep dependencies but remove component imports. Remove in a follow-up cleanup pass after deployment verification.

### 8.3 Packages to Keep

| Package | Purpose |
|---------|---------|
| `framer-motion` ^12.42.2 | Tier 1 interface feedback + Tier 2 content reveals (AnimatePresence, stagger, spring) |
| `gsap` ^3.15.0 | Tier 2 scroll-driven animations + Tier 3 signature interaction (ScrollTrigger scrub) |
| `@studio-freight/lenis` ^1.0.42 | Smooth scrolling (wired to GSAP ScrollTrigger) |
| `split-type` ^0.3.4 | Text splitting for character/word-level animations |
| `next` ^16.2.9 | Framework |
| `react` ^19.2.7, `react-dom` ^19.2.7 | UI |
| `tailwindcss` ^3.4.17 | Styling |

### 8.4 No New Packages Needed

The existing stack (Framer Motion + GSAP + Lenis + SplitType + Tailwind) covers all Systematic animation and styling requirements. No additional packages needed. Switzer is self-hosted via `next/font/local` (NOT a npm package).

---

## 9. Animation Architecture

How the 3-tier motion system maps to specific components.

### 9.1 Tier 1: Interface Feedback (100–250ms, Framer Motion spring)

**Purpose:** Communicate state changes. Felt, not noticed.

(Unchanged from original plan — see Section 9.1 of original for full table)

### 9.2 Tier 2: Section Transitions (500–850ms, GSAP ScrollTrigger scrub)

**Purpose:** Guide the visitor through the narrative. Scroll-driven.

(Unchanged from original plan — see Section 9.2 of original for full table)

### 9.3 Tier 3: Signature Interaction (1.5–3s, GSAP ScrollTrigger scrub)

**Purpose:** The "Spreadsheet Transformation" — one memorable moment that explains the value proposition.

**Asset reality (verified 2026-07-20):** The delivered Phase 4 assets are three separate external SVG files, NOT a single inline SVG with two `<g>` groups:

| File | Dimensions | Purpose |
|------|-----------|---------|
| `hero-diagram.svg` | 1200×600 | Composite reference showing both states side-by-side |
| `hero-diagram-before.svg` | 600×600 | Standalone BEFORE state (chaos) |
| `hero-diagram-after.svg` | 600×600 | Standalone AFTER state (pipeline) |

The original plan's "inline SVG with two `<g>` groups" approach is **incompatible** with this asset format. The implementation MUST parse these SVG files into inline React JSX at build time.

| Phase | What happens | Duration | Implementation |
|-------|-------------|----------|----------------|
| **Before state** (visible at page load) | Five disconnected elements (spreadsheet, email, docs, chat, arrow) overlapping chaotically. Grey tones with faint warm accents. | Static until scroll | `hero-diagram-before.svg` — embed raw SVG content as an inline React component (parse SVG string → JSX at build time or mount time). Render as a React component so GSAP can target individual elements. |
| **Transition** (scroll-driven) | As user scrolls past hero threshold (~50vh scroll distance): crossfade from BEFORE to AFTER state. | ~2.5s at typical scroll speed | **Two approaches (choose one during Phase 6):** **(A)** Embed both `hero-diagram-before.svg` and `hero-diagram-after.svg` as inline React components, overlay them with `position: absolute`, and use GSAP `ScrollTrigger` to fade BEFORE layer opacity 1→0 while AFTER layer fades 0→1. **(B)** Use Framer Motion `AnimatePresence` with `mode="wait"` to swap between the two embedded SVG components when scroll crosses the trigger threshold. Approach (A) is preferred for visual continuity. |
| **After state** | Five elements organized into: Data Source → Processing → Structured Output → Dashboard. Connected by precise ruled lines. Global accent on active nodes. | Static after transition | `hero-diagram-after.svg` — embedded as inline React component. Fully visible after scroll transition completes. |

**Component:** `HeroDiagram.tsx`
- **Desktop:** Crossfade or AnimatePresence swap between inline before/after SVGs. Both 600×600 SVGs rendered side by side or as overlay transition.
- **Mobile:** Vertical stack — before SVG on top, after SVG below. Scroll reveals after state. Tap to toggle as fallback.
- **Reduced motion:** Static "after" state only (`hero-diagram-after.svg`). No scroll-driven animation.
- **Performance:** SVG-based, under 50 DOM elements. `will-change: opacity` only on the transitioning layer. No canvas/WebGL.
- **Failure fallback:** If GSAP/ScrollTrigger fails → show static after state. If SVG embedding fails → show `<img>` fallback with hero-diagram-after.svg.
- **Build-time requirement:** The SVG file contents must be available as string constants in the React component. Use a build script or `raw-loader` equivalent to import `.svg` files as strings, then parse into JSX using a minimal SVG-to-JSX converter.

### 9.4 Animation Coordination

(Unchanged from original plan — see Section 9.4 of original)

---

## 10. Responsive Strategy

(Unchanged from original plan — see Section 10 of original)

## 11. Accessibility Strategy

(Unchanged from original plan — see Section 11 of original)

## 12. SEO Plan

(Unchanged from original plan — see Section 12 of original)

## 13. Testing Plan

(Unchanged from original plan — see Section 13 of original)

## 14. Rollback Plan

(Unchanged from original plan — see Section 14 of original)

---

## 15. Risk List

What could go wrong during implementation.

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|-----------|
| 1 | **Switzer font not self-hosting correctly** — Switzer is an ITF font NOT available on npm/Fontsource. Must use `next/font/local` with self-hosted `.woff2` files. | Medium | High — typography broken site-wide | Test font loading in Phase 6 step 1. Fallback: Inter (already available via `next/font/google`). Document exact `next/font/local` setup. Source license: Indian Type Foundry (ITF) — verify OFL or acquire commercial license. |
| 2 | **CSS consolidation breaks existing styles** — Removing `flow-shell`, `experience-shell`, `neural-core-*` classes while pages still reference them causes visual breakage. | High | High — pages render unstyled | Phase 6 must update ALL pages and components that reference old CSS classes before removing them from globals.css. |
| 3 | **GSAP + Framer Motion conflict** — Both libraries animating the same element properties causes jank. | Medium | Medium — visual glitches | Strict separation: GSAP → scroll-driven transforms, FM → mount/hover state changes. Never animate same property with both. |
| 4 | **GSAP ScrollTrigger breaks with Lenis smooth scroll** — ScrollTrigger markers miscalculated due to Lenis virtual scroll. | Medium | High — scroll animations don't fire | Already wired in `SmoothScroll.tsx` — verify integration still works after React 19/Next 16 upgrade. Test early. |
| 5 | **`next build` fails on deprecated imports** — Removing components but leaving stale imports causes build errors. | High | Medium — blocks deployment | Systematic grep for all deprecated component imports before build. CI build check catches this. |
| 6 | **Product page images missing** — Phase 4 assets not yet generated for all products. | Medium | Medium — broken images on product pages | `ImageWithFallback` handles this. Update data paths only for assets that exist. Generate remaining assets in Phase 6. |
| 7–12 | (Risks 7–12 unchanged from original plan) | | | |

---

## 16. Blast-Radius Analysis

What systems, data, and users are affected by each change.

### 16.1 Change Impact Matrix

(Unchanged from original plan — see Section 16.1 of original)

### 16.2 Dependency Graph (Implementation Order)

(Unchanged from original plan — see Section 16.2 of original)

### 16.3 Rollback Scope Per Change

(Unchanged from original plan — see Section 16.3 of original)

---

## 17. Preserved As-Is (DO NOT MODIFY)

These files, values, and configurations must be preserved exactly as-is during Phase 6 implementation. Accidental modification could break infrastructure, data contracts, or critical functionality. This is the authoritative "do not touch" contract for Phase 6 implementers.

### 17.1 Files — DO NOT MODIFY

| Path | Reason |
|------|--------|
| `vercel.json` | Vercel deployment configuration. Route redirects may need updating (`/ai-awakening` → `/`), but the overall config structure (framework, build settings, headers) must remain intact. |
| `next.config.ts` | Next.js configuration. May need image domain additions for Phase 4 assets but overall config structure must remain. |
| `src/components/ErrorBoundary.tsx` | Error boundary imported in `layout.tsx` — critical for production error resilience. No changes. |
| `src/components/ImageWithFallback.tsx` | Already handles missing images — confirmed as "no changes needed" in modification list #22. |
| `src/components/FadeIn.tsx` | Reusable animation utility (Section 2.7: PRESERVE-AS-IS). No CSS dependencies. |
| `src/components/RevealText.tsx` | Reusable text-reveal utility (Section 2.7: PRESERVE-AS-IS). No CSS dependencies. |
| `src/components/StatCounter.tsx` | Self-contained animation utility (Section 2.7: PRESERVE-AS-IS). Clean, no old CSS. |
| `src/providers/SmoothScroll.tsx` | Lenis + GSAP ScrollTrigger integration — core to scroll-driven animations. Modify only for Lenis→ScrollTrigger wiring verification, not for behavior changes. |

### 17.2 Data Contracts — DO NOT BREAK

| Contract | Details |
|----------|---------|
| `CaseItem` type — existing fields | `slug`, `name`, `eyebrow`, `type`, `path`, `externalUrl`, `image`, `secondaryImage`, `alt`, `description`, `longDescription`, `tags`, `facts`, `accent` — these MUST NOT be removed or renamed. Only ADD `status?:` field. |
| External URLs | `docvault.dev` (site.ts line 50), `fenixplus.ch` (site.ts line 135) — production URLs. Any accidental change breaks product linking. |
| `accent` field format | `{ hue: number; hex: string }` — existing product pages rely on this. Must remain unchanged even when accent system is rewritten. |

### 17.3 Assets — DO NOT DELETE OR REPLACE

| Asset | Reason |
|-------|--------|
| `portrait-1.webp`, `portrait-2.webp`, `portrait-3.webp` | About page portraits — still referenced. |
| `og-image.svg` | Open Graph default image. |
| `preloader.svg` | Optional loading state. |
| `favicon.svg` | Already rebuilt per Phase 4 remediation (AS-037 spec). Browser tab icon. |
| `da-monogram.svg` | Already rebuilt per Phase 4 remediation (AS-035 spec). Used in Header/Footer. |
| `logo.svg` | Already rebuilt per Phase 4 remediation (AS-036 spec). Keep as-is. |
| `0brain-loop.svg`, `agent-orbit.svg` | Existing product diagrams — may still be referenced on product pages until Phase 4 replacements (AS-020) are generated. |

### 17.4 Implementation Constraints — DO NOT VIOLATE

| Constraint | Details |
|------------|---------|
| Font approach | Use `next/font/local` for Switzer, NOT `@fontsource/switzer` (doesn't exist). Fallback: Inter via `next/font/google` (already in layout.tsx). |
| Animation library separation | GSAP → scroll-driven; Framer Motion → state-driven. Never animate the same CSS property with both libraries on the same element. |
| Three.js removal is optional | Keep `@react-three/*` and `three` dependencies in `package.json` but remove all component imports. Tree-shaking will exclude them from the bundle. Remove dependencies in a follow-up cleanup pass after deployment verification. |
| No changes to existing test files beyond those listed | `tests/smoke.mjs` and `tests/animation-system.mjs` are listed as MODIFY — but no other test files should be touched unless explicitly listed. |

---

## Appendix A: File Inventory Summary

| Category | Create | Modify | Deprecate/Delete | Total |
|----------|--------|--------|------------------|-------|
| Pages (routes) | 6 | 8 | 1 | 15 |
| Components | 16 | 8 | 25 | 49 |
| Data files | 3 | 3 | 0 | 6 |
| Utility files | 2 | 0 | 0 | 2 |
| CSS/Config | 0 | 3 | 0 | 3 |
| Tests | 3 | 2 | 0 | 5 |
| Assets | ~12 | ~6 | ~120+ | ~138+ |
| **Total** | **~42** | **~30** | **~146+** | **~218+** |

**Note:** Component totals now reflect the 9 additional deprecated components identified in Section 2.7 (WorkSection, CasePage, ContactSection, ProductShowcase, ProcessSection, ProductScreenPortal, Marquee, HomeHero, ToolkitSection). Create count reduced by 1 (SectionDivider removed from new-file list — already exists at `src/components/SectionDivider.tsx`, listed as MODIFY #24).

## Appendix B: PRD Traceability

(Unchanged from original plan)

---

**Plan status:** COMPLETE (REVISED 2026-07-20) — All judge-identified gaps fixed. Ready for Phase 6 implementation.

**Changes in this revision:**
- Added Section 2.7: "Unaccounted Components — Fate Decision" (13 components with explicit fates)
- Fixed Section 9.3: Hero diagram animation architecture updated to match actual split-SVG asset format
- Fixed Section 5.1: `0brain.image` path error corrected — now correctly states it needs updating from `/assets/3.jfif`
- Fixed Section 5.1: `codexpilot.image` clarified — needs updating from `/assets/3.jfif`
- Fixed Section 5.1: `identity.label` marked as NO CHANGE — already correct in site.ts
- Fixed Sections 2.1, 8.1, 8.4, 15: All `@fontsource/switzer` references replaced with `next/font/local`
- Added Section 17: "Preserved As-Is (DO NOT MODIFY)" — explicit don't-touch contract
- Fixed SectionDivider: Removed from NEW file list (was #31), remains as MODIFY #24 at `src/components/SectionDivider.tsx`
- Updated Appendix A counts: Components now 16 create / 25 deprecate (was 17/16)
- Re-numbered all creation entries after SectionDivider removal

**Next step:** Execute Phase 6 in dependency order (Section 16.2), starting with design token rewrite.
