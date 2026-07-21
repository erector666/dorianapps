# Phase 2 — Experience Concept: Dorian Apps Production Website

**Date:** 2026-07-20
**Status:** COMPLETE
**Direction selected:** "Systematic" (Direction 2)
**Deliverable type:** Creative directions + selected direction elaboration
**References:** PRD lines 298–424 (site architecture), 426–448 (hero), 450–674 (visual/motion/interaction), 881–911 (Phase 2 spec); Phase 0 Orientation; Phase 1 Visual Research

---

## PART A — THREE CREATIVE DIRECTIONS

---

### Direction 1: "The Workshop"

#### Concept name
**The Workshop**

#### Strategic rationale
Position Dorian Apps as a precision studio — the software equivalent of a Swiss watchmaker's atelier or an architect's drafting room. For founders, SMEs, and ops managers who have outgrown spreadsheets, the metaphor of a workshop signals: _this is where things get built properly_. The "workshop" framing makes Nik's independent, hands-on approach a feature, not a limitation. It communicates craftsmanship without pretension, and technical depth without jargon. This direction speaks directly to the PRD's positioning of "software for work that has outgrown spreadsheets, documents and manual coordination" by showing the environment where that transformation happens — not just the output.

#### Hero idea
**"This is the workshop."**

A full-bleed, cinematic image of a controlled dark studio: a developer's workstation with multiple screens displaying real system diagrams, task graphs, and product interfaces. The camera is positioned behind the builder — identity obscured, focus on the work. Supporting copy: "Software for work that has outgrown spreadsheets, documents and manual coordination." The hero communicates value in under 3 seconds: the image says "serious builder," the copy says "operational problems solved." The CTA is "Describe the problem" — inviting the visitor into the workshop, not asking them to buy.

#### Page architecture
- **Home:** Workshop tour — hero → tool wall (capabilities as physical tool metaphors) → project bench (selected work, each as a build-in-progress vignette) → method board (process as a workshop wall diagram) → experimental corner (lab) → contact invitation
- **Work:** A "project ledger" — each entry as a build record: problem, approach, materials (stack), what was difficult, current state. No image grids — each project is a narrative spread.
- **Capabilities:** A "tool wall" — capabilities organized as instruments hung on a pegboard. Each capability is one tool: what it's for, when Nik reaches for it, what problem it solves.
- **Approach:** "How the workshop runs" — a disciplined but conversational walkthrough of Nik's method. Illustrated with real desk photography, not diagrams.
- **Lab:** "The back bench" — experiments and research presented as works-in-progress. Unfinished but documented. Honest about what's proven vs. exploratory.
- **About:** "Who runs the workshop" — Nik presented as a builder, not an executive. Biography as a builder's story, not a résumé.
- **Contact:** "Bring your problem to the workshop" — form leads with "What are you trying to improve?"

#### Typography
**Primary:** Satoshi (Regular 400, Medium 500, Bold 700) — warm geometric sans with editorial weight range. Headlines at Medium 500, body at Regular 400. Slightly tighter tracking on display sizes (`-0.015em`), open tracking on body.
**Monospace:** JetBrains Mono — metadata, labels, stack references, version numbers only. Never body, never headlines.
**Hierarchy:** Hero display → section heading → body → label. Only 3 levels visible at any scroll position. Maximum line length: 65ch for body.

#### Colour system
Base: `#08090A` (near-black with barely-perceptible warmth — like a workshop at night with one task lamp). Elevated surface: `#111215`. Floating panel: `#181A1E`. Section alternate: `#0E1014`. Body text: `#EAEAEC`. Muted: `#858993`. Per-product accent colours (amber/cyan/green/violet/gold — as defined in Phase 1) — only one accent active at any time. The overall palette feels like a workshop: dark, warm where light hits, cool in shadow.

#### Image direction
Documentary-style photography. Real environments. The builder's desk — photographed, not rendered. Product screens on real monitors — actual screenshots, verified from live products. Physical objects: notebooks, cable management, tools, coffee. Generated imagery only for abstract concepts (e.g., agent orchestration as a physical control-room metaphor). All images share: consistent colour temperature (~5000K), controlled directional lighting, shallow depth of field for focus, subtle film grain. Six scenes defined in Phase 1: The Builder, Document Intelligence, Field Operations, Agent Orchestration, Mobile Development, AI Memory System — all shot from the workshop perspective.

#### Motion direction
- **Tier 1 (100–250ms):** Interface feedback — button hover states, link underlines, card elevation shifts. Subtle. Felt, not noticed.
- **Tier 2 (500–850ms):** Section reveals — content elements stagger into view as sections scroll into frame. The "tool wall" on Capabilities activates row by row. Project entries on Work reveal problem → approach → outcome sequentially.
- **Tier 3 (1.5–3s):** "The build sequence" — a signature animation showing a friction state (manual spreadsheet, disconnected tools) transforming into a resolved state (integrated system). Plays once on first scroll past a threshold. Subtle — more like a diagram activating than a demo reel. User scroll drives the progression.

#### Signature interaction
**"The Problem Board."** On the homepage, after the hero, a wall of operational friction statements appears: "Field reports entered three days late," "Invoices matched manually across three systems," "Agent meeting notes lost in WhatsApp." Each statement is a card. As the user scrolls, the cards begin to resolve — each one receives a corresponding solution annotation: " → Real-time field dashboard," " → Automated extraction and matching," " → Persistent memory with retrieval." The transition uses a staggered reveal: problem card fades, solution card slides in beside it. This is NOT a "before/after" slider — it's a narrative sequence that explains what Dorian Apps does by showing the pattern of problems it solves. Desktop: horizontal pairs. Mobile: stacked vertical.

#### Mobile adaptation
Workshop metaphor translates naturally: the "tool wall" becomes a vertical scroll of capability cards. The hero image crops to a tighter composition — focusing on hands and screens, not the full studio. The Problem Board stacks vertically: each problem card followed by its solution card below. Navigation is a simple slide-out drawer with large touch targets. Typography scales down proportionally — hero becomes `clamp(2rem, 6vw, 3.5rem)`. No horizontal scroll anywhere. Touch targets minimum 44px.

#### Risks
1. **"Workshop" might read as small/solo to enterprise buyers** — Mitigation: The precision and quality of the presentation must signal "boutique, not amateur."
2. **Too much physical imagery dilutes the software message** — Mitigation: Every physical photo is paired with a screen showing the actual product.
3. **Documentary photography is expensive to produce authentically** — Mitigation: Use AI generation for establishing shots, verified product screenshots for product evidence.
4. **The workshop metaphor could become a gimmick if overplayed** — Mitigation: Restraint. The workshop is felt in the tone, not announced in every headline.

#### Differentiation
Most AI/SaaS sites present themselves as platforms — faceless, scalable, generic. The Workshop presents Dorian Apps as a place — specific, physical, human-scaled. It communicates: "This is built by someone who sits at a desk and thinks about your operational problem." In a market saturated with "AI solutions for your business," a workshop signals: craftsmanship, attention, and the willingness to get hands dirty with real problems.

---

### Direction 2: "Systematic"

#### Concept name
**Systematic**

#### Strategic rationale
The core proposition — "software for work that has outgrown spreadsheets" — is fundamentally about the transition from ad-hoc, manual coordination to designed, systematic operation. The website itself should embody this transformation. Every layout decision, every typographic choice, every interaction should demonstrate that Dorian Apps thinks in systems. This direction draws on the Bloomberg Terminal's information-density-as-trust, Pentagram's editorial authority, Dieter Rams' honest reduction, and MIT Tech Review's systems-driven logic — all identified in Phase 1. It is the most intellectually rigorous of the three directions and the most differentiated from template-driven SaaS marketing sites. For a target audience of founders, ops managers, and technical decision-makers, a systematic presentation signals: _these people understand complex operational problems because they think about them the way I do_.

#### Hero idea
**A live system diagram that IS the value proposition.**

The hero section is not an image with text overlay — it is an interactive diagram that shows manual, disconnected workflows (spreadsheets, documents, messaging, manual coordination) transforming into an orchestrated systematic workflow. The diagram activates on page load: the "before" state is visible for approximately 1.5 seconds (long enough to feel the friction), then transitions to the "after" state. The headline appears beside the diagram: "Software for work that has outgrown spreadsheets." No glowing spheres, no laptop mockups, no abstract AI imagery. The hero communicates the entire value proposition in under 5 seconds through visual logic alone. The copy reinforces; the diagram proves.

