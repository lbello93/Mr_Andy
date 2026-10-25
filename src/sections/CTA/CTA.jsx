import { useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "./CTA.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx8E08a6o2H7VIJ56DVgmxBh8zJq9kLzgDSU4UUVoxkSZ4heoz56PX47vekDlXbK2kglQ/exec";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form));

    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        {/* Left content */}
        <div className="cta-content">
          <span className="cta-eyebrow">Let's make it sweet</span>

          <h2 className="cta-title">
            Let's Create
            <br />
            Something Sweet
          </h2>

          <p className="cta-description">
            Whether you're planning an intimate gathering or a large-scale
            celebration, we're here to help make it unforgettable. Contact our
            team to start brainstorming your custom candy installation.
          </p>

          <a href="#contact-form" className="cta-get-started">
            Get Started
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        {/* Right contact form */}
        <div className="cta-form-card" id="contact-form">
          <div className="cta-form-header">
            <h3>Drop us a Message</h3>
          </div>

          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="cta-form-group">
              <label htmlFor="contact-name">Your Name</label>
              <div className="cta-input-wrapper">
                <UserRound
                  size={16}
                  className="cta-input-icon"
                  aria-hidden="true"
                />
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  maxLength={150}
                  required
                  onChange={() => setStatus("idle")}
                />
              </div>
            </div>

            <div className="cta-form-group">
              <label htmlFor="contact-phone">Phone Number</label>
              <div className="cta-input-wrapper">
                <Phone
                  size={16}
                  className="cta-input-icon"
                  aria-hidden="true"
                />
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  autoComplete="tel"
                  maxLength={50}
                  required
                  onChange={() => setStatus("idle")}
                />
              </div>
            </div>

            <div className="cta-form-group">
              <label htmlFor="contact-email">Email Address</label>
              <div className="cta-input-wrapper">
                <Mail size={16} className="cta-input-icon" aria-hidden="true" />
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  onChange={() => setStatus("idle")}
                />
              </div>
            </div>

            <div className="cta-form-group">
              <label htmlFor="contact-message">Message</label>
              <div className="cta-input-wrapper cta-textarea-wrapper">
                <MessageCircle
                  size={16}
                  className="cta-input-icon"
                  aria-hidden="true"
                />
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us what you're imagining..."
                  rows={3}
                  maxLength={5000}
                  required
                  onChange={() => setStatus("idle")}
                />
              </div>
            </div>

            {status === "success" && (
              <p className="cta-form-status cta-success-message" role="status">
                <CheckCircle2 size={16} aria-hidden="true" />
                Thank you! Your request has been submitted.
              </p>
            )}

            {status === "error" && (
              <p className="cta-form-status cta-error-message" role="alert">
                <AlertCircle size={16} aria-hidden="true" />
                Something went wrong. Please try again.
              </p>
            )}

            {status === "loading" && (
              <p className="cta-form-status" role="status">
                Submitting your request...
              </p>
            )}

            <button
              type="submit"
              className="cta-submit-button"
              disabled={status === "loading"}
            >
              <span>
                {status === "loading" ? "Submitting..." : "Contact Us"}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
