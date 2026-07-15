import "./ContactSuccess.css";

import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import Button from "../../../components/Button/Button";
import Navbar from "../../../components/Navbar/Navbar";

export default function ContactSuccess() {
  return (
    <>
      <Navbar />
      <section className="contact-success">
        <div className="success-glow success-glow-left"></div>
        <div className="success-glow success-glow-right"></div>

        <div className="success-card">
          {/* Icon */}

          <div className="success-icon-wrapper">
            <CheckCircle2 size={90} strokeWidth={2.5} />
          </div>

          {/* Heading */}

          <div className="success-content">
            <h1>
              Sweet! We've
              <br />
              received your
              <br />
              enquiry.
            </h1>

            <p>
              Our team will get back to you within 24 hours with ideas,
              recommendations and a customised quote.
            </p>
          </div>

          {/* Buttons */}

          <div className="success-actions">
            <Button>
              Back Home
              <ArrowRight size={16} />
            </Button>

            <button className="secondary-btn">
              <Home size={16} />
              Explore Packages
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
