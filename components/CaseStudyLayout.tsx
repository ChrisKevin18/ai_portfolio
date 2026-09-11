"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  UserCheck,
  AlertTriangle,
  Database,
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { DataAuditMatrix } from "@/components/DataAuditMatrix";
import { Reveal } from "@/components/Motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TraceFramework } from "@/components/TraceFramework";
import { getAdjacentProjects, Project } from "@/lib/content";

const medicalNodes = [
  "PATIENT DATA",
  "SYMPTOMS / HISTORY / TESTS",
  "AI DIAGNOSTIC MODEL",
  "PROBABLE DIAGNOSES",
  "CONFIDENCE SCORES",
  "RECOMMENDED NEXT STEPS",
  "CLINICIAN REVIEW",
];

const dataLifecycle = ["COLLECT", "PROCESS", "USE", "SHARE", "CONTROL"];

const atmInputs = [
  "TRANSACTION LOGS",
  "EVENT CALENDARS",
  "WEATHER",
  "CIT RECORDS",
  "ATM LOCATION / DEMOGRAPHICS",
];

const atmNodes = [
  "FEATURE ENGINEERING",
  "DEMAND FORECASTING",
  "OPTIMIZATION ENGINE",
  "REPLENISHMENT AMOUNTS + ROUTES",
  "SCHEDULER",
  "HUMAN REVIEW",
  "DEPLOYMENT",
  "FEEDBACK / RETRAINING",
];

const loanFlow = [
  "AI INGESTION",
  "PRELIMINARY RISK SCORING",
  "DOCUMENT / IDENTITY VERIFICATION",
  "HUMAN REVIEW GATE",
  "BORDERLINE CASES / REJECTIONS",
  "ACCOUNTABLE HUMAN DECISION",
];

const ethicsCards = [
  "FAIRNESS",
  "TRANSPARENCY",
  "HUMAN OVERSIGHT",
  "PRIVACY",
  "SUSTAINABILITY",
  "SAFETY",
];

const sections = [
  { id: "section-1", title: "Problem Statement" },
  { id: "section-2", title: "AI Approach & Architecture" },
  { id: "section-3", title: "Data Sources" },
  { id: "section-4", title: "Ethical Risks" },
  { id: "section-5", title: "Responsible Safeguards" },
  { id: "section-6", title: "Human Oversight Role" },
  { id: "section-7", title: "Key Takeaway" },
];

