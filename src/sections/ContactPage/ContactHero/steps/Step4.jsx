import "./Step4.css";

export default function Step4({ formData, setFormData }) {
  return (
    <>
      <div className="step-header">
        <h1>Tell us Your Vision!</h1>
      </div>

      <div className="step4-form">
        <label className="vision-label">Share your ideas</label>

        <textarea
          className="vision-input"
          placeholder="Describe moods, colors or any specific requests"
          value={formData.vision || ""}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              vision: e.target.value,
            }))
          }
        />
      </div>
    </>
  );
}
