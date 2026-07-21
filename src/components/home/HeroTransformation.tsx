"use client";

import { useEffect, useRef, useSyncExternalStore, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Stage data ── */
interface StageData {
  kicker: string;
  headline: string;
  desc: string;
  cta?: { label: string; href: string };
}

const STAGES: StageData[] = [
  {
    kicker: "The Problem",
    headline: "Work that has outgrown spreadsheets",
    desc: "Operational friction scattered across disconnected systems",
  },
  {
    kicker: "Recognition",
    headline: "Scattered across emails, documents, chats",
    desc: "The system begins to see the structure beneath the chaos",
  },
  {
    kicker: "Orchestration",
    headline: "Connected by AI. Data flows where it should.",
    desc: "Worker and judge agents route, verify, and repair — autonomously",
  },
  {
    kicker: "Operational Clarity",
    headline: "Automated. Accurate. Always current.",
    desc: "Human oversight where it matters. Machines where they excel.",
    cta: { label: "See the work", href: "/work" },
  },
];

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

/* ══════════════════════════════════════════════════════════════
   SVG Fragment components
   ══════════════════════════════════════════════════════════════ */

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

function ChaosArrowsSVG() {
  return (
    <svg viewBox="0 0 600 600" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", inset: 0 }}>
      <path d="M200,130 C230,150 250,120 290,120" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M150,300 C180,380 150,400 90,400" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M250,410 C330,380 380,300 420,200" fill="none" stroke="#555" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
      <path d="M350,250 C320,350 400,450 300,460" fill="none" stroke="#555" strokeWidth="1" strokeDasharray="3,5" opacity="0.3" />
    </svg>
  );
}

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

/* ══════════════════════════════════════════════════════════════
   Stage Layer — one per stage
   ══════════════════════════════════════════════════════════════ */

interface StageLayerProps {
  stage: number;
  data: StageData;
  progress: number;
  currentStage: number;
}

function StageLayer({ stage, data, progress, currentStage }: StageLayerProps) {
  const isCurrent = stage === currentStage;
  const N = STAGES.length;

  const stageStart = stage / N;
  const stageEnd = (stage + 1) / N;
  const fadeZone = 0.03;

  let opacity = 0;
  if (progress >= stageStart - fadeZone && progress <= stageEnd + fadeZone) {
    if (progress < stageStart) {
      opacity = (progress - (stageStart - fadeZone)) / fadeZone;
    } else if (progress > stageEnd) {
      opacity = 1 - (progress - stageEnd) / fadeZone;
    } else {
      opacity = 1;
    }
  }
  opacity = clamp01(opacity);

  const showBeforeFrags = stage === 1;
  const showAfterFrags = stage === 2;

  return (
    <div
      className="hero-scroll-stage-layer"
      data-stage={stage}
      data-active={isCurrent ? "true" : "false"}
      style={{ opacity }}
    >
      <div
        className="hero-scroll-builder-wrap"
        style={{
          filter: stage >= 3 ? "blur(4px) brightness(0.5)" : stage >= 2 ? "blur(1px) brightness(0.8)" : "none",
        }}
      >
        <Image
          src={`/assets/hero-stage-${stage + 1}.webp`}
          alt="Nik Velkovski — AI product builder and systems developer"
          fill
          priority={stage === 0}
          className="hero-scroll-builder-img"
          sizes="100vw"
        />
      </div>

      {showBeforeFrags && (
        <div className="hero-scroll-overlay" style={{ opacity: clamp01((progress - 0.25) / 0.08) }}>
          <ChaosArrowsSVG />
          <div className="hero-scroll-fragments">
            <div className="hero-scroll-frag" style={{ left: "6.7%", top: "11.7%", width: "22vw", transform: "translate(-50%,-50%) rotate(-8deg)" }}>
              <SpreadsheetFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "9.2%", top: "38.3%", width: "15vw", transform: "translate(-50%,-50%) rotate(12deg)" }}>
              <DocumentFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "52%", top: "10%", width: "28vw", transform: "translate(-50%,-50%) rotate(5deg)" }}>
              <EmailFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "10%", top: "62%", width: "24vw", transform: "translate(-50%,-50%) rotate(-15deg)" }}>
              <ChatFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "47%", top: "58%", width: "12vw", transform: "translate(-50%,-50%) rotate(-22deg)" }}>
              <CardFragment />
            </div>
          </div>
        </div>
      )}

      {showAfterFrags && (
        <div className="hero-scroll-overlay" style={{ opacity: clamp01((progress - 0.50) / 0.08) }}>
          <div className="hero-scroll-fragments">
            <div className="hero-scroll-frag" style={{ left: "10%", top: "20%", width: "18vw" }}>
              <DataSourceFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "38%", top: "20%", width: "18vw" }}>
              <ProcessingFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "10%", top: "42%", width: "18vw" }}>
              <OutputFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "38%", top: "42%", width: "18vw" }}>
              <DashboardFragment />
            </div>
            <div className="hero-scroll-frag" style={{ left: "10%", top: "64%", width: "44vw" }}>
              <BannerFragment />
            </div>
          </div>
        </div>
      )}

      <div className="hero-scroll-gradient" />

      <div className="hero-scroll-copy" style={{ opacity: isCurrent ? 1 : 0 }}>
        <span className="hero-scroll-kicker">{data.kicker}</span>
        <h2 className="hero-scroll-headline">{data.headline}</h2>
        <p className="hero-scroll-desc">{data.desc}</p>
        {data.cta && (
          <Link href={data.cta.href} className="hero-scroll-cta">
            {data.cta.label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   Main Component
   ══════════════════════════════════════════════════════════════ */

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function HeroTransformation() {
  const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
  const [isMobile, setIsMobile] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const tickingRef = useRef(false);
  const rafRef = useRef<number | null>(null);

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

  /* ── rAF scroll tracking (desktop, non-reduced) ── */
  useEffect(() => {
    if (!mounted || isMobile || isReducedMotion) return;

    const section = sectionRef.current;
    if (!section) return;

    const N = STAGES.length;

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      rafRef.current = requestAnimationFrame(() => {
        tickingRef.current = false;

        const rect = section.getBoundingClientRect();
        const p = clamp01(-rect.top / (rect.height - window.innerHeight));
        const stage = Math.min(Math.floor(p * N), N - 1);

        setProgress(p);
        setCurrentStage(stage);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mounted, isMobile, isReducedMotion]);

  if (!mounted) {
    return <div className="hero-scroll-section" />;
  }

  /* ── Mobile: static first stage ── */
  if (isMobile) {
    const s0 = STAGES[0];
    return (
      <section className="hero-scroll-section-mobile">
        <div className="hero-scroll-mobile-image">
          <Image
            src="/assets/hero-stage-1.webp"
            alt="Nik Velkovski — AI product builder and systems developer"
            fill
            priority
            className="hero-scroll-builder-img"
            sizes="100vw"
          />
        </div>
        <div className="hero-scroll-mobile-copy">
          <span className="hero-scroll-kicker">{s0.kicker}</span>
          <h2 className="hero-scroll-headline">{s0.headline}</h2>
          <p className="hero-scroll-desc">{s0.desc}</p>
          <Link href="/work" className="hero-scroll-cta">
            See the work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    );
  }

  /* ── Reduced-motion: static stage 0 ── */
  if (isReducedMotion) {
    const s0 = STAGES[0];
    return (
      <section className="hero-scroll-section" ref={sectionRef}>
        <div className="hero-scroll-sticky">
          <div className="hero-scroll-stage-layer" data-stage={0} data-active="true" style={{ opacity: 1 }}>
            <div className="hero-scroll-builder-wrap" style={{ transform: "scale(1)" }}>
              <Image
                src="/assets/hero-stage-1.webp"
                alt="Nik Velkovski — AI product builder and systems developer"
                fill
                priority
                className="hero-scroll-builder-img"
                sizes="100vw"
              />
            </div>
            <div className="hero-scroll-gradient" />
            <div className="hero-scroll-copy" style={{ opacity: 1 }}>
              <span className="hero-scroll-kicker">{s0.kicker}</span>
              <h2 className="hero-scroll-headline">{s0.headline}</h2>
              <p className="hero-scroll-desc">{s0.desc}</p>
            </div>
          </div>
          <div className="hero-scroll-progress">
            <i className="hero-scroll-progress-fill" style={{ transform: "scaleX(1)" }} />
          </div>
          <div className="hero-scroll-rail">
            {STAGES.map((_, i) => (
              <div key={i} className={`hero-scroll-rail-dot${i === 0 ? " is-active" : ""}`}>
                {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ── Desktop: full scroll-triggered stage reveal ── */
  return (
    <section className="hero-scroll-section" ref={sectionRef}>
      <div className="hero-scroll-sticky">
        {STAGES.map((data, i) => (
          <StageLayer
            key={i}
            stage={i}
            data={data}
            progress={progress}
            currentStage={currentStage}
          />
        ))}

        <div className="hero-scroll-progress">
          <i
            className="hero-scroll-progress-fill"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div className="hero-scroll-rail">
          {STAGES.map((_, i) => (
            <div
              key={i}
              className={`hero-scroll-rail-dot${i === currentStage ? " is-active" : ""}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
