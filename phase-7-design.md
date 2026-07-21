# Phase 7 — Cinematic Hero Transformation Sequence

> Replaces `HeroDiagram` + `HeroBuilderImage` with a single `HeroTransformation` component that combines the-builder.webp with the before/after SVGs in a sticky scroll-driven 4-stage sequence.

---

## 1. Technical Approach

### 1.1 Layout Architecture

```
┌─────────────────────────────────────────────────────┐
│  .hero-transform-scroll-space  (height: 400vh)      │
│  ┌───────────────────────────────────────────────┐  │
│  │ .hero-transform-sticky (position: sticky;     │  │
│  │  top: 0; height: 100vh; overflow: hidden)     │  │
│  │                                                │  │
│  │  Layer 1: the-builder.webp  (full-frame bg)   │  │
│  │  Layer 2: before-fragments (5 positioned <g>) │  │
│  │  Layer 3: chaos-arrows (dashed SVG paths)     │  │
│  │  Layer 4: after-fragments (6 positioned <g>)  │  │
│  │  Layer 5: pipeline-arrows (solid SVG paths)   │  │
│  │  Layer 6: copy-overlay (stage statements)     │  │
│  └───────────────────────────────────────────────┘  │
│                                                     │
│  [ScrollTrigger pin: start="top top",              │
│   end="bottom bottom", scrub=1.0]                  │
└─────────────────────────────────────────────────────┘
```

**Pin spacing:** The sticky container is `position: sticky; top: 0; height: 100vh`. The outer scroll-space is `height: 400vh`. GSAP ScrollTrigger pins the sticky container from `"top top"` to `"bottom bottom"` of the scroll-space, giving us 300vh of scrub travel (400vh − 100vh viewport = 300vh of effective scroll range).

**Why not position: fixed with ScrollTrigger pin?** Using native `position: sticky` avoids the layout jump that GSAP `pin: true` causes when the pin activates. The sticky container participates in normal flow while remaining visually fixed. GSAP's ScrollTrigger still drives the animation timeline via `scrub: true` over the scroll-space element's bounds.

### 1.2 Builder Image Transition

The builder image transitions from a full-frame portrait to a subtle architectural backdrop across all 4 stages:

| Progress | Scale   | Opacity | Filter        | Role                          |
|----------|---------|---------|---------------|-------------------------------|
| 0.00     | 1.00    | 1.00    | blur(0px)     | Full portrait, hero anchor    |
| 0.25     | 0.85    | 0.90    | blur(0px)     | Slight recession begins       |
| 0.50     | 0.55    | 0.50    | blur(2px)     | Background, fragments overlay |
| 0.75     | 0.38    | 0.18    | blur(6px)     | Distant backdrop              |
| 1.00     | 0.35    | 0.12    | blur(8px)     | Ambient texture               |

`transformOrigin: "50% 50%"` throughout — the builder image recedes into the center, not toward any edge. The blur filter ramp is intentionally gentle (max 8px) to stay within the "systematic / editorial" aesthetic — no dreamy or sci-fi blur.

### 1.3 Before Diagram Fragments (Unstable/Disconnected)

The before SVG is decomposed into 5 individually-positioned fragment layers. Each fragment is rendered as an inline `<svg>` element containing only its `<g>` group, absolutely positioned within the sticky container.

**Fragments extracted from `hero-diagram-before.svg`:**

| Fragment ID | Content           | Native Position | Native Rotation |
|-------------|-------------------|-----------------|-----------------|
| `frag-spreadsheet` | Grid + values     | `(40, 70)`      | `-8°`           |
| `frag-document`    | PDF document icon | `(55, 230)`     | `+12°`          |
| `frag-email`       | Email thread      | `(310, 60)`     | `+5°`           |
| `frag-chat`        | Chat bubble       | `(60, 370)`     | `−15°`          |
| `frag-card`        | Small data card   | `(280, 350)`    | `−22°`          |

