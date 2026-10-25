export default function FloatingCard({ icon: Icon, title, className = "", rotate = 0 }) {
  return (
    <div
      className={`absolute z-10 flex h-[87px] w-[128px] flex-col items-center justify-center gap-[7px] rounded-2xl border border-white/30 bg-white/70 px-4 pb-4 pt-[15px] text-ink shadow-lg backdrop-blur-[5px] max-[600px]:h-[72px] max-[600px]:w-[105px] max-[600px]:gap-[5px] max-[600px]:p-2.5 max-[400px]:h-[65px] max-[400px]:w-[90px] max-[400px]:p-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Icon
        strokeWidth={1.8}
        aria-hidden="true"
        className="size-6 shrink-0 text-brand max-[600px]:size-5 max-[400px]:size-[18px]"
      />
      <span className="w-[94px] whitespace-nowrap text-center text-[10px] uppercase leading-[15px] max-[600px]:w-[90px] max-[600px]:text-[8px] max-[600px]:leading-3 max-[400px]:w-20 max-[400px]:text-[7px] max-[400px]:leading-[10px]">
        {title}
      </span>
    </div>
  );
}