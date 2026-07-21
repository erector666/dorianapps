# Asset Generation Log — Dorian Apps Website

**Repository:** `/root/dorianapps`
**Date of generation:** 2026-07-20
**Operator:** Sam (Hermes Agent)

---

## Generation Tool and Model

| Property | Value |
|---|---|
| **Tool** | Mistral FLUX (via `image_generate`) |
| **Model** | `flux-pro` (text-to-image only) |
| **Image format** | WebP (lossy, quality 85) |
| **Post-processing** | Python/Pillow — center-crop + LANCZOS upscale |

---

## AS-001 / AS-001-M — The Builder (Hero Establishing Shot)

### Desktop variant (`the-builder.webp`)

- **Dimensions:** 2560 x 1440 (16:9)
- **File size:** ~94 KB
- **Prompt used:**
  > Cinematic shot from behind a developer at a controlled dark studio workstation. Multiple displays showing real-looking system diagrams, interface mockups, and product screens. The builder identity is obscured — shown from behind or silhouette. Hands visible on keyboard. Warm task-lamp glow on the desk surface, cool ambient in shadows. No face visible. No sci-fi elements. Real monitor glow, real cable management, real workspace. Photorealistic, ~5000K color temperature, shallow depth of field, subtle film grain.
- **Post-processing:**
  1. Center-crop to 2560x1440 using Pillow Image.crop()
  2. Upscale via Image.LANCZOS resampling
  3. Save as WebP (lossy, quality 85)
- **Licensing:** Generated (owned)

### Mobile variant (`the-builder-mobile.webp`)

- **Dimensions:** 750 x 1334 (9:16 portrait)
- **File size:** ~43 KB
- **Prompt:** Same as desktop — different generation seed or different crop
- **Post-processing:**
  1. Center-crop to 750x1334 (portrait orientation, focus on hands and screens)
  2. Upscale via Image.LANCZOS resampling
  3. Save as WebP (lossy, quality 85)
- **Licensing:** Generated (owned)

---

## AS-018 — Hero Diagram: Spreadsheet Transformation

### `hero-diagram.svg`

- **Dimensions:** 1200 x 600 viewBox
- **File size:** ~11.5 KB
- **Tool:** Hand-crafted SVG
- **Description:** Two-state diagram showing spreadsheet chaos to systematic pipeline. BEFORE (left half): five disconnected elements — spreadsheet grid fragment, email thread, document icons, chat bubble, overlapping chaotically. AFTER (right half): same elements reorganized into Data Source to Processing to Structured Output to Dashboard pipeline.
- **Post-processing:** None — hand-crafted SVG
- **Licensing:** Original creation (owned)

### `hero-diagram-before.svg` + `hero-diagram-after.svg`

- **Derived from:** `hero-diagram.svg` (split into two separate state SVGs for two-state animation)
- **Before:** 600 x 600 viewBox — chaos state only (left half of original)
- **After:** 600 x 600 viewBox — pipeline state only (right half of original, x-shifted)
- **Purpose:** Two-state animation via CSS/GSAP scroll-driven transition
- **Licensing:** Original creation (owned)

---

## AS-035 — D/A Monogram Mark

### `da-monogram.svg`

- **Dimensions:** 64 x 64 viewBox
- **File size:** ~1.1 KB
- **Tool:** Hand-crafted SVG
- **Description:** Geometric D/A interlocking monogram. Clean architectural lines, single weight (stroke-width: 4), currentColor support, no gradients. The D is formed by a vertical bar and arch; the A is formed by two diagonals and a crossbar, intersecting the D interior space.
- **Post-processing:** None — hand-crafted SVG
- **Licensing:** Original creation (owned)

---

## AS-036 — Full Logo Lockup

### `logo.svg`

- **Dimensions:** 480 x 80 viewBox (6:1 ratio)
- **File size:** ~1.6 KB
- **Tool:** Hand-crafted SVG (rebuilt from spec)
- **Description:** D/A monogram (AS-035 geometry, 64x64) on the left + DORIAN wordmark in Inter/Switzer Medium 500 on the right. Off-white (#EBEBED) wordmark, currentColor on monogram. Letter-spacing: 0.15em. No gradients, no accent dot, no APPS sub-text.
- **Previous version issues (fixed):**
  - viewBox was 400x100 (4:1) now 480x80 (6:1)
  - Font was Helvetica Neue weight 300 now Inter/Switzer Medium 500
  - Had 2 linearGradient definitions removed
  - Had amber accent dot with glow filter removed
  - Had APPS sub-text removed
  - Had amber gradient separator line removed
- **Post-processing:** None — hand-crafted SVG
- **Licensing:** Original creation (owned)

---

## AS-037 — Favicon

### `favicon.svg`

- **Dimensions:** 64 x 64 viewBox
- **File size:** ~1.3 KB
- **Tool:** Hand-crafted SVG (redesigned from AS-035)
- **Description:** D/A monogram (same geometry as AS-035) on dark rounded-rect background (#070808). Off-white mark (#EBEBED). No gradients — solid colors only.
- **Previous version issues (fixed):**
  - Used orange-to-gold linear gradient replaced with solid #EBEBED
  - Used Georgia serif DA text replaced with geometric D/A monogram paths
  - Circular background with gradient replaced with rounded-rect solid #070808
- **Post-processing:** None — hand-crafted SVG
- **Licensing:** Original creation (owned)

---

## Verification Checklist

| Asset | Path | Status |
|---|---|---|
| AS-035 Monogram | /root/dorianapps/public/assets/da-monogram.svg | Created |
| AS-036 Logo | /root/dorianapps/public/assets/logo.svg | Rebuilt |
| AS-037 Favicon | /root/dorianapps/public/favicon.svg | Redesigned |
| AS-018 Before | /root/dorianapps/public/assets/hero-diagram-before.svg | Split from original |
| AS-018 After | /root/dorianapps/public/assets/hero-diagram-after.svg | Split from original |
| Provenance Log | /root/dorianapps/docs/asset-generation-log.md | Created |
