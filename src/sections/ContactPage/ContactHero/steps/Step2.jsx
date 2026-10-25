import GuestCard from "../../../../components/GuestCard/GuestCard";

const guestOptions = ["Less Than 25", "25-50 Guests", "50-100 Guests", "More than 100 Guests"];

export default function Step2({ formData, setFormData, onSelect }) {
  return (
    <>
      <div className="mb-10">
        <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
          How many guests are you expecting?
        </h1>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[768px]:grid-cols-1">
        {guestOptions.map((option) => (
          <GuestCard
            key={option}
            title={option}
            active={formData.guests === option}
            onClick={() => {
              setFormData((prev) => ({ ...prev, guests: option }));
              onSelect({ guests: option });
            }}
          />
        ))}
      </div>
    </>
  );
}