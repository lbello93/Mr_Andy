export default function GuestCard({ title, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[76px] w-full cursor-pointer items-center justify-center rounded-xl border-2 bg-white text-[16px] font-medium text-ink shadow-soft transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-rose-light ${
        active ? "border-rose-light bg-blush text-brand" : "border-line"
      }`}
    >
      {title}
    </button>
  );
}