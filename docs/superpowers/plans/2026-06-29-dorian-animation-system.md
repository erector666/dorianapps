# Dorian Animation System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate dorianapps.com from a static page to a Next.js App Router site with a premium GSAP/Lenis animation system, scroll-scrubbed hero video, and a restrained Three.js centerpiece.

**Architecture:** Next.js owns routing, metadata, optimized images, and font loading. Client-only animation islands own Lenis, GSAP ScrollTrigger, SplitType text reveals, counters, video scrubbing, and WebGL. Product content stays data-driven so the visual system can change without rewriting copy.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, GSAP, Lenis, SplitType, Three.js, FFmpeg-generated hero video assets, Node smoke tests, Playwright/Lighthouse verification.

---

### Task 1: Guardrails And Tests

**Files:**
- Modify: `tests/smoke.mjs`
- Create: `tests/animation-system.mjs`

- [ ] Write tests that require a Next App Router structure, GSAP/Lenis/SplitType/Three dependencies, no Framer Motion dependency, dynamic WebGL import with SSR disabled, reduced-motion guards, Dorian product copy, generated hero videos, and current design tokens.
- [ ] Run `npm test` and confirm the new tests fail before implementation because the project is still static HTML.
- [ ] Keep `google2177f9c8a60ae3b3.html` untouched.

### Task 2: Dependency And Project Migration

**Files:**
- Modify: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts`
- Create: `next-env.d.ts`

- [ ] Install patched Next/React plus `gsap`, `@studio-freight/lenis`, `split-type`, `three`, TypeScript, Tailwind, ESLint, Playwright, and Lighthouse tooling.
- [ ] Add scripts: `dev`, `build`, `start`, `lint`, `test`, `test:smoke`, `test:animation`, `lighthouse`.
- [ ] Use the currently patched App Router line rather than an unsafe unpatched Next 14 build.

### Task 3: Public Assets And Video

**Files:**
- Create: `public/assets/**`
- Create: `public/media/hero-scrub-desktop.mp4`
- Create: `public/media/hero-scrub-mobile.mp4`

- [ ] Copy supplied assets into `public/assets`.
- [ ] Use FFmpeg to generate a desktop and mobile MP4 from the workstation/founder imagery with slow zoom/pan/crop so scroll scrubbing has visible motion.
- [ ] Preserve screenshots and existing source assets.

### Task 4: App Shell And Design Tokens

**Files:**
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `src/data/site.ts`
- Create: `src/utils/motion.ts`

- [ ] Load fonts with `next/font`, not raw font links.
- [ ] Define warm dark editorial tokens, nav underline CSS, marquee CSS, responsive layout, and reduced-motion rules.
- [ ] Render real product names and descriptions: DocVault, CodexPilot, FENIX Construction Tracker, Fenix Plus SA.

### Task 5: Animation Primitives

**Files:**
- Create: `src/providers/SmoothScroll.tsx`
- Create: `src/components/RevealText.tsx`
- Create: `src/components/FadeIn.tsx`
- Create: `src/components/StatCounter.tsx`
- Create: `src/components/Marquee.tsx`

- [ ] Integrate Lenis with GSAP ScrollTrigger.
- [ ] Ensure all GSAP calls check `prefersReducedMotion()`.
- [ ] Use GSAP contexts and targeted cleanup instead of global trigger destruction from unrelated components.

### Task 6: Hero Media And WebGL

**Files:**
- Create: `src/components/HeroCanvas.tsx`
- Create: `src/components/HeroCanvasDynamic.tsx`
- Create: `src/components/HeroScrubVideo.tsx`
- Create: `src/components/HeroSection.tsx`

- [ ] Dynamically import Three.js canvas with `ssr: false`.
- [ ] Build a dark/minimal particle constellation that reacts to cursor position.
- [ ] Clean up renderer, scene objects, geometry, material, listeners, and animation frames.
- [ ] Map ScrollTrigger progress to video `currentTime` with 24fps quantization and requestAnimationFrame throttling.
- [ ] Fade/scale the canvas out as the hero exits.

### Task 7: Page Sections

**Files:**
- Create: `src/components/Header.tsx`
- Create: `src/components/ProductShowcase.tsx`
- Create: `src/components/ToolkitSection.tsx`
- Create: `src/components/ProcessSection.tsx`
- Create: `src/components/ContactSection.tsx`

- [ ] Use RevealText for headings, FadeIn for cards, StatCounter for hero metrics, and Marquee after hero.
- [ ] Keep supporting motion quieter than the Three.js centerpiece.
- [ ] Avoid 3D card tilts, cursor trails, and excessive parallax.

### Task 8: Documentation And Verification

**Files:**
- Modify: `README.md`
- Modify: `.gitignore`

- [ ] Document the animation architecture and local verification.
- [ ] Run `npm test`, `npm run build`, browser visual checks for desktop/mobile, and Lighthouse mobile performance.
- [ ] Report exact evidence and any environment limitations.
