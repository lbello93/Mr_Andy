import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gallery from "./galleryData";

export default function Gallery() {
  return (
    <>
      <style>{`
        .gallery-section {
          width: 100%;
          padding: 100px 0;
          background: #fcf9f8;
        }

        .gallery-container {
          width: min(1152px, calc(100% - 48px));
          margin: 0 auto;
        }

        .gallery-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 40px;
        }

        .gallery-header h2 {
          margin: 0 0 12px;
          font-family: "Playfair Display", serif;
          font-size: 48px;
          line-height: 1.1;
          font-weight: 500;
          color: #1c1b1b;
        }

        .gallery-header p {
          margin: 0;
          max-width: 560px;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: #6b5556;
        }

        .gallery-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          padding: 12px 0;
          border: 0;
          background: transparent;
          color: #920027;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-decoration: none;
          cursor: pointer;
          transition:
            gap 0.25s ease,
            color 0.25s ease;
        }

        .gallery-link:hover {
          gap: 13px;
          color: #dd2a4b;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: 1.55fr 1fr;
          gap: 20px;
        }

        .gallery-large,
        .gallery-small {
          overflow: hidden;
          border-radius: 18px;
          background: #f3eaea;
        }

        .gallery-large {
          height: 560px;
        }

        .gallery-side {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 20px;
        }

        .gallery-small {
          min-height: 0;
        }

        .gallery-large img,
        .gallery-small img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-large:hover img,
        .gallery-small:hover img {
          transform: scale(1.04);
        }

        @media (max-width: 900px) {
          .gallery-section {
            padding: 80px 0;
          }

          .gallery-header h2 {
            font-size: 40px;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }

          .gallery-large {
            height: 480px;
          }

          .gallery-side {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 280px;
          }
        }

        @media (max-width: 600px) {
          .gallery-section {
            padding: 60px 0;
          }

          .gallery-container {
            width: min(100% - 32px, 1152px);
          }

          .gallery-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
            margin-bottom: 28px;
          }

          .gallery-header h2 {
            font-size: 34px;
          }

          .gallery-header p {
            font-size: 14px;
          }

          .gallery-grid {
            gap: 14px;
          }

          .gallery-large {
            height: 360px;
            border-radius: 14px;
          }

          .gallery-side {
            gap: 14px;
            grid-template-rows: 220px;
          }

          .gallery-small {
            border-radius: 14px;
          }
        }

        @media (max-width: 420px) {
          .gallery-side {
            grid-template-columns: 1fr;
            grid-template-rows: 220px 220px;
          }
        }
      `}</style>

      <section className="gallery-section">
        <div className="gallery-container">
          {/* Header */}
          <div className="gallery-header">
            <div>
              <h2>{gallery.title}</h2>
              <p>{gallery.subtitle}</p>
            </div>

            <Link to="/about" className="gallery-link">
              EXPLORE ALL
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Images */}
          <div className="gallery-grid">
            <div className="gallery-large">
              <img src={gallery.featured} alt="Mr. Andy Candy Wall" />
            </div>

            <div className="gallery-side">
              {gallery.sideImages.map((image, index) => (
                <div className="gallery-small" key={index}>
                  <img src={image} alt={`Mr. Andy Candy Wall ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
