// Design tokens — Systematic palette (Phase 2).
// Consumed by Tailwind config, CSS custom properties, and programmatic color usage.

export const accentColors = {
  amber:   { name: "Amber",   hex: "#F59E0B", hue: 42  },
  cyan:    { name: "Cyan",    hex: "#06B6D4", hue: 187 },
  green:   { name: "Green",   hex: "#10B981", hue: 160 },
  violet:  { name: "Violet",  hex: "#8B5CF6", hue: 258 },
  gold:    { name: "Gold",    hex: "#D4A853", hue: 42  },
} as const;

export const productAccents = {
  docvault:                 accentColors.amber,
  codexpilot:               accentColors.cyan,
  "fenix-construction-tracker": accentColors.green,
  "0brain":                 accentColors.violet,
  "fenix-plus-sa":          accentColors.gold,
} as const;

export type AccentKey = keyof typeof accentColors;
export type AccentColor = typeof accentColors[AccentKey];

// Systematic surface palette (Phase 2)
export const surfacePalette = {
  base:     "#08090A",
  elevated: "#111215",
  alt:      "#0E1014",
  floating: "#181A1E",
  glass:    "rgba(8,9,10,0.72)",
} as const;

// Systematic text palette
export const textColors = {
  body:    "#EAEAEC",
  muted:   "#858993",
  inverse: "#08090A",
  disabled: "#52555C",
} as const;

export const borderColors = {
  subtle:  "rgba(255,255,255,0.08)",
  default: "rgba(255,255,255,0.12)",
  strong:  "rgba(255,255,255,0.18)",
  focus:   "rgba(255,255,255,0.32)",
} as const;

export const glass = {
  bg: "rgba(8,9,10,0.72)",
  blur: "20px",
  saturate: "140%",
} as const;

export const typography = {
  hero: {
    size: "clamp(2.5rem, 8vw, 6rem)",
    weight: "500",
    tracking: "-0.02em",
    lineHeight: "0.93",
  },
  section: {
    size: "clamp(2rem, 5vw, 4rem)",
    weight: "400",
    tracking: "-0.01em",
    lineHeight: "0.95",
  },
  cardTitle: {
    size: "1.25rem",
    weight: "500",
    tracking: "-0.01em",
  },
  body: {
    size: "1rem",
    weight: "400",
    tracking: "normal",
  },
  mono: {
    size: "0.875rem",
    weight: "400",
    tracking: "normal",
  },
  meta: {
    size: "0.75rem",
    weight: "400",
    tracking: "0.02em",
  },
  eyebrow: {
    size: "0.72rem",
    weight: "600",
    tracking: "0.18em",
  },
} as const;

export const shadows = {
  subtle:  "0 2px 8px rgba(0,0,0,0.40)",
  card:    "0 8px 32px rgba(0,0,0,0.48)",
  float:   "0 16px 48px rgba(0,0,0,0.56)",
  glow:    (hex: string) => `0 0 40px ${hex}22, 0 0 80px ${hex}14`,
} as const;

export const zIndex = {
  background: -1,
  content:    1,
  sticky:     10,
  header:     50,
  overlay:    100,
  modal:      200,
} as const;

export const motion = {
  spring: {
    type: "spring" as const,
    stiffness: 260,
    damping: 20,
  },
  gentle: {
    type: "spring" as const,
    stiffness: 120,
    damping: 14,
  },
  stagger: 0.06,
  duration: {
    fast: 0.25,
    base: 0.5,
    slow: 0.85,
  },
  easing: {
    outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
    inOut:   [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

// Spacing tokens (for systematic rhythm)
export const spacing = {
  section:  "clamp(5rem, 10vw, 9rem)",
  component: "clamp(2rem, 4vw, 4rem)",
  element:   "clamp(1rem, 2vw, 2rem)",
  inline:    "clamp(0.5rem, 1vw, 1rem)",
} as const;
