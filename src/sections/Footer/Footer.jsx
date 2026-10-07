import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        /* =========================
           Footer
        ========================= */

        .site-footer {
          position: relative;
          width: 100%;
          min-height: 402px;
          box-sizing: border-box;

          background: #eb436d;
          color: #ffffff;

          overflow: hidden;
        }

        .footer-inner {
          width: 83.6%;
          max-width: 1070px;
          min-height: 402px;

          margin: 0 auto;

          display: grid;
          grid-template-columns: 1.7fr 0.9fr 1fr;

          column-gap: 70px;

          align-items: center;

          padding: 60px 0;
          box-sizing: border-box;
        }

        /* =========================
           Logo Section
        ========================= */

        .footer-brand {
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .footer-logo {
          width: 360px;
          max-width: 100%;
          height: auto;

          object-fit: contain;
          display: block;
        }

        /* =========================
           Footer Headings
        ========================= */

        .footer-heading {
          margin: 0 0 28px;

          font-family: "Playfair Display", serif;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 28px;

          color: #ffffff;
        }

        /* =========================
           Quick Links
        ========================= */

        .footer-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
        }

        .footer-link {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;

          color: #ffffff;

          text-decoration: none;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .footer-link:hover {
          opacity: 0.75;
          transform: translateX(3px);
        }

        /* =========================
           Contact Section
        ========================= */

        .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .footer-contact-item {
          margin: 0 0 16px;

          font-family: "Plus Jakarta Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 20px;

          color: #ffffff;

          text-decoration: none;
        }

        .footer-contact-item:last-child {
          margin-bottom: 0;
        }

        .footer-contact-item:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* =========================
           Tablet
        ========================= */

        @media (max-width: 900px) {
          .footer-inner {
            width: 88%;
            grid-template-columns: 1.3fr 1fr 1fr;
            column-gap: 40px;
          }

          .footer-logo {
            width: 280px;
          }
        }

        /* =========================
           Mobile
        ========================= */

        @media (max-width: 700px) {
          .site-footer {
            min-height: auto;
          }

          .footer-inner {
            width: 100%;
            min-height: auto;

            padding: 70px 28px;

            display: flex;
            flex-direction: column;

            align-items: center;

            gap: 50px;
          }

          .footer-brand {
            width: 100%;
            justify-content: center;
          }

          .footer-logo {
            width: 280px;
          }

          .footer-links,
          .footer-contact {
            width: 100%;
            align-items: center;

            text-align: center;
          }

          .footer-heading {
            margin-bottom: 22px;
          }

          .footer-link,
          .footer-contact-item {
            text-align: center;
          }
        }

        /* =========================
           Small Mobile
        ========================= */

        @media (max-width: 400px) {
          .footer-inner {
            padding: 60px 20px;
            gap: 42px;
          }

          .footer-logo {
            width: 240px;
          }

          .footer-heading {
            font-size: 19px;
          }

          .footer-link,
          .footer-contact-item {
            font-size: 15px;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-inner">
          {/* Logo */}
          <div className="footer-brand">
            <img
              src="/svg/footer.svg"
              alt="Mr. Andy Candy Wall"
              className="footer-logo"
            />
          </div>

          {/* Quick Links */}
          <nav className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>

            <Link to="/packages" className="footer-link">
              Packages
            </Link>

            <Link to="/about" className="footer-link">
              About Us
            </Link>

            <Link to="/contact" className="footer-link">
              Book Custom Candy Wall
            </Link>

            <Link to="/gallery" className="footer-link">
              Gallery
            </Link>

            <Link to="/events" className="footer-link">
              Events
            </Link>
          </nav>

          {/* Contact */}
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>

            <a href="tel:8326332404" className="footer-contact-item">
              832-633-2404
            </a>

            <a
              href="mailto:mrandycandywall@gmail.com"
              className="footer-contact-item"
            >
              mrandycandywall@gmail.com
            </a>

            <p className="footer-contact-item">Houston, TX</p>
          </div>
        </div>
      </footer>
    </>
  );
}
