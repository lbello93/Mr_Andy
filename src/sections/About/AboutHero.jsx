import { Link } from "react-router-dom";
import "./AboutHero.css";
import Button from "../../components/Button/Button";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-container">
        {/* Left Side */}

        <div className="about-hero-content">
          <span className="hero-tag">Crafting Sweet Memories</span>

          <h1>
            We Don't Just
            <br />
            Serve Candy.
            <br />
            <span>
              We Create
              <br />
              Moments.
            </span>
          </h1>

          <p>
            At Mr. Andy, we believe every celebration deserves a little wonder.
            Our custom installations transform treats into high-end art.
          </p>

          <div className="hero-buttons">
            <Button to="/gallery">View Our Work</Button>

            <Button variant="secondary" to="/packages">
              Our Packages
            </Button>
          </div>
        </div>

        {/* Right Side */}

        <div className="about-hero-image">
          {/* Image goes here */}

          {/* <img src={aboutHero} alt="" /> */}
        </div>
      </div>
    </section>
  );
}
