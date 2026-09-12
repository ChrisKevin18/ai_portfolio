import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Presentation,
  BookOpen,
  Eye,
  FileCheck,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { Unit5Grid } from "@/components/Unit5Grid";
import { DeepfakeInspector } from "@/components/DeepfakeInspector";
import { GlobalAsymmetryLedger } from "@/components/GlobalAsymmetryLedger";
import { GenAILab } from "@/components/GenAILab";
import { AwarenessGallery } from "@/components/AwarenessGallery";
import { GenAIGuidelines } from "@/components/GenAIGuidelines";
import { TeamCoordination } from "@/components/TeamCoordination";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Deliverable Quick-Launch Command Strip */}
      <section className="container-wide -mt-6 mb-16 relative z-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl border border-line bg-card/80 p-4 backdrop-blur-2xl shadow-card-glass">
          <Link
            href="/presentation"
            className="group flex items-center justify-between rounded-2xl border border-blue/40 bg-blue/10 p-4 transition-all hover:bg-blue/20 hover:border-blue hover:shadow-blue-glow"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue/20 text-blue group-hover:scale-105 transition-transform">
                <Presentation size={20} />
              </span>
              <div>
                <span className="font-mono text-[0.65rem] font-bold text-blue block">
                  DELIVERABLE 03
                </span>
                <span className="font-display text-sm font-bold text-paper">
                  5–7m Presentation
                </span>
              </div>
            </div>
            <ArrowRight size={15} className="text-blue transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/analysis"
            className="group flex items-center justify-between rounded-2xl border border-green/40 bg-green/10 p-4 transition-all hover:bg-green/20 hover:border-green hover:shadow-green-glow"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green/20 text-green group-hover:scale-105 transition-transform">
                <BookOpen size={20} />
              </span>
              <div>
                <span className="font-mono text-[0.65rem] font-bold text-green block">
                  DELIVERABLE 02
                </span>
                <span className="font-display text-sm font-bold text-paper">
                  3-Page Ethical Paper
                </span>
              </div>
            </div>
            <ArrowRight size={15} className="text-green transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="#forensics"
            className="group flex items-center justify-between rounded-2xl border border-line bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-line-bright"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-purple-300 group-hover:scale-105 transition-transform">
                <Eye size={20} />
              </span>
              <div>
                <span className="font-mono text-[0.65rem] font-bold text-quiet block">
                  INTERACTIVE ARTIFACT
                </span>
                <span className="font-display text-sm font-bold text-paper">
                  Deepfake Inspector
                </span>
              </div>
            </div>
            <ArrowRight size={15} className="text-muted transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#posters"
            className="group flex items-center justify-between rounded-2xl border border-line bg-white/[0.02] p-4 transition-all hover:bg-white/[0.05] hover:border-line-bright"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] text-amber-300 group-hover:scale-105 transition-transform">
                <FileCheck size={20} />
              </span>
              <div>
                <span className="font-mono text-[0.65rem] font-bold text-quiet block">
                  AWARENESS ARTIFACT
                </span>
                <span className="font-display text-sm font-bold text-paper">
                  Poster Gallery (04)
                </span>
              </div>
            </div>
            <ArrowRight size={15} className="text-muted transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* SECTION 1: UNIT-5 COMPREHENSIVE CURRICULUM TOPICS */}
      <section id="unit5" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="UNIT-5 COMPREHENSIVE CURRICULUM"
          title="Truth, Creativity, and the Global Ethical Order"
          copy="Nine in-depth academic investigations analyzing epistemic vulnerability, intellectual labor enclosure, cognitive warfare, and non-Western pluriversal governance."
        />
        <div className="mt-12">
          <Unit5Grid />
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE FORENSIC LABORATORY */}
      <section id="forensics" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="INTERACTIVE FORENSIC TOOL"
          title="Epistemic Forensics & C2PA Provenance Lineage"
          copy="Evaluating perceptual deception, spectral noise residuals, and cryptographic hardware signatures to counter the 'Liar's Dividend'."
        />
        <div className="mt-12">
          <DeepfakeInspector />
        </div>
      </section>

      {/* SECTION 3: GLOBAL NORTH-SOUTH ASYMMETRY LEDGER */}
      <section id="asymmetry" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="POLITICAL ECONOMY & GLOBAL JUSTICE"
          title="The Invisible Human Cost Behind Foundation Models"
          copy="Contrasting Silicon Valley's multi-trillion market valuations with the $1.50/hr psychological trauma of Kenyan annotators and regional freshwater depletion."
        />
        <div className="mt-12">
          <GlobalAsymmetryLedger />
        </div>
      </section>

      {/* SECTION 4: RESPONSIBLE AI TOOL USAGE & PROMPT AUTOPSIES */}
      <section id="lab" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="RESPONSIBLE AI TOOL PRACTICE"
          title="Prompt Experiments & Ethical Autopsies"
          copy="Fulfilling Rubric Criterion 4: Rigorously testing model hallucinations, representational harms, and responsible prompt mitigations with verifiable provenance."
        />
        <div className="mt-12">
          <GenAILab />
        </div>
      </section>

      {/* SECTION 5: AWARENESS MATERIALS & POSTERS */}
      <section id="posters" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="PUBLIC CIVIC EDUCATION"
          title="Visual Awareness Posters & Infographics"
          copy="Four high-impact awareness campaigns translating complex algorithmic crises into clear public literacy imperatives."
        />
        <div className="mt-12">
          <AwarenessGallery />
        </div>
      </section>

      {/* SECTION 6: RESPONSIBLE GENERATIVE AI MANIFESTO */}
      <section className="container-wide py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="ACTIONABLE GOVERNANCE"
          title="The 5-Pillar Responsible GenAI Manifesto"
          copy="Mandating provenance, likeness consent, labor equity, cultural pluralism, and human decisional sovereignty."
        />
        <div className="mt-12">
          <GenAIGuidelines />
        </div>
      </section>

      {/* SECTION 7: TEAM COORDINATION & EQUAL PARTICIPATION MATRIX */}
      <section id="team" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="RUBRIC 5: TEAM COORDINATION"
          title="Mandatory Equal Participation Ledger"
          copy="Documenting distinct individual topic ownership, presentation timing allocations, and research deliverable contributions across all team members."
        />
        <div className="mt-12">
          <TeamCoordination />
        </div>
      </section>

      {/* CALLOUT BANNER: 3-PAGE PAPER & 5-7M DECK */}
      <section className="container-wide py-12">
        <div className="relative overflow-hidden rounded-3xl border border-blue/40 bg-gradient-to-r from-card via-panel to-ink p-8 backdrop-blur-2xl md:p-14 shadow-card-glass">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-4">
                <Sparkles size={12} className="animate-pulse" />
                ACADEMIC DELIVERABLES READY FOR EVALUATION
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl">
                Inspect the Paper & Presentation Deck
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Access the formal 2–3 page academic ethical analysis paper with scholarly citations, or launch the interactive 5–7 minute presenter deck equipped with synchronized live timer and speaker notes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:col-span-4 lg:justify-end">
              <Link href="/presentation" className="button-primary group">
                LAUNCH 5-7M DECK <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/analysis" className="button-secondary">
                VIEW 3-PAGE PAPER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOUNDATIONAL RESEARCH ARCHIVE (Predictive AI) */}
      <section id="archive" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="FOUNDATIONAL RESEARCH ARCHIVE"
          title="From Predictive Systems to Generative Frontiers"
          copy="Our earlier algorithmic investigations into clinical diagnostics, platform surveillance audits (Rapido), cash logistics equity, and TRACE lending decision boundaries."
        />
        <div className="mt-12">
          <ProjectGrid />
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/framework" className="button-secondary text-xs">
            VIEW 7-PRINCIPLE RESPONSIBLE AI FRAMEWORK <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </main>
  );
}
