"use client";

import { useState } from "react";
import { Reveal } from "@/components/Motion";
import { CheckCircle2, AlertCircle, XCircle, AlertTriangle, ShieldCheck } from "lucide-react";

type VerdictType = "CORRECT" | "PARTIAL" | "INCORRECT" | "MISSING";

const verdictConfig: Record<
  VerdictType,
  {
    icon: typeof CheckCircle2;
    badgeStyle: string;
    borderStyle: string;
  }
> = {
  CORRECT: {
    icon: CheckCircle2,
    badgeStyle: "border-green/40 bg-green/10 text-green",
    borderStyle: "hover:border-green/50",
  },
  PARTIAL: {
    icon: AlertCircle,
    badgeStyle: "border-blue/40 bg-blue/10 text-blue",
    borderStyle: "hover:border-blue/50",
  },
  INCORRECT: {
    icon: XCircle,
    badgeStyle: "border-red-400/40 bg-red-500/10 text-red-300",
    borderStyle: "hover:border-red-400/50",
  },
  MISSING: {
    icon: AlertTriangle,
    badgeStyle: "border-amber-300/40 bg-amber-400/10 text-amber-300",
    borderStyle: "hover:border-amber-300/50",
  },
};

const auditRows: {
  observation: string;
  verdict: VerdictType;
  evidence: string;
  missingIssue: string;
  limitation: string;
}[] = [
  {
    observation: "Location data is collected exclusively for ride matching",
    verdict: "CORRECT",
    evidence: "Section 2.1 specifies matching, navigation, and fare calculation telemetry.",
    missingIssue: "Purpose limitation & continuous background tracking risks.",
    limitation: "AI may assume adherence without auditing background data retention.",
  },
  {
    observation: "Users retain meaningful consent controls at every interaction step",
    verdict: "PARTIAL",
    evidence: "Opt-ins exist for marketing, but core app access mandates broad telemetry acceptance.",
    missingIssue: "Dark patterns, bundled consent, and unequal user bargaining power.",
    limitation: "AI flattens consent checkboxes without assessing coercive app flows.",
  },
  {
    observation: "Third-party platform data sharing carries minimal surveillance risk",
    verdict: "INCORRECT",
    evidence: "Policy permits sharing with affiliates, advertising networks, and payment intermediaries.",
    missingIssue: "Data broker resale, persistent device profiling, and surveillance power.",
    limitation: "AI hallucinated harmlessness by trusting marketing summaries over policy clauses.",
  },
  {
    observation: "Digital inequality across gig workers and riders was fully analyzed",
    verdict: "MISSING",
    evidence: "Policy documents omit gig worker algorithmic control and digital literacy barriers.",
    missingIssue: "Representational harm, rating penalties, and automated account deactivation.",
    limitation: "AI cannot detect missing sociological harms without external context prompts.",
  },
];

export function DataAuditMatrix() {
  const [selectedVerdict, setSelectedVerdict] = useState<string>("ALL");

  const filteredRows =
    selectedVerdict === "ALL"
      ? auditRows
      : auditRows.filter((r) => r.verdict === selectedVerdict);

  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl md:p-8 shadow-card-glass">
        {/* Header & Meta */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue/40 bg-blue/10 text-blue">
              <ShieldCheck size={16} />
            </span>
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue">
                DATA AUDIT BENCHMARK
              </span>
              <p className="font-display text-lg font-semibold text-paper">
                Rapido Privacy Policy vs AI Claim Verification
              </p>
            </div>
          </div>

          {/* Metric Pill Summary */}
          <div className="flex items-center gap-2 font-mono text-[0.68rem]">
            <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-1 text-green">1 Verified</span>
            <span className="rounded-full border border-blue/30 bg-blue/10 px-2.5 py-1 text-blue">1 Partial</span>
            <span className="rounded-full border border-red-400/30 bg-red-400/10 text-red-300">1 Refuted</span>
            <span className="rounded-full border border-amber-300/30 bg-amber-400/10 text-amber-300">1 Missing</span>
          </div>
        </div>

        {/* Verdict Filter Buttons */}
        <div className="mb-6 flex flex-wrap gap-2">
          {["ALL", "CORRECT", "PARTIAL", "INCORRECT", "MISSING"].map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setSelectedVerdict(v)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[0.68rem] font-semibold tracking-wider transition-all focus-ring ${
                selectedVerdict === v
                  ? "border border-blue/60 bg-blue/20 text-paper"
                  : "border border-line bg-white/[0.02] text-muted hover:text-paper"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="border-b border-line text-xs font-mono font-semibold tracking-wider text-quiet">
              <tr>
                <th className="py-3.5 px-4">AI OBSERVATION</th>
                <th className="py-3.5 px-4">AUDIT VERDICT</th>
                <th className="py-3.5 px-4">POLICY EVIDENCE</th>
                <th className="py-3.5 px-4">MISSING ETHICAL CONCERN</th>
                <th className="py-3.5 px-4">AI LIMITATION / BIAS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60">
              {filteredRows.map((row) => {
                const config = verdictConfig[row.verdict];
                const Icon = config.icon;
                return (
                  <tr
                    key={row.observation}
                    className="transition-colors hover:bg-white/[0.02]"
                  >
                    <td className="py-4 px-4 font-medium text-paper align-top max-w-xs">
                      {row.observation}
                    </td>
                    <td className="py-4 px-4 align-top whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] font-semibold ${config.badgeStyle}`}>
                        <Icon size={12} />
                        {row.verdict}
                      </span>
                    </td>
                    <td className="py-4 px-4 align-top text-xs leading-relaxed text-muted max-w-xs">
                      {row.evidence}
                    </td>
                    <td className="py-4 px-4 align-top text-xs leading-relaxed text-amber-200/90 max-w-xs">
                      {row.missingIssue}
                    </td>
                    <td className="py-4 px-4 align-top text-xs leading-relaxed text-quiet max-w-xs">
                      {row.limitation}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Reveal>
  );
}

