import { Reveal } from "@/components/Motion";
import { progression } from "@/lib/content";
import { Compass, SearchCheck, ShieldCheck, Scale, ArrowRight } from "lucide-react";
import Link from "next/link";

const icons = [Compass, SearchCheck, ShieldCheck, Scale];
const targets = [
  { slug: "medical-diagnosis", title: "Medical Diagnosis" },
  { slug: "data-audit", title: "Rapido Data Audit" },
  { slug: "atm-logistics", title: "ATM Logistics" },
  { slug: "loan-approval", title: "Loan Approval (TRACE)" },
];

export function Progression() {
  return (
    <div className="mx-auto max-w-[1480px]">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {progression.map((item, index) => {
          const Icon = icons[index];
          const target = targets[index];
          return (
            <Reveal key={item.label} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/80 to-panel/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue/50 hover:shadow-blue-glow">
                {/* Step pill and icon */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue/30 bg-blue/10 px-2.5 py-1 font-mono text-[0.68rem] font-semibold tracking-wider text-blue">
                      PHASE {item.number}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/[0.02] text-muted transition duration-300 group-hover:scale-110 group-hover:border-blue/40 group-hover:text-blue">
                      <Icon size={18} />
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-paper sm:text-3xl transition-colors group-hover:text-white">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.copy}
                  </p>
                </div>

                {/* Associated Case Study Link */}
                <div className="mt-8 border-t border-line/70 pt-4">
                  <Link
                    href={`/projects/${target.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-[0.68rem] font-medium tracking-wide text-quiet transition hover:text-green"
                  >
                    <span>Case: {target.title}</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

