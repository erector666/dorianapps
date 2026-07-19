"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const STAGES = [
  {
    kicker: "Built from operational pressure",
    titleA: "The field, the",
    titleB: "data, the facts.",
    lede: "Construction delays, scattered paperwork, missing context — these are not abstractions. They consume time, money, and trust. The work starts where standard software failed.",
    image: "/assets/hero/hero-stage-1.png",
    alt: "Dark construction site with holographic blueprint overlays and amber safety lighting",
    tag: "01 / FIELD",
  },
  {
    kicker: "Dorian Apps / Agentic AI Studio",
    titleA: "AI that can",
    titleB: "carry the work.",
    lede: "Intelligent systems for operations where missing context, slow decisions, and disconnected tools have a real cost.",
    image: "/assets/hero/hero-stage-2.png",
    alt: "Polished black ring machine lit by blue and red light",
    tag: "02 / CORE",
  },
  {
    kicker: "Autonomous agents / One system",
    titleA: "Agents that",
    titleB: "think in systems.",
    lede: "Specialist agents investigate, delegate, remember, and verify evidence before anything moves forward.",
    image: "/assets/hero/hero-stage-3.png",
    alt: "Network of glossy spheres connected by glowing threads",
    tag: "03 / NETWORK",
  },
  {
    kicker: "Apps / Websites / Production",
    titleA: "Shipped as",
    titleB: "real products.",
    lede: "From agentic backends to the interfaces people touch — designed, built, and running in production.",
    image: "/assets/hero/hero-stage-4.png",
    alt: "Hands on a laptop surrounded by holographic app interfaces",
    tag: "04 / PRODUCT",
  },
] as const;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

export function ScrollReactiveHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;
    const update = () => {
      try {
        const rect = section.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        setProgress(total > 0 ? clamp01(-rect.top / total) : 0);
      } catch (e) {
        // Silently handle — scroll will be retried on next frame
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    // Use both window and document scroll for broader compatibility
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, [reducedMotion, sectionRef]);
  // Which stage is active and how far we are inside it (0..1)
  const stageCount = STAGES.length;
  const scaled = progress * stageCount;
  const activeIndex = Math.min(stageCount - 1, Math.floor(scaled));
  const local = scaled - activeIndex;

  return (
    <section id="top" ref={sectionRef} className="rx-hero" data-stage="0">
      <div className="rx-hero-sticky">
        {/* Photorealistic scene layers */}
        <div className="rx-hero-scenes" aria-hidden="true">
          {STAGES.map((stage, i) => {
            // Each layer: fade in as its stage approaches, fade out as the next takes over
            const d = scaled - i; // <0 upcoming, 0..1 active, >1 passed
            let opacity: number;
            if (reducedMotion) {
              opacity = i === 0 ? 1 : 0;
            } else if (d < -0.35) opacity = 0;
            else if (d < 0) opacity = (d + 0.35) / 0.35;
            else if (d <= 1) opacity = 1;
            else if (d < 1.35) opacity = 1 - (d - 1) / 0.35;
            else opacity = 0;

            const scale = reducedMotion ? 1 : 1.14 - clamp01((d + 0.35) / 1.7) * 0.14;
            const y = reducedMotion ? 0 : d * -4; // gentle parallax in vh

            return (
              <div
                key={stage.image}
                className="rx-hero-scene"
                style={{
                  opacity,
                  transform: `scale(${scale.toFixed(4)}) translate3d(0, ${y.toFixed(2)}vh, 0)`,
                  visibility: opacity <= 0.001 ? "hidden" : "visible",
                }}
              >
                <Image
                  src={stage.image || "/placeholder.svg"}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="rx-hero-img"
                />
              </div>
            );
          })}
          <div className="rx-hero-overlay" />
          <div className="rx-hero-grain" />
        </div>

        {/* HUD: stage rail */}
        <div className="rx-hero-rail" aria-hidden="true">
          {STAGES.map((stage, i) => (
            <div key={stage.tag} className={`rx-rail-item${i === activeIndex ? " is-active" : ""}`}>
              <i />
              <span>{stage.tag}</span>
            </div>
          ))}
        </div>

        {/* Staged copy */}
        <div className="flow-container rx-hero-content">
          <div className="rx-hero-copy">
            {STAGES.map((stage, i) => {
              const isActive = i === activeIndex;
              // Slide copy out near end of its stage
              const exit = isActive && !reducedMotion ? clamp01((local - 0.72) / 0.28) : 0;
              return (
                <div
                  key={stage.tag}
                  className="rx-hero-copy-stage"
                  style={{
                    opacity: isActive ? 1 - exit : 0,
                    transform: `translateY(${isActive ? exit * -28 : 24}px)`,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  aria-hidden={!isActive}
                >
                  <p className="flow-kicker">{stage.kicker}</p>
                  <h1 className="rx-hero-title">
                    {stage.titleA}
                    <br />
                    <em>{stage.titleB}</em>
                  </h1>
                  <p className="rx-hero-lede">{stage.lede}</p>
                  {i === 0 && (
                    <div className="flow-actions">
                      <Link href="#origin" className="flow-link">
                        Follow the signal <span aria-hidden="true">↓</span>
                      </Link>
                      <Link href="/contact" className="flow-link flow-link-muted">
                        Start a project <span aria-hidden="true">↗</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* HUD: telemetry */}
          <div className="flow-telemetry rx-hero-telemetry" aria-hidden="true">
            <span>CORE / ONLINE</span>
            <span>MEMORY / PERSISTENT</span>
            <span>VERIFY / ENABLED</span>
          </div>

          {/* Progress + scroll cue */}
          <div className="rx-hero-cue" aria-hidden="true">
            <p className="flow-scroll-cue rx-hero-cue-label">SCROLL / ONE SYSTEM, FOUR STATES</p>
            <div className="rx-hero-progress">
              <i style={{ transform: `scaleX(${reducedMotion ? 1 : progress})` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