export function CaseStudyLayout({ project }: { project: Project }) {
  const { previous, next } = getAdjacentProjects(project.slug);
  const [activeSection, setActiveSection] = useState("section-1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Top Header & Breadcrumb */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-xs font-mono text-muted transition hover:border-blue/50 hover:bg-white/[0.05] hover:text-paper focus-ring"
            >
              <ArrowLeft size={14} aria-hidden /> BACK TO CASE STUDIES
            </Link>
            <span className="rounded-full border border-blue/30 bg-blue/10 px-3 py-1 font-mono text-[0.68rem] text-blue">
              CASE {project.number} OF 04
            </span>
          </div>

          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-green">
            {project.category}
          </p>

          <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl md:text-7xl">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="mt-3 font-display text-2xl text-blue sm:text-3xl md:text-4xl">
              {project.subtitle}
            </p>
          )}

          {/* Thesis Highlight Banner */}
          <div className="mt-8 rounded-2xl border border-blue/30 bg-blue/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-blue mb-2">
              <Sparkles size={14} /> Core Thesis & Hypothesis
            </div>
            <p className="text-lg leading-relaxed text-paper sm:text-xl font-display">
              &ldquo;{project.thesis}&rdquo;
            </p>
          </div>
        </Reveal>

        {/* 4 Core Metadata Blocks */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0.04}>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-5 backdrop-blur-xl transition hover:border-line-bright">
              <div className="flex items-center justify-between text-quiet">
                <p className="font-mono text-[0.68rem] font-semibold tracking-wider text-green">
                  DOMAIN
                </p>
                <Globe size={16} />
              </div>
              <p className="mt-3 text-base font-semibold text-paper">{project.domain}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-5 backdrop-blur-xl transition hover:border-line-bright">
              <div className="flex items-center justify-between text-quiet">
                <p className="font-mono text-[0.68rem] font-semibold tracking-wider text-blue">
                  AI ASSISTIVE ROLE
                </p>
                <Cpu size={16} />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{project.aiRole}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-5 backdrop-blur-xl transition hover:border-line-bright">
              <div className="flex items-center justify-between text-quiet">
                <p className="font-mono text-[0.68rem] font-semibold tracking-wider text-green">
                  HUMAN AUTHORITY
                </p>
                <UserCheck size={16} />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{project.humanRole}</p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-2xl border border-line bg-card/70 p-5 backdrop-blur-xl transition hover:border-line-bright">
              <div className="flex items-center justify-between text-quiet">
                <p className="font-mono text-[0.68rem] font-semibold tracking-wider text-amber-300">
                  KEY ETHICAL ISSUES
                </p>
                <AlertTriangle size={16} />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted">{project.ethicalIssues}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main Content Layout with Sticky TOC */}
      <div className="mx-auto grid max-w-7xl gap-12 py-16 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-4">
            <span className="font-mono text-[0.68rem] font-bold uppercase tracking-widest text-quiet">
              Table of Contents
            </span>
            <nav className="space-y-1">
              {sections.map((sec, idx) => {
                const isActive = activeSection === sec.id;
                return (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 text-xs font-mono font-medium transition-all ${
                      isActive
                        ? "bg-blue/15 text-paper border-l-2 border-blue font-semibold shadow-sm"
                        : "text-muted hover:bg-white/[0.02] hover:text-paper"
                    }`}
                  >
                    <span>
                      0{idx + 1}. {sec.title}
                    </span>
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue" />}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Sections Stream */}
        <div className="space-y-24">
          <StudySection number="01" id="section-1" title="Problem Context">
            <div className="rounded-2xl border border-line bg-gradient-to-b from-card/70 to-panel/70 p-6 backdrop-blur-xl md:p-8">
              <p className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
                {project.sections.problem}
              </p>
            </div>
          </StudySection>

          <StudySection number="02" id="section-2" title="AI Approach & Architecture">
            <div className="rounded-2xl border border-line bg-gradient-to-b from-card/70 to-panel/70 p-6 backdrop-blur-xl md:p-8">
              <p className="text-base leading-relaxed text-muted sm:text-lg sm:leading-8 mb-8">
                {project.sections.approach}
              </p>
              <ProjectVisual slug={project.slug} />
            </div>
          </StudySection>

          <StudySection number="03" id="section-3" title="Data Ingestion & Inputs">
            <DataGrid items={project.sections.data} />
          </StudySection>

          <StudySection number="04" id="section-4" title="Ethical Risks & Vulnerabilities">
            <RiskGrid items={project.sections.risks} />
          </StudySection>

          <StudySection number="05" id="section-5" title="Responsible Safeguards">
            <SafeguardGrid items={project.sections.safeguards} />
            {project.slug === "atm-logistics" && <EthicsDashboard />}
          </StudySection>

          <StudySection number="06" id="section-6" title="Human-in-the-Loop Oversight">
            <div className="rounded-2xl border border-green/30 bg-gradient-to-b from-green/[0.06] to-card/70 p-6 backdrop-blur-xl md:p-8">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-green mb-3">
                <UserCheck size={16} /> Human Authority & Accountability
              </div>
              <p className="text-base leading-relaxed text-paper/90 sm:text-lg sm:leading-8">
                {project.sections.humanRole}
              </p>
            </div>
          </StudySection>

          <StudySection number="07" id="section-7" title="Core Ethical Takeaway">
            <div className="rounded-2xl border border-blue/40 bg-gradient-to-br from-card/90 via-panel/80 to-ink p-8 backdrop-blur-xl md:p-12 shadow-blue-glow">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue">
                FINAL SYNTHESIS
              </span>
              <p className="mt-4 font-display text-2xl font-semibold leading-tight text-paper sm:text-3xl md:text-4xl">
                &ldquo;{project.sections.takeaway}&rdquo;
              </p>
            </div>
          </StudySection>
        </div>
      </div>

      {/* Prev / Next Case Studies Navigation */}
      <section className="mx-auto max-w-7xl border-t border-line pt-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Link
            href={`/projects/${previous.slug}`}
            className="group rounded-2xl border border-line bg-card/60 p-6 transition-all duration-300 hover:border-blue/60 hover:bg-white/[0.03] focus-ring"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              ← PREVIOUS CASE STUDY
            </span>
            <p className="mt-2 font-display text-xl font-semibold text-paper group-hover:text-white sm:text-2xl">
              {previous.title}
            </p>
            <p className="mt-1 font-mono text-xs text-quiet">
              {previous.category.split(" / ")[0]}
            </p>
          </Link>

          <Link
            href={`/projects/${next.slug}`}
            className="group rounded-2xl border border-line bg-card/60 p-6 text-right transition-all duration-300 hover:border-blue/60 hover:bg-white/[0.03] focus-ring"
          >
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-muted">
              NEXT CASE STUDY →
            </span>
            <p className="mt-2 font-display text-xl font-semibold text-paper group-hover:text-white sm:text-2xl">
              {next.title}
            </p>
            <p className="mt-1 font-mono text-xs text-quiet">
              {next.category.split(" / ")[0]}
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}

function StudySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <SectionHeader eyebrow={`${number} · CASE STUDY INVESTIGATION`} title={title} />
      <Reveal className="mt-8 space-y-8">{children}</Reveal>
    </section>
  );
}

function DataGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-line bg-card/60 p-4 transition hover:border-line-bright hover:bg-white/[0.03]"
        >
          <Database size={16} className="mt-1 text-blue shrink-0" />
          <span className="text-sm font-medium text-paper/90">{item}</span>
        </div>
      ))}
    </div>
  );
}

function RiskGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-amber-300/30 bg-amber-400/[0.04] p-5 transition hover:border-amber-300/50"
        >
          <AlertTriangle size={18} className="mt-0.5 text-amber-300 shrink-0" />
          <div>
            <span className="font-mono text-[0.65rem] font-semibold tracking-wider text-amber-300 uppercase">
              Identified Risk
            </span>
            <p className="mt-1 text-sm leading-relaxed text-paper/90">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SafeguardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3 rounded-xl border border-green/30 bg-green/[0.04] p-5 transition hover:border-green/50"
        >
          <CheckCircle2 size={18} className="mt-0.5 text-green shrink-0" />
          <div>
            <span className="font-mono text-[0.65rem] font-semibold tracking-wider text-green uppercase">
              Engineered Safeguard
            </span>
            <p className="mt-1 text-sm leading-relaxed text-paper/90">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "medical-diagnosis") return <ArchitectureDiagram nodes={medicalNodes} />;
  if (slug === "data-audit") {
    return (
      <div className="space-y-8">
        <ArchitectureDiagram nodes={dataLifecycle} />
        <DataAuditMatrix />
      </div>
    );
  }
  if (slug === "atm-logistics") return <ArchitectureDiagram nodes={atmNodes} columns={atmInputs} />;
  if (slug === "loan-approval") {
    return (
      <div className="space-y-8">
        <TraceFramework />
        <ArchitectureDiagram nodes={loanFlow} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-green/30 bg-green/[0.06] p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-green">
              <CheckCircle2 size={16} /> AI Automated Assist Boundaries
            </div>
            <ItemList
              items={[
                "Preliminary credit risk scoring and calculation",
                "Automated document classification and consistency checks",
                "Identity verification and fraud database cross-referencing",
                "Transparent pre-set eligibility rule filtering",
              ]}
            />
          </div>
          <div className="rounded-2xl border border-blue/30 bg-blue/[0.06] p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-sm font-mono font-semibold uppercase tracking-wider text-blue">
              <ShieldCheck size={16} /> Human-Only Decision Mandates
            </div>
            <ItemList
              items={[
                "Borderline applicants close to risk thresholds",
                "Final loan rejection and adverse action determination",
                "Periodic disparate impact and fairness audits",
                "Contestation reviews and applicant appeals",
              ]}
            />
          </div>
        </div>
        <div className="rounded-2xl border border-line bg-gradient-to-br from-card/90 to-panel/90 p-8 text-center backdrop-blur-xl">
          <span className="rounded-full border border-green/40 bg-green/10 px-3.5 py-1 font-mono text-xs font-semibold text-green uppercase tracking-widest">
            FINAL VERDICT: PARTIALLY AUTOMATED
          </span>
          <p className="mt-6 font-display text-3xl font-bold leading-tight text-paper sm:text-5xl">
            AI assists. Humans remain accountable.
          </p>
        </div>
      </div>
    );
  }
  return null;
}

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-muted">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-line-bright shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EthicsDashboard() {
  return (
    <div className="mt-8 rounded-2xl border border-line bg-card/60 p-6 backdrop-blur-xl">
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-blue">
        SUSTAINABILITY & ETHICS METRICS DASHBOARD
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ethicsCards.map((card) => (
          <div
            key={card}
            className="flex items-center gap-2 rounded-xl border border-line bg-black/25 p-4 font-mono text-xs font-semibold tracking-wider text-paper"
          >
            <span className="h-2 w-2 rounded-full bg-green" />
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
