"use client";

import { useState, type FormEvent } from "react";
import { Header } from "@/components/Header";
import { identity } from "@/data/site";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!message.trim()) {
      errs.message = "Message is required.";
    } else if (message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    // Simulate form submission — no backend yet
    console.log("Contact form submission:", { name, email, message });

    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1200);
  }

  return (
    <main className="site-shell">
      <Header />

      <section className="pt-32">
        <div className="container grid min-h-[calc(100vh-8rem)] gap-10 pb-20 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left: Info */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <h1 className="max-w-[9ch] pb-4 font-display text-[clamp(3.2rem,8vw,8rem)] font-black leading-[0.9]">
              Start the conversation.
            </h1>
            <p className="section-lede mt-8">
              If you are building an AI product, redesigning an inefficient
              operation, or exploring how autonomous agents can create a real
              competitive advantage, reach out.
            </p>
            <p className="section-lede mt-4">
              I respond within 24–48 hours. Every conversation starts with
              understanding the operational reality — not a sales pitch.
            </p>

            <div className="mt-10 space-y-4">
              <div className="glass-panel rounded-2xl p-6">
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Location
                </span>
                <strong className="mt-2 block text-sm text-[var(--color-text)]">
                  {identity.location}
                </strong>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Response time
                </span>
                <strong className="mt-2 block text-sm text-[var(--color-text)]">
                  Typically within 24–48 hours
                </strong>
              </div>
              <div className="glass-panel rounded-2xl p-6">
                <span className="block font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  What to expect
                </span>
                <strong className="mt-2 block text-sm text-[var(--color-text)]">
                  A direct conversation about your operational reality, the
                  friction you are experiencing, and whether what I build can
                  help.
                </strong>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass-panel-strong rounded-[2rem] p-8 md:p-10">
            <p className="eyebrow mb-5">Send a message</p>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight">
                  Message sent
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                  Thanks for reaching out. I&apos;ll respond within 24–48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="focus-ring mt-6 rounded-full border border-white/20 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                    }}
                    placeholder="Your name"
                    className={`w-full rounded-xl border bg-white/[0.05] px-5 py-4 text-sm text-[var(--color-text)] placeholder:text-white/30 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-colors ${
                      errors.name ? "border-red-500/60" : "border-white/15"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    className={`w-full rounded-xl border bg-white/[0.05] px-5 py-4 text-sm text-[var(--color-text)] placeholder:text-white/30 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-colors ${
                      errors.email ? "border-red-500/60" : "border-white/15"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                    }}
                    rows={5}
                    placeholder="Tell me about your project, the operational friction you are experiencing, or what you are trying to build..."
                    className={`w-full resize-none rounded-xl border bg-white/[0.05] px-5 py-4 text-sm text-[var(--color-text)] placeholder:text-white/30 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] transition-colors ${
                      errors.message ? "border-red-500/60" : "border-white/15"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="focus-ring w-full rounded-full bg-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="animate-spin h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send message <span aria-hidden="true">↗</span>
                    </>
                  )}
                </button>
              </form>
            )}
            <p className="mt-6 text-center font-mono text-[0.55rem] uppercase tracking-[0.15em] text-white/30">
              Messages go directly to {identity.founder}. No automation, no
              autoresponder.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="container flex flex-col justify-between gap-3 font-mono text-xs uppercase tracking-[0.18em] text-white/52 md:flex-row">
          <span>{identity.company} / AI products and operational software</span>
          <span>
            {identity.founder} / {identity.location}
          </span>
        </div>
      </footer>
    </main>
  );
}