In stage 1, fragments enter sequentially with subtle drift — each one fades in at its native rotation with a small random offset to emphasize disconnection. In stage 2, all fragments are visible at full opacity. Fragments gently oscillate (±2px, ±1°) to communicate "instability" without resorting to glitch or shake (violates guardrails).

**Chaos arrows:** The 4 dashed connector paths from the before SVG are rendered as a single inline SVG layer with `stroke-dashoffset` animation controlling their visibility. They fade in during stage 1 alongside the fragments and dissolve during stage 3.

### 1.4 After Diagram (Complete System)

The after SVG is decomposed into 6 fragment layers that appear during stage 3 and resolve fully in stage 4.

**Fragments extracted from `hero-diagram-after.svg`:**

| Fragment ID        | Content              | Target Position |
|--------------------|----------------------|-----------------|
| `frag-datasource`  | Data Source node     | Top-left        |
| `frag-processing`  | Processing+AI node   | Top-right       |
| `frag-output`      | Structured Output    | Bottom-left     |
| `frag-dashboard`   | Dashboard node       | Bottom-right    |
| `frag-banner`      | Result banner        | Below pipeline  |
| `frag-arrows`      | Pipeline connectors  | Between nodes   |

Each after fragment fades in from `opacity: 0; scale: 0.92` during stage 3 (progress 0.55–0.72). The pipeline arrows use `stroke-dasharray` + `stroke-dashoffset` for a path-drawing effect — the connectors appear to "draw themselves" from source to destination.

### 1.5 Intermediate Stage Diagrams

**Stage 3 (Orchestration, progress 0.50–0.75)** is the critical visual transition. Instead of generating a new intermediate SVG, we use:

1. **Fragment dissolve/reveal:** Before fragments fade out (0.50–0.60) while after fragments fade in (0.55–0.72). The 0.05 overlap creates a brief moment where both systems are partially visible — the "handoff."

2. **Positional drift:** Before fragments drift toward their nearest after-fragment target position, blurring as they go. The drift is subtle — 15–30px movement maximum — so it reads as "reorganization" rather than "flying elements."

3. **Arrow swap:** Chaos dashed arrows dissolve (opacity → 0) between 0.50–0.58. Pipeline solid arrows draw in (stroke-dashoffset → 0) between 0.58–0.70. The gap creates a clean reset moment.

4. **CSS mask transition on builder:** A radial-gradient mask on the builder image contracts during stage 3 (from `circle(100%)` to `circle(40%)`), pulling focus to the center where the pipeline resolves. This avoids stacking the builder atop the pipeline.

No new SVG assets are needed. The intermediate visual is achieved purely through animated opacity, position, scale, blur, and mask.

### 1.6 Timeline Structure

```
Scroll Progress:  0.00 ─────── 0.25 ─────── 0.50 ─────── 0.75 ─────── 1.00
                   │   STAGE 1  │   STAGE 2  │   STAGE 3  │   STAGE 4  │
                   │  PROBLEM   │ RECOGNITION│ORCHESTRAT. │  CLARITY   │
                   │            │            │            │            │
Builder image:     ████████████ ████████░░░░ ████░░░░░░░░ ██░░░░░░░░░░
  scale:           1.00 → 0.85  0.85 → 0.55  0.55 → 0.38  0.38 → 0.35
  opacity:         1.00 → 0.90  0.90 → 0.50  0.50 → 0.18  0.18 → 0.12
  blur:            0px           0px → 2px    2px → 6px    6px → 8px

Before fragments:  ░░░░████████ ████████████ ████░░░░░░░░
  entrance:        staggered
                   (0.05-0.17)
  visibility:      fading in    fully opaque  fading out

After fragments:                                         ░░░░████████ ████████████
  entrance:                                                        staggered
                                                                   (0.55-0.72)
  visibility:                                               fading in   fully opaque

Chaos arrows:      ░░░░████████ ████████████ ████░░░░░░░░
Pipeline arrows:                                     ░░░░████████ ████████████

Stage copy:        ████████████ ████████████ ████████████ ████████████
                   crossfading   crossfading   crossfading   crossfading
                   each stage    each stage    each stage    each stage
```

