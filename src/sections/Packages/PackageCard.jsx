import { Link } from "react-router-dom";

export default function PackageCard({
  title,
  description,
  icon,
  to = "/packages",
  featured = false,
  badge,
}) {
  return (
    <article
      className={`relative flex h-full w-full flex-col items-center rounded-[22px] border px-7 text-center transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "border-brand bg-[#fbeef1] py-10 shadow-[0_18px_40px_-18px_rgba(185,2,53,0.35)] min-[700px]:-my-2"
          : "border-[#f0d6dc] bg-white py-8 hover:shadow-[0_18px_40px_-20px_rgba(185,2,53,0.25)]"
      }`}
    >
      {badge && (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white">
          {badge}
        </span>
      )}

      {/* Icon sits in its own space, so it never overlaps the title */}
      <div className="mb-4 flex h-12 w-12 shrink-0 items-center justify-center">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain"
          draggable={false}
        />
      </div>

      <h3 className="mb-3 font-playfair text-[26px] font-bold leading-tight text-ink">
        {title}
      </h3>

      <p className="mb-8 max-w-[230px] text-[13px] leading-[1.6] text-muted">
        {description}
      </p>

      <Link
        to={to}
        className={`mt-auto inline-flex w-full max-w-[200px] items-center justify-center rounded-full py-3 text-[12px] font-medium uppercase tracking-[0.14em] no-underline transition-all duration-200 ${
          featured
            ? "bg-gradient-to-b from-[#e0174f] to-brand text-white shadow-[0_10px_20px_-8px_rgba(185,2,53,0.6)] hover:brightness-110"
            : "border-[1.5px] border-brand text-brand hover:bg-brand hover:text-white"
        }`}
      >
        Select
      </Link>
    </article>
  );
}
