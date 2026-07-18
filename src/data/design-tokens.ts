// Design tokens — centralized constants for the Dorian Apps redesign.
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

export const surfacePalette = {
  base:     "#070808",
  elevated: "#0E0F10",
  floating: "#141518",
  alt:      "#111215",
} as const;

export const textColors = {
  body:   "#F5F5F7",
  muted:  "#8A8F98",
  inverse: "#070808",
} as const;

export const glass = {
  bg: "rgba(7,8,8,0.70)",
  blur: "20px",
} as const;

export const typography = {
  hero: {
    size: "clamp(2.5rem, 8vw, 6rem)",
    weight: "500",
    tracking: "-0.02em",
  },
  section: {
    size: "clamp(2rem, 5vw, 4rem)",
    weight: "400",
    tracking: "-0.01em",
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
