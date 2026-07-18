import { Header } from "@/components/Header";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import Link from "next/link";
import { products } from "@/data/site";
import type { Metadata } from "next";

const zerobrain = products.find((p) => p.slug === "0brain")!;

export const metadata: Metadata = {
  title: `${zerobrain.name} | Dorian Apps`,
  description: zerobrain.description,
};

const features = [
  "Persistent long-term memory across agent sessions — not just a chat cache",
  "Structured delegation: break complex tasks into sub-tasks with traceable ownership",
  "Challenge loop: agents question weak answers before acting on them",
  "Verification gates: every important output is checked against evidence before it is trusted",
  "Memory-as-infrastructure: recall is load-bearing, not a nice-to-have",
];

const rings = [
  { label: "Investigate", desc: "Understand the problem, gather evidence, identify what is missing." },
  { label: "Delegate", desc: "Break work into sub-tasks, assign ownership, set verification criteria." },
  { label: "Remember", desc: "Store findings, decisions, and context for future recall across sessions." },
  { label: "Challenge", desc: "Question weak answers, surface contradictions, demand stronger evidence." },
  { label: "Verify", desc: "Prove the output against source data before it becomes action." },
];

const useCases = [
  { title: "Autonomous Research", body: "Agents that investigate a question across sessions, remembering what they found yesterday and challenging today's assumptions." },
  { title: "Multi-Agent Workflows", body: "Delegate sub-tasks to specialist agents. Each one remembers its context and reports back with verifiable results." },
  { title: "Enterprise Knowledge", body: "Give your AI systems permanent, structured memory that survives restarts, redeployments, and context windows." },
];

export default function ZeroBrainPage() {
  return (
    <main className="site-shell">
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5" style={{ color: zerobrain.accent?.hex }}>{zerobrain.eyebrow}</p>
            <h1 className="max-w-[11ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              {zerobrain.name}
            </h1>
            <p className="section-lede mt-6">{zerobrain.longDescription}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="focus-ring rounded-full px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: zerobrain.accent?.hex }}>
                Inquire
              </Link>
              <Link href="/products/docvault" className="focus-ring rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
                Explore DocVault
              </Link>
            </div>
          </div>
          <div className="glass-panel overflow-hidden rounded-[2rem]" style={{ borderColor: zerobrain.accent?.hex ? `${zerobrain.accent.hex}44` : undefined }}>
            <div className="relative aspect-[16/11] bg-black">
              <ImageWithFallback src={zerobrain.image} alt={zerobrain.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="grid gap-4 p-6 sm:grid-cols-3">
              {zerobrain.facts.map((fact) => (
                <div key={fact.label}>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">{fact.label}</span>
                  <strong className="mt-2 block text-sm text-[var(--color-text)]">{fact.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agent Orbit Diagram */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: zerobrain.accent?.hex }}>The loop</p>
          <h2 className="section-title mb-12">5-stage agent cycle</h2>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div className="relative flex items-center justify-center">
              <ImageWithFallback src="/assets/0brain-loop.svg" alt="0Brain 5-stage agent loop: Investigate → Delegate → Remember → Challenge → Verify" width={480} height={480} className="w-full max-w-[30rem]" />
            </div>
            <div className="space-y-4">
              {rings.map((ring, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="mt-[2px] flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-[0.65rem] font-bold" style={{ background: zerobrain.accent?.hex, color: "#fff" }}>{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight">{ring.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted)]">{ring.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: zerobrain.accent?.hex }}>Capabilities</p>
          <h2 className="section-title mb-12">What it does</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <div key={i} className="glass-panel rounded-2xl p-6">
                <span className="mb-3 block font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em]" style={{ color: zerobrain.accent?.hex }}>0{i + 1}</span>
                <p className="text-sm leading-relaxed text-[var(--color-text)]">{feat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section border-t border-white/10">
        <div className="container">
          <p className="eyebrow mb-5" style={{ color: zerobrain.accent?.hex }}>Applied</p>
          <h2 className="section-title mb-12">Use cases</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-panel-strong rounded-2xl p-8">
                <h3 className="mb-3 font-display text-2xl font-bold leading-tight">{uc.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">{uc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section border-t border-white/10">
        <div className="container text-center">
          <h2 className="section-title mb-6 mx-auto">Memory that carries the work.</h2>
          <p className="section-lede mx-auto mb-10">Give your agents persistent recall, structured delegation, and verification — the infrastructure autonomous systems actually need.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="focus-ring rounded-full px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black transition-colors" style={{ background: zerobrain.accent?.hex }}>
              Start a conversation
            </Link>
            <Link href="/products/codexpilot" className="focus-ring rounded-full border border-white/20 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors">
              Explore CodexPilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
