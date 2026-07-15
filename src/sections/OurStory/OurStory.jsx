import "./OurStory.css";
import StoryCard from "./StoryCard";
import { storyCards } from "./storyData";

export default function OurStory() {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-header">
          <h2>The Alchemy of Joy</h2>

          <span className="story-divider"></span>

          <p>
            What started as a simple idea to reinvent event dessert stations has
            evolved into a full-scale creative agency dedicated to the art of
            the "Candy Wall." Our signature experience combines meticulous event
            styling with an irresistible selection of artisanal candies from
            around the globe.
          </p>

          <blockquote>
            "We don't just provide sweets; we curate an atmosphere of
            sophisticated indulgence."
          </blockquote>
        </div>

        <div className="story-grid">
          {storyCards.map((card) => (
            <StoryCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
