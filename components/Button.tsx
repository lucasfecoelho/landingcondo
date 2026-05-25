import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseClasses =
    "group inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold leading-5 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:px-6";
  const variants = {
    primary:
      "bg-[var(--gold)] text-[var(--gold-ink)] shadow-[0_16px_34px_rgba(168,126,63,0.24)] hover:-translate-y-0.5 hover:bg-[var(--gold-strong)] hover:shadow-[0_20px_42px_rgba(168,126,63,0.28)] focus-visible:ring-[var(--gold)]",
    secondary:
      "border border-[rgba(50,20,69,0.16)] bg-white text-[var(--primary)] hover:-translate-y-0.5 hover:border-[rgba(50,20,69,0.32)] hover:bg-[var(--surface-muted)] hover:shadow-[0_16px_34px_rgba(50,20,69,0.08)] focus-visible:ring-[var(--primary)]",
    inverted:
      "border border-white/28 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-white/44 hover:bg-white/16 hover:shadow-[0_18px_36px_rgba(0,0,0,0.18)] focus-visible:ring-white",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
