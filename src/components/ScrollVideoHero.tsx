"use client"

import { useEffect, useRef, useState } from "react"

export function ScrollVideoHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)
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
    if (reducedMotion || !ready) return
    const section = sectionRef.current
    const video = videoRef.current
    if (!section || !video) return
    if (!video.duration || video.duration === Infinity) return

    let ticking = false
    const update = () => {
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0
      setProgress(p)
      if (video.duration && isFinite(video.duration)) {
        video.currentTime = p * (video.duration - 0.033)
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
  }, [ready, reducedMotion])

  return (
    <section ref={sectionRef} className="rx-hero ai-awakening">
      <div className="rx-hero-sticky">
        <video
          ref={videoRef}
          src="/assets/ai-awakening/awakening.webm"
          muted
          playsInline
          preload="auto"
          className="rx-hero-video-bg"
          onLoadedMetadata={() => { setReady(true); if (videoRef.current) videoRef.current.currentTime = 0 }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay */}
        <div
          className="rx-hero-overlay"
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(180,0,0,0.12) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Copy overlay */}
        <div className="flow-container rx-hero-content" style={{ position: "relative", zIndex: 2 }}>
          <div className="rx-hero-copy" style={{ maxWidth: "48rem" }}>
            <div className="rx-hero-copy-stage" style={{ opacity: 1, transform: "none" }}>
              <p className="flow-kicker" style={{ color: "#ff4444" }}>From dormant machine / To living intelligence</p>
              <h1 className="rx-hero-title">
                AI Awakening
                <br />
                <em style={{ color: "#ff2222", textShadow: "0 0 30px rgba(255,0,0,0.6)" }}>Frame by frame.</em>
              </h1>
              <p className="rx-hero-lede" style={{ color: "#bbb" }}>
                Four stages of consciousness. Scroll to animate the entire sequence —<br />
                from SLUMBER to NETWORK — in smooth, interpolated motion.
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="rx-hero-cue" aria-hidden="true" style={{ position: "absolute", bottom: "2rem", left: "2rem", right: "2rem" }}>
            <p className="flow-scroll-cue rx-hero-cue-label" style={{ color: "#ff4444", marginBottom: "0.5rem" }}>
              SCROLL / AWAKENING SEQUENCE
            </p>
            <div className="rx-hero-progress">
              <i
                style={{
                  background: "linear-gradient(90deg, #ff2222, #ff6644)",
                  transform: `scaleX(${progress})`,
                  transition: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rx-hero-video-bg {
          filter: saturate(1.1) contrast(1.05);
        }
      `}</style>
    </section>
  )
}
