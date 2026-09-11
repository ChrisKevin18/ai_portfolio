import { Reveal } from "@/components/Motion";
import { skills } from "@/lib/content";
import {
  Cpu,
  AlertTriangle,
  Database,
  Users,
  Search,
  Scale,
  Leaf,
  GitBranch,
} from "lucide-react";

const skillDetails: Record<
  string,
  { icon: typeof Cpu; context: string; category: string }
> = {
  "AI SYSTEM DESIGN": {
    icon: Cpu,
    context: "Architecture with clinical decision boundaries & clinician-in-the-loop gates.",
    category: "SYSTEMS",
  },
  "ETHICAL RISK ANALYSIS": {
    icon: AlertTriangle,
    context: "Identifying diagnostic bias, disparate impact, and representational harms.",
    category: "ANALYSIS",
  },
  "DATA GOVERNANCE": {
    icon: Database,
    context: "Privacy policy auditing, data minimization, consent flows & surveillance limits.",
    category: "GOVERNANCE",
  },
  "HUMAN-CENTRED AI": {
    icon: Users,
    context: "Ensuring AI assists and augments human judgment rather than replacing it.",
    category: "HCI",
  },
  "AI CRITICAL EVALUATION": {
    icon: Search,
    context: "Verifying automated claims against primary source evidence and policy texts.",
    category: "EVALUATION",
  },
  "RESPONSIBLE AI GOVERNANCE": {
    icon: Scale,
    context: "Implementing operational frameworks, compliance officers & dispute escalation.",
    category: "POLICY",
  },
  "SUSTAINABLE AI": {
    icon: Leaf,
    context: "Balancing replenishment efficiency, emissions reduction, and equitable access.",
    category: "SUSTAINABILITY",
  },
  "DECISION FRAMEWORKS": {
    icon: GitBranch,
    context: "Evaluating task boundaries, authority, and contestability via TRACE test.",
    category: "METHODOLOGY",
  },
};

export function SkillsGrid() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {skills.map((skill, index) => {
        const meta = skillDetails[skill] || {
          icon: Cpu,
          context: "Applied responsible AI practice and systems thinking.",
          category: "CORE",
        };
        const Icon = meta.icon;

        return (
          <Reveal key={skill} delay={index * 0.04}>
            <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/75 to-panel/75 p-6 backdrop-blur-md transition-all duration-300 hover:border-green/40 hover:bg-white/[0.03] hover:shadow-green-glow">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-green">
                    {meta.category}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-muted transition duration-300 group-hover:border-green/40 group-hover:text-green">
                    <Icon size={16} />
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-paper transition-colors group-hover:text-white">
                  {skill}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {meta.context}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-1.5 border-t border-line/60 pt-3">
                <span className="h-1.5 w-1.5 rounded-full bg-green" />
                <span className="font-mono text-[0.62rem] text-quiet">Demonstrated in portfolio</span>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

