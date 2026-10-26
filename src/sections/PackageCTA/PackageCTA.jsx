import Button from "../../components/Button/Button";

export default function PackageCTA() {
  return (
    <section className="relative overflow-hidden bg-page px-6 py-32 max-[1024px]:py-[100px] max-[768px]:px-5 max-[768px]:py-20">
      <span
        aria-hidden="true"
        className="absolute left-[10%] top-20 z-[1] size-4 rounded-full bg-rose opacity-20 max-[768px]:left-[6%]"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-20 right-[15%] z-[1] size-8 rounded-full bg-gold opacity-20 max-[768px]:right-[8%]"
      />
      <span
        aria-hidden="true"
        className="absolute left-1/4 top-[52%] z-[1] size-3 rounded-full bg-leaf opacity-10 max-[768px]:hidden"
      />

      <div className="relative z-[2] mx-auto flex max-w-[900px] flex-col items-center gap-8 text-center">
        <h2 className="whitespace-nowrap text-[clamp(18px,5vw,48px)] font-black leading-[1.15] tracking-[-1px] text-ink">
          Let&apos;s Create Something <span className="text-brand">Sweet</span>
        </h2>

        <p className="max-w-[640px] text-[18px] leading-[1.65] text-muted max-[768px]:text-[16px] max-[480px]:text-[15px]">
          Whether you&apos;re planning an intimate gathering or a large-scale
          celebration, we&apos;re here to help make it unforgettable. Contact
          our design team to start brainstorming your custom candy installation.
        </p>

        <Button to="/contact">Plan Your Celebration</Button>
      </div>
    </section>
  );
}
