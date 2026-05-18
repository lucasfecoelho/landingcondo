type ServiceCardProps = {
  title: string;
  description: string;
  category: string;
  index: number;
  className?: string;
};

export function ServiceCard({ title, description, category, index, className = "" }: ServiceCardProps) {
  return (
    <article className={`service-card group ${className}`}>
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{category}</p>
        <span className="text-sm text-[var(--muted)]">0{index + 1}</span>
      </div>
      <h3 className="mt-6 text-xl font-semibold leading-7 text-[var(--foreground)]">{title}</h3>
      <p className="mt-3 max-w-md leading-7 text-[var(--muted)]">{description}</p>
    </article>
  );
}
