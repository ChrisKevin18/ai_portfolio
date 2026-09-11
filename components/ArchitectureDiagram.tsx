"use client";

import { Reveal } from "@/components/Motion";
import { ChevronDown, Cpu, ShieldCheck, Database, Layers, CheckCircle } from "lucide-react";

type ArchitectureDiagramProps = {
  nodes: string[];
  columns?: string[];
};

export function ArchitectureDiagram({ nodes, columns }: ArchitectureDiagramProps) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-line bg-gradient-to-b from-card/90 to-panel/90 p-6 backdrop-blur-xl md:p-8 shadow-card-glass">
        {/* Header bar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue/40 bg-blue/10 text-blue">
              <Layers size={15} />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              SYSTEM ARCHITECTURE & DECISION FLOW
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-3 py-1 font-mono text-[0.68rem] text-green">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
            Human Oversight Gate Active
          </span>
        </div>

        {/* Optional Data Source Inputs Grid */}
        {columns && columns.length > 0 && (
          <div className="mb-8 rounded-xl border border-line/70 bg-black/30 p-5">
            <div className="mb-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-wider text-muted">
              <Database size={13} className="text-blue" />
              <span>Multi-Source Ingestion Tier ({columns.length} streams)</span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {columns.map((col) => (
                <div
                  key={col}
                  className="rounded-lg border border-line/60 bg-white/[0.02] p-3 text-center text-xs font-mono font-medium text-paper/90 transition hover:border-blue/50 hover:bg-white/[0.05]"
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Ingestion Connector */}
            <div className="flex flex-col items-center justify-center pt-4">
              <span className="h-6 w-px bg-gradient-to-b from-line to-blue" />
              <span className="rounded-full border border-blue/40 bg-blue/15 px-3 py-0.5 font-mono text-[0.6rem] font-semibold text-blue">
                AGGREGATION & VALIDATION
              </span>
              <span className="h-4 w-px bg-gradient-to-b from-blue to-line" />
            </div>
          </div>
        )}

        {/* Pipeline Nodes Flow */}
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-2">
          {nodes.map((node, index) => {
            const isHuman =
              node.toLowerCase().includes("human") ||
              node.toLowerCase().includes("clinician") ||
              node.toLowerCase().includes("review");
            const isAI =
              node.toLowerCase().includes("ai") ||
              node.toLowerCase().includes("model") ||
              node.toLowerCase().includes("forecast") ||
              node.toLowerCase().includes("scoring") ||
              node.toLowerCase().includes("optimization");
            const isFinal = index === nodes.length - 1;

            return (
              <div key={node} className="flex w-full flex-col items-center">
                <div
                  className={`group relative flex w-full items-center justify-between rounded-xl border p-4 transition-all duration-300 ${
                    isHuman
                      ? "border-green/50 bg-green/[0.07] shadow-green-glow"
                      : isAI
                      ? "border-blue/40 bg-blue/[0.06] shadow-blue-glow"
                      : isFinal
                      ? "border-purple-400/40 bg-purple-400/[0.06]"
                      : "border-line bg-card/60 hover:border-line-bright hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg border ${
                        isHuman
                          ? "border-green/40 bg-green/20 text-green"
                          : isAI
                          ? "border-blue/40 bg-blue/20 text-blue"
                          : "border-line bg-white/[0.04] text-muted"
                      }`}
                    >
                      {isHuman ? (
                        <ShieldCheck size={16} />
                      ) : isAI ? (
                        <Cpu size={15} />
                      ) : isFinal ? (
                        <CheckCircle size={15} />
                      ) : (
                        <span className="font-mono text-xs">{index + 1}</span>
                      )}
                    </span>
                    <span className="font-mono text-xs font-semibold tracking-wider text-paper sm:text-sm">
                      {node}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[0.62rem] font-medium tracking-widest uppercase ${
                      isHuman
                        ? "text-green"
                        : isAI
                        ? "text-blue"
                        : "text-quiet"
                    }`}
                  >
                    {isHuman ? "Human Checkpoint" : isAI ? "AI Inference" : `Stage ${index + 1}`}
                  </span>
                </div>

                {index < nodes.length - 1 && (
                  <div className="my-1.5 flex flex-col items-center text-muted/40">
                    <ChevronDown size={16} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}

