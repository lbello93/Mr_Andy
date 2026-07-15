import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonialData";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <TestimonialCard key={item.name} {...item} stagger={index === 1} />
        ))}
      </div>
    </section>
  );
}
