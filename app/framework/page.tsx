import { ResponsibleAIFramework } from "@/components/ResponsibleAIFramework";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const matrixData = [
  {
    domain: "01. Healthcare Diagnosis",
    fairness: "Diverse training cohorts to avoid diagnostic omissions",
    privacy: "De-identified patient imaging & EHR data",
    transparency: "Confidence score calibration & explainable factors",
    oversight: "Mandatory licensed clinician sign-off",
    slug: "medical-diagnosis",
  },
  {
    domain: "02. Platform Data Governance",
    fairness: "Auditing gig worker rating & dispatch parity",
    privacy: "Zero unauthorized telemetry to third-party brokers",
    transparency: "Plain-language consent; eliminate dark patterns",
    oversight: "User opt-out & verifiable deletion rights",
    slug: "data-audit",
  },
  {
    domain: "03. Cash Logistics Optimization",
    fairness: "Guaranteed minimum replenishment SLA for rural ATMs",
    privacy: "Aggregated regional telemetry; zero personal IDs",
    transparency: "Factsheets explaining routing cost trade-offs",
    oversight: "Operations manager route override console",
    slug: "atm-logistics",
  },
  {
    domain: "04. Algorithmic Credit Decisions",
    fairness: "Disparate impact audits on protected demographics",
    privacy: "Restricting telemetry to justified financial criteria",
    transparency: "Adverse action notices with key rejection causes",
    oversight: "TRACE test: Human compliance sign-off on denials",
    slug: "loan-approval",
  },
];

export default function FrameworkPage() {
  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Header */}
      <section className="mx-auto max-w-7xl border-b border-line pb-16 pt-8">
        <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-6">
          ETHICAL ARCHITECTURE & SAFEGUARDS
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-paper sm:text-6xl md:text-7xl">
          Responsible AI is not one feature.
          <br />
          <span className="bg-gradient-to-r from-paper via-blue to-green bg-clip-text text-transparent">
            It is a system of safeguards.
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-xl sm:leading-9">
          Ethical intelligence is achieved not through passive guidelines, but through structural constraints: calibrated confidence scores, privacy data minimization, equity guarantees, and non-negotiable human authority boundaries.
        </p>
      </section>

      {/* Interactive Visualizer */}
      <section className="py-16">
        <ResponsibleAIFramework />
      </section>

      {/* Cross-Domain Matrix Section */}
      <section className="mx-auto max-w-7xl py-16 border-t border-line">
        <SectionHeader
          eyebrow="CROSS-DOMAIN IMPLEMENTATION"
          title="How Principles Translate Into Technical Practice"
          copy="The same core principles manifest as distinct technical architectures depending on context risk."
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-card/70 backdrop-blur-xl shadow-card-glass">
          <table className="min-w-[840px] w-full border-collapse text-left text-sm">
            <thead className="border-b border-line text-xs font-mono font-semibold tracking-wider text-quiet">
              <tr>
                <th className="py-4 px-5">CASE STUDY DOMAIN</th>
                <th className="py-4 px-5">FAIRNESS SAFEGUARD</th>
                <th className="py-4 px-5">PRIVACY CONTROL</th>
                <th className="py-4 px-5">TRANSPARENCY FACTOR</th>
                <th className="py-4 px-5">HUMAN OVERSIGHT GATE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-xs sm:text-sm">
              {matrixData.map((row) => (
                <tr key={row.domain} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-5 font-semibold text-paper whitespace-nowrap">
                    <Link
                      href={`/projects/${row.slug}`}
                      className="group flex items-center gap-1.5 hover:text-blue transition-colors"
                    >
                      <span>{row.domain}</span>
                      <ArrowRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </td>
                  <td className="py-4 px-5 text-muted leading-relaxed">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-green shrink-0" />
                      {row.fairness}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-muted leading-relaxed">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-blue shrink-0" />
                      {row.privacy}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-muted leading-relaxed">
                    {row.transparency}
                  </td>
                  <td className="py-4 px-5 font-medium text-green whitespace-nowrap">
                    {row.oversight}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

