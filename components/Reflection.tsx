import { Reveal } from "@/components/Motion";
import { HelpCircle, Sparkles } from "lucide-react";

const reflections = [
  {
    q: "Can AI be useful without being autonomous?",
    a: "Yes. In clinical diagnosis and loan approval, AI delivers immense value as a decision-support copilot—surfacing differential insights and scanning verification records—while reserving final high-stakes judgment for accountable humans.",
    tag: "HUMAN-IN-THE-LOOP",
  },
  {
    q: "Is accuracy enough?",
    a: "No. A model can score 95% accuracy on historical data while reinforcing systemic neglect for rural ATM cash logistics or perpetuating clinical disparities against under-represented patient demographics.",
    tag: "BEYOND BENCHMARKS",
  },
  {
    q: "Who is responsible when AI is wrong?",
    a: "The institution and human overseer. Automated predictions can never assume legal or moral liability. Systems must embed auditable factsheets, compliance intervention rights, and applicant contestability channels.",
    tag: "ACCOUNTABILITY",
  },
  {
    q: "What makes an AI system responsible?",
    a: "Responsibility is not a compliance checklist added after development; it is the deliberate boundary where automation stops, verified against data power, privacy consent, and continuous ethical audits.",
    tag: "SYSTEMIC GOVERNANCE",
  },
];

export function Reflection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reflections.map((item, index) => (
          <Reveal key={item.q} delay={index * 0.08}>
            <article className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-gradient-to-b from-card/85 to-panel/85 p-6 backdrop-blur-xl transition-all duration-300 hover:border-blue/50 hover:shadow-blue-glow">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white/20 group-hover:text-blue/40 transition-colors">
                    0{index + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[0.62rem] font-semibold tracking-wider text-green">
                    <HelpCircle size={12} />
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-paper transition-colors group-hover:text-white">
                  {item.q}
                </h3>

                <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                  {item.a}
                </p>
              </div>

              <div className="mt-6 border-t border-line/50 pt-3">
                <span className="font-mono text-[0.62rem] text-quiet">
                  Academic Inquiry · 2026
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-card/90 via-panel/80 to-ink p-8 backdrop-blur-2xl md:p-12 shadow-card-glass">
        <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-widest text-blue mb-4">
          <Sparkles size={14} />
          SYNTHESIS & PHILOSOPHY
        </div>
        <p className="max-w-4xl text-lg leading-relaxed text-paper/90 md:text-xl md:leading-9">
          Responsible AI is not simply about building models that execute tasks. It is about actively deciding where those models should be deployed, identifying who could suffer disparate impact, enforcing verifiable privacy safeguards, and guaranteeing that people retain the authority to audit, contest, and override automated outcomes.
        </p>
        <blockquote className="mt-8 border-l-2 border-gradient-to-b from-blue to-green pl-6 font-display text-2xl font-semibold leading-tight text-paper sm:text-3xl md:text-4xl">
          &ldquo;Intelligence should assist human decision-making, never eliminate human responsibility.&rdquo;
        </blockquote>
        <div className="mt-6 font-mono text-xs text-quiet">
          — Chris Kevin A · Responsible AI Academic Synthesis
        </div>
      </Reveal>
    </div>
  );
}

