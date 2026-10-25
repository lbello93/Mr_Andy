import { features } from "./whyData";
import FeatureItem from "./FeatureItem";

export default function WhyWeExist() {
  return (
    <section className="bg-page py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 items-center gap-16 px-16 max-[992px]:grid-cols-1 max-[768px]:px-6">
        <div className="relative">
          <img
            src="/gallery/why.png"
            alt="Candy wall at an event"
            loading="lazy"
            decoding="async"
            className="h-[680px] w-full rounded-[32px] object-cover shadow-card max-[768px]:h-[500px]"
          />

          <figure className="absolute -bottom-8 -right-8 m-0 w-[270px] rounded-3xl bg-rose-light p-8 text-white shadow-[0_20px_25px_-5px_rgba(185,2,53,0.15)] max-[992px]:bottom-4 max-[992px]:right-4 max-[768px]:relative max-[768px]:inset-auto max-[768px]:mt-6 max-[768px]:w-full">
            <blockquote className="m-0 mb-4 text-[16px] italic leading-normal">
              &ldquo;It wasn&apos;t just a snack, it was the centerpiece of the whole conversation.&rdquo;
            </blockquote>
            <figcaption className="text-[15px]">&mdash; Sarah J, Event Planner</figcaption>
          </figure>
        </div>

        <div>
          <h2 className="mb-7 text-[48px] text-ink max-[768px]:text-[38px]">Why We Exist</h2>

          <p className="mb-6 text-[18px] leading-[1.65] text-muted">
            Events are filled with d&eacute;cor that people look at. We wanted to create something
            people <strong className="text-brand">experience.</strong>
          </p>

          <p className="mb-6 text-[18px] leading-[1.65] text-muted">
            In a world of digital interactions, there&apos;s something tactile and nostalgic about
            choosing your favorite treats from a beautifully lit wall. We exist to bridge the gap
            between childhood wonder and adult sophistication.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            {features.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}