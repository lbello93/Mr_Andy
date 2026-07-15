import "./Step5.css";

export default function Step5({ formData, setFormData }) {
  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="step-header">
        <h1>How do we reach you?</h1>
      </div>

      <div className="step5-form">
        <input
          type="text"
          placeholder="Full Name"
          className="contact-input"
          value={formData.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          className="contact-input"
          value={formData.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="contact-input"
          value={formData.phone || ""}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </div>
    </>
  );
}
