"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, CheckCircle2, Sparkles } from "lucide-react";
import { frameworkPrinciples, principleIcons, projects } from "@/lib/content";

const principleDetails: Record<
  (typeof frameworkPrinciples)[number],
  {
    definition: string;
    auditQuestion: string;
    safeguardStrategy: string;
  }
> = {
  FAIRNESS: {
    definition: "Systems must prevent disparate treatment and disparate impact across vulnerable or protected groups.",
    auditQuestion: "Does the model penalize under-represented populations or lower-income ATM locations?",
    safeguardStrategy: "Diversified training cohorts, bias audits, and minimum service-level guarantees.",
  },
  PRIVACY: {
    definition: "Data minimization, purposeful processing, consent transparency, and protection against surveillance.",
    auditQuestion: "Is personal location, health, or financial telemetry aggregated and restricted to necessary use?",
    safeguardStrategy: "Anonymized transaction logs, zero unnecessary third-party telemetry, explicit user consent.",
  },
  TRANSPARENCY: {
    definition: "Stakeholders must clearly understand how inputs are weighed, limitations, and confidence levels.",
    auditQuestion: "Can clinicians or applicants inspect why a diagnosis or loan outcome was ranked or flagged?",
    safeguardStrategy: "Transparent model factsheets, calibrated confidence scores, key-factor explanations.",
  },
  ACCOUNTABILITY: {
    definition: "A named human institution or designated compliance authority remains legally and ethically answerable.",
    auditQuestion: "Who takes responsibility when an automated forecast or diagnosis is wrong or disputed?",
    safeguardStrategy: "Compliance officer stop-work authority, documented change logs, and liability frameworks.",
  },
  SAFETY: {
    definition: "Robust, validated outputs that fail gracefully and protect human well-being in critical domains.",
    auditQuestion: "Has the clinical diagnostic model undergone multi-stage prospective validation before live support?",
    safeguardStrategy: "Red-teaming, clinical validation gates, confidence thresholds, and fail-safe fallbacks.",
  },
  "HUMAN OVERSIGHT": {
    definition: "Autonomous processes must preserve the ability for qualified people to review, override, and intervene.",
    auditQuestion: "Can logistics operators override replenishment schedules or clinicians dismiss diagnostic ranks?",
    safeguardStrategy: "Mandatory human-in-the-loop review on borderline cases, manual override consoles.",
  },
  SUSTAINABILITY: {
    definition: "Optimizing AI efficiency to reduce carbon emissions, unnecessary logistical transit, and resource waste.",
    auditQuestion: "Does route optimization materially reduce Cash-in-Transit (CIT) fuel emissions and vehicle trips?",
    safeguardStrategy: "Multi-objective optimization prioritizing fuel savings and balanced vehicle routing.",
  },
};

export function ResponsibleAIFramework() {
  const [active, setActive] = useState<(typeof frameworkPrinciples)[number]>("FAIRNESS");
  const activeProjects = projects.filter((project) => project.principles.includes(active));
  const details = principleDetails[active];
  const ActiveIcon = principleIcons[active];

  return (
    <div className="mx-auto max-w-7xl">
      {/* Mobile / Tablet Horizontal Selector */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {frameworkPrinciples.map((principle) => {
          const Icon = principleIcons[principle];
          const isActive = active === principle;
          return (
            <button
              key={principle}
              type="button"
              onClick={() => setActive(principle)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs font-semibold tracking-wider transition-all ${
                isActive
                  ? "border-blue bg-blue/20 text-paper shadow-blue-glow"
                  : "border-line bg-card/60 text-muted hover:border-line-bright hover:text-paper"
              }`}
            >
              <Icon size={14} className={isActive ? "text-blue" : "text-muted"} />
              {principle}
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Desktop Orbital Interactive Ring */}
        <div className="relative hidden min-h-[580px] rounded-2xl border border-line bg-gradient-to-b from-card/90 via-panel/80 to-ink p-8 backdrop-blur-2xl shadow-card-glass lg:col-span-6 lg:flex lg:items-center lg:justify-center">
          {/* Ambient Glow Circles */}
          <div className="absolute h-80 w-80 rounded-full border border-blue/15 animate-[spin_60s_linear_infinite]" />
          <div className="absolute h-96 w-96 rounded-full border border-dashed border-white/[0.06]" />
          <div className="absolute h-[460px] w-[460px] rounded-full border border-white/[0.03]" />

          {/* Center Hub */}
          <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-blue/50 bg-gradient-to-br from-blue/20 via-panel to-ink text-center shadow-glow">
            <Sparkles size={18} className="mb-1 text-blue animate-pulse" />
            <span className="font-display text-lg font-bold tracking-wider text-paper">
              RESPONSIBLE
            </span>
            <span className="font-display text-sm tracking-widest text-blue">
              AI ENGINE
            </span>
            <span className="mt-1 font-mono text-[0.62rem] text-quiet">
              7 Safeguards
            </span>
          </div>

          {/* Orbiting Principles */}
          {frameworkPrinciples.map((principle, index) => {
            const angle = (index / frameworkPrinciples.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(angle) * 38;
            const y = 50 + Math.sin(angle) * 38;
            const Icon = principleIcons[principle];
            const isSelected = active === principle;

            return (
              <button
                key={principle}
                type="button"
                onClick={() => setActive(principle)}
                onMouseEnter={() => setActive(principle)}
                className={`group absolute z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border px-4 py-2.5 font-mono text-xs font-semibold tracking-wider transition-all duration-300 focus-ring ${
                  isSelected
                    ? "scale-105 border-blue bg-blue/25 text-paper shadow-[0_0_24px_rgba(79,140,255,0.5)]"
                    : "border-line bg-card/90 text-muted hover:border-green/60 hover:text-paper hover:bg-white/[0.05]"
                }`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <Icon size={15} className={isSelected ? "text-blue" : "text-quiet group-hover:text-green"} />
                <span>{principle}</span>
              </button>
            );
          })}
        </div>

        {/* Details & Case Applications Card */}
        <aside className="flex flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-2xl shadow-card-glass md:p-8 lg:col-span-6">
          <div>
            <div className="flex items-center justify-between border-b border-line/60 pb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue/40 bg-blue/10 text-blue">
                  <ActiveIcon size={18} />
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue">
                  ACTIVE PRINCIPLE
                </span>
              </div>
              <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 font-mono text-[0.68rem] text-green">
                CORE SAFEGUARD
              </span>
            </div>

            <h3 className="mt-5 font-display text-3xl font-bold tracking-tight text-paper md:text-4xl">
              {active}
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted">
              {details.definition}
            </p>

            {/* Audit & Mitigation Box */}
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-line/60 bg-black/30 p-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-amber-300">
                  <ShieldAlert size={14} />
                  Governance Audit Question
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  &ldquo;{details.auditQuestion}&rdquo;
                </p>
              </div>

              <div className="rounded-xl border border-line/60 bg-black/30 p-4">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-green">
                  <CheckCircle2 size={14} />
                  Practical Safeguard Strategy
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {details.safeguardStrategy}
                </p>
              </div>
            </div>
          </div>

          {/* Demonstrated In Case Studies */}
          <div className="mt-8 border-t border-line/60 pt-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-quiet">
              Demonstrated In Case Studies ({activeProjects.length})
            </p>
            <div className="mt-3 space-y-2">
              {activeProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-line bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-blue/50 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-blue">
                      {project.number}
                    </span>
                    <span className="font-medium text-sm text-paper group-hover:text-white">
                      {project.title}
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue"
                  />
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

