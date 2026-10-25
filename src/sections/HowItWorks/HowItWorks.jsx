import StepCard from "./StepCard";
import { steps } from "./howItWorksData";

export default function HowItWorks() {
  return (
    <section className="bg-surface py-24">
      <div className="mx-auto max-w-[1280px] px-16 max-[768px]:px-6">
        <h2 className="mb-16 text-center text-[48px] font-bold text-ink max-[768px]:text-[38px]">
          The Journey to Sweetness
        </h2>

        <ol className="relative m-0 grid list-none grid-cols-5 gap-8 p-0 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <li
            aria-hidden="true"
            className="absolute inset-x-0 top-6 z-0 h-px bg-[rgba(228,189,190,0.5)] max-[900px]:hidden"
          />
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </ol>
      </div>
    </section>
  );
}