Each stage boundary includes a 0.05 overlap for crossfading the stage copy.

---

## 2. Stage Breakdown

### Stage 1 — Problem (progress 0.00 → 0.25)

| Attribute            | Detail                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Progress range**   | 0.00 – 0.25                                                             |
| **Primary visual**   | `the-builder.webp` at scale 1.00 → 0.85, opacity 1.00 → 0.90. Before fragments enter staggered: spreadsheet at 0.05, document at 0.08, email at 0.11, chat at 0.14, card at 0.17. Each enters at native rotation + small random offset (±8px x, ±6px y). |
| **Supporting statement** | "Work that has outgrown spreadsheets."                              |
| **Key technique**    | Fragment entrance sequencing with `gsap.fromTo()` staggered via timeline position labels. Builder image parallax (slight scale-down on scroll). Fragments start at `opacity: 0, rotate: native+5°` → `opacity: 1, rotate: native`. |
| **Transition**       | Builder begins its slow recession. Last fragment (card) settles at 0.22. Stage copy crossfades to stage 2 copy at 0.23–0.27. |

### Stage 2 — Recognition (progress 0.25 → 0.50)

| Attribute            | Detail                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Progress range**   | 0.25 – 0.50                                                             |
| **Primary visual**   | Builder at scale 0.85 → 0.55, opacity 0.90 → 0.50, blur 0px → 2px. All 5 before fragments fully visible with chaos arrows connecting them. Subtle instability oscillation on fragments (±2px, ±1° wiggle via sine-based offset in GSAP onUpdate). |
| **Supporting statement** | "Scattered across emails, documents, chats — disconnected."         |
| **Key technique**    | Subtle oscillation via `gsap.quickTo()` or onUpdate callback driving `translateX/Y` and `rotate` on each fragment with a small sine amplitude. Chaos arrows at full opacity. Builder recedes with `scale` + `filter: blur()` ramp. |
| **Transition**       | Fragments begin losing their oscillation at 0.48. Builder blur increases. Stage copy crossfades to stage 3 copy at 0.48–0.52. |

### Stage 3 — Orchestration (progress 0.50 → 0.75)

| Attribute            | Detail                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Progress range**   | 0.50 – 0.75                                                             |
| **Primary visual**   | **Dual overlay:** Before fragments dissolve (opacity → 0, 0.50–0.60). After fragments materialize (opacity 0 → 1, scale 0.92 → 1.0, 0.55–0.72). Builder at scale 0.55 → 0.38, opacity 0.50 → 0.18, blur 2px → 6px. Pipeline arrows draw via stroke-dashoffset (0.58–0.70). Builder radial mask contracts from `circle(100%)` to `circle(40%)`. |
| **Supporting statement** | "Connected by AI. Data flows where it should."                      |
| **Key technique**    | Dual opacity ramp (before-out / after-in with 0.05 overlap window). Stroke-dashoffset path-drawing for pipeline connectors. Radial-gradient mask contraction on builder image. Each before fragment drifts 15–30px toward nearest after counterpart for organic reorganization feel. |
| **Transition**       | Pipeline fully drawn by 0.72. Builder reaches near-minimum presence. Stage copy crossfades to stage 4 copy at 0.73–0.77. |

### Stage 4 — Operational Clarity (progress 0.75 → 1.00)

