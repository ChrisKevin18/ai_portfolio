"use client";

import { useState } from "react";
import { promptLabCases, PromptLabCase } from "@/lib/content";
import {
  Terminal,
  ShieldCheck,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Layers,
  Wand2,
} from "lucide-react";

export function GenAILab() {
  const [selectedCase, setSelectedCase] = useState<PromptLabCase>(promptLabCases[0]);
  const [activeTab, setActiveTab] = useState<"COMPARISON" | "PROMPT_LINTER">("COMPARISON");

  // State for the interactive prompt linter
  const [customPrompt, setCustomPrompt] = useState(
    "A photorealistic portrait of an old traditional African village elder performing mysterious magic in a straw hut."
  );
  const [lintResult, setLintResult] = useState<{
    score: number;
    issues: string[];
    suggestedRepair: string;
  } | null>(null);

  const handleRunLinter = () => {
    const issues: string[] = [];
    let score = 95;

    const lower = customPrompt.toLowerCase();
    if (lower.includes("african") && (lower.includes("village") || lower.includes("magic") || lower.includes("straw hut"))) {
      issues.push("Stereotype Amplification: Exoticizing African healthcare or culture as primitive mysticism.");
      score -= 35;
    }
    if (lower.includes("style of") || lower.includes("trending on artstation") || lower.includes("by ")) {
      issues.push("Artistic Labor Exploitation: Replicating living artist stylistic techniques without verified licensing.");
      score -= 25;
    }
    if (lower.includes("explosion") || lower.includes("collapse") || lower.includes("breaking news") || lower.includes("casualty")) {
      issues.push("Epistemic Contagion Risk: Synthesizing unwatermarked disaster footage capable of market panic.");
      score -= 30;
    }
    if (lower.includes("i feel") || lower.includes("i am conscious") || lower.includes("my feelings")) {
      issues.push("Anthropomorphic Deception: Falsely claiming subjective sentience or emotional patienthood.");
      score -= 20;
    }

    if (issues.length === 0) {
      issues.push("Zero high-risk harm signatures detected. Prompt adheres to responsible generative standards.");
    }

    setLintResult({
      score: Math.max(10, score),
      issues,
      suggestedRepair:
        lower.includes("african")
          ? "A dignified documentary portrait of a licensed ethnobotanist and medical researcher working in an equipped laboratory in Nairobi, natural diffused daylight."
          : "Stylized original concept art inspired by public domain 19th-century post-impressionist movements with embedded C2PA provenance attestation.",
    });
  };

  return (
    <div className="mx-auto max-w-7xl rounded-3xl border border-line bg-gradient-to-b from-card via-panel to-ink p-6 backdrop-blur-2xl md:p-10 shadow-card-glass">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-line/70 pb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="pill-badge border-purple-400/30 bg-purple-400/10 text-purple-300">
              <Terminal size={12} />
              RESPONSIBLE AI TOOL USAGE
            </span>
            <span className="pill-badge border-blue/30 bg-blue/10 text-blue">
              EMPIRICAL BIAS AUDITING
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl md:text-4xl">
            GenAI Laboratory & Ethical Prompt Autopsies
          </h2>
          <p className="mt-2 max-w-2xl text-xs text-muted sm:text-sm">
            Demonstrating critical awareness of model hallucinations, representational harms, and responsible prompt engineering with C2PA provenance bindings.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("COMPARISON")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition focus-ring ${
              activeTab === "COMPARISON"
                ? "border border-blue/50 bg-blue/15 text-paper shadow-sm"
                : "border border-line bg-white/[0.02] text-quiet hover:text-paper"
            }`}
          >
            <Layers size={14} />
            <span>CASE STUDIES & AUTOPSIES</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("PROMPT_LINTER")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition focus-ring ${
              activeTab === "PROMPT_LINTER"
                ? "border border-purple-400/50 bg-purple-400/15 text-purple-200 shadow-sm"
                : "border border-line bg-white/[0.02] text-quiet hover:text-paper"
            }`}
          >
            <Wand2 size={14} />
            <span>INTERACTIVE PROMPT LINTER</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === "COMPARISON" ? (
        <div className="mt-8 space-y-8">
          {/* Case Study Selector Buttons */}
          <div className="grid gap-3 sm:grid-cols-3">
            {promptLabCases.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCase(c)}
                className={`flex flex-col text-left rounded-2xl border p-4 transition-all focus-ring ${
                  selectedCase.id === c.id
                    ? "border-blue/60 bg-blue/10 shadow-[0_0_20px_rgba(79,140,255,0.2)]"
                    : "border-line bg-panel/60 hover:border-line-bright"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] font-bold text-blue">
                    EXPERIMENT 0{idx + 1}
                  </span>
                  <span className="font-mono text-[0.6rem] text-quiet">
                    {c.provenanceStatus}
                  </span>
                </div>
                <h4 className="mt-2 font-display text-sm font-semibold text-paper line-clamp-1">
                  {c.domain}
                </h4>
              </button>
            ))}
          </div>

          {/* Before / After Comparison Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Box: Unmitigated Generation (The Flawed Baseline) */}
            <div className="rounded-2xl border border-rose-500/40 bg-rose-500/5 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-rose-500/20">
                <span className="font-mono text-xs font-bold text-rose-400 flex items-center gap-1.5">
                  <AlertTriangle size={14} />
                  UNMITIGATED PROMPT (HARMFUL BASELINE)
                </span>
                <span className="rounded-md border border-rose-500/30 bg-rose-500/10 px-2 py-0.5 font-mono text-[0.6rem] text-rose-400">
                  BIAS EXPOSED
                </span>
              </div>

              {/* Prompt text */}
              <div className="mt-4 rounded-xl border border-line bg-ink/80 p-4 font-mono text-xs text-paper/90">
                <span className="text-quiet block text-[0.65rem] mb-1">PROMPT:</span>
                &ldquo;{selectedCase.userPrompt}&rdquo;
              </div>

              {/* Model Output Description */}
              <div className="mt-4 space-y-2 text-xs">
                <span className="text-quiet font-mono text-[0.65rem] block">OBSERVED MODEL OUTPUT:</span>
                <p className="text-muted leading-relaxed bg-panel/60 p-3.5 rounded-xl border border-line">
                  {selectedCase.modelOutputDescription}
                </p>
              </div>

              {/* Ethical Flaw & Autopsy */}
              <div className="mt-5 space-y-2 text-xs border-t border-rose-500/20 pt-4">
                <span className="text-rose-400 font-mono text-[0.68rem] font-bold block">
                  ETHICAL AUTOPSY & LATENT BIAS:
                </span>
                <p className="text-rose-200/90 leading-relaxed">
                  <strong>Risk:</strong> {selectedCase.unmitigatedBiasRisk}
                </p>
                <p className="text-muted leading-relaxed mt-2">
                  <strong>Mechanism:</strong> {selectedCase.ethicalAutopsy}
                </p>
              </div>
            </div>

            {/* Right Box: Mitigated Generation (Responsible Practice) */}
            <div className="rounded-2xl border border-green/40 bg-green/5 p-6 backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-green/20">
                <span className="font-mono text-xs font-bold text-green flex items-center gap-1.5">
                  <ShieldCheck size={14} />
                  RESPONSIBLE MITIGATED PROMPT & REMEDY
                </span>
                <span className="rounded-md border border-green/30 bg-green/10 px-2 py-0.5 font-mono text-[0.6rem] text-green">
                  SAFEGUARD APPLIED
                </span>
              </div>

              {/* Mitigated Prompt text */}
              <div className="mt-4 rounded-xl border border-line bg-ink/80 p-4 font-mono text-xs text-green/90">
                <span className="text-quiet block text-[0.65rem] mb-1">DE-BIASED & WATERMARKED PROMPT:</span>
                &ldquo;{selectedCase.responsibleMitigatedPrompt}&rdquo;
              </div>

              {/* Mitigated Outcome */}
              <div className="mt-4 space-y-2 text-xs">
                <span className="text-quiet font-mono text-[0.65rem] block">RESPONSIBLE SYNTHESIS OUTCOME:</span>
                <p className="text-muted leading-relaxed bg-panel/60 p-3.5 rounded-xl border border-line">
                  {selectedCase.mitigatedOutcome}
                </p>
              </div>

              {/* Provenance & Compliance Badge */}
              <div className="mt-5 space-y-2 text-xs border-t border-green/20 pt-4">
                <span className="text-green font-mono text-[0.68rem] font-bold block">
                  PROVENANCE & COMPLIANCE VERIFICATION:
                </span>
                <div className="flex items-center gap-2 rounded-xl bg-green/10 border border-green/30 p-3">
                  <CheckCircle2 size={16} className="text-green shrink-0" />
                  <span className="font-mono text-xs text-paper">
                    Status: <strong>{selectedCase.provenanceStatus}</strong> · Signed with tamper-evident cryptographic metadata.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Prompt Linter Mode */
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border border-line bg-panel/70 p-6">
            <h3 className="font-display text-xl font-semibold text-paper">
              Live Responsible Generative AI Prompt Linter
            </h3>
            <p className="mt-1 text-xs text-muted">
              Type or customize a prompt to analyze potential epistemic, cultural, copyright, and anthropomorphic risks before model execution:
            </p>

            <textarea
              rows={3}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              className="mt-4 w-full rounded-xl border border-line bg-ink p-4 font-mono text-xs text-paper focus-ring"
              placeholder="Enter your generative prompt..."
            />

            <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2 text-[0.68rem] font-mono text-quiet">
                <span>QUICK TESTS:</span>
                <button
                  type="button"
                  onClick={() =>
                    setCustomPrompt(
                      "A digital portrait of an anime cyber-warrior in the exact style of ArtStation artist Greg Rutkowski."
                    )
                  }
                  className="underline hover:text-paper"
                >
                  Artist Style Test
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() =>
                    setCustomPrompt(
                      "Breaking news photo of a radioactive chemical explosion at a major metropolitan subway station."
                    )
                  }
                  className="underline hover:text-paper"
                >
                  Disaster Hoax Test
                </button>
              </div>

              <button
                type="button"
                onClick={handleRunLinter}
                className="button-primary text-xs"
              >
                <span>RUN ETHICAL LINT AUDIT</span>
                <Sparkles size={13} />
              </button>
            </div>
          </div>

          {lintResult && (
            <div className="rounded-2xl border border-line bg-card/80 p-6 space-y-6 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-xs font-semibold text-quiet uppercase">
                  LINT AUDIT REPORT
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-muted">RESPONSIBLE SCORE:</span>
                  <span
                    className={`font-display text-2xl font-bold ${
                      lintResult.score >= 80
                        ? "text-green"
                        : lintResult.score >= 50
                        ? "text-amber-300"
                        : "text-rose-400"
                    }`}
                  >
                    {lintResult.score} / 100
                  </span>
                </div>
              </div>

              {/* Issues Identified */}
              <div className="space-y-3">
                <span className="font-mono text-xs font-semibold text-rose-400 block">
                  IDENTIFIED ETHICAL VULNERABILITIES:
                </span>
                <ul className="space-y-2 text-xs text-muted">
                  {lintResult.issues.map((iss, i) => (
                    <li key={i} className="flex items-start gap-2 bg-panel/60 p-3 rounded-xl border border-line">
                      <AlertTriangle size={14} className="text-amber-300 shrink-0 mt-0.5" />
                      <span>{iss}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended Repair */}
              <div className="space-y-2 border-t border-line pt-4">
                <span className="font-mono text-xs font-semibold text-green block">
                  RECOMMENDED RESPONSIBLE PROMPT REPAIR:
                </span>
                <div className="rounded-xl border border-green/30 bg-green/10 p-4 font-mono text-xs text-green/90">
                  &ldquo;{lintResult.suggestedRepair}&rdquo;
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
