"use client";

import { Menu, X, ShieldCheck, Presentation } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/#investigations", label: "INVESTIGATIONS", match: (path: string) => path === "/#investigations" },
  { href: "/#forensics", label: "FORENSIC LAB", match: (path: string) => path === "/#forensics" },
  { href: "/#posters", label: "ADVOCACY", match: (path: string) => path === "/#posters" },
  { href: "/analysis", label: "MONOGRAPH", match: (path: string) => path.startsWith("/analysis") },
  { href: "/presentation", label: "BRIEFING ROOM", match: (path: string) => path.startsWith("/presentation") },
  { href: "/about", label: "ABOUT", match: (path: string) => path.startsWith("/about") },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-ink/85 backdrop-blur-2xl py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-[0.16em] text-paper focus-ring"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue/40 bg-blue/10 text-blue transition-all duration-300 group-hover:scale-105 group-hover:border-blue group-hover:bg-blue/20">
              <ShieldCheck size={16} />
            </span>
            <span>VERITAS // SYNTHETICA</span>
          </Link>
          <span className="hidden items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-2.5 py-0.5 text-[0.62rem] font-mono font-medium text-green lg:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse" />
            DIGITAL ETHICS OBSERVATORY · 2026
          </span>
        </div>

        <div className="hidden items-center gap-1 rounded-full border border-line bg-card/60 p-1 font-body text-xs tracking-[0.14em] backdrop-blur-xl md:flex">
          {links.map((link) => {
            const isActive = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-1.5 font-semibold transition-all duration-200 focus-ring ${
                  isActive
                    ? "bg-white/10 text-paper shadow-sm"
                    : "text-muted hover:text-paper hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/presentation"
            className="hidden items-center gap-2 rounded-full border border-blue/40 bg-blue/15 px-4 py-2 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-paper transition-all duration-300 hover:border-blue hover:bg-blue/25 hover:shadow-blue-glow focus-ring md:flex"
          >
            <Presentation size={13} className="text-blue" />
            <span>ENTER BRIEFING (7 MIN)</span>
          </Link>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-line bg-card/70 p-2.5 text-paper transition-all duration-200 hover:border-blue/60 focus-ring md:hidden"
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink/95 px-5 pb-8 pt-4 backdrop-blur-2xl md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="mx-auto flex max-w-[1480px] flex-col gap-2">
            <div className="mb-2 flex items-center justify-between pb-3 border-b border-line/60">
              <span className="font-mono text-xs text-muted">INDEX</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green/30 bg-green/10 px-2 py-0.5 text-[0.62rem] font-mono text-green">
                <span className="h-1.5 w-1.5 rounded-full bg-green" /> Research Observatory
              </span>
            </div>
            {links.map((link) => {
              const isActive = link.match(pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 font-display text-xl font-semibold tracking-[-0.02em] transition-all focus-ring ${
                    isActive
                      ? "bg-blue/15 text-paper border border-blue/30"
                      : "text-muted hover:bg-white/5 hover:text-paper"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-blue" />}
                </Link>
              );
            })}
            <Link
              href="/presentation"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full border border-blue/50 bg-blue/20 px-5 py-3 font-mono text-[0.72rem] font-semibold tracking-[0.14em] text-paper transition hover:border-blue focus-ring"
            >
              <Presentation size={15} /> ENTER BRIEFING (7 MIN)
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
