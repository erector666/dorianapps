import { AIAwakeningHero } from "@/components/AIAwakeningHero"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Awakening — Dorian Apps",
  description:
    "An interactive narrative experience exploring the rise of AI consciousness through Framer Motion animation and DALL-E generated keyframe art.",
};

export default function AIAwakeningPage() {
  return (
    <main className="site-shell" style={{ background: "#050505" }}>
      <AIAwakeningHero />

      <section className="section">
        <div className="container" style={{ paddingTop: "40vh", paddingBottom: "40vh" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff" }}>
            FRAMER MOTION + DALL-E
          </h2>
          <p style={{ color: "#888", maxWidth: "40em", fontSize: "1.125rem", lineHeight: 1.6 }}>
            DALL-E 3 generates animation-keyframe images — same composition, only the subject&apos;s 
            state changes. Framer Motion AnimatePresence handles the transitions with spring physics.
          </p>
          <p style={{ color: "#666", fontSize: "0.875rem", marginTop: "2rem" }}>
            AnimatePresence mode=popLayout · Image: opacity + scale spring · Copy: slide-up + fade · 
            Rail indicator: pulse loop on active stage
          </p>
        </div>
      </section>
    </main>
  )
}
