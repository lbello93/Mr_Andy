import { Link } from "react-router-dom";

const AboutHero = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        /* =========================================
           ABOUT HERO
        ========================================= */

        .andy-about-hero {
          width: 100%;
          min-height: 890px;

          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 100px 64px;

          background: #ffffff;

          overflow: hidden;
        }

        .andy-about-hero__container {
          width: 100%;
          max-width: 1152px;

          display: grid;
          grid-template-columns: 1fr 1fr;

          align-items: center;

          gap: 48px;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .andy-about-hero__content {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          min-width: 0;
        }

        /* =========================================
           TAG
        ========================================= */

        .andy-about-hero__tag {
          display: block;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;

          letter-spacing: 1.6px;
          text-transform: uppercase;

          color: #b90235;
        }

        /* =========================================
           HEADING
        ========================================= */

        .andy-about-hero__title {
          width: 100%;

          margin: 24px 0 0;

          font-family: "Playfair Display", serif;
          font-size: 72px;
          font-weight: 700;
          line-height: 1.1;

          letter-spacing: -1.8px;

          color: #1c1b1b;
        }

        .andy-about-hero__title-highlight {
          color: #b90235;
        }

        /* =========================================
           DESCRIPTION
        ========================================= */

        .andy-about-hero__description {
          width: 100%;
          max-width: 520px;

          margin: 28px 0 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 29px;

          color: #5b4041;
        }

        /* =========================================
           BUTTONS
        ========================================= */

        .andy-about-hero__actions {
          width: 100%;

          display: flex;
          align-items: center;

          gap: 16px;

          margin-top: 30px;
        }

        .andy-about-hero__button {
          height: 53px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;

          padding: 0 28px;

          border-radius: 999px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 17px;

          letter-spacing: 0.7px;

          text-decoration: none;

          white-space: nowrap;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease;
        }

        /* Primary */

        .andy-about-hero__button--primary {
          width: 191px;

          color: #ffffff;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            #b90235;

          box-shadow:
            0 12px 25px rgba(185, 2, 53, 0.12);
        }

        .andy-about-hero__button--primary:hover {
          transform: translateY(-2px);

          box-shadow:
            0 16px 30px rgba(185, 2, 53, 0.18);
        }

        /* Secondary */

        .andy-about-hero__button--secondary {
          width: 187px;

          color: #b90235;

          background: #ffffff;

          border: 2px solid #b90235;
        }

        .andy-about-hero__button--secondary:hover {
          transform: translateY(-2px);

          background: #fff5f7;
        }

        /* =========================================
           RIGHT IMAGE
        ========================================= */

        .andy-about-hero__image {
          width: 100%;
          height: 690px;

          border-radius: 32px;

          overflow: hidden;

          background-image: url("/svg/abouthero.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;

          box-shadow:
            0 20px 25px -5px rgba(185, 2, 53, 0.08);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1100px) {
          .andy-about-hero {
            min-height: auto;

            padding: 80px 40px;
          }

          .andy-about-hero__container {
            gap: 35px;
          }

          .andy-about-hero__title {
            font-size: 56px;
            line-height: 1.1;
          }

          .andy-about-hero__description {
            font-size: 16px;
            line-height: 27px;
          }

          .andy-about-hero__image {
            height: 600px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .andy-about-hero {
            min-height: auto;

            padding: 70px 24px;
          }

          .andy-about-hero__container {
            display: flex;
            flex-direction: column;

            gap: 45px;
          }

          .andy-about-hero__content {
            align-items: center;

            text-align: center;
          }

          .andy-about-hero__tag {
            font-size: 14px;
            line-height: 22px;

            letter-spacing: 1.4px;
          }

          .andy-about-hero__title {
            margin-top: 20px;

            font-size: 48px;
            line-height: 1.08;

            letter-spacing: -0.8px;

            text-align: center;
          }

          .andy-about-hero__description {
            max-width: 550px;

            margin-top: 22px;

            font-size: 16px;
            line-height: 26px;

            text-align: center;
          }

          .andy-about-hero__actions {
            width: 100%;

            margin-top: 26px;

            justify-content: center;

            flex-wrap: wrap;
          }

          .andy-about-hero__image {
            width: 100%;
            height: 550px;

            border-radius: 28px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .andy-about-hero {
            padding: 55px 18px;
          }

          .andy-about-hero__container {
            gap: 35px;
          }

          .andy-about-hero__tag {
            font-size: 12px;
            line-height: 20px;

            letter-spacing: 1.2px;
          }

          .andy-about-hero__title {
            font-size: 39px;
            line-height: 1.1;
          }

          .andy-about-hero__description {
            margin-top: 20px;

            font-size: 15px;
            line-height: 24px;
          }

          .andy-about-hero__actions {
            flex-direction: column;

            gap: 12px;

            margin-top: 25px;
          }

          .andy-about-hero__button {
            width: 100%;
            max-width: 300px;
          }

          .andy-about-hero__image {
            height: 450px;

            border-radius: 24px;
          }
        }
      `}</style>

      <section className="andy-about-hero">
        <div className="andy-about-hero__container">
          {/* LEFT */}
          <div className="andy-about-hero__content">
            <span className="andy-about-hero__tag">
              Crafting Sweet Memories
            </span>

            <h1 className="andy-about-hero__title">
              We Don't Just
              <br />
              Serve Candy.
              <br />
              <span className="andy-about-hero__title-highlight">
                We Create
                <br />
                Moments.
              </span>
            </h1>

            <p className="andy-about-hero__description">
              At Mr. Andy, we believe every celebration deserves a little
              wonder. Our custom installations transform treats into high-end
              art.
            </p>

            {/* BUTTONS */}
            <div className="andy-about-hero__actions">
              <Link
                to="/events"
                className="andy-about-hero__button andy-about-hero__button--primary"
              >
                View Our Work
              </Link>

              <Link
                to="/packages"
                className="andy-about-hero__button andy-about-hero__button--secondary"
              >
                Our Packages
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="andy-about-hero__image"
            role="img"
            aria-label="People interacting with a candy wall"
          />
        </div>
      </section>
    </>
  );
};

export default AboutHero;
