import Button from "../../components/Button/Button";
import "./PackageCTA.css";

export default function PackageCTA() {
  return (
    <section className="package-cta">
      <span className="dot dot-one"></span>
      <span className="dot dot-two"></span>
      <span className="dot dot-three"></span>

      <div className="package-cta-container">
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
