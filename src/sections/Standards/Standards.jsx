import StandardCard from "./StandardCard";
import { standards } from "./standardsData";

export default function Standards() {
  return (
    <section className="bg-page py-24">
      <div className="mx-auto max-w-[1280px] px-16 max-[768px]:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[48px] font-bold text-ink max-[768px]:text-[38px]">
            The Mr. Andy Standard
          </h2>
          <p className="text-[16px] text-muted">What sets our experience apart from the rest.</p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1">
          {standards.map((item) => (
            <StandardCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}