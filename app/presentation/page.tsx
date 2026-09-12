"use client";

import { useState, useEffect } from "react";
import { presentationSlides } from "@/lib/content";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  User,
  Clock,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export default function PresentationPage() {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [showNotes, setShowNotes] = useState(true);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const slide = presentationSlides[currentSlideIdx];

  // Timer Effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning]);

  // Keyboard Navigation Effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlideIdx((prev) => Math.min(presentationSlides.length - 1, prev + 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlideIdx((prev) => Math.max(0, prev - 1));
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Timer color status: 0-5m Green, 5-6.5m Amber, >6.5m Red
  const timerStatusClass =
    secondsElapsed < 300
      ? "text-green border-green/30 bg-green/10"
      : secondsElapsed < 390
      ? "text-amber-300 border-amber/30 bg-amber/10"
      : "text-rose-400 border-rose-500/40 bg-rose-500/10 animate-pulse";

  return (
    <main
      className={`min-h-screen bg-ink text-paper transition-all ${
        isFullscreen ? "p-4 md:p-8" : "px-5 pb-24 pt-24 md:px-8"
      }`}
    >
      {/* Top Header Bar */}
      <div className="mx-auto max-w-6xl border-b border-line pb-4 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-paper transition focus-ring"
        >
          <ArrowLeft size={14} /> EXIT TO MAIN PORTFOLIO
        </Link>

        {/* Live Presentation Timer Widget */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs font-bold ${timerStatusClass}`}
          >
            <Clock size={13} />
            <span>{formatTimer(secondsElapsed)} / 7:00 MIN</span>
          </div>

          <button
            type="button"
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="rounded-lg border border-line bg-card p-1.5 text-muted hover:text-paper focus-ring"
            aria-label={isTimerRunning ? "Pause timer" : "Start timer"}
          >
            {isTimerRunning ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsTimerRunning(false);
              setSecondsElapsed(0);
            }}
            className="rounded-lg border border-line bg-card p-1.5 text-muted hover:text-paper focus-ring"
            aria-label="Reset timer"
          >
            <RotateCcw size={14} />
          </button>

          <button
            type="button"
            onClick={() => setShowNotes(!showNotes)}
            className={`rounded-lg border px-2.5 py-1 font-mono text-xs font-semibold transition focus-ring ${
              showNotes
                ? "border-blue/50 bg-blue/15 text-blue"
                : "border-line bg-card text-muted hover:text-paper"
            }`}
          >
            SPEAKER NOTES
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            className="rounded-lg border border-line bg-card p-1.5 text-muted hover:text-paper focus-ring"
            aria-label="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
          </button>
        </div>
      </div>

      {/* Main Slide Canvas */}
      <div className="mx-auto mt-6 max-w-6xl">
        <div className="relative min-h-[520px] rounded-3xl border border-line bg-gradient-to-b from-card via-panel to-ink p-8 backdrop-blur-2xl md:p-14 shadow-2xl flex flex-col justify-between">
          {/* Slide Top Metadata */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-blue">
                  SLIDE 0{slide.id} OF 0{presentationSlides.length}
                </span>
                <span className="text-quiet">·</span>
                <span className="text-muted">TARGET TIMING: {slide.timeRange}</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-3 py-0.5 font-mono text-[0.68rem] text-green">
                <User size={11} />
                <span>PRESENTER: {slide.speaker}</span>
              </div>
            </div>

            {/* Slide Title */}
            <div className="mt-8">
              <h1 className="font-display text-3xl font-bold tracking-tight text-paper sm:text-4xl md:text-5xl">
                {slide.title}
              </h1>
              <p className="mt-2 font-mono text-sm text-green">
                {slide.subtitle}
              </p>
            </div>

            {/* Key Presentation Points */}
            <div className="mt-8 space-y-4">
              {slide.keyPoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-base text-paper/90 sm:text-lg leading-relaxed"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-blue shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            {/* Visual Callout Box */}
            <div className="mt-8 rounded-2xl border border-blue/30 bg-blue/10 p-4 font-mono text-xs text-blue flex items-center gap-2">
              <Sparkles size={15} className="shrink-0" />
              <span>LIVE PORTFOLIO DEMONSTRATION: {slide.visualCallout}</span>
            </div>
          </div>

          {/* Slide Bottom Controls */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
            <div className="flex items-center gap-2 font-mono text-xs text-quiet">
              <span>Use</span>
              <kbd className="rounded bg-panel border border-line px-1.5 py-0.5 text-paper">
                ←
              </kbd>
              <kbd className="rounded bg-panel border border-line px-1.5 py-0.5 text-paper">
                →
              </kbd>
              <span>or Spacebar to navigate</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                disabled={currentSlideIdx === 0}
                onClick={() => setCurrentSlideIdx((prev) => Math.max(0, prev - 1))}
                className="button-secondary text-xs py-2 px-4 flex items-center gap-1.5 disabled:opacity-30"
              >
                <ChevronLeft size={15} /> PREVIOUS SLIDE
              </button>

              <button
                type="button"
                disabled={currentSlideIdx === presentationSlides.length - 1}
                onClick={() =>
                  setCurrentSlideIdx((prev) =>
                    Math.min(presentationSlides.length - 1, prev + 1)
                  )
                }
                className="button-primary text-xs py-2 px-5 flex items-center gap-1.5 disabled:opacity-30"
              >
                NEXT SLIDE <ChevronRight size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* Speaker Notes Drawer (Collapsible) */}
        {showNotes && (
          <div className="mt-6 rounded-2xl border border-line bg-panel/90 p-6 backdrop-blur-xl animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <span className="font-mono text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <MessageSquare size={13} />
                SPEAKER SCRIPT & TALKING POINTS ({slide.speaker})
              </span>
              <span className="font-mono text-[0.65rem] text-quiet">
                REHEARSAL PROMPTER
              </span>
            </div>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted italic">
              &ldquo;{slide.speakerNotes}&rdquo;
            </p>
          </div>
        )}

        {/* Slide Thumbnail Strip */}
        <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-4">
          {presentationSlides.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlideIdx(idx)}
              className={`shrink-0 rounded-xl border p-3 text-left transition focus-ring font-mono text-[0.65rem] w-36 ${
                currentSlideIdx === idx
                  ? "border-blue/60 bg-blue/15 text-paper shadow-md"
                  : "border-line bg-card/60 text-quiet hover:text-muted hover:border-line-bright"
              }`}
            >
              <div className="flex justify-between font-bold">
                <span>0{s.id}</span>
                <span className="text-quiet">{s.timeRange.split(" ")[0]}</span>
              </div>
              <div className="truncate mt-1 text-paper font-semibold">{s.title}</div>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