Supporting line: "Dorian Apps designs and builds AI-powered products, agentic systems, and operational tools for complex workflows."

CTA: "Describe the problem" (primary) / "Explore the work" (secondary).

The diagram is lightweight SVG + CSS animation, not a heavy Three.js scene. Reduced-motion fallback: static diagram showing the "after" state. Performance budget: hero renders in under 300ms.

#### Page architecture

**Home** — "The System Overview"
1. **Hero diagram** — systematic workflow transformation (as described above)
2. **Pattern recognition** — "We keep seeing the same pattern" — 5 operational friction archetypes, each as a card with problem → Dorian response. Scroll-driven reveal.
3. **Selected systems** — 4 products presented as designed systems, not features. Each: system name → operational problem solved → architectural diagram (simple SVG) → evidence link. Order: DocVault, Field Ops, CodexPilot, 0Brain.
4. **Agent architecture** — A section explaining Dorian's approach to multi-agent systems: worker → judge → iterate → deploy. Shown as a process diagram, not a pitch.
5. **Method** — "How a system gets built" — 6 steps: Understand → Identify → Design → Build → Verify → Iterate. Each step is a single sentence with a supporting detail revealed on click/hover (desktop) or tap (mobile).
6. **Lab output** — Experimental systems presented with status tags: VERIFIED / EXPERIMENTAL / IN DEVELOPMENT. Honest about maturity.
7. **Contact** — "Describe the problem you want to solve" — minimal form, maximum signal.

**Work** — "System Registry"
A curated portfolio organized as a system registry, not a project grid. Each entry is a complete case study in a consistent format: operational context → system designed → architecture diagram → difficult decisions → evidence → current status. The page itself uses a table-of-contents sidebar (desktop) / accordion (mobile) for navigation. This is the most Bloomberg-influenced page: dense, organized, scannable.

**Capabilities** — "System Capabilities"
Organized around problem domains, not technology buzzwords. Categories from PRD: AI Product Development, Agentic Systems, Document Intelligence, Internal Business Software, Workflow Automation, Operational Dashboards, Mobile Applications, Product Architecture, Prototyping and Validation, Deployment and Reliability. Each capability is presented as: "When you need [outcome], Dorian builds [system type]. Example: [product reference]." No icon grids. No "we also do" laundry lists.

**Approach** — "Operating Manual"
Nik's method presented as an operating manual: structured, precise, documented. Six stages from PRD (Understand → Identify → Design → Build → Integrate → Test → Verify → Deploy → Iterate) rendered as a timeline or process diagram. Each stage has a brief explanation and an evidence anchor: "See this in: DocVault document classification pipeline." This page should feel like documentation — authoritative, not promotional.

**Lab** — "Experiments Registry"
A page that makes experimentation feel disciplined rather than unfinished. Each experiment has: hypothesis, method, current state, findings, and a status badge (VERIFIED / EXPERIMENTAL / IN DEVELOPMENT / ARCHIVED). Cards are arranged in a reverse-chronological feed. Filter by status. The page communicates: "We test things rigorously before we build products from them." This aligns with the PRD's "experimental without looking unreliable" requirement.

**About** — "System Operator"
Nik presented as a systems thinker and builder. The biography follows the PRD's framing: "Nik is a developer and independent product builder based in Switzerland. His work sits between software engineering, applied AI, product design, and operational problem-solving." Not a CV — a statement of operating philosophy. Timeline of key systems built. Toolkit organized by problem domain, not technology stack. Portrait used where appropriate (existing portrait assets from Phase 0).

**Contact** — "Initiate System Inquiry"
Form fields from PRD: Name, Email, Organisation, "What are you trying to improve?", "How is it handled today?", "What is breaking or taking too much time?", Timeline, Optional budget range. The form is designed as a structured inquiry, not a generic contact form. Each field has a clear purpose. The primary CTA is "Describe the problem" — consistent with the systematic framing.

#### Typography

**Primary:** Switzer (Regular 400, Medium 500, Semibold 600) — A neo-grotesque with a neutral, systematic character. More architectural than Satoshi, less warm, more engineered. Excellent readability at all sizes. Works at display sizes without feeling decorative. The neutral character lets the content (product evidence, system diagrams, copy) carry the emotional weight.

**Monospace:** JetBrains Mono (Regular 400) — For metadata, labels, status badges, version numbers, system states, and code references only. Never body. Never headlines.

**Hierarchy (formalized):**

| Level | Font | Size | Weight | Tracking | Line height | Usage |
|-------|------|------|--------|----------|-------------|-------|
| Hero display | Switzer | `clamp(2.5rem, 6vw, 4.5rem)` | 500 Medium | `-0.02em` | 1.05 | Homepage hero headline only |
| Page title | Switzer | `clamp(2rem, 4vw, 3.25rem)` | 500 Medium | `-0.015em` | 1.1 | Interior page H1 |
| Section heading | Switzer | `clamp(1.5rem, 3vw, 2.25rem)` | 500 Medium | `-0.01em` | 1.15 | Section titles |
| Subsection | Switzer | `1.25rem` | 500 Medium | `-0.005em` | 1.2 | Card headings, subsection titles |
| Body | Switzer | `1rem` / `1.125rem` | 400 Regular | `normal` | 1.6 | All body copy. Max `65ch`. |
| Small body | Switzer | `0.875rem` | 400 Regular | `normal` | 1.5 | Supporting copy, captions |
| Label | Switzer | `0.75rem` | 500 Medium | `0.03em` | 1.4 | UI labels, nav items |
| Metadata | JetBrains Mono | `0.75rem` | 400 Regular | `0.02em` | 1.4 | Status badges, version numbers, system states, stack refs |

**Typography rules:**
- Never more than 2 font families on a page.
- Never tight tracking on body text.
- Monospace exclusively for metadata, labels, code — never paragraphs, never headlines.
- Maximum 3 hierarchy levels visible at any scroll position.
- All type sizes use `clamp()` for fluid scaling.
- Licensed fonts self-hosted via `next/font` (Switzer is OFL-licensed, JetBrains Mono is OFL-licensed).

#### Colour system

**Base palette (formalized tokens):**

| Token | Value | Usage |
|-------|-------|-------|
| `--color-base` | `#070808` | Page background. Near-black with barely-perceptible cool undertone. |
| `--color-surface` | `#0D0F10` | Elevated containers — cards, sections, panels. |
| `--color-surface-alt` | `#0A0C0D` | Alternating section background for visual rhythm. |
| `--color-elevated` | `#141618` | Floating elements — modals, tooltips, dropdowns. |
| `--color-glass` | `rgba(7,8,8,0.75)` | Header and glass overlay panels. |
| `--color-border` | `rgba(255,255,255,0.06)` | Subtle borders, dividers, rule lines. |
| `--color-border-strong` | `rgba(255,255,255,0.10)` | Active borders, focus indicators. |
| `--color-text-primary` | `#EBEBED` | Body text, headings. Slightly warm off-white. |
| `--color-text-secondary` | `#8A8F98` | Supporting copy, descriptions, muted labels. |
| `--color-text-tertiary` | `#5A5F68` | Very muted — captions, timestamps, disabled states. |

**Accent system (one active at a time):**

| Product | Token | Value | Character |
|---------|-------|-------|-----------|
| DocVault | `--accent-docvault` | `#F59E0B` | Amber — warm, archival, document-adjacent |
| CodexPilot | `--accent-codexpilot` | `#06B6D4` | Cyan — cool, precise, code-adjacent |
| Field Ops | `--accent-fieldops` | `#10B981` | Green — operational, field, construction |
| 0Brain | `--accent-0brain` | `#8B5CF6` | Violet — AI, memory, agent systems |
| Fenix Plus SA | `--accent-fenix` | `#D4A853` | Gold — premium, Swiss, consulting |

**Global accent (site chrome):**
- `--accent-global`: `#EBEBED` — The site itself is neutral. Product pages activate their respective accent. Homepage shifts accent as the user scrolls through product sections (GSAP-scrubbed CSS custom property).

