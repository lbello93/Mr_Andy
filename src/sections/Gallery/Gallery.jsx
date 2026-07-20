import "./Gallery.css";
import { ArrowUpRight } from "lucide-react";

const gallery1 = "/gallery/gallery1.png";
const gallery2 = "/gallery/gallery2.png";
const gallery3 = "/gallery/gallery3.png";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <div>
            <h2>The Visual Heart</h2>

            <p>Experience the scale and setup quality of MR. ANDY.</p>
          </div>

          <a href="/" className="gallery-link">
            Explore All
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="gallery-grid">
          <div className="gallery-card large">
            <img src={gallery1} alt="" />
          </div>

          <div className="gallery-right">
            <div className="gallery-card">
              <img src={gallery2} alt="" />
            </div>

            <div className="gallery-card">
              <img src={gallery3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
