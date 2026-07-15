import "./OptionCard.css";

export default function OptionCard({ title, icon: Icon, active, onClick }) {
  return (
    <button
      type="button"
      className={`option-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="option-icon">
        <Icon size={22} />
      </div>

      <span>{title}</span>
    </button>
  );
}
