import { process } from "@/data/site";
import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";

export function ProcessSection() {
  return (
    <section id="process" className="section overflow-hidden">
      <div className="container">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1fr]">
          <div>
            <p className="eyebrow mb-4">04 / Verification loop</p>
            <RevealText>
              <h2 className="section-title">Break it until it can be trusted.</h2>
            </RevealText>
          </div>
          <p className="section-lede">
            My projects are rarely perfect on the first attempt. I test them, break them, audit them, rebuild them, and
            push them further. That is how the work moves from appearing intelligent to becoming useful.
          </p>
        </div>
        <FadeIn stagger={0.08} className="grid overflow-hidden rounded-[1.5rem] border border-white/12 bg-black/26 backdrop-blur-xl lg:grid-cols-5">
          {process.map((item) => (
            <article key={item.step} className="min-h-[18rem] border-b border-white/12 p-6 transition-colors duration-300 hover:bg-white/[0.045] lg:border-b-0 lg:border-r">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                {item.step}
              </span>
              <h3 className="mt-16 font-display text-3xl font-bold">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-white/64">{item.body}</p>
            </article>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
