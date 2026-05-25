"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export type Condominium = {
  name: string;
  units: string;
  location: string;
  image: string;
  hasImage: boolean;
};

type CondominiumCarouselProps = {
  condominiums: Condominium[];
};

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={direction === "previous" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 10.5c0 5.25-8 10.5-8 10.5S4 15.75 4 10.5a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </svg>
  );
}

function CondominiumSlide({ condominium }: { condominium: Condominium }) {
  const [imageFailed, setImageFailed] = useState(false);
  const shouldRenderImage = condominium.hasImage && !imageFailed;
  const shouldShowPlaceholder = !condominium.hasImage || imageFailed;

  return (
    <article className="condominium-slide">
      {shouldRenderImage ? (
        <Image
          src={condominium.image}
          alt={condominium.name}
          fill
          sizes="(min-width: 1280px) 30rem, (min-width: 1024px) 28rem, (min-width: 640px) 22rem, 86vw"
          className="condominium-photo"
          onError={() => setImageFailed(true)}
        />
      ) : null}
      <div className={`condominium-placeholder ${shouldShowPlaceholder ? "is-visible" : ""}`} aria-hidden="true">
        <span>Foto em breve</span>
      </div>
      <div className="condominium-overlay" />
      <div className="condominium-caption">
        <h3>{condominium.name}</h3>
        <p>{condominium.units}</p>
        <span>
          <PinIcon />
          {condominium.location}
        </span>
      </div>
    </article>
  );
}

export function CondominiumCarousel({ condominiums }: CondominiumCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "previous" | "next") => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const card = track.querySelector<HTMLElement>(".condominium-slide");
    const styles = getComputedStyle(track);
    const rawGap = styles.columnGap !== "normal" ? styles.columnGap : styles.gap;
    const gap = Number.parseFloat(rawGap) || 0;
    const amount = (card?.offsetWidth ?? track.clientWidth * 0.84) + gap;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="condominium-carousel">
      <div className="condominium-carousel-frame">
        <div ref={trackRef} className="condominium-track">
          {condominiums.map((condominium) => (
            <CondominiumSlide key={condominium.name} condominium={condominium} />
          ))}
        </div>

        <div className="condominium-carousel-controls" aria-label="Navegação do carrossel">
          <button
            type="button"
            className="condominium-arrow condominium-arrow-previous"
            aria-label="Ver condomínio anterior"
            onClick={() => scrollByCard("previous")}
          >
            <ArrowIcon direction="previous" />
          </button>
          <button
            type="button"
            className="condominium-arrow condominium-arrow-next"
            aria-label="Ver próximo condomínio"
            onClick={() => scrollByCard("next")}
          >
            <ArrowIcon direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}
