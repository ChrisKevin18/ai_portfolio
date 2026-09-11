"use client";

import { ArrowRight, HeartPulse, Database, Banknote, Scale, ShieldCheck, UserCheck } from "lucide-react";
import Link from "next/link";
import { MotionDiv } from "@/components/Motion";
import type { Project } from "@/lib/content";

const domainIcons: Record<string, typeof HeartPulse> = {
  "medical-diagnosis": HeartPulse,
  "data-audit": Database,
  "atm-logistics": Banknote,
  "loan-approval": Scale,
};

export function ProjectCard({ project }: { project: Project }) {
  const Icon = domainIcons[project.slug] || ShieldCheck;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue/50 hover:shadow-card-glass md:p-10"
    >
      {/* Top ambient highlight gradient */}
      <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue via-green to-cyan transition-all duration-500 group-hover:w-full" />

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Left Column: Number & Domain Meta */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-blue transition duration-300 group-hover:border-blue/40 group-hover:bg-blue/10">
              <Icon size={20} />
            </span>
            <div>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-quiet">
                CASE {project.number} / 04
              </span>
              <p className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-green">
                {project.domain}
              </p>
            </div>
          </div>

          <div className="mt-6 hidden lg:block">
            <span className="font-mono text-7xl font-bold tracking-tighter text-white/[0.06] transition duration-300 group-hover:text-blue/20">
              {project.number}
            </span>
          </div>
        </div>

        {/* Middle Column: Title, Subtitle, Description, Thesis */}
        <div className="lg:col-span-6">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl lg:text-4xl transition-colors group-hover:text-white">
            {project.title}
          </h3>
          {project.subtitle && (
            <p className="mt-1.5 font-display text-lg text-blue/90 sm:text-xl">
              {project.subtitle}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          {/* Thesis Callout */}
          <div className="mt-5 rounded-xl border border-line/60 bg-white/[0.02] p-4 text-xs leading-relaxed text-paper/85">
            <strong className="font-mono uppercase tracking-wider text-blue mr-1">Thesis:</strong>
            &ldquo;{project.thesis}&rdquo;
          </div>

          {/* AI vs Human Role Quick Strip */}
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs">
            <div className="flex items-start gap-2 rounded-lg border border-line/50 bg-black/20 p-2.5">
              <ShieldCheck size={15} className="mt-0.5 text-blue shrink-0" />
              <div>
                <span className="font-mono font-semibold text-blue">AI ROLE: </span>
                <span className="text-muted">{project.aiRole.slice(0, 75)}...</span>
              </div>
            </div>
            <div className="flex items-start gap-2 rounded-lg border border-line/50 bg-black/20 p-2.5">
              <UserCheck size={15} className="mt-0.5 text-green shrink-0" />
              <div>
                <span className="font-mono font-semibold text-green">HUMAN ROLE: </span>
                <span className="text-muted">{project.humanRole.slice(0, 75)}...</span>
              </div>
            </div>
          </div>

          {/* Principles Badges */}
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.principles.map((principle) => (
              <span
                key={principle}
                className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[0.62rem] font-medium tracking-wider text-quiet"
              >
                {principle}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: CTA */}
        <div className="flex flex-col justify-between lg:col-span-3 lg:items-end lg:h-full lg:text-right">
          <div className="hidden lg:block">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] text-muted">
              Full Case Analysis
            </span>
          </div>

          <div className="pt-4 lg:pt-0">
            <Link
              href={`/projects/${project.slug}`}
              className="button-primary group/btn w-full justify-center sm:w-auto"
            >
              <span>READ CASE STUDY</span>
              <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

