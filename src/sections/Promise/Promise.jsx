import "./Promise.css";
import { Heart } from "lucide-react";

export default function Promise() {
  return (
    <section className="promise-section">
      <div className="promise-container">
        <div className="promise-icon">
          <Heart fill="white" strokeWidth={1.5} size={44} />
        </div>

        <h2>Our Promise</h2>

        <blockquote>
          “We believe the smallest details often create the biggest memories.
          Our promise is to deliver a moment of pure, unadulterated joy to every
          single guest.”
        </blockquote>

        <span className="promise-divider"></span>

        <p className="promise-author">— THE MR. ANDY TEAM</p>
      </div>
    </section>
  );
}
