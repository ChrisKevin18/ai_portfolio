"use client";

import { ArrowRight, Sparkles, ShieldAlert, Cpu, Scale, Presentation, BookOpen, Globe } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSpan } from "@/components/Motion";

const words = [
  { label: "SYNTHETIC REALITY", icon: EyeIcon },
  { label: "EPISTEMIC RISK", icon: ShieldAlert },
  { label: "INTELLECTUAL LABOR", icon: Scale },
  { label: "GLOBAL SOUTH GHOST WORK", icon: Globe },
  { label: "PLURIVERSAL GOVERNANCE", icon: Cpu },
];

function EyeIcon(props: { size: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

const metrics = [
  { number: "09", label: "INVESTIGATIVE DOSSIERS", detail: "Epistemic breakdown, labor enclosure, cyber-warfare & pluriversal ethics" },
  { number: "C2PA", label: "PROVENANCE FORENSICS", detail: "Hardware cryptographic signing & deepfake residual analysis" },
  { number: "1,200h", label: "GHOST WORK AUDITED", detail: "Empirical investigation into Nairobi and Manila data annotator trauma" },
  { number: "3-PAGE", label: "RESEARCH MONOGRAPH", detail: "Scholarly publication on synthetic reality and structural governance" },
];

const headline = ["When Reality Becomes", "Synthesized, Who Governs", "The Truth?"];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(79,140,255,0.18),transparent_44%),radial-gradient(circle_at_85%_55%,rgba(85,214,190,0.10),transparent_42%)]" />

      {/* Decorative ambient grid overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />

      <div className="container-wide relative z-10">
        {/* Top Eyebrow Badges */}
        <MotionDiv
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <span className="pill-badge border-blue/30 bg-blue/10 text-blue">
            <Sparkles size={12} className="animate-pulse" />
            DIGITAL ETHICS OBSERVATORY · 2026
          </span>
          <span className="pill-badge border-green/30 bg-green/10 text-green">
            TRUTH, CREATIVITY & THE GLOBAL ETHICAL ORDER
          </span>
        </MotionDiv>

        {/* Main Headline */}
        <div className="max-w-6xl">
          <h1 className="font-display text-[clamp(2.75rem,7vw,5.75rem)] font-semibold leading-[0.93] tracking-[-0.05em] text-paper">
            {headline.map((line, index) => (
              <MotionSpan
                key={line}
                className="block"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
              >
                {index === 1 ? (
                  <>
                    Synthesized, <span className="italic bg-gradient-to-r from-paper via-blue/90 to-green bg-clip-text text-transparent">Who Governs</span>
                  </>
                ) : (
                  line
                )}
              </MotionSpan>
            ))}
          </h1>

          {/* Subtitle and Action Buttons */}
          <div className="mt-10 grid gap-8 border-t border-line/80 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <MotionDiv
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="max-w-2xl text-lg leading-relaxed text-muted md:text-[1.125rem]"
            >
              An investigative research initiative authored and conducted by <strong className="font-semibold text-paper">Chris Kevin A</strong> interrogating the collapse of sensory evidence, intellectual labor enclosure, algorithmic warfare, and Global North–South asymmetries in Generative AI.
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Link href="/presentation" className="button-primary group">
                <Presentation size={15} />
                <span>BRIEFING ROOM (7 MIN)</span>
                <ArrowRight className="transition duration-200 group-hover:translate-x-1" size={15} aria-hidden />
              </Link>
              <Link href="/analysis" className="button-secondary">
                <BookOpen size={14} />
                <span>READ RESEARCH MONOGRAPH</span>
              </Link>
              <Link href="/#investigations" className="rounded-full border border-line bg-white/[0.02] px-5 py-3 font-mono text-[0.72rem] font-semibold text-muted hover:text-paper hover:border-line-bright transition">
                9 INVESTIGATIONS
              </Link>
            </MotionDiv>
          </div>

          {/* Portfolio Metrics Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.52 }}
            className="mt-14 grid grid-cols-2 gap-4 rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-xl sm:grid-cols-4 lg:p-8"
          >
            {metrics.map((item) => (
              <div key={item.label} className="group flex flex-col justify-between border-l border-line/70 pl-4 transition-colors hover:border-blue/60 first:border-l-0 sm:first:border-l-0">
                <div>
                  <span className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl text-gradient">
                    {item.number}
                  </span>
                  <p className="mt-1 font-mono text-[0.68rem] font-semibold tracking-[0.18em] text-blue">
                    {item.label}
                  </p>
                </div>
                <p className="mt-2 text-xs leading-5 text-quiet">
                  {item.detail}
                </p>
              </div>
            ))}
          </MotionDiv>

          {/* Domain Badges */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[0.68rem] font-medium tracking-[0.16em] text-quiet"
          >
            <span className="text-muted/60">CORE THEMES:</span>
            {words.map((item) => {
              const Icon = item.icon;
              return (
                <span key={item.label} className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
                  <Icon size={13} className="text-blue/80" />
                  {item.label}
                </span>
              );
            })}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