**Colour rules:**
- Only ONE accent colour active at any time.
- Section transitions may show hue shifting, but never two accents simultaneously.
- Never pure `#FFFFFF` or `#000000` — always slightly off.
- All text meets WCAG AA contrast minimums (4.5:1 for body, 3:1 for large text).
- Accent colours tested for contrast against both `#070808` and `#0D0F10` backgrounds.

#### Image direction

**Philosophy:** The Systematic direction uses images as evidence, not decoration. Every image answers "what does this look like in practice?"

**Image types:**
1. **System photographs** — The six photorealistic scenes from Phase 1 (Builder, Document Intelligence, Field Operations, Agent Orchestration, Mobile Development, AI Memory System). Generated with consistency in lighting, camera language, materials, contrast, colour temperature, grain, and depth of field. Used as section backgrounds and case study headers.

2. **Product screenshots** — Actual screenshots from verified products (DocVault, Field Ops/FENIX, CodexPilot, 0Brain). Captured from live applications or repository builds. Never fabricated. Displayed in device frames or as clean captures on dark surfaces.

3. **System diagrams** — Simple SVG diagrams showing architecture, data flow, agent orchestration patterns. Monochrome + product accent colour. Clean, technical, informative. These are the "Bloomberg" element — dense information rendered precisely.

4. **Documentation-style captures** — Code references, terminal output, system states, logs. Used sparingly in Lab and Approach pages to show evidence of real work. Monospace styling, subtle syntax highlighting with product accent.

**Image consistency (from Phase 1):**
- Lighting: Controlled, directional, deliberate shadow falloff.
- Camera: Consistent focal length (35–50mm equivalent), shallow depth of field where focus is intentional, deep where information matters.
- Materials: All surfaces share the same rendered quality.
- Contrast: Uniform black-point and white-point.
- Colour temperature: ~5000K neutral-cool.
- Grain: Subtle, matching film-grain profile.
- Aspect ratios: Hero 16:9, card 3:2, diagram 16:9 or 1:1, portrait 3:4.

**Image documentation (per Phase 1 standard):** Every generated image recorded with purpose, placement, prompt, model, dimensions, aspect ratio, source, licence, alt text, mobile crop, compression format, and fallback behaviour.

#### Motion direction — Three-level motion system

**Level 1 — Interface Feedback (100–250ms)**
Purpose: Communicate state changes. Felt, not noticed.
- **Button hover:** Background shifts `rgba(255,255,255,0.04)` → `rgba(255,255,255,0.08)`. Transition: `150ms ease-out`.
- **Link underline:** `scaleX(0)` → `scaleX(1)` on hover. `250ms ease-out`. Origin: left (for copy), center (for nav).
- **Card hover:** Elevation lift via `translateY(-2px)` + border opacity shift. `200ms ease-out`.
- **Focus ring:** `outline-2 outline-offset-2` in global accent. Instant on focus, `150ms` on blur.
- **Navigation:** Page transitions via Framer Motion `AnimatePresence` — fade + micro-scale (`0.98` → `1`). `300ms`.
- **Form states:** Input borders transition on focus/error. `150ms`.
- **Loading:** Minimal indeterminate indicator in muted colour.

**Level 2 — Section Transitions (500–850ms)**
Purpose: Guide the visitor through the narrative. Scroll-driven.
- **Content reveal:** Staggered entrance of children within a section as it scrolls into view. `staggerChildren: 0.08`, `duration: 0.6`. Headline enters first, then supporting copy, then visual.
- **Diagram activation:** System diagrams draw progressively (SVG `stroke-dashoffset` animation) as the section enters the viewport. Scroll-linked via GSAP ScrollTrigger with `scrub: 0.6`.
- **Accent temperature shift:** As the user scrolls between product sections on the homepage, the active accent colour smoothly transitions via GSAP-scrubbed CSS custom property. Warm → cool → warm → cool rhythm matches the product order.
- **Background depth:** Subtle ambient glow behind each section shifts position and hue as user scrolls. Implemented via CSS `radial-gradient` with low opacity (`0.03–0.06`).
- **Image reveals:** Section background images fade up from `opacity: 0` + `translateY(40px)` as section enters viewport. `duration: 0.8`, `ease: power2.out`.
- **Metric counters:** Numeric values animate from 0 to target using Framer Motion `useSpring`. Plays once on first view. Disabled if `prefers-reduced-motion`.

**Level 3 — Signature Interaction (1.5–3s)**
Purpose: One memorable moment that explains how Dorian Apps thinks.
- **"The Spreadsheet Transformation"** — On the homepage, after scrolling past the hero diagram, the user encounters a section titled "We keep seeing the same pattern." This section shows a manual operational workflow represented as a familiar, slightly chaotic arrangement: spreadsheet cells, email threads, document icons, chat messages — all overlapping, disconnected. As the user scrolls, these elements reorganize into a clean, systematic flow: data pipeline → processing → structured output → dashboard. The transformation is driven by scroll progress (GSAP ScrollTrigger with `scrub: 1.2` for deliberate, controlled pacing). The message: "This is what Dorian Apps does." ~2.5 seconds at typical scroll speed.
  - **Desktop:** Full horizontal flow — left side is manual chaos, right side is systematic resolution. Scroll moves elements from left to right.
  - **Tablet:** Condensed horizontal flow.
  - **Mobile:** Vertical stack — chaos on top, resolution below. Scroll reveals the resolution.
  - **Reduced motion:** Static "after" state with a single fade transition. No animation.
  - **Keyboard:** The section remains accessible — the interaction is scroll-driven, not interactive-element-driven. Tab order is unaffected.
  - **Performance budget:** SVG-based, no canvas/WebGL. Under 50 DOM elements. `will-change: transform` on animated elements only. GC impact monitored.
  - **Failure fallback:** If GSAP fails to load, show static "after" state. If ScrollTrigger can't initialize, show static final state immediately.

#### Signature interaction
**"The Spreadsheet Transformation"** (described in full above under Level 3 motion). This is the defining interaction of the site. It directly communicates the core value proposition — "software for work that has outgrown spreadsheets" — through motion and spatial logic rather than copy. It is the one moment a visitor will remember and describe to a colleague. It explains how Dorian Apps thinks by showing the pattern it recognizes and the resolution it provides.

#### Mobile adaptation
The Systematic direction is inherently structural, which makes it naturally responsive. Key adaptations:
- **Hero diagram:** Simplifies on mobile — the full system diagram collapses to a two-state toggle (before/after) with a subtle transition. Tap to toggle instead of scroll-to-transform. Touch target: minimum 44×44px.
- **Navigation:** Slide-out drawer from right. Glass background (`backdrop-blur-xl bg-neutral-950/70`). Large touch targets (minimum 44px height). Current page indicator. Close via swipe-left or tap.
- **Type scale:** All `clamp()` values include mobile minimums. Hero: `clamp(2rem, 6vw, 4.5rem)`. Body: `1rem` (no reduction — readability is non-negotiable).
- **Section spacing:** Reduced vertical padding. Desktop: `py-32`. Mobile: `py-16`. Rhythm maintained.
- **System diagrams:** Simplified to core elements on mobile. Dense diagrams become single-column stacked versions.
- **Work page:** Table-of-contents sidebar becomes a top sticky accordion.
- **Capabilities page:** Two-column desktop grid becomes single-column with category accordions.
- **Lab page:** Filter bar becomes a horizontal scrollable chip list.
- **Contact form:** Full-width fields, stacked vertically. Labels above inputs. Touch-optimized spacing.
- **Spreadsheet Transformation:** Chaos → resolution becomes vertical stack (see Level 3 above).
- **Performance:** All images use `next/image` with responsive `sizes`. Mobile-first CSS. No heavy WebGL on mobile.

#### Risks
1. **"Systematic" can read as cold or impersonal** — Mitigation: The photography (builder at work, real environments) adds human warmth. The copy uses precise but conversational language. The About page presents a person, not a corporation.
2. **Information density may overwhelm non-technical visitors** — Mitigation: Progressive disclosure. Dense information is available but not forced. The default view is scannable; details reveal on interaction. The homepage narrative guides all visitors through the same story.
3. **System diagrams require design skill to execute well** — Mitigation: Keep diagrams simple. Each diagram answers one question. Maximum 7 nodes per diagram. Use the Phase 1 data visualization principle: single accent colour + neutral tones.
4. **Bloomberg/Terminal aesthetic might feel dated to some** — Mitigation: The terminal aesthetic is referenced conceptually (information density, systematic thinking), not literally (amber text on black, fixed-width layout). The execution is modern editorial, not 1980s terminal.
5. **Switzer font licensing** — Mitigation: Switzer is OFL-licensed (SIL Open Font License). Self-host via `next/font`. No usage restrictions.

