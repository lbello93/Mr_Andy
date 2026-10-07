import { Heart } from "lucide-react";

export default function Promise() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        /* =========================================
           OUR PROMISE
        ========================================= */

        .promise-section {
          width: 100%;
          min-height: 618.46px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 96px 24px;

          background: #eb436d;
        }

        .promise-container {
          width: 100%;
          max-width: 768px;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 31px;
        }

        /* =========================================
           Heart Icon
        ========================================= */

        .promise-icon {
          width: 50px;
          height: 45.88px;

          display: flex;
          justify-content: center;
          align-items: center;

          color: #ffffff;
        }

        .promise-icon svg {
          width: 50px;
          height: 45.88px;

          fill: #ffffff;
          stroke: #ffffff;

          stroke-width: 1.5;
        }

        /* =========================================
           Heading
        ========================================= */

        .promise-container h2 {
          width: 100%;
          height: 58.59px;

          margin: 0;
          padding: 0 0 0.59px;

          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: "Playfair Display", serif;
          font-style: normal;
          font-weight: 700;

          font-size: 48px;
          line-height: 58px;

          text-align: center;

          color: #ffffff;
        }

        /* =========================================
           Quote
        ========================================= */

        .promise-quote-container {
          width: 100%;
          height: 178px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          padding: 1px 0 17px;
        }

        .promise-quote {
          width: 733px;
          max-width: 100%;
          height: 160px;

          margin: 0;

          display: block;

          font-family: "Playfair Display", serif;
          font-style: italic;
          font-weight: 400;

          font-size: 36px;
          line-height: 40px;

          text-align: center;

          color: #ffffff;
        }

        /* Yellow highlighted text */

        .promise-highlight {
          color: #fcd03d;
        }

        /* =========================================
           Divider
        ========================================= */

        .promise-divider {
          width: 64px;
          height: 2px;

          flex-shrink: 0;

          background: rgba(255, 255, 255, 0.3);

          border-radius: 9999px;
        }

        /* =========================================
           Author
        ========================================= */

        .promise-author-container {
          width: 100%;
          height: 18px;

          box-sizing: border-box;

          display: flex;
          flex-direction: column;
          align-items: center;

          padding: 1px 0 0;
        }

        .promise-author {
          width: 181.5px;
          height: 17px;

          margin: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 700;

          font-size: 14px;
          line-height: 17px;

          text-align: center;

          letter-spacing: 1.4px;

          color: #ffffff;
        }

        /* =========================================
           Tablet
        ========================================= */

        @media (max-width: 800px) {
          .promise-section {
            min-height: auto;
            padding: 90px 32px;
          }

          .promise-container {
            max-width: 700px;
          }

          .promise-quote {
            width: 100%;

            font-size: 32px;
            line-height: 38px;
          }
        }

        /* =========================================
           Mobile
        ========================================= */

        @media (max-width: 600px) {
          .promise-section {
            padding: 75px 24px;
          }

          .promise-container {
            gap: 26px;
          }

          .promise-icon {
            width: 44px;
            height: 42px;
          }

          .promise-icon svg {
            width: 44px;
            height: 42px;
          }

          .promise-container h2 {
            height: auto;

            font-size: 40px;
            line-height: 48px;
          }

          .promise-quote-container {
            height: auto;
            padding: 0;
          }

          .promise-quote {
            width: 100%;
            height: auto;

            font-size: 27px;
            line-height: 34px;
          }

          .promise-divider {
            margin-top: 5px;
          }

          .promise-author-container {
            height: auto;
          }

          .promise-author {
            width: auto;

            font-size: 12px;
            line-height: 16px;

            letter-spacing: 1.2px;
          }
        }

        /* =========================================
           Small Mobile
        ========================================= */

        @media (max-width: 400px) {
          .promise-section {
            padding: 65px 20px;
          }

          .promise-container {
            gap: 23px;
          }

          .promise-container h2 {
            font-size: 36px;
            line-height: 44px;
          }

          .promise-quote {
            font-size: 24px;
            line-height: 31px;
          }

          .promise-author {
            font-size: 11px;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <section className="promise-section">
        <div className="promise-container">
          {/* Heart */}
          <div className="promise-icon">
            <Heart fill="white" stroke="white" strokeWidth={1.5} size={50} />
          </div>

          {/* Heading */}
          <h2>Our Promise</h2>

          {/* Quote */}
          <div className="promise-quote-container">
            <blockquote className="promise-quote">
              “We believe the smallest details often{" "}
              <span className="promise-highlight">
                create the biggest memories.
              </span>{" "}
              Our promise is to deliver a moment of pure, unadulterated joy to
              every single guest.”
            </blockquote>
          </div>

          {/* Divider */}
          <span className="promise-divider" />

          {/* Author */}
          <div className="promise-author-container">
            <p className="promise-author">— THE MR. ANDY TEAM</p>
          </div>
        </div>
      </section>
    </>
  );
}
