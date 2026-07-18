"use client";

import Link from "next/link";
import { identity, metrics } from "@/data/site";
import { HeroCanvasDynamic } from "@/components/HeroCanvasDynamic";
import { HeroScrubVideo } from "@/components/HeroScrubVideo";
import { RevealText } from "@/components/RevealText";
import { StatCounter } from "@/components/StatCounter";

export function HeroSection() {
  return (
    <section id="top" className="relative min-h-[340vh] overflow-clip">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <HeroScrubVideo />
        <HeroCanvasDynamic />
        <div className="grid-fade pointer-events-none absolute inset-0 -z-10 opacity-45" aria-hidden="true" />
        <div className="container relative z-10 grid min-h-screen items-start gap-10 pb-16 pt-36 md:items-center md:py-28 lg:grid-cols-[1.06fr_0.72fr]">
          <div className="max-w-6xl">
            <p className="eyebrow mb-6">{identity.company} / {identity.label}</p>
            <RevealText splitBy="words">
              <h1 className="font-display text-[clamp(4rem,11vw,10.5rem)] font-black leading-[0.78] tracking-normal text-[var(--color-text)]">
                I didn&apos;t enter tech through the front door.
              </h1>
            </RevealText>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/76 md:text-2xl">
              I&apos;m Nik, a product builder and developer working where artificial intelligence, autonomous agents, and
              practical business operations collide. The work starts with real problems and ends with systems that survive
              contact with the real world.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="focus-ring rounded-full bg-white px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.22em] text-black shadow-[0_0_44px_rgba(45,140,255,0.26)]"
              >
                Book a conversation
              </Link>
              <Link
                href="/products/docvault"
                className="focus-ring rounded-full border border-white/18 bg-white/6 px-7 py-4 text-center font-mono text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl"
              >
                Explore the systems
              </Link>
            </div>
            <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
              {["Real operations", "Agentic teams", "Verified execution"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/12 bg-black/22 px-4 py-3 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-white/68 backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel-strong depth-card rounded-[2rem] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-white/62">Agent OS</span>
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent-strong)] shadow-[0_0_24px_rgba(255,36,79,0.8)]" />
            </div>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <StatCounter key={metric.label} {...metric} />
              ))}
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-black/24 p-5">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-6 text-white/72">
                AI products, autonomous agent systems, developer tools, and operational software that give small teams
                the memory and execution capacity of much larger organizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
