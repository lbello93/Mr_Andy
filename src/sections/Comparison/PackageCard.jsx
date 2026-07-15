import { CheckCircle2 } from "lucide-react";

export default function PackageCard({
  title,
  subtitle,
  features,
  ideal,
  popular,
}) {
  return (
    <article className={`package-card ${popular ? "popular" : ""}`}>
      {popular && <div className="popular-tag">MOST POPULAR</div>}

      <div className="package-header">
        <h3>{title}</h3>

        <p>{subtitle}</p>
      </div>

      <ul className="package-features">
        {features.map((feature) => (
          <li key={feature}>
            <CheckCircle2 size={16} strokeWidth={2} />

            {feature}
          </li>
        ))}
      </ul>

      <div className="package-footer">
        <span>IDEAL FOR:</span>

        <p>{ideal}</p>
      </div>
    </article>
  );
}
