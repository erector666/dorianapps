# Phase 1 — Visual Research: Dorian Apps Production Website

**Date:** 2026-07-20
**Status:** COMPLETE
**Direction:** Calm, precise, premium, editorial — NOT sci-fi, NOT cyberpunk, NOT generic SaaS

---

## Research Context

Visual references were researched across 8 domains specified by the PRD, with a deliberate exclusion filter: anything that reads as sci-fi, cyberpunk, purple-blue SaaS gradient, neon overload, or generic bento-grid template was discarded. The resulting 10 references span industrial design, architecture, editorial publishing, museum exhibition, technical brands, data visualization, and premium independent creators — each selected for a specific transferable principle relevant to the Dorian Apps positioning: "software for work that has outgrown spreadsheets, documents, and manual coordination."

---

## Reference Table

### 1. Dieter Rams / Braun Industrial Design

| Field | Detail |
|---|---|
| **Reference** | Dieter Rams' 10 Principles for Good Design, applied across 40 years of product design at Braun (1955–1995) — radios, calculators, shelving systems. "Less but better." "Good design is as little design as possible." |
| **Relevant principle** | **Honest reduction.** Every element must justify its existence. A single accent color carries all emotional weight. The grid creates an order that feels inevitable. Decoration is removed until only structure remains — and structure IS the aesthetic. |
| **Intended adaptation** | A strict 12-column layout grid for all sections. One accent hue per project (amber for DocVault, cyan for CodexPilot, green for Field Ops, violet for 0Brain, gold for Fenix Plus SA). Every line, dot, and rule serves layout — zero decorative-only elements. |
| **Elements NOT to copy** | Do NOT use Braun logo styling, product imagery, or the exact gray palette (`#D4D4D4`, `#E8E8E8`). Do NOT replicate Rams' specific product forms. Do NOT adopt the playful mid-century color accents (orange, lime green) that appeared in later Braun eras. |
| **Technical implementation** | Tailwind `grid grid-cols-12` with consistent `gap-16`. CSS custom properties per project accent, swapped via `data-accent` attributes + Framer Motion `AnimatePresence`. Thin rules (`h-px bg-white/5`) for grid demarcation only. No decorative flourishes. |

---

### 2. Tadao Ando — Architecture of Light and Void

| Field | Detail |
|---|---|
| **Reference** | Tadao Ando's architectural philosophy: concrete as canvas, light as material, void as volume. Buildings like the Church of Light (1989) and Chichu Art Museum (2004) use a single slit of light across raw concrete to create emotional gravity. Space itself becomes the medium. |
| **Relevant principle** | **Light as primary design material, not decoration.** In Ando's work, light isn't applied — it's structured. A single beam across a dark volume carries more impact than a dozen glowing elements. Negative space isn't absence — it's reverence. Materials are honest: concrete stays concrete. |
| **Intended adaptation** | Product sections as "exhibition spaces": full-bleed dark background, product content centered and constrained, subtle spotlight glow behind content. Between sections: 120–200px of pure void. Single-point dramatic lighting on 3D objects. The ambient "glow" behind each section shifts hue subtly between products — not a saturated gradient, but a barely-perceptible temperature change. |
| **Elements NOT to copy** | Do NOT use literal concrete textures (too heavy, wrong medium). Do NOT replicate Ando's specific building forms or his signature circular/geometric cut-outs. Do NOT adopt Japanese Zen aesthetics wholesale — Dorian Apps is Swiss engineering, not Japanese minimalism. |
| **Technical implementation** | Three.js `SpotLight` with high intensity, narrow angle, positioned for long dramatic shadows on abstract geometry. CSS `radial-gradient()` with very low opacity (`0.03–0.06`) as ambient glow behind sections. GSAP ScrollTrigger-driven spotlight position. Section margins: `py-32 md:py-48` minimum. |

---

### 3. MUJI / Naoto Fukasawa — "Super Normal" and Design Without Thought

