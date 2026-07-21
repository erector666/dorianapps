import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/providers/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg:      "var(--color-bg)",
        surface: "var(--color-surface)",
        border:  "var(--color-border)",
        text:    "var(--color-text)",
        muted:   "var(--color-muted)",
        accent:  "var(--color-accent)",
        "surface-base":     "var(--surface-base)",
        "surface-elevated": "var(--surface-elevated)",
        "surface-alt":      "var(--surface-alt)",
        "surface-floating": "var(--surface-floating)",
        "surface-glass":     "var(--surface-glass)",
        "amber":   "var(--accent-amber)",
        "cyan":    "var(--accent-cyan)",
        "green":   "var(--accent-green)",
        "violet":  "var(--accent-violet)",
        "gold":    "var(--accent-gold)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        mono:    ["var(--font-mono)"]
      },
      fontSize: {
        hero:    ["var(--fs-hero)",    { lineHeight: "0.93", fontWeight: "500", letterSpacing: "-0.02em" }],
        section: ["var(--fs-section)", { lineHeight: "0.95", fontWeight: "400", letterSpacing: "-0.01em" }],
      },
      transitionTimingFunction: {
        "out-expo":   "var(--ease-out-expo)",
        "in-out-soft": "var(--ease-in-out)"
      },
      boxShadow: {
        "subtle": "var(--shadow-subtle)",
        "card":   "var(--shadow-card)",
        "float":  "var(--shadow-float)",
        "glass":  "0 24px 90px rgba(0,0,0,0.48), inset 0 1px 0 rgba(255,255,255,0.14)",
      },
      zIndex: {
        bg:      "-1",
        content: "1",
        sticky:  "10",
        header:  "50",
        overlay: "100",
        modal:   "200",
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 9rem)",
      },
    }
  },
  plugins: []
};

export default config;
