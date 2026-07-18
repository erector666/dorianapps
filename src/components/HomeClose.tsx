import Link from "next/link";

export function HomeClose() {
  return (
    <section className="flow-close" data-stage="7">
      <div className="flow-container flow-close-layout">
        <p className="flow-kicker">Dorian Apps / Next move</p>
        <h2>Build a system<br />that carries more.</h2>
        <p>AI products, autonomous agent systems, developer tools, and operational software for teams ready to work differently.</p>
        <Link href="/contact" className="flow-close-link"><span>Start the conversation</span><b aria-hidden="true">↗</b></Link>
        <div className="flow-footer"><span>© DORIAN APPS</span><span>SWITZERLAND / MACEDONIA / REMOTE</span></div>
      </div>
    </section>
  );
}
