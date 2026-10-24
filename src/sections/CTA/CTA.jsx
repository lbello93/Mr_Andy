import { useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import "./CTA.css";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    // TODO: Connect a backend or email service to deliver submissions.
    console.log("Contact form submitted:", formData);

    form.reset();
    setStatus("success");
  };

  const handleChange = () => {
    setStatus("idle");
  };

  const scrollToForm = (event) => {
    event.preventDefault();

    const formCard = document.getElementById("contact-form");

    if (formCard) {
      formCard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="contact" className="cta-section">
      {/* Decorative candy shapes */}
      <span className="cta-candy cta-candy-red" aria-hidden="true" />
      <span className="cta-candy cta-candy-yellow" aria-hidden="true" />
      <span className="cta-candy cta-candy-green" aria-hidden="true" />

      <div className="cta-container">
        {/* Left: Main CTA */}
        <div className="cta-content">
          <span className="cta-eyebrow">MADE FOR SWEET MOMENTS</span>

          <h2 className="cta-heading">
            Let's Create
            <br />
            Something
            <br />
            <span>Sweet</span>
          </h2>

          <p className="cta-description">
            Whether you're planning an intimate gathering or a large-scale
            celebration, we're here to help make it unforgettable. Contact our
            design team to start brainstorming your custom candy installation.
          </p>

          <a
            href="#contact-form"
            onClick={scrollToForm}
            className="cta-primary-button"
          >
            <span>Get Started</span>
            <ArrowRight size={19} aria-hidden="true" />
          </a>

          <div className="cta-trust-note">
            <span className="cta-trust-dot" aria-hidden="true" />
            Let's make your next celebration unforgettable.
          </div>
        </div>

        {/* Right: Contact Form Card */}
        <div className="cta-form-card" id="contact-form">
          <div className="cta-form-heading">
            <span className="cta-form-eyebrow">LET'S TALK DETAILS</span>

            <h3>Drop us a Message</h3>

            <p>
              Tell us what you're imagining. We'd love to hear about your
              celebration.
            </p>
          </div>

          <form
            className="cta-form"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            {/* Name */}
            <label className="cta-input-wrapper">
              <span className="cta-input-icon">
                <UserRound size={17} aria-hidden="true" />
              </span>

              <input
                type="text"
                name="name"
                placeholder="Name"
                aria-label="Name"
                autoComplete="name"
                required
              />
            </label>

            {/* Phone */}
            <label className="cta-input-wrapper">
              <span className="cta-input-icon">
                <Phone size={17} aria-hidden="true" />
              </span>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                aria-label="Phone Number"
                autoComplete="tel"
                required
              />
            </label>

            {/* Email */}
            <label className="cta-input-wrapper">
              <span className="cta-input-icon">
                <Mail size={17} aria-hidden="true" />
              </span>

              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                autoComplete="email"
                required
              />
            </label>

            {/* Message */}
            <label className="cta-input-wrapper cta-textarea-wrapper">
              <span className="cta-input-icon">
                <MessageCircle size={17} aria-hidden="true" />
              </span>

              <textarea
                name="message"
                placeholder="Tell us what you're imagining..."
                aria-label="Your message"
                rows={3}
                required
              />
            </label>

            {/* Submit */}
            <button type="submit" className="cta-submit-button">
              <span>Contact Us</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>

            {/* Form status */}
            <p className="cta-form-status" aria-live="polite">
              {status === "success" ? (
                <span className="cta-success-message">
                  <CheckCircle2 size={16} aria-hidden="true" />
                  Your form was submitted locally. Email delivery still needs to
                  be connected.
                </span>
              ) : (
                "We can't wait to hear your ideas!"
              )}
            </p>
          </form>

          {/* Contact Information */}
          <div className="cta-card-contact">
            <a href="tel:+18326332404">
              <Phone size={14} aria-hidden="true" />
              832-633-2404
            </a>

            <a href="mailto:mrandycandywall@gmail.com">
              <Mail size={14} aria-hidden="true" />
              Email us
            </a>

            <span>
              <MapPin size={14} aria-hidden="true" />
              Houston, TX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
