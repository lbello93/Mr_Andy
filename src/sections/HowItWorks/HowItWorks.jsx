import "./HowItWorks.css";
import StepCard from "./StepCard";
import { steps } from "./howItWorksData";

export default function HowItWorks() {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2>The Journey to Joy</h2>

        <div className="timeline">
          <div className="timeline-line" />

          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
