import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        .cta-section {
          position: relative;
          width: 100%;
          min-height: 658px;
          box-sizing: border-box;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 127px 80px 128px;
          gap: 40px;

          overflow: hidden;
          isolation: isolate;

          background: #fff;
        }

        /* Decorative elements */
        .cta-decoration {
          position: absolute;
          border-radius: 9999px;
          pointer-events: none;
          z-index: 0;
        }

        .cta-decoration-pink {
          width: 1.25%;
          min-width: 16px;
          height: 16px;
          left: 10%;
          top: 80px;
          background: #dd2a4b;
          opacity: 0.2;
        }

        .cta-decoration-yellow {
          width: 2.5%;
          min-width: 32px;
          height: 32px;
          right: 15%;
          bottom: 80px;
          background: #fcd03d;
          opacity: 0.2;
        }

        .cta-decoration-green {
          width: 0.94%;
          min-width: 12px;
          height: 12px;
          left: 25%;
          top: calc(50% + 5px);
          background: #18684d;
          opacity: 0.1;
        }

        /* Main container */
        .cta-container {
          position: relative;
          width: 100%;
          max-width: 1092px;

          display: flex;
          justify-content: center;
          align-items: center;

          gap: 40px;

          z-index: 3;
        }

        /* Left content */
        .cta-content {
          width: 588px;
          max-width: 588px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          gap: 24px;
        }

        .cta-title {
          width: 100%;
          max-width: 621px;

          margin: 0;

          font-family: "Playfair Display", serif;
          font-style: normal;
          font-weight: 900;
          font-size: 64px;
          line-height: 79px;

          letter-spacing: -1.44px;

          color: #1c1b1b;
        }

        .cta-description {
          width: 100%;
          max-width: 570px;

          margin: 0;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 29px;

          color: #5b4041;
        }

        /* Main button */
        .cta-button {
          width: 332px;
          height: 71.8px;

          box-sizing: border-box;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 21.5px 40px;

          text-decoration: none;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            #b90235;

          border-radius: 9999px;

          box-shadow:
            0px 20px 25px -5px rgba(185, 2, 53, 0.08);

          font-family: "Plus Jakarta Sans", sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 28px;

          letter-spacing: 0.9px;

          color: #ffffff;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);

          box-shadow:
            0px 24px 30px -5px rgba(185, 2, 53, 0.15);
        }

        /* Contact card */
        .cta-signature {
          position: relative;

          box-sizing: border-box;

          width: 416px;
          min-width: 416px;
          height: 499px;

          padding: 48px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;

          background: #ffffff;

          border: 4px solid #dd2a4b;
          border-radius: 32px;

          box-shadow:
            0px 20px 25px -5px rgba(185, 2, 53, 0.08);
        }

        .cta-signature-content {
          width: 100%;

          display: flex;
          flex-direction: column;
          align-items: center;

          gap: 16px;
        }

        .cta-signature-title {
          width: 100%;

          margin: 0;

          font-family: "Playfair Display", serif;
          font-style: normal;
          font-weight: 700;
          font-size: 32px;
          line-height: 42px;

          text-align: center;

          color: #1c1b1b;
        }

        /* Form */
        .cta-form {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 16px;
        }

        .cta-form input,
        .cta-form textarea {
          width: 100%;

          box-sizing: border-box;

          border: 2px solid #eae7e7;
          border-radius: 12px;

          outline: none;

          background: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 400;

          color: #1c1b1b;

          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cta-form input {
          height: 38px;
          padding: 0 14px;
        }

        .cta-form textarea {
          height: 89px;
          padding: 12px 14px;
          resize: none;
        }

        .cta-form input::placeholder,
        .cta-form textarea::placeholder {
          color: #c7c7c7;
          opacity: 1;
        }

        .cta-form input:focus,
        .cta-form textarea:focus {
          border-color: #dd2a4b;

          box-shadow:
            0 0 0 3px rgba(221, 42, 75, 0.08);
        }

        /* Submit button */
        .cta-submit {
          width: 100%;
          height: 56px;

          padding: 16px 0;

          border: none;
          border-radius: 9999px;

          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            #b90235;

          box-shadow:
            0px 10px 15px -3px rgba(185, 2, 53, 0.2),
            0px 4px 6px -4px rgba(185, 2, 53, 0.2);

          color: #ffffff;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;

          cursor: pointer;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cta-submit:hover {
          transform: translateY(-2px);

          box-shadow:
            0px 14px 20px -3px rgba(185, 2, 53, 0.25),
            0px 5px 8px -4px rgba(185, 2, 53, 0.25);
        }

        /* Tablet */
        @media (max-width: 1050px) {
          .cta-section {
            padding: 90px 40px;
          }

          .cta-container {
            gap: 30px;
          }

          .cta-content {
            width: 50%;
          }

          .cta-title {
            font-size: 52px;
            line-height: 1.2;
          }

          .cta-signature {
            width: 380px;
            min-width: 380px;
            padding: 40px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .cta-section {
            min-height: auto;
            padding: 80px 24px;
          }

          .cta-container {
            flex-direction: column;
            gap: 50px;
          }

          .cta-content {
            width: 100%;
            max-width: 588px;
            align-items: center;
            text-align: center;
          }

          .cta-title {
            font-size: 44px;
            line-height: 1.15;
            letter-spacing: -0.8px;
          }

          .cta-description {
            font-size: 16px;
            line-height: 1.6;
          }

          .cta-button {
            width: 100%;
            max-width: 332px;
          }

          .cta-signature {
            width: 100%;
            min-width: 0;
            max-width: 416px;
            height: auto;
            min-height: 499px;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .cta-section {
            padding: 60px 18px;
          }

          .cta-title {
            font-size: 36px;
          }

          .cta-description {
            font-size: 15px;
          }

          .cta-signature {
            padding: 30px 22px;
            border-width: 3px;
            border-radius: 26px;
          }

          .cta-signature-title {
            font-size: 28px;
          }
        }
      `}</style>

      <section className="cta-section">
        {/* Decorative shapes */}
        <span className="cta-decoration cta-decoration-pink" />
        <span className="cta-decoration cta-decoration-yellow" />
        <span className="cta-decoration cta-decoration-green" />

        <div className="cta-container">
          {/* Left side */}
          <div className="cta-content">
            <h2 className="cta-title">Let's Create Something Sweet</h2>

            <p className="cta-description">
              Whether you're planning an intimate gathering or a large-scale
              celebration, we're here to help make it unforgettable. Contact our
              design team to start brainstorming your custom candy installation.
            </p>

            <Link to="/contact" className="cta-button">
              Custom Candy Installation
            </Link>
          </div>

          {/* Right side */}
          <div className="cta-signature">
            <div className="cta-signature-content">
              <h3 className="cta-signature-title">Drop us a Message</h3>

              <form
                className="cta-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <input type="text" name="name" placeholder="Name" />

                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Whatsapp Number"
                />

                <input type="email" name="email" placeholder="Email ID" />

                <textarea
                  name="message"
                  placeholder="Tell us what you’re imagining…"
                />

                <button type="submit" className="cta-submit">
                  Send Us A Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