#### Differentiation
Generic AI/SaaS sites use: hero with gradient blob → three feature cards → logo wall → testimonials → CTA. Every one looks interchangeable.

Systematic differentiates by:
1. **It thinks like its audience.** Founders and ops managers live in systems — workflows, processes, dependencies. The site reflects that mental model back at them.
2. **It proves, doesn't claim.** Evidence is structural — diagrams show architecture, screenshots show products, metrics come from verified sources. No fabricated outcomes.
3. **It's unapologetically structured.** Where other sites chase visual trends, Systematic builds on a grid, a hierarchy, and a system. The confidence is in the order.
4. **It uses information as atmosphere.** The Bloomberg/Pentagram influence — dense, precise, organized — signals competence without saying "we're competent."
5. **The signature interaction IS the value proposition.** "Spreadsheet Transformation" is not decorative — it's the product pitch rendered as motion design. A visitor who sees it understands what Dorian Apps does without reading a word.

---

### Direction 3: "Field Notes"

#### Concept name
**Field Notes**

#### Strategic rationale
Position the website as a published body of research and observation — like a Monocle field report, an architectural case study monograph, or a research lab's working papers. This direction frames Dorian Apps as an observant, investigative studio that builds software because it has studied operational problems in the wild and understands their patterns. For the target audience (founders, SMEs, ops managers), this positions Nik as someone who has "done the fieldwork" — who understands their problems because he has spent time observing them. The PRD's positioning "software for work that has outgrown spreadsheets" becomes a research finding: "After studying dozens of operational teams, we've observed a recurring pattern..." This direction leans heavily on the Pentagram and Monocle references from Phase 1 — editorial narrative, case-study authority, typographic confidence — but adds a documentary, investigative layer.

#### Hero idea
**"We've been watching how work happens."**

The hero opens with a statement of observation, not a pitch. A large-format headline: "Most important work still runs through spreadsheets, documents, and manual coordination." Supporting copy: "After building systems for construction sites, legal teams, field operations, and AI workflows, we've learned to recognize the pattern — and how to resolve it." Below the copy, a scroll of operational vignettes — short, specific observations: "A construction firm entering 500+ field reports manually every month," "A legal team matching invoices across three disconnected systems," "An AI product team losing agent context between sessions." The vignettes scroll horizontally (desktop) or vertically (mobile). The CTA is "Describe your problem" — inviting the visitor to contribute their own observation. The hero communicates value in under 8 seconds: observation → pattern recognition → capability.

#### Page architecture
- **Home:** Research publication — hero observation → field findings (operational patterns) → published work (case studies as research papers) → methodology (research approach) → lab notes → about the researcher → submit your observation (contact)
- **Work:** "Published Research" — projects as case studies with: abstract, problem context, methodology, findings, system designed, evidence, current status. Each presented as a research output, not a portfolio entry.
- **Capabilities:** "Research Domains" — organized by field of investigation. Each domain: what we've observed, what we've built in response, what we're still studying.
- **Approach:** "Research Methodology" — Nik's method as a research process. Observe → Document → Analyze → Prototype → Validate → Publish.
- **Lab:** "Working Papers" — experiments as research-in-progress with hypothesis, method, preliminary findings. Peer-review-style status indicators.
- **About:** "About the Researcher" — Nik as an investigator-builder. The PRD framing applied.
- **Contact:** "Submit an Observation" — "What operational problem are you experiencing?"

#### Typography
**Primary:** General Sans (Regular 400, Medium 500, Semibold 600) — A clean, modern sans that leans slightly warmer than Switzer. Works at both editorial display sizes and extended reading lengths. **Serif accent:** A restrained serif (Source Serif 4 or similar) for large pull quotes and observation highlights — used on maximum 2–3 lines per page. This adds the "published research" texture without becoming a magazine. Monospace: JetBrains Mono for metadata only.

#### Colour system
Slightly warmer than Systematic. Base: `#080808` with a subtle warm undertone. Elevated surface: `#100F0E` — warmer than Systematic's cool surfaces. Body text: slightly warm off-white (`#EDECEA`). Accent colours same as Phase 1 but with a slight warmth bias. The palette feels like a research library or archive — warm, serious, contemplative.

#### Image direction
Documentary photography with an observational lens. The six scenes from Phase 1 are shot from an investigator's perspective: slightly candid, observed rather than staged. The builder at work — captured from across the room. Documents on a desk — photographed as found, not arranged. Field operations — real environments, real light, real mess. Less controlled than Systematic, more human than Workshop.

#### Motion direction
- **Tier 1:** Standard interface feedback (150–250ms).
- **Tier 2:** Content reveals as "findings being presented" — text and images slide in with a slight delay, as if being placed on a desk for examination. Scroll-driven reveal with `scrub: 0.4`.
- **Tier 3:** "The Pattern Recognition" — a signature interaction where a series of disconnected operational artifacts (spreadsheet screenshot, email thread, paper form, chat log) are shown, then overlaid with a systematic analysis: "Pattern detected: manual data re-entry across three disconnected systems." The artifacts fade, the analysis resolves into a system diagram showing the solution. Plays once on scroll. Duration: ~2.5s.

#### Signature interaction
**"Pattern Recognition."** The visitor scrolls past several "field observations" (operational friction examples). Then, a section activates: the observations are pulled together, connected by thin animated lines to a central diagnosis — "Pattern: Disconnected tools creating manual coordination overhead." The diagnosis then resolves into a system solution. This is a more narrative, less diagrammatic version of Systematic's Spreadsheet Transformation. It tells a story: observation → diagnosis → resolution.

#### Mobile adaptation
Similar to Systematic: stacked vertical layouts, reduced diagram complexity, touch-optimized navigation. The vignette scroll becomes a vertical stack. Pattern Recognition becomes a simpler two-stage reveal.

#### Risks
1. **"Field Notes" can feel academic or bloodless** — Mitigation: The copy must be vivid and specific, not abstract. Real operational problems, not theoretical ones.
2. **The research framing might undersell Nik's technical capability** — Mitigation: Product evidence and system diagrams provide the technical proof. The research framing adds intellectual credibility — it positions Nik as someone who thinks before building, which is exactly what clients want.
3. **Editorial serif accent needs precise execution** — Mitigation: Maximum 2–3 instances per page. Used only for observations and pull quotes. Never for UI or navigation.

#### Differentiation
Generic AI/SaaS sites pitch. Field Notes observes. The framing shift from "we can solve your problems" to "we've studied these problems and here's what we've learned" is categorically different. It communicates confidence through evidence, not claims. It treats the visitor as a peer — someone capable of recognizing the pattern in their own operation once it's pointed out. This is the most sophisticated positioning of the three directions.

---

## PART B — SELECTED DIRECTION: SYSTEMATIC

### Selection Rationale

**Direction 2 ("Systematic") is selected as the primary creative direction for the Dorian Apps website.**

**Evidence for selection:**

1. **Best alignment with Phase 1 visual research.** Systematic directly synthesizes the Dieter Rams (honest reduction), Bloomberg Terminal (information density as trust), Pentagram (editorial narrative through work), MIT Tech Review (systems-driven identity), and Datadog/Atlassian (data visualization as clarity) references. It is the most coherent synthesis of the approved visual research.

2. **Strongest differentiation from generic AI/SaaS.** The Systematic direction is structurally different from template sites. It does not use: hero gradient blobs, three feature cards, logo walls, testimonial carousels, or bento grids. Its organizing principle — the system — is intrinsic to the positioning, not a visual trend.

3. **Best supports the hero requirement.** "Communicate value in under 10 seconds" (PRD lines 428-431). The hero diagram in Systematic communicates the entire value proposition visually — a visitor sees the transformation before reading a word. This is measurably faster than copy-dependent hero sections in Workshop or Field Notes.

4. **Most compatible with existing codebase.** The current site already has: product data centralized in `src/data/site.ts`, design tokens in `src/data/design-tokens.ts`, and a component architecture in `src/components/`. The Systematic direction works with these structures — it adds rigor to an existing system rather than inventing a new metaphor.

