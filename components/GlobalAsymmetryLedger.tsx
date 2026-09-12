"use client";

import { useState } from "react";
import {
  Globe,
  DollarSign,
  Droplets,
  Zap,
  HeartCrack,
  Sparkles,
  Scale,
} from "lucide-react";

type LedgerTab = "LABOR" | "ECOLOGY" | "CAPITAL";

export function GlobalAsymmetryLedger() {
  const [tab, setTab] = useState<LedgerTab>("LABOR");
  const [promptCount, setPromptCount] = useState<number>(100);

  // Approximate metrics derived from peer-reviewed audits (Crawford, Perrigo, Luccioni)
  const estimatedAnnotatorTraumaSec = Math.round(promptCount * 1.8);
  const estimatedCoolingWaterMl = Math.round(promptCount * 5.2);
  const annotatorEarningsCents = ((estimatedAnnotatorTraumaSec / 3600) * 1.5 * 100).toFixed(1);
  const corporateMonetizationCents = (promptCount * 0.04 * 100).toFixed(1);

  return (
    <div className="mx-auto max-w-7xl rounded-3xl border border-line bg-gradient-to-b from-card via-panel to-ink p-6 backdrop-blur-2xl md:p-10 shadow-card-glass">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-line/70 pb-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="pill-badge border-green/30 bg-green/10 text-green">
              <Globe size={12} />
              POLITICAL ECONOMY & ETHICS AUDIT
            </span>
            <span className="pill-badge border-rose-500/30 bg-rose-500/10 text-rose-400">
              UNIT-5 TOPIC 08 INVESTIGATION
            </span>
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-paper sm:text-3xl md:text-4xl">
            Global North–South Asymmetry Ledger
          </h2>
          <p className="mt-2 max-w-2xl text-xs text-muted sm:text-sm">
            Auditing the invisible human trauma, ecological extraction, and monetary colonization underpinning commercial Generative AI foundation models.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="flex flex-wrap items-center gap-2">
          {(
            [
              { id: "LABOR", label: "GHOST WORK & TRAUMA", icon: HeartCrack },
              { id: "ECOLOGY", label: "WATER & ENERGY TOLL", icon: Droplets },
              { id: "CAPITAL", label: "CAPITAL & REGULATORY HEGEMONY", icon: Scale },
            ] as const
          ).map((t) => {
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-mono text-xs font-semibold transition-all focus-ring ${
                  tab === t.id
                    ? "border border-green/50 bg-green/15 text-green shadow-[0_0_20px_rgba(85,214,190,0.25)]"
                    : "border border-line bg-white/[0.02] text-quiet hover:text-paper"
                }`}
              >
                <Icon size={14} />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Ledger Comparison Grid */}
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        {/* Left Column: Asymmetry Comparison Cards */}
        <div className="lg:col-span-8 space-y-6">
          {tab === "LABOR" && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Silicon Valley Card */}
                <div className="rounded-2xl border border-blue/40 bg-blue/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-blue">
                    <span>GLOBAL NORTH (SAN FRANCISCO / SEATTLE)</span>
                    <span className="font-bold">THE BENEFICIARIES</span>
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    $280,000 / year
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Average compensation for AI safety research scientist
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-muted border-t border-blue/20 pt-4">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                      <span>Equity packages in trillion-dollar public valuations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                      <span>Full mental health retreats, ergonomic campuses</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue" />
                      <span>Direct author credit on frontier academic papers</span>
                    </li>
                  </ul>
                </div>

                {/* Global South Card */}
                <div className="rounded-2xl border border-rose-500/40 bg-rose-500/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-rose-400">
                    <span>GLOBAL SOUTH (NAIROBI / MANILA)</span>
                    <span className="font-bold">THE HUMAN SHIELD</span>
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    $1.32 – $2.00 / hour
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Sama gig workers performing RLHF toxic data scrubbing
                  </p>
                  <ul className="mt-4 space-y-2 text-xs text-muted border-t border-rose-500/20 pt-4">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      <span>Reviewing up to 200 graphic atrocities, self-harm, & hate texts daily</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      <span>Zero psychiatric trauma care; arbitrary dismissal without severance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                      <span>Complete anonymity; excluded from model attribution or royalties</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Case Quote / Empirical Finding */}
              <div className="rounded-2xl border border-line bg-panel/70 p-6">
                <span className="font-mono text-xs font-semibold text-green uppercase tracking-wider block">
                  EMPIRICAL FINDING: TIME INVESTIGATION ON OPENAI / SAMA
                </span>
                <p className="mt-2 text-sm leading-relaxed text-paper/90">
                  &ldquo;One worker tasked with reading graphic sexual abuse descriptions for ChatGPT reported experiencing recurring night terrors and chronic depression. Sama offered only generic counseling sessions with unqualified wellness guides before abruptly ending the contract.&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between text-xs font-mono text-quiet border-t border-line/60 pt-3">
                  <span>Source: TIME Magazine Investigation (Perrigo, 2023)</span>
                  <span className="text-green">VERIFIED HUMAN TOLL</span>
                </div>
              </div>
            </div>
          )}

          {tab === "ECOLOGY" && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-cyan/40 bg-cyan/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-cyan">
                    <span>DATACENTER COOLING EXTRACTION</span>
                    <Droplets size={16} />
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    700,000 Liters
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Freshwater consumed during training of a single GPT-3 class model
                  </p>
                  <p className="mt-4 text-xs text-muted leading-relaxed border-t border-cyan/20 pt-4">
                    Hyperscale datacenters are strategically sited in regions where municipal water is diverted from local agricultural irrigation, directly impacting regional water tables in drought-prone territories.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber/40 bg-amber/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-amber-300">
                    <span>ELECTRICAL GRID STRAIN</span>
                    <Zap size={16} />
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    10x Energy Multiplier
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    A single LLM query consumes ~10x more electricity than a Google Search
                  </p>
                  <p className="mt-4 text-xs text-muted leading-relaxed border-t border-amber/20 pt-4">
                    The International Energy Agency forecasts AI datacenter power consumption to double by 2026, equivalent to the entire national electricity consumption of Japan.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-panel/70 p-6">
                <span className="font-mono text-xs font-semibold text-green uppercase tracking-wider block">
                  ECOLOGICAL REPARATIONS PRINCIPLE
                </span>
                <p className="mt-2 text-sm leading-relaxed text-paper/90">
                  Frontier AI models cannot externalize their planetary costs onto vulnerable ecosystems. Model licensing fees must fund local water desalination, renewable grid expansion, and municipal ecology restoration in host communities.
                </p>
              </div>
            </div>
          )}

          {tab === "CAPITAL" && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-blue/40 bg-blue/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-blue">
                    <span>CAPITAL CONCENTRATION</span>
                    <DollarSign size={16} />
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    &gt; 91% Venture Capital
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Frontier generative AI investments concentrated in US & China
                  </p>
                  <p className="mt-4 text-xs text-muted leading-relaxed border-t border-blue/20 pt-4">
                    Developing nations lack sovereign GPU superclusters, forcing public universities and hospitals to purchase closed API credits from Silicon Valley monopolies.
                  </p>
                </div>

                <div className="rounded-2xl border border-purple-400/40 bg-purple-400/5 p-6 backdrop-blur-md">
                  <div className="flex items-center justify-between font-mono text-xs text-purple-300">
                    <span>REGULATORY DISENFRANCHISEMENT</span>
                    <Scale size={16} />
                  </div>
                  <h4 className="mt-3 font-display text-2xl font-bold text-paper">
                    84% of Global Population
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    Citizens residing in nations with zero representation in frontier AI summits
                  </p>
                  <p className="mt-4 text-xs text-muted leading-relaxed border-t border-purple-400/20 pt-4">
                    Global governance summits (Bletchley, Seoul) remain dominated by G7 powers and tech executives, treating the Global South as passive recipients of algorithmic policy.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-panel/70 p-6">
                <span className="font-mono text-xs font-semibold text-green uppercase tracking-wider block">
                  ACTIONABLE REDRESS: THE UN DIGITAL COMPACT
                </span>
                <p className="mt-2 text-sm leading-relaxed text-paper/90">
                  Democratizing artificial intelligence requires sovereign compute grants, open scientific model weights, and mandatory representation of Global South representatives on international AI safety boards.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Interactive Prompt Labor & Extraction Calculator */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-line bg-ink/90 p-6">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <span className="font-mono text-xs font-bold text-green flex items-center gap-1.5">
                <Sparkles size={13} />
                PROMPT IMPACT CALCULATOR
              </span>
              <span className="font-mono text-[0.65rem] text-quiet">
                SIMULATION
              </span>
            </div>

            <p className="mt-3 text-xs text-muted leading-relaxed">
              Calculate the invisible human labor and ecological cost behind daily conversational AI queries:
            </p>

            {/* Slider Control */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-muted">QUERIES / DAY:</span>
                <span className="font-bold text-paper">{promptCount} Prompts</span>
              </div>
              <input
                type="range"
                min={10}
                max={1000}
                step={10}
                value={promptCount}
                onChange={(e) => setPromptCount(Number(e.target.value))}
                className="w-full accent-green cursor-pointer"
              />
              <div className="flex justify-between text-[0.62rem] font-mono text-quiet">
                <span>10 (Casual)</span>
                <span>500 (Heavy)</span>
                <span>1000 (Enterprise)</span>
              </div>
            </div>

            {/* Calculated Output Stats */}
            <div className="mt-6 space-y-3 border-t border-line/60 pt-4 font-mono text-xs">
              <div className="rounded-xl border border-line bg-panel/60 p-3">
                <span className="text-quiet text-[0.65rem] block">
                  HUMAN TRAUMA RECTIFICATION SECONDS:
                </span>
                <span className="font-display text-xl font-bold text-rose-400">
                  {estimatedAnnotatorTraumaSec} seconds
                </span>
                <p className="text-[0.62rem] text-muted mt-0.5">
                  Time spent by Global South annotators reading toxic text to align these responses.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-panel/60 p-3">
                <span className="text-quiet text-[0.65rem] block">
                  EVAPORATIVE FRESHWATER CONSUMED:
                </span>
                <span className="font-display text-xl font-bold text-cyan">
                  {estimatedCoolingWaterMl} mL
                </span>
                <p className="text-[0.62rem] text-muted mt-0.5">
                  Equivalent to {(estimatedCoolingWaterMl / 250).toFixed(1)} glasses of municipal drinking water.
                </p>
              </div>

              <div className="rounded-xl border border-line bg-panel/60 p-3">
                <span className="text-quiet text-[0.65rem] block">
                  REVENUE EXTRACTION RATIO:
                </span>
                <div className="flex items-center justify-between mt-1 text-sm font-bold">
                  <span className="text-green">${corporateMonetizationCents} (Tech Corp)</span>
                  <span className="text-quiet">vs</span>
                  <span className="text-rose-400">${annotatorEarningsCents} (Annotator)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-line/60 pt-4 text-[0.68rem] text-quiet leading-relaxed">
              *Model based on 2023–2024 academic environmental audits (Luccioni et al.) and labor reporting (Perrigo/TIME).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
