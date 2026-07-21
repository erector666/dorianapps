import { Header } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab — Dorian Apps",
  description: "Experimental systems and research. Hypotheses tested, findings documented, status tracked.",
};

const experiments = [
  {
    slug: "agent-memory-persistence",
    title: "Agent Memory Persistence",
    status: "Verified",
    hypothesis: "Persistent cross-session memory significantly reduces agent repetition and improves task completion for multi-turn autonomous agent workflows.",
    method: "Built and tested 0Brain memory provider with three different agent architectures across 50+ autonomous task sessions.",
    findings: "Memory persistence reduced average task completion time by 40% and eliminated redundant context re-establishment. Key insight: memory is most effective when structured as hierarchical recall (session → episode → fact) rather than flat retrieval.",
    tags: ["Agents", "Memory", "Infrastructure"]
  },
  {
    slug: "verification-gate-pattern",
    title: "Verification Gate Pattern",
    status: "Verified",
    hypothesis: "Structured verification gates at defined checkpoints in autonomous agent workflows will catch hallucinations and drift before they compound.",
    method: "Implemented a three-gate system (intent check, output validation, consistency verification) across document processing and code generation agents.",
    findings: "Verification gates caught 78% of critical errors before they reached production. The key design principle: gates must be domain-specific — generic validation is insufficient for real operational work.",
    tags: ["Agents", "Quality", "Architecture"]
  },
  {
    slug: "android-coding-agent",
    title: "Android-Native Coding Agent",
    status: "Experimental",
    hypothesis: "A mobile-first coding agent can handle repository-level operations (branch, commit, review) from an Android device while maintaining the same quality discipline as desktop workflows.",
    method: "Built CodexPilot — an Android app that interfaces with local LLMs and Git operations through a structured command protocol.",
    findings: "Repository browsing and review work well on mobile. Full-scale code generation benefits from a hybrid approach (draft on mobile, refine on desktop). Key challenge: context window management on resource-constrained devices.",
    tags: ["Mobile", "Developer tools", "Android"]
  },
  {
    slug: "document-understanding-pipeline",
    title: "Multi-Format Document Understanding",
    status: "Verified",
    hypothesis: "A single pipeline can handle PDFs, images, spreadsheets, and handwritten documents with comparable accuracy to format-specific solutions.",
    method: "Built a document processing pipeline combining OCR, layout analysis, and LLM-based extraction with a unified output schema.",
    findings: "Achieved 92% extraction accuracy across formats. The unified schema was the critical design decision — format-specific preprocessing matters less than consistent output structure. Handwriting remains the hardest case (84% accuracy).",
    tags: ["Documents", "AI", "Processing"]
  },
  {
    slug: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration Pattern",
    status: "In Development",
    hypothesis: "A coordinator-worker pattern with shared memory and verification gates will outperform single-agent architectures for complex multi-domain tasks.",
    method: "Building an orchestration layer with specialised sub-agents (document, code, analysis) coordinated by a routing agent with access to shared persistent memory.",
    findings: "Early results: 3-agent configuration outperforms single-agent on multi-domain tasks by 35%. Main challenge is inter-agent context passing — working on structured handoff protocols.",
    tags: ["Agents", "Orchestration", "Architecture"]
  },
  {
    slug: "construction-field-data",
    title: "Construction Field Data System",
    status: "Verified",
    hypothesis: "Real-time field data capture with live mapping will reduce construction project coordination overhead by at least 30% compared to paper-based or spreadsheet workflows.",
    method: "Built Field Ops — a live mapping and tracking system deployed to Swiss construction operations with worker, vehicle, project, and document modules.",
    findings: "Coordination overhead reduced by an estimated 45% in pilot deployment. The live map was the highest-impact feature — spatial awareness of all assets in one view eliminated most status-check communication.",
    tags: ["Field ops", "Maps", "Construction"]
  }
];

const statusColors: Record<string, string> = {
  "Verified": "var(--accent-green)",
  "Experimental": "var(--accent-amber)",
  "In Development": "var(--accent-cyan)",
  "Archived": "var(--color-muted)",
};

export default function LabPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">
        {/* Hero */}
        <section className="section pt-32">
          <div className="container">
            <p className="eyebrow mb-5">Experiments Registry</p>
            <h1 className="section-title mb-6">What we are testing</h1>
            <p className="section-lede">
              Each experiment below tests a specific hypothesis about how AI systems can be built, deployed, and operated. Status tracked from hypothesis to verified finding.
            </p>
          </div>
        </section>

        {/* Experiment cards */}
        <section className="section border-t border-white/10">
          <div className="container">
            <div className="card-grid">
              {experiments.map((exp) => (
                <Link
                  key={exp.slug}
                  href={`/lab/${exp.slug}`}
                  className="glass-panel rounded-2xl p-6 group transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="status-badge" style={{ color: statusColors[exp.status] }}>
                      {exp.status}
                    </span>
                  </div>
                  <h2 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {exp.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.hypothesis}
                  </p>
                  {exp.findings && (
                    <p className="text-xs text-muted/70 leading-relaxed line-clamp-2 italic">
                      Findings: {exp.findings.substring(0, 120)}...
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
