"use client";

import Link from "next/link";

export function HomeHero() {
  return (
    <section id="top" className="flow-hero" data-stage="0">
      <div className="flow-container flow-hero-layout">
        <div className="flow-hero-copy">
          <p className="flow-kicker">Nik Velkovski / Product builder / Switzerland</p>
          <h1>AI that can<br />carry the work.</h1>
          <p className="flow-lede">I build intelligent products for operations where missing context, slow decisions, and disconnected tools have a real cost.</p>
          <div className="flow-actions">
            <Link href="#origin" className="flow-link">Follow the signal <span aria-hidden="true">↓</span></Link>
            <Link href="/contact" className="flow-link flow-link-muted">Start a project <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="flow-telemetry" aria-hidden="true">
          <span>CORE / ONLINE</span><span>MEMORY / PERSISTENT</span><span>VERIFY / ENABLED</span>
        </div>
        <p className="flow-scroll-cue">SCROLL / ONE SYSTEM, FIVE STATES</p>
      </div>
    </section>
  );
}
