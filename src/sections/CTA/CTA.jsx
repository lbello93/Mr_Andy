import { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { submitInquiry } from "../../lib/submitInquiry";

const FIELDS = [
  { id: "contact-name", name: "name", label: "Your Name", type: "text", placeholder: "Name", autoComplete: "name", maxLength: 150 },
  { id: "contact-phone", name: "phone", label: "Phone Number", type: "tel", placeholder: "Phone Number", autoComplete: "tel", maxLength: 50 },
  { id: "contact-email", name: "email", label: "Email Address", type: "email", placeholder: "Email", autoComplete: "email", maxLength: 254 },
];

const fieldBase =
  "block w-full min-w-0 rounded-[9px] border border-[#e9e2e2] bg-white px-3.5 py-3 text-[16px] font-normal text-[#292323] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#aaa1a2] hover:border-[#d8caca] focus:border-[#e91e50] focus:shadow-[0_0_0_3px_rgba(233,30,80,0.08)]";

const statusBase = "m-0 flex items-start gap-2 text-[12px] leading-[1.6]";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("loading");
    try {
      await submitInquiry({
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetStatus = () => setStatus("idle");

  return (
    <section
      id="contact"
      className="relative flex min-h-page w-full items-center justify-center overflow-hidden bg-[#fffaf9] px-[clamp(24px,6vw,100px)] py-12 font-dm text-[#292323] max-[1000px]:px-9 max-[760px]:overflow-visible max-[760px]:px-5 max-[380px]:px-[15px] max-[380px]:py-9"
    >
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-[minmax(0,1fr)_minmax(320px,400px)] items-center gap-[clamp(40px,7vw,110px)] max-[1000px]:grid-cols-[minmax(0,1fr)_minmax(300px,370px)] max-[1000px]:gap-10 max-[760px]:m-auto max-[760px]:max-w-[480px] max-[760px]:grid-cols-[minmax(0,1fr)] max-[760px]:gap-[34px] max-[380px]:gap-7">
        <div className="w-full max-w-[540px] max-[760px]:max-w-none">
          <span className="mb-[18px] inline-block text-[11px] font-bold uppercase leading-normal tracking-[2px] text-[#e91e50] max-[760px]:mb-3.5 max-[760px]:text-[10px]">
            Let&apos;s make it sweet
          </span>

          <h2 className="mb-[22px] font-serif text-[clamp(38px,4.5vw,60px)] font-bold leading-[1.12] tracking-[-1.4px] text-[#292323] max-[1000px]:text-[clamp(36px,4.5vw,48px)] max-[760px]:mb-4 max-[760px]:text-[clamp(34px,8vw,46px)] max-[760px]:leading-[1.14] max-[760px]:tracking-[-0.8px] max-[380px]:text-[33px]">
            Let&apos;s Create
            <br />
            Something Sweet
          </h2>

          <p className="mb-7 max-w-[450px] text-[14px] leading-[1.9] text-[#77706f] max-[760px]:mb-[22px] max-[760px]:max-w-full max-[760px]:text-[13px] max-[760px]:leading-[1.8]">
            Whether you&apos;re planning an intimate gathering or a large-scale celebration,
            we&apos;re here to help make it unforgettable. Contact our team to start
            brainstorming your custom candy installation.
          </p>

          <a
            href="#contact-form"
            className="inline-flex min-h-[46px] items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#e91e50,#c90f43)] px-6 text-[12px] font-bold text-white no-underline shadow-[0_6px_16px_rgba(201,15,67,0.16)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_9px_20px_rgba(201,15,67,0.23)]"
          >
            Get Started
            <ArrowRight size={15} aria-hidden="true" />
          </a>
        </div>

        <div
          id="contact-form"
          className="w-full rounded-[18px] border-[1.5px] border-[#ff5278] bg-white px-[26px] py-[30px] shadow-[0_8px_28px_rgba(233,30,80,0.07)] max-[1000px]:px-[22px] max-[1000px]:py-[26px] max-[760px]:rounded-2xl max-[760px]:px-5 max-[760px]:py-6 max-[380px]:px-4 max-[380px]:py-[22px]"
        >
          <div className="mb-6 text-center max-[760px]:mb-5">
            <h3 className="m-0 font-serif text-[25px] font-bold leading-[1.3] text-[#292323] max-[760px]:text-[23px] max-[380px]:text-[21px]">
              Drop us a Message
            </h3>
          </div>

          <form className="grid w-full gap-[15px] max-[760px]:gap-3.5" onSubmit={handleSubmit}>
            {FIELDS.map((f) => (
              <div key={f.id} className="flex w-full min-w-0 flex-col gap-[7px]">
                <label htmlFor={f.id} className="text-[12px] font-semibold leading-normal text-[#292323]">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  maxLength={f.maxLength}
                  required
                  onChange={resetStatus}
                  className={`${fieldBase} h-11 max-[380px]:h-[42px]`}
                />
              </div>
            ))}

            <div className="flex w-full min-w-0 flex-col gap-[7px]">
              <label htmlFor="contact-message" className="text-[12px] font-semibold leading-normal text-[#292323]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us what you're imagining..."
                rows={3}
                maxLength={5000}
                required
                onChange={resetStatus}
                className={`${fieldBase} min-h-[100px] resize-y leading-[1.7] max-[380px]:min-h-[85px]`}
              />
            </div>

            {status === "success" && (
              <p role="status" className={`${statusBase} text-[#18834a]`}>
                <CheckCircle2 size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                Thank you! Your request has been submitted.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className={`${statusBase} text-[#c62828]`}>
                <AlertCircle size={16} aria-hidden="true" className="mt-0.5 shrink-0" />
                Something went wrong. Please try again.
              </p>
            )}
            {status === "loading" && (
              <p role="status" className={statusBase}>
                Submitting your request...
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-[3px] flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-full bg-[linear-gradient(135deg,#e91e50,#c90f43)] px-5 py-3 text-[12px] font-bold text-white shadow-[0_6px_15px_rgba(201,15,67,0.15)] transition-[transform,box-shadow,opacity] duration-200 enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_9px_18px_rgba(201,15,67,0.22)] disabled:cursor-not-allowed disabled:opacity-65"
            >
              {status === "loading" ? "Submitting..." : "Contact Us"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}