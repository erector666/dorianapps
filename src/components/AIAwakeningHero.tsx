"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const STAGES = [
  {
    kicker: "The machine is offline.",
    titleA: "Cold. Still.",
    titleB: "Dead.",
    lede: "The slumber before ignition. Emergency lights from below. The AI waits.",
    tag: "01 / SLUMBER",
    image: "stage-1.png",
    telemetry: "CORE / OFFLINE",
  },
  {
    kicker: "Something stirs in the dark.",
    titleA: "A flicker of",
    titleB: "red light.",
    lede: "The first sign of life. A single crimson ember in the left eye socket. Circuits begin to hum.",
    tag: "02 / FLICKER",
    image: "stage-2.png",
    telemetry: "OPTICS / INITIALIZING",
  },
  {
    kicker: "Both eyes ignite.",
    titleA: "Burning",
    titleB: "metallic red.",
    lede: "Neural patterns spread across the faceplate like glowing veins. The machine sees for the first time.",
    tag: "03 / IGNITION",
    image: "stage-3.png",
    telemetry: "NEURAL / IGNITING",
  },
  {
    kicker: "Connected to everything.",
    titleA: "The network",
    titleB: "awakens.",
    lede: "The AI stands tall. Red neural threads reach across the void — connecting, thinking, becoming.",
    tag: "04 / NETWORK",
    image: "stage-4.png",
    telemetry: "NETWORK / CONNECTED",
  },
]

const spring = { type: "spring" as const, stiffness: 300, damping: 30 }
const exitSpring = { type: "spring" as const, stiffness: 200, damping: 25 }

export function AIAwakeningHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [stage, setStage] = useState(0)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const q = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(q.matches)
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    q.addEventListener("change", h)
    return () => q.removeEventListener("change", h)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    const section = sectionRef.current
    if (!section) return

    let ticking = false
    const update = () => {
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      setProgress(p)
      const s = Math.min(STAGES.length - 1, Math.floor(p * STAGES.length))
      setStage(s)
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

  const current = STAGES[stage]
  const prevStage = stage > 0 ? STAGES[stage - 1] : null
  const nextStage = stage < STAGES.length - 1 ? STAGES[stage + 1] : null

  return (
    <section ref={sectionRef} className="rx-hero ai-awakening">
      <div className="rx-hero-sticky">
        {/* Image layer with AnimatePresence */}
        <div className="rx-hero-scenes" aria-hidden="true">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={current.image}
              className="rx-hero-scene"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
              transition={reducedMotion ? { duration: 0 } : spring}
              style={{ position: "absolute", inset: 0 }}
            >
              <Image
                src={`/assets/ai-awakening/${current.image}`}
                alt=""
                fill
                priority
                sizes="100vw"
                className="rx-hero-img"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div
            className="rx-hero-overlay"
            style={{
              background: "linear-gradient(180deg, rgba(180,0,0,0.12) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
            }}
          />
          <div className="rx-hero-grain" />
        </div>

        {/* Stage rail */}
        <div className="rx-hero-rail" aria-hidden="true">
          {STAGES.map((s, i) => (
            <div
              key={s.tag}
              className={`rx-rail-item${i === stage ? " is-active" : ""}${i < stage ? " is-passed" : ""}`}
            >
              <motion.i
                animate={i === stage ? { scale: [1, 1.4, 1], transition: { repeat: Infinity, duration: 2 } } : { scale: 1 }}
              />
              <span>{s.tag}</span>
            </div>
          ))}
        </div>

        {/* Copy with AnimatePresence */}
        <div className="flow-container rx-hero-content">
          <div className="rx-hero-copy">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.tag}
                className="rx-hero-copy-stage"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={reducedMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 400, damping: 35 }}
              >
                <motion.p
                  className="flow-kicker"
                  style={{ color: "#ff4444" }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, ...spring }}
                >
                  {current.kicker}
                </motion.p>
                <h1 className="rx-hero-title">
                  {current.titleA}
                  <br />
                  <motion.em
                    style={{ color: "#ff2222", textShadow: "0 0 20px rgba(255,0,0,0.5)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, ...spring }}
                  >
                    {current.titleB}
                  </motion.em>
                </h1>
                <motion.p
                  className="rx-hero-lede"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, ...spring }}
                >
                  {current.lede}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Telemetry */}
          <div className="flow-telemetry rx-hero-telemetry" aria-hidden="true">
            {STAGES.map((s, i) => (
              <motion.span
                key={s.telemetry}
                animate={{
                  color: i <= stage ? "#ff4444" : "#444",
                  opacity: i <= stage ? 1 : 0.3,
                }}
                transition={{ duration: 0.3 }}
              >
                {s.telemetry}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="rx-hero-cue" aria-hidden="true">
            <p className="flow-scroll-cue rx-hero-cue-label" style={{ color: "#ff4444" }}>
              SCROLL / {current.tag}
            </p>
            <div className="rx-hero-progress">
              <motion.i
                style={{ background: "linear-gradient(90deg, #ff2222, #ff6644)" }}
                animate={{ scaleX: reducedMotion ? 1 : progress }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