5. **Best serves the target audience.** Founders, SME operators, ops managers, and construction/field-service managers think in workflows, processes, and systems. A systematic presentation mirrors their mental model: "This studio understands how I think about my business."

6. **Strongest narrative integration.** The PRD requires an "editorial and interactive narrative" (line 409). Systematic's narrative is built into the structure: each section advances the argument logically (pattern → products → method → evidence → action). Workshop's narrative relies on a metaphor that could tire; Field Notes' narrative is observational but less active.

7. **Lab page alignment.** The PRD requires the Lab page to "make experimentation feel disciplined rather than unfinished" (line 363). Systematic's "Experiments Registry" with status badges (VERIFIED / EXPERIMENTAL / IN DEVELOPMENT / ARCHIVED) is the most disciplined presentation of the three.

8. **Risk profile.** Systematic's primary risk (feeling cold) is mitigated by photography and copy — both controllable. Workshop's risk (reading as too small) and Field Notes' risk (feeling academic) are harder to mitigate through execution.

---

## Site Architecture (Systematic)

### Page Map

```
/
├── Home                "The System Overview"
├── /work               "System Registry"
├── /capabilities       "System Capabilities"
├── /approach           "Operating Manual"
├── /lab                "Experiments Registry"
├── /about              "System Operator"
├── /contact            "Initiate System Inquiry"
└── /404                "Route Not Found"
```

### Navigation Structure

**Primary navigation (7 links):**
1. Work
2. Capabilities
3. Approach
4. Lab
5. About
6. Contact

**Header:** Glass panel (`backdrop-blur-xl bg-neutral-950/60 saturate-150`). Logo mark (D/A monogram from existing assets) on left, nav links right, CTA ("Describe the problem") as accent link rightmost.

**Mobile:** Slide-out drawer from right. Glass background. Large touch targets. Close via swipe or tap.

**Footer:** Minimal. Logo mark, "Dorian Apps — Software for work that has outgrown spreadsheets.", copyright, one link to Contact.

### URL Structure

| Route | Purpose |
|-------|---------|
| `/` | Homepage — system overview |
| `/work` | Curated project registry |
| `/work/[slug]` | Individual project case study |
| `/capabilities` | Capability domains organized by problem |
| `/approach` | Nik's operating method |
| `/lab` | Experimental systems registry |
| `/lab/[slug]` | Individual experiment detail |
| `/about` | Nik's profile |
| `/contact` | Structured inquiry form |
| `/404` | Custom not-found page |

### Page Relationships

```
Home ──→ Work ──→ Capabilities ──→ Approach ──→ Lab ──→ About ──→ Contact
  │        │           │              │          │         │          │
  └──All pages link to Contact as terminal action────────────────────┘
```

The primary flow: Home (understand) → Work (see evidence) → Contact (act).
Secondary flows: Home → Capabilities (explore domains), Home → Approach (understand method), Home → Lab (see experiments), Home → About (who built this).

---

## Visual System (Formalized Tokens)

### Design Token Specification

All tokens are defined as CSS custom properties. These replace and extend the existing `design-tokens.ts` token set from the current codebase.

#### Surface Tokens

```css
:root {
  /* Page background */
  --surface-base: #070808;

  /* Elevated containers */
  --surface-elevated: #0D0F10;

  /* Alternating section background */
  --surface-alt: #0A0C0D;

  /* Floating panels, modals, tooltips */
  --surface-floating: #141618;

  /* Glass overlays */
  --surface-glass: rgba(7, 8, 8, 0.75);
  --surface-glass-blur: blur(20px);
  --surface-glass-saturate: saturate(150%);

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-default: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.12);
  --border-focus: rgba(235, 235, 237, 0.30);
}
```

#### Text Tokens

```css
:root {
  /* Primary text hierarchy */
  --text-primary: #EBEBED;
  --text-secondary: #8A8F98;
  --text-tertiary: #5A5F68;
  --text-disabled: #3A3F48;

  /* Text on accent backgrounds (inverted) */
  --text-on-accent: #070808;
}
```

#### Accent Tokens

```css
:root {
  /* Per-product accents — only one active at a time */
  --accent-docvault: #F59E0B;
  --accent-codexpilot: #06B6D4;
  --accent-fieldops: #10B981;
  --accent-0brain: #8B5CF6;
  --accent-fenix: #D4A853;

  /* Global site chrome accent */
  --accent-global: #EBEBED;

  /* Active accent — set via data-accent attribute or GSAP scrub */
  --accent-active: var(--accent-global);
  --accent-active-rgb: 235, 235, 237;
}
```

#### Typography Tokens

```css
:root {
  /* Font families */
  --font-sans: 'Switzer', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;

  /* Type scale (fluid via clamp) */
  --text-hero: clamp(2.5rem, 6vw, 4.5rem);
  --text-page-title: clamp(2rem, 4vw, 3.25rem);
  --text-section-heading: clamp(1.5rem, 3vw, 2.25rem);
  --text-subsection: 1.25rem;
  --text-body-lg: 1.125rem;
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-label: 0.75rem;
  --text-meta: 0.75rem; /* monospace */

  /* Weights */
  --weight-regular: 400;
  --weight-medium: 500;
  --weight-semibold: 600;

  /* Tracking */
  --tracking-hero: -0.02em;
  --tracking-title: -0.015em;
  --tracking-heading: -0.01em;
  --tracking-body: normal;
  --tracking-label: 0.03em;
  --tracking-meta: 0.02em;

  /* Line heights */
  --leading-display: 1.05;
  --leading-heading: 1.15;
  --leading-body: 1.6;
  --leading-label: 1.4;

  /* Max width for readable text */
  --measure-body: 65ch;
}
```

#### Spacing Tokens

```css
:root {
  /* Vertical rhythm — all multiples of 8px */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 1rem;     /* 16px */
  --space-md: 1.5rem;   /* 24px */
  --space-lg: 2rem;     /* 32px */
  --space-xl: 3rem;     /* 48px */
  --space-2xl: 4rem;    /* 64px */
  --space-3xl: 6rem;    /* 96px */
  --space-4xl: 8rem;    /* 128px */

  /* Section padding */
  --section-padding-y: clamp(4rem, 8vw, 8rem);
  --section-padding-x: clamp(1.5rem, 5vw, 3rem);

  /* Container max widths */
  --container-narrow: 48rem;   /* Reading width */
  --container-default: 72rem;  /* Standard content */
  --container-wide: 80rem;     /* Full layout width */
  --container-full: 100%;      /* Full bleed */
}
```

#### Motion Tokens

```css
:root {
  /* Durations */
  --duration-instant: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;
  --duration-section: 600ms;
  --duration-reveal: 800ms;
  --duration-signature: 2500ms;

  /* Easings */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Stagger */
  --stagger-children: 80ms;
  --stagger-cards: 120ms;
}
```

#### Shadow Tokens

```css
:root {
  --shadow-none: none;

  /* Subtle elevation — cards, panels */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);

  /* Standard elevation — floating panels */
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.4);

  /* High elevation — modals */
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.5);

  /* Glass panel glow */
  --shadow-glass: 0 0 0 1px rgba(255, 255, 255, 0.06), 0 4px 24px rgba(0, 0, 0, 0.3);
}
```

#### Z-Index Scale

```css
:root {
  --z-base: 0;
  --z-content: 10;
  --z-sticky: 20;
  --z-header: 30;
  --z-overlay: 40;
  --z-modal: 50;
  --z-tooltip: 60;
}
```

#### Radius Tokens

```css
:root {
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;   /* Use sparingly — not on every card */
  --radius-full: 9999px;
}
```

### Token Usage Rules

1. **All visual values must reference tokens.** No hardcoded colours, spacing, or typography in components.
2. **Accent switching:** Set `data-accent="docvault"` (or corresponding value) on the `<body>` or section element. The `--accent-active` variable resolves to the correct accent. CSS: `[data-accent="docvault"] { --accent-active: var(--accent-docvault); }`.
3. **Homepage accent scrub:** GSAP ScrollTrigger interpolates `--accent-active` across product sections. Only one accent visible at any time.
4. **Tailwind integration:** Tokens are mapped into Tailwind config via `extend.colors`, `extend.fontFamily`, `extend.fontSize`, etc. The existing `tailwind.config.ts` structure (65 lines) is preserved and extended.
5. **Dark mode only:** The site is exclusively dark. No light-mode tokens are defined. No `prefers-color-scheme` detection needed.

