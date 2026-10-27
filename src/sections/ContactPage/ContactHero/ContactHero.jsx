import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Button from "../../../components/Button/Button";
import OptionCard from "../../../components/Option/OptionCard";
import ProgressBar from "./Progress/ProgressBar";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import StepPackage from "./steps/StepPackage";

import { stepImages } from "./images";
import { occasions } from "./data";
import { packages } from "../../../data/packageData";
import { submitInquiry } from "../../../lib/submitInquiry";

const TOTAL_STEPS = 6;

// Step order:
// 1 Occasion · 2 Guests · 3 Date · 4 Vision · 5 Package · 6 Contact details (Submit)

// Reuse existing illustrations for the shifted steps
const IMAGE_STEP = { 5: 4, 6: 5 };

const getTodayLocal = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isStepValid(step, d) {
  switch (step) {
    case 1:
      return Boolean(d.occasion);
    case 2:
      return Boolean(d.guests);
    case 3:
      return Boolean(d.date) && d.date >= getTodayLocal();
    case 4:
      return Boolean(d.vision?.trim());
    case 5:
      return Boolean(d.package);
    case 6: {
      if (!d.name?.trim() || !d.email?.trim() || !d.phone?.trim()) return false;
      if (!EMAIL_RE.test(d.email.trim())) return false;
      const digits = d.phone.replace(/\D/g, "");
      return digits.length >= 7 && digits.length <= 15;
    }
    default:
      return false;
  }
}

export default function ContactHero() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  // Preselect a package when arriving from a "Book Now" button
  const fromUrl = params.get("package") || "";
  const initialPackage = packages.some((p) => p.title === fromUrl)
    ? fromUrl
    : "";

  const [step, setStep] = useState(1);
  const [status, setStatus] = useState("idle");

  const [formData, setFormData] = useState({
    occasion: "",
    guests: "",
    date: "",
    vision: "",
    package: initialPackage,
    name: "",
    email: "",
    phone: "",
  });

  const nextStep = async (overrides = {}) => {
    const data = { ...formData, ...overrides };
    if (!isStepValid(step, data)) return;

    if (step === TOTAL_STEPS) {
      setStatus("loading");
      try {
        await submitInquiry({ ...data, source: "booking-wizard" });
        navigate("/contact/success");
      } catch {
        setStatus("error");
      }
      return;
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const getCurrentImage = () => {
    const imgStep = IMAGE_STEP[step] ?? step;
    if (imgStep === 1) return stepImages[1];
    return stepImages[imgStep]?.[formData.occasion] ?? stepImages[1];
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] min-h-[calc(100svh-96px)] overflow-hidden py-20 max-[768px]:py-[60px]">
      <div className="mx-auto grid w-[1280px] max-w-[calc(100%-128px)] grid-cols-[430px_1fr] items-center gap-20 max-[1200px]:max-w-[calc(100%-80px)] max-[1200px]:grid-cols-1 max-[1200px]:gap-[60px] max-[768px]:max-w-[calc(100%-40px)]">
        <div className="flex flex-col gap-10">
          <ProgressBar step={step} totalSteps={TOTAL_STEPS} />

          {step === 1 && (
            <>
              <div className="mb-10">
                <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
                  What are you celebrating?
                </h1>
                <p className="mt-2 text-muted">
                  Select the occasion that best describes your event.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
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
                      nextStep({ occasion: item.title });
                    }}
                  />
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              onSelect={nextStep}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              onSelect={nextStep}
            />
          )}
          {step === 4 && (
            <Step4 formData={formData} setFormData={setFormData} />
          )}
          {step === 5 && (
            <StepPackage
              formData={formData}
              setFormData={setFormData}
              onSelect={nextStep}
            />
          )}
          {step === 6 && (
            <Step5 formData={formData} setFormData={setFormData} />
          )}

          <div className="mt-5 flex items-center gap-[18px] max-[768px]:flex-col">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="h-14 cursor-pointer rounded-full border-2 border-brand bg-white px-7 text-[15px] font-semibold text-brand transition-colors duration-300 hover:bg-brand hover:text-white max-[768px]:w-full"
              >
                Back
              </button>
            )}

            <Button
              onClick={() => nextStep()}
              disabled={!isStepValid(step, formData) || status === "loading"}
            >
              {status === "loading"
                ? "Submitting\u2026"
                : step === TOTAL_STEPS
                  ? "Submit"
                  : "Next \u2192"}
            </Button>
          </div>

          {status === "error" && (
            <p role="alert" className="text-[13px] font-medium text-brand">
              Something went wrong. Please try again or call 832-633-2404.
            </p>
          )}
        </div>

        <div className="flex items-center justify-center max-[1200px]:order-[-1]">
          <img
            src={getCurrentImage()}
            alt={
              formData.occasion
                ? `${formData.occasion} illustration`
                : "Contact illustration"
            }
            className="block w-full max-w-[760px] object-contain max-[1200px]:max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
