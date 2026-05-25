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
  const alignment = align === "center" ? "section-title-center" : "";
  const toneClass = tone === "light" ? "section-title-light" : "section-title-default";

  return (
    <div className={`section-title ${alignment} ${toneClass}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>
        {title}
      </h2>
      {description ? (
        <div className="section-title-description">
          {description}
        </div>
      ) : null}
    </div>
  );
}
