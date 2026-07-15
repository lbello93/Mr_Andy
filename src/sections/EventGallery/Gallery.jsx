import { ArrowRight } from "lucide-react";
import "./Gallery.css";
import gallery from "./galleryData";

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        {/* Header */}

        <div className="gallery-header">
          <div>
            <h2>{gallery.title}</h2>
            <p>{gallery.subtitle}</p>
          </div>

          <button className="gallery-link">
            EXPLORE ALL
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Images */}

        <div className="gallery-grid">
          <div className="gallery-large">
            <img src={gallery.featured} alt="" />
          </div>

          <div className="gallery-side">
            {gallery.sideImages.map((image, index) => (
              <div className="gallery-small" key={index}>
                <img src={image} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
