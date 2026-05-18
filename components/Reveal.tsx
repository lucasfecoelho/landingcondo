"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const rect = element.getBoundingClientRect();
    const isAlreadyInViewport = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isAlreadyInViewport) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8%" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal reveal-${direction} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
