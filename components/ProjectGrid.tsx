"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";

const filters = [
  { label: "ALL CASE STUDIES", filter: () => true },
  { label: "HEALTHCARE", filter: (p: (typeof projects)[0]) => p.slug === "medical-diagnosis" },
  { label: "PLATFORM AUDIT", filter: (p: (typeof projects)[0]) => p.slug === "data-audit" },
  { label: "LOGISTICS & ESG", filter: (p: (typeof projects)[0]) => p.slug === "atm-logistics" },
  { label: "TRACE GOVERNANCE", filter: (p: (typeof projects)[0]) => p.slug === "loan-approval" },
];

export function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL CASE STUDIES");

  const currentFilter = filters.find((f) => f.label === activeFilter)?.filter || (() => true);
  const filteredProjects = projects.filter(currentFilter);

  return (
    <div className="mx-auto max-w-[1480px]">
      {/* Filter Tabs */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.label}
            type="button"
            onClick={() => setActiveFilter(f.label)}
            className={`rounded-full px-4 py-2 font-mono text-[0.68rem] font-semibold tracking-wider transition-all duration-200 focus-ring ${
              activeFilter === f.label
                ? "border border-blue/60 bg-blue/15 text-paper shadow-sm"
                : "border border-line bg-white/[0.02] text-muted hover:border-line-bright hover:text-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}

