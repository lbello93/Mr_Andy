import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const eventCategories = [
  {
    title: "Corporate Events",
    subtitle: "Professional. Interactive. Memorable.",
    description:
      "Elevate your corporate identity with a candy experience that leaves a lasting impression. From Employee Appreciation days to high-stakes Product Launches, we customize every detail to match your brand's palette and tone.",

    image: "/eventCard/cor.webp",
    reverse: false,
  },
  {
    title: "Birthday Celebrations",
    subtitle: "Make every birthday sweeter.",
    description:
      "Whether it's a whimsical 1st birthday or a glam Sweet 16, our candy walls are the ultimate party showstopper. We create vibrant, rainbow-filled displays that delight guests of all ages.",
    image: "/eventCard/bir.webp",
    reverse: true,
  },
  {
    title: "Baby Showers",
    subtitle: "Celebrate life's sweetest arrival.",
    description:
      "Our baby shower candy walls are designed with a delicate touch. Think soft pastels, whimsical florals, and a menu of treats as sweet as the new arrival.",
    image: "/eventCard/baby.webp",
    reverse: false,
  },
  {
    title: "Weddings",
    subtitle: "A beautiful treat your guests will never forget.",
    description:
      "Luxury meets confectionery. Our wedding displays use premium glass, organic floral integrations, and sophisticated monochromatic palettes like blush and ivory to complement your decor perfectly.",

    image: "/eventCard/wedd.webp",
    reverse: true,
  },
  {
    title: "Graduation Parties",
    subtitle: "Celebrate every achievement.",
    description:
      "Reward years of hard work with a prestigious gold and black themed display. Perfect for high school graduations and university celebrations alike.",
    image: "/eventCard/grad.webp",
    reverse: false,
  },
];

export default function EventCategories() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-32 bg-page py-24 max-[800px]:gap-20 max-[800px]:px-6 max-[800px]:py-20 max-[600px]:gap-[70px] max-[600px]:px-5 max-[600px]:py-[70px] max-[400px]:gap-[60px] max-[400px]:px-4 max-[400px]:py-[60px]">
      {eventCategories.map((event, index) => (
        <article
          key={event.title}
          className={`flex min-h-[304px] w-full max-w-[1280px] items-center justify-center gap-16 px-16 max-[1100px]:gap-10 max-[1100px]:px-10 max-[800px]:min-h-0 max-[800px]:max-w-[650px] max-[800px]:flex-col max-[800px]:items-stretch max-[800px]:gap-8 max-[800px]:p-0 max-[600px]:gap-7 ${
            event.reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="isolate h-[304px] min-w-0 flex-1 overflow-hidden rounded-[32px] shadow-soft max-[1100px]:h-[280px] max-[800px]:h-[300px] max-[800px]:w-full max-[800px]:flex-none max-[600px]:h-[250px] max-[600px]:rounded-3xl max-[400px]:h-[220px] max-[400px]:rounded-[20px]">
            <img
              src={event.image}
              alt={event.title}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
              className="block h-full w-full object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start gap-[23px] max-[800px]:w-full max-[800px]:flex-none max-[800px]:gap-[18px] max-[600px]:gap-4">
            <h2 className="w-full text-[48px] font-bold leading-[58px] text-ink max-[1100px]:text-[40px] max-[1100px]:leading-[49px] max-[800px]:text-[38px] max-[800px]:leading-[46px] max-[600px]:text-[34px] max-[600px]:leading-[42px] max-[400px]:text-[30px] max-[400px]:leading-[38px]">
              {event.title}
            </h2>

            <p className="w-full text-[18px] font-bold leading-[29px] text-brand max-[800px]:text-[17px] max-[800px]:leading-[27px] max-[600px]:text-[16px] max-[600px]:leading-[25px] max-[400px]:text-[15px] max-[400px]:leading-[23px]">
              {event.subtitle}
            </p>

            <p className="w-full text-[16px] leading-6 text-muted max-[800px]:leading-[25px] max-[600px]:text-[15px] max-[600px]:leading-6 max-[400px]:text-[14px] max-[400px]:leading-[22px]">
              {event.description}
            </p>

            {event.points && (
              <ul className="m-0 flex w-full list-none flex-col items-start gap-3 p-0 pt-px max-[800px]:gap-2.5">
                {event.points.map((point) => (
                  <li
                    key={point}
                    className="flex min-h-6 w-full items-center gap-3 text-[16px] leading-6 text-ink max-[600px]:text-[15px] max-[600px]:leading-[23px]"
                  >
                    <span
                      aria-hidden="true"
                      className="block size-[11.67px] shrink-0 bg-brand"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {event.quote && (
              <blockquote className="m-0 flex min-h-[123px] w-full items-center rounded-2xl border border-[#e4bdbe] bg-white px-6 pb-6 pt-[25px] text-[16px] italic leading-6 text-muted max-[600px]:min-h-0 max-[600px]:p-5 max-[600px]:text-[15px] max-[600px]:leading-[23px] max-[400px]:p-[18px] max-[400px]:text-[14px] max-[400px]:leading-[22px]">
                &ldquo;{event.quote}&rdquo;
              </blockquote>
            )}

            <Link
              to="/contact"
              className="group flex w-fit items-center gap-2 pt-px text-[14px] uppercase leading-5 tracking-[1.4px] text-brand no-underline hover:text-brand-dark max-[600px]:text-[13px] max-[600px]:tracking-[1.3px]"
            >
              <span className="whitespace-nowrap">Book Your Event</span>
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-[250ms] group-hover:translate-x-[5px]"
              />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
