import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "inverted";
};

export function Button({ children, className = "", variant = "primary", ...props }: ButtonProps) {
  const baseClasses =
    "group inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold leading-5 transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] sm:px-6";
  const variants = {
    primary:
      "bg-[var(--primary)] text-white shadow-[0_12px_28px_rgba(20,9,27,0.18)] hover:-translate-y-px hover:bg-[var(--primary-strong)] hover:shadow-[0_14px_30px_rgba(20,9,27,0.22)] focus-visible:ring-[var(--gold)]",
    secondary:
      "border border-[rgba(52,32,68,0.18)] bg-[var(--surface)] text-[var(--primary)] hover:-translate-y-px hover:border-[rgba(52,32,68,0.32)] hover:bg-[var(--surface-muted)] hover:shadow-[0_10px_24px_rgba(20,9,27,0.08)] focus-visible:ring-[var(--primary)]",
    inverted:
      "border border-white/28 bg-white/8 text-white hover:-translate-y-px hover:border-[var(--gold)] hover:bg-white/12 hover:shadow-[0_12px_28px_rgba(0,0,0,0.16)] focus-visible:ring-white",
  };

  return (
    <a className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
