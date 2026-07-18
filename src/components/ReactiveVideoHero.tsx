"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { prefersReducedMotion } from "@/utils/motion";

interface ReactiveVideoHeroProps {
  /** Video source path relative to /public */
  src: string;
  /** Poster image path relative to /public */
  poster: string;
  /** Alt text for accessibility (empty since decorative) */
  alt?: string;
  /** Breakpoint for mobile fallback (show poster instead of video) */
  mobileBreakpoint?: number;
}

/* ── Floating Decor Elements ─────────────────────────────────────── */

/** Single code-line fragment floating in the hero. */
function CodeFragment({
  text,
  top,
  left,
  driftX,
  driftY,
  delay,
  duration,
  opacity,
  fontSize,
}: {
  text: string;
  top: string;
  left: string;
  driftX: number;
  driftY: number;
  delay: number;
  duration: number;
  opacity: number;
  fontSize: string;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="hero-decor-code"
      style={{ top, left, fontSize, "--drift-x": driftX, "--drift-y": driftY } as React.CSSProperties}
      initial={{ opacity: 0 }}
      animate={{
        opacity,
        x: [driftX * -0.5, driftX * 0.5, driftX * -0.5],
        y: [driftY * -0.3, driftY * 0.3, driftY * -0.3],
      }}
      transition={{
        opacity: { duration: 1.2, delay },
        x: { duration, repeat: Infinity, ease: "easeInOut", delay },
        y: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      {text}
    </motion.div>
  );
}

/** Single glowing AI node floating in the hero. */
function AINode({
  top,
  left,
  size,
  color,
  delay,
  duration,
  pulseScale,
}: {
  top: string;
  left: string;
  size: number;
  color: string;
  delay: number;
  duration: number;
  pulseScale: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="hero-decor-node"
      style={{
        top,
        left,
        width: size,
        height: size,
        backgroundColor: color,
        boxShadow: `0 0 ${size * 2.5}px ${color}, 0 0 ${size * 5}px ${color}`,
      }}
      animate={{
        scale: [1, pulseScale, 1],
        opacity: [0.45, 0.9, 0.45],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

/** Transparent UI panel outline floating in the hero. */
function UIPanel({
  top,
  left,
  width,
  height,
  rotation,
  delay,
  duration,
  opacity,
}: {
  top: string;
  left: string;
  width: string;
  height: string;
  rotation: number;
  delay: number;
  duration: number;
  opacity: number;
}) {
  return (
    <motion.div
      aria-hidden="true"
      className="hero-decor-panel"
      style={{ top, left, width, height, rotate: rotation }}
      initial={{ opacity: 0 }}
      animate={{
        opacity,
        y: [-6, 6, -6],
        rotate: [rotation - 1.5, rotation + 1.5, rotation - 1.5],
      }}
      transition={{
        opacity: { duration: 1, delay },
        y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: duration * 0.85, repeat: Infinity, ease: "easeInOut", delay },
      }}
    />
  );
}

/* ── Floating Elements Data ──────────────────────────────────────── */

const CODE_FRAGMENTS = [
  { text: "const signal = await", top: "12%", left: "8%", driftX: 14, driftY: 8, delay: 0.2, duration: 12, opacity: 0.18, fontSize: "0.65rem" },
  { text: "  .verify(trust)", top: "44%", left: "78%", driftX: -10, driftY: 10, delay: 0.8, duration: 14, opacity: 0.14, fontSize: "0.6rem" },
  { text: "if (confidence > 0.97)", top: "68%", left: "14%", driftX: 12, driftY: -7, delay: 1.5, duration: 13, opacity: 0.16, fontSize: "0.58rem" },
  { text: "  return result;", top: "28%", left: "55%", driftX: -8, driftY: 9, delay: 0.5, duration: 15, opacity: 0.13, fontSize: "0.62rem" },
  { text: "// neural pathway", top: "80%", left: "72%", driftX: 6, driftY: -11, delay: 2.1, duration: 16, opacity: 0.11, fontSize: "0.55rem" },
];

const AI_NODES = [
  { top: "8%", left: "18%", size: 6, color: "#3988ff", delay: 0, duration: 3.2, pulseScale: 1.9 },
  { top: "22%", left: "72%", size: 4, color: "#ff2e50", delay: 0.7, duration: 3.8, pulseScale: 2.3 },
  { top: "58%", left: "28%", size: 5, color: "#3988ff", delay: 1.3, duration: 4.1, pulseScale: 1.7 },
  { top: "76%", left: "62%", size: 3, color: "#7ebcff", delay: 0.4, duration: 3.5, pulseScale: 2.1 },
  { top: "38%", left: "12%", size: 4, color: "#ff2e50", delay: 1.9, duration: 4.4, pulseScale: 2.0 },
  { top: "15%", left: "44%", size: 3, color: "#7ebcff", delay: 2.4, duration: 3.0, pulseScale: 1.8 },
  { top: "90%", left: "38%", size: 5, color: "#3988ff", delay: 1.0, duration: 3.7, pulseScale: 2.2 },
  { top: "46%", left: "92%", size: 3, color: "#ff2e50", delay: 2.7, duration: 3.3, pulseScale: 1.6 },
];

const UI_PANELS = [
  { top: "18%", left: "62%", width: "16rem", height: "10rem", rotation: -3, delay: 0.6, duration: 11, opacity: 0.06 },
  { top: "52%", left: "10%", width: "12rem", height: "8rem", rotation: 2, delay: 1.4, duration: 13, opacity: 0.05 },
  { top: "30%", left: "40%", width: "14rem", height: "7rem", rotation: -1.5, delay: 2.0, duration: 12, opacity: 0.04 },
];

/* ── Main Component ──────────────────────────────────────────────── */

/**
 * Reactive Video Hero — full-viewport cinematic video background with:
 * - Parallax on scroll (30% speed, max 50px via translateY)
 * - Floating decorative elements (code fragments, AI nodes, UI panels)
 *   all aria-hidden, reacting to scroll progress and mouse position
 * - Pause when off-screen via IntersectionObserver
 * - Mobile fallback (<768px): static poster only, no video, no decor
 * - Reduced-motion: static poster, no video, no decor, no parallax
 */
export function ReactiveVideoHero({
  src,
  poster,
  alt = "",
  mobileBreakpoint = 768,
}: ReactiveVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => prefersReducedMotion());
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Framer Motion spring for smooth parallax
  const parallaxRaw = useMotionValue(0);
  const parallaxSmooth = useSpring(parallaxRaw, { stiffness: 80, damping: 22 });

  // Mouse position for subtle decor shift
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const decorShiftX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const decorShiftY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  /* ── Mobile detection ────────────────────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [mobileBreakpoint]);

  /* ── Reduced-motion listener ─────────────────────────────────── */
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  /* ── IntersectionObserver: lazy load + pause/resume ──────────── */
  useEffect(() => {
    if (reducedMotion || isMobile || hasError) return;

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
  }, [reducedMotion, isMobile, hasError]);

  /* ── Pause / resume video based on visibility ────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && shouldLoad) {
      const play = async () => {
        try {
          video.muted = true;
          if (video.paused) await video.play();
        } catch {
          // Autoplay blocked — acceptable fallback
        }
      };
      play();
    } else {
      video.pause();
    }
  }, [isVisible, shouldLoad]);

  /* ── Scroll tracking for parallax + decor fade ───────────────── */
  useEffect(() => {
    if (reducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const heroHeight = rect.height || window.innerHeight;

      // Scroll progress through the hero section (0 at top, 1 when bottom hits top)
      const start = -rect.top;
      const progress = Math.max(0, Math.min(1, start / heroHeight));
      setScrollProgress(progress);

      // Parallax offset: ~30% speed, max 50px
      const parallax = Math.min(progress * 50 * 0.3, 50);
      setScrollOffset(parallax);
      parallaxRaw.set(parallax);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Listen to Lenis scroll event for smooth scroll support
    const onLenisScroll = (e: Event) => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("lenis-scroll", onLenisScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("lenis-scroll", onLenisScroll);
    };
  }, [reducedMotion, parallaxRaw]);

  /* ── Mouse tracking for decor shift ──────────────────────────── */
  useEffect(() => {
    if (reducedMotion || isMobile) return;

    const onMouse = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, [reducedMotion, isMobile, mouseX, mouseY]);

  /* ── Render states ───────────────────────────────────────────── */
  const showStatic = reducedMotion || isMobile || hasError;

  return (
    <div
      ref={containerRef}
      className="reactive-video-hero"
      aria-hidden="true"
      role="presentation"
    >
      {/* ── Parallax wrapper (scroll-driven translateY) ────────── */}
      <motion.div
        className="reactive-video-layer"
        style={{ y: reducedMotion ? 0 : parallaxSmooth }}
      >
        {/* Video layer */}
        {!showStatic && shouldLoad && (
          <video
            ref={videoRef}
            className="reactive-video-media"
            poster={poster}
            src={src}
            muted
            playsInline
            loop
            preload="none"
            disableRemotePlayback
            onError={() => setHasError(true)}
          />
        )}

        {/* Static poster layer */}
        {showStatic && (
          <div
            className="reactive-video-poster"
            style={{ backgroundImage: `url(${poster})` }}
            role="img"
            aria-label={alt}
          />
        )}

        {/* Contrast overlay */}
        <div className="reactive-video-overlay" />
      </motion.div>

      {/* ── Floating decorative elements ────────────────────────── */}
      {!showStatic && !reducedMotion && (
        <motion.div
          className="reactive-decor-layer"
          style={{
            x: isMobile ? 0 : decorShiftX,
            y: isMobile ? 0 : decorShiftY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 - scrollProgress * 1.1 }}
          transition={{ opacity: { duration: 0.3 } }}
        >
          {CODE_FRAGMENTS.map((frag, i) => (
            <CodeFragment key={`code-${i}`} {...frag} />
          ))}
          {AI_NODES.map((node, i) => (
            <AINode key={`node-${i}`} {...node} />
          ))}
          {UI_PANELS.map((panel, i) => (
            <UIPanel key={`panel-${i}`} {...panel} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
