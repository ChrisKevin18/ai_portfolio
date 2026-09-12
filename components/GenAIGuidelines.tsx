"use client";

import { genAIGuidelines } from "@/lib/content";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Award,
} from "lucide-react";
import { Reveal } from "@/components/Motion";

export function GenAIGuidelines() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Guidelines Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {genAIGuidelines.map((item, idx) => (
          <Reveal key={item.pillar} delay={idx * 0.07}>
            <div className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl transition-all duration-300 hover:border-green/40 hover:shadow-green-glow">
              <div>
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <span className="font-mono text-xs font-bold text-green">
                    PILLAR 0{idx + 1}
                  </span>
                  <ShieldCheck size={16} className="text-green/70 group-hover:text-green transition-colors" />
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-paper transition-colors group-hover:text-white">
                  {item.pillar}
                </h3>

                <p className="mt-2 text-xs font-semibold text-paper/90 leading-relaxed">
                  &ldquo;{item.mandate}&rdquo;
                </p>

                <div className="mt-4 space-y-2 border-t border-line/50 pt-4">
                  <span className="font-mono text-[0.65rem] font-bold text-quiet uppercase tracking-wider block">
                    STATUTORY ENFORCEMENT RULES:
                  </span>
                  <ul className="space-y-2 text-xs text-muted">
                    {item.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-green shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-line/40 pt-3 flex items-center justify-between font-mono text-[0.62rem] text-quiet">
                <span>GOVERNANCE PROTOCOL</span>
                <span className="text-green">ACTIVE STANDARD</span>
              </div>
            </div>
          </Reveal>
        ))}

        {/* 6th Card: The Ethical Commitment Pledge */}
        <Reveal delay={0.35}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-blue/40 bg-gradient-to-br from-blue/15 via-card to-panel p-6 backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between border-b border-blue/30 pb-3">
                <span className="font-mono text-xs font-bold text-blue">
                  CIVIC PLEDGE
                </span>
                <Award size={18} className="text-blue" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-paper">
                The Responsible GenAI Oath
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                &ldquo;We resolve that generative intelligence shall remain an instrument of human flourishing, not an engine for epistemic deception, uncompensated labor enclosure, or geopolitical domination.&rdquo;
              </p>
              <div className="mt-6 rounded-xl border border-blue/30 bg-blue/10 p-4 font-mono text-xs text-blue">
                <div className="flex items-center gap-2 font-bold">
                  <FileCheck size={14} />
                  <span>COMMITTED CO-SIGNERS</span>
                </div>
                <p className="mt-1 text-[0.7rem] text-paper">
                  Chris Kevin A · Sandhiya M · Karthik R
                </p>
              </div>
            </div>
            <div className="mt-6 pt-3 border-t border-blue/20 font-mono text-[0.62rem] text-quiet">
              Academic Digital Ethics Portfolio · 2026
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
