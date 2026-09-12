"use client";

import { useState } from "react";
import { academicPaper } from "@/lib/content";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function EthicalAnalysisPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllPages, setShowAllPages] = useState<boolean>(false);

  const activePageData = academicPaper.pages.find(
    (p) => p.pageNumber === currentPage
  );

  return (
    <main className="px-5 pb-24 pt-28 md:px-8">
      {/* Top Breadcrumb & Controls */}
      <div className="mx-auto max-w-5xl border-b border-line pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-4 py-2 text-xs font-mono text-muted transition hover:border-blue/50 hover:bg-white/[0.05] hover:text-paper focus-ring"
          >
            <ArrowLeft size={14} /> BACK TO DIGITAL ETHICS PORTFOLIO
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllPages(!showAllPages)}
              className="rounded-full border border-line bg-card px-4 py-2 font-mono text-xs text-muted hover:text-paper focus-ring"
            >
              {showAllPages ? "SWITCH TO PAGED VIEW" : "VIEW FULL 3-PAGE PAPER"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="button-primary text-xs py-2 px-4 flex items-center gap-2"
            >
              <Printer size={13} />
              <span>PRINT / PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Academic Paper Container */}
      <article className="mx-auto mt-10 max-w-5xl rounded-3xl border border-line bg-card/90 p-8 backdrop-blur-2xl md:p-14 shadow-2xl">
        {/* Paper Header */}
        <header className="border-b border-line pb-10 text-center">
          <span className="pill-badge border-blue/30 bg-blue/10 text-blue mb-4">
            CIA 3 – COMPONENT 2 · FORMAL ETHICAL ANALYSIS (2–3 PAGES)
          </span>

          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl md:leading-tight max-w-4xl mx-auto">
            {academicPaper.title}
          </h1>

          <div className="mt-6 font-mono text-xs text-paper/90 space-y-1">
            <p className="font-semibold text-green text-sm">
              {academicPaper.authors}
            </p>
            <p className="text-muted">{academicPaper.department}</p>
            <p className="text-quiet">
              {academicPaper.course} · Academic Year {academicPaper.academicYear}
            </p>
          </div>

          {/* Abstract Box */}
          <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-line bg-panel/70 p-6 text-left">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue block mb-2">
              ABSTRACT
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-muted italic">
              {academicPaper.abstract}
            </p>
            <div className="mt-4 flex flex-wrap gap-2 pt-3 border-t border-line/60">
              <span className="font-mono text-[0.65rem] font-bold text-quiet">
                KEYWORDS:
              </span>
              {academicPaper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-md border border-line bg-white/[0.03] px-2 py-0.5 font-mono text-[0.62rem] text-muted"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Pager Bar (if not in full view) */}
        {!showAllPages && (
          <div className="my-8 flex items-center justify-between border-b border-line/60 pb-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-muted">DOCUMENT SECTION:</span>
              <span className="rounded-full bg-blue/10 border border-blue/30 px-3 py-0.5 font-mono text-xs font-bold text-blue">
                PAGE 0{currentPage} OF 03
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-lg border border-line bg-panel p-2 text-muted disabled:opacity-30 hover:text-paper focus-ring"
                aria-label="Previous page"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                disabled={currentPage === 3}
                onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
                className="rounded-lg border border-line bg-panel p-2 text-muted disabled:opacity-30 hover:text-paper focus-ring"
                aria-label="Next page"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Paper Content Body */}
        <div className="mt-8 space-y-12">
          {showAllPages ? (
            // Full 3-page render
            academicPaper.pages.map((page) => (
              <section
                key={page.pageNumber}
                className="border-b border-line/70 pb-12 last:border-b-0 space-y-6"
              >
                <div className="flex items-center justify-between border-b border-line/50 pb-2 font-mono text-xs">
                  <span className="text-blue font-bold">
                    PAGE {page.pageNumber}
                  </span>
                  <span className="text-quiet">{page.subheading}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-paper">
                  {page.heading}
                </h2>

                <div className="space-y-6">
                  {page.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h3 className="font-display text-lg font-semibold text-paper/90">
                        {sec.title}
                      </h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm leading-relaxed text-muted sm:text-base sm:leading-8 text-justify"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))
          ) : (
            // Single page render
            activePageData && (
              <section className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <span className="font-mono text-xs text-blue uppercase tracking-wider block">
                    {activePageData.subheading}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-bold text-paper sm:text-3xl">
                    {activePageData.heading}
                  </h2>
                </div>

                <div className="space-y-8">
                  {activePageData.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-3">
                      <h3 className="font-display text-lg font-semibold text-paper/90">
                        {sec.title}
                      </h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm leading-relaxed text-muted sm:text-base sm:leading-8 text-justify"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            )
          )}
        </div>

        {/* Scholarly References Section */}
        <footer className="mt-16 border-t border-line pt-10">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-quiet mb-4">
            SCHOLARLY REFERENCES & LEGAL CITATIONS
          </h3>
          <ul className="space-y-2 text-xs font-mono text-muted leading-relaxed">
            {academicPaper.references.map((ref, idx) => (
              <li key={idx} className="pl-4 border-l-2 border-line hover:border-blue transition-colors">
                {ref}
              </li>
            ))}
          </ul>
        </footer>
      </article>

      {/* Bottom Pager Controls (if paged) */}
      {!showAllPages && (
        <div className="mx-auto mt-8 flex max-w-5xl items-center justify-between">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="button-secondary text-xs flex items-center gap-2 disabled:opacity-30"
          >
            <ChevronLeft size={14} /> PREVIOUS PAGE
          </button>

          <span className="font-mono text-xs text-muted">
            PAGE {currentPage} OF 3
          </span>

          <button
            type="button"
            disabled={currentPage === 3}
            onClick={() => {
              setCurrentPage((p) => Math.min(3, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="button-primary text-xs flex items-center gap-2 disabled:opacity-30"
          >
            NEXT PAGE <ChevronRight size={14} />
          </button>
        </div>
      )}
    </main>
  );
}
