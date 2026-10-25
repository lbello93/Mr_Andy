import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gallery from "./galleryData";

const frame =
  "group isolate overflow-hidden rounded-[18px] bg-[#f3eaea] max-[600px]:rounded-[14px]";
const img =
  "block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]";

export default function Gallery() {
  return (
    <section className="w-full bg-page py-[100px] max-[900px]:py-20 max-[600px]:py-[60px]">
      <div className="mx-auto w-[min(1152px,calc(100%-48px))] max-[600px]:w-[min(1152px,calc(100%-32px))]">
        <div className="mb-10 flex items-end justify-between gap-[30px] max-[600px]:mb-7 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-[18px]">
          <div>
            <h2 className="mb-3 text-[48px] font-medium leading-[1.1] text-ink max-[900px]:text-[40px] max-[600px]:text-[34px]">
              {gallery.title}
            </h2>
            <p className="max-w-[560px] text-[15px] leading-[1.7] text-[#6b5556] max-[600px]:text-[14px]">
              {gallery.subtitle}
            </p>
          </div>

          <Link
            to="/about"
            className="inline-flex shrink-0 items-center gap-2 py-3 text-[12px] font-bold tracking-[0.12em] text-brand-dark no-underline transition-[gap,color] duration-[250ms] hover:gap-[13px] hover:text-rose"
          >
            EXPLORE ALL
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-[1.55fr_1fr] gap-5 max-[900px]:grid-cols-1 max-[600px]:gap-3.5">
          <div className={`${frame} h-[560px] max-[900px]:h-[480px] max-[600px]:h-[360px]`}>
            <img src={gallery.featured} alt="Mr. Andy Candy Wall" loading="lazy" decoding="async" className={img} />
          </div>

          <div className="grid grid-rows-[1fr_1fr] gap-5 max-[900px]:grid-cols-2 max-[900px]:grid-rows-[280px] max-[600px]:grid-rows-[220px] max-[600px]:gap-3.5 max-[420px]:grid-cols-1 max-[420px]:grid-rows-[220px_220px]">
            {gallery.sideImages.map((image, index) => (
              <div key={image} className={`${frame} min-h-0`}>
                <img src={image} alt={`Mr. Andy Candy Wall ${index + 2}`} loading="lazy" decoding="async" className={img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}