| Attribute            | Detail                                                                 |
|----------------------|-------------------------------------------------------------------------|
| **Progress range**   | 0.75 – 1.00                                                             |
| **Primary visual**   | After diagram fully resolved: all 4 pipeline nodes, connector arrows, result banner. Builder at scale 0.38 → 0.35, opacity 0.18 → 0.12, blur 6px → 8px — a distant ambient texture. Subtle ambient glow via `box-shadow` or SVG filter on the pipeline nodes. |
| **Supporting statement** | "Automated. Accurate. Always current."                              |
| **Key technique**    | Static resolution. Pipeline nodes settle to their final positions. Result banner pulses subtly (`opacity: 0.8 ↔ 1.0`, 3s cycle) for an "alive system" feel without violating guardrails. Builder image serves as atmospheric depth layer. |
| **Transition**       | The sequence completes. The sticky container unpins and scrolls away naturally. Below this section, the existing "The Builder" copy section follows (unchanged layout — the builder image no longer needs its own section since it was the hero anchor). |

---

## 3. Component Architecture

### 3.1 New File

`/root/dorianapps/src/components/home/HeroTransformation.tsx`

This single component replaces both `HeroDiagram` and `HeroBuilderImage`. It renders the full sticky scroll sequence.

### 3.2 Props

```typescript
interface HeroTransformationProps {
  /** Optional className for the outer scroll-space wrapper */
  className?: string;
}
```

No external data props required. All copy, asset paths, and animation parameters are embedded within the component — there is no reuse case for this specific hero sequence.

### 3.3 State Machine

```typescript
type Stage = "problem" | "recognition" | "orchestration" | "clarity";

interface ComponentState {
  stage: Stage;
  progress: number;         // 0.0–1.0 global scroll progress
  stageProgress: number;    // 0.0–1.0 within current stage
  isReducedMotion: boolean;
  isMobile: boolean;
  hasMounted: boolean;      // for SSR hydration guard
}
```

**Stage derivation** (computed, not stored):
```typescript
function deriveStage(progress: number): Stage {
  if (progress < 0.25) return "problem";
  if (progress < 0.50) return "recognition";
  if (progress < 0.75) return "orchestration";
  return "clarity";
}
```

**Reduced motion** is respected at two levels:
1. If `prefersReducedMotion()` is true, the entire GSAP timeline is skipped and static panels are rendered (see section 5).
2. If the viewport is `<768px`, a simplified stacked layout replaces the sticky container (see section 4).

### 3.4 GSAP Timeline Structure

```typescript
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: scrollSpaceRef.current,
    start: "top top",
    end: "bottom bottom",
    scrub: 1.0,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      const p = self.progress; // 0.0–1.0
      updateStageState(p);
    },
  },
});

// ── Builder image ──
tl.fromTo(builderRef.current,
  { scale: 1, opacity: 1, filter: "blur(0px)" },
  { scale: 0.35, opacity: 0.12, filter: "blur(8px)", ease: "none" },
  0 // starts at progress 0
);

// ── Builder radial mask ──
tl.fromTo(builderMaskRef.current,
  { clipPath: "circle(100% at 50% 50%)" },
  { clipPath: "circle(40% at 50% 50%)" },
  0.50 // contracts during stage 3 only
);

// ── Before fragments: staggered entrance ──
const beforeTimings = [0.05, 0.08, 0.11, 0.14, 0.17];
beforeFragments.forEach((ref, i) => {
  tl.fromTo(ref.current,
    { opacity: 0, scale: 0.85, rotate: nativeRotation[i] + 5 },
    { opacity: 1, scale: 1,   rotate: nativeRotation[i], duration: 0.08, ease: "power2.out" },
    beforeTimings[i]
  );
  // Fade out during stage 3
  tl.to(ref.current,
    { opacity: 0, scale: 0.92, filter: "blur(3px)", duration: 0.10, ease: "power2.in" },
    0.50
  );
});

// ── Chaos arrows ──
tl.fromTo(chaosArrowsRef.current, { opacity: 0 }, { opacity: 1 }, 0.05);
tl.to(chaosArrowsRef.current, { opacity: 0 }, 0.50);

// ── After fragments: staggered entrance ──
const afterTimings = [0.55, 0.58, 0.62, 0.66, 0.70, 0.72]; // 6 fragments
afterFragments.forEach((ref, i) => {
  tl.fromTo(ref.current,
    { opacity: 0, scale: 0.92 },
    { opacity: 1, scale: 1, duration: 0.07, ease: "power2.out" },
    afterTimings[i]
  );
});

// ── Pipeline arrows: stroke-dashoffset path draw ──
// Set dasharray via JS before timeline
tl.fromTo(pipelineArrowsRef.current,
  { strokeDashoffset: totalLength },
  { strokeDashoffset: 0, duration: 0.12, ease: "power2.inOut" },
  0.58
);
```

