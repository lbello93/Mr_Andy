import "./Step3.css";
import { CalendarDays } from "lucide-react";

const getTodayLocal = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export default function Step3({ formData, setFormData }) {
  const minDate = getTodayLocal();

  return (
    <>
      <div className="step-header">
        <h1>
          When is your
          <br />
          big day?
        </h1>

        <p>Select the date of your celebration.</p>
      </div>

      <div className="step3-form">
        <label className="date-label">Event Date</label>

        <div className="date-field">
          <CalendarDays className="calendar-icon" size={22} />

          <input
            type="date"
            min={minDate}
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </>
  );
}
