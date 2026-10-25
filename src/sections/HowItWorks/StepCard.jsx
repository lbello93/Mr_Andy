export default function StepCard({ number, title, subtitle }) {
  return (
    <li className="relative z-[2] flex flex-col items-center text-center max-[900px]:mx-auto max-[900px]:max-w-[280px]">
      <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-brand text-[16px] text-white">
        {number}
      </div>
      <h3 className="mb-2 font-serif text-[20px] font-medium text-ink">{title}</h3>
      <p className="max-w-[170px] text-[14px] leading-5 text-muted">{subtitle}</p>
    </li>
  );
}