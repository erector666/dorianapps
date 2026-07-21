# Phase 3 — Asset Specification: Dorian Apps Website

**Date:** 2026-07-20
**Status:** COMPLETE
**Direction:** Systematic (Phase 2 selected direction)
**Reference:** Phase 0 Orientation, Phase 1 Visual Research, Phase 2 Experience Concept

---

## Document Purpose

This document is the complete, authoritative asset manifest for every visual element needed across all pages of the rebuilt Dorian Apps website. It specifies 13 properties per asset, identifies source/generation method, marks reuse vs. creation status, and provides the single source of truth for asset procurement and generation.

**Total assets specified:** 73

---

## Reuse Disposition Summary

| Disposition | Count | Explanation |
|---|---|---|
| **REUSE AS-IS** | 7 | Existing assets that require zero modification |
| **REUSE WITH REVISION** | 7 | Existing assets needing restyle/color/tone update for new direction |
| **CREATE NEW** | 52 | Assets that must be generated, captured, or built from scratch |
| **DEPRECATE** | 7 | Existing assets explicitly NOT reused (bulk of 355MB ai-awakening not individually listed) |

---

## 1. PHOTOREALISTIC HERO SCENES

Six scenes from Phase 1 Photorealistic Image Direction. These are the primary environmental photography for section backgrounds, hero establishing shots, and product context imagery. Generated via Mistral AI (FLUX) or DALL-E. All must adhere to the Phase 1 Image Consistency Requirements: ~5000K colour temperature, controlled directional lighting, shallow depth of field (where focus is intentional), subtle matching film grain, uniform black/white point.

---

### AS-001 — The Builder (Hero Establishing Shot)

| Property | Value |
|---|---|
| **Asset ID** | `AS-001` |
| **Purpose** | Hero establishing shot — the primary visual for the homepage hero section and the About page. Communicates "serious builder at work" in under 3 seconds. |
| **Page and section** | Homepage hero (primary); secondary use on About page hero |
| **Required dimensions** | 2560 × 1440 (desktop), 750 × 1334 (mobile crop) |
| **Aspect ratio** | 16:9 |
| **Visual description** | Cinematic shot from behind a developer at a controlled dark studio workstation. Multiple displays showing real-looking system diagrams, interface mockups, and product screens. The builder's identity is obscured — shown from behind or silhouette. Hands visible on keyboard. Warm task-lamp glow on the desk surface, cool ambient in shadows. No face visible. No sci-fi elements. Real monitor glow, real cable management, real workspace. |
| **Motion requirement** | Static background with subtle parallax on scroll (translateY at 0.15× scroll speed). Opacity fade-in on section entry. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — tighter crop focusing on hands and screens, portrait orientation. Separate `AS-001-M` asset. |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 180 KB (desktop), 80 KB (mobile) |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser — generated from Phase 1 scene description. |
| **Licensing status** | Generated (owned) |

---

### AS-002 — Document Intelligence

| Property | Value |
|---|---|
| **Asset ID** | `AS-002` |
| **Purpose** | Section background for DocVault product section and DocVault product page. Shows the paper-to-digital transition. |
| **Page and section** | Homepage — "Selected Systems" section (DocVault card background); `/products/docvault` hero background |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Physical administrative documents — invoices, contracts, project plans, technical papers — spread across a dark wood or matte-black work surface. Connected visually (via subtle illuminated scan-lines or a tablet screen in frame showing the extracted digital version) to a precise digital interface. The transition between paper and digital is grounded and systematic. Amber accent warmth in the light. No floating holograms. |
| **Motion requirement** | Static with scroll-driven reveal (opacity + translateY on section entry) |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — `AS-002-M`, tighter crop on documents + screen |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 160 KB |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser |
| **Licensing status** | Generated (owned) |

---

### AS-003 — Field Operations

| Property | Value |
|---|---|
| **Asset ID** | `AS-003` |
| **Purpose** | Section background for Field Ops / FENIX product section |
| **Page and section** | Homepage — "Selected Systems" section (Field Ops card background); `/products/fenix-construction-tracker` hero background |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | A realistic construction/field environment: tablet on site showing live map and project data, safety helmet nearby, project plans partially visible, construction materials in soft-focus background. Natural daylight mixed with screen glow. The scene communicates field-to-office coordination through real tools and devices. Green accent in subtle details (screen elements, safety vest). No workers staring at transparent holograms. |
| **Motion requirement** | Static with scroll-driven reveal |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — `AS-003-M` |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 160 KB |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser |
| **Licensing status** | Generated (owned) |

---

### AS-004 — Agent Orchestration

| Property | Value |
|---|---|
| **Asset ID** | `AS-004` |
| **Purpose** | Section background for Agent Architecture section and 0Brain product page |
| **Page and section** | Homepage — "Agent Architecture" section background; `/products/0brain` hero background |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | A physical control-room metaphor via a technical workstation. Multiple monitors displaying task graphs, routing states, verification logs, agent status panels. Server rack LEDs in soft-focus background. The arrangement feels like a serious operations center — not a gamer setup. Cool violet accent on screen elements. No humanoid robots. No glowing brain illustrations. Real computing environment. |
| **Motion requirement** | Static with scroll-driven reveal |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — `AS-004-M` |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 160 KB |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser |
| **Licensing status** | Generated (owned) |

---

### AS-005 — Mobile Development

| Property | Value |
|---|---|
| **Asset ID** | `AS-005` |
| **Purpose** | Section background for CodexPilot product section |
| **Page and section** | Homepage — "Selected Systems" section (CodexPilot card background); `/products/codexpilot` hero background |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Premium close-up of an Android mobile device showing a code diff or repository interface, beside a laptop showing matching IDE view. Engineering workstation context — mechanical keyboard, notebook, coffee. The image feels like a high-quality product photograph, not a marketing render. Cyan accent on screen UI elements. Clean, precise composition. |
| **Motion requirement** | Static with scroll-driven reveal |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — `AS-005-M` |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 160 KB |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser — OR actual product photograph if CodexPilot APK is functional |
| **Licensing status** | Generated (owned) — or verified product photograph if available |

---

### AS-006 — AI Memory System

| Property | Value |
|---|---|
| **Asset ID** | `AS-006` |
| **Purpose** | Supporting imagery for 0Brain memory infrastructure concept and Lab page |
| **Page and section** | `/products/0brain` — "The loop" section background; `/lab` page header background |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Restrained, cinematic visual of data infrastructure: storage arrays, network switches with subtle indicator lights, a knowledge graph rendered on a monitor showing provenance traces and entity relationships. Grounded in real computing hardware — server racks, cable management, cooling. No abstract glowing brain illustrations. No floating neural networks. Practical tools for data systems. Violet accent in subtle monitor glow. |
| **Motion requirement** | Static with scroll-driven reveal |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — `AS-006-M` |
| **File format** | WebP (lossy, quality 85) |
| **Maximum target file size** | 160 KB |
| **Source or generation method** | Mistral AI (FLUX) or DALL-E via browser |
| **Licensing status** | Generated (owned) |

---

## 2. PRODUCT SCREENSHOTS

