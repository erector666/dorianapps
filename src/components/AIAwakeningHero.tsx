"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const STAGES = [
  {
    kicker: "The machine is offline.",
    titleA: "Cold. Still.",
    titleB: "Dead.",
    lede: "The slumber before ignition. Emergency lights from below. The AI waits.",
    tag: "01 / SLUMBER",
    image: "stage-1.png",
  },
  {
    kicker: "Something stirs in the dark.",
    titleA: "A flicker of",
    titleB: "red light.",
    lede: "The first sign of life. A single crimson ember in the left eye socket. Circuits begin to hum.",
    tag: "02 / FLICKER",
    image: "stage-2.png",
  },
  {
    kicker: "Both eyes ignite.",
    titleA: "Burning",
    titleB: "metallic red.",
    lede: "Neural patterns spread across the faceplate like glowing veins. The machine sees for the first time.",
    tag: "03 / IGNITION",
    image: "stage-3.png",
  },
  {
    kicker: "Connected to everything.",
    titleA: "The network",
    titleB: "awakens.",
    lede: "The AI stands tall. Red neural threads reach across the void — connecting, thinking, becoming.",
    tag: "04 / NETWORK",
    image: "stage-4.png",
  },
]

export function AIAwakeningHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(query.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    query.addEventListener("change", onChange)
    return () => query.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const section = sectionRef.current
    if (!section) return

    let ticking = false
    const update = () => {
      try {
        const rect = section.getBoundingClientRect()
        const total = rect.height - window.innerHeight
        setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0)
      } catch {
        // silent
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    document.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      document.removeEventListener("scroll", onScroll)
    }
  }, [reducedMotion])

  const stageCount = STAGES.length
  const scaled = progress * stageCount
  const activeIndex = Math.min(stageCount - 1, Math.floor(scaled))
  const local = scaled - activeIndex

  return (
    <section ref={sectionRef} className="rx-hero ai-awakening" data-stage={activeIndex}>
      <div className="rx-hero-sticky">
        {/* Scene layers - one per stage */}
        <div className="rx-hero-scenes" aria-hidden="true">
          {STAGES.map((stage, i) => {
            const d = scaled - i
            let opacity: number
            if (reducedMotion) {
              opacity = i === 0 ? 1 : 0
            } else if (d < -0.35) opacity = 0
            else if (d < 0) opacity = (d + 0.35) / 0.35
            else if (d <= 1) opacity = 1
            else if (d < 1.35) opacity = 1 - (d - 1) / 0.35
            else opacity = 0

            const scale = reducedMotion ? 1 : 1.14 - Math.min(1, Math.max(0, (d + 0.35) / 1.7)) * 0.14
            const y = reducedMotion ? 0 : d * -4

            return (
              <div
                key={stage.tag}
                className="rx-hero-scene"
                style={{
                  opacity,
                  transform: `scale(${scale.toFixed(4)}) translate3d(0, ${y.toFixed(2)}vh, 0)`,
                  visibility: opacity <= 0.001 ? "hidden" : "visible",
                }}
              >
                <Image
                  src={`/assets/ai-awakening/${stage.image || "stage-1.png"}`}
                  alt=""
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className="rx-hero-img"
                  style={{ filter: i === 1 || i === 2 ? "saturate(1.1)" : "none" }}
                />
              </div>
            )
          })}
          <div className="rx-hero-overlay" style={{ background: "linear-gradient(180deg, rgba(180,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)" }} />
          <div className="rx-hero-grain" />
        </div>

        {/* HUD: stage rail */}
        <div className="rx-hero-rail" aria-hidden="true">
          {STAGES.map((stage, i) => (
            <div key={stage.tag} className={`rx-rail-item${i === activeIndex ? " is-active" : ""}${i >= activeIndex ? "" : " is-passed"}`}>
              <i />
              <span>{stage.tag}</span>
            </div>
          ))}
        </div>

        {/* Copy */}
        <div className="flow-container rx-hero-content">
          <div className="rx-hero-copy">
            {STAGES.map((stage, i) => {
              const isActive = i === activeIndex
              const exit = isActive && !reducedMotion ? Math.min(1, Math.max(0, (local - 0.72) / 0.28)) : 0
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
                  <p className="flow-kicker" style={{ color: "#ff4444" }}>{stage.kicker}</p>
                  <h1 className="rx-hero-title">
                    {stage.titleA}
                    <br />
                    <em style={{ color: "#ff2222", textShadow: "0 0 20px rgba(255,0,0,0.5)" }}>{stage.titleB}</em>
                  </h1>
                  <p className="rx-hero-lede">{stage.lede}</p>
                </div>
              )
            })}
          </div>

          {/* Telemetry */}
          <div className="flow-telemetry rx-hero-telemetry" aria-hidden="true">
            <span style={{ color: activeIndex >= 0 ? "#ff4444" : "#666" }}>CORE / {activeIndex >= 0 ? "BOOTING" : "OFFLINE"}</span>
            <span style={{ color: activeIndex >= 1 ? "#ff4444" : "#666" }}>OPTICS / {activeIndex >= 1 ? "ACTIVE" : "STANDBY"}</span>
            <span style={{ color: activeIndex >= 2 ? "#ff4444" : "#666" }}>NEURAL / {activeIndex >= 3 ? "CONNECTED" : activeIndex >= 2 ? "IGNITING" : "DORMANT"}</span>
          </div>

          {/* Progress */}
          <div className="rx-hero-cue" aria-hidden="true">
            <p className="flow-scroll-cue rx-hero-cue-label" style={{ color: "#ff4444" }}>SCROLL / AI AWAKENING SEQUENCE</p>
            <div className="rx-hero-progress">
              <i style={{ background: "linear-gradient(90deg, #ff2222, #ff6644)", transform: `scaleX(${reducedMotion ? 1 : progress})` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
