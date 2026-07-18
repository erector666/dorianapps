/**
 * Motion utilities — shared helpers and animation configuration.
 */

/** Check if the user prefers reduced motion. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Alias — same check, different name. */
export const isReducedMotion = prefersReducedMotion;

/** Check if the viewport is mobile (< 900px). */
export const isMobile = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 899px)").matches;

/** Spring animation defaults for Framer Motion. */
export const springDefaults = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
} as const;

/** Gentle spring for subtle hover/mount effects. */
export const gentleSpring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 14,
} as const;

/** Stagger delay between children for staggered reveals. */
export const STAGGER_DEFAULT = 0.06;

/** Duration presets (seconds). */
export const DURATION = {
  fast: 0.25,
  base: 0.5,
  slow: 0.85,
} as const;

/** Easing curves matching CSS custom properties. */
export const EASING = {
  outExpo: [0.16, 1, 0.3, 1],
  inOut:   [0.4, 0, 0.2, 1],
} as const;

/** Framer Motion fade-up-from-below variant. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASING.outExpo },
  },
};

/** Staggered children container variant. */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER_DEFAULT },
  },
};
