import "./EventHero.css";

import Button from "../../components/Button/Button";

import FloatingCard from "./FloatingCard";

import { floatingCards } from "./floatingCards";

import heroImage from "/gallery/gallery3.png";

export default function EventHero() {
  return (
    <section className="event-hero">
      <span className="hero-dot dot-one"></span>
      <span className="hero-dot dot-two"></span>
      <span className="hero-dot dot-three"></span>
      <span className="hero-dot dot-four"></span>
      <span className="hero-dot dot-five"></span>

      <div className="event-container">
        {/* LEFT */}

        <div className="hero-content">
          <div className="hero-pill">Curated for Perfection</div>

          <h1>
            Candy Walls for
            <br />
            Every
            <br />
            <span>Celebration</span>
          </h1>

          <p>
            Whether you're planning a corporate gathering, milestone birthday,
            baby shower, wedding, or graduation party, Mr. Andy transforms
            events into unforgettable experiences.
          </p>

          <div className="hero-buttons">
            <Button>Book Your Event</Button>

            <Button variant="secondary">View Packages</Button>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-image">
          <img src={heroImage} alt="Candy Wall" />

          {floatingCards.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
