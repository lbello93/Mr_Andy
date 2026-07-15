import "./Step3.css";
import { CalendarDays } from "lucide-react";

export default function Step3({ formData, setFormData }) {
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