| Field | Detail |
|---|---|
| **Reference** | MUJI's "no-brand" philosophy (founded 1980) and Naoto Fukasawa's "Super Normal" concept: products so well-fitted to life that they become invisible. The wall-mounted CD player (1999) — pull the cord to start music, like a bathroom fan. Design that doesn't announce itself but feels inevitable. |
| **Relevant principle** | **The interface recedes. Content becomes the experience.** MUJI packaging removes everything but the product name and essential information. Fukasawa's objects fit into existing human behaviors rather than demanding new ones. The design is confident enough to not need to prove itself. |
| **Intended adaptation** | Navigation and UI chrome that recedes: glass header at `bg-black/60 backdrop-blur-xl` that exists *over* content, not beside it. Controls appear on hover/focus, not constantly. Product cards: name + one-line description + subtle accent indicator — no cramming of features. The "weight" of the page is in the copy and photography, not the interface chrome. |
| **Elements NOT to copy** | Do NOT adopt MUJI's red accent color. Do NOT use the Japanese "no-brand" aesthetic of kraft paper, simple sans-serif all-caps, or the MUJI product photography style. Do NOT make the interface so invisible it becomes hard to operate. |
| **Technical implementation** | Header: `backdrop-blur-xl bg-neutral-950/60 saturate-150` + `transition-opacity` on scroll. Framer Motion `AnimatePresence` for chrome reveal on hover. Product cards: `p-0` default, `p-4` on hover with subtle border glow via `shadow-[inset_0_0_0_1px_rgba(var(--accent-rgb),0.15)]`. |

---

### 4. Aesop — Restraint as Premium Brand Signal

| Field | Detail |
|---|---|
| **Reference** | Aesop's brand identity (skincare): consistent dark amber bottles, clinical sans-serif typography, abundant negative space, unadorned product photography. Their website uses full-bleed editorial photography, minimal body copy, and a quiet confidence that says "we don't need to convince you — the quality speaks." |
| **Relevant principle** | **Quiet signals confidence.** Simple typography, plenty of whitespace, minimal labeling, neutral colors. Aesop sells a feeling, not soap. Their visual language communicates that the product has been considered so deeply that shouting about it would be disrespectful to the customer's intelligence. |
| **Intended adaptation** | Product section photography: real, high-quality shots in controlled environments. No fake UI mockups, no glowing abstract blobs. Editorial headline scale at ultra-light to regular weight. Product descriptions rendered as considered prose, not bullet-point feature lists. The website should feel like it was designed by someone who respects their audience's ability to judge quality. |
| **Elements NOT to copy** | Do NOT use Aesop's exact bottle photography style or amber-brown packaging. Do NOT replicate their serif/sans-serif typography mix. Do NOT adopt their specific copywriting tone ("formulations for skin, hair & body"). Do NOT use the dark amber/gold accent palette. |
| **Technical implementation** | `next/image` with `priority` and quality=90 for hero photography. Editorial body: `text-lg leading-relaxed max-w-prose`. Section padding: generous `py-24 md:py-32 lg:py-40`. Photography direction: controlled studio lighting, not environmental snapshots. |

---

### 5. Monocle Magazine — Editorial Grid Systems and Restrained Sophistication

| Field | Detail |
|---|---|
| **Reference** | Monocle magazine's print and digital design system: tight grid structures, consistent column widths, typography that does the heavy lifting, photography given breathing room. Their layouts are recognizable not by decoration but by the rhythm of their spacing. |
| **Relevant principle** | **Grid as invisible architecture.** A rigid underlying structure creates freedom on the surface. Monocle's pages feel varied and dynamic, but every element snaps to the same column grid. The consistency IS the sophistication — you sense order without seeing it. |
| **Intended adaptation** | Strict column grid applied consistently across all pages: 12 columns on desktop, 4 on tablet, 1 on mobile. Consistent vertical rhythm (multiples of `8px` spacing). Product case studies follow a predictable but not identical structure: context → problem → solution → outcome. The predictability creates trust; the variation within keeps interest. |
| **Elements NOT to copy** | Do NOT use Monocle's specific magazine-style folio numbering. Do NOT adopt their yellow accent or their section-divider conventions. Do NOT replicate their "Monocle Man" audience persona approach. Do NOT use editorial-style pull quotes as a recurring pattern. |
| **Technical implementation** | Tailwind `grid grid-cols-12 gap-x-8 gap-y-16`. Vertical spacing: all `py` values in multiples of `8` (`py-16`, `py-24`, `py-32`). CSS `scroll-snap-type: y proximity` for section rhythm. Consistent `max-w-7xl mx-auto` wrapper with `px-6 md:px-12`. |

---

### 6. Pentagram Design Consultancy — Case Study Narrative and Typographic Authority

