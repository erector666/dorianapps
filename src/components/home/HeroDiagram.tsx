"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";
import Image from "next/image";

export function HeroDiagram() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);
  const afterRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTriggerInstance | null>(null);

  const updateOpacity = useCallback((progress: number) => {
    const beforeEl = beforeRef.current;
    const afterEl = afterRef.current;
    if (!beforeEl || !afterEl) return;
    const targetBefore = Math.max(0, 1 - progress).toFixed(3);
    const targetAfter = Math.min(1, progress).toFixed(3);
    if (beforeEl.style.opacity !== targetBefore) {
      beforeEl.style.opacity = targetBefore;
    }
    if (afterEl.style.opacity !== targetAfter) {
      afterEl.style.opacity = targetAfter;
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !mounted || prefersReducedMotion()) return;

    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const beforeEl = beforeRef.current;
      const afterEl = afterRef.current;
      if (!beforeEl || !afterEl) return;

      gsap.set(afterEl, { opacity: 0 });

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => updateOpacity(self.progress),
      });

      triggerRef.current = trigger;
    })();

    return () => {
      cancelled = true;
      triggerRef.current?.kill();
    };
  }, [updateOpacity, mounted]);

  const reduced = mounted && prefersReducedMotion();

  if (reduced) {
    return (
      <div ref={containerRef} className="hero-diagram-scene">
        <div className="absolute inset-0 grid-fade opacity-30" aria-hidden="true" />
        <div className="relative z-10 flex h-full items-center justify-center p-8">
          <Image
            src="/assets/hero-diagram-after.svg"
            alt="Systematic workflow — automated, connected, systematic"
            width={600}
            height={600}
            className="w-[85%] h-auto object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="hero-diagram-scene">
      <div className="absolute inset-0 grid-fade opacity-30" aria-hidden="true" />

      <div className="hero-diagram-stage relative z-10 h-full p-8">
        <div ref={beforeRef} className="hero-diagram-before" style={{ opacity: 1 }}>
          <div className="hero-diagram-label hero-diagram-label--before">
            BEFORE
            <span className="hero-diagram-label-sub">Scattered, manual, disconnected</span>
          </div>
          <Image
            src="/assets/hero-diagram-before.svg"
            alt=""
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div ref={afterRef} className="hero-diagram-after" style={{ opacity: 0 }}>
          <div className="hero-diagram-label hero-diagram-label--after">
            AFTER
            <span className="hero-diagram-label-sub">Systematic, automated, connected</span>
          </div>
          <Image
            src="/assets/hero-diagram-after.svg"
            alt="Systematic workflow — automated, connected, systematic"
            width={600}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <div className="hero-diagram-divider" aria-hidden="true" />
      </div>
    </div>
  );
}

type ScrollTriggerInstance = {
  kill: () => void;
};
