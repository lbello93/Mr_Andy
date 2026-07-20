import { Link } from "react-router-dom";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">
          Let's Make Your Event a <span>Little Sweeter</span>
        </h2>

        <p className="cta-description">
          Reservations for 2026 and 2027 are filling quickly. Contact us today
          to lock in your preferred date.
        </p>

        <Link to="/contact" className="cta-button">
          Plan Your Celebration
        </Link>
      </div>
    </section>
  );
}