| Field | Detail |
|---|---|
| **Reference** | Pentagram's portfolio website: project case studies presented as editorial narratives. Large, confident typography. Work speaks through images with minimal framing. The studio's brand is communicated through the quality of the work shown, not through self-description. Each case study is a complete story with context, process, and outcome. |
| **Relevant principle** | **Work as evidence. Narrative over feature list.** Pentagram doesn't say "we do good design." They show you the Guggenheim identity, the Natural History Museum rebrand, the Obama Presidential Center typography. The case study format (context → challenge → approach → result) builds credibility step by step. Typography is deliberately weighty — it carries institutional authority. |
| **Intended adaptation** | Each product section on the homepage follows a mini case-study rhythm: operational problem → systematic solution. The About page becomes "Studio" — not a CV, but a statement of method. Typography uses weight (medium/semibold) rather than size alone to establish hierarchy — authoritative, not loud. |
| **Elements NOT to copy** | Do NOT use Pentagram's specific grid system or their partner-naming convention. Do NOT replicate their project thumbnail hover patterns. Do NOT copy their institutional typography scale (too large for a product studio). Do NOT use their "We design for…" rotating tagline format. |
| **Technical implementation** | GSAP ScrollTrigger for case study reveals: each section's text and image animate in sequence (stagger 0.12s). Headings at `font-semibold tracking-tight` with controlled line lengths. Project CTAs as understated links, not prominent buttons: "Explore DocVault →" rather than "LEARN MORE." |

---

### 7. Bloomberg Terminal — Information Density with Precision

| Field | Detail |
|---|---|
| **Reference** | The Bloomberg Terminal UX philosophy: massive information density rendered legible through consistent typography, a restrained color system (amber/orange text on black), and incremental UX refinement over 40 years. The interface conceals complexity through disciplined hierarchy — every pixel of the screen carries functional meaning. |
| **Relevant principle** | **Dense information, precisely organized, is beautiful.** The Terminal proves that "minimalist" doesn't mean "empty." Color is used to convey data state (bid/ask, up/down), never for decoration. The monospace typography signals "this is raw, unmediated data" — it builds trust through transparency. |
| **Intended adaptation** | Monospace typography used ONLY for metadata, labels, version numbers, system states — never body text, never headlines. Product cards show real metrics (e.g., "3 legal systems," "500+ field reports") in a data-display format. Technical specifications rendered with the precision of a spec sheet: clean, factual, no marketing gloss. |
| **Elements NOT to copy** | Do NOT emulate the Terminal's black-and-amber color scheme. Do NOT adopt full-screen information density (Bloomberg is a tool, not a marketing site). Do NOT use monospace for body copy — readability must be preserved. Do NOT replicate the terminal-window framing. |
| **Technical implementation** | `font-mono text-xs text-neutral-500 tracking-wide` for metadata labels. Framer Motion counter animation for metrics: `useSpring` to animate numeric values from 0 to target. Data-point cards: minimal design, key number at display size, label below in mono. Max 3 metrics per section — no data walls. |

---

### 8. MIT Technology Review (Pentagram Redesign) — Technical Publication as System

| Field | Detail |
|---|---|
| **Reference** | The Pentagram-led redesign of MIT Technology Review (2018): a "precise, systems-driven logic" applied across print, screen, and environmental graphics. A stylized "T" monogram with a 45-degree slash that evokes both the letter and the lowercase "r." The design extends "a tradition of graphic invention" through systematic rules, not decoration. |
| **Relevant principle** | **Systematic identity that scales.** The monogram works at favicon size and billboard size. The grid system governs print and web identically. The design language is built on rules that can be propagated, not on one-off compositions. This is engineering-adjacent design — the system matters more than any single layout. |
| **Intended adaptation** | Dorian Apps needs a mark or monogram that works at all scales with the same systematic logic. The visual language should be codified as a set of rules (design tokens → Tailwind config → component library) that produce consistent output regardless of which section or page is being built. The system should feel designed by engineers. |
| **Elements NOT to copy** | Do NOT use MIT TR's specific monogram form or the 45-degree slash concept. Do NOT adopt their exact grid proportions or column widths. Do NOT replicate their color palette (they use a distinctive teal/blue). Do NOT copy their magazine-cover layout logic. |
| **Technical implementation** | Centralize ALL visual decisions in `design-tokens.ts` → Tailwind config → CSS custom properties. Every component consumes tokens, never hardcoded values. Build a Storybook-style component catalog page (internal only) to verify systematic consistency. The mark/logotype should be a single SVG with `currentColor` support. |

