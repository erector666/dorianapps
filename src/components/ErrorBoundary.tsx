"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error);
    console.error("Component stack:", errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[40vh] flex-col items-center justify-center px-6 py-16 text-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4 text-[var(--color-muted)] opacity-40"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h2 className="mb-2 font-display text-lg font-bold text-[var(--color-text)]">
              Something went wrong
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
              An unexpected error occurred while rendering this section.
              Try refreshing the page, or navigate back to the homepage.
            </p>
            <a
              href="/"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-text)] hover:bg-white/10 transition-colors"
            >
              Return home
            </a>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
