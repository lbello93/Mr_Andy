import { useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name = "", email = "", phone = "" }) {
  const errors = {};
  if (!name.trim()) errors.name = "Full name is required.";
  if (!email.trim()) errors.email = "Email address is required.";
  else if (!EMAIL_RE.test(email.trim())) errors.email = "Please enter a valid email address.";
  const digits = phone.replace(/\D/g, "");
  if (!phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[\d\s()+.-]+$/.test(phone) || digits.length < 7 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

const field =
  "h-[75px] w-full rounded-xl border-2 border-line bg-white p-6 text-[16px] text-ink shadow-soft outline-none transition-all duration-[250ms] placeholder:text-[#8c7b7c] hover:border-rose focus:border-brand focus:shadow-[0_20px_20px_-5px_rgba(185,2,53,0.08),0_0_0_4px_rgba(185,2,53,0.12)] max-[768px]:h-[68px] max-[768px]:p-5 max-[768px]:text-[15px]";

const fieldError = "!border-brand !shadow-[0_20px_20px_-5px_rgba(185,2,53,0.08),0_0_0_4px_rgba(185,2,53,0.12)]";

export default function Step5({ formData, setFormData }) {
  const [touched, setTouched] = useState({});
  const errors = validate(formData);
  const show = (f) => touched[f] && errors[f];

  const onChange = (f, v) => setFormData((prev) => ({ ...prev, [f]: v }));
  const onBlur = (f) => setTouched((prev) => ({ ...prev, [f]: true }));

  const FIELDS = [
    { key: "name", type: "text", placeholder: "Full Name", autoComplete: "name" },
    { key: "email", type: "email", placeholder: "Email Address", autoComplete: "email" },
    { key: "phone", type: "tel", placeholder: "Phone Number", autoComplete: "tel" },
  ];

  return (
    <>
      <div className="mb-10">
        <h1 className="font-serif text-[32px] font-bold leading-[42px] text-ink">
          How do we reach you?
        </h1>
      </div>

      <div className="mt-10 flex w-full flex-col gap-4 max-[768px]:gap-3.5">
        {FIELDS.map((f) => (
          <div key={f.key} className="flex flex-col gap-1.5">
            <input
              type={f.type}
              placeholder={f.placeholder}
              autoComplete={f.autoComplete}
              aria-invalid={show(f.key) ? "true" : undefined}
              value={formData[f.key] || ""}
              onChange={(e) => onChange(f.key, e.target.value)}
              onBlur={() => onBlur(f.key)}
              className={`${field} ${show(f.key) ? fieldError : ""}`}
            />
            {show(f.key) && (
              <span className="pl-1 text-[13px] font-medium text-brand">{errors[f.key]}</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}