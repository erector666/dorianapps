"use client";

import { useEffect, useRef, useState } from "react";

interface VideoHeroProps {
  /** Video source path relative to /public */
  src: string;
  /** Poster image path relative to /public */
  poster: string;
  /** Mobile breakpoint (px) — poster replaces video below this */
  mobileBreakpoint?: number;
}

/**
 * Full-viewport hero video background.
 *
 * Video Section Pattern (Phase 7):
 * - Poster image
 * - Muted autoplay only
 * - Plays inline
 * - Lazy loading via IntersectionObserver
 * - Correct object positioning (cover)
 * - Contrast overlay for readability
 * - Pause when off-screen, resume when visible
 * - Mobile fallback (poster only, no video)
 * - Reduced-motion: static poster, no video, no parallax
 * - Parallax scroll (moderate translateY, transforms only)
 */
export function VideoHero({
  src,
  poster,
  mobileBreakpoint = 768,
}: VideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mobileBreakpoint]);

  // Reduced-motion detection
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // IntersectionObserver: lazy load + pause/resume
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, isMobile]);

  // Pause/resume video based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && shouldLoad) {
      const play = async () => {
        try {
          video.muted = true;
          if (video.paused) await video.play();
        } catch {
          // Autoplay blocked — poster remains visible, acceptable fallback
        }
      };
      play();
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  // Parallax scroll — moderate range, transforms only
  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const heroHeight = rect.height || window.innerHeight;

      // Progress through hero: 0 at top, ~1 when scrolled past
      const progress = Math.max(0, Math.min(1, -rect.top / heroHeight));

      // ~30% speed, max 50px
      setParallaxY(Math.min(progress * 50 * 0.3, 50));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", onScroll);
  }, [reducedMotion]);

  const showPoster = reducedMotion || isMobile;

  return (
    <div
      ref={containerRef}
      className="video-hero"
      aria-hidden="true"
      role="presentation"
    >
      {/* Parallax layer */}
      <div
        className="video-hero-layer"
        style={{
          transform: reducedMotion ? "none" : `translateY(${parallaxY}px)`,
        }}
      >
        {/* Video */}
        {!showPoster && shouldLoad && (
          <video
            ref={videoRef}
            className="video-hero-media"
            poster={poster}
            src={src}
            muted
            autoPlay
            playsInline
            loop
            preload="none"
            disableRemotePlayback
          />
        )}

        {/* Poster fallback */}
        {showPoster && (
          <div
            className="video-hero-poster"
            style={{ backgroundImage: `url(${poster})` }}
          />
        )}

        {/* Contrast overlay */}
        <div className="video-hero-overlay" />
      </div>
    </div>
  );
}
