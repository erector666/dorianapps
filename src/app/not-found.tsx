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
    <html lang="en">
      <body
        style={{
          margin: 0,
          background: "#070808",
          color: "#E2E4E9",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <div
            style={{
              position: "relative",
              width: "180px",
              height: "180px",
              margin: "0 auto 2rem",
              opacity: 0.4,
            }}
          >
            <Image
              src="/assets/404-graphic.svg"
              alt=""
              fill
              priority
              style={{ objectFit: "contain" }}
            />
          </div>
          <p
            style={{
              fontFamily:
                "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
              fontSize: "0.6rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#5B5F68",
              marginBottom: "1rem",
            }}
          >
            404
          </p>
          <h1
            style={{
              fontFamily:
                "'Playfair Display', 'Times New Roman', serif",
              fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
              fontWeight: 900,
              lineHeight: 1,
              margin: "0 0 1rem",
            }}
          >
            This page does not exist.
          </h1>
          <p
            style={{
              color: "#8A8F98",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              margin: "0 0 2rem",
            }}
          >
            The page you were looking for has moved, been renamed, or was never
            here. Let&apos;s get you back on track.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#fff",
                color: "#000",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontFamily:
                  "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                textDecoration: "none",
              }}
            >
              Return home
            </Link>
            <Link
              href="/products/docvault"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#E2E4E9",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255,255,255,0.15)",
                fontFamily:
                  "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                textDecoration: "none",
              }}
            >
              Explore products
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
