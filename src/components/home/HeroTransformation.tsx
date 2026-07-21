"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Stage copy ── */
const STAGE_COPY = [
  "Work that has outgrown spreadsheets.",
  "Scattered across emails, documents, chats \u2014 disconnected.",
  "Connected by AI. Data flows where it should.",
  "Automated. Accurate. Always current.",
] as const;

const STAGES = ["problem", "recognition", "orchestration", "clarity"] as const;
type Stage = (typeof STAGES)[number];

function deriveStage(progress: number): Stage {
  if (progress < 0.25) return "problem";
  if (progress < 0.50) return "recognition";
  if (progress < 0.75) return "orchestration";
  return "clarity";
}

/* ── Fragment position specs (from 600×600 SVG viewBox) ── */
interface FragmentSpec {
  id: string;
  leftPct: number;
  topPct: number;
  nativeRotation: number;
  timing: number;
  width: number;
}

const BEFORE_FRAGMENTS: FragmentSpec[] = [
  { id: "frag-spreadsheet", leftPct: 6.7, topPct: 11.7, nativeRotation: -8,  timing: 0.05, width: 22 },
  { id: "frag-document",    leftPct: 9.2, topPct: 38.3, nativeRotation: 12,  timing: 0.08, width: 15 },
  { id: "frag-email",       leftPct: 52,  topPct: 10,   nativeRotation: 5,   timing: 0.11, width: 28 },
  { id: "frag-chat",        leftPct: 10,  topPct: 62,   nativeRotation: -15, timing: 0.14, width: 24 },
  { id: "frag-card",        leftPct: 47,  topPct: 58,   nativeRotation: -22, timing: 0.17, width: 12 },
];

const AFTER_FRAGMENTS: FragmentSpec[] = [
  { id: "frag-datasource",  leftPct: 10,  topPct: 20,  nativeRotation: 0, timing: 0.55, width: 18 },
  { id: "frag-processing",  leftPct: 38,  topPct: 20,  nativeRotation: 0, timing: 0.58, width: 18 },
  { id: "frag-output",      leftPct: 10,  topPct: 42,  nativeRotation: 0, timing: 0.62, width: 18 },
  { id: "frag-dashboard",   leftPct: 38,  topPct: 42,  nativeRotation: 0, timing: 0.66, width: 18 },
  { id: "frag-banner",      leftPct: 10,  topPct: 64,  nativeRotation: 0, timing: 0.70, width: 44 },
  { id: "frag-arrows",      leftPct: 0,   topPct: 0,   nativeRotation: 0, timing: 0.72, width: 0 },
];

/* ── Inline SVG fragment renderers ── */

function SpreadsheetFragment() {
  return (
    <svg viewBox="0 0 160 120" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="160" height="120" fill="none" stroke="#444" strokeWidth="1" opacity="0.6" />
      <line x1="0" y1="30" x2="160" y2="30" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="60" x2="160" y2="60" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <line x1="0" y1="90" x2="160" y2="90" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <line x1="40" y1="0" x2="40" y2="120" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <line x1="80" y1="0" x2="80" y2="120" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <line x1="120" y1="0" x2="120" y2="120" stroke="#444" strokeWidth="0.5" opacity="0.5" />
      <text x="5" y="22" fill="#666" fontFamily="monospace" fontSize="9">42</text>
      <text x="45" y="22" fill="#666" fontFamily="monospace" fontSize="9">17.5</text>
      <text x="5" y="52" fill="#666" fontFamily="monospace" fontSize="9">N/A</text>
      <text x="85" y="52" fill="#666" fontFamily="monospace" fontSize="9">err</text>
    </svg>
  );
}

