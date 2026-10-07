import { CheckCircle2 } from "lucide-react";

export default function PackageCard({
  title,
  price,
  subtitle,
  features,
  inclusions,
  ideal,
  popular,
}) {
  const featureList = inclusions || features || [];

  return (
    <article className={`package-card ${popular ? "popular" : ""}`}>
      {popular && <div className="popular-tag">MOST POPULAR</div>}

      <div className="package-header">
        <h3>{title}</h3>

        {price && <div className="package-price">{price}</div>}

        <p>{subtitle}</p>
      </div>

      <ul className="package-features">
        {featureList.map((feature) => (
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
