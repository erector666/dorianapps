"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { NeuralCoreScene } from "@/components/NeuralCoreScene";
import { VideoBackground } from "@/components/VideoBackground";
import { HomeHero } from "@/components/HomeHero";
import { HomeOrigin } from "@/components/HomeOrigin";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeAgents } from "@/components/HomeAgents";
import { HomeProof } from "@/components/HomeProof";
import { HomeClose } from "@/components/HomeClose";

function NeuralCoreFallback() {
  return (
    <div
      aria-hidden="true"
      className="neural-fallback"
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

export function HomeExperience() {
  return (
    <main id="main-content" className="flow-shell">
      <ErrorBoundary fallback={<NeuralCoreFallback />}>
        <NeuralCoreScene />
      </ErrorBoundary>
      <VideoBackground
        src="/videos/workshop_video_silent.mp4"
        poster="/assets/workshop_still.jpg"
      />
      <HomeHero />
      <HomeOrigin />
      <HomeProducts />
      <HomeAgents />
      <HomeProof />
      <HomeClose />
    </main>
  );
}
