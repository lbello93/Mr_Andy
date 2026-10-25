import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: "/gallery/gallery1.png", alt: "Guests exploring the MR. ANDY candy wall" },
  { src: "/gallery/gallery2.png", alt: "Close-up of the premium candy dispensers" },
  { src: "/gallery/gallery3.png", alt: "MR. ANDY candy wall display at an event" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full overflow-hidden bg-[#f0eded] py-24 max-[1024px]:py-[76px] max-[700px]:py-14 max-[520px]:py-12"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-16 px-16 max-[1024px]:gap-12 max-[1024px]:px-9 max-[700px]:gap-8 max-[700px]:px-5 max-[520px]:gap-7">
        <div className="flex w-full items-end justify-between gap-6 max-[700px]:items-start max-[520px]:flex-col max-[520px]:gap-4">
          <div className="min-w-0">
            <h2 className="mb-0.5 text-[48px] font-bold leading-[58px] tracking-[-1.2px] text-ink max-[1024px]:text-[40px] max-[1024px]:leading-[1.2] max-[700px]:text-[32px] max-[700px]:tracking-[-0.7px]">
              The Visual Heart
            </h2>
            <p className="text-[16px] leading-6 text-muted max-[1024px]:text-[14px] max-[700px]:max-w-[360px] max-[700px]:text-[12px] max-[700px]:leading-[1.7] max-[520px]:mt-2 max-[520px]:max-w-[320px]">
              Experience the scale and setup quality of MR. ANDY.
            </p>
          </div>

          <Link
            to="/packages"
            className="mb-0.5 inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#e2d7d9] bg-white px-[18px] py-3 text-[13px] font-semibold text-ink no-underline transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white max-[700px]:gap-[5px] max-[700px]:px-3 max-[700px]:py-2.5 max-[700px]:text-[11px] max-[520px]:px-3.5 max-[520px]:text-[12px]"
          >
            Explore All
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid w-full min-w-0 grid-cols-3 items-stretch gap-4 max-[1024px]:gap-3.5 max-[700px]:gap-2.5 max-[520px]:grid-cols-1 max-[520px]:gap-5">
          {galleryImages.map((image, index) => (
            <article
              key={image.src}
              className="group relative isolate block h-[500px] min-h-0 w-full min-w-0 overflow-hidden rounded-[32px] bg-[#e8e0e2] shadow-[0_20px_25px_-5px_rgba(185,2,53,0.08),0_8px_10px_-6px_rgba(185,2,53,0.08)] max-[1024px]:h-[400px] max-[1024px]:rounded-3xl max-[700px]:h-[300px] max-[700px]:rounded-[18px] max-[520px]:aspect-[0.9] max-[520px]:h-auto max-[520px]:rounded-3xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className="block h-full w-full max-w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}