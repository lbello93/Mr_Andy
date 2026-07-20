import GuestCard from "../../../../components/GuestCard/GuestCard";
import "./Step2.css";

const guestOptions = [
  "Less Than 25",
  "25-50 Guests",
  "50-100 Guests",
  "More than 100 Guests",
];

export default function Step2({ formData, setFormData, onSelect }) {
  return (
    <>
      <div className="step-header">
        <h1>How many guests are you expecting?</h1>
      </div>

      <div className="guest-grid">
        {guestOptions.map((option) => (
          <GuestCard
            key={option}
            title={option}
            active={formData.guests === option}
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                guests: option,
              }));
              onSelect({ guests: option });
            }}
          />
        ))}
      </div>
    </>
  );
}
