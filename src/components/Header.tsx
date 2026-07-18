"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryLinks } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-[var(--glass-bg)] backdrop-blur-xl">
      <nav aria-label="Main" className="experience-container flex items-center justify-between border-b border-white/15 px-0 py-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Dorian Apps home">
          <span className="font-mono text-sm font-bold tracking-[0.2em] text-white">D/A</span>
          <span>
            <span className="block text-xs font-bold uppercase tracking-[0.13em] leading-none">Dorian Apps</span>
            <span className="block font-mono text-[0.58rem] uppercase tracking-[0.25em] text-[var(--color-muted)]">
              Nik Velkovski
            </span>
          </span>
        </Link>
        <button
          type="button"
          className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/8 md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobilePanel"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="h-0.5 w-5 bg-current shadow-[0_7px_0_currentColor,0_-7px_0_currentColor]" />
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {primaryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link text-sm font-semibold text-white/76">
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="focus-ring border-b border-white px-1 py-2 font-mono text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white"
          >
            Start
          </Link>
        </div>
      </nav>
      <nav aria-label="Main mobile">
      <div
        id="mobilePanel"
        className={`container mt-3 rounded-[1.25rem] border border-white/15 bg-black/78 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.44)] backdrop-blur-2xl md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        {primaryLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block border-b border-[var(--color-border)] py-3 font-mono text-xs uppercase tracking-[0.2em]"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      </nav>
    </header>
  );
}