function DocumentFragment() {
  return (
    <svg viewBox="-5 -5 100 120" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="90" height="110" fill="#222" stroke="#555" strokeWidth="1.5" rx="3" opacity="0.7" />
      <line x1="12" y1="22" x2="78" y2="22" stroke="#555" strokeWidth="2" />
      <line x1="12" y1="34" x2="60" y2="34" stroke="#555" strokeWidth="1.5" />
      <line x1="12" y1="46" x2="72" y2="46" stroke="#555" strokeWidth="1.5" />
      <line x1="12" y1="58" x2="50" y2="58" stroke="#555" strokeWidth="1.5" />
      <line x1="12" y1="70" x2="68" y2="70" stroke="#555" strokeWidth="1.5" />
      <rect x="70" y="0" width="20" height="18" fill="#333" stroke="#555" strokeWidth="1" rx="2" />
      <text x="75" y="13" fill="#777" fontFamily="sans-serif" fontSize="9" textAnchor="middle">PDF</text>
    </svg>
  );
}

function EmailFragment() {
  return (
    <svg viewBox="0 0 200 145" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="200" height="140" fill="#1a1a1a" stroke="#444" strokeWidth="1" rx="4" opacity="0.7" />
      <rect x="8" y="8" width="24" height="18" fill="none" stroke="#666" strokeWidth="1.5" rx="1" />
      <line x1="8" y1="8" x2="20" y2="20" stroke="#666" strokeWidth="1" />
      <line x1="32" y1="8" x2="20" y2="20" stroke="#666" strokeWidth="1" />
      <text x="40" y="17" fill="#666" fontFamily="sans-serif" fontSize="9">RE: Budget update</text>
      <text x="40" y="30" fill="#555" fontFamily="monospace" fontSize="8">From: ops@...</text>
      <line x1="8" y1="38" x2="192" y2="38" stroke="#333" strokeWidth="0.5" />
      <text x="8" y="52" fill="#555" fontFamily="monospace" fontSize="8">FYI the numbers in</text>
      <text x="8" y="64" fill="#555" fontFamily="monospace" fontSize="8">the spreadsheet do not</text>
      <text x="8" y="76" fill="#555" fontFamily="monospace" fontSize="8">match what we discussed.</text>
      <text x="8" y="88" fill="#555" fontFamily="monospace" fontSize="8">Can you send the</text>
      <text x="8" y="100" fill="#555" fontFamily="monospace" fontSize="8">latest version?</text>
      <line x1="8" y1="112" x2="192" y2="112" stroke="#333" strokeWidth="0.5" />
      <text x="8" y="126" fill="#777" fontFamily="sans-serif" fontSize="8">3 replies, 2 unread</text>
    </svg>
  );
}

function ChatFragment() {
  return (
    <svg viewBox="-50 -60 250 160" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <path d="M0,0 Q0,-50 50,-50 L150,-50 Q200,-50 200,0 L200,30 Q200,60 180,60 L80,60 L40,85 L45,55 L0,55 Q-30,55 0,25 Z" fill="#1a1a1a" stroke="#444" strokeWidth="1.5" opacity="0.7" />
      <text x="100" y="-20" fill="#666" fontFamily="sans-serif" fontSize="10" textAnchor="middle">@channel: where is</text>
      <text x="100" y="-5" fill="#666" fontFamily="sans-serif" fontSize="10" textAnchor="middle">the latest report?</text>
    </svg>
  );
}

function CardFragment() {
  return (
    <svg viewBox="0 0 70 50" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="70" height="50" fill="#1e1e1e" stroke="#555" strokeWidth="1" rx="2" opacity="0.5" />
      <line x1="10" y1="15" x2="60" y2="15" stroke="#555" strokeWidth="1" />
      <line x1="10" y1="25" x2="50" y2="25" stroke="#555" strokeWidth="1" />
      <line x1="10" y1="35" x2="55" y2="35" stroke="#555" strokeWidth="1" />
    </svg>
  );
}

const BEFORE_FRAGMENT_SVGS: Record<string, React.FC> = {
  "frag-spreadsheet": SpreadsheetFragment,
  "frag-document": DocumentFragment,
  "frag-email": EmailFragment,
  "frag-chat": ChatFragment,
  "frag-card": CardFragment,
};

