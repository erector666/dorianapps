import { Header } from "@/components/Header";
import { HeroTransformation } from "@/components/home/HeroTransformation";
import { identity } from "@/data/site";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dorian Apps — Software for work that has outgrown spreadsheets",
  description:
    "Systematic AI product development. Autonomous agents, document intelligence, and field operations software built by Nik Velkovski.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">        {/* Hero Section — scroll-driven transformation */}
        <HeroTransformation />

        {/* Builder Section */}
        <section className="section border-t border-white/10 content-section-alt">
          <div className="container">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">The Builder</p>
              <h2 className="section-title mb-6">
                I didn&apos;t enter tech through the front door
              </h2>
              <p className="text-muted leading-relaxed">
                Construction sites in Switzerland taught me more about building reliable systems
                than any computer science class. When a system fails on a construction site, it costs
                real money and real time — not a test run. That pressure shapes how every product here
                gets built.
              </p>
              <Link href="/about" className="cta-primary mt-8 inline-flex">
                About the builder <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Selected Systems preview */}
        <section className="section border-t border-white/10">
          <div className="container">
            <div className="section-header">
              <p className="eyebrow mb-4">Selected Systems</p>
              <h2 className="section-title">Products built from real friction</h2>
              <p className="section-lede mt-4">
                Each product below started with a specific operational problem observed in the field.
              </p>
            </div>

            <div className="card-grid-3">
              {/* DocVault */}
              <article className="glass-panel rounded-2xl p-6 group transition-colors hover:border-accent/40">
                <div className="mb-3">
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.15em]" style={{ color: "var(--accent-amber)" }}>
                    Document Intelligence
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">DocVault</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  An AI-powered document platform designed to turn administrative chaos into structured, searchable information.
                </p>
                <Link
                  href="/products/docvault"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text border-b border-white/20 pb-0.5 hover:border-accent transition-colors"
                  style={{ color: "var(--accent-amber)" }}
                >
                  View system →
                </Link>
              </article>

              {/* CodexPilot */}
              <article className="glass-panel rounded-2xl p-6 group transition-colors hover:border-accent/40">
                <div className="mb-3">
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.15em]" style={{ color: "var(--accent-cyan)" }}>
                    Mobile Development
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">CodexPilot</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  A mobile AI coding experiment for steering repositories, local models, and agentic development work away from the desk.
                </p>
                <Link
                  href="/products/codexpilot"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text border-b border-white/20 pb-0.5 hover:border-accent transition-colors"
                  style={{ color: "var(--accent-cyan)" }}
                >
                  View system →
                </Link>
              </article>

              {/* Field Ops */}
              <article className="glass-panel rounded-2xl p-6 group transition-colors hover:border-accent/40">
                <div className="mb-3">
                  <span className="font-mono text-[0.55rem] uppercase tracking-[0.15em]" style={{ color: "var(--accent-green)" }}>
                    Field Operations
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">Field Ops</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  A construction operations system for workers, projects, vehicles, sessions, documents, locations, and field data.
                </p>
                <Link
                  href="/products/fenix-construction-tracker"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-text border-b border-white/20 pb-0.5 hover:border-accent transition-colors"
                  style={{ color: "var(--accent-green)" }}
                >
                  View system →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Capabilities preview */}
        <section className="section border-t border-white/10 content-section-alt">
          <div className="container">
            <div className="section-header section-header-center">
              <p className="eyebrow mb-4">What we build</p>
              <h2 className="section-title">Systems that survive contact with the real world</h2>
            </div>

            <div className="grid gap-0 sm:grid-cols-3 sm:gap-0 mt-12 border-t border-white/10">
              {[
                { title: "AI Products", desc: "End-to-end design and build for tools that replace manual workflows." },
                { title: "Autonomous Agents", desc: "Agents with persistent memory, verification gates, and iterative refinement." },
                { title: "Document Intelligence", desc: "Systems that turn paper trails into queryable operational memory." },
                { title: "Field Operations", desc: "Real-time visibility across workers, vehicles, projects, and locations." },
                { title: "Mobile Tooling", desc: "Repository control and AI coding capability from Android devices." },
                { title: "Systems Architecture", desc: "Reliable pipelines designed for graceful degradation under pressure." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="p-6 border-b border-white/10 sm:border-r sm:border-b sm:last:border-r-0 sm:[&:nth-child(3)]:border-r-0 sm:[&:nth-child(4)]:border-b-0 sm:[&:nth-child(5)]:border-b-0 sm:[&:nth-child(6)]:border-b-0"
                >
                  <span className="block font-mono text-[0.55rem] uppercase tracking-[0.15em] text-accent mb-2">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/capabilities" className="cta-secondary">
                All capabilities →
              </Link>
            </div>
          </div>
        </section>

        {/* Lab preview */}
        <section className="section border-t border-white/10">
          <div className="container">
            <div className="section-header section-header-center">
              <p className="eyebrow mb-4">Lab Output</p>
              <h2 className="section-title mb-6">What we are testing</h2>
              <p className="section-lede">
                Experimental systems with documented hypotheses, methods, and findings. Status tracked from speculation to verified result.
              </p>
            </div>

            <div className="card-grid">
              {[
                { slug: "agent-memory-persistence", title: "Agent Memory Persistence", status: "Verified", color: "var(--accent-green)" },
                { slug: "verification-gate-pattern", title: "Verification Gate Pattern", status: "Verified", color: "var(--accent-green)" },
                { slug: "document-understanding-pipeline", title: "Multi-Format Document Understanding", status: "Verified", color: "var(--accent-green)" },
                { slug: "android-coding-agent", title: "Android-Native Coding Agent", status: "Experimental", color: "var(--accent-amber)" },
                { slug: "multi-agent-orchestration", title: "Multi-Agent Orchestration", status: "In Development", color: "var(--accent-cyan)" },
              ].map((exp) => (
                <Link
                  key={exp.slug}
                  href={`/lab/${exp.slug}`}
                  className="glass-panel rounded-2xl p-5 group transition-colors hover:border-accent/40"
                >
                  <span className="status-badge mb-3" style={{ color: exp.color }}>
                    {exp.status}
                  </span>
                  <h3 className="font-display text-base font-semibold group-hover:text-accent transition-colors">
                    {exp.title}
                  </h3>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/lab" className="cta-secondary">
                Browse all experiments →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section border-t border-white/10 content-section-alt">
          <div className="container text-center">
            <p className="eyebrow mb-5">Initiate System Inquiry</p>
            <h2 className="section-title mb-6 mx-auto">
              What is breaking or taking too much time?
            </h2>
            <p className="section-lede mx-auto mb-10 max-w-2xl">
              Every build begins the same way — describing the real operational friction.
              No sales pitch, no demo, no generic discovery call.
              Just a clear description of what is not working and what a better system would do.
            </p>
            <Link href="/contact" className="cta-primary text-base px-8 py-4">
              Describe the problem <span aria-hidden="true">→</span>
            </Link>
            <p className="mt-6 font-mono text-[0.58rem] tracking-[0.14em] uppercase text-muted">
              {identity.location}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
