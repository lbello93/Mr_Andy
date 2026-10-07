import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        /* =========================================
           ABOUT HERO
        ========================================= */

        .about-hero {
          width: 100%;
          min-height: 890px;

          box-sizing: border-box;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 100px 64px;

          background: #ffffff;
        }

        .about-hero-container {
          width: 100%;
          max-width: 1152px;
          height: 690px;

          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;

          gap: 48px;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .about-hero-content {
          width: 552px;
          height: 559.69px;

          flex: 1;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 15.3px;
        }

        /* Small label */

        .hero-tag {
          width: 100%;
          height: 24px;

          display: flex;
          align-items: center;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;

          font-size: 16px;
          line-height: 24px;

          letter-spacing: 1.6px;
          text-transform: uppercase;

          color: #b90235;
        }

        /* =========================================
           Heading
        ========================================= */

        .about-hero-content h1 {
          width: 100%;
          height: 317px;

          margin: 0;

          display: flex;
          flex-direction: column;
          justify-content: center;

          font-family: "Playfair Display", serif;
          font-style: normal;
          font-weight: 700;

          font-size: 72px;
          line-height: 79px;

          letter-spacing: -1.44px;

          color: #1c1b1b;
        }

        .about-hero-content h1 span {
          color: #b90235;
        }

        /* =========================================
           Description
        ========================================= */

        .about-hero-description {
          width: 512px;
          max-width: 512px;

          min-height: 95.09px;

          padding: 7.495px 0 0.595px;

          box-sizing: border-box;

          display: flex;
          align-items: center;
        }

        .about-hero-description p {
          width: 502.23px;
          height: 87px;

          margin: 0;

          display: flex;
          align-items: center;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;

          font-size: 18px;
          line-height: 29px;

          color: #5b4041;
        }

        /* =========================================
           Buttons
        ========================================= */

        .hero-buttons {
          width: 552px;
          height: 77.7px;

          box-sizing: border-box;

          display: flex;
          flex-direction: row;
          align-items: flex-start;

          padding: 24.7px 0 0;

          gap: 16px;
        }

        .hero-primary-button,
        .hero-secondary-button {
          box-sizing: border-box;

          height: 53px;

          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 9999px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 14px;
          line-height: 17px;

          letter-spacing: 0.7px;

          text-decoration: none;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        /* Primary */

        .hero-primary-button {
          width: 191.02px;

          padding: 17.5px 32px;

          color: #ffffff;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            #b90235;

          box-shadow:
            0px 20px 25px -5px rgba(185, 2, 53, 0.08);
        }

        .hero-primary-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0px 24px 30px -5px rgba(185, 2, 53, 0.15);
        }

        /* Secondary */

        .hero-secondary-button {
          width: 186.88px;

          padding: 16px 32px;

          border: 2px solid #b90235;

          color: #b90235;

          background: #ffffff;
        }

        .hero-secondary-button:hover {
          transform: translateY(-2px);

          background: #fff5f7;
        }

        /* =========================================
           RIGHT IMAGE
        ========================================= */

        .about-hero-image {
          width: 552px;
          height: 690px;

          flex: 1;

          border-radius: 32px;

          overflow: hidden;

          background-image: url("/svg/abouthero.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          box-shadow:
            0px 20px 25px -5px rgba(185, 2, 53, 0.08);
        }

        /* =========================================
           Tablet
        ========================================= */

        @media (max-width: 1100px) {
          .about-hero {
            padding: 80px 40px;
          }

          .about-hero-container {
            height: auto;
            gap: 35px;
          }

          .about-hero-content {
            width: 50%;
            height: auto;
          }

          .about-hero-content h1 {
            height: auto;
            font-size: 56px;
            line-height: 1.1;
          }

          .about-hero-description {
            width: 100%;
            height: auto;
          }

          .about-hero-description p {
            width: 100%;
            height: auto;
          }

          .hero-buttons {
            width: 100%;
          }

          .about-hero-image {
            width: 50%;
            height: 600px;
          }
        }

        /* =========================================
           Mobile
        ========================================= */

        @media (max-width: 768px) {
          .about-hero {
            min-height: auto;

            padding: 70px 24px;
          }

          .about-hero-container {
            width: 100%;
            height: auto;

            flex-direction: column;
            align-items: stretch;

            gap: 45px;
          }

          .about-hero-content {
            width: 100%;
            height: auto;

            align-items: center;
          }

          .hero-tag {
            justify-content: center;

            text-align: center;

            font-size: 14px;
            letter-spacing: 1.4px;
          }

          .about-hero-content h1 {
            width: 100%;
            height: auto;

            font-size: 48px;
            line-height: 1.08;

            letter-spacing: -0.8px;

            text-align: center;

            align-items: center;
          }

          .about-hero-description {
            width: 100%;
            max-width: 550px;

            padding: 0;
          }

          .about-hero-description p {
            width: 100%;
            height: auto;

            font-size: 16px;
            line-height: 26px;

            text-align: center;
          }

          .hero-buttons {
            width: 100%;
            height: auto;

            padding: 10px 0 0;

            justify-content: center;
            align-items: center;

            flex-wrap: wrap;
          }

          .about-hero-image {
            width: 100%;
            height: 550px;

            flex: none;

            border-radius: 28px;
          }
        }

        /* =========================================
           Small Mobile
        ========================================= */

        @media (max-width: 480px) {
          .about-hero {
            padding: 55px 18px;
          }

          .about-hero-container {
            gap: 35px;
          }

          .hero-tag {
            font-size: 12px;
            letter-spacing: 1.2px;
          }

          .about-hero-content h1 {
            font-size: 39px;
            line-height: 1.1;
          }

          .about-hero-description p {
            font-size: 15px;
            line-height: 24px;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .hero-primary-button,
          .hero-secondary-button {
            width: 100%;
            max-width: 300px;
          }

          .about-hero-image {
            height: 450px;
            border-radius: 24px;
          }
        }
      `}</style>

      <section className="about-hero">
        <div className="about-hero-container">
          {/* =========================
              LEFT CONTENT
          ========================= */}

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

            <div className="about-hero-description">
              <p>
                At Mr. Andy, we believe every celebration deserves a little
                wonder. Our custom installations transform treats into high-end
                art.
              </p>
            </div>

            <div className="hero-buttons">
              <Link to="/gallery" className="hero-primary-button">
                View Our Work
              </Link>

              <Link to="/packages" className="hero-secondary-button">
                Our Packages
              </Link>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}

          <div
            className="about-hero-image"
            role="img"
            aria-label="People interacting with a candy wall"
          />
        </div>
      </section>
    </>
  );
}
