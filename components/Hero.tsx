"use client";

import { ArrowRight, Sparkles, Shield, Cpu, Scale, FileText } from "lucide-react";
import Link from "next/link";
import { MotionDiv, MotionSpan } from "@/components/Motion";

const words = [
  { label: "ETHICAL AI DESIGN", icon: Scale },
  { label: "DATA GOVERNANCE", icon: Shield },
  { label: "HUMAN OVERSIGHT", icon: Cpu },
  { label: "TRACE FRAMEWORK", icon: FileText },
];

const metrics = [
  { number: "04", label: "CASE STUDIES", detail: "Healthcare, Platforms, Logistics, Lending" },
  { number: "07", label: "ETHICAL PRINCIPLES", detail: "Fairness, Privacy, Safety, Accountability & more" },
  { number: "TRACE", label: "DECISION TEST", detail: "Task, Risk, Authority, Contestability, Evidence" },
  { number: "100%", label: "HUMAN OVERSIGHT", detail: "Never unmonitored automated execution" },
];

const headline = ["Designing Intelligent", "Systems That Remain", "Accountable to People."];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-20">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(79,140,255,0.15),transparent_42%),radial-gradient(circle_at_85%_55%,rgba(85,214,190,0.09),transparent_40%)]" />

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
            ACADEMIC RESEARCH PORTFOLIO
          </span>
          <span className="pill-badge text-quiet">
            COMPUTER SCIENCE & ENGINEERING · 2026
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
                    Systems <span className="italic bg-gradient-to-r from-paper via-blue/90 to-green bg-clip-text text-transparent">That Remain</span>
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
              An academic portfolio by <strong className="font-semibold text-paper">Chris Kevin A</strong> examining clinical diagnostics, data power audits, logistical fairness, and autonomous credit limits through practical Responsible AI frameworks.
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
              className="flex flex-wrap items-center gap-3 sm:flex-nowrap"
            >
              <Link href="/#work" className="button-primary group">
                EXPLORE WORK <ArrowRight className="transition duration-200 group-hover:translate-x-1" size={15} aria-hidden />
              </Link>
              <Link href="/framework" className="button-secondary">
                VIEW FRAMEWORK
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
            <span className="text-muted/60">CORE FOCUS:</span>
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

