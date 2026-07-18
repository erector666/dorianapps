"use client";

import {
  useRef,
  useMemo,
  useEffect,
  useState,
  Suspense,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { isMobile, prefersReducedMotion } from "@/utils/motion";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface ProductScreenPortalProps {
  /** Path to the screenshot image. */
  imageSrc: string;
  /** Hex accent colour (e.g. "#F59E0B"). */
  accentColor: string;
  /** 0-indexed product position (0=FENIX, 1=DocVault, 2=CodexPilot). */
  productIndex: number;
  /** Alt text for the screenshot. */
  alt: string;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

/** Render-target resolution (kept small for performance). */
const RENDER_WIDTH = 400;
const RENDER_HEIGHT = 280;

/** Max rotation angles in radians. */
const MAX_TILT_Y = (7 * Math.PI) / 180; // ±7°
const MAX_TILT_X = (5 * Math.PI) / 180; // ±5°
const SCROLL_Y_RANGE = (8 * Math.PI) / 180; // ±8°

/** Z-depth offsets for the bezel planes (mm scale). */
const BEZEL_BACK_Z = -0.28;
const BEZEL_FRONT_Z = 0.12;
const TELEMETRY_Z = 0.48;

/** Plane aspect ratio. */
const PLANE_WIDTH = 2.4;
const PLANE_HEIGHT = 1.35;

/* ------------------------------------------------------------------ */
/*  PortalScene (inside Canvas)                                        */
/* ------------------------------------------------------------------ */

interface PortalSceneProps {
  imageSrc: string;
  accentColor: string;
}

function PortalScene({ imageSrc, accentColor }: PortalSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const scrollAngle = useRef(0);
  const containerRect = useRef<DOMRect | null>(null);

  /* Load screenshot texture */
  const texture = useTexture(imageSrc);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;

  /* Screen plane geometry (shared by screen + bezels) */
  const planeGeo = useMemo(
    () => new THREE.PlaneGeometry(PLANE_WIDTH, PLANE_HEIGHT),
    [],
  );

  /* Bezel edge geometry */
  const bezelEdges = useMemo(
    () => new THREE.EdgesGeometry(planeGeo),
    [planeGeo],
  );

  /* Parse accent colour once */
  const accentThree = useMemo(
    () => new THREE.Color(accentColor),
    [accentColor],
  );

  /* Pointer tracking (relative to container) */
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const rect = containerRect.current;
      if (!rect) return;
      pointer.current.x = (e.clientX - rect.left) / rect.width - 0.5;
      pointer.current.y = (e.clientY - rect.top) / rect.height - 0.5;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  /* Scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      const rect = containerRect.current;
      if (!rect) return;
      const viewH = window.innerHeight;
      // section progress: 0 = top enters viewport, 1 = bottom leaves
      const start = rect.top;
      const end = rect.bottom - viewH;
      const range = end - start;
      if (range <= 0) {
        scrollAngle.current = 0;
        return;
      }
      const raw = (0 - start) / range; // 0 when top at viewport top, 1 when bottom at viewport bottom
      const clamped = Math.max(-0.2, Math.min(1.2, raw)); // slight overscroll
      scrollAngle.current = (clamped - 0.5) * 2 * SCROLL_Y_RANGE; // -8° to +8°
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Store container ref for rect lookups */
  const { gl } = useThree();
  useEffect(() => {
    const el = gl.domElement.parentElement;
    if (el) {
      containerRect.current = el.getBoundingClientRect();
      const ro = new ResizeObserver(() => {
        if (el) containerRect.current = el.getBoundingClientRect();
      });
      ro.observe(el);
      return () => ro.disconnect();
    }
  }, [gl]);

  /* Per-frame: apply pointer + scroll rotation */
  useFrame(() => {
    if (!groupRef.current) return;

    const targetY = pointer.current.x * MAX_TILT_Y + scrollAngle.current;
    const targetX = -pointer.current.y * MAX_TILT_X;

    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.08;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* Screen surface with texture */}
      <mesh geometry={planeGeo}>
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back bezel (behind screen) */}
      <lineSegments
        geometry={bezelEdges}
        position={[0, 0, BEZEL_BACK_Z]}
      >
        <lineBasicMaterial
          color={accentThree}
          transparent
          opacity={0.18}
          depthTest={false}
        />
      </lineSegments>

      {/* Front bezel (in front of screen) */}
      <lineSegments
        geometry={bezelEdges}
        position={[0, 0, BEZEL_FRONT_Z]}
      >
        <lineBasicMaterial
          color={accentThree}
          transparent
          opacity={0.22}
          depthTest={false}
        />
      </lineSegments>
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  CSS 3D fallback for mobile / reduced motion                        */
/* ------------------------------------------------------------------ */

function CSSFallback({
  imageSrc,
  accentColor,
  productIndex,
  alt,
}: ProductScreenPortalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty("--tilt-y", `${x * 7}deg`);
      el.style.setProperty("--tilt-x", `${-y * 5}deg`);
      el.style.setProperty("--glare-x", `${(x + 0.5) * 100}%`);
      el.style.setProperty("--glare-y", `${(y + 0.5) * 100}%`);
    };
    const reset = () => {
      el.style.setProperty("--tilt-y", "0deg");
      el.style.setProperty("--tilt-x", "0deg");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
    };
  }, []);

  const num = String(productIndex + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="portal-fallback"
      style={{
        perspective: "800px",
        display: "inline-block",
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.16s ease-out",
          transform:
            "rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
          position: "relative",
          border: `1px solid ${accentColor}33`,
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={alt}
          style={{ display: "block", width: "100%", height: "auto" }}
          loading="lazy"
        />
        {/* Glare overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 30%), " +
              "rgba(255,255,255,0.10) 0%, transparent 60%)",
            mixBlendMode: "screen",
            pointerEvents: "none",
          }}
        />
      </div>
      {/* Telemetry */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.64rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: accentColor,
          opacity: 0.7,
        }}
        aria-hidden="true"
      >
        <span>LIVE SYSTEM</span>
        <span>DORIAN / {num}</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */

/**
 * ProductScreenPortal — 3D product screenshot with machined-bezel
 * depth, pointer-driven tilt, and scroll-driven cinematic rotation.
 *
 * • Desktop: small WebGL canvas (400×280 render target) + telemetry.
 * • Mobile: CSS 3D transform fallback (`perspective` + `rotateX/Y`).
 * • `prefers-reduced-motion`: static image (no canvas, no tilt).
 * • Unmounts canvas via IntersectionObserver when out of viewport.
 */
export function ProductScreenPortal(props: ProductScreenPortalProps) {
  const { imageSrc, accentColor, productIndex, alt } = props;
  const [mobileDevice, setMobileDevice] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* One-time env checks */
  useEffect(() => {
    setMobileDevice(isMobile());
    setReducedMotion(prefersReducedMotion());
    setHydrated(true);
  }, []);

  /* IntersectionObserver: mount canvas only when near viewport */
  useEffect(() => {
    const el = containerRef.current;
    if (!el || mobileDevice || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { rootMargin: "150% 0px 150% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [mobileDevice, reducedMotion]);

  /* Before hydration: reserve space to prevent layout shift */
  if (!hydrated) {
    return (
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{ width: "100%", aspectRatio: `${RENDER_WIDTH / RENDER_HEIGHT}` }}
      />
    );
  }

  const num = String(productIndex + 1).padStart(2, "0");

  /* Mobile or reduced motion → CSS-only fallback */
  if (mobileDevice || reducedMotion) {
    return <CSSFallback {...props} />;
  }

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      {/* 3D Canvas */}
      <div
        aria-hidden="true"
        style={{
          width: "100%",
          aspectRatio: `${RENDER_WIDTH / RENDER_HEIGHT}`,
          position: "relative",
        }}
      >
        {inView && (
          <Suspense fallback={null}>
            <Canvas
              dpr={[1, 1.5]}
              gl={{
                alpha: true,
                antialias: true,
                preserveDrawingBuffer: false,
                powerPreference: "low-power",
              }}
              camera={{
                position: [0, 0, 3.2],
                fov: 35,
                near: 0.1,
                far: 10,
              }}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                inset: 0,
              }}
              // Pin render size for performance
              // (R3F size is CSS-driven, but we hint a small target)
              resize={{ scroll: false, debounce: 200 }}
            >
              <PortalScene imageSrc={imageSrc} accentColor={accentColor} />
            </Canvas>
          </Suspense>
        )}

        {/* Glare reflection overlay (CSS, follows pointer) */}
        <div
          className="portal-glare"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
            background:
              "radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 30%), " +
              "rgba(255,255,255,0.08) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Telemetry metadata */}
      <div
        aria-hidden="true"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 6,
          fontFamily: "var(--font-mono), monospace",
          fontSize: "0.64rem",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: accentColor,
          opacity: 0.7,
          padding: "0 2px",
        }}
      >
        <span>LIVE SYSTEM</span>
        <span>DORIAN / {num}</span>
      </div>
    </div>
  );
}
