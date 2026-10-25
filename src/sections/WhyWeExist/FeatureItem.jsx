export default function FeatureItem({ icon: Icon, color, iconColor, title, description }) {
  return (
    <div className="flex gap-4">
      <div
        className="flex size-12 shrink-0 items-center justify-center rounded-full"
        style={{ background: color }}
      >
        <Icon size={20} color={iconColor} aria-hidden="true" />
      </div>

      <div>
        <h3 className="mb-1.5 font-sans text-[14px] font-bold tracking-[0.05em] text-ink">{title}</h3>
        <p className="m-0 text-[16px] leading-normal text-muted">{description}</p>
      </div>
    </div>
  );
}