---

## Content Hierarchy — Homepage

### Section Sequence (top to bottom)

```
┌─────────────────────────────────────────────────┐
│ HEADER (glass, persistent)                       │
├─────────────────────────────────────────────────┤
│ 1. HERO DIAGRAM                                  │
│    System diagram: manual chaos → orchestrated   │
│    Headline: "Software for work that has         │
│    outgrown spreadsheets."                       │
│    Sub: "Dorian Apps designs and builds AI-      │
│    powered products, agentic systems, and        │
│    operational tools for complex workflows."     │
│    CTA: [Describe the problem] [Explore the work]│
│    First impression time target: ≤3 seconds      │
├─────────────────────────────────────────────────┤
│ 2. PATTERN RECOGNITION                           │
│    Headline: "We keep seeing the same pattern."  │
│    5 operational friction archetypes:            │
│    • Manual data re-entry across systems         │
│    • Document processing at volume               │
│    • Field-to-office coordination lag            │
│    • Agent context loss between sessions         │
│    • Disconnected tools creating overhead         │
│    Each: problem statement → Dorian response     │
│    → Scroll-driven reveal (staggered)            │
├─────────────────────────────────────────────────┤
│ 3. SELECTED SYSTEMS                              │
│    Headline: "Systems we've built."              │
│    4 product cards in order:                     │
│    • DocVault — Document intelligence            │
│    • Field Ops (FENIX) — Construction tracking   │
│    • CodexPilot — Developer tools                │
│    • 0Brain — Persistent agent memory            │
│    Each: name → problem solved → simple diagram  │
│    → evidence link → accent colour active        │
│    → Hover: diagram detail expands               │
├─────────────────────────────────────────────────┤
│ 4. AGENT ARCHITECTURE                            │
│    Headline: "How our agents work."              │
│    Process diagram: Worker → Judge → Iterate →   │
│    Deploy                                          │
│    4 stages with single-sentence explanations     │
│    → Scroll-driven diagram activation            │
│    → Also links to Lab page for deeper detail    │
├─────────────────────────────────────────────────┤
│ 5. METHOD                                        │
│    Headline: "How a system gets built."          │
│    6 stages: Understand → Identify → Design →    │
│    Build → Verify → Iterate                      │
│    Each stage: single line + expandable detail   │
│    → Evidence anchors to specific products       │
│    → Compact, scannable, expandable               │
├─────────────────────────────────────────────────┤
│ 6. LAB OUTPUT                                    │
│    Headline: "What we're exploring."             │
│    3-4 experimental systems with status badges:  │
│    VERIFIED / EXPERIMENTAL / IN DEVELOPMENT       │
│    → Links to full Lab page                      │
│    → Honest about maturity                       │
├─────────────────────────────────────────────────┤
│ 7. CONTACT                                       │
│    Headline: "Describe the problem."             │
│    Short form: Name, Email, "What are you trying │
│    to improve?"                                  │
│    → Full form on /contact has all fields        │
│    → This is a focused conversion point          │
├─────────────────────────────────────────────────┤
│ FOOTER (minimal)                                  │
└─────────────────────────────────────────────────┘
```

### Content Principles

1. **Every section answers one question.** Hero: "What is this?" Pattern: "Why does this matter?" Systems: "What have you built?" Agent Arch: "How does your AI work?" Method: "How do you work?" Lab: "What's next?" Contact: "How do I start?"

2. **No filler.** If a section doesn't advance the narrative or provide evidence, it doesn't exist. The PRD explicitly prohibits "filler sections repeated across pages" (line 425 area).

3. **Progressive disclosure.** Each section presents immediate understanding (headline + one sentence) with deeper detail available on interaction (hover, click, scroll). This satisfies both the 3-second clarity requirement and the depth-seeking visitor.

4. **Evidence anchors.** Claims link to evidence: "See DocVault document classification pipeline" is a link to `/work/docvault`. No claim floats unmoored.

5. **One accent at a time.** The homepage scrolls through product accents: neutral (hero) → amber (DocVault) → green (Field Ops) → cyan (CodexPilot) → violet (0Brain) → neutral (method/lab/contact).

---

## Three-Level Motion System

### Level 1 — Interface Feedback (100–250ms)

| Interaction | Implementation | Duration | Easing |
|-------------|---------------|----------|--------|
| Button hover | Background shifts `rgba(255,255,255,0.04)` → `rgba(255,255,255,0.08)` | 150ms | `ease-out` |
| Link underline | `transform: scaleX(0→1)`, origin: left | 250ms | `ease-out` |
| Card hover | `translateY(-2px)` + border opacity 0.06→0.12 | 200ms | `ease-out` |
| Focus ring | `outline: 2px solid var(--accent-active)`, offset 2px | 0ms on / 150ms off | `ease-out` |
| Page transition | Framer Motion `AnimatePresence` — fade + `scale(0.98→1)` | 300ms | `ease-out` |
| Form field focus | Border 0.06→0.12 + subtle background shift | 150ms | `ease-out` |
| Navigation hover | Nav link opacity 0.6→1.0 | 150ms | `ease-out` |
| Loading indicator | Minimal indeterminate bar in muted colour | continuous | linear |
| Mobile menu toggle | Icon rotate 0→90° + drawer slide | 300ms | `ease-in-out` |

### Level 2 — Section Transitions (500–850ms)

| Transition | Implementation | Duration | Trigger |
|------------|---------------|----------|---------|
| Content reveal | Staggered children: headline → copy → visual. `staggerChildren: 0.08` | 600ms | Scroll into view (GSAP ScrollTrigger, `start: 'top 80%'`) |
| Diagram activation | SVG `stroke-dashoffset` animation, draws line-by-line | tied to scroll | ScrollTrigger with `scrub: 0.6` |
| Accent hue shift | GSAP interpolates `--accent-active` between product sections | tied to scroll | ScrollTrigger with `scrub: 0.8` |
| Background glow | `radial-gradient` position/opacity shift | tied to scroll | ScrollTrigger with `scrub: 1.0` |
| Image reveal | `opacity: 0→1` + `translateY(40px→0)` | 800ms | Scroll into view |
| Metric counter | `useSpring` animates numeric value 0→target | 1200ms | Scroll into view (once) |
| Section background | Alternating `--surface-base` / `--surface-alt` as sections enter viewport | instant with fade | ScrollTrigger |
| Pattern cards reveal | Cards slide in from alternating directions, staggered 120ms | 600ms each | Scroll into view |

### Level 3 — Signature Interaction: "The Spreadsheet Transformation"

**Purpose:** Communicate the core value proposition through motion — transforming manual, disconnected workflows into an orchestrated systematic workflow.

**Visual design:**
- Left side: Familiar chaotic arrangement — stylized spreadsheet cells, email thread fragments, document icons, chat bubbles — overlapping, disconnected, slightly tilted. Colours: muted greys, faint warm tones.
- Right side: Clean systematic flow — pipeline nodes connected by precise lines, structured output, dashboard panel. Colours: product accent + neutral tones.
- Centre: A dividing line that moves as the user scrolls, progressively revealing the systematic state.
- The transformation is driven by scroll: as the visitor scrolls down, the dividing line sweeps from left to right, revealing the resolution. (Alternatively: the chaotic elements reorganize and flow into their systematic positions.)

**Technical implementation:**
- Pure SVG + CSS transforms. No canvas, no WebGL.
- Under 50 DOM elements.
- GSAP ScrollTrigger with `scrub: 1.2` — deliberate, controlled pacing that lets the visitor absorb what's happening.
- `will-change: transform` only on animated elements, removed after animation completes.
- All elements loaded statically first (the resolved state), then GSAP applies initial chaotic positions. This means: if JS fails, the user sees the "after" state (which is fine). If GSAP fails, the resolved state is already visible.
- Reduced motion: Static "after" state. Single `opacity` fade transition (400ms). No position animation.

**Desktop:** Full horizontal layout. ~1200px wide. Left chaos → right resolution. Scroll drives the sweep.

**Tablet:** Condensed horizontal. ~700px wide. Same logic, tighter spacing.