function DataSourceFragment() {
  return (
    <svg viewBox="0 0 130 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="130" height="80" fill="#1a2332" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="65" y="30" fill="#ccc" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="bold">Data Source</text>
      <rect x="20" y="45" width="18" height="18" fill="#1e2a3a" stroke="#555" strokeWidth="0.5" rx="2" />
      <line x1="23" y1="50" x2="35" y2="50" stroke="#888" strokeWidth="1" />
      <line x1="23" y1="55" x2="32" y2="55" stroke="#888" strokeWidth="1" />
      <rect x="48" y="45" width="18" height="18" fill="#1e2a3a" stroke="#555" strokeWidth="0.5" rx="2" />
      <text x="57" y="58" fill="#888" fontFamily="sans-serif" fontSize="8" textAnchor="middle">@</text>
      <rect x="76" y="45" width="18" height="18" fill="#1e2a3a" stroke="#555" strokeWidth="0.5" rx="2" />
      <text x="85" y="58" fill="#888" fontFamily="sans-serif" fontSize="9" textAnchor="middle">D</text>
      <rect x="104" y="45" width="18" height="18" fill="#1e2a3a" stroke="#555" strokeWidth="0.5" rx="2" />
      <text x="113" y="58" fill="#888" fontFamily="sans-serif" fontSize="9" textAnchor="middle">C</text>
    </svg>
  );
}

function ProcessingFragment() {
  return (
    <svg viewBox="0 0 130 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="130" height="80" fill="#1a2332" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="65" y="30" fill="#ccc" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="bold">Processing</text>
      <circle cx="50" cy="56" r="12" fill="none" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
      <circle cx="50" cy="56" r="5" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5" />
      <line x1="38" y1="49" x2="62" y2="63" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      <line x1="62" y1="49" x2="38" y2="63" stroke="#f59e0b" strokeWidth="1" opacity="0.4" />
      <text x="100" y="60" fill="#f59e0b" fontFamily="monospace" fontSize="9" textAnchor="middle" opacity="0.8">+AI</text>
    </svg>
  );
}

function OutputFragment() {
  return (
    <svg viewBox="0 0 130 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="130" height="80" fill="#1a2332" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="65" y="28" fill="#ccc" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="bold">Structured</text>
      <text x="65" y="43" fill="#ccc" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="bold">Output</text>
      <text x="42" y="66" fill="#f59e0b" fontFamily="monospace" fontSize="12" opacity="0.7">{"{"}</text>
      <text x="57" y="66" fill="#aaa" fontFamily="monospace" fontSize="8">...</text>
      <text x="72" y="66" fill="#f59e0b" fontFamily="monospace" fontSize="12" opacity="0.7">{"}"}</text>
      <rect x="88" y="54" width="24" height="18" fill="none" stroke="#aaa" strokeWidth="0.5" rx="1" />
      <line x1="88" y1="60" x2="112" y2="60" stroke="#aaa" strokeWidth="0.5" />
      <line x1="88" y1="66" x2="112" y2="66" stroke="#aaa" strokeWidth="0.5" />
      <line x1="96" y1="54" x2="96" y2="72" stroke="#aaa" strokeWidth="0.5" />
    </svg>
  );
}

function DashboardFragment() {
  return (
    <svg viewBox="0 0 130 80" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="130" height="80" fill="#1a2332" stroke="#f59e0b" strokeWidth="1.5" rx="6" />
      <text x="65" y="30" fill="#ccc" fontFamily="sans-serif" fontSize="11" textAnchor="middle" fontWeight="bold">Dashboard</text>
      <rect x="30" y="62" width="8" height="12" fill="#f59e0b" opacity="0.5" />
      <rect x="42" y="50" width="8" height="24" fill="#f59e0b" opacity="0.6" />
      <rect x="54" y="44" width="8" height="30" fill="#f59e0b" opacity="0.7" />
      <rect x="66" y="55" width="8" height="19" fill="#f59e0b" opacity="0.6" />
      <rect x="78" y="62" width="8" height="12" fill="#f59e0b" opacity="0.5" />
      <text x="95" y="68" fill="#f59e0b" fontFamily="monospace" fontSize="10" opacity="0.8">+24%</text>
    </svg>
  );
}

