"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/utils/motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("@studio-freight/lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger")
      ]);

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      const raf = (time: number) => lenis.raf(time * 1000);

      // Expose scroll progress via custom event and data attribute
      lenis.on("scroll", ({ scroll, limit }: { scroll: number; limit: number }) => {
        ScrollTrigger.update();
        const progress = limit > 0 ? Math.min(scroll / limit, 1) : 0;
        document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
        // Dispatch custom event for ScrollProgress and other listeners
        window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { scroll, limit, progress } }));
      });

      // Mark <html> when Lenis is active
      document.documentElement.dataset.lenis = "active";

      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        delete document.documentElement.dataset.lenis;
        lenis.destroy();
        gsap.ticker.remove(raf);
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
