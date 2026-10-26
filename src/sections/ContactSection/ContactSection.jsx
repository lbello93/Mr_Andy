import { useState, useRef } from "react";
import {
  UserRound,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  ArrowRight,
} from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx8E08a6o2H7VIJ56DVgmxBh8zJq9kLzgDSU4UUVoxkSZ4heoz56PX47vekDlXbK2kglQ/exec";

const FIELDS = [
  {
    id: "section-name",
    name: "name",
    label: "Name",
    icon: UserRound,
    type: "text",
    autoComplete: "name",
    maxLength: 150,
  },
  {
    id: "section-phone",
    name: "phone",
    label: "Phone Number",
    icon: Phone,
    type: "tel",
    autoComplete: "tel",
    maxLength: 50,
  },
  {
    id: "section-email",
    name: "email",
    label: "Email",
    icon: Mail,
    type: "email",
    autoComplete: "email",
    maxLength: 254,
  },
];

const CONTACT_INFO = [
  { icon: Phone, text: "832-633-2404", href: "tel:+18326332404" },
  {
    icon: Mail,
    text: "mrandycandywall@gmail.com",
    href: "mailto:mrandycandywall@gmail.com",
  },
  { icon: MapPin, text: "Houston, TX" },
];

const inputClass =
  "flex h-[49px] w-full items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 pl-[50px] text-[16px] leading-5 text-[#171717] outline-none transition-colors placeholder:text-[#9CA3AF] hover:border-[#CB0C4D] focus:border-[#CB0C4D]";

export default function ContactSection({ selectedPackage = "" }) {
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  const clearStatus = () => status !== "idle" && setStatus("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = Object.fromEntries(new FormData(form));
    setStatus("loading");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          package: selectedPackage || "Not specified",
          source: "contact-section",
        }),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error("Contact section error:", err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex w-full scroll-mt-24 justify-center bg-page px-6 py-24 max-[1024px]:py-20 max-[700px]:px-4 max-[700px]:py-16"
    >
      <div className="relative flex w-full max-w-[896px] flex-col items-start rounded-[32px] bg-white p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25),0_0_0_3px_#D91B5C] max-[900px]:p-8 max-[600px]:p-6">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-0 max-[768px]:grid-cols-1">
          {/* Left: form */}
          <div className="flex flex-col gap-7 pr-4 max-[768px]:pr-0">
            <h2 className="font-serif text-[48px] font-bold leading-[48px] tracking-[-1.2px] text-[#171717] max-[600px]:text-[36px] max-[600px]:leading-[40px]">
              Drop us
              <br />
              <span className="text-[#CB0C4D]">a Message</span>
            </h2>

            {selectedPackage && (
              <span className="-mt-3 inline-flex w-fit items-center gap-2 rounded-full bg-[#FCE7EF] px-3 py-1.5 text-[13px] font-semibold text-[#CB0C4D]">
                Package: {selectedPackage}
              </span>
            )}

            <form
              ref={formRef}
              className="flex flex-col gap-3.5"
              onSubmit={handleSubmit}
            >
              {FIELDS.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.id} className="relative">
                    <label htmlFor={f.id} className="sr-only">
                      {f.label}
                    </label>
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#CB0C4D]"
                      aria-hidden="true"
                    />
                    <input
                      id={f.id}
                      name={f.name}
                      type={f.type}
                      placeholder={f.label}
                      autoComplete={f.autoComplete}
                      maxLength={f.maxLength}
                      required
                      className={inputClass}
                      onChange={clearStatus}
                    />
                  </div>
                );
              })}

              <div className="relative">
                <label htmlFor="section-message" className="sr-only">
                  Message
                </label>
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-4 top-3.5 text-[#CB0C4D]"
                  aria-hidden="true"
                />
                <textarea
                  key={selectedPackage}
                  id="section-message"
                  name="message"
                  placeholder="Tell us what you're imagining..."
                  defaultValue={
                    selectedPackage
                      ? `I'm interested in the ${selectedPackage} package. `
                      : ""
                  }
                  rows={3}
                  maxLength={5000}
                  required
                  className="min-h-[106px] w-full resize-y rounded-2xl border border-[#E5E7EB] bg-white px-4 pb-5 pl-[50px] pt-3 text-[16px] leading-6 text-[#171717] outline-none transition-colors placeholder:text-[#9CA3AF] hover:border-[#CB0C4D] focus:border-[#CB0C4D]"
                  onChange={clearStatus}
                />
              </div>

              {status === "success" && (
                <p
                  role="status"
                  className="text-[14px] font-medium text-[#18834a]"
                >
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p
                  role="alert"
                  className="text-[14px] font-medium text-[#CB0C4D]"
                >
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="relative flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#dd2a4b,#CB0C4D)] text-[18px] font-medium text-white shadow-[0_10px_22px_-5px_rgba(203,12,77,0.45)] transition-[transform,box-shadow] duration-200 enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_14px_28px_-5px_rgba(203,12,77,0.5)] disabled:opacity-65"
              >
                {status === "loading" ? "Sending..." : "Send Us A Message"}
                {status !== "loading" && (
                  <ArrowRight size={16} aria-hidden="true" />
                )}
              </button>
            </form>
          </div>

          {/* Divider */}
          <div className="mx-10 w-px self-stretch bg-[#F3F4F6] max-[768px]:mx-0 max-[768px]:my-8 max-[768px]:h-px max-[768px]:w-full max-[768px]:self-auto" />

          {/* Right: contact info */}
          <div className="flex flex-col pl-0">
            <h2 className="mb-9 font-serif text-[48px] font-bold leading-[48px] tracking-[-1.2px] text-[#171717] max-[600px]:text-[36px] max-[600px]:leading-[40px]">
              Contact <span className="text-[#CB0C4D]">Us</span>
            </h2>

            <div className="flex flex-1 flex-col items-start justify-center gap-7">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#FCE7EF]">
                      <Icon
                        size={24}
                        className="text-[#CB0C4D]"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="ml-4 break-all text-[18px] font-medium leading-7 text-[#262626]">
                      {item.text}
                    </span>
                  </>
                );
                return item.href ? (
                  <a
                    key={item.text}
                    href={item.href}
                    className="flex items-center no-underline hover:opacity-80"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.text} className="flex items-center">
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
