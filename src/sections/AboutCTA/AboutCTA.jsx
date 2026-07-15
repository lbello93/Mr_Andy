import "./AboutCTA.css";
import Button from "../../components/Button/Button";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      {/* Decorative circles */}

      <span className="dot dot-pink"></span>
      <span className="dot dot-yellow"></span>
      <span className="dot dot-green"></span>

      <div className="about-cta-container">
        <h2>
          Let's Create Something
          <br />
          Sweet
        </h2>

        <p>
          Whether you're planning an intimate gathering or a large-scale
          celebration, we're here to help make it unforgettable. Contact our
          design team to start brainstorming your custom candy installation.
        </p>

        <Button to="/contact">Plan Your Celebration</Button>
      </div>
    </section>
  );
}
