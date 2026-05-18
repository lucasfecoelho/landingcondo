import type { ReactNode } from "react";

type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: SectionTitleProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  const titleTone = tone === "light" ? "text-white" : "text-[var(--foreground)]";
  const descriptionTone = tone === "light" ? "text-white/76" : "text-[var(--muted)]";
  const eyebrowTone = tone === "light" ? "text-[var(--gold)]" : "text-[var(--gold-strong)]";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className={`eyebrow ${eyebrowTone}`}>{eyebrow}</p>
      <h2 className={`mt-4 font-[family-name:var(--font-display)] text-[1.9rem] leading-[1.08] sm:text-[2.35rem] lg:text-[2.8rem] ${titleTone}`}>
        {title}
      </h2>
      {description ? (
        <div className={`mt-5 max-w-2xl text-base leading-7 sm:text-[1.05rem] sm:leading-8 ${descriptionTone}`}>
          {description}
        </div>
      ) : null}
    </div>
  );
}
