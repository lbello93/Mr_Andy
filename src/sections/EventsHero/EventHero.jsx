import "./EventHero.css";

import Button from "../../components/Button/Button";
import FloatingCard from "./FloatingCard";

import { floatingCards } from "./floatingCards";

import heroImage from "/gallery/eventHero.png";

export default function EventHero() {
  return (
    <section className="event-hero">
      {/* =========================================
          ATMOSPHERIC CANDY DOTS
      ========================================= */}

      <span className="hero-dot dot-one"></span>

      <span className="hero-dot dot-two"></span>

      <span className="hero-dot dot-three"></span>

      <span className="hero-dot dot-four"></span>

      <span className="hero-dot dot-five"></span>

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="event-container">
        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="hero-content">
          {/* Pill */}

          <div className="hero-pill">Curated for Perfection</div>

          {/* Heading */}

          <h1>
            Candy Walls for
            <br />
            Every
            <br />
            <span>Celebration</span>
          </h1>

          {/* Description */}

          <p>
            Whether you're planning a corporate gathering, milestone birthday,
            baby shower, wedding, or graduation party, Mr. Andy transforms
            events into unforgettable experiences.
          </p>

          {/* Buttons */}

          <div className="hero-buttons">
            <Button>Book Your Event</Button>

            <Button variant="secondary">View Packages</Button>
          </div>
        </div>

        {/* =========================================
            RIGHT IMAGE
        ========================================= */}

        <div className="hero-image">
          <img src={heroImage} alt="Mr. Andy Candy Wall" />

          {/* Floating Cards */}

          {floatingCards.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
