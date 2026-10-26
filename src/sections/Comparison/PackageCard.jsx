import { Check, ArrowRight, Sparkles } from "lucide-react";

export default function PackageCard({
  title,
  price,
  subtitle,
  features,
  inclusions,
  ideal,
  popular,
  onSelect,
}) {
  const list = inclusions || features || [];
  const idealText = Array.isArray(ideal) ? ideal.join(" · ") : ideal;
  const [whole, cents] = (price || "").split(".");

  return (
    <article
      className={`relative flex h-full flex-col rounded-[28px] p-7 transition-all duration-300 hover:-translate-y-1 min-[1025px]:p-[clamp(20px,3.2vh,32px)] ${
        popular
          ? "border-2 border-brand bg-[#fffafb] shadow-[0_28px_55px_-28px_rgba(185,2,53,0.5)]"
          : "border border-[rgba(228,189,190,0.6)] bg-white shadow-card hover:shadow-[0_22px_45px_-28px_rgba(185,2,53,0.35)]"
      }`}
    >
      {popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_18px_-6px_rgba(185,2,53,0.6)]">
          <Sparkles size={12} aria-hidden="true" />
          Most Popular
        </span>
      )}

      {/* Header */}
      <header className="mb-5 border-b border-[rgba(228,189,190,0.5)] pb-5 min-[1025px]:mb-[clamp(12px,2.2vh,24px)] min-[1025px]:pb-[clamp(12px,2.2vh,24px)]">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="font-serif text-[clamp(20px,2.6vh,24px)] font-bold leading-[1.2] text-brand">
            {title}
          </h3>

          {price && (
            <div className="flex shrink-0 items-start text-ink">
              <span className="font-serif text-[clamp(28px,4vh,36px)] font-bold leading-none tracking-[-1px]">
                {whole}
              </span>
              {cents && (
                <span className="ml-0.5 mt-1 font-serif text-[15px] font-bold leading-none">
                  .{cents}
                </span>
              )}
            </div>
          )}
        </div>

        <p className="text-[14px] italic leading-[1.5] text-muted">
          {subtitle}
        </p>
      </header>

      {/* Highlights */}
      <ul className="m-0 mb-5 flex list-none flex-col gap-3 p-0 min-[1025px]:mb-[clamp(12px,2.2vh,24px)] min-[1025px]:gap-[clamp(6px,1.2vh,12px)]">
        {list.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-[15px] leading-[1.4] text-ink"
          >
            <span
              className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${
                popular ? "bg-brand text-white" : "bg-[#FCE7EF] text-brand"
              }`}
            >
              <Check size={11} strokeWidth={3} aria-hidden="true" />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Footer pinned to bottom */}
      <div className="mt-auto">
        {idealText && (
          <p className="mb-4 text-[13px] leading-[1.5] text-muted min-[1025px]:mb-[clamp(10px,1.8vh,20px)]">
            <span className="font-bold uppercase tracking-[0.1em] text-ink">
              Ideal for:{" "}
            </span>
            {idealText}
          </p>
        )}

        <button
          type="button"
          onClick={() => onSelect?.(title)}
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-[14px] font-semibold uppercase tracking-[0.1em] transition-all duration-200 min-[1025px]:h-[clamp(40px,5.5vh,48px)] ${
            popular
              ? "bg-gradient-to-b from-[#e0174f] to-brand text-white shadow-[0_12px_24px_-8px_rgba(185,2,53,0.6)] hover:brightness-110"
              : "border-2 border-brand text-brand hover:bg-brand hover:text-white"
          }`}
        >
          Book Now
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