**Key GSAP patterns used:**
- Timeline position parameter (`number` = absolute progress) for precise stage alignment
- `scrub: 1.0` for smooth 1:1 scroll binding
- `invalidateOnRefresh: true` to recalculate on resize
- `filter: "blur(Npx)"` animated through GSAP (GPU-composited in Chromium)
- `clipPath` animated through GSAP (string interpolation supported)

**Staggered oscillation** (stage 2, progress 0.25–0.50) is NOT driven by the GSAP timeline (timeline doesn't support loops). Instead, it uses a separate `gsap.quickTo()` or `requestAnimationFrame` loop gated by `progress >= 0.25 && progress <= 0.50`:

```typescript
const oscillate = (p: number) => {
  if (p < 0.25 || p > 0.50) return;
  const t = performance.now() * 0.001;
  beforeFragments.forEach((ref, i) => {
    const phase = i * 0.7;
    const x = Math.sin(t * 1.2 + phase) * 2;
    const y = Math.cos(t * 0.9 + phase) * 2;
    const r = Math.sin(t * 0.6 + phase) * 1;
    if (ref.current) {
      ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${nativeRotation[i] + r}deg)`;
    }
  });
};
```

### 3.5 Page Integration

In `/root/dorianapps/src/app/page.tsx`, the hero section changes from:

```tsx
// OLD — two separate components
<div className="home-hero-grid">
  <div className="home-hero-copy">...</div>
  <HeroDiagram />
</div>

<section className="section ...">
  <HeroBuilderImage />
  <div>...</div>
</section>
```

To:

```tsx
// NEW — single transformation component
<HeroTransformation className="home-hero-grid" />
```

The `HeroTransformation` component renders its own wrapper with the `home-hero-grid` class AND contains the hero copy as part of its layout. The "Builder" section below loses the builder image (it now lives in the hero) — only the text column remains:

```tsx
<section className="section border-t border-white/10 content-section-alt">
  <div className="container">
    <div className="max-w-2xl">
      <p className="eyebrow mb-4">The Builder</p>
      <h2 className="section-title mb-6">...</h2>
      <p className="text-muted leading-relaxed">...</p>
      <Link href="/about" className="cta-primary mt-8 inline-flex">...</Link>
    </div>
  </div>
