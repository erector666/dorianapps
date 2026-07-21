import { Header } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities — Dorian Apps",
  description: "Systematic AI capabilities across document intelligence, autonomous agents, field operations, and mobile development.",
};

const domains = [
  {
    title: "AI Product Development",
    problem: "Operational friction that manual processes cannot resolve",
    description: "End-to-end product design and build for AI-powered tools that replace manual workflows. From document intelligence platforms to agentic systems, each product is built around a specific operational bottleneck.",
    examples: ["DocVault", "CodexPilot"]
  },
  {
    title: "Autonomous Agent Systems",
    problem: "Work that requires persistent context and verification across cycles",
    description: "Design and deployment of autonomous agents with memory, verification gates, and iterative refinement loops. Agents that persist context across sessions and improve through structured feedback.",
    examples: ["0Brain memory provider", "Agentic document pipelines"]
  },
  {
    title: "Document Intelligence",
    problem: "Administrative chaos buried in PDFs, invoices, and scattered records",
    description: "Systems for document storage, extraction, classification, and AI-assisted search. Turning paper trails into queryable operational memory.",
    examples: ["DocVault", "Construction document processing"]
  },
  {
    title: "Field Operations",
    problem: "Scattered data across workers, vehicles, projects, and locations",
    description: "Operational visibility systems for construction and field work. Real-time tracking of workers, projects, vehicles, sessions, and location data in a single interface.",
    examples: ["Field Ops (Fenix)", "Live mapping dashboards"]
  },
  {
    title: "Mobile Development",
    problem: "Repository control and coding capability away from the desk",
    description: "Android-native development tooling for AI coding agents, local model execution, and full repository control from mobile devices.",
    examples: ["CodexPilot", "Android agent infrastructure"]
  },
  {
    title: "Systems Architecture",
    problem: "Fragile pipelines that break under real operational pressure",
    description: "Architecture decisions that prioritise reliability, observability, and graceful degradation. Every system is designed to survive contact with the real world.",
    examples: ["Multi-agent orchestration", "Persistent memory backends"]
  }
];

export default function CapabilitiesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">
        {/* Hero */}
        <section className="section pt-32">
          <div className="container">
            <p className="eyebrow mb-5">System Capabilities</p>
            <h1 className="section-title mb-6">What we build</h1>
            <p className="section-lede">
              Capabilities organised by the operational problems they solve — not by technology stack. Each domain represents a category of friction we have encountered and built systems to address.
            </p>
          </div>
        </section>

        {/* Capability domains */}
        <section className="section border-t border-white/10">
          <div className="container">
            <div className="grid gap-10 sm:grid-cols-2">
              {domains.map((domain) => (
                <div key={domain.title} className="capability-domain">
                  <h2>{domain.title}</h2>
                  <p className="mb-4">{domain.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {domain.examples.map((ex) => (
                      <span key={ex} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-accent">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/10 content-section-alt">
          <div className="container text-center">
            <h2 className="section-title mb-6 mx-auto">What are you trying to improve?</h2>
            <p className="section-lede mx-auto mb-10">
              The best systems start with a clear description of what is breaking. Tell us about your operational friction and we will find the right capability match.
            </p>
            <Link href="/contact" className="cta-primary">
              Describe the problem <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
