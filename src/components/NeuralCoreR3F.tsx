"use client";

import { useRef, useMemo, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { prefersReducedMotion, isMobile } from "@/utils/motion";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const ROTATION_SPEED = 0.15;
const PARALLAX_MAX = 0.3;
const DEFAULT_HUE = 240;

function readCSSVar(name: string, fallback: number): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name);
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
}

/* ------------------------------------------------------------------ */
/*  3D Scene (inside Canvas)                                           */
/* ------------------------------------------------------------------ */

function Scene() {
  /* ---- geometry (memoised, never re-created) ---- */
  const coreEdges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.TorusKnotGeometry(1.6, 0.45, 100, 12)),
    [],
  );

  const ringGeos = useMemo(
    () => [2.35, 2.9, 3.55].map((r) => new THREE.TorusGeometry(r, 0.014, 6, 120)),
    [],
  );

  const ringEdges = useMemo(
    () => ringGeos.map((geo) => new THREE.EdgesGeometry(geo)),
    [ringGeos],
  );

  /* ---- refs ---- */
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.LineSegments>(null);
  const ringRefs = useRef<(THREE.LineSegments | null)[]>([null, null, null]);
  const pointer = useRef({ x: 0, y: 0 });

  /* ---- pointer tracking (desktop only) ---- */
  useEffect(() => {
    const mobile = isMobile();
    if (mobile) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  /* ---- per-frame update ---- */
  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.1); // safety cap for tab-switch spikes

    /* Read accent hue from CSS */
    const hue = readCSSVar("--accent-hue", DEFAULT_HUE);
    const coreColor = new THREE.Color().setHSL((hue % 360) / 360, 0.55, 0.42);
    const ringColor = new THREE.Color().setHSL((hue % 360) / 360, 0.35, 0.6);

    /* Core rotation */
    if (coreRef.current) {
      coreRef.current.rotation.y += ROTATION_SPEED * dt;
      coreRef.current.rotation.x += ROTATION_SPEED * 0.35 * dt;
      (coreRef.current.material as THREE.LineBasicMaterial).color.copy(coreColor);
    }

    /* Orbital rings */
    const t = state.clock.elapsedTime;
    ringRefs.current.forEach((ring, i) => {
      if (!ring) return;
      ring.rotation.z += (0.18 + i * 0.08) * dt;
      ring.rotation.x = Math.sin(t * 0.4 + i * 1.5) * 0.35;
      ring.rotation.y = Math.cos(t * 0.25 + i) * 0.28;
      (ring.material as THREE.LineBasicMaterial).color.copy(ringColor);
    });

    /* Cursor parallax — smooth translation */
    if (groupRef.current) {
      const tx = pointer.current.x * PARALLAX_MAX;
      const ty = pointer.current.y * PARALLAX_MAX;
      groupRef.current.position.x += (tx - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (ty - groupRef.current.position.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Abstract geometric core (torus knot) */}
      <lineSegments ref={coreRef} geometry={coreEdges} frustumCulled={false}>
        <lineBasicMaterial
          color="#3060cc"
          transparent
          opacity={0.08}
          depthWrite={false}
        />
      </lineSegments>

      {/* Orbital ring wireframes */}
      {ringEdges.map((geo, i) => (
        <lineSegments
          key={i}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
          geometry={geo}
          frustumCulled={false}
        >
          <lineBasicMaterial
            color="#aaccff"
            transparent
            opacity={0.045}
            depthWrite={false}
          />
        </lineSegments>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Reduced-motion fallback (static CSS gradient, no WebGL)            */
/* ------------------------------------------------------------------ */

function ReducedMotionFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        background:
          "radial-gradient(circle at 70% 50%, rgba(45,140,255,0.08) 0%, transparent 50%), " +
          "radial-gradient(circle at 30% 60%, rgba(255,36,79,0.05) 0%, transparent 40%)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */

/**
 * NeuralCoreR3F — full-viewport WebGL background scene.
 *
 * Renders an abstract geometric core (torus knot) with orbital ring
 * wireframes at `z-index: -1` behind all page content. Colour shifts
 * in response to the `--accent-hue` CSS custom property (set by
 * AccentProvider). Cursor parallax gently nudges the core.
 *
 * • `prefers-reduced-motion` → static CSS gradient (no WebGL).
 * • Mobile → lower DPR (capped at 1.5) + no pointer parallax.
 * • Tab hidden → render loop is naturally paused (rAF suspension).
 */
export function NeuralCoreR3F() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
    setMobileDevice(isMobile());
    setHydrated(true);

    /* Pause WebGL render loop when tab is hidden */
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    /* Probe WebGL availability so we can fall back to CSS gradient
     * when no GPU / software rendering is in use (llvmpipe, etc.). */
    try {
      const probe = document.createElement("canvas");
      const gl =
        probe.getContext("webgl2") ||
        probe.getContext("webgl") ||
        probe.getContext("experimental-webgl");
      if (!gl) setWebGLAvailable(false);
    } catch {
      setWebGLAvailable(false);
    }

    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /* SSR / before hydration: render nothing (prevents layout shift). */
  if (!hydrated) {
    return (
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          pointerEvents: "none",
          background: "#070808",
        }}
      />
    );
  }

  /* Reduced motion or no WebGL → static radial gradient, zero WebGL. */
  if (reducedMotion || !webGLAvailable) {
    return <ReducedMotionFallback />;
  }

  /* Full WebGL scene. */
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Suspense fallback={null}>
        <Canvas
          dpr={mobileDevice ? [0.75, 1.5] : [1, 2]}
          frameloop={mobileDevice ? "demand" : tabHidden ? "never" : "always"}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
          }}
          camera={{ position: [0, 0, 5.5], fov: mobileDevice ? 50 : 42 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
}
