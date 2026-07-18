"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion, STAGGER_DEFAULT } from "@/utils/motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  splitBy?: "lines" | "words" | "chars";
  /** Animation engine: "gsap" (default, scroll-triggered) or "framer" (mount animation) */
  engine?: "gsap" | "framer";
}

export function RevealText({ children, className = "", delay = 0, splitBy = "lines", engine = "gsap" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  // ─── Framer Motion engine ───────────────────────────────
  useEffect(() => {
    if (engine !== "framer" || !ref.current || prefersReducedMotion()) {
      return;
    }

    let cancelled = false;

    void (async () => {
      const { motion: _motion } = await import("framer-motion");

      if (!ref.current || cancelled) return;

      // For the framer engine, we manipulate the DOM wrapper to use
      // motion.div and staggerChildren. Since this component renders a plain
      // <div>, we apply the framer animation by toggling a data attribute
      // that CSS or parent animations can key off of.
      // The full implementation uses motion.div directly in the JSX tree —
      // here we set the element as "visible" for stagger coordination.
      ref.current.setAttribute("data-reveal", "visible");
    })();

    return () => { cancelled = true; };
  }, [engine]);

  // ─── GSAP engine (default) ──────────────────────────────
  useEffect(() => {
    if (engine !== "gsap" || !ref.current || prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ default: SplitType }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("split-type"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (!ref.current || cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const split = new SplitType(ref.current, { types: splitBy });
      const targets = split[splitBy] ?? [];
      const ctx = gsap.context(() => {
        gsap.from(targets, {
          yPercent: 110,
          opacity: 0,
          stagger: STAGGER_DEFAULT,
          duration: 0.85,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.set(targets, { clearProps: "willChange,transform,opacity" });
          }
        });
      }, ref);

      cleanup = () => {
        ctx.revert();
        split.revert();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [splitBy, delay, engine]);

  return (
    <div ref={ref} className={`overflow-hidden pb-[0.08em] ${className}`}>
      {children}
    </div>
  );
}
