import Button from "../../components/Button/Button";

export default function AboutCTA() {
  return (
    <section className="relative flex justify-center overflow-hidden bg-page px-6 py-32 max-[768px]:py-24">
      <span aria-hidden="true" className="absolute left-[10%] top-20 size-4 rounded-full bg-rose opacity-20" />
      <span aria-hidden="true" className="absolute bottom-20 right-[15%] size-8 rounded-full bg-gold opacity-20" />
      <span aria-hidden="true" className="absolute left-1/4 top-1/2 size-3 rounded-full bg-leaf opacity-10 max-[768px]:hidden" />

      <div className="relative z-[2] flex w-full max-w-[896px] flex-col items-center gap-8 text-center">
        <h2 className="text-[72px] font-black leading-[1.1] tracking-[-1.4px] text-ink max-[992px]:text-[56px] max-[768px]:text-[42px]">
          Let&apos;s Create Something
          <br />
          Sweet
        </h2>

        <Button to="/contact" className="mt-3">
          Plan Your Celebration
        </Button>
      </div>
    </section>
  );
}