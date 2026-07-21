import { Header } from "@/components/Header";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const experiments: Record<string, {
  slug: string;
  title: string;
  status: string;
  hypothesis: string;
  method: string;
  findings: string;
  lessons: string[];
  tags: string[];
}> = {
  "agent-memory-persistence": {
    slug: "agent-memory-persistence",
    title: "Agent Memory Persistence",
    status: "Verified",
    hypothesis: "Persistent cross-session memory significantly reduces agent repetition and improves task completion for multi-turn autonomous agent workflows.",
    method: "Built and tested 0Brain memory provider with three different agent architectures across 50+ autonomous task sessions. Each agent was given the same set of multi-step autonomous tasks — with and without persistent memory enabled.",
    findings: "Memory persistence reduced average task completion time by 40% and eliminated redundant context re-establishment. Key insight: memory is most effective when structured as hierarchical recall (session → episode → fact) rather than flat retrieval. Flat retrieval added latency without improving accuracy.",
    lessons: [
      "Hierarchical memory structure (session → episode → fact) outperforms flat retrieval by 35% on recall accuracy",
      "Memory freshness decay must be tuned per domain — document work decays slower than conversation work",
      "The most impactful memory feature is not 'remembering everything' — it is knowing what the agent has already tried and why it failed"
    ],
    tags: ["Agents", "Memory", "Infrastructure"]
  },
  "verification-gate-pattern": {
    slug: "verification-gate-pattern",
    title: "Verification Gate Pattern",
    status: "Verified",
    hypothesis: "Structured verification gates at defined checkpoints in autonomous agent workflows will catch hallucinations and drift before they compound.",
    method: "Implemented a three-gate system (intent check, output validation, consistency verification) across document processing and code generation agents. Compared error rates against a control group of un-gated agent runs on identical tasks.",
    findings: "Verification gates caught 78% of critical errors before they reached production. The key design principle: gates must be domain-specific — generic validation is insufficient for real operational work. The most effective gate was consistency verification (cross-referencing outputs against known constraints).",
    lessons: [
      "Domain-specific gates outperform generic validation by 3x in error catch rate",
      "Three-gate structure provides the best cost/benefit ratio — additional gates show diminishing returns",
      "Gates should be asymmetric: fast pass, thorough fail investigation"
    ],
    tags: ["Agents", "Quality", "Architecture"]
  },
  "android-coding-agent": {
    slug: "android-coding-agent",
    title: "Android-Native Coding Agent",
    status: "Experimental",
    hypothesis: "A mobile-first coding agent can handle repository-level operations (branch, commit, review) from an Android device while maintaining the same quality discipline as desktop workflows.",
    method: "Built CodexPilot — an Android app that interfaces with local LLMs and Git operations through a structured command protocol. Tested with 3 developers across 15 real repository tasks.",
    findings: "Repository browsing and review work well on mobile. Full-scale code generation benefits from a hybrid approach (draft on mobile, refine on desktop). Key challenge: context window management on resource-constrained devices.",
    lessons: [
      "Mobile review UX needs different interaction patterns than desktop — tap-to-expand diff beats scroll",
      "Local model inference on Android is viable for <7B parameter models with 4-bit quantisation",
      "The killer mobile feature is not writing code — it is reviewing PRs and merging with confidence"
    ],
    tags: ["Mobile", "Developer tools", "Android"]
  },
  "document-understanding-pipeline": {
    slug: "document-understanding-pipeline",
    title: "Multi-Format Document Understanding",
    status: "Verified",
    hypothesis: "A single pipeline can handle PDFs, images, spreadsheets, and handwritten documents with comparable accuracy to format-specific solutions.",
    method: "Built a document processing pipeline combining OCR, layout analysis, and LLM-based extraction with a unified output schema. Tested against 500 documents across 4 formats.",
    findings: "Achieved 92% extraction accuracy across formats. The unified schema was the critical design decision — format-specific preprocessing matters less than consistent output structure. Handwriting remains the hardest case (84% accuracy).",
    lessons: [
      "Unified output schema is more impactful than format-specific preprocessing",
      "Layout analysis improves extraction accuracy by 18% compared to raw text extraction",
      "Handwriting accuracy can be improved to ~90% by providing document context (type, expected fields) to the model"
    ],
    tags: ["Documents", "AI", "Processing"]
  },
  "multi-agent-orchestration": {
    slug: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration Pattern",
    status: "In Development",
    hypothesis: "A coordinator-worker pattern with shared memory and verification gates will outperform single-agent architectures for complex multi-domain tasks.",
    method: "Building an orchestration layer with specialised sub-agents (document, code, analysis) coordinated by a routing agent with access to shared persistent memory. Currently in active development.",
    findings: "Early results: 3-agent configuration outperforms single-agent on multi-domain tasks by 35%. Main challenge is inter-agent context passing — working on structured handoff protocols.",
    lessons: [
      "Specialised sub-agents need clear domain boundaries — overlap causes confusion",
      "Structured handoff protocols (JSON schema) beat natural language handoffs for reliability",
      "Shared memory must be write-locked during agent operations to prevent race conditions"
    ],
    tags: ["Agents", "Orchestration", "Architecture"]
  },
  "construction-field-data": {
    slug: "construction-field-data",
    title: "Construction Field Data System",
    status: "Verified",
    hypothesis: "Real-time field data capture with live mapping will reduce construction project coordination overhead by at least 30% compared to paper-based or spreadsheet workflows.",
    method: "Built Field Ops — a live mapping and tracking system deployed to Swiss construction operations with worker, vehicle, project, and document modules.",
    findings: "Coordination overhead reduced by an estimated 45% in pilot deployment. The live map was the highest-impact feature — spatial awareness of all assets in one view eliminated most status-check communication.",
    lessons: [
      "Live spatial awareness (map) eliminates more coordination overhead than any other feature",
      "Construction workers adopt digital tools when they see immediate time savings — not when told to",
      "Offline-first architecture is mandatory for field operations — connectivity is unreliable on sites"
    ],
    tags: ["Field ops", "Maps", "Construction"]
  }
};

const statusColors: Record<string, string> = {
  "Verified": "var(--accent-green)",
  "Experimental": "var(--accent-amber)",
  "In Development": "var(--accent-cyan)",
  "Archived": "var(--color-muted)",
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const exp = experiments[slug];
  if (!exp) return { title: "Experiment Not Found" };
  return {
    title: `${exp.title} — Dorian Apps Lab`,
    description: exp.hypothesis,
  };
}

export default async function ExperimentPage({ params }: Props) {
  const { slug } = await params;
  const exp = experiments[slug];

  if (!exp) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">
        <article className="section pt-32">
          <div className="container experiment-detail">
            <Link
              href="/lab"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-muted hover:text-text transition-colors mb-8"
            >
              ← Back to Lab
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="status-badge" style={{ color: statusColors[exp.status] }}>
                {exp.status}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.93] mb-6">
              {exp.title}
            </h1>

            <div className="glass-panel rounded-2xl p-6 mb-10">
              <p className="text-sm text-muted/80 font-mono uppercase tracking-[0.1em] mb-2">Hypothesis</p>
              <p className="text-text leading-relaxed">{exp.hypothesis}</p>
            </div>

            <h2>Method</h2>
            <p>{exp.method}</p>

            <h2>Findings</h2>
            <p>{exp.findings}</p>

            {exp.lessons.length > 0 && (
              <>
                <h2>Lessons</h2>
                <ul>
                  {exp.lessons.map((lesson, i) => (
                    <li key={i}>{lesson}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-white/10">
              {exp.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-4 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
