import { useState } from "react";
import "./ContactHero.css";
import Button from "../ContactHero/Button/Button";
import OptionCard from "../../../components/Option/OptionCard";
import ProgressBar from "./Progress/ProgressBar";
import { stepImages } from "./images";
import { occasions } from "./data";
import { useNavigate } from "react-router-dom";

import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

export default function ContactHero() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    occasion: "",
    guests: "",
    date: "",
    vision: "",
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = (overrides = {}) => {
    const data = { ...formData, ...overrides };

    if (step === 1) {
      if (!data.occasion) return;
    }

    if (step === 2) {
      if (!data.guests) return;
    }

    if (step === 3) {
      if (!data.date) return;
    }

    if (step === 4) {
      if (!data.vision.trim()) return;
    }

    if (step === 5) {
      const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!data.name || !data.email || !data.phone) return;

      if (!EMAIL_RE.test(data.email.trim())) return;

      console.log("Form Submitted:", data);

      // TODO: Send to backend

      navigate("/contact/success");

      return;
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  const getCurrentImage = () => {
    if (step === 1) {
      return stepImages[1];
    }

    return stepImages[step]?.[formData.occasion] ?? stepImages[1];
  };

  return (
    <section className="contact-hero">
      <div className="contact-wrapper">
        {/* LEFT */}
        <div className="contact-left">
          <ProgressBar step={step} totalSteps={5} />

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="step-header">
                <h1>What are you celebrating?</h1>

                <p>Select the occasion that best describes your event.</p>
              </div>

              <div className="option-grid">
                {occasions.map((item) => (
                  <OptionCard
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    active={formData.occasion === item.title}
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        occasion: item.title,
                      }));

                      nextStep({
                        occasion: item.title,
                      });
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              onSelect={nextStep}
            />
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              onSelect={nextStep}
            />
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <Step4 formData={formData} setFormData={setFormData} />
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <Step5 formData={formData} setFormData={setFormData} />
          )}

          {/* Navigation */}
          <div className="contact-navigation">
            {step > 1 && (
              <button className="back-btn" onClick={prevStep}>
                Back
              </button>
            )}

            <Button
              onClick={nextStep}
              disabled={step === 1 && formData.occasion === ""}
            >
              {step === 5 ? "Submit" : "Next →"}
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <img
            src={getCurrentImage()}
            alt={
              formData.occasion
                ? `${formData.occasion} illustration`
                : "Contact illustration"
            }
            className="contact-image"
          />
        </div>
      </div>
    </section>
  );
}