---

### 9. Datadog / Atlassian Design Systems — Data Visualization as Clarity

| Field | Detail |
|---|---|
| **Reference** | Datadog's DRUIDS design system and Atlassian's data visualization guidelines. Key principles: use single-color charts with neutral tones (Atlassian), differentiate by shape and line thickness for accessibility (Visma), use color-coded backgrounds to show value changes (Datadog change graphs). Color is functional, not decorative. |
| **Relevant principle** | **Color-coded state communication.** A single brand color with neutral tones makes the important data stand out. Charts use shape differentiation (solid vs. dashed lines, filled vs. outlined points) so color is not the sole differentiator. This is accessible, clear, and professional — the opposite of the "rainbow dashboard" aesthetic. |
| **Intended adaptation** | Any data displays on the site (product metrics, system status indicators) use a single accent color against neutral backgrounds. Status indicators use shape + color (filled circle = active, outlined circle = standby). Charts, if any, use the product's accent color as the sole data color. Never show a multi-colored chart. |
| **Elements NOT to copy** | Do NOT use Datadog's purple-branded dashboards. Do NOT adopt Atlassian's blue-branded visualization style. Do NOT build any "dashboard" pages — this is a marketing site, not a product UI. Data visualizations should only appear to communicate product value, never as the primary interface. |
| **Technical implementation** | SVG-based metric displays (no charting library needed for simple data points). CSS for status indicators: `rounded-full w-2 h-2 bg-(accent)` for filled, `rounded-full w-2 h-2 border border-(accent)` for outlined. If charts are needed: D3.js with a single-color palette, all lines/charts sharing the product accent. |

---

### 10. Tobias van Schneider / Premium Independent Portfolios — Minimal Monochrome Authority

| Field | Detail |
|---|---|
| **Reference** | Tobias van Schneider's personal portfolio (vanschneider.com, Awwwards SOTD 2012): single-color palette (`#000`), fullscreen project presentations, minimal chrome. The work IS the interface. His design philosophy (via his blog DESK and Semplice portfolio builder): "your work should speak so loudly that the portfolio nearly disappears." |
| **Relevant principle** | **Monochrome confidence.** When the portfolio uses only one color (black) and one font, the work itself becomes the color — photography, project imagery, and typography provide all the visual variety. This extreme restraint signals that the creator is confident enough in their work to not need visual tricks. |
| **Intended adaptation** | The Dorian Apps site should feel like the product photography and copy are the stars, not the CSS. Dark base (`#070808`), single type family, one accent per product. No gradient backgrounds, no animated decorative elements, no "look what I can do" CSS flourishes. The technical capability should be felt through execution quality, not demonstrated through show-off effects. |
| **Elements NOT to copy** | Do NOT go to the extreme of a single-color site (Dorian needs the accent-per-product system). Do NOT adopt the "fullscreen image, no text" portfolio pattern. Do NOT use the Semplice portfolio builder or its templates. Do NOT replicate the van Schneider site's exact layout or navigation. |
| **Technical implementation** | Remove ALL decorative-only Three.js elements. Replace `HeroCanvas` wireframe animations with a single, slow-rotating abstract geometric form lit by one spotlight. Remove any particle effects, cursor trails, or ambient floating elements. Every animation must serve a functional purpose: reveal, transition, or feedback. |

---

## Visual Direction Summary

### Color Palette