function BannerFragment() {
  return (
    <svg viewBox="0 0 315 60" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
      <rect x="0" y="0" width="315" height="60" fill="#0e1a24" stroke="#f59e0b" strokeWidth="1" rx="8" opacity="0.8" />
      <text x="157" y="25" fill="#aaa" fontFamily="sans-serif" fontSize="10" textAnchor="middle" letterSpacing="1">SYSTEMS THAT WORK TOGETHER</text>
      <text x="157" y="45" fill="#f59e0b" fontFamily="sans-serif" fontSize="12" textAnchor="middle" fontWeight="bold">Automated. Accurate. Always Current.</text>
    </svg>
  );
}

const AFTER_FRAGMENT_SVGS: Record<string, React.FC> = {
  "frag-datasource": DataSourceFragment,
  "frag-processing": ProcessingFragment,
  "frag-output": OutputFragment,
  "frag-dashboard": DashboardFragment,
  "frag-banner": BannerFragment,
};

/* ── Chaos Arrows (dashed connectors from before SVG) ── */
function ChaosArrowsSVG() {
  return (
    <svg
      viewBox="0 0 600 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", inset: 0 }}
    >
      <path d="M200,130 C230,150 250,120 290,120" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M150,300 C180,380 150,400 90,400" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M250,410 C330,380 380,300 420,200" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M350,250 C320,350 400,450 300,460" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="3,5" opacity="0.3" />
    </svg>
  );
}

/* ── Pipeline Arrows (stroke-dashoffset draw effect) ── */
function PipelineArrowsSVG() {
  return (
    <svg
      viewBox="0 0 600 600"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <marker id="arrowPipeline" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0,0 L10,5 L0,10 Z" fill="#f59e0b" />
        </marker>
      </defs>
      <line className="pipe-line" x1="160" y1="140" x2="210" y2="140" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowPipeline)" />
      <line className="pipe-line" x1="345" y1="140" x2="395" y2="140" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowPipeline)" />
      <line className="pipe-line" x1="95" y1="180" x2="95" y2="228" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowPipeline)" />
      <line className="pipe-line" x1="280" y1="180" x2="280" y2="228" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowPipeline)" />
      <line className="pipe-line" x1="95" y1="310" x2="95" y2="358" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
      <line className="pipe-line" x1="280" y1="310" x2="280" y2="358" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
    </svg>
  );
}

