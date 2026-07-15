import "./Packages.css";

export default function PackageCard({
  icon: Icon,
  title,
  description,
  button,
  featured,
  badge,
}) {
  return (
    <article className={`package-card ${featured ? "featured" : ""}`}>
      {badge && <span className="package-badge">{badge}</span>}

      <Icon size={36} className="package-icon" />

      <h3>{title}</h3>

      <p>{description}</p>

      <button>{button}</button>
    </article>
  );
}
