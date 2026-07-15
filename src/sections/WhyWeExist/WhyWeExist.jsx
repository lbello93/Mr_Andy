import "./WhyWeExist.css";
import image from "../../../public/gallery/gallery3.png";
import { features } from "./whyData";
import FeatureItem from "./FeatureItem";

export default function WhyWeExist() {
  return (
    <section className="exist-section">
      <div className="exist-container">
        {/* Left */}

        <div className="exist-image-wrapper">
          <img src={image} alt="Candy Wall" className="exist-image" />

          <div className="quote-card">
            <p>
              "It wasn't just a snack, it was the centerpiece of the whole
              conversation."
            </p>

            <span>— Sarah J, Event Planner</span>
          </div>
        </div>

        {/* Right */}

        <div className="exist-content">
          <h2>Why We Exist</h2>

          <p>
            Events are filled with décor that people look at. We wanted to
            create something people
            <strong> experience.</strong>
          </p>

          <p>
            In a world of digital interactions, there's something tactile and
            nostalgic about choosing your favorite treats from a beautifully lit
            wall. We exist to bridge the gap between childhood wonder and adult
            sophistication.
          </p>

          <div className="exist-features">
            {features.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
