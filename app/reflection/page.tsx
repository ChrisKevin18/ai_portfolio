import { Reflection } from "@/components/Reflection";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, HeartPulse, Database, Banknote, Scale } from "lucide-react";

const domainLearnings = [
  {
    domain: "Clinical Diagnosis",
    icon: HeartPulse,
    lesson: "High accuracy does not guarantee safety. Clinicians must calibrate differential confidence and retain ultimate diagnostic authority.",
    color: "text-blue",
    slug: "medical-diagnosis",
  },
  {
    domain: "Data Governance",
    icon: Database,
    lesson: "AI tools used for auditing can themselves reproduce corporate blindspots. Human auditors must interrogate primary policy texts for surveillance power.",
    color: "text-green",
    slug: "data-audit",
  },
  {
    domain: "Cash Logistics",
    icon: Banknote,
    lesson: "Optimization functions that only minimize distance or cost will systematically underserve low-margin rural locations unless hard fairness constraints are enforced.",
    color: "text-amber-300",
    slug: "atm-logistics",
  },
  {
    domain: "Credit Lending",
    icon: Scale,
    lesson: "The TRACE test establishes where automation must end: preliminary filtering can be automated, but loan rejections require human explanation and contestability.",
    color: "text-purple-300",
    slug: "loan-approval",
  },
];

export default function ReflectionPage() {
  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Header */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16 pt-8">
        <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-6">
          CRITICAL SYNTHESIS & REFLECTION
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
          What Responsible AI
          <br />
          <span className="bg-gradient-to-r from-paper via-blue to-green bg-clip-text text-transparent">
            Demands We Question.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-xl sm:leading-9">
          The four projects move systematically from system design to governance, proving that ethics is not an afterthought or a disclaimer. It must be engineered into the question, the training data, the optimization constraints, and the decision boundary.
        </p>
      </section>

      {/* 4 In-Depth Questions */}
      <section className="py-16">
        <Reflection />
      </section>

      {/* Domain Synthesis Cards */}
      <section className="mx-auto max-w-7xl py-16 border-t border-line">
        <SectionHeader
          eyebrow="DOMAIN SYNTHESIS"
          title="Core Insights Across 4 Investigations"
          copy="Key philosophical conclusions drawn from testing Responsible AI in real-world environments."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {domainLearnings.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.domain} delay={idx * 0.06}>
                <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-card/70 p-6 backdrop-blur-xl transition hover:border-blue/50 hover:shadow-card-glass md:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.02] ${item.color}`}>
                        <Icon size={18} />
                      </span>
                      <span className="font-mono text-xs font-semibold text-quiet">
                        INSIGHT 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-semibold text-paper group-hover:text-white">
                      {item.domain}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.lesson}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-line/50 pt-4">
                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-paper transition group-hover:text-blue"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl pt-12 border-t border-line">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-line bg-card/40 p-6 backdrop-blur-xl">
          <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-muted hover:text-paper">
            <ArrowLeft size={14} /> RETURN TO CASE STUDIES
          </Link>
          <Link href="/about" className="button-primary">
            VIEW ACADEMIC PROFILE <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

