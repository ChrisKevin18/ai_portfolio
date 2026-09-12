"use client";

import { useState } from "react";
import { awarenessPosters, AwarenessPoster } from "@/lib/content";
import {
  Download,
  Maximize2,
  X,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/Motion";

export function AwarenessGallery() {
  const [activePoster, setActivePoster] = useState<AwarenessPoster | null>(null);

  return (
    <div className="mx-auto max-w-7xl">
      {/* 4 Poster Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {awarenessPosters.map((poster, index) => (
          <Reveal key={poster.id} delay={index * 0.08}>
            <article className={`group flex h-full flex-col justify-between rounded-3xl border bg-gradient-to-b ${poster.themeColor} p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}>
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[0.65rem]">
                  <span className="font-bold tracking-widest text-paper/80">
                    {poster.number}
                  </span>
                  <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-paper">
                    {poster.category}
                  </span>
                </div>

                {/* Slogan & Title */}
                <h3 className="mt-4 font-display text-xl font-bold leading-snug text-paper group-hover:text-white">
                  {poster.title}
                </h3>
                <p className="mt-2 font-mono text-[0.72rem] text-muted">
                  {poster.tagline}
                </p>

                {/* Core Slogan Quote */}
                <div className="mt-4 rounded-2xl bg-ink/70 p-4 border border-white/10">
                  <p className="text-xs font-semibold italic text-paper/95 leading-relaxed">
                    &ldquo;{poster.coreSlogan}&rdquo;
                  </p>
                </div>

                {/* Key Stats Strip */}
                <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4 font-mono">
                  {poster.stats.map((stat, i) => (
                    <div key={i} className="rounded-xl bg-white/[0.03] p-2.5">
                      <span className="font-display text-lg font-bold text-paper block">
                        {stat.value}
                      </span>
                      <span className="text-[0.62rem] text-quiet leading-tight block mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => setActivePoster(poster)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-2.5 font-mono text-xs font-semibold text-paper transition hover:bg-white/20 focus-ring"
                >
                  <Maximize2 size={13} />
                  <span>INSPECT FULL INFOGRAPHIC</span>
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Fullscreen Poster Lightbox */}
      {activePoster && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePoster(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/20 bg-panel p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="font-mono text-xs font-bold text-green">
                AWARENESS ARTIFACT · {activePoster.number}
              </span>
              <button
                type="button"
                onClick={() => setActivePoster(null)}
                className="rounded-full border border-line bg-card p-2 text-muted hover:text-paper focus-ring"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>

            {/* Poster Canvas */}
            <div className="mt-6 rounded-2xl border border-line bg-gradient-to-br from-card via-panel to-ink p-8 text-center space-y-6">
              <span className="inline-block rounded-full bg-blue/10 border border-blue/30 px-3 py-1 font-mono text-xs text-blue">
                {activePoster.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-paper max-w-lg mx-auto">
                {activePoster.title}
              </h2>
              <blockquote className="text-sm md:text-base italic text-paper/90 font-medium max-w-md mx-auto border-y border-line py-4">
                &ldquo;{activePoster.coreSlogan}&rdquo;
              </blockquote>

              {/* Bullets List */}
              <div className="text-left space-y-3 max-w-md mx-auto">
                <span className="font-mono text-xs font-semibold text-quiet uppercase block">
                  ACTIONABLE CIVIC IMPERATIVES:
                </span>
                <ul className="space-y-2 text-xs text-muted">
                  {activePoster.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={14} className="text-green shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Takeaway */}
              <div className="rounded-xl border border-line/80 bg-ink p-4 text-xs text-muted max-w-md mx-auto text-left">
                <strong className="text-paper block font-mono text-[0.68rem] mb-1">
                  CRITICAL TAKEAWAY:
                </strong>
                {activePoster.takeaway}
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="font-mono text-[0.68rem] text-quiet">
                Public Digital Literacy Initiative · Veritas Synthetica · 2026
              </span>
              <button
                type="button"
                onClick={() => window.print()}
                className="button-primary text-xs flex items-center gap-2"
              >
                <Download size={13} />
                <span>PRINT / EXPORT POSTER</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
