import { ScrollVideoHero } from "@/components/ScrollVideoHero"

export default function AIAwakeningPage() {
  return (
    <main className="flow-shell" style={{ background: "#050505" }}>
      <ScrollVideoHero />

      {/* Spacer for scroll room */}
      <section className="flow-section">
        <div className="flow-container" style={{ paddingTop: "40vh", paddingBottom: "40vh" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 3rem)", fontWeight: 300, letterSpacing: "-0.02em", color: "#fff" }}>
            FRAME-BY-FRAME SCROLL
          </h2>
          <p style={{ color: "#888", maxWidth: "40em", fontSize: "1.125rem", lineHeight: 1.6 }}>
            Nathan Hodgson method: generate start & end frames → Google Flow interpolation → 
            extract 30fps frames → scroll-driven video playback. 
            No Framer Motion. Zero JS animation libraries.
          </p>
          <p style={{ color: "#666", fontSize: "0.875rem", marginTop: "2rem" }}>
            Generated via Gemini 2.5 Flash Image → ffmpeg blend+pad → ffmpeg VP9 WebM → 
            scroll-driven currentTime mapping. 94 frames at 30fps.
          </p>
        </div>
      </section>
    </main>
  )
}
