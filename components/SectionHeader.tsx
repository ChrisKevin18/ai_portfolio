import { Reveal } from "@/components/Motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, copy, align = "left" }: SectionHeaderProps) {
  return (
    <Reveal
      className={`max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="mono-label mb-5">{eyebrow}</p>
      <h2 className="font-display text-[clamp(2.7rem,5vw,4.2rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-paper">{title}</h2>
      {copy ? (
        <p className="mt-7 max-w-3xl text-[1.02rem] leading-8 text-muted md:text-lg">{copy}</p>
      ) : null}
    </Reveal>
  );
}
