"use client";

import { useState } from "react";
import { unit5Topics, Unit5Pillar } from "@/lib/content";
import { Unit5TopicCard } from "@/components/Unit5TopicCard";
import { Filter, Layers } from "lucide-react";

const filters: { label: string; value: "ALL" | Unit5Pillar }[] = [
  { label: "ALL INVESTIGATIONS (09)", value: "ALL" },
  { label: "EPISTEMIC & TRUTH", value: "Epistemic & Truth" },
  { label: "LABOR & CREATIVE COMMONS", value: "Labor & Creativity" },
  { label: "CYBER-WARFARE & GEOPOLITICS", value: "Warfare & Geopolitics" },
  { label: "GLOBAL JUSTICE & SOVEREIGNTY", value: "Global Justice & Governance" },
];

export function Unit5Grid() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | Unit5Pillar>("ALL");

  const filteredTopics =
    activeFilter === "ALL"
      ? unit5Topics
      : unit5Topics.filter((t) => t.pillar === activeFilter);

  return (
    <div className="mx-auto max-w-[1480px]">
      {/* Filter Tabs Header */}
      <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-line/60 pb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-muted">
          <Filter size={14} className="text-blue" />
          <span>THEMATIC FILTER:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {filters.map((tab) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveFilter(tab.value)}
              className={`rounded-full px-4 py-2 font-mono text-[0.68rem] font-semibold tracking-wider transition-all duration-200 focus-ring ${
                activeFilter === tab.value
                  ? "border border-blue/60 bg-blue/15 text-paper shadow-sm"
                  : "border border-line bg-white/[0.02] text-muted hover:border-line-bright hover:text-paper"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTopics.map((topic) => (
          <Unit5TopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-card/50 p-4 px-6 text-xs font-mono text-muted backdrop-blur-md">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-green" />
          <span>SHOWING {filteredTopics.length} OF {unit5Topics.length} ACTIVE INVESTIGATIVE DOSSIERS</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-green animate-pulse" />
          <span>PEER-REVIEWED EMPIRICAL RESEARCH & CASE STUDIES</span>
        </div>
      </div>
    </div>
  );
}
