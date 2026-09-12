"use client";

import { useState } from "react";
import { Unit5Topic } from "@/lib/content";
import {
  ChevronRight,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
  X,
  BookOpen,
  User,
} from "lucide-react";

export function Unit5TopicCard({ topic }: { topic: Unit5Topic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/90 via-panel/85 to-ink p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue/50 hover:shadow-blue-glow md:p-7">
        <div>
          {/* Top Bar: Number, Pillar & Assigned Member */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line/60 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-blue">
                DOSSIER {topic.number}
              </span>
              <span className="rounded-full border border-line bg-white/[0.03] px-2.5 py-0.5 font-mono text-[0.62rem] text-quiet">
                {topic.pillar}
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[0.62rem] text-green/90 bg-green/10 px-2 py-0.5 rounded-full border border-green/20">
              <User size={10} />
              {topic.assignedMember}
            </span>
          </div>

          {/* Title and Subtitle */}
          <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-paper transition-colors group-hover:text-white sm:text-2xl">
            {topic.title}
          </h3>
          <p className="mt-1 font-mono text-xs text-muted/80">
            {topic.subtitle}
          </p>

          {/* Core Thesis */}
          <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
            {topic.coreThesis}
          </p>

          {/* Key Concept Pills */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {topic.keyConcepts.slice(0, 3).map((concept) => (
              <span
                key={concept}
                className="rounded-md border border-line bg-white/[0.02] px-2 py-0.5 font-mono text-[0.6rem] text-quiet group-hover:text-muted transition-colors"
              >
                {concept}
              </span>
            ))}
            {topic.keyConcepts.length > 3 && (
              <span className="rounded-md border border-line bg-white/[0.02] px-1.5 py-0.5 font-mono text-[0.6rem] text-blue/70">
                +{topic.keyConcepts.length - 3} more
              </span>
            )}
          </div>

          {/* Real World Case Teaser */}
          <div className="mt-5 rounded-xl border border-line/70 bg-panel/70 p-3.5 text-xs">
            <div className="flex items-center gap-1.5 font-mono text-[0.65rem] font-semibold text-amber-300">
              <AlertTriangle size={12} />
              CASE INVESTIGATION
            </div>
            <p className="mt-1 font-medium text-paper text-[0.78rem]">
              {topic.realWorldCase.title}
            </p>
          </div>
        </div>

        {/* Card Footer with Modal Trigger */}
        <div className="mt-6 border-t border-line/60 pt-4">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="group/btn flex w-full items-center justify-between font-mono text-xs font-semibold text-paper transition-colors hover:text-blue focus-ring rounded-lg py-1 px-1"
          >
            <span className="flex items-center gap-1.5">
              <BookOpen size={13} className="text-blue" />
              <span>INSPECT RESEARCH DOSSIER</span>
            </span>
            <ChevronRight
              size={14}
              className="transition-transform group-hover/btn:translate-x-1"
            />
          </button>
        </div>
      </article>

      {/* Expanded Modal View */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-blue/40 bg-card p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-line pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-blue">
                    INVESTIGATION DOSSIER {topic.number}
                  </span>
                  <span className="rounded-full border border-line bg-white/[0.04] px-2.5 py-0.5 font-mono text-[0.65rem] text-quiet">
                    {topic.pillar}
                  </span>
                  <span className="rounded-full border border-green/30 bg-green/10 px-2 py-0.5 font-mono text-[0.62rem] text-green">
                    Researcher: {topic.assignedMember} · {topic.roleTag}
                  </span>
                </div>
                <h2 className="mt-2 font-display text-2xl font-bold text-paper sm:text-3xl">
                  {topic.title}
                </h2>
                <p className="mt-1 font-mono text-xs text-muted">
                  {topic.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-line bg-panel p-2 text-muted hover:text-paper focus-ring"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Core Thesis Box */}
            <div className="mt-6 rounded-2xl border border-blue/30 bg-blue/10 p-5">
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-widest text-blue">
                FOUNDATIONAL THESIS
              </span>
              <p className="mt-1 text-sm font-medium leading-relaxed text-paper sm:text-base">
                &ldquo;{topic.coreThesis}&rdquo;
              </p>
            </div>

            {/* Ethical Crisis Description */}
            <div className="mt-6 space-y-2">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-quiet">
                THE ETHICAL CRISIS & SOCIETAL IMPACT
              </h4>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                {topic.ethicalCrisis}
              </p>
            </div>

            {/* Real World Investigation Box */}
            <div className="mt-6 rounded-2xl border border-amber/30 bg-amber/5 p-5">
              <div className="flex items-center gap-2 text-amber-300 font-mono text-xs font-semibold">
                <AlertTriangle size={15} />
                EMPIRICAL CASE STUDY: {topic.realWorldCase.title}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-paper/90 sm:text-sm">
                {topic.realWorldCase.details}
              </p>
              <div className="mt-3 border-t border-amber/20 pt-2 text-xs text-amber-200/80">
                <strong className="text-amber-300">Societal Impact:</strong> {topic.realWorldCase.impact}
              </div>
            </div>

            {/* Two Column Grid: Harm Mechanisms & Mitigation */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-line bg-panel/60 p-5">
                <h4 className="flex items-center gap-1.5 font-mono text-xs font-semibold text-rose-400">
                  <AlertTriangle size={13} />
                  PRIMARY HARM MECHANISMS
                </h4>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
                  {topic.harmMechanisms.map((harm, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                      <span>{harm}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-panel/60 p-5">
                <h4 className="flex items-center gap-1.5 font-mono text-xs font-semibold text-green">
                  <ShieldCheck size={13} />
                  RESPONSIBLE MITIGATION FRAMEWORK
                </h4>
                <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted">
                  {topic.mitigationFramework.map((mitigation, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-green shrink-0" />
                      <span>{mitigation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Philosophical Inquiry Question */}
            <div className="mt-6 rounded-2xl border border-line/80 bg-ink p-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue">
                <HelpCircle size={14} />
                PHILOSOPHICAL INQUIRY QUESTION
              </div>
              <p className="mt-2 text-sm italic text-paper/90 sm:text-base">
                &ldquo;{topic.philosophicalQuestion}&rdquo;
              </p>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="button-secondary text-xs"
              >
                CLOSE AUTOPSY
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
