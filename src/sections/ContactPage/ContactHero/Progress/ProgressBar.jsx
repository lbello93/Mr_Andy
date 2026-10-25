export default function ProgressBar({ step, totalSteps }) {
  const progress = (step / totalSteps) * 100;

  return (
    <div className="flex w-full flex-col gap-[18px]">
      <div className="flex items-center justify-between">
        <h4 className="m-0 font-serif text-[32px] font-bold leading-[1.2] text-brand">
          Plan Your Sweet Celebration
        </h4>
        <span className="text-[14px] font-medium text-[#8b8b8b]">
          Step {step}/{totalSteps}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ece8e8]">
        <div
          className="h-full rounded-[inherit] bg-[linear-gradient(90deg,#dd2a4b,#b90235)] transition-[width] duration-[400ms] ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}