import { useState } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "./CTA.css";

// Your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyxH-Z-5vF2r_zrFdC81fqYEHKV2-rNEmihpMqZPrFKtIN5ROb6ZpYcu3vwgJ2vXEMKJQ/exec";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    // Collect form fields using their name attributes.
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

      // no-cors does not allow the browser to inspect the server response.
      // Verify the submission by checking your Google Sheet.
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  };

  const handleChange = () => {
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="cta-section">
      <div className="cta-container">
        {/* Contact information */}
        <div className="cta-content">
          <span className="cta-eyebrow">LET'S MAKE IT SWEET</span>

          <h2 className="cta-title">
            Let's Make Your
            <br />
            Event <span>Unforgettable</span>
          </h2>

          <p className="cta-description">
            Planning a birthday, wedding, corporate event, or special
            celebration? We'd love to help make it memorable with our candy wall
            experience.
          </p>

          <div className="cta-contact-details">
            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <Phone size={20} aria-hidden="true" />
              </div>

              <div>
                <h3>Give Us a Call</h3>
                <p>Let's discuss your event.</p>
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <Mail size={20} aria-hidden="true" />
              </div>

              <div>
                <h3>Send Us an Email</h3>
                <p>Tell us what you're planning.</p>
              </div>
            </div>

            <div className="cta-contact-item">
              <div className="cta-contact-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>

              <div>
                <h3>Let's Plan Your Event</h3>
                <p>Share your ideas and we'll take it from there.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="cta-form-card" id="contact-form">
          <div className="cta-form-header">
            <div className="cta-form-icon">
              <MessageCircle size={24} aria-hidden="true" />
            </div>

            <div>
              <h3>Get in Touch</h3>
              <p>Tell us a little about your event.</p>
            </div>
          </div>

          <form
            className="cta-form"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            {/* Name */}
            <div className="cta-form-group">
              <label htmlFor="contact-name">Your Name</label>

              <div className="cta-input-wrapper">
                <UserRound
                  size={18}
                  className="cta-input-icon"
                  aria-hidden="true"
                />

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  maxLength={150}
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="cta-form-group">
              <label htmlFor="contact-phone">Phone Number</label>

              <div className="cta-input-wrapper">
                <Phone
                  size={18}
                  className="cta-input-icon"
                  aria-hidden="true"
                />

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  maxLength={50}
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="cta-form-group">
              <label htmlFor="contact-email">Email Address</label>

              <div className="cta-input-wrapper">
                <Mail size={18} className="cta-input-icon" aria-hidden="true" />

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="cta-form-group">
              <label htmlFor="contact-message">Tell Us About Your Event</label>

              <div className="cta-input-wrapper cta-textarea-wrapper">
                <MessageCircle
                  size={18}
                  className="cta-input-icon"
                  aria-hidden="true"
                />

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Event date, location, type of celebration, or any special requests..."
                  rows={4}
                  maxLength={5000}
                  required
                />
              </div>
            </div>

            {/* Submission status */}
            {status === "success" && (
              <div
                className="cta-form-status cta-success-message"
                role="status"
              >
                <CheckCircle2 size={18} aria-hidden="true" />

                <span>
                  Thank you! Your request has been submitted. Please verify that
                  it appears in Google Sheets.
                </span>
              </div>
            )}

            {status === "error" && (
              <div className="cta-form-status cta-error-message" role="alert">
                <AlertCircle size={18} aria-hidden="true" />

                <span>Something went wrong. Please try again.</span>
              </div>
            )}

            {status === "loading" && (
              <p className="cta-form-status" role="status">
                Submitting your request...
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="cta-submit-button"
              disabled={status === "loading"}
            >
              <span>
                {status === "loading" ? "Submitting..." : "Contact Us"}
              </span>

              <ArrowRight size={18} aria-hidden="true" />
            </button>

            <p className="cta-form-note">
              We look forward to helping you make your celebration special!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
