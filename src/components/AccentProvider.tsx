"use client";

import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from "react";
import { accentColors, type AccentColor } from "@/data/design-tokens";

interface AccentContextValue {
  activeAccent: AccentColor;
}

const AccentContext = createContext<AccentContextValue>({
  activeAccent: accentColors.amber,
});

export function useAccent() {
  return useContext(AccentContext);
}

interface Props {
  children: ReactNode;
  /** CSS selector for sections to observe (default: '[data-stage]') */
  selector?: string;
  /** Fraction of viewport the section must intersect (default: 0.3) */
  threshold?: number;
}

const SLUG_TO_ACCENT: Record<string, keyof typeof accentColors> = {
  docvault: "amber",
  codexpilot: "cyan",
  "fenix-construction-tracker": "green",
  "0brain": "violet",
  "fenix-plus-sa": "gold",
  about: "violet",
  contact: "cyan",
};

export function AccentProvider({ children, selector = "[data-stage]", threshold = 0.3 }: Props) {
  const [activeAccent, setActiveAccent] = useState<AccentColor>(accentColors.amber);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll(selector);
    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let bestEntry: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting && (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio)) {
            bestEntry = entry;
          }
        }

        if (bestEntry?.target) {
          const slug = bestEntry.target.getAttribute("data-stage");
          if (slug && slug in SLUG_TO_ACCENT) {
            const key = SLUG_TO_ACCENT[slug] as keyof typeof accentColors;
            const accent = accentColors[key];
            setActiveAccent(accent);
            document.documentElement.style.setProperty("--accent-hue", String(accent.hue));
            document.documentElement.style.setProperty("--accent-hex", accent.hex);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, threshold, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [selector, threshold]);

  return (
    <AccentContext.Provider value={{ activeAccent }}>
      {children}
    </AccentContext.Provider>
  );
}
