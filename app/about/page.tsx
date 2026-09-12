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
  { label: "ASSESSMENT", value: "CIA 3 – Component 2 (Unit-5)", icon: ShieldCheck },
  { label: "CORE FOCUS", value: "Generative AI, Truth & Global Order", icon: CheckCircle2 },
  { label: "CLASS / YEAR", value: "Class 5BTCS-B · Year 2026", icon: FileText },
];

export default function AboutPage() {
  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16 pt-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-6">
              ACADEMIC RESEARCH PROFILE & TEAM
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
              Chris Kevin A
            </h1>
            <p className="mt-4 font-mono text-sm tracking-wider text-green">
              Computer Science & Engineering · Reg No: 2460349 · Christ University
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              Welcome to our academic research platform for <strong>CIA 3 – Component 2: Digital Ethics Portfolio Presentation on Generative AI</strong> (covering <em>Unit-5: Generative AI, Truth, Creativity, and Global Ethical Order</em>). Developed collaboratively with research partners <strong>Sandhiya M</strong> and <strong>Karthik R</strong>, this project investigates epistemic risk, deepfakes, creative labor enclosure, algorithmic warfare, and Global North–South asymmetries.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/presentation" className="button-primary group">
                <Presentation size={14} />
                <span>5–7M PRESENTATION</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/analysis" className="button-secondary">
                <BookOpen size={14} />
                <span>3-PAGE ACADEMIC PAPER</span>
              </Link>
              <Link href="/#unit5" className="rounded-full border border-line px-5 py-2.5 font-mono text-xs text-muted hover:text-paper hover:border-line-bright transition">
                UNIT-5 TOPICS
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl shadow-card-glass">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-quiet">
                ACADEMIC AFFILIATION
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-paper">
                CIA 3 Digital Ethics 2026
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Documenting Unit-5 curriculum, empirical forensic audits, academic paper analysis, and collaborative presentation.
              </p>
              <div className="mt-6 space-y-3 border-t border-line/60 pt-4 text-xs font-mono">
                <div className="flex justify-between text-muted">
                  <span>UNIT:</span>
                  <span className="text-paper">Unit-5 (Generative AI)</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>CLASS:</span>
                  <span className="text-paper">5BTCS-B</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>DISCIPLINE:</span>
                  <span className="text-paper">CSE</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>RUBRIC SCORE TARGET:</span>
                  <span className="text-green">20 / 20 Marks (100%)</span>
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

      {/* Team Coordination & Equal Participation (Rubric 5) */}
      <section className="mx-auto max-w-7xl py-20 border-b border-line">
        <SectionHeader
          eyebrow="RUBRIC 5: TEAM COORDINATION"
          title="Collaborative Research & Presentation Matrix"
          copy="Demonstrating 100% equal contribution across the three student researchers, with distinct topic ownership and speaking slots."
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