**Mobile:** Vertical stack. Chaos on top, resolution below. Scroll reveals the resolution below. No horizontal sweep — vertical reveal instead. Touch-friendly: scroll is natural.

**Keyboard:** The section is not an interactive element — it's scroll-driven. Tab order passes through normally. All content within is standard HTML (SVG with `role="img"` and `aria-label`).

**Performance budget:**
- SVG size: under 15KB
- Animation overhead: under 5% CPU on mid-range device
- Paint area: under 50% of viewport
- First paint: content visible before animation starts

**Failure fallback:** If GSAP fails to load → static "after" state. If ScrollTrigger can't initialize (e.g., in SSR) → static "after" state. If `prefers-reduced-motion` → static "after" state + single fade.

**Measurement:** This interaction is successful if a first-time visitor, after scrolling through it, can articulate "they turn manual processes into systematic workflows" — even if they scrolled past the headline without reading it.

---

## Page-Level Purpose

### Home — "The System Overview"
**Purpose:** Establish positioning immediately. Communicate the value proposition in under 3 seconds (visual) and under 10 seconds (copy-supported). Present the operating philosophy through the structure of the page itself. Show selected work as evidence. Lead toward a focused contact action. This is the primary conversion page — everything else supports it.

**Success metric:** Visitor can articulate what Dorian Apps does without scrolling back up.

### Work — "System Registry"
**Purpose:** Provide deep evidence of capability. Each case study follows a consistent format: operational context → system designed → architecture → difficult decisions → evidence → status. This page exists to convert the interested visitor into a confident one. It answers: "Can they actually build things?" The registry format makes comparison and scanning natural.

**Success metric:** Visitor spends >30 seconds on a case study or clicks through to a live product.

### Capabilities — "System Capabilities"
**Purpose:** Show breadth without dilution. Organized by problem domain, not technology. This page serves two audiences: (1) the visitor who knows their problem but not the solution category, and (2) the returning visitor checking "can Dorian handle X?" Every capability links to at least one Work case study as evidence.

**Success metric:** Visitor navigates from a capability to a relevant Work case study.

### Approach — "Operating Manual"
**Purpose:** Build trust in the method. This page answers: "How does Nik work? What's it like to build something with him?" The structured, documentation-style format signals professionalism and process discipline. It differentiates from agencies that say "we're agile" without evidence, and from freelancers who have no documented method at all.

**Success metric:** Visitor reads at least 3 of the 6 process stages (via scroll depth or expand interactions).

### Lab — "Experiments Registry"
**Purpose:** Show technical depth without overclaiming. This page makes experimentation look disciplined. Status badges (VERIFIED / EXPERIMENTAL / IN DEVELOPMENT / ARCHIVED) are honest about maturity. It serves: (1) technical visitors who want to assess Nik's depth, (2) potential collaborators interested in specific research areas, (3) anyone wondering "does Dorian actually do AI research or just use APIs?"

**Success metric:** Visitor filters by status or clicks into an experiment detail.

### About — "System Operator"
**Purpose:** Present Nik as a credible, independent systems builder. Not a CV — a statement of philosophy and evidence of work. The PRD framing is preserved: "Nik is a developer and independent product builder based in Switzerland. His work sits between software engineering, applied AI, product design, and operational problem-solving." This page humanizes the systematic presentation of the rest of the site.

**Success metric:** Visitor reads the full bio and timeline (scroll depth).

### Contact — "Initiate System Inquiry"
**Purpose:** Convert a qualified visitor into a project inquiry. The form structure (from PRD lines 383-392) qualifies leads by asking about the problem, not the budget. Fields: Name, Email, Organisation, "What are you trying to improve?", "How is it handled today?", "What is breaking or taking too much time?", Timeline, Optional budget range. This is the terminal action for every page on the site.

**Success metric:** Form submission rate from qualified traffic (visitors who reached at least one Work case study or the Approach page).

### 404 — "Route Not Found"
**Purpose:** Graceful failure. A simple page with the 404 graphic (existing asset, may need restyling), "This route doesn't exist," and links to Home and Contact. Minimal, calm, consistent with the systematic visual language.

---

## Interaction Story

### The Visitor's Journey

**Moment 0: Page load (0–300ms)**
The page renders. Content is visible. No loading spinner, no preloader animation. The hero diagram is already in its "before" state — a static SVG showing manual workflow chaos. The headline is visible: "Software for work that has outgrown spreadsheets."

**Moment 1: First impression (0–3 seconds)**
The visitor sees the hero diagram and headline simultaneously. Within 1.5 seconds, the diagram animates (CSS `@keyframes`): the chaotic elements smoothly reorganize into the systematic workflow. The transition is subtle — no flash, no dramatic reveal — but unmistakable. The visitor understands: "Oh, they turn messy processes into clean systems." This is the 3-second clarity test.

**Moment 2: Orientation (3–10 seconds)**
The visitor reads the supporting copy: "Dorian Apps designs and builds AI-powered products, agentic systems, and operational tools for complex workflows." They see two CTAs: "Describe the problem" (prominent) and "Explore the work" (secondary). They've been oriented.

**Moment 3: Scroll — Pattern Recognition (10–30 seconds)**
The visitor scrolls. The "We keep seeing the same pattern" section activates. Five operational friction cards stagger into view. Each card names a specific problem — something the visitor might recognize from their own operation. The cards feel like diagnosis, not marketing. One card resonates: "Manual data re-entry across disconnected systems." The visitor thinks: "That's exactly what we deal with."

**Moment 4: Scroll — Selected Systems (30–60 seconds)**
The visitor scrolls into the product section. The accent colour shifts to amber (DocVault). A product card shows: document intelligence system, problem solved, simple architecture diagram, link to case study. The visitor clicks "Explore DocVault →" and navigates to the Work page.

**Moment 5: Deep dive — Work (60+ seconds)**
On the Work page, the visitor reads the DocVault case study. They see: operational context (legal document processing), system designed (RAG pipeline), architecture diagram, difficult decisions, evidence, and a status: VERIFIED. The systematic format makes the case study feel like documentation, not marketing. The visitor navigates back to the homepage.

**Moment 6: Scroll — The Spreadsheet Transformation (90+ seconds)**
Continuing the homepage scroll, the visitor encounters the signature interaction. The chaotic manual workflow transforms into a systematic flow as they scroll. Even if they skimmed the hero, this interaction reinforces the message: manual → systematic. It's a second touchpoint for the core value proposition.

**Moment 7: Scroll — Method and Lab (120+ seconds)**
The visitor scrolls through the Method section — six stages, compact, expandable. They expand "Verify" and see: "Every system is tested against real usage before we call it done. See: Fenix field report validation pipeline." They scroll to Lab: experiments with status badges. One says "VERIFIED" — it became a product. One says "IN DEVELOPMENT" — it's being explored. The honesty is refreshing.

**Moment 8: Conversion — Contact (whenever ready)**
At any point, the visitor can click "Describe the problem" (in the header, in the hero, or at the end of the homepage). The Contact page loads. The form asks: "What are you trying to improve?" — not "What's your budget?" The visitor types a real operational problem. They submit. The inquiry is sent.

### Interaction Principles

1. **Scroll is the primary navigation.** The site is designed to be scrolled. Animations ride on scroll; they don't override it. No scroll-jacking.
2. **Click is for depth.** Clicking navigates to detail pages or expands in-page content. Clicking is an intentional action, not a requirement.
3. **Hover reveals, doesn't surprise.** Card details, diagram annotations, and link states appear on hover — but nothing critical is hidden behind hover. Mobile has equivalent tap interactions.
4. **State is always visible.** Status badges, active navigation, current accent — state is communicated through visual indicators, not hidden interactions.
5. **Failure is graceful.** Every animation has a static fallback. Every interactive element is keyboard-accessible. Every image has alt text.

---

## Responsive Strategy

### Breakpoint System

| Breakpoint | Width | Columns | Typography | Layout behaviour |
|------------|-------|---------|------------|------------------|
| **Mobile** | < 640px | 1 column | Full type scale, body at 1rem | Single column, stacked |
| **Tablet** | 640–1024px | 2–4 columns | Full type scale | Condensed grid, some side-by-side |
| **Desktop** | ≥ 1024px | 8–12 columns | Full type scale | Full grid, multi-column |

### Breakpoint-Specific Adaptations

