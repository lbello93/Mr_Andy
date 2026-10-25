import { CalendarDays } from "lucide-react";

const getTodayLocal = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

export default function Step3({ formData, setFormData }) {
  const minDate = getTodayLocal();

  return (
    <>
      <div className="mb-10">
        <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
          When is your
          <br />
          big day?
        </h1>
        <p className="mt-2 text-muted">Select the date of your celebration.</p>
      </div>

      <div className="mt-10 w-full">
        <label htmlFor="event-date" className="mb-3 block text-[15px] font-semibold text-ink">
          Event Date
        </label>

        <div className="relative w-full">
          <CalendarDays
            size={22}
            aria-hidden="true"
            className="pointer-events-none absolute left-[22px] top-1/2 -translate-y-1/2 text-brand"
          />

          <input
            id="event-date"
            type="date"
            min={minDate}
            value={formData.date}
            onClick={(e) => { try { e.currentTarget.showPicker?.(); } catch { /* blocked */ } }}
            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
            className="h-[72px] w-full cursor-pointer rounded-xl border-2 border-line bg-white pl-[60px] pr-6 text-left text-[16px] text-ink shadow-soft outline-none transition-all duration-[250ms] [appearance:none] [-webkit-appearance:none] hover:border-rose-light focus:border-rose-light focus:shadow-[0_0_0_4px_rgba(235,67,109,0.12)] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-5 [&::-webkit-calendar-picker-indicator]:h-6 [&::-webkit-calendar-picker-indicator]:w-6 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-date-and-time-value]:text-left [&::-webkit-date-and-time-value]:min-h-[1.2em]"
          />
        </div>
      </div>
    </>
  );
}