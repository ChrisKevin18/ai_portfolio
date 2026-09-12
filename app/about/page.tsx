import { SectionHeader } from "@/components/SectionHeader";
import { SkillsGrid } from "@/components/SkillsGrid";
import { TeamCoordination } from "@/components/TeamCoordination";
import { Reveal } from "@/components/Motion";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Presentation,
  BookOpen,
} from "lucide-react";

const facts = [
  { label: "DEGREE PROGRAM", value: "B.Tech Computer Science & Engineering", icon: GraduationCap },
  { label: "RESEARCH FOCUS", value: "Generative Systems & Epistemic Ethics", icon: ShieldCheck },
  { label: "METHODOLOGY", value: "Empirical Forensics & Decolonial Critique", icon: CheckCircle2 },
  { label: "COHORT / YEAR", value: "Class 5BTCS-B · Year 2026", icon: FileText },
];

export default function AboutPage() {
  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16 pt-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-6">
              RESEARCH COLLECTIVE PROFILE
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
              Chris Kevin A
            </h1>
            <p className="mt-4 font-mono text-sm tracking-wider text-green">
              Computer Science & Engineering · Author ID: 2460349 · Christ University
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              Welcome to the <strong>Veritas // Synthetica Digital Ethics Observatory</strong>, an academic research portfolio independently conducted, developed, and authored by <strong>Chris Kevin A</strong>. This investigation examines the societal impact and governance frontiers of Generative Artificial Intelligence—probing epistemic risk, deepfakes, copyright dispossession, cognitive warfare, and Global North–South labor extraction.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/presentation" className="button-primary group">
                <Presentation size={14} />
                <span>EXECUTIVE BRIEFING (7 MIN)</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/analysis" className="button-secondary">
                <BookOpen size={14} />
                <span>RESEARCH MONOGRAPH</span>
              </Link>
              <Link href="/#investigations" className="rounded-full border border-line px-5 py-2.5 font-mono text-xs text-muted hover:text-paper hover:border-line-bright transition">
                INVESTIGATION DOSSIERS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl shadow-card-glass">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-quiet">
                ACADEMIC PROVENANCE
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-paper">
                Digital Ethics Observatory 2026
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Documenting empirical forensic audits, academic monographs, and collaborative governance frameworks.
              </p>
              <div className="mt-6 space-y-3 border-t border-line/60 pt-4 text-xs font-mono">
                <div className="flex justify-between text-muted">
                  <span>DISCIPLINE:</span>
                  <span className="text-paper">Computer Science & Eng.</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>CLASS:</span>
                  <span className="text-paper">5BTCS-B</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>FRAMEWORKS:</span>
                  <span className="text-paper">C2PA & CARE Principles</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>PEER-REVIEW STATUS:</span>
                  <span className="text-green">Academic Publication Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Strip Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-line bg-card/60 p-5 backdrop-blur-md transition hover:border-blue/40">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[0.65rem] font-semibold tracking-wider text-green">
                      {item.label}
                    </p>
                    <Icon size={16} className="text-quiet" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-paper">{item.value}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Research Divisions & Investigative Pillars */}
      <section className="mx-auto max-w-7xl py-20 border-b border-line">
        <SectionHeader
          eyebrow="RESEARCH ARCHITECTURE & INVESTIGATIVE DIVISIONS"
          title="Investigative Divisions & Research Stewardship"
          copy="Documenting distinct domain leadership, executive briefing timing allocations, and research deliverable contributions directed by Chris Kevin A."
        />
        <div className="mt-12">
          <TeamCoordination />
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="CAPABILITIES & PRACTICES"
          title="Responsible AI Competencies"
          copy="Academic skills expressed through synthetic forensics, labor auditing, pluriversal ethics, and C2PA cryptographic provenance standards."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </section>
    </main>
  );
}
