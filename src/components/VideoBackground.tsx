"use client";

import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";

interface VideoBackgroundProps {
  /** Video source path relative to /public */
  src: string;
  /** Poster image path relative to /public */
  poster: string;
  /** Alt text for accessibility (empty since decorative) */
  alt?: string;
}

/**
 * Full-viewport cinematic video background for hero sections.
 *
 * Features:
 * - Looping muted autoplay via native HTML5 <video>
 * - Poster image fallback (before playback + reduced-motion)
 * - prefers-reduced-motion → static poster only
 * - Dark contrast overlay for text readability
 * - Lazy loading via IntersectionObserver
 * - Responsive (object-fit: cover)
 * - Accessible (aria-hidden="true")
 */
export function VideoBackground({
  src,
  poster,
  alt = "",
}: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    prefersReducedMotion()
  );
  const [hasError, setHasError] = useState(false);

  // Listen for reduced-motion preference changes
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Lazy load via IntersectionObserver
  useEffect(() => {
    if (reducedMotion || hasError) return;

    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion, hasError]);

  // Autoplay the video once it's loaded into the DOM
  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const play = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {
        // Autoplay blocked — poster remains visible, acceptable fallback
      }
    };

    play();
  }, [shouldLoad]);

  const showStatic = reducedMotion || hasError;

  return (
    <div
      ref={containerRef}
      className="video-background"
      aria-hidden="true"
      role="presentation"
    >
      {/* Video layer */}
      {!showStatic && shouldLoad && (
        <video
          ref={videoRef}
          className="video-background-media"
          poster={poster}
          src={src}
          muted
          autoPlay
          playsInline
          loop
          preload="none"
          disableRemotePlayback
          onError={() => setHasError(true)}
        />
      )}

      {/* Static poster layer (reduced motion or error fallback) */}
      {showStatic && (
        <div
          className="video-background-poster"
          style={{ backgroundImage: `url(${poster})` }}
          role="img"
          aria-label={alt}
        />
      )}

      {/* Contrast overlay — dark gradient over video for text readability */}
      <div className="video-background-overlay" />
    </div>
  );
}
