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
            <p className="resume-role eyebrow">{role}</p>
            <h4 id={titleId} className="resume-title">
              {name}
            </h4>
            <p className="resume-description">{description}</p>
            <div className="resume-courses">
              <h5 className="font-[family-name:var(--font-display)] text-xl text-[var(--foreground)]">Formação e cursos</h5>
              <ul>
                {courses.map((course) => (
                  <li key={course}>
                    <span aria-hidden="true" />
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
        <div className="team-photo">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(min-width: 1024px) 36vw, (min-width: 768px) 44vw, 100vw"
            className="team-photo-image"
            style={{ objectPosition: imagePosition }}
          />
          <div className="team-photo-shade" />
        </div>

        <div className="team-card-body">
          <h3>{name}</h3>
          <p className="team-role">{role}</p>
          <p className="team-description">{description}</p>
          <button type="button" className="resume-button" onClick={() => setIsOpen(true)}>
            Ver currículo
          </button>
        </div>
      </article>

      {modal}
    </>
  );
}
