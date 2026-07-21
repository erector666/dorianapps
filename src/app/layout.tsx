import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/providers/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dorianapps.com"),
  title: "Dorian Apps — Software for work that has outgrown spreadsheets",
  description:
    "Systematic AI product development. Autonomous agents, document intelligence, and field operations software built by Nik Velkovski.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Dorian Apps — Software for work that has outgrown spreadsheets",
    description:
      "Systematic AI product development. Autonomous agents, document intelligence, and field operations software built by Nik Velkovski.",
    url: "https://dorianapps.com",
    siteName: "Dorian Apps",
    images: [
      {
        url: "/assets/og-image.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorian Apps — Software for work that has outgrown spreadsheets",
    description:
      "Systematic AI product development. Autonomous agents, document intelligence, and field operations software built by Nik Velkovski.",
    images: ["/assets/og-image.svg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interDisplay.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-modal focus:rounded-lg focus:bg-surface-elevated focus:px-4 focus:py-3 focus:text-sm focus:text-text focus:ring-2 focus:ring-accent"
        >
          Skip to content
        </a>
        <ErrorBoundary>
          <SmoothScroll>
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
