import { CheckCircle2 } from "lucide-react";

export default function PackageCard({ title, price, subtitle, features, inclusions, ideal, popular }) {
  const list = inclusions || features || [];

  return (
    <article
      className={`relative flex min-h-[576px] flex-col rounded-[40px] bg-white p-10 shadow-card transition-transform duration-300 hover:-translate-y-1.5 max-[1024px]:min-h-0 max-[992px]:min-h-0 ${
        popular ? "border-2 border-brand" : "border border-[rgba(228,189,190,0.3)]"
      }`}
    >
      {popular && (
        <div className="absolute right-0 top-0 rounded-[0_40px_0_20px] bg-brand px-[22px] py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
          MOST POPULAR
        </div>
      )}

      <div className="mb-9">
        <h3 className="mb-2 font-serif text-[32px] leading-[1.3] text-brand">{title}</h3>
        {price && <div className="mb-2 font-serif text-[26px] font-bold text-ink">{price}</div>}
        <p className="text-[16px] italic text-muted">{subtitle}</p>
      </div>

      <ul className="m-0 flex flex-1 list-none flex-col gap-[18px] p-0">
        {list.map((feature, i) => (
          <li
            key={feature}
            className={`flex items-center gap-3 text-[16px] text-ink ${popular && i === 0 ? "font-bold" : ""}`}
          >
            <CheckCircle2 size={16} strokeWidth={2} className="shrink-0 text-brand" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-[rgba(228,189,190,0.3)] pt-6">
        <span className="mb-3.5 block text-[14px] font-bold uppercase tracking-[0.08em] text-muted">
          IDEAL FOR:
        </span>
        <p className="text-[16px] leading-[1.6] text-ink">{ideal}</p>
      </div>
    </article>
  );
}