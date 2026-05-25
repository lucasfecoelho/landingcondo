"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type TeamCardProps = {
  name: string;
  role: string;
  description: string;
  courses: string[];
  image: string;
  imagePosition?: string;
};

export function TeamCard({
  name,
  role,
  description,
  courses,
  image,
  imagePosition = "center center",
}: TeamCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = `${name.toLowerCase().replace(/\s+/g, "-")}-title`;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const modal = isOpen
    ? createPortal(
        <div className="resume-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <button type="button" className="resume-backdrop" aria-label="Fechar currículo" onClick={() => setIsOpen(false)} />
          <div className="resume-dialog">
            <button type="button" className="resume-close" aria-label="Fechar currículo" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <p className="eyebrow text-[var(--gold-strong)]">{role}</p>
            <h4 id={titleId} className="mt-3 font-[family-name:var(--font-display)] text-[1.8rem] leading-tight text-[var(--foreground)]">
              {name}
            </h4>
            <p className="mt-4 leading-7 text-[var(--muted)]">{description}</p>
            <div className="mt-6 border-t border-[var(--line)] pt-6">
              <h5 className="font-[family-name:var(--font-display)] text-xl text-[var(--foreground)]">Formação e cursos</h5>
              <ul className="mt-4 grid gap-3">
                {courses.map((course) => (
                  <li key={course} className="flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--gold)]" />
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <article className="team-card group">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-[var(--surface-muted)]">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 36vw, (min-width: 768px) 44vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: imagePosition }}
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[rgba(23,5,31,0.62)] to-transparent" />
        </div>

        <div className="px-1 pt-5 sm:px-2 sm:pt-6">
          <h3 className="font-[family-name:var(--font-display)] text-[1.45rem] font-semibold leading-7 text-[var(--foreground)]">{name}</h3>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--gold-strong)]">{role}</p>
          <p className="mt-5 leading-7 text-[var(--muted)]">{description}</p>
          <button type="button" className="resume-button mt-6" onClick={() => setIsOpen(true)}>
            Ver currículo
          </button>
        </div>
      </article>

      {modal}
    </>
  );
}
