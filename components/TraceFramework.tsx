"use client";

import { Reveal, MotionDiv } from "@/components/Motion";
import { CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle, FileCheck } from "lucide-react";

const tracePillars = [
  {
    letter: "T",
    title: "TASK",
    icon: CheckCircle2,
    question: "What part of the decision can be automated?",
    loanApplication: "Preliminary eligibility filtering, document verification, identity verification & initial credit scoring.",
    status: "Partially Automated",
    statusColor: "text-blue border-blue/40 bg-blue/10",
  },
  {
    letter: "R",
    title: "RISK",
    icon: AlertTriangle,
    question: "What harms or vulnerable groups could be affected?",
    loanApplication: "Disparate impact on marginalized groups, opaque rejections, and demographic misclassification.",
    status: "High Risk Safeguarded",
    statusColor: "text-amber-300 border-amber-300/40 bg-amber-400/10",
  },
  {
    letter: "A",
    title: "AUTHORITY",
    icon: ShieldCheck,
    question: "Can a competent human question, override, or stop the AI?",
    loanApplication: "Compliance officers and loan managers possess unilateral authority to halt models or grant exceptions.",
    status: "Human Retains Power",
    statusColor: "text-green border-green/40 bg-green/10",
  },
  {
    letter: "C",
    title: "CONTESTABILITY",
    icon: HelpCircle,
    question: "Can affected people understand, challenge, and obtain remedy?",
    loanApplication: "Applicants receive adverse action notices with top negative factors and a formal human review channel.",
    status: "Remedy Guaranteed",
    statusColor: "text-cyan border-cyan/40 bg-cyan/10",
  },
  {
    letter: "E",
    title: "EVIDENCE",
    icon: FileCheck,
    question: "Is there empirical proof of superior, fair performance?",
    loanApplication: "Historical bias audits, model factsheets, and comparative fairness testing against human benchmarks.",
    status: "Audited & Verified",
    statusColor: "text-purple-300 border-purple-400/40 bg-purple-400/10",
  },
];

export function TraceFramework() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl md:p-8 shadow-card-glass">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
          <div>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              TRACE GOVERNANCE TEST
            </span>
            <p className="font-display text-xl font-semibold text-paper mt-1">
              Decision Boundary Evaluation for Credit Approvals
            </p>
          </div>
          <span className="rounded-full border border-green/30 bg-green/10 px-3 py-1 font-mono text-xs text-green">
            Result: Partial Automation Only
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {tracePillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <MotionDiv
                key={item.letter}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-xl border border-line bg-black/25 p-5 transition-all duration-300 hover:border-blue/50 hover:bg-white/[0.02]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl font-bold text-white/20 group-hover:text-blue/40 transition-colors">
                      {item.letter}
                    </span>
                    <Icon size={18} className="text-muted group-hover:text-blue transition-colors" />
                  </div>

                  <h4 className="mt-3 font-mono text-xs font-bold tracking-[0.16em] text-paper">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs font-medium leading-relaxed text-blue/90">
                    {item.question}
                  </p>

                  <div className="mt-3 border-t border-line/40 pt-3">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-quiet">
                      Application in Lending:
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {item.loanApplication}
                    </p>
                  </div>
                </div>

                <div className="mt-5 border-t border-line/40 pt-3">
                  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[0.6rem] font-semibold ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

