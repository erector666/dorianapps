export function HomeAgents() {
  return (
    <section className="flow-agents" data-stage="5">
      <div className="flow-container flow-agents-layout">
        <div className="flow-agents-copy">
          <p className="flow-kicker">Beyond applications</p>
          <h2>From software<br />to workforce.</h2>
          <p>The next system does not wait at an empty prompt. Specialist agents investigate, delegate, remember, challenge weak answers, and verify evidence before the work moves forward.</p>
        </div>
        <div className="flow-agent-orbit" aria-label="Autonomous agent operating loop">
          <div className="agent-orbit-center"><span>GOAL</span><strong>Verified<br />result</strong></div>
          <span className="agent-chip agent-chip-a">Investigate</span>
          <span className="agent-chip agent-chip-b">Delegate</span>
          <span className="agent-chip agent-chip-c">Remember</span>
          <span className="agent-chip agent-chip-d">Challenge</span>
          <span className="agent-chip agent-chip-e">Verify</span>
        </div>
      </div>
    </section>
  );
}
