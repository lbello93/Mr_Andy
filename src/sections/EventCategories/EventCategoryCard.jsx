import { ArrowRight, Check } from "lucide-react";

export default function EventCategoryCard({
  title,
  subtitle,
  description,
  points,
  image,
  quote,
  reverse,
}) {
  return (
    <div className={`event-card ${reverse ? "reverse" : ""}`}>
      <div className="event-image">
        <img src={image} alt={title} />
      </div>

      <div className="event-content">
        <h2>{title}</h2>

        <h5>{subtitle}</h5>

        <p>{description}</p>

        {points && (
          <ul className="event-list">
            {points.map((item) => (
              <li key={item}>
                <Check size={14} />
                {item}
              </li>
            ))}
          </ul>
        )}

        {quote && <div className="event-quote">"{quote}"</div>}

        <button className="event-link">
          BOOK YOUR EVENT
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
