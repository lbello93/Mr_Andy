import { Heart } from "lucide-react";

export default function OurPromise() {
  return (
    <section
      aria-labelledby="promise-title"
      className="flex min-h-[618px] w-full flex-col items-center bg-rose-light px-6 py-24 max-[800px]:min-h-0 max-[800px]:px-8 max-[800px]:py-[90px] max-[600px]:px-6 max-[600px]:py-[75px] max-[400px]:px-5 max-[400px]:py-[65px]"
    >
      <div className="flex w-full max-w-[768px] flex-col items-center gap-[31px] max-[800px]:max-w-[700px] max-[600px]:gap-[26px] max-[400px]:gap-[23px]">
        <Heart
          aria-hidden="true"
          strokeWidth={1.5}
          className="h-[45.88px] w-[50px] shrink-0 fill-white stroke-white max-[600px]:h-[42px] max-[600px]:w-[44px]"
        />

        <h2
          id="promise-title"
          className="w-full text-center text-[48px] font-bold leading-[58px] text-white max-[600px]:text-[40px] max-[600px]:leading-[48px] max-[400px]:text-[36px] max-[400px]:leading-[44px]"
        >
          Our Promise
        </h2>

        <blockquote className="w-full max-w-[733px] pb-[17px] pt-px text-center font-serif text-[36px] font-normal italic leading-[40px] text-white max-[800px]:text-[32px] max-[800px]:leading-[38px] max-[600px]:p-0 max-[600px]:text-[27px] max-[600px]:leading-[34px] max-[400px]:text-[24px] max-[400px]:leading-[31px]">
          <p>
            “We believe the smallest details often{" "}
            <span className="text-gold">create the biggest memories.</span> Our
            promise is to deliver a moment of pure, unadulterated joy to every
            single guest.”
          </p>
        </blockquote>

        <span
          aria-hidden="true"
          className="h-0.5 w-16 shrink-0 rounded-full bg-white/30 max-[600px]:mt-[5px]"
        />

        <p className="pt-px text-center text-[14px] font-bold leading-[17px] tracking-[1.4px] text-white max-[600px]:text-[12px] max-[600px]:leading-[16px] max-[600px]:tracking-[1.2px] max-[400px]:text-[11px] max-[400px]:tracking-[1px]">
          — THE MR. ANDY TEAM
        </p>
      </div>
    </section>
  );
}