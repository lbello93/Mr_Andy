import {
  UserRound,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";
import "./CTA.css";

export default function CTA() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    // Connect your backend or email service here.
    console.log("Contact form submitted:", formData);
  };

  return (
    <section id="contact" className="cta-section">
      <div className="contact-section-container">
        <div className="contact-card">
          {/* Left: Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-heading">
              Drop us
              <br />
              <span>a Message</span>
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-input">
                <UserRound size={16} />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contact-input">
                <Phone size={16} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  aria-label="Phone Number"
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="contact-input">
                <Mail size={16} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="contact-input contact-message-input">
                <MessageCircle size={16} />
                <textarea
                  name="message"
                  placeholder="Tell us what you're imagining..."
                  aria-label="Your message"
                  required
                />
              </label>

              <button type="submit" className="contact-submit">
                <span>Send Us A Message</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="contact-details-section">
            <h2 className="contact-heading">
              Contact <span>Us</span>
            </h2>

            <div className="contact-details-list">
              <a href="tel:8326332404" className="contact-detail">
                <span className="contact-detail-icon">
                  <Phone size={16} fill="currentColor" />
                </span>
                <span>832-633-2404</span>
              </a>

              <a
                href="mailto:mrandycandywall@gmail.com"
                className="contact-detail"
              >
                <span className="contact-detail-icon">
                  <Mail size={16} />
                </span>
                <span className="contact-email">mrandycandywall@gmail.com</span>
              </a>

              <div className="contact-detail">
                <span className="contact-detail-icon">
                  <MapPin size={16} />
                </span>
                <span>Houston, TX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
