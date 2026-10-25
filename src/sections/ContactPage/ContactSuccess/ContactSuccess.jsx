import { CheckCircle2, ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button/Button";

export default function ContactSuccess() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-page w-full items-center justify-center overflow-hidden bg-page px-16 py-[180px] max-[768px]:px-6 max-[768px]:py-[120px]">
      <div
        aria-hidden="true"
        className="absolute inset-0 m-auto size-[800px] rounded-full bg-[radial-gradient(circle,rgba(185,2,53,0.07)_0%,rgba(185,2,53,0)_70%)]"
      />
      <span aria-hidden="true" className="absolute -bottom-20 -left-20 size-80 rounded-full bg-rose/10 blur-[60px]" />
      <span aria-hidden="true" className="absolute -right-20 -top-20 size-80 rounded-full bg-gold/10 blur-[60px]" />

      <div className="relative z-[2] flex w-full max-w-[672px] flex-col items-center text-center">
        <div className="relative mb-12 flex size-64 items-center justify-center rounded-full bg-white text-brand shadow-[0_20px_40px_rgba(185,2,53,0.15)] max-[768px]:size-[180px]">
          <CheckCircle2 size={90} strokeWidth={2.5} />
        </div>

        <div>
          <h1 className="mb-6 font-serif text-[72px] font-black leading-[79px] tracking-[-1.4px] text-ink max-[768px]:text-[48px] max-[768px]:leading-[56px]">
            Sweet! We&apos;ve
            <br />
            received your
            <br />
            enquiry.
          </h1>

          <p className="mx-auto max-w-[512px] text-[18px] leading-[29px] text-muted max-[768px]:text-[16px] max-[768px]:leading-7">
            Our team will get back to you within 24 hours with ideas, recommendations and a
            customised quote.
          </p>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 max-[768px]:w-full max-[768px]:flex-col">
          <Button onClick={() => navigate("/")}>
            Back Home
            <ArrowRight size={16} className="ml-2" />
          </Button>

          <button
            type="button"
            onClick={() => navigate("/packages")}
            className="flex h-14 cursor-pointer items-center gap-2.5 rounded-full border-2 border-brand bg-transparent px-10 text-[14px] font-bold tracking-[0.7px] text-brand transition-colors duration-300 hover:bg-blush max-[768px]:w-full max-[768px]:justify-center"
          >
            <Home size={16} />
            Explore Packages
          </button>
        </div>
      </div>
    </section>
  );
}