</section>
```

---

## 4. Mobile Adaptation (< 768px)

The sticky scroll-driven approach is fundamentally broken on mobile for three reasons:
1. Safari iOS has unreliable `position: sticky` behavior inside scroll containers.
2. Touch scrolling doesn't produce the smooth continuous progress that `scrub: true` needs.
3. The visual complexity overwhelms a small viewport.

### 4.1 Simplified Stacked Layout

On `<768px`, the component renders a **static stacked layout** instead of the sticky scroll container:

```
┌──────────────────────┐
│                      │
│  Hero Copy (H1, lede,│
│  CTA buttons)        │
│                      │
├──────────────────────┤
│                      │
│  the-builder.webp    │
│  (mobile crop:       │
│   the-builder-       │
│   mobile.webp,       │
│   750×1334)          │
│  opacity: 0.85       │
│                      │
├──────────────────────┤
│                      │
│  4 Stage Panels      │
│  (vertical stack,    │
│   each with:         │
│   - stage copy       │
│   - relevant SVG     │
│     fragment)        │
│                      │
│  Panel 1: Problem    │
│  Panel 2: Recognition│
│  Panel 3: Orchestr.  │
│  Panel 4: Clarity    │
│                      │
└──────────────────────┘
```

### 4.2 Effects Removed/Reduced

| Effect                | Desktop                       | Mobile                        |
|-----------------------|-------------------------------|-------------------------------|
| Sticky scroll pin     | ✓ 400vh scroll-space          | ✗ Removed — static layout     |
| Fragment oscillation  | ✓ Subtle ±2px sine wiggle     | ✗ Removed                     |
| Blur filter animation | ✓ 0px → 8px animated          | ✗ Removed — no blur           |
| Stroke-dashoffset draw| ✓ Pipeline arrows draw in     | ✗ Removed — static render     |
| Radial mask contract  | ✓ circle(100%) → circle(40%)  | ✗ Removed                     |
| Builder scale/opacity | ✓ Full GSAP ramp              | ✗ Static render only          |
| Stage copy crossfade  | ✓ Opacity crossfade on scroll | ✗ Static text per panel       |
| Fragment entrance seq | ✓ Staggered GSAP              | ✗ All fragments visible       |

### 4.3 Touch-Safe Interaction

- No `pointer-events: none` on any visible element (ensures tap targets work).
- All panels use `overflow: visible` — no inner scrollable regions that trap touch gestures.
- CTA buttons remain at natural tap target size (≥44×44px).
- `touch-action: manipulation` on the outer wrapper to prevent double-tap zoom interference.

---

## 5. Reduced Motion

### 5.1 Detection

```typescript
const prefersReduced = typeof window !== "undefined"
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
```

Checked once on mount via `useEffect`. Also re-checked on `matchMedia` change listener for runtime preference changes.

### 5.2 Static Panels

When reduced motion is active, the entire GSAP timeline is skipped. Instead, the component renders **4 static panels** in a vertical stack within the sticky container (same visual structure as mobile but at desktop proportions):

Each panel occupies exactly `100vh` height (so 400vh total scroll-space is consumed without animation). Panels are styled with `position: absolute; inset: 0;` and shown one at a time via a simple opacity switch driven by the same ScrollTrigger progress — but with `scrub: false` and instant snap:

```typescript
// Reduced-motion: instant stage switching
ScrollTrigger.create({
  trigger: scrollSpaceRef.current,
  start: "top top",
  end: "bottom bottom",
  onUpdate: (self) => {
    const stage = deriveStage(self.progress);
    // Instantly show the correct panel, hide others
    panels.forEach((panel, i) => {
      panel.style.opacity = stages[i] === stage ? "1" : "0";
    });
  },
});
```

### 5.3 Narrative Preservation

All 4 stage statements are always visible in their respective panels. The full narrative (problem → recognition → orchestration → clarity) is preserved. No information is lost — only the smooth animation is removed.

---

## 6. Performance Budget

### 6.1 Per-Frame Operation Budget

The GSAP `onUpdate` callback fires on every scroll tick (tied to Lenis RAF loop, ~60fps). Each frame must complete within ~8ms to stay under the 16ms frame budget (leaving 8ms for browser paint/composite).

| Operation                          | Est. Cost | Limit                  |
|------------------------------------|-----------|------------------------|
| Derive stage from progress         | ~0.01ms   | 1× per frame           |
| Update stage copy opacity          | ~0.05ms   | 1 DOM write per frame  |
| Oscillation loop (stage 2 only)    | ~0.50ms   | 5 element transforms   |
| Sync GSAP scrub                    | ~0.20ms   | Handled by GSAP internals |

**Max DOM operations per scroll frame: ~6** (5 fragment transforms + 1 copy opacity).

This is well within budget. The oscillation loop is gated behind `progress >= 0.25 && progress <= 0.50` and is early-exited otherwise.

### 6.2 Image Layer Count

| Layer                     | Type        | Count | Compositing    |
|---------------------------|-------------|-------|-----------------|
| the-builder.webp          | `<img>`     | 1     | GPU texture     |
| Before fragment SVGs      | inline SVG  | 5     | Vector raster   |
| Chaos arrows              | inline SVG  | 1     | Vector raster   |
| After fragment SVGs       | inline SVG  | 6     | Vector raster   |
| Pipeline arrows           | inline SVG  | 1     | Vector raster   |
| Stage copy                | `<div>`     | 1     | Text compositing|

**Total: 15 DOM layers.** This is reasonable — each SVG fragment is small (a few KB of path data). The builder image is the only large raster (94 KB, 2560×1440) and is GPU-composited via its own layer (will-change: transform).

**Promoted layers:** The builder image gets `will-change: transform, opacity, filter`. Before and after fragment containers get `will-change: transform, opacity`. Chaos/pipeline arrows get `will-change: opacity`. These hints are removed via `onComplete` cleanup after the timeline finishes.

### 6.3 Blur Filter Budget

| Stage    | Blur on Builder | Notes                                    |
|----------|-----------------|------------------------------------------|
| 1        | 0px             | No cost                                  |
| 2        | 0–2px           | Negligible — 1 blur pass                 |
| 3        | 2–6px           | Moderate — GPU handles well at this size |
| 4        | 6–8px           | Max budget — acceptable for 1 element    |

The blur filter is applied to **only one element** (the builder image) and ramps up gradually. At 8px maximum, this stays within the performance profile of modern browsers. The blur is applied via CSS `filter` which triggers GPU compositing (not a repaint).

**Guard:** If `navigator.hardwareConcurrency < 4` or the device is flagged as low-power, clamp max blur to 4px and skip the radial mask contraction.

---

## 7. CSS Requirements

### 7.1 New Classes in `globals.css`

```css
/* ── Hero Transformation Sequence ── */

