type ActivityCardProps = {
  title: string;
  items: string[];
  icon: "document" | "finance" | "maintenance" | "people";
};

function ActivityIcon({ icon }: { icon: ActivityCardProps["icon"] }) {
  if (icon === "finance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 7h12M8 4h8v16H8zM10 11h4M10 15h4" />
      </svg>
    );
  }

  if (icon === "maintenance") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m14 6 4 4M5 19l5.5-5.5M14.5 5.5a4 4 0 0 0 4 4L11 17l-4 1 1-4Z" />
      </svg>
    );
  }

  if (icon === "people") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M16 20a4 4 0 0 0-8 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM19 19a3 3 0 0 0-3-3M18 7.5a3 3 0 0 1 0 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h8l2 2v14H6V4h2Zm2 5h4M10 13h4M10 17h4" />
    </svg>
  );
}

export function ActivityCard({ title, items, icon }: ActivityCardProps) {
  return (
    <article className="activity-card" data-activity={icon}>
      <div className="activity-card-header">
        <span className="activity-icon">
          <ActivityIcon icon={icon} />
        </span>
        <h3>{title}</h3>
      </div>
      <ul className="activity-list">
        {items.map((item) => (
          <li key={item}>
            <span aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
