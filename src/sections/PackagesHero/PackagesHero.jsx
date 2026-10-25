export default function PackagesHero() {
  return (
    <section className="bg-page py-32 max-[768px]:py-24">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-16 text-center max-[768px]:px-6">
        <span className="text-[14px] font-bold uppercase tracking-[0.1em] text-brand">
          Curated Luxury
        </span>

        <h1 className="max-w-[900px] text-[72px] font-bold leading-[1.1] tracking-[-1.5px] text-ink max-[992px]:text-[56px] max-[768px]:text-[42px]">
          Experiences Designed
          <br />
          Around Your{" "}
          <span className="font-semibold italic text-rose-light">Celebration</span>
        </h1>

        <p className="max-w-[670px] text-[18px] leading-[1.6] text-muted max-[768px]:text-[16px]">
          From intimate gatherings to grand corporate galas, we bring a touch of sweet
          sophistication to every milestone. Choose the perfect tier for your vision.
        </p>
      </div>
    </section>
  );
}