import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { projects } from "@/lib/content";

const links = [
  { href: "/#work", label: "Work Overview" },
  { href: "/framework", label: "Responsible AI Framework" },
  { href: "/about", label: "Academic Profile & Skills" },
  { href: "/reflection", label: "Ethical Reflection" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40 px-5 py-16 md:px-8 md:py-24">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Main Info */}
          <div className="space-y-4 lg:col-span-5">
            <div className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-[0.16em] text-paper">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue/40 bg-blue/10 text-blue">
                <ShieldCheck size={18} />
              </span>
              <span>CHRIS KEVIN A</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted">
              Academic Responsible AI portfolio exploring ethical AI design, data power, bias mitigation, human-in-the-loop oversight, and decision contestability.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-muted">
                Class: 5BTCS-B
              </span>
              <span className="inline-flex items-center rounded-md border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[0.68rem] text-muted">
                Academic Year: 2026
              </span>
              <span className="inline-flex items-center rounded-md border border-green/30 bg-green/10 px-2.5 py-1 font-mono text-[0.68rem] text-green">
                Computer Science & Engineering
              </span>
            </div>
          </div>

          {/* Case Studies Links */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue">
              Case Studies
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex items-center justify-between text-muted transition hover:text-paper"
                  >
                    <span>
                      <span className="font-mono text-xs text-quiet mr-2">{project.number}</span>
                      {project.title}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 flex flex-col gap-6 border-t border-line/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <blockquote className="font-display text-lg text-paper/85 md:text-xl">
            Technology is powerful. <span className="text-blue">Responsibility makes it trustworthy.</span>
          </blockquote>
          <p className="font-mono text-xs text-quiet">
            © 2026 Chris Kevin A · Responsible AI Academic Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}