| Role | Value | Rationale |
|------|-------|-----------|
| **Base background** | `#070808` | Near-black with a barely-perceptible cool undertone. Not `#000000` — pure black reads as unconsidered on screen. The slight warmth prevents the "void" feeling. |
| **Elevated surface** | `#0E0F10` | +7 brightness from base. Cards, sections, and containers sit on this. |
| **Floating panel** | `#141518` | +4 brightness from elevated. Glass panels, modals, tooltips. |
| **Section alternate** | `#0C0D10` | A temperature variant (slightly cooler) for alternating section backgrounds to create visual rhythm. |
| **Body text** | `#EBEBED` | Near-white with slight warmth. Avoids the sterile feeling of pure `#FFFFFF`. |
| **Muted text** | `#8A8F98` | Secondary copy, labels, metadata. Accessible contrast (4.8:1 on base). |
| **Accent: DocVault** | `#F59E0B` (Amber) | Warm, archival — suggests document intelligence. |
| **Accent: CodexPilot** | `#06B6D4` (Cyan) | Cool, precise, code-adjacent. Technical without being cold. |
| **Accent: Field Ops** | `#10B981` (Green) | Operational, field, construction. Tactical but not military. |
| **Accent: 0Brain** | `#8B5CF6` (Violet) | AI/memory systems. The most "tech" accent, used sparingly. |
| **Accent: Fenix Plus SA** | `#D4A853` (Gold) | Swiss service, premium consulting. Quiet luxury. |
| **Glass overlay** | `rgba(7,8,8,0.70)` + `blur(20px)` | Header nav, floating panels. |

**Color rule:** Only ONE accent color is active at any time. Section transitions may show the hue shifting (via GSAP-scrubbed CSS custom property), but never two accents simultaneously.

---

### Typography Hierarchy

| Level | Size | Weight | Tracking | Usage |
|-------|------|--------|----------|-------|
| **Hero display** | `clamp(2.5rem, 8vw, 5.5rem)` | 500 (Medium) | `-0.02em` | Homepage hero headline only. One statement. |
| **Section heading** | `clamp(2rem, 5vw, 3.5rem)` | 400 (Regular) | `-0.01em` | Product section titles, key statements. |
| **Card title** | `1.25rem` | 500 (Medium) | `-0.01em` | Product card names, feature labels. |
| **Body** | `1rem` / `1.125rem` | 400 (Regular) | `normal` | All body copy. Maximum line length: `65ch`. |
| **Label / metadata** | `0.75rem` | 400 (Regular) | `0.04em` (wide) | Specs, dates, version numbers, monospace snippets. |
| **Monospace** | `0.8125rem` | 400 (Regular) | `normal` | Code references, technical specs, system states ONLY. |

