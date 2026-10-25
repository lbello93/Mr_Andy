import { useState, useEffect, useRef } from "react";
import { X, UserRound, Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { submitInquiry } from "../../lib/submitInquiry";

const FIELDS = [
  { id: "modal-name", name: "name", label: "Name", icon: UserRound, type: "text", autoComplete: "name", maxLength: 150 },
  { id: "modal-phone", name: "phone", label: "Phone Number", icon: Phone, type: "tel", autoComplete: "tel", maxLength: 50 },
  { id: "modal-email", name: "email", label: "Email", icon: Mail, type: "email", autoComplete: "email", maxLength: 254 },
];

const CONTACT_INFO = [
  { icon: Phone, text: "832-633-2404", href: "tel:+18326332404" },
  { icon: Mail, text: "mrandycandywall@gmail.com", href: "mailto:mrandycandywall@gmail.com" },
  { icon: MapPin, text: "Houston, TX" },
];

const inputClass =
  "flex h-[49px] w-full items-center rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 pl-[50px] text-[16px] leading-5 text-[#171717] outline-none transition-colors placeholder:text-[#9CA3AF] hover:border-brand focus:border-brand";

export default function ContactModal({ open, onClose }) {
  const [status, setStatus] = useState("idle");
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!open) return;
    setStatus("idle");

    // Focus the first input after a frame so the dialog is visible
    requestAnimationFrame(() => firstInputRef.current?.focus());

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setStatus("loading");
    try {
      await submitInquiry({ ...data, source: "contact-modal" });
      e.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-6 py-10 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Contact us"
      ref={dialogRef}
    >
      <div className="relative flex w-full max-w-[896px] flex-col items-start rounded-[32px] bg-white p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25),0_0_0_3px_#D91B5C] max-[900px]:max-h-[90vh] max-[900px]:overflow-y-auto max-[900px]:p-8 max-[600px]:p-6">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 z-[2] flex size-8 items-center justify-center rounded-full text-[#9CA3AF] transition-colors hover:bg-gray-100 hover:text-ink"
          aria-label="Close"
        >
          <X size={20} strokeWidth={1.83} />
        </button>

        {/* Two-column grid */}
        <div className="grid w-full grid-cols-[1fr_auto_1fr] gap-0 max-[768px]:grid-cols-1">
          {/* Left: form */}
          <div className="flex flex-col gap-7 pr-4 max-[768px]:pr-0">
            <h2 className="font-serif text-[48px] font-bold leading-[48px] tracking-[-1.2px] text-[#171717] max-[600px]:text-[36px] max-[600px]:leading-[40px]">
              Drop us a<br />Message
            </h2>

            <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
              {FIELDS.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.id} className="relative">
                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand"
                      aria-hidden="true"
                    />
                    <input
                      ref={i === 0 ? firstInputRef : undefined}
                      id={f.id}
                      name={f.name}
                      type={f.type}
                      placeholder={f.label}
                      autoComplete={f.autoComplete}
                      maxLength={f.maxLength}
                      required
                      className={inputClass}
                      onChange={() => status !== "idle" && setStatus("idle")}
                    />
                  </div>
                );
              })}

              <div className="relative">
                <MessageCircle
                  size={20}
                  strokeWidth={1.5}
                  className="pointer-events-none absolute left-4 top-3.5 text-brand"
                  aria-hidden="true"
                />
                <textarea
                  id="modal-message"
                  name="message"
                  placeholder="Tell us what you're imagining..."
                  rows={3}
                  maxLength={5000}
                  required
                  className="min-h-[106px] w-full resize-y rounded-2xl border border-[#E5E7EB] bg-white px-4 pb-5 pl-[50px] pt-3 text-[16px] leading-6 text-[#171717] outline-none transition-colors placeholder:text-[#9CA3AF] hover:border-brand focus:border-brand"
                  onChange={() => status !== "idle" && setStatus("idle")}
                />
              </div>

              {status === "success" && (
                <p role="status" className="text-[14px] font-medium text-[#18834a]">
                  Thank you! We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p role="alert" className="text-[14px] font-medium text-brand">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="relative flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#CB0C4D] text-[18px] font-medium text-white shadow-[0_10px_22px_-5px_rgba(203,12,77,0.45)] transition-[transform,box-shadow] duration-200 enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_14px_28px_-5px_rgba(203,12,77,0.5)] disabled:opacity-65"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Vertical divider */}
          <div className="mx-10 w-px self-stretch bg-[#F3F4F6] max-[768px]:mx-0 max-[768px]:my-8 max-[768px]:h-px max-[768px]:w-full max-[768px]:self-auto" />

          {/* Right: contact info */}
          <div className="flex flex-col justify-between pl-0">
            <h2 className="mb-9 font-serif text-[48px] font-bold leading-[48px] tracking-[-1.2px] text-[#171717] max-[600px]:text-[36px] max-[600px]:leading-[40px]">
              Contact Us
            </h2>

            <div className="flex flex-1 flex-col items-start justify-center gap-7">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <div className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#FCE7EF]">
                      <Icon size={24} className="text-[#CB0C4D]" aria-hidden="true" />
                    </div>
                    <span className="ml-4 text-[18px] font-medium leading-7 text-[#262626] break-all">
                      {item.text}
                    </span>
                  </>
                );

                return item.href ? (
                  <a key={item.text} href={item.href} className="flex items-center no-underline hover:opacity-80">
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
    </div>
  );
}