/* Outer scroll-space — provides the 400vh travel for the sticky container */
.hero-transform-scroll {
  position: relative;
  width: 100%;
  height: 400vh;
  /* The sticky child scrolls through this space */
}

/* Sticky viewport container — stays fixed while user scrolls through .hero-transform-scroll */
.hero-transform-sticky {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: var(--surface-base, #070808);
}

/* Each absolutely-positioned layer inside the sticky container */
.hero-transform-layer {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* allow clicks to pass through to underlying elements */
}

/* Builder image layer */
.hero-transform-builder {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform, opacity, filter;
  transform-origin: center center;
}

/* Builder image mask container — for the radial clip-path */
.hero-transform-builder-mask {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* SVG fragment containers */
.hero-transform-fragment {
  position: absolute;
  will-change: transform, opacity;
  pointer-events: none;
}

/* Stage copy overlay */
.hero-transform-copy {
  position: absolute;
  bottom: clamp(2rem, 6vh, 4rem);
  left: 50%;
  transform: translateX(-50%);
  width: min(90%, 600px);
  text-align: center;
  z-index: 20;
  pointer-events: none;
}

.hero-transform-copy-text {
  font-family: var(--font-display, "Inter", sans-serif);
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 600;
  line-height: 1.3;
  color: var(--color-text, #EAEAEC);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
  transition: opacity 0.4s var(--ease-in-out);
}

/* Stage indicator dots */
.hero-transform-indicator {
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 20;
}

.hero-transform-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  transition: background 0.3s ease, transform 0.3s ease;
}

.hero-transform-dot[data-active="true"] {
  background: var(--color-accent, #8B5CF6);
  transform: scale(1.4);
}

/* ── Responsive: Mobile (< 768px) ── */
@media (max-width: 767px) {
  .hero-transform-scroll {
    height: auto;
  }

  .hero-transform-sticky {
    position: relative;
    height: auto;
    overflow: visible;
  }

  /* Mobile: stacked panels instead of sticky overlay */
  .hero-transform-mobile-panels {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .hero-transform-mobile-panel {
    position: relative;
    padding: 3rem 1.5rem;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hero-transform-mobile-panel svg {
    width: 100%;
    max-width: 340px;
    height: auto;
    margin: 1.5rem 0;
  }

  .hero-transform-mobile-copy {
    font-family: var(--font-display, "Inter", sans-serif);
    font-size: 1.125rem;
    font-weight: 600;
    text-align: center;
    color: var(--color-text);
    margin-top: 0.75rem;
  }

  .hero-transform-mobile-builder {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 0.75rem;
    opacity: 0.85;
    margin-bottom: 1rem;
  }

  /* Hide desktop layers on mobile */
  .hero-transform-layer,
  .hero-transform-copy,
  .hero-transform-indicator {
    display: none;
  }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  .hero-transform-sticky {
    /* Container still scrolls, but no animation */
    scroll-behavior: auto;
  }

  .hero-transform-layer {
    transition: none !important;
  }

  .hero-transform-fragment,
  .hero-transform-builder {
    will-change: auto;
  }
}
```

### 7.2 Existing Classes to Remove

After migration, the following CSS classes become unused and should be removed from `globals.css`:

- `.hero-diagram-scene` (lines 246–253)
- `.hero-diagram-scene img` (lines 255–261)
- `.hero-diagram-stage` (lines 263–271)
- `.hero-diagram-stage .hero-diagram-before, .hero-diagram-stage .hero-diagram-after` (lines 273–282)
- `.hero-diagram-label` (lines 284–295)
- `.hero-diagram-label--before` (lines 297–299)
- `.hero-diagram-label--after` (lines 301–303)
- `.hero-diagram-label-sub` (lines 305–311)
- `.hero-diagram-divider` (lines 313–315)
- `.hero-diagram-stage` responsive block (lines 317–329)
- `.hero-builder-image` (lines 331–336)
- `.hero-builder-image img` (lines 338–342)

---

## 8. Copy

Each stage has a single supporting statement displayed at the bottom-center of the sticky viewport. The text crossfades between stages.

| Stage              | Copy                                                         |
|--------------------|--------------------------------------------------------------|
| 1 — Problem        | Work that has outgrown spreadsheets.                         |
| 2 — Recognition    | Scattered across emails, documents, chats — disconnected.    |
| 3 — Orchestration  | Connected by AI. Data flows where it should.                 |
| 4 — Clarity        | Automated. Accurate. Always current.                         |

These lines echo the voice established in the existing site copy: direct, unadorned, editorial. No exclamation marks, no marketing superlatives. Each statement is a single sentence that anchors the visual stage.

### Stage transition copy fallbacks (used in mobile panels and reduced-motion):

The same 4 lines are used. On mobile, each panel shows its stage statement alongside its visual. On reduced-motion, each static panel shows its statement. No alternate copy path needed.

---

## Appendix: Implementation Sequence

The recommended build order for this component:

1. **Scaffold the component file** — `HeroTransformation.tsx` with the sticky scroll container, basic layers, and ScrollTrigger setup.
2. **Builder image layer** — wire up GSAP scale/opacity/blur ramp against scroll progress. Verify smooth scrub with Lenis.
3. **Before fragments** — extract 5 fragment inline SVGs, position them, wire up staggered entrance + stage-3 dissolve.
4. **After fragments** — extract 6 fragment inline SVGs, position them, wire up staggered entrance.
5. **Arrow layers** — chaos arrow fade, pipeline arrow stroke-dashoffset draw.
6. **Stage copy** — position the copy overlay, wire up crossfade between stages.
7. **Stage 2 oscillation** — RAF-based subtle wiggle on before fragments.
8. **Radial mask** — apply and animate clip-path on builder during stage 3.
9. **Mobile adaptation** — static stacked layout with responsive breakpoint.
10. **Reduced motion** — static panel switching with instant snap.
11. **Cleanup** — remove old HeroDiagram and HeroBuilderImage, update page.tsx, remove old CSS.
