import { Header } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach — Dorian Apps",
  description: "The 6-stage method for building AI systems that survive contact with the real world.",
};

const stages = [
  {
    number: "01",
    title: "Observation",
    summary: "Watch the work happen",
    detail: "Every system starts with watching real work. Not interviewing stakeholders about what they think happens — sitting with operators and seeing the friction directly. The gap between documented process and actual work is where the real problems live.",
    practices: ["Shadow real operators", "Map the friction points", "Identify the workarounds people already built"]
  },
  {
    number: "02",
    title: "Pressure Mapping",
    summary: "Find where the system cracks",
    detail: "Not all friction is worth solving. Pressure mapping identifies where operational pain is highest — where delays cascade, where errors compound, where workarounds are accumulating technical debt.",
    practices: ["Measure cascade impact", "Rate friction severity", "Identify highest-ROI intervention points"]
  },
  {
    number: "03",
    title: "System Design",
    summary: "Design for real conditions",
    detail: "Design begins once the problem is named correctly. This stage produces architecture decisions, data models, and interaction flows — but always anchored to the observed friction, not to technology preferences.",
    practices: ["Architecture from constraints", "Design for graceful degradation", "Plan verification gates"]
  },
  {
    number: "04",
    title: "Build & Verify",
    summary: "Build to a verification standard",
    detail: "Every deployed change is paired with a verification mechanism. Whether it is automated tests, human-in-the-loop gates, or agentic self-verification — nothing ships without proof that it actually solves the pressure point it was designed for.",
    practices: ["Verification-first deployment", "Automated regression detection", "Operator acceptance testing"]
  },
  {
    number: "05",
    title: "Pressure Testing",
    summary: "Break it before the world does",
    detail: "Real operational volume is the only valid test. This stage deliberately stresses the system at or beyond expected loads, injects failure modes, and measures recovery. The goal is not to prove the system works — it is to find where it does not.",
    practices: ["Load beyond expected peaks", "Inject realistic failure modes", "Measure recovery time"]
  },
  {
    number: "06",
    title: "Iterate",
    summary: "The system is never finished",
    detail: "Operational conditions change. New friction points emerge. The system evolves through structured iteration cycles — each cycle begins with fresh observation of how the work is actually being done now.",
    practices: ["Re-observe after deployment", "Track new friction emergence", "Schedule iteration checkpoints"]
  }
];

export default function ApproachPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="site-shell">
        {/* Hero */}
        <section className="section pt-32">
          <div className="container">
            <p className="eyebrow mb-5">Operating Manual</p>
            <h1 className="section-title mb-6">How systems get built</h1>
            <p className="section-lede">
              A method refined through direct exposure to operational pressure. Six stages — each designed to prevent the kind of failure that happens when builders guess instead of observe.
            </p>
          </div>
        </section>

        {/* Method stages */}
        <section className="section border-t border-white/10">
          <div className="container">
            {stages.map((stage) => (
              <article key={stage.number} className="method-stage">
                <div className="method-stage-number">{stage.number}</div>
                <div className="method-stage-content">
                  <h2>{stage.title} — {stage.summary}</h2>
                  <p>{stage.detail}</p>
                  <ul>
                    {stage.practices.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section border-t border-white/10 content-section-alt">
          <div className="container text-center">
            <h2 className="section-title mb-6 mx-auto">Ready to start with observation?</h2>
            <p className="section-lede mx-auto mb-10">
              Every build begins the same way — describing the real operational friction. Tell us what is breaking and we will find the right starting point.
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
