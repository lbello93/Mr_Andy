export default function PackageCard({
  icon: Icon,
  title,
  description,
  button,
  featured,
  badge,
}) {
  return (
    <article
      className={`
    relative
    flex flex-col

    w-full
    max-w-[340px]

    rounded-[28px]
    border

    px-6
    py-8

    bg-white

    transition-all
    duration-300

    hover:-translate-y-2
    hover:shadow-[0_24px_50px_rgba(185,2,53,0.12)]

    ${
      featured
        ? "border-[#B90235] bg-gradient-to-b from-[#FFF5F6] to-white shadow-lg"
        : "border-[#F0D8D8]"
    }
  `}
    >
      {badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#B90235] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
          {badge}
        </span>
      )}

      <div className="mb-6 flex justify-center">
        <Icon size={34} className="text-[#B90235]" />
      </div>

      <h3 className="mb-4 text-center font-playfair text-[38px] leading-none text-[#1C1B1B]">
        {title}
      </h3>

      <p className="mb-8 flex-1 text-center text-[16px] leading-8 text-[#5B4041]">
        {description}
      </p>

      <div className="mb-6 h-px w-full bg-[#F2E6E6]" />

      <button
        className={`h-14 w-full rounded-full text-sm font-bold uppercase tracking-[0.08em] transition-all duration-300
      
      ${
        featured
          ? "bg-gradient-to-b from-[#DD2A4B] to-[#B90235] text-white shadow-lg hover:scale-[1.02]"
          : "border-2 border-[#B90235] bg-white text-[#B90235] hover:bg-[#B90235] hover:text-white"
      }`}
      >
        {button}
      </button>
    </article>
  );
}
