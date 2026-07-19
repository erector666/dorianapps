"use client";

import { AIAwakeningHero } from "@/components/AIAwakeningHero";
import { HomeOrigin } from "@/components/HomeOrigin";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeAgents } from "@/components/HomeAgents";
import { HomeProof } from "@/components/HomeProof";
import { HomeClose } from "@/components/HomeClose";

export function HomeExperience() {
  return (
    <main id="main-content" className="flow-shell">
      <AIAwakeningHero />
      <HomeOrigin />
      <HomeProducts />
      <HomeAgents />
      <HomeProof />
      <HomeClose />
    </main>
  );
}
