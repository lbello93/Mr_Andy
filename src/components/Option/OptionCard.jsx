export default function OptionCard({ title, icon: Icon, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[120px] w-full cursor-pointer flex-col items-center justify-center gap-3.5 rounded-2xl border-2 bg-white shadow-[0_15px_20px_rgba(185,2,53,0.05)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-rose-light ${
        active
          ? "border-rose-light bg-blush shadow-[0_15px_30px_rgba(185,2,53,0.15)]"
          : "border-line"
      }`}
    >
      <div className={active ? "text-brand" : ""}>
        <Icon size={22} />
      </div>
      <span className={active ? "font-bold text-brand" : ""}>{title}</span>
    </button>
  );
}