/* ── Stage indicator dots ── */
function StageIndicator({ stage }: { stage: Stage }) {
  const idx = STAGES.indexOf(stage);
  return (
    <div className="hero-transform-indicator" aria-hidden="true">
      {STAGES.map((s, i) => (
        <div
          key={s}
          className="hero-transform-dot"
          data-active={i === idx ? "true" : "false"}
        />
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HeroTransformation — main component
   ═══════════════════════════════════════════════════════════════════ */

interface HeroTransformationProps {
  className?: string;
}

export function HeroTransformation({ className }: HeroTransformationProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [stage, setStage] = useState<Stage>("problem");
  const stageRef = useRef<Stage>("problem");

  const scrollSpaceRef = useRef<HTMLDivElement>(null);
  const builderRef = useRef<HTMLImageElement>(null);
  const builderMaskRef = useRef<HTMLDivElement>(null);

  const beforeFragRefs = useRef<(HTMLDivElement | null)[]>([]);
  const afterFragRefs = useRef<(HTMLDivElement | null)[]>([]);

  const chaosArrowsRef = useRef<HTMLDivElement>(null);
  const pipelineArrowsRef = useRef<HTMLDivElement>(null);

  const heroCopyRef = useRef<HTMLDivElement>(null);
  const stageCopyRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const stInstancesRef = useRef<ScrollTriggerInstance[]>([]);
  const rafIdRef = useRef<number | null>(null);

  /* ── Mount ── */
  useEffect(() => { setMounted(true); }, []);

  /* ── Mobile + reduced-motion detection ── */
  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsMobile(mqMobile.matches);
      setIsReducedMotion(mqReduced.matches);
    };
    update();
    mqMobile.addEventListener("change", update);
    mqReduced.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqReduced.removeEventListener("change", update);
    };
  }, []);

  /* ── GSAP setup (desktop, non-reduced) ── */
  useEffect(() => {
    if (!mounted || isMobile || isReducedMotion) return;

    const scrollSpace = scrollSpaceRef.current;
    const builder = builderRef.current;
    const builderMask = builderMaskRef.current;
    const chaosArrows = chaosArrowsRef.current;
    const pipelineArrows = pipelineArrowsRef.current;
    const heroCopy = heroCopyRef.current;

    if (!scrollSpace || !builder) return;

    let cancelled = false;

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      // Set initial states
      gsap.set(builder, { scale: 1, opacity: 1, filter: "blur(0px)" });
      if (builderMask) gsap.set(builderMask, { clipPath: "circle(100% at 50% 50%)" });

      beforeFragRefs.current.forEach((ref, i) => {
        if (ref) {
          const frag = BEFORE_FRAGMENTS[i];
          gsap.set(ref, { opacity: 0, scale: 0.85, rotation: frag.nativeRotation });
        }
      });

      if (chaosArrows) gsap.set(chaosArrows, { opacity: 0 });

      afterFragRefs.current.forEach((ref) => {
        if (ref) gsap.set(ref, { opacity: 0, scale: 0.92 });
      });

      // Pipeline arrows setup
      if (pipelineArrows) {
        const lines = pipelineArrows.querySelectorAll(".pipe-line");
        lines.forEach((line) => {
          const len = (line as SVGLineElement).getTotalLength();
          gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        });
        gsap.set(pipelineArrows, { opacity: 0 });
      }

      // Stage copy
      stageCopyRefs.current.forEach((ref, i) => {
        if (ref) gsap.set(ref, { opacity: i === 0 ? 1 : 0 });
      });

      if (heroCopy) gsap.set(heroCopy, { opacity: 1 });

      // ── Timeline ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollSpace,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0,
          invalidateOnRefresh: true,
          onUpdate: (self: { progress: number }) => {
            const currentStage = deriveStage(self.progress);
            if (currentStage !== stageRef.current) {
              stageRef.current = currentStage;
              setStage(currentStage);
            }
          },
        },
      });

      // Builder image
      tl.fromTo(
        builder,
        { scale: 1, opacity: 1, filter: "blur(0px)" },
        { scale: 0.35, opacity: 0.12, filter: "blur(8px)", ease: "none" },
        0,
      );

      // Builder radial mask (stage 3)
      if (builderMask) {
        tl.fromTo(
          builderMask,
          { clipPath: "circle(100% at 50% 50%)" },
          { clipPath: "circle(40% at 50% 50%)", ease: "none" },
          0.50,
        );
      }

      // Hero copy fades out
      if (heroCopy) {
        tl.to(heroCopy, { opacity: 0, duration: 0.06, ease: "power2.in" }, 0.18);
      }

      // Before fragments: staggered in, then dissolve
      BEFORE_FRAGMENTS.forEach((frag, i) => {
        const ref = beforeFragRefs.current[i];
        if (!ref) return;
        tl.fromTo(
          ref,
          { opacity: 0, scale: 0.85, rotation: frag.nativeRotation + 5 },
          { opacity: 1, scale: 1, rotation: frag.nativeRotation, duration: 0.08, ease: "power2.out" },
          frag.timing,
        );
        tl.to(
          ref,
          { opacity: 0, scale: 0.92, filter: "blur(3px)", duration: 0.10, ease: "power2.in" },
          0.50,
        );
      });

      // Chaos arrows
      if (chaosArrows) {
        tl.fromTo(chaosArrows, { opacity: 0 }, { opacity: 1, duration: 0.05 }, 0.05);
        tl.to(chaosArrows, { opacity: 0, duration: 0.08 }, 0.50);
      }

      // After fragments: staggered in
      AFTER_FRAGMENTS.forEach((frag, i) => {
        if (frag.id === "frag-arrows") return;
        const ref = afterFragRefs.current[i];
        if (!ref) return;
        tl.fromTo(
          ref,
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.07, ease: "power2.out" },
          frag.timing,
        );
      });

      // Pipeline arrows: stroke-dashoffset draw
      if (pipelineArrows) {
        const lines = pipelineArrows.querySelectorAll(".pipe-line");
        lines.forEach((line) => {
          const len = (line as SVGLineElement).getTotalLength();
          tl.fromTo(
            line,
            { strokeDashoffset: len },
            { strokeDashoffset: 0, duration: 0.12, ease: "power2.inOut" },
            0.58,
          );
        });
        tl.fromTo(pipelineArrows, { opacity: 0 }, { opacity: 1, duration: 0.01 }, 0.58);
      }

      // Stage copy — visible across each full 25% stage with 5% crossfade at boundaries
      for (let i = 0; i < 4; i++) {
        const ref = stageCopyRefs.current[i];
        if (!ref) continue;
        if (i === 0) {
          // Stage 0: visible from 0 → fades out at 0.20-0.25
          tl.to(ref, { opacity: 0, duration: 0.05, ease: "power2.in" }, 0.20);
        } else if (i < 3) {
          // Stages 1-2: fades in 0.05 before stage start, visible through, fades out 0.05 before end
          tl.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: 0.05, ease: "power2.out" }, i * 0.25 - 0.05);
          tl.to(ref, { opacity: 0, duration: 0.05, ease: "power2.in" }, i * 0.25 + 0.20);
        } else {
          // Stage 3: fades in at 0.70, stays visible to end
          tl.fromTo(ref, { opacity: 0 }, { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.70);
        }
      }

      // ── Stage 2 oscillation (RAF loop) ──
      const oscillate = () => {
        if (cancelled) return;
        const allSt = ScrollTrigger.getAll() as ScrollTriggerInstance[];
        if (allSt.length === 0) {
          rafIdRef.current = requestAnimationFrame(oscillate);
          return;
        }
        const p = (allSt[0].progress as number) ?? 0;
        if (p < 0.25 || p > 0.50) {
          rafIdRef.current = requestAnimationFrame(oscillate);
          return;
        }
        const t = performance.now() * 0.001;
        beforeFragRefs.current.forEach((ref, i) => {
          if (!ref) return;
          const phase = i * 0.7;
          const x = Math.sin(t * 1.2 + phase) * 2;
          const y = Math.cos(t * 0.9 + phase) * 2;
          const r = Math.sin(t * 0.6 + phase) * 1;
          const baseRotation = BEFORE_FRAGMENTS[i].nativeRotation;
          ref.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + (baseRotation + r) + "deg)";
        });
        rafIdRef.current = requestAnimationFrame(oscillate);
      };
      rafIdRef.current = requestAnimationFrame(oscillate);

      // Store for cleanup
      stInstancesRef.current = ScrollTrigger.getAll() as ScrollTriggerInstance[];
    })();

    return () => {
      cancelled = true;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      stInstancesRef.current.forEach((t) => t.kill());
      stInstancesRef.current = [];
    };
  }, [mounted, isMobile, isReducedMotion]);

  /* ── Reduced-motion: instant stage switching ── */
  useEffect(() => {
    if (!mounted || isMobile || !isReducedMotion) return;

    const scrollSpace = scrollSpaceRef.current;
    if (!scrollSpace) return;

    let cancelled = false;

    void (async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      stageCopyRefs.current.forEach((ref, i) => {
        if (ref) ref.style.opacity = i === 0 ? "1" : "0";
      });

      const st = ScrollTrigger.create({
        trigger: scrollSpace,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self: { progress: number }) => {
          const currentStage = deriveStage(self.progress);
          if (currentStage !== stageRef.current) {
            stageRef.current = currentStage;
            setStage(currentStage);
          }
          stageCopyRefs.current.forEach((ref, i) => {
            if (ref) ref.style.opacity = STAGES[i] === currentStage ? "1" : "0";
          });
        },
      });

      stInstancesRef.current = [st as unknown as ScrollTriggerInstance];
    })();

    return () => {
      cancelled = true;
      stInstancesRef.current.forEach((t) => t.kill());
      stInstancesRef.current = [];
    };
  }, [mounted, isMobile, isReducedMotion]);

  /* ── Ref setters ── */
  const setBeforeFragRef = useCallback((i: number) => (el: HTMLDivElement | null) => {
    beforeFragRefs.current[i] = el;
  }, []);

  const setAfterFragRef = useCallback((i: number) => (el: HTMLDivElement | null) => {
    afterFragRefs.current[i] = el;
  }, []);

  const setStageCopyRef = useCallback((i: number) => (el: HTMLParagraphElement | null) => {
    stageCopyRefs.current[i] = el;
  }, []);

  /* ── Build fragment style ── */
  const fragStyle = (frag: FragmentSpec) =>
    ({
      left: frag.leftPct + "%",
      top: frag.topPct + "%",
      width: frag.width + "vw",
      transform: "translate(-50%, -50%) rotate(" + frag.nativeRotation + "deg)",
    }) as React.CSSProperties;

  /* ══════════════════════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════════════════════ */

  if (!mounted) {
    return (
      <div
        className={"hero-transform-scroll" + (className ? " " + className : "")}
        style={{ height: isMobile ? "auto" : "400vh" }}
      />
    );
  }

  return (
    <div className={"hero-transform-scroll" + (className ? " " + className : "")} ref={scrollSpaceRef}>
      {isMobile || isReducedMotion ? (
        /* ── Mobile / Reduced-motion: static stacked panels ── */
        <div className="hero-transform-mobile-panels">
          {/* Builder image */}
          <div className="hero-transform-mobile-panel" style={{ paddingTop: "5rem" }}>
            <Image
              src="/assets/the-builder.webp"
              alt="Nik Velkovski — AI product builder and systems developer"
              width={400}
              height={500}
              priority
              className="hero-transform-mobile-builder"
            />
          </div>

          {/* Hero copy */}
          <div className="hero-transform-mobile-panel" style={{ borderTop: "none", paddingTop: "1rem" }}>
            <div className="text-center" style={{ maxWidth: "400px" }}>
              <p className="eyebrow">Systematic AI product development</p>
              <h1 style={{
                margin: "0.5rem 0",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 8vw, 2.5rem)",
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: "-0.025em",
              }}>
                Software for work that has outgrown spreadsheets
              </h1>
              <p style={{ color: "var(--color-muted)", fontSize: "1rem", lineHeight: 1.5, marginTop: "0.75rem" }}>
                I&apos;m Nik — I build AI systems, autonomous agents, and operational software.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginTop: "1.5rem" }}>
                <Link href="/work" className="cta-primary">
                  See the work <span aria-hidden="true">→</span>
                </Link>
                <Link href="/contact" className="cta-secondary">
                  Describe the problem <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Stage panels */}
          {STAGES.map((s, i) => {
            const showBeforeFrag = i < 2 && BEFORE_FRAGMENT_SVGS[BEFORE_FRAGMENTS[i === 0 ? 0 : 2].id];
            const showAfterFrag = i >= 2 && AFTER_FRAGMENT_SVGS[AFTER_FRAGMENTS[i === 2 ? 1 : 3].id];
            const FragComponent = showBeforeFrag || showAfterFrag;
            return (
              <div key={s} className="hero-transform-mobile-panel">
                {FragComponent && (
                  <div style={{ width: "100%", maxWidth: "340px", opacity: i < 2 ? 0.6 : 0.85 }}>
                    <FragComponent />
                  </div>
                )}
                <p className="hero-transform-mobile-copy">{STAGE_COPY[i]}</p>
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="hero-transform-mobile-panel" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            <Link href="/work" className="cta-primary">
              See the work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      ) : (
        /* ── Desktop: sticky scroll ── */
        <>
          {/* Sticky viewport */}
          <div className="hero-transform-sticky">
            {/* Builder image */}
            <div ref={builderMaskRef} className="hero-transform-builder-mask">
              <Image
                ref={builderRef}
                src="/assets/the-builder.webp"
                alt="Nik Velkovski — AI product builder and systems developer"
                fill
                priority
                className="hero-transform-builder"
                sizes="100vw"
              />
            </div>

            {/* Before fragments */}
            {BEFORE_FRAGMENTS.map((frag, i) => {
              const FragSVG = BEFORE_FRAGMENT_SVGS[frag.id];
              return (
                <div
                  key={frag.id}
                  ref={setBeforeFragRef(i)}
                  className="hero-transform-fragment"
                  style={fragStyle(frag)}
                >
                  {FragSVG && <FragSVG />}
                </div>
              );
            })}

            {/* Chaos arrows */}
            <div ref={chaosArrowsRef} className="hero-transform-layer">
              <ChaosArrowsSVG />
            </div>

            {/* After fragments */}
            {AFTER_FRAGMENTS.map((frag, i) => {
              if (frag.id === "frag-arrows") return null;
              const FragSVG = AFTER_FRAGMENT_SVGS[frag.id];
              if (!FragSVG) return null;
              return (
                <div
                  key={frag.id}
                  ref={setAfterFragRef(i)}
                  className="hero-transform-fragment"
                  style={fragStyle(frag)}
                >
                  <FragSVG />
                </div>
              );
            })}

            {/* Pipeline arrows */}
            <div ref={pipelineArrowsRef} className="hero-transform-layer">
              <PipelineArrowsSVG />
            </div>

            {/* Stage copy */}
            <div className="hero-transform-copy">
              {STAGE_COPY.map((text, i) => (
                <p
                  key={i}
                  ref={setStageCopyRef(i)}
                  className="hero-transform-copy-text"
                  style={{
                    position: i === 0 ? "relative" : "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: i === 0 ? 1 : 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Stage indicator dots */}
            <StageIndicator stage={stage} />

            {/* Stage 4 CTA */}
            {stage === "clarity" && (
              <div
                className="hero-transform-copy"
                style={{ bottom: "clamp(7rem, 14vh, 10rem)", pointerEvents: "auto" }}
              >
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-accent border-b border-accent/40 pb-0.5 hover:border-accent transition-colors"
                  style={{ pointerEvents: "auto" }}
                >
                  See the work <span aria-hidden="true">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Hero copy overlay (fades out after stage 1) */}
          <div
            ref={heroCopyRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              pointerEvents: "none",
              zIndex: 30,
            }}
          >
            <div className="container" style={{ pointerEvents: "auto" }}>
              <div className="home-hero-grid" style={{ minHeight: "auto", paddingTop: 0 }}>
                <div className="home-hero-copy">
                  <p className="eyebrow">Systematic AI product development</p>
                  <h1>Software for work that has outgrown spreadsheets</h1>
                  <p className="section-lede">
                    I&apos;m Nik — I build AI systems, autonomous agents, and operational software.
                    Each system starts by watching real work happen and ends with something that survives
                    contact with the real world.
                  </p>
                  <div className="home-hero-cta">
                    <Link href="/work" className="cta-primary">
                      See the work <span aria-hidden="true">→</span>
                    </Link>
                    <Link href="/contact" className="cta-secondary">
                      Describe the problem <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Types ── */
type ScrollTriggerInstance = {
  progress?: number;
  kill: () => void;
  vars?: { trigger?: Element | null };
  getAll?: () => ScrollTriggerInstance[];
};
