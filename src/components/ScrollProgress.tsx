"use client";

import { useEffect } from "react";

/**
 * Writes `--scroll-progress` CSS custom property (0–1) on <html>.
 * Listens to window scroll; when Lenis is active, hooks into its scroll event.
 */
export function ScrollProgress() {
  useEffect(() => {
    let raf: number;
    let mounted = true;

    const update = () => {
      if (!mounted) return;
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    // Listen to native scroll
    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    // When Lenis is active, it fires custom lenis-scroll events
    const onLenisScroll = () => {
      // Lenis uses its own animation frame; our update runs cheaply alongside it
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    // Lenis exposes scroll events via window event or we listen via DOM
    window.addEventListener("lenis-scroll", onLenisScroll as EventListener);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", onLenisScroll as EventListener);
    };
  }, []);

  return null; // no visible UI
}
