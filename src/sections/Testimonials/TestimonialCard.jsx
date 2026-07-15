import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, event, stagger }) {
  return (
    <article className={`testimonial-card ${stagger ? "stagger" : ""}`}>
      <Quote size={72} strokeWidth={1.5} className="quote-icon" />

      <p className="testimonial-text">"{quote}"</p>

      <div className="testimonial-author">
        <h4>{name}</h4>

        <span>{event}</span>
      </div>
    </article>
  );
}
