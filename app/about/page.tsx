import { SectionHeader } from "@/components/SectionHeader";
import { SkillsGrid } from "@/components/SkillsGrid";
import { Reveal } from "@/components/Motion";
import Link from "next/link";
import { ArrowRight, GraduationCap, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

const facts = [
  { label: "DEGREE PROGRAM", value: "B.Tech Computer Science & Engineering", icon: GraduationCap },
  { label: "SPECIALIZED FOCUS", value: "Responsible AI & Algorithmic Governance", icon: ShieldCheck },
  { label: "METHODOLOGY", value: "Human-Centred · Empirical · Auditable", icon: CheckCircle2 },
  { label: "CLASS / BATCH", value: "Class 5BTCS-B · Year 2026", icon: FileText },
];

const researchPillars = [
  {
    phase: "01",
    title: "Clinical AI Safeguards",
    description: "Architecting decision-support systems where probabilistic models assist differential diagnoses while licensed clinicians retain exclusive decision authority.",
    caseStudy: "/projects/medical-diagnosis",
  },
  {
    phase: "02",
    title: "Platform Data & Power Audits",
    description: "Auditing commercial privacy policies (e.g. Rapido) to expose dark patterns, coercive consent interfaces, and third-party data broker surveillance.",
    caseStudy: "/projects/data-audit",
  },
  {
    phase: "03",
    title: "Logistical Equity & Green AI",
    description: "Formulating multi-objective optimization algorithms that balance Cash-in-Transit fuel emissions with guaranteed minimum service access for underserved regions.",
    caseStudy: "/projects/atm-logistics",
  },
  {
    phase: "04",
    title: "TRACE Decision Governance",
    description: "Applying the TRACE test to determine what algorithmic tasks can be automated in credit lending, and mandating human contestability and adverse action notices.",
    caseStudy: "/projects/loan-approval",
  },
];

export default function AboutPage() {
  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16 pt-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-6">
              ACADEMIC RESEARCH PROFILE
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
              Chris Kevin A
            </h1>
            <p className="mt-4 font-mono text-sm tracking-wider text-green">
              Computer Science & Engineering · Responsible Artificial Intelligence
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg sm:leading-8">
              This portfolio represents dedicated academic research investigating how intelligent autonomous systems can be designed, rigorously audited, and governed responsibly. Across healthcare, digital platforms, banking logistics, and automated credit scoring, these works establish actionable boundaries where automation empowers human expertise without transferring accountability away from people.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/#work" className="button-primary group">
                VIEW CASE STUDIES <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/framework" className="button-secondary">
                EXPLORE FRAMEWORK
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl shadow-card-glass">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-quiet">
                ACADEMIC AFFILIATION
              </span>
              <h2 className="mt-3 font-display text-xl font-semibold text-paper">
                Academic Portfolio 2026
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Documenting coursework, empirical audits, and systems engineering for ethical artificial intelligence.
              </p>
              <div className="mt-6 space-y-3 border-t border-line/60 pt-4 text-xs font-mono">
                <div className="flex justify-between text-muted">
                  <span>CLASS:</span>
                  <span className="text-paper">5BTCS-B</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>DISCIPLINE:</span>
                  <span className="text-paper">CSE</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>STATUS:</span>
                  <span className="text-green">Active Academic Review</span>
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

      {/* Research Pillars */}
      <section className="mx-auto max-w-7xl py-20 border-b border-line">
        <SectionHeader
          eyebrow="APPLIED METHODOLOGIES"
          title="Four Research Commitments"
          copy="A structured systems framework moving from clinical safety to regulatory boundaries."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {researchPillars.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.06}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-card/70 p-6 backdrop-blur-xl transition hover:border-blue/50 hover:shadow-card-glass md:p-8">
                <div>
                  <span className="font-mono text-xs font-bold text-blue">
                    PILLAR {pillar.phase}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-paper group-hover:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-line/50 pt-4">
                  <Link
                    href={pillar.caseStudy}
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-paper transition group-hover:text-blue"
                  >
                    <span>Read Investigation</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mx-auto max-w-7xl py-20">
        <SectionHeader
          eyebrow="CAPABILITIES & PRACTICES"
          title="Responsible AI Competencies"
          copy="Academic skills expressed through technical architecture, empirical policy interrogation, and human oversight design."
        />
        <div className="mt-12">
          <SkillsGrid />
        </div>
      </section>
    </main>
  );
}