**Font stack approach:**
- **Primary sans:** A premium geometric or neo-grotesque with editorial weights (200–600). Candidates: **Satoshi**, **Switzer**, **General Sans**, or a custom selection. NOT Inter (too associated with Linear/Vercel clone-sites).
- **Monospace:** **JetBrains Mono** or **IBM Plex Mono** — both have excellent readability at small sizes. Used ONLY for metadata, labels, and code references.
- **Fallback:** System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`).

**Typography rules:**
- Never use more than 2 font families on a page (sans + mono).
- Never use tight tracking (`-0.02em` or tighter) on body text.
- Never use monospace for paragraphs or headlines.
- Maximum 3 levels of hierarchy visible at any scroll position.
- Line heights: headings at `1.1`, body at `1.6`.

---

### Motion Language

Motion is organized into three tiers:

#### Tier 1 — Interface Feedback (100–250ms)
- Hover: card background shifts `bg-neutral-900` → `bg-neutral-850`, transition `150ms ease-out`
- Button: `bg-white/5` → `bg-white/10` on hover, `spring` with stiffness 260
- Link underline: `scaleX(0)` → `scaleX(1)` on hover, `250ms ease-out`
- Page transitions: `AnimatePresence` fade + micro-scale (`0.98` → `1`), `400ms`

#### Tier 2 — Section Transitions (500–850ms)
- Scroll-driven: GSAP ScrollTrigger with `scrub: 0.6–1.0` for gradient hue shifts between sections
- Content reveal: staggered children entrance (`staggerChildren: 0.08`) as section scrolls into view
- 3D object rotation: proportional to scroll progress within section
- Background accent temperature shift: warm ↔ cool as user scrolls between products

#### Tier 3 — Signature Interaction (1.5–3s)
- The "Dorian method" interaction: a deliberate, engineered animation sequence that explains how the studio thinks. NOT a flashy showcase — a calm, precise demonstration.
- Candidate: a structured problem → solution transition that plays on first scroll past a threshold. Shows a friction state (spreadsheets, manual coordination) transforming into a resolved state (streamlined system). This must be subtle enough to not feel like a "demo" — it should feel like understanding, not presentation.

#### Motion Rules
- All animations respect `prefers-reduced-motion` — fall back to instant transitions.
- No scroll-jacking. Native scroll behavior is preserved; animations ride on scroll, they don't override it.
- No auto-playing sequences. User scroll drives all animation.
- No infinite loops, no particle effects, no cursor trails.
- Page load: content visible in `≤300ms` without animation dependency.
- Keyboard navigation: all interactive elements are focusable, visible focus ring at `outline-2 outline-offset-2`.

---

## Photorealistic Image Direction

All visual assets used on the website must be real, high-quality, and generated with intent. No stock photos. No fake UI screenshots. Every image must feel like it belongs to the same visual universe — consistent in lighting, camera language, materials, contrast, colour temperature, grain, depth of field, aspect ratio, environmental design, and product tone.

A documented image style guide must be created before generating the final asset set. For every image, record: purpose, placement, prompt, model, dimensions, aspect ratio, source, licence/generation ownership, alt text, mobile crop, compression format, and fallback behaviour.

### Six Required Scenes

#### 1. The Builder
A cinematic, realistic image of an independent developer working in a controlled, dark studio environment. Multiple screens display real-looking system diagrams, interfaces, task graphs, logs, and product screens. The composition should feel focused and functional. Do NOT generate Nik's face unless an approved reference is available. Show from behind, silhouette, hands at work, or obscured identity.

#### 2. Document Intelligence
Physical administrative documents, invoices, contracts, project plans, and technical papers spread across a dark work surface, connected visually to a precise digital extraction interface. Real and professional, not a floating hologram. The transition between physical paper and digital representation should feel grounded and systematic.

#### 3. Field Operations
A realistic construction or operational environment where physical work connects to digital coordination: tablet, project plan, schedule, equipment, materials, and live operational information. Avoid workers staring at transparent holograms. The scene should communicate field-to-office coordination through real tools and devices.

#### 4. Agent Orchestration
Represent agent coordination through a physical control-room metaphor or realistic technical workstation. Multiple displays, task graphs, routing states, logs, verification stages. Do NOT create humanoid robots. Use real computing environments — server racks, workstation setups, monitoring displays — to convey orchestration.

#### 5. Mobile Development
Premium close-up of a mobile device and engineering workstation showing repository-aware coding, agent activity, or product testing. Use actual product UI when available. The image should feel like a high-quality product photograph, not a marketing render.

#### 6. AI Memory System
Restrained, cinematic visual representation of stored knowledge, provenance, traces, revisions, and relationships. Grounded in data systems and physical computing environments. No abstract glowing brain illustrations or floating neural networks — show real data infrastructure, storage systems, and knowledge graphs rendered as practical tools.

### Image Consistency Requirements

All generated visual assets must belong to the same visual universe. Consistency must be maintained across every dimension:

**Lighting:** Same studio-lighting approach — controlled, directional, with deliberate shadow falloff.
**Camera language:** Consistent focal length, composition philosophy, and vantage point across scenes.
**Materials:** Surfaces, textures, and physical objects must share the same material quality — nothing should look like it came from a different render engine.
**Contrast:** Uniform black-point and white-point across all images.
**Colour temperature:** Consistent white balance — no images that read warmer or cooler than the set.
**Grain:** Matching noise profile across all generated assets.
**Depth of field:** Same aperture feel — shallow where focus is intentional, deep where information density matters.
**Aspect ratio strategy:** Defined ratios per use case (hero, card, background) applied consistently across the set.
**Environmental design:** Spaces and settings belong to the same designed world — not one scene in a loft and another in a data center with no visual bridge.
**Product tone:** The emotional register of every image must align — calm, precise, professional, never hyperbolic.

### Image Documentation Standard

For every generated image in the final asset set, record the following metadata:

| Field | Description |
|-------|-------------|
| **Purpose** | Where and why this image is used (e.g., "DocVault hero background") |
| **Placement** | Exact page section and responsive breakpoint behaviour |
| **Prompt** | The full generation prompt used |
| **Model** | Which model and version produced the image |
| **Dimensions** | Native resolution in pixels |
| **Aspect ratio** | The intended aspect ratio and crop strategy |
| **Source** | Generation platform or tool |
| **Licence** | Ownership and usage rights for the generated asset |
| **Alt text** | Accessible description for screen readers |
| **Mobile crop** | How the image is cropped or repositioned on mobile viewports |
| **Compression format** | File format and compression settings (WebP, AVIF, etc.) |
| **Fallback behaviour** | What displays if the image fails to load (placeholder, colour, gradient) |

---

### Key Guardrails — What NOT to Do

#### Color & Atmosphere
- ❌ No neon anything. No cyan-on-black, no magenta glows, no purple-blue gradients.
- ❌ No "cyberpunk" color palette (amber terminal text on black, green matrix rain, red digital overlays).
- ❌ No SaaS gradient mesh backgrounds (the purple-to-blue blob that every AI startup uses).
- ❌ No rainbow data visualization dashboards.
- ❌ No gold/brass "luxury" accents (wrong category — Dorian is engineering, not concierge).
- ❌ No pure white (`#FFFFFF`) text on pure black (`#000000`) — always use slightly off-white and tinted black.

