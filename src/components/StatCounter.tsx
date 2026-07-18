"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({ value, suffix = "", prefix = "", label, duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (prefersReducedMotion()) {
      const timeout = window.setTimeout(() => setDisplayed(value), 0);
      return () => window.clearTimeout(timeout);
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);

      if (!ref.current || cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const obj = { val: 0 };
      const trigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 100%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: value,
            duration,
            ease: "power2.out",
            onUpdate: () => setDisplayed(Math.round(obj.val))
          });
        }
      });

      cleanup = () => trigger.kill();
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [value, duration]);

  return (
    <div className="min-w-0">
      <span ref={ref} className="block font-display text-5xl font-bold leading-none text-[var(--color-text)]">
        {prefix}
        {displayed.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 block font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}
