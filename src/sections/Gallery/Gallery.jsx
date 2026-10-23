import "./Gallery.css";
import { ArrowUpRight } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery/gallery1.png",
    alt: "Guests exploring the MR. ANDY candy wall",
  },
  {
    src: "/gallery/gallery2.png",
    alt: "Close-up of the premium candy dispensers",
  },
  {
    src: "/gallery/gallery3.png",
    alt: "MR. ANDY candy wall display at an event",
  },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-heading-content">
            <h2>The Visual Heart</h2>
            <p>Experience the scale and setup quality of MR. ANDY.</p>
          </div>

          <a href="/packages" className="gallery-link">
            Explore All
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article className="gallery-card" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