#### Layout & Surface
- ❌ No bento grid layouts (rounded cards arranged in a grid with varying sizes).
- ❌ No excessive rounded corners (`rounded-3xl` on every card).
- ❌ No glassmorphism overdose — glass should be used on the header nav only, and maybe ONE floating panel max.
- ❌ No floating 3D icons hovering above cards.
- ❌ No "features grid" with icon-per-feature — tell the story, don't list specs.
- ❌ No cookie-cutter section patterns (hero → logos → features → testimonials → CTA).

#### Typography & Copy
- ❌ No gradient text on body copy (headings only, and sparingly).
- ❌ No decorative terminal code (fake `$ npm install` in hero sections).
- ❌ No "we build things for the web" or "AI-powered solutions" copy — be specific about what problem each product solves.
- ❌ No framework logos as decoration — the work speaks, not the stack.

#### Motion & Interaction
- ❌ No cursor-following glow effects.
- ❌ No particle.js or similar floating particle effects.
- ❌ No scroll-jacking (locking scroll to force animations).
- ❌ No auto-playing video or audio.
- ❌ No typewriter text in hero (overused by every AI company).
- ❌ No drag-to-interact 3D objects — scroll should drive everything; user interaction is passive.

#### Imagery & Assets
- ❌ No AI-generated sci-fi illustrations (the existing 355MB of DALL-E assets).
- ❌ No stock photos of "diverse teams in offices."
- ❌ No cartoon robots, brain illustrations, or circuit-board backgrounds.
- ❌ No fake holograms or "digital twin" 3D renders.
- ❌ No cryptocurrency visual language (no glowing coins, no blockchain hexagons).

#### Overall
- If it appears on a "Top 10 SaaS Website Designs 2024" list, question it.
- If it would look at home on a crypto whitepaper, reject it.
- If you can't explain what functional purpose an element serves, remove it.
- The site should make someone who runs a construction company feel understood, not confused.

---

## References Consulted

1. Dieter Rams, *Ten Principles for Good Design* (1970s) — via artdesignideas.com, Heurio, UX Design CC
2. Tadao Ando, architectural philosophy — via Blake Crosley, Artchitectours, Shizen Style
3. Naoto Fukasawa, "Super Normal" philosophy — via Stakarts, Sabukaru Online, Design Sojourn
4. MUJI brand philosophy — via Martin Roll, Sabukaru Online, muji.eu
5. Aesop brand identity — via aesop.com, The Voy Design, Instagram/Aesop
6. Monocle magazine editorial design — via The End Creative Agency, Behance, Medium/Greg Kupferschmid
7. Pentagram design consultancy — via pentagram.com, Pentagram/work
8. Bloomberg Terminal UX — via bloomberg.com/company, Hacker News, Medium/Kat Choi
9. MIT Technology Review Pentagram redesign (2018) — via technologyreview.com, Pentagram
10. Datadog DRUIDS / Atlassian / Visma data visualization guidelines — via Supernova.io
11. Tobias van Schneider portfolio — via Awwwards, vanschneider.com, A1 Gallery
12. Linear.app and Stripe.com visual language analysis — via YouTube/404roy, Design MD, Medium/Design Bootcamp
13. 2025–2026 web design trends — via Rebekah Read Creative, TheeDigital, Admiral Studios, Plerdy, Blacksmith Agency
14. Existing Dorian Apps codebase: `design-tokens.ts`, `HeroCanvas.tsx`, `HomeHero.tsx`, `site.ts`
15. Existing visual reference: `/root/visual-direction-table.md` (18 rows, used as cross-reference, NOT copied)

---

*End of Phase 1 — Visual Research. This document informs Phase 2 (Design Token Specification) and Phase 3 (Component Architecture).*
