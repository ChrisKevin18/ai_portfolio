"use client";

import { teamMembers } from "@/lib/content";
import { Clock, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Motion";

export function TeamCoordination() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Team Matrix Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <Reveal key={member.name} delay={idx * 0.08}>
            <div className="group flex h-full flex-col justify-between rounded-3xl border border-line bg-gradient-to-b from-card via-panel to-ink p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue/50 hover:shadow-card-glass md:p-7">
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-line/60 pb-3 font-mono text-[0.68rem]">
                  <span className="font-bold text-blue">RESEARCHER 0{idx + 1}</span>
                  <span className="rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 text-green">
                    REG: {member.regNo}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="mt-4 font-display text-2xl font-bold text-paper group-hover:text-white">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-green font-medium">
                  {member.role}
                </p>

                {/* Presentation Slot */}
                <div className="mt-4 rounded-xl border border-blue/30 bg-blue/5 p-3.5 text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold text-blue">
                    <Clock size={12} />
                    PRESENTATION SLOT ({member.presentationTiming})
                  </div>
                  <p className="mt-1 text-paper/90 font-medium text-[0.78rem]">
                    {member.presentationSlot}
                  </p>
                </div>

                {/* Assigned Unit-5 Topics */}
                <div className="mt-5 space-y-2">
                  <span className="font-mono text-[0.65rem] font-bold text-quiet uppercase tracking-wider block">
                    UNIT-5 RESEARCH TOPICS:
                  </span>
                  <ul className="space-y-1.5 text-xs text-muted">
                    {member.assignedTopics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-green shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables Developed */}
                <div className="mt-5 space-y-2 border-t border-line/50 pt-4">
                  <span className="font-mono text-[0.65rem] font-bold text-quiet uppercase tracking-wider block">
                    CORE DELIVERABLES CONTRIBUTED:
                  </span>
                  <ul className="space-y-1.5 text-xs text-muted">
                    {member.primaryDeliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue shrink-0 mt-1.5" />
                        <span className="leading-snug">{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-line/40 pt-3 flex items-center justify-between font-mono text-[0.65rem] text-quiet">
                <span>EQUAL CONTRIBUTION</span>
                <span className="text-green font-semibold">100% VERIFIED</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
