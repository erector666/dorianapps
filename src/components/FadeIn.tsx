"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/utils/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
  /** Animation engine: "gsap" (default, scroll-triggered) or "framer" (mount animation) */
  engine?: "gsap" | "framer";
}

export function FadeIn({ children, className = "", stagger = 0.1, y = 32, engine = "gsap" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // ─── GSAP engine (default) ──────────────────────────────
  useEffect(() => {
    if (engine !== "gsap" || !ref.current || prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);

      if (!ref.current || cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.from(ref.current?.children ?? [], {
          opacity: 0,
          y,
          stagger,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.set(ref.current?.children ?? [], { clearProps: "willChange,transform,opacity" });
          }
        });
      }, ref);

      cleanup = () => ctx.revert();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [stagger, y, engine]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