Real product evidence. Critical for credibility. Screenshots must be verified captures from live products or repository builds — never fabricated mockups.

---

### AS-007 — DocVault Dashboard Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-007` |
| **Purpose** | Primary product evidence for DocVault |
| **Page and section** | Homepage — "Selected Systems" DocVault card; `/products/docvault` hero panel |
| **Required dimensions** | 2400 × 1650 (native capture, displayed at ~1200px wide) |
| **Aspect ratio** | ~16:11 (native UI) |
| **Visual description** | DocVault dark-mode document intelligence dashboard showing: document list with search, an expanded document with AI-extracted metadata, citation-backed answer panel. Amber accent (#F59E0B) on active UI elements. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No — responsive `next/image` handles scaling |
| **File format** | PNG (lossless for UI clarity) or WebP (lossy, quality 90) |
| **Maximum target file size** | 200 KB |
| **Source or generation method** | Verified screenshot from live docvault.dev — capture at 2× resolution, optimize |
| **Licensing status** | Verified screenshot (owned) |

---

### AS-008 — DocVault Additional Screenshot (Search/Query)

| Property | Value |
|---|---|
| **Asset ID** | `AS-008` |
| **Purpose** | Secondary evidence — shows document search and RAG query in action |
| **Page and section** | `/products/docvault` — "Capabilities" or "Use cases" section |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | DocVault interface showing a natural-language query with citation-backed answer, source document highlight, and relevance scores. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 180 KB |
| **Source or generation method** | Verified screenshot from live docvault.dev |
| **Licensing status** | Verified screenshot (owned) |

---

### AS-009 — Field Ops Live Map Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-009` |
| **Purpose** | Primary product evidence for Field Ops / FENIX |
| **Page and section** | Homepage — "Selected Systems" Field Ops card; `/products/fenix-construction-tracker` hero panel |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | FENIX live satellite map showing worker and vehicle locations with green accent markers. Project sidebar with active sessions. Current and verified. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 200 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/screenshots/fenix-live-map.png` if verified current. If stale, recapture from live app. |
| **Licensing status** | Verified screenshot (owned) |

---

### AS-010 — Field Ops Login Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-010` |
| **Purpose** | Secondary product evidence — shows FENIX login/auth screen |
| **Page and section** | `/products/fenix-construction-tracker` — hero panel (overlay on primary screenshot) |
| **Required dimensions** | 720 × 480 (displayed as inset) |
| **Aspect ratio** | 3:2 |
| **Visual description** | FENIX login screen with green accent, clean auth form. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 60 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/screenshots/fenix-login.png` if verified current |
| **Licensing status** | Verified screenshot (owned) |

---

### AS-011 — CodexPilot Primary Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-011` |
| **Purpose** | Primary product evidence for CodexPilot — **replaces `3.jfif` placeholder** |
| **Page and section** | Homepage — "Selected Systems" CodexPilot card; `/products/codexpilot` hero panel |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | CodexPilot Android app interface showing: repository browser, code diff view with syntax highlighting, or AI coding agent chat. Dark theme. Cyan accent (#06B6D4) on UI elements. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG (lossless for UI) or WebP (quality 90) |
| **Maximum target file size** | 200 KB |
| **Source or generation method** | **CREATE NEW** — If functional APK exists: capture from Android device/emulator. If not: generate realistic UI mockup consistent with product description (Kotlin/Jetpack Compose dark theme). Mark clearly as "prototype" if mockup. |
| **Licensing status** | Verified screenshot (owned) — or generated mockup (owned, with "prototype" label) |

---

### AS-012 — CodexPilot Secondary Screenshot (Diff View)

| Property | Value |
|---|---|
| **Asset ID** | `AS-012` |
| **Purpose** | Secondary evidence — shows code diff/review feature |
| **Page and section** | `/products/codexpilot` — "Capabilities" section |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | Close-up of code diff interface with syntax highlighting, accept/reject controls. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 180 KB |
| **Source or generation method** | **CREATE NEW** — capture from device or generate mockup |
| **Licensing status** | Verified screenshot or generated mockup (owned) |

---

### AS-013 — 0Brain Dashboard Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-013` |
| **Purpose** | Primary product evidence for 0Brain — **replaces `3.jfif` placeholder** |
| **Page and section** | Homepage — "Selected Systems" 0Brain card; `/products/0brain` hero panel |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | 0Brain agent memory dashboard showing: agent session timeline, memory retrieval results, verification status indicators. Dark theme. Violet accent (#8B5CF6) on UI elements. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG (lossless for UI) or WebP (quality 90) |
| **Maximum target file size** | 200 KB |
| **Source or generation method** | **CREATE NEW** — If 0Brain is deployed: capture from live dashboard. If not: generate realistic dashboard mockup consistent with product description (memory store, agent traces, verification gates). |
| **Licensing status** | Verified screenshot (owned) — or generated mockup (owned) |

---

### AS-014 — 0Brain Memory Trace Screenshot

| Property | Value |
|---|---|
| **Asset ID** | `AS-014` |
| **Purpose** | Secondary evidence — shows memory retrieval and provenance trace |
| **Page and section** | `/products/0brain` — "Capabilities" section or "The loop" section |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | 0Brain interface showing memory trace: agent query → retrieval → provenance chain → verification status. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 180 KB |
| **Source or generation method** | **CREATE NEW** — capture or generate |
| **Licensing status** | Verified screenshot or generated mockup (owned) |

---

## 3. SUPPORTING ENVIRONMENT IMAGERY

Additional imagery for specific sections that aren't full hero scenes but need visual support.

---

### AS-015 — Fenix Plus SA Website Preview

| Property | Value |
|---|---|
| **Asset ID** | `AS-015` |
| **Purpose** | Project evidence for Fenix Plus SA work page |
| **Page and section** | `/work/fenix-plus-sa` — hero panel |
| **Required dimensions** | 2400 × 1650 |
| **Aspect ratio** | ~16:11 |
| **Visual description** | Screenshot or preview of fenixplus.ch website. Gold accent (#D4A853). |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG or WebP (quality 90) |
| **Maximum target file size** | 180 KB |
| **Source or generation method** | **CREATE NEW** — capture browser screenshot of live fenixplus.ch, or use existing if `2 at laptop dev.jfif` is a valid screenshot (needs verification) |
| **Licensing status** | Verified screenshot (owned — work product) |

---

### AS-016 — Method/Process Workspace Image

| Property | Value |
|---|---|
| **Asset ID** | `AS-016` |
| **Purpose** | Supporting image for Approach/About page — shows the builder's method in context |
| **Page and section** | `/about` — "The builder" section (paired with portrait-2) |
| **Required dimensions** | 1600 × 1200 |
| **Aspect ratio** | 4:3 |
| **Visual description** | Developer's desk from above or three-quarter angle: notebook with system sketches, mechanical keyboard, reference books, coffee. Warm task lighting. Documentary style. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | WebP (quality 85) |
| **Maximum target file size** | 120 KB |
| **Source or generation method** | Mistral AI (FLUX) or actual photograph |
| **Licensing status** | Generated (owned) or real photograph (owned) |

---

### AS-017 — Workshop Video Still (Poster Frame)

| Property | Value |
|---|---|
| **Asset ID** | `AS-017` |
| **Purpose** | Poster frame for workshop video if reused; standalone environmental image if video deprecated |
| **Page and section** | About page or Lab page — background |
| **Required dimensions** | 1920 × 1080 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Existing `workshop_still.jpg` — Nik at workstation. Needs evaluation for Systematic direction alignment. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | WebP (quality 85) |
| **Maximum target file size** | 100 KB |
| **Source or generation method** | **REUSE WITH REVISION** — evaluate existing `workshop_still.jpg`. Re-compress to WebP. If too sci-fi/cyberpunk in current form, replace with new generated image. |
| **Licensing status** | Existing photograph (owned) — or generated replacement |

---

## 4. DIAGRAMS (SVG)

System diagrams are a core element of the Systematic direction. All diagrams must be simple SVG, monochrome + single product accent colour, with scroll-driven activation via GSAP ScrollTrigger `stroke-dashoffset` animation.

---

### AS-018 — Hero Diagram: Spreadsheet Transformation

| Property | Value |
|---|---|
| **Asset ID** | `AS-018` |
| **Purpose** | Hero section signature diagram. Communicates the value proposition visually: manual chaos → systematic resolution. This IS the hero. |
| **Page and section** | Homepage hero section — primary visual element |
| **Required dimensions** | 1200 × 600 (desktop viewBox), responsive scaling |
| **Aspect ratio** | 2:1 |
| **Visual description** | Two-state SVG diagram. **State 1 (before):** Five stylized disconnected elements — spreadsheet grid fragment, email thread fragment, document icons, chat bubble, hand-drawn arrow — overlapping chaotically, slightly rotated, grey tones with faint warm accents. **State 2 (after):** Same five elements reorganized into a clean pipeline: Data Source → Processing → Structured Output → Dashboard. Connected by precise ruled lines. Product accent colour on active nodes. The transition between states is scroll-driven (GSAP ScrollTrigger with `scrub: 1.2`). Desktop: horizontal layout (chaos left, resolution right). Mobile: vertical (chaos top, resolution bottom). |
| **Motion requirement** | Scroll-triggered animated (Level 3 — signature interaction). SVG `stroke-dashoffset` + CSS transform transitions. Reduced-motion: static "after" state with single opacity fade. |
| **Transparency requirement** | SVG is inherently transparent-capable; no alpha needed for its placement |
| **Mobile variant requirement** | Yes — simplified version with vertical layout. `AS-018-M` (same SVG, different viewBox/layout triggered by CSS media queries) |
| **File format** | Inline SVG (injected into JSX, not an external file) |
| **Maximum target file size** | 15 KB (inline SVG markup) |
| **Source or generation method** | Hand-crafted SVG using design tool (Figma → export SVG → hand-optimize). Not AI-generated. |
| **Licensing status** | Original creation (owned) |

---

### AS-019 — Agent Architecture Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-019` |
| **Purpose** | Explains the 4-stage agent workflow: Worker → Judge → Iterate → Deploy |
| **Page and section** | Homepage — "Agent Architecture" section |
| **Required dimensions** | 800 × 400 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Four connected nodes in a horizontal flow: Worker (agent executes task) → Judge (evaluates output) → Iterate (feedback loop back to Worker if needed) → Deploy (verified output released). Each node is a rounded rectangle with label + single-sentence description. Connecting arrows with subtle dash pattern. Violet accent (#8B5CF6) on active flow. Neutral grey on inactive. Scroll-driven draw animation: lines draw first, then nodes appear. |
| **Motion requirement** | Scroll-triggered animated (Level 2). SVG `stroke-dashoffset`. `scrub: 0.6`. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Vertical stack via CSS — same SVG, responsive layout |
| **File format** | Inline SVG |
| **Maximum target file size** | 8 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-020 — 0Brain Agent Loop Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-020` |
| **Purpose** | Shows the 5-stage agent cycle: Investigate → Delegate → Remember → Challenge → Verify |
| **Page and section** | `/products/0brain` — "The loop" section |
| **Required dimensions** | 480 × 480 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Five concentric orbital rings with nodes at segment boundaries. Center: "VERIFY" node. Outer ring segments labeled: INVESTIGATE, DELEGATE, REMEMBER, CHALLENGE, VERIFY. Animated pulse on active segment. Violet accent (#8B5CF6). |
| **Motion requirement** | Animated — SVG `<animate>` for pulse on each segment sequentially. Continuous loop. Respects `prefers-reduced-motion`. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No — same SVG scales down |
| **File format** | SVG (external file, referenced via `<img>` or `<Image>`) |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | **REUSE WITH REVISION** — existing `/assets/0brain-loop.svg` is well-structured but uses blue accent (#2D8CFF in places). Revise to use violet (#8B5CF6) consistently. Also revise `/assets/agent-orbit.svg` similarly. |
| **Licensing status** | Revised from existing (owned) |

---

### AS-021 — Method Process Diagram (6 Stages)

| Property | Value |
|---|---|
| **Asset ID** | `AS-021` |
| **Purpose** | Shows the 6-stage build process: Understand → Identify → Design → Build → Verify → Iterate |
| **Page and section** | Homepage — "Method" section; `/approach` page |
| **Required dimensions** | 1000 × 200 viewBox (horizontal timeline) |
| **Aspect ratio** | 5:1 |
| **Visual description** | Horizontal timeline with 6 nodes connected by a ruled line. Each node: numbered circle (01–06), stage name below. Active node filled with global accent (#EBEBED). Completed nodes: subtle fill. Future nodes: outline only. Scroll-driven progression: nodes fill as section scrolls. |
| **Motion requirement** | Scroll-triggered animated (Level 2). Nodes fill sequentially. `scrub: 0.5`. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Vertical accordion via CSS — same SVG segments, stacked layout |
| **File format** | Inline SVG |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-022 — DocVault Architecture Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-022` |
| **Purpose** | Shows DocVault system architecture: ingestion → RAG pipeline → retrieval |
| **Page and section** | `/products/docvault` — "Architecture" section; Work case study page |
| **Required dimensions** | 800 × 400 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Flow diagram: Document Ingestion (PDF, invoices, contracts) → Embedding (OpenAI) → Vector Store (pgvector) → Query → RAG Retrieval → Citation-Backed Answer. Amber accent (#F59E0B) on key nodes. Monochrome neutral for infrastructure. |
| **Motion requirement** | Scroll-triggered draw animation |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Simplified vertical stack via CSS |
| **File format** | Inline SVG |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-023 — Field Ops Architecture Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-023` |
| **Purpose** | Shows Field Ops system architecture |
| **Page and section** | `/products/fenix-construction-tracker` — "Architecture" section |
| **Required dimensions** | 800 × 400 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Flow diagram: Mobile/Web Client → Firebase (Auth, Firestore, Storage) → Google Maps API → Real-time Location Sync → Operational Dashboard. Green accent (#10B981). |
| **Motion requirement** | Scroll-triggered draw animation |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Simplified vertical stack |
| **File format** | Inline SVG |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-024 — CodexPilot Architecture Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-024` |
| **Purpose** | Shows CodexPilot system architecture |
| **Page and section** | `/products/codexpilot` — "Architecture" section |
| **Required dimensions** | 800 × 400 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Flow diagram: Android Client (Jetpack Compose) → LiteRT-LM (on-device) / Hermes Agent (remote) → Git (JGit) → Diff Viewer → Review → Commit. Cyan accent (#06B6D4). |
| **Motion requirement** | Scroll-triggered draw animation |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Simplified vertical stack |
| **File format** | Inline SVG |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-025 — 0Brain Architecture Diagram

| Property | Value |
|---|---|
| **Asset ID** | `AS-025` |
| **Purpose** | Shows 0Brain memory infrastructure architecture |
| **Page and section** | `/products/0brain` — "Architecture" section (if added); Work case study |
| **Required dimensions** | 800 × 400 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Flow diagram: Agent Session → Memory Store (persistent) → Retrieval (semantic search) → Provenance Trace → Verification Gate → Output. Violet accent (#8B5CF6). |
| **Motion requirement** | Scroll-triggered draw animation |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Simplified vertical stack |
| **File format** | Inline SVG |
| **Maximum target file size** | 6 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-026 — Pattern Recognition Diagram (5 Friction Archetypes)

| Property | Value |
|---|---|
| **Asset ID** | `AS-026` |
| **Purpose** | Visual companion to "We keep seeing the same pattern" section. Shows 5 operational friction archetypes resolving to systematic responses. |
| **Page and section** | Homepage — "Pattern Recognition" section |
| **Required dimensions** | 1000 × 500 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | Five rows, each: problem icon/label (left, grey) → arrow → solution label (right, accent-coloured). Problems: "Manual data re-entry," "Document processing at volume," "Field-to-office lag," "Agent context loss," "Disconnected tools." Solutions opposite each. Scroll reveals one row at a time. |
| **Motion requirement** | Scroll-triggered reveal — each row fades + slides in. `staggerChildren: 0.12`. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Vertical stack — problem above solution per row |
| **File format** | Inline SVG (or HTML/CSS if simpler — these are simple text + icons, not complex shapes) |
| **Maximum target file size** | 5 KB |
| **Source or generation method** | Hand-crafted SVG or CSS |
| **Licensing status** | Original creation (owned) |

---

## 5. ICONS

All icons are SVG format, `currentColor`-compatible for accent colour inheritance.

---

### AS-027 — Product Icon: DocVault

| Property | Value |
|---|---|
| **Asset ID** | `AS-027` |
| **Purpose** | Product identification icon for DocVault |
| **Page and section** | Homepage — product cards; `/products/docvault`; navigation (if icon nav used) |
| **Required dimensions** | 24 × 24 viewBox (renders at multiple sizes) |
| **Aspect ratio** | 1:1 |
| **Visual description** | Stylized document/folder with search magnifying glass overlay. Clean geometric lines. Amber when active. |
| **Motion requirement** | Static |
| **Transparency requirement** | No (SVG inherently supports) |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-028 — Product Icon: CodexPilot

| Property | Value |
|---|---|
| **Asset ID** | `AS-028` |
| **Purpose** | Product identification icon for CodexPilot |
| **Page and section** | Homepage product cards; `/products/codexpilot` |
| **Required dimensions** | 24 × 24 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Stylized code brackets `</>` with a subtle steering/control element (small circle/dot). Cyan when active. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-029 — Product Icon: Field Ops

| Property | Value |
|---|---|
| **Asset ID** | `AS-029` |
| **Purpose** | Product identification icon for Field Ops |
| **Page and section** | Homepage product cards; `/products/fenix-construction-tracker` |
| **Required dimensions** | 24 × 24 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Stylized map pin / location marker with concentric rings suggesting live tracking. Green when active. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-030 — Product Icon: 0Brain

| Property | Value |
|---|---|
| **Asset ID** | `AS-030` |
| **Purpose** | Product identification icon for 0Brain |
| **Page and section** | Homepage product cards; `/products/0brain` |
| **Required dimensions** | 24 × 24 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Stylized node network — central circle connected to surrounding smaller nodes, suggesting memory/memory graph. Violet when active. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-031 — Product Icon: Fenix Plus SA

| Property | Value |
|---|---|
| **Asset ID** | `AS-031` |
| **Purpose** | Work/project identification icon for Fenix Plus SA |
| **Page and section** | `/work/fenix-plus-sa`; Work registry page |
| **Required dimensions** | 24 × 24 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Stylized building/company structure with Swiss cross subtlety (simple geometric). Gold when active. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

### AS-032 — Capability Icons Set (10 icons)

| Property | Value |
|---|---|
| **Asset ID** | `AS-032-01` through `AS-032-10` |
| **Purpose** | Visual identifiers for the 10 capability domains on the Capabilities page |
| **Page and section** | `/capabilities` page — each domain card |
| **Required dimensions** | 32 × 32 viewBox each |
| **Aspect ratio** | 1:1 |
| **Visual description** | Clean geometric icon for each domain: (1) AI Product Development — gear/cog with spark, (2) Agentic Systems — connected nodes, (3) Document Intelligence — document with scan lines, (4) Internal Business Software — building/silo, (5) Workflow Automation — flow arrows, (6) Operational Dashboards — dashboard/chart, (7) Mobile Applications — phone device, (8) Product Architecture — blueprint/layers, (9) Prototyping and Validation — checkmark in circle, (10) Deployment and Reliability — server with shield. All monochrome neutral grey, shifting to domain's associated accent on hover. |
| **Motion requirement** | Static by default; subtle colour transition on hover (150ms) |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG sprite or individual SVG files |
| **Maximum target file size** | 1 KB each (10 KB total) |
| **Source or generation method** | Hand-crafted SVG — use a consistent geometric style. Consider Phosphor Icons or Lucide as base, customized. |
| **Licensing status** | Original creation (owned) — or MIT-licensed base icons customized |

---

### AS-033 — UI Navigation Icons Set

| Property | Value |
|---|---|
| **Asset ID** | `AS-033-01` through `AS-033-07` |
| **Purpose** | Standard UI icons for navigation and interaction |
| **Page and section** | Global — Header, Footer, forms, cards |
| **Required dimensions** | 20 × 20 viewBox each |
| **Aspect ratio** | 1:1 |
| **Visual description** | (1) Menu/hamburger — three horizontal lines, (2) Close/X — two crossing lines, (3) Chevron down — V-shape, (4) Chevron right — > shape, (5) Arrow up-right — diagonal arrow (external link), (6) Check circle — circle with checkmark, (7) Send — paper plane. All monochrome, `currentColor`. |
| **Motion requirement** | Static; subtle rotation on menu↔close toggle (300ms) |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 1 KB each |
| **Source or generation method** | **REUSE WITH REVISION** — existing icons at `/assets/icons/*.svg` (menu, close, chevron-down, chevron-right, arrow-up-right, check-circle, send). Verify they use `currentColor`. Restyle if needed for consistency. |
| **Licensing status** | Existing (owned) — revised if needed |

---

### AS-034 — Social/External Link Icons

| Property | Value |
|---|---|
| **Asset ID** | `AS-034-01` through `AS-034-04` |
| **Purpose** | Social media and external platform icons for Footer and Contact page |
| **Page and section** | Footer (GitHub, Twitter/X, LinkedIn); Contact page |
| **Required dimensions** | 20 × 20 viewBox each |
| **Aspect ratio** | 1:1 |
| **Visual description** | (1) GitHub — mark, (2) X/Twitter — X mark, (3) LinkedIn — "in" mark, (4) Email — envelope. Minimal, monochrome. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 1 KB each |
| **Source or generation method** | **CREATE NEW** — hand-crafted or adapted from open-source icon sets |
| **Licensing status** | Original creation (owned) — or MIT-licensed |

---

## 6. LOGO & MARKS

---

### AS-035 — D/A Monogram Mark

| Property | Value |
|---|---|
| **Asset ID** | `AS-035` |
| **Purpose** | Primary identity mark — used in header, footer, favicon context, and as standalone mark |
| **Page and section** | Global — Header (left), Footer, social preview images |
| **Required dimensions** | 64 × 64 viewBox (renders at favicon through header sizes) |
| **Aspect ratio** | 1:1 |
| **Visual description** | Geometric D/A interlocking monogram. Clean, precise lines. Single weight. Monochrome: off-white (#EBEBED) on dark (#070808). No gradient (unlike current logo.svg which has gradient). `currentColor` support. Should read as "D" and "A" at small sizes. The mark should feel architectural — systematic, engineered, precise. |
| **Motion requirement** | Static |
| **Transparency requirement** | Yes — alpha channel for dark background placement |
| **Mobile variant requirement** | No — same SVG scales |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | **CREATE NEW** — redesign of existing `logo.svg`. Current logo has: gradient, Playfair Display text, serif wordmark, cyan accent dot. New mark: stripped to geometric monogram only, `currentColor`, no gradients. |
| **Licensing status** | Original creation (owned) |

---

### AS-036 — Full Logo Lockup (D/A mark + "DORIAN" wordmark)

| Property | Value |
|---|---|
| **Asset ID** | `AS-036` |
| **Purpose** | Full brand lockup for header, footer, and places where full name is needed |
| **Page and section** | Global — Header, Footer, OG image |
| **Required dimensions** | 240 × 40 viewBox |
| **Aspect ratio** | 6:1 |
| **Visual description** | D/A monogram (AS-035) on left, "DORIAN" wordmark in Switzer Medium 500 on right. Letter-spacing: 0.15em. Off-white (#EBEBED). No serif (current uses Playfair Display — replace with Switzer). No accent dot. Minimal, systematic. |
| **Motion requirement** | Static |
| **Transparency requirement** | Yes |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 3 KB |
| **Source or generation method** | **CREATE NEW** — new SVG combining AS-035 mark + Switzer wordmark |
| **Licensing status** | Original creation (owned) |

---

### AS-037 — Favicon

| Property | Value |
|---|---|
| **Asset ID** | `AS-037` |
| **Purpose** | Browser tab icon, bookmarks |
| **Page and section** | Global — `<link rel="icon">` in root layout |
| **Required dimensions** | 64 × 64 viewBox (renders at 16×16, 32×32, 48×48) |
| **Aspect ratio** | 1:1 |
| **Visual description** | D/A monogram (same geometry as AS-035) on dark rounded-rect background (#070808). Off-white mark (#EBEBED). No gradient. No orange/yellow (current favicon uses orange-to-gold gradient — replace). |
| **Motion requirement** | Static |
| **Transparency requirement** | No — solid background preferred for favicon reliability |
| **Mobile variant requirement** | No |
| **File format** | SVG (primary) + 32×32 PNG fallback |
| **Maximum target file size** | 1 KB |
| **Source or generation method** | **CREATE NEW** — derived from AS-035. Existing `/favicon.svg` is orange/gold gradient and reads "DA" in serif on circle. Replace completely. |
| **Licensing status** | Original creation (owned) |

---

## 7. SOCIAL PREVIEW IMAGES

---

### AS-038 — Open Graph Image

| Property | Value |
|---|---|
| **Asset ID** | `AS-038` |
| **Purpose** | Social sharing preview — appears when URL is shared on Twitter, LinkedIn, Facebook, Slack, etc. |
| **Page and section** | Global — `og:image` meta tag in root layout |
| **Required dimensions** | 1200 × 630 |
| **Aspect ratio** | 1.91:1 (standard OG ratio) |
| **Visual description** | Dark background (#070808). Centered: D/A monogram (AS-035) above "DORIAN APPS" in Switzer Medium, letter-spacing 0.15em. Below: tagline "Software for work that has outgrown spreadsheets." in Switzer Regular at smaller size. Bottom: URL "dorianapps.com" in JetBrains Mono. Subtle geometric rule lines at corners (like current og-image.svg but restyled). Single accent: global neutral (#EBEBED). No gradient. No concentric circles. No "SYSTEMS · PRODUCTS · AGENTS" tagline (replace with new positioning). No "SIGNAL LOST" vibe. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No — OG image is always 1200×630 |
| **File format** | PNG (primary — universally supported by social platforms) + SVG as source |
| **Maximum target file size** | 80 KB (PNG) |
| **Source or generation method** | **CREATE NEW** — replace existing `og-image.svg`. Generate SVG first, export to PNG at 1200×630. |
| **Licensing status** | Original creation (owned) |

---

### AS-039 — Twitter Card Image

| Property | Value |
|---|---|
| **Asset ID** | `AS-039` |
| **Purpose** | Twitter/X specific sharing card |
| **Page and section** | Global — `twitter:image` meta tag |
| **Required dimensions** | 1200 × 600 (Twitter's recommended "summary_large_image") |
| **Aspect ratio** | 2:1 |
| **Visual description** | Same design as OG image (AS-038) but formatted for 2:1 ratio. May use slightly larger typography. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | PNG |
| **Maximum target file size** | 80 KB |
| **Source or generation method** | **CREATE NEW** — variant of AS-038 at 2:1 ratio |
| **Licensing status** | Original creation (owned) |

---

## 8. BACKGROUND TEXTURES

Subtle repeating patterns at very low opacity (1–2%) to add depth without distraction.

---

### AS-040 — Subtle Grid Texture

| Property | Value |
|---|---|
| **Asset ID** | `AS-040` |
| **Purpose** | Ultra-subtle grid background for section surfaces — adds systematic texture |
| **Page and section** | Global — applied to `--surface-elevated` and `--surface-alt` sections |
| **Required dimensions** | 100 × 100 tile (CSS `background-repeat`) |
| **Aspect ratio** | 1:1 |
| **Visual description** | Fine grid lines at 25px spacing. Line colour: `rgba(255,255,255,0.015)`. Dot at intersections: `rgba(255,255,255,0.02)`. Barely perceptible — felt more than seen. |
| **Motion requirement** | Static |
| **Transparency requirement** | N/A — alpha baked into the colour values |
| **Mobile variant requirement** | No |
| **File format** | SVG (inline CSS `background-image` using data URI) or CSS `background` with `repeating-linear-gradient` |
| **Maximum target file size** | 1 KB (CSS-based, no file needed) |
| **Source or generation method** | CSS-only — `background-image: repeating-linear-gradient(...)` |
| **Licensing status** | Original creation (owned) |

---

### AS-041 — Contour/Topographic Pattern

| Property | Value |
|---|---|
| **Asset ID** | `AS-041` |
| **Purpose** | Subtle topographic texture for Field Ops sections — reinforces construction/field context |
| **Page and section** | `/products/fenix-construction-tracker` — hero background overlay |
| **Required dimensions** | 400 × 400 tile |
| **Aspect ratio** | 1:1 |
| **Visual description** | Irregular concentric contour lines in green (#10B981) at 2–3% opacity. |
| **Motion requirement** | Static |
| **Transparency requirement** | No — alpha handled by opacity |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 3 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/contour-pattern.svg` is well-constructed. Verify green hex matches new `--accent-fieldops: #10B981`. |
| **Licensing status** | Existing (owned) |

---

### AS-042 — Dot Matrix Texture

| Property | Value |
|---|---|
| **Asset ID** | `AS-042` |
| **Purpose** | Alternative subtle texture for Lab/experiment sections — suggests technical/systematic |
| **Page and section** | `/lab` page background; experimental status cards |
| **Required dimensions** | 40 × 40 tile |
| **Aspect ratio** | 1:1 |
| **Visual description** | Regular dot grid at 8px spacing. Dot colour: `rgba(255,255,255,0.02)`. Like grid paper but far more subtle. |
| **Motion requirement** | Static |
| **Transparency requirement** | N/A |
| **Mobile variant requirement** | No |
| **File format** | CSS-based or tiny SVG |
| **Maximum target file size** | 1 KB |
| **Source or generation method** | CSS `radial-gradient` dot pattern or micro-SVG |
| **Licensing status** | Original creation (owned) |

---

## 9. VIDEO BACKGROUNDS

---

### AS-043 — Workshop Video (Background)

| Property | Value |
|---|---|
| **Asset ID** | `AS-043` |
| **Purpose** | Ambient background video for About or Lab page — shows builder at work |
| **Page and section** | `/about` page — hero background (optional, secondary to static image) |
| **Required dimensions** | 1920 × 1080 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Silent, looped video of developer workstation: hands on keyboard, screens showing system interfaces, subtle monitor flicker. Controlled lighting. No face. No sci-fi. |
| **Motion requirement** | Auto-playing loop, muted, no controls. `playsinline`. Paused if `prefers-reduced-motion`. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — mobile uses static poster frame (AS-044) to save bandwidth |
| **File format** | MP4 (H.264) + WebM (VP9) for dual-format delivery |
| **Maximum target file size** | 2 MB (MP4), 1.5 MB (WebM) — heavily compressed for background use |
| **Source or generation method** | Evaluate existing `workshop_video_silent.mp4` if it aligns with new direction. If too sci-fi, create new AI-generated video or use static image instead. |
| **Licensing status** | Existing (owned) if reused; generated (owned) if new |

---

### AS-044 — Workshop Video Poster Frame

| Property | Value |
|---|---|
| **Asset ID** | `AS-044` |
| **Purpose** | Static poster image shown before video loads, and used on mobile instead of video |
| **Page and section** | `/about` page — video poster |
| **Required dimensions** | 1920 × 1080 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Single representative frame from AS-043 video. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No — this IS the mobile variant |
| **File format** | WebP (quality 80) |
| **Maximum target file size** | 60 KB |
| **Source or generation method** | Extract from video or generate separately. |
| **Licensing status** | Owned |

---

## 10. MOBILE CROPS

Separate crop assets for key scenes where the 16:9 composition doesn't work on narrow viewports.

---

### AS-045 through AS-051 — Mobile Crop Variants

| Asset ID | Corresponds To | Dimensions | Description |
|---|---|---|---|
| `AS-045` | `AS-001` (The Builder) | 750 × 1334 | Tighter crop: hands + screens, portrait orientation. Focus on the work, not the room. |
| `AS-046` | `AS-002` (Document Intelligence) | 750 × 1334 | Tighter crop: documents + tablet interface. Portrait. |
| `AS-047` | `AS-003` (Field Operations) | 750 × 1334 | Tighter crop: tablet + helmet + plans. Portrait. |
| `AS-048` | `AS-004` (Agent Orchestration) | 750 × 1334 | Tighter crop: primary monitor + hands. Portrait. |
| `AS-049` | `AS-005` (Mobile Development) | 750 × 1334 | Tighter crop: phone device + laptop edge. Portrait. |
| `AS-050` | `AS-006` (AI Memory System) | 750 × 1334 | Tighter crop: server rack detail + monitor. Portrait. |
| `AS-051` | `AS-018` (Hero Diagram mobile) | Implemented via CSS — SVG viewBox adapts to vertical layout. No separate file. | N/A |

**All mobile crops:**
- **Motion requirement:** Static
- **Transparency requirement:** No
- **File format:** WebP (quality 80)
- **Maximum target file size:** 80 KB each
- **Source:** Crop and resize from parent asset. May need separate generation for optimal composition.
- **Licensing status:** Generated (owned)

---

## 11. FALLBACK IMAGES

Reduced-motion fallbacks and loading placeholders.

---

### AS-052 — Hero Diagram Static Fallback

| Property | Value |
|---|---|
| **Asset ID** | `AS-052` |
| **Purpose** | Static "after" state of the Spreadsheet Transformation diagram — shown when `prefers-reduced-motion` is active or GSAP fails |
| **Page and section** | Homepage hero — replaces animated AS-018 |
| **Required dimensions** | 1200 × 600 viewBox |
| **Aspect ratio** | 2:1 |
| **Visual description** | The resolved "after" state of AS-018 — clean systematic pipeline. All elements in final position. No animation. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Vertical layout via CSS media queries |
| **File format** | Inline SVG (same SVG as AS-018, different initial render state) |
| **Maximum target file size** | N/A — same file, different state |
| **Source or generation method** | Same SVG as AS-018 — the "after" state is the default render; animation moves elements FROM chaos TO resolution. If JS/GSAP fails, the resolved state remains visible. |
| **Licensing status** | Original creation (owned) |

---

### AS-053 — Hero Scene Poster Frame (Desktop)

| Property | Value |
|---|---|
| **Asset ID** | `AS-053` |
| **Purpose** | Loading placeholder shown before AS-001 loads. Low-quality blurred version. |
| **Page and section** | Homepage hero |
| **Required dimensions** | 2560 × 1440 |
| **Aspect ratio** | 16:9 |
| **Visual description** | Heavily compressed, blurred version of AS-001. 20×20px upscaled with CSS `filter: blur(20px)`. |
| **Motion requirement** | Static — fades out when full image loads |
| **Transparency requirement** | No |
| **Mobile variant requirement** | Yes — corresponding mobile blur placeholder |
| **File format** | WebP (quality 10 — intentionally degraded for tiny file size) |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Generated from AS-001 via sharp/ImageMagick: resize to 40px → re-encode at quality 5 |
| **Licensing status** | Derived from owned asset |

---

### AS-054 — Generic Image Placeholder

| Property | Value |
|---|---|
| **Asset ID** | `AS-054` |
| **Purpose** | Fallback shown when any image fails to load (via `ImageWithFallback` component) |
| **Page and section** | Global — any `ImageWithFallback` instance |
| **Required dimensions** | 800 × 600 viewBox (scales to container) |
| **Aspect ratio** | 4:3 |
| **Visual description** | Simple geometric placeholder: dark surface (#0D0F10) with subtle grid, centered D/A monogram at 8% opacity. Not an error state — a calm, deliberate "image unavailable" signal. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | Hand-crafted SVG |
| **Licensing status** | Original creation (owned) |

---

## 12. PORTRAITS

---

### AS-055 — Portrait 1 (Nik Headshot)

| Property | Value |
|---|---|
| **Asset ID** | `AS-055` |
| **Purpose** | Primary portrait of Nik — hero image on About page |
| **Page and section** | `/about` — hero panel |
| **Required dimensions** | 1200 × 1500 (4:5 crop, displayed at ~600px wide) |
| **Aspect ratio** | 4:5 |
| **Visual description** | Nik's portrait. Professional but not corporate. Dark background. Controlled lighting. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | WebP (quality 85) |
| **Maximum target file size** | 80 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/portrait-1.webp`. Verify it aligns with the Systematic visual tone. |
| **Licensing status** | Owned photograph |

---

### AS-056 — Portrait 2 (Nik at Workstation)

| Property | Value |
|---|---|
| **Asset ID** | `AS-056` |
| **Purpose** | Secondary portrait — Nik at workstation, used in About page "The builder" section |
| **Page and section** | `/about` — bio section |
| **Required dimensions** | 1200 × 1500 |
| **Aspect ratio** | 4:5 |
| **Visual description** | Nik at workstation. Documentary style. Screens visible, real environment. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | WebP (quality 85) |
| **Maximum target file size** | 80 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/portrait-2.webp` |
| **Licensing status** | Owned photograph |

---

### AS-057 — Portrait 3 (Additional)

| Property | Value |
|---|---|
| **Asset ID** | `AS-057` |
| **Purpose** | Third portrait — available for use in About page timeline or Contact page |
| **Page and section** | `/about` or `/contact` — secondary placement |
| **Required dimensions** | 1200 × 1500 |
| **Aspect ratio** | 4:5 |
| **Visual description** | Additional portrait of Nik. |
| **Motion requirement** | Static |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | WebP (quality 85) |
| **Maximum target file size** | 80 KB |
| **Source or generation method** | **REUSE AS-IS** — existing `/assets/portrait-3.webp` |
| **Licensing status** | Owned photograph |

---

## 13. 404 PAGE GRAPHIC

---

### AS-058 — 404 Page Graphic

| Property | Value |
|---|---|
| **Asset ID** | `AS-058` |
| **Purpose** | Visual element for the 404 Not Found page |
| **Page and section** | `/404` page |
| **Required dimensions** | 400 × 400 viewBox (renders at ~180px) |
| **Aspect ratio** | 1:1 |
| **Visual description** | Abstract geometric composition: a broken circular path with one accent-coloured arc segment, suggesting "route not found" without sci-fi language. Central node. Subtle grid background. No "SIGNAL LOST" text (current 404-graphic.svg says this — remove). No rotating fragments. Calm, systematic, restrained. The message should be: "This route doesn't exist" — not "signal lost" (too sci-fi). |
| **Motion requirement** | Static (removed `<animateTransform>` from current version) — or very subtle single rotation (20s duration, stopped by `prefers-reduced-motion`) |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 3 KB |
| **Source or generation method** | **REUSE WITH REVISION** — existing `/assets/404-graphic.svg` has good structure (broken orbital ring) but needs: remove "SIGNAL LOST" text, remove blue/red accents (use global neutral #EBEBED), remove `<animateTransform>` (or make it optional), remove "404" text from graphic (the page has its own 404 heading). |
| **Licensing status** | Revised from existing (owned) |

---

## 14. LOADING/PRELOADER

---

### AS-059 — Preloader

| Property | Value |
|---|---|
| **Asset ID** | `AS-059` |
| **Purpose** | Initial page load indicator — shown briefly before content renders |
| **Page and section** | Global — root layout, preloader overlay |
| **Required dimensions** | 80 × 80 viewBox |
| **Aspect ratio** | 1:1 |
| **Visual description** | Minimal animated circle with drawing stroke. Neutral off-white (#EBEBED) on dark. Clean and understated — not the current blue-glow preloader. |
| **Motion requirement** | Animated (SVG `<animate>` for `stroke-dashoffset`). Duration: 2s loop. |
| **Transparency requirement** | No |
| **Mobile variant requirement** | No |
| **File format** | SVG |
| **Maximum target file size** | 2 KB |
| **Source or generation method** | **REUSE WITH REVISION** — existing `/assets/preloader.svg` structure is good but uses blue (#2D8CFF). Replace accent with neutral off-white (#EBEBED). |
| **Licensing status** | Revised from existing (owned) |

---

## 15. EXISTING ASSET DISPOSITION REFERENCE

This section catalogs every existing asset found in the repository and states its disposition.

### Assets REUSED AS-IS

| Existing Path | Asset ID | Notes |
|---|---|---|
| `/assets/portrait-1.webp` | AS-055 | Verified — Nik headshot. |
| `/assets/portrait-2.webp` | AS-056 | Verified — Nik at workstation. |
| `/assets/portrait-3.webp` | AS-057 | Available for use. |
| `/assets/screenshots/docvault.png` | AS-007 | IF verified current from live product. |
| `/assets/screenshots/fenix-live-map.png` | AS-009 | IF verified current. |
| `/assets/screenshots/fenix-login.png` | AS-010 | IF verified current. |
| `/assets/contour-pattern.svg` | AS-041 | Well-constructed; verify green hex match. |

### Assets REUSED WITH REVISION

| Existing Path | Asset ID | Revision Needed |
|---|---|---|
| `/assets/0brain-loop.svg` | AS-020 | Replace blue (#2D8CFF) with violet (#8B5CF6). |
| `/assets/agent-orbit.svg` | — (merged into AS-020) | Replace blue with violet. Consolidate with 0brain-loop. |
| `/assets/404-graphic.svg` | AS-058 | Remove "SIGNAL LOST" text. Remove blue/red accents → neutral. Remove or make optional the `<animateTransform>`. |
| `/assets/preloader.svg` | AS-059 | Replace blue accent with neutral off-white. |
| `/assets/icons/*.svg` (7 files) | AS-033 | Verify `currentColor` usage. Restyle if needed. |
| `/assets/logo.svg` | — (replaced by AS-035/036) | Complete redesign. Current: gradient, serif, cyan dot. |
| `/assets/screenshots/codexpilot-*.png` (3 files) | AS-011, AS-012 | If verified current: reuse. If stale: replace. Currently unclear if these are real or mockups. |

### Assets DEPRECATED (Not Reused)

| Existing Path | Reason |
|---|---|
| `/assets/ai-awakening/**` (94+ PNGs, 355MB) | Sci-fi robot theme. Contradicts Systematic direction. Purge from repo. |
| `/assets/hero/hero-stage-*.png` (4 files) | Same DALL-E robot imagery. Deprecate. |
| `/assets/neural-core-v2.png` | Sci-fi neural core image. Deprecate. |
| `/assets/3.jfif` | Placeholder used for CodexPilot + 0Brain. Replaced by AS-011, AS-013. |
| `/assets/2 at laptop dev.jfif` | Used for Fenix Plus SA work. Replace with AS-015 (real screenshot). |
| `/public/media/hero-scrub-desktop.mp4` | Old scroll-scrub hero video. Deprecate. |
| `/public/media/hero-scrub-mobile.mp4` | Same. Deprecate. |
| `/public/videos/workshop_video_silent.mp4` | Evaluate for AS-043. If too sci-fi, deprecate. |
| `/assets/poster-desktop.jpg` | Old hero poster frame. Deprecate. |
| `/assets/poster-mobile.jpg` | Old hero poster frame. Deprecate. |
| `/assets/og-image.svg` | Old OG image — gradient, old tagline, blue/red/violet accents. Replaced by AS-038. |
| `/favicon.svg` | Orange/gold gradient, serif "DA". Replaced by AS-037. |
| `/assets/workshop_still.jpg` | Evaluate for AS-017. If off-brand, deprecate. |

---

## 16. ASSET INVENTORY BY PAGE

This section maps every asset to the page(s) where it appears, for easy procurement planning.

### Homepage (`/`)

| Section | Assets Used |
|---|---|
| **Hero** | AS-001 (The Builder, background), AS-018 (Spreadsheet Transformation diagram, inline SVG), AS-053 (blur placeholder) |
| **Pattern Recognition** | AS-026 (friction archetypes diagram, inline SVG), AS-040 (subtle grid texture) |
| **Selected Systems** | AS-007 (DocVault screenshot), AS-009 (Field Ops screenshot), AS-011 (CodexPilot screenshot), AS-013 (0Brain screenshot), AS-027–030 (product icons) |
| **Agent Architecture** | AS-004 (Agent Orchestration, section bg), AS-019 (agent workflow diagram, inline SVG) |
| **Method** | AS-021 (6-stage process diagram, inline SVG) |
| **Lab Output** | AS-042 (dot matrix texture), status badge CSS (no image asset needed) |
| **Contact** | No images — text-only section |
| **Global** | AS-036 (logo lockup, Header), AS-037 (favicon), AS-040 (grid texture) |

### Work (`/work` and `/work/[slug]`)

| Page | Assets Used |
|---|---|
| `/work` (registry) | AS-027–031 (product/work icons per entry), AS-040 (grid texture) |
| `/work/fenix-plus-sa` | AS-015 (fenixplus.ch screenshot), AS-031 (Fenix Plus SA icon) |

### Capabilities (`/capabilities`)

| Section | Assets Used |
|---|---|
| All domain cards | AS-032-01 through AS-032-10 (10 capability icons) |

### Approach (`/approach`)

| Section | Assets Used |
|---|---|
| Process timeline | AS-021 (6-stage method diagram, inline SVG) |
| Background | AS-040 (grid texture) |

### Lab (`/lab` and `/lab/[slug]`)

| Section | Assets Used |
|---|---|
| Page background | AS-042 (dot matrix texture), AS-006 (AI Memory System, header bg) |
| Experiment cards | Status badge CSS (VERIFIED/EXPERIMENTAL/IN DEVELOPMENT/ARCHIVED) — no image assets needed |

### About (`/about`)

| Section | Assets Used |
|---|---|
| Hero | AS-055 (portrait-1), AS-001 (The Builder, optional bg) |
| Bio | AS-056 (portrait-2), AS-016 (workspace image) |
| Timeline | No images (CSS timeline with accent dots) |
| Global | AS-036 (logo lockup) |

### Contact (`/contact`)

| Section | Assets Used |
|---|---|
| Form page | No images — minimal, text-focused. Only global logo. |

### 404 (`/404`)

| Section | Assets Used |
|---|---|
| Page | AS-058 (404 graphic) |

---

## 17. GENERATION PRIORITY

Ordered by dependency and visual impact:

| Priority | Asset IDs | Category | Reason |
|---|---|---|---|
| **P0 — Critical Path** | AS-001, AS-018, AS-035, AS-036, AS-037 | Hero scene + hero diagram + logo + favicon | These block the homepage rebuild. Without them, no hero. |
| **P1 — Product Evidence** | AS-007–AS-014 | All product screenshots | Credibility depends on real product visuals. CodexPilot and 0Brain MUST replace `3.jfif`. |
| **P2 — Section Backgrounds** | AS-002–AS-006 | 5 photorealistic scenes | Each product/agent section needs its environmental image. |
| **P3 — Diagrams** | AS-019–AS-026 | System diagrams | Core to the Systematic direction. Can be built incrementally. |
| **P4 — Icons** | AS-027–AS-034 | Product + capability + UI icons | Needed before Capabilities and product pages finalize. |
| **P5 — Social & Polish** | AS-038, AS-039, AS-040–AS-044, AS-045–AS-050, AS-052–AS-054, AS-058, AS-059 | OG images, textures, mobile crops, fallbacks, 404, preloader | Important for launch completeness but not blocking core pages. |

---

## 18. FILE SIZE BUDGET SUMMARY

| Category | Count | Total Budget |
|---|---|---|
| Photorealistic scenes (×6) | 6 + 6 mobile crops | ~1.4 MB (desktop) + ~480 KB (mobile) |
| Product screenshots | 8 | ~1.4 MB |
| Diagrams (inline SVG) | 9 | ~70 KB total |
| Icons | 24+ | ~30 KB total |
| Logo assets | 3 | ~6 KB total |
| Social preview | 2 | ~160 KB |
| Textures | 3 | ~5 KB (mostly CSS) |
| Portraits | 3 | ~240 KB |
| Fallbacks/other | 4+ | ~10 KB |
| **TOTAL** | **~73 assets** | **~3.8 MB** (well within Vercel's 100MB serverless function limit; all static assets served from CDN) |

---

## APPENDIX: Deprecated Assets — Removal Checklist

These assets should be removed from the repository before launch:

- [ ] `public/assets/ai-awakening/` — entire directory (355MB, 94+ files)
- [ ] `public/assets/hero/hero-stage-*.png` — 4 files
- [ ] `public/assets/neural-core-v2.png`
- [ ] `public/assets/3.jfif`
- [ ] `public/assets/2 at laptop dev.jfif`
- [ ] `public/media/hero-scrub-desktop.mp4`
- [ ] `public/media/hero-scrub-mobile.mp4`
- [ ] `public/assets/poster-desktop.jpg`
- [ ] `public/assets/poster-mobile.jpg`

**Estimated space reclaimed:** ~360MB

---

*End of Phase 3 — Asset Specification. This document informs Phase 4 (Component Architecture) where each asset is wired into its component context.*
