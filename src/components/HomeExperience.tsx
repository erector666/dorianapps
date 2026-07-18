"use client";

import { VideoHero } from "@/components/VideoHero";
import { HomeHero } from "@/components/HomeHero";
import { HomeOrigin } from "@/components/HomeOrigin";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeAgents } from "@/components/HomeAgents";
import { HomeProof } from "@/components/HomeProof";
import { HomeClose } from "@/components/HomeClose";

export function HomeExperience() {
  return (
    <main id="main-content" className="flow-shell">
      <VideoHero
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
