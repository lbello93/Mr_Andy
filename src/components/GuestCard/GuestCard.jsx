import "./GuestCard.css";

export default function GuestCard({ title, active, onClick }) {
  return (
    <button
      type="button"
      className={`guest-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
