export default function StandardCard({ icon: Icon, title, description, color, iconColor }) {
  return (
    <article className="flex flex-col items-start rounded-[32px] border border-[rgba(228,189,190,0.2)] bg-white p-10 shadow-card transition-transform duration-300 hover:-translate-y-2 max-[768px]:p-8">
      <div
        className="mb-8 flex size-16 items-center justify-center rounded-2xl"
        style={{ background: color }}
      >
        <Icon size={24} color={iconColor} aria-hidden="true" />
      </div>
      <h3 className="mb-5 font-serif text-[24px] font-normal leading-[1.3] text-ink">{title}</h3>
      <p className="text-[16px] leading-[1.6] text-muted">{description}</p>
    </article>
  );
}