import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Dorian Apps",
  description:
    "The page you are looking for does not exist. Return to the Dorian Apps homepage.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[var(--color-bg)] px-8 text-[var(--color-text)] font-body">
      <div className="text-center max-w-[480px]">
        <div className="relative w-[180px] h-[180px] mx-auto mb-8 opacity-40">
          <Image
            src="/assets/404-graphic.svg"
            alt=""
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>
        <p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
          404
        </p>
        <h1 className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-black leading-none mb-4">
          This page does not exist.
        </h1>
        <p className="text-[var(--color-muted)] text-[0.95rem] leading-relaxed mb-8">
          The page you were looking for has moved, been renamed, or was never
          here. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-black rounded-full px-6 py-3 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] no-underline hover:bg-gray-200 transition-colors"
          >
            Return home
          </Link>
          <Link
            href="/products/docvault"
            className="inline-flex items-center gap-2 text-[var(--color-text)] rounded-full px-6 py-3 border border-white/15 font-mono text-[0.7rem] font-bold uppercase tracking-[0.2em] no-underline hover:bg-white/10 transition-colors"
          >
            Explore products
          </Link>
        </div>
      </div>
    </div>
  );
}
