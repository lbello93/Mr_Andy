export default function Step4({ formData, setFormData }) {
  return (
    <>
      <div className="mb-10">
        <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
          Tell us Your Vision!
        </h1>
      </div>

      <div className="mt-10 w-full">
        <label htmlFor="vision" className="mb-3 block text-[15px] font-semibold text-ink">
          Share your ideas
        </label>

        <textarea
          id="vision"
          placeholder="Describe moods, colors or any specific requests"
          value={formData.vision || ""}
          onChange={(e) => setFormData((prev) => ({ ...prev, vision: e.target.value }))}
          className="min-h-[126px] w-full resize-none rounded-xl border-2 border-line bg-white p-6 text-[16px] leading-6 text-ink shadow-soft outline-none transition-all duration-[250ms] placeholder:text-[#7a7a7a] hover:border-rose-light focus:border-rose-light focus:shadow-[0_0_0_4px_rgba(235,67,109,0.12)]"
        />
      </div>
    </>
  );
}