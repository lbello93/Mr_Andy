import { useState } from "react";
import "./Step5.css";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()\-+]{7,15}$/;

function validate(formData) {
  const errors = {};
  if (!formData.name.trim()) errors.name = "Full name is required.";
  if (!formData.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(formData.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!formData.phone.trim()) {
    errors.phone = "Phone number is required.";
  } else if (!PHONE_RE.test(formData.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  return errors;
}

export default function Step5({ formData, setFormData }) {
  // Track which fields the user has interacted with so we only
  // show errors after the first blur (not on initial render).
  const [touched, setTouched] = useState({});

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Only surface errors for fields the user has already touched.
  const errors = validate(formData);
  const visible = (field) => touched[field] && errors[field];

  return (
    <>
      <div className="step-header">
        <h1>How do we reach you?</h1>
      </div>

      <div className="step5-form">
        {/* Name */}
        <div className="field-group">
          <input
            type="text"
            placeholder="Full Name"
            className={`contact-input${
              visible("name") ? " contact-input--error" : ""
            }`}
            value={formData.name || ""}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
          />
          {visible("name") && (
            <span className="field-error">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="field-group">
          <input
            type="email"
            placeholder="Email Address"
            className={`contact-input${
              visible("email") ? " contact-input--error" : ""
            }`}
            value={formData.email || ""}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {visible("email") && (
            <span className="field-error">{errors.email}</span>
          )}
        </div>

        {/* Phone */}
        <div className="field-group">
          <input
            type="tel"
            placeholder="Phone Number"
            className={`contact-input${
              visible("phone") ? " contact-input--error" : ""
            }`}
            value={formData.phone || ""}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
          />
          {visible("phone") && (
            <span className="field-error">{errors.phone}</span>
          )}
        </div>
      </div>
    </>
  );
}
