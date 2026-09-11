import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Progression } from "@/components/Progression";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reflection } from "@/components/Reflection";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillsGrid } from "@/components/SkillsGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Portfolio Progression Pipeline */}
      <section className="container-wide py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="PORTFOLIO LIFECYCLE"
          title="Four Phases. One Question."
          copy="How do we build AI systems that are not only high-performing, but fundamentally accountable to people?"
        />
        <div className="mt-12">
          <Progression />
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="work" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="FEATURED INVESTIGATIONS"
          title="Design → Audit → Safeguard → Govern"
          copy="Each case study examines a distinct domain boundary: clinical decision support, platform data governance, cash logistics equity, and autonomous credit limits."
        />
        <div className="mt-12">
          <ProjectGrid />
        </div>
      </section>

      {/* Capabilities and Competencies */}
      <section className="container-wide py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="APPLIED CAPABILITIES"
          title="Competencies Grounded in Responsible AI Practice"
          copy="Combining systems engineering, empirical privacy analysis, and algorithmic governance frameworks."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </section>

      {/* Philosophical Reflections */}
      <section id="reflection" className="container-wide scroll-mt-28 py-20 md:py-28 border-t border-line/60">
        <SectionHeader
          eyebrow="CRITICAL REFLECTION"
          title="What Responsible Design Demands We Question"
          copy="Ethics is not a compliance check after deployment—it defines the boundary where automation must stop."
        />
        <div className="mt-12">
          <Reflection />
        </div>
      </section>

      {/* Interactive Framework Callout Banner */}
      <section className="container-wide pb-24 pt-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue/40 bg-gradient-to-r from-card via-panel to-ink p-8 backdrop-blur-2xl md:p-14 shadow-card-glass">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue/10 blur-3xl pointer-events-none" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-4">
                <Sparkles size={12} className="animate-pulse" />
                INTERACTIVE COMPONENT
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl">
                Explore the 7-Principle Safeguard Engine
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Interact with the dynamic Responsible AI Framework to inspect how Fairness, Privacy, Transparency, Accountability, Safety, Human Oversight, and Sustainability are verified across real-world systems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:col-span-4 lg:justify-end">
              <Link href="/framework" className="button-primary group">
                OPEN FRAMEWORK <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="button-secondary">
                ABOUT RESEARCHER
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

