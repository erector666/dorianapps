"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/utils/motion";

const HeroCanvasClient = dynamic(
  () => import("@/components/HeroCanvas").then((module) => module.HeroCanvas),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 -z-10" aria-hidden="true" />
  }
);

export function HeroCanvasDynamic() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      return;
    }

    const timeout = window.setTimeout(() => setMounted(true), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 -z-10" aria-hidden="true" />;
  }

  return <HeroCanvasClient />;
}