#### Mobile (< 640px)
- **Navigation:** Slide-out drawer from right. Glass background. Large touch targets (min 44px height). Close via swipe-left or tap. Hamburger icon top-right.
- **Hero diagram:** Simplified — the full workflow diagram collapses to a two-state toggle. Tap to see "before" → "after." Static fallback always visible.
- **Section spacing:** Vertically compressed. `py-16` instead of `py-32`.
- **Content:** Single column. All cards and grids stack vertically.
- **Signature interaction:** Vertical stack — chaos on top, resolution below. Scroll reveals resolution. No horizontal sweep.
- **Typography:** Hero `clamp(2rem, 6vw, 3rem)`. Body at `1rem` (no reduction). Line lengths naturally constrained by viewport.
- **Touch targets:** Minimum 44×44px for all interactive elements.
- **Images:** All images use `next/image` with responsive `sizes` attribute. Mobile-specific crops where needed (documented per image).
- **Performance:** Lazy loading below the fold. Reduced animation complexity. No parallax effects on mobile (they perform poorly on touch devices).

#### Tablet (640–1024px)
- **Navigation:** Horizontal nav if space allows; otherwise same drawer pattern as mobile at the lower end of the range.
- **Hero diagram:** Condensed horizontal layout. Full diagram at reduced scale.
- **Content:** 2-column grids where natural. Product cards can show side-by-side.
- **Signature interaction:** Condensed horizontal sweep. Reduced element count.
- **Typography:** Hero `clamp(2rem, 5vw, 4rem)`.
- **Section spacing:** `py-24`.

#### Desktop (≥ 1024px)
- **Full experience:** All interactions, animations, and layouts as designed.
- **Navigation:** Horizontal glass header. 7 nav links + CTA.
- **Hero diagram:** Full horizontal workflow transformation.
- **Content:** Multi-column grids. Section alternate backgrounds visible.
- **Signature interaction:** Full horizontal sweep with all elements.
- **Typography:** Full hero scale at `clamp(2.5rem, 6vw, 4.5rem)`.

### Responsive Content Strategy

Content is not hidden on any breakpoint. All information is available on all devices. The presentation adapts, not the substance.

| Content | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Hero diagram | Full interactive | Condensed interactive | Toggle or static |
| Pattern cards | Horizontal row, 5 across | 2 columns | Vertical stack |
| Product cards | 4 across | 2×2 grid | Vertical stack |
| Agent diagram | Full SVG, annotated | Condensed SVG | Simplified SVG |
| Method stages | Horizontal timeline | Horizontal timeline | Vertical accordion |
| Lab cards | 3 across | 2 across | Vertical stack |
| Contact form | 2 columns (name/email), rest full-width | 2 columns | Single column |

### Performance Strategy

- **Mobile-first CSS:** Base styles target mobile; `min-width` media queries add complexity.
- **Image optimization:** `next/image` with WebP/AVIF formats. Lazy loading below fold. Responsive `sizes` attribute.
- **Font loading:** `next/font` with `display: swap` for Switzer (self-hosted). JetBrains Mono subset to Latin.
- **Animation budget:** No more than 3 concurrent CSS animations on mobile. GSAP ScrollTrigger instances limited to 5 on mobile (vs. 12 on desktop).
- **Bundle size:** Hero diagram SVG inlined (under 15KB). No animation library loaded for mobile unless scroll depth triggers it.
- **Lighthouse target:** ≥ 90 Performance on desktop, ≥ 80 on mobile (realistic for an animation-rich site).

---

## Reference Map — PRD Alignment

| PRD Requirement | Line(s) | Where Addressed in Phase 2 |
|-----------------|---------|---------------------------|
| Hero communicates value in under 10 seconds | 428-431 | Hero diagram design (Part A, Direction 2; Part B, Interaction Story Moment 1) |
| "Software for work that has outgrown spreadsheets" | 434-435 | Hero headline (all directions; Part B Content Hierarchy) |
| No "AI solutions for your business" structure | 404-408 | All three directions deliberately avoid it; Part B proves with content hierarchy |
| Editorial/interactive narrative | 409 | Direction 2 "Systematic" selected for strongest narrative structure |
| Each page has distinct purpose | ~425 area | Part B Page-Level Purpose section — every page defined |
| No filler sections repeated across pages | ~425 area | Content hierarchy: every section answers one question |
| Hero no laptop mockup or glowing sphere | 430-431 | Hero is a system diagram, not an image overlay |
| Three-level motion system | 602-655 | Part B Three-Level Motion System — all three tiers specified |
| Signature interaction explains how Dorian thinks | 642-644 | "Spreadsheet Transformation" directly communicates value proposition |
| Reduced-motion alternative | 651 | All three tiers include `prefers-reduced-motion` fallbacks |
| Keyboard-accessible | 652 | Mentioned in signature interaction and interaction principles |
| Performance budget | 653 | Specified for signature interaction and mobile |
| Failure fallback | 654 | Specified: static "after" state for signature interaction |
| 27 anti-patterns from Phase 1 | Phase 1 lines 278-320 | All directions respect the Phase 1 guardrails |
| Colour: #070808 base, per-product accents | Phase 1 lines 141-154 | Part B Visual System tokens preserve these exactly |
| Typography: premium sans + JetBrains Mono | Phase 1 lines 161-179 | Part B: Switzer selected, JetBrains Mono confirmed |
| Photorealistic scenes (6) | PRD 526-566 | Referenced in all directions; Part B image direction confirms |
| Image consistency | PRD 568-584 | Part B image direction: consistent lighting, camera, materials, etc. |
| Image documentation standard | PRD 587-600 | Referenced in Part B image direction |
| Site architecture: Home/Work/Capabilities/Approach/Lab/About/Contact | PRD 298-424 | Part B site architecture matches with minor naming refinements |
| Contact form fields | PRD 383-392 | Part B Contact page purpose section |
| Contact CTA language | PRD 394-400 | "Describe the problem" is primary CTA across all directions |
| Nik's About framing | PRD 369-377 | Part B About page purpose section |

---

## Appendix A — Direction Comparison Matrix

| Criterion | Workshop | **Systematic** ← | Field Notes |
|-----------|----------|-----------------|-------------|
| Positioning clarity | High | **Highest** | Medium-High |
| Differentiation from SaaS | High | **Highest** | High |
| Phase 1 alignment | High | **Highest** | Medium |
| Hero speed (sub-10s) | ~8s | **~3-5s** | ~8s |
| Narrative strength | Medium | **High** | High |
| Target audience resonance | Medium-High | **Highest** | Medium |
| Codebase compatibility | Medium | **High** | Medium |
| Risk profile | Medium | **Low-Medium** | Medium |
| Lab page alignment | Medium | **Highest** | High |
| Scalability (future content) | Medium | **High** | Medium-High |
| Memorability | High | **High** | Medium-High |

---

## Appendix B — Next Phase Handoff

**Phase 3 (Design Token Specification)** should:
1. Convert all Part B visual system tokens into `src/data/design-tokens.ts` updates.
2. Map tokens into `tailwind.config.ts` extensions.
3. Define all `data-accent` attribute selectors in CSS.
4. Create the Switzer + JetBrains Mono font loading configuration.
5. Version all tokens for the systematic visual language.

**Phase 4 (Component Architecture)** should:
1. Define the component tree for each page.
2. Specify the hero diagram as a standalone component with static + animated states.
3. Specify the Spreadsheet Transformation as a standalone interactive component.
4. Define the Work case study template component.
5. Define the Lab experiment card component with status badge system.
6. Define the Capabilities domain card component.
7. Create the shared section wrapper with accent-switching support.

**Phase 5 (Implementation — Homepage)** should:
1. Build the hero diagram component first (highest impact, highest complexity).
2. Implement the Pattern Recognition section.
3. Implement Selected Systems section with per-product accent switching.
4. Implement Agent Architecture diagram.
5. Implement Method section with expandable stages.
6. Implement Lab Output section.
7. Implement Contact section (condensed form for homepage).
8. Wire GSAP ScrollTrigger for all scroll-driven animations.
9. Implement the Spreadsheet Transformation signature interaction.
10. Test against performance budget and reduced-motion preferences.

---

*End of Phase 2 — Experience Concept. This deliverable provides the creative foundation for all subsequent design and implementation phases of the Dorian Apps production website rebuild.*
