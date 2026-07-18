"use client";

import { ErrorBoundary } from "@/components/ErrorBoundary";
import { NeuralCoreScene } from "@/components/NeuralCoreScene";
import { HomeHero } from "@/components/HomeHero";
import { HomeOrigin } from "@/components/HomeOrigin";
import { HomeProducts } from "@/components/HomeProducts";
import { HomeAgents } from "@/components/HomeAgents";
import { HomeProof } from "@/components/HomeProof";
import { HomeClose } from "@/components/HomeClose";

export function HomeExperience() {
  return (
    <main id="main-content" className="flow-shell">
      <ErrorBoundary>
        <NeuralCoreScene />
      </ErrorBoundary>
      <HomeHero />
      <HomeOrigin />
      <HomeProducts />
      <HomeAgents />
      <HomeProof />
      <HomeClose />
    </main>
  );
}
