import { Quote, Heart } from "lucide-react";
import { chapters } from "./ourStoryData";

/* Turns **text** into bold pink text */
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-bold text-brand">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

function PullQuote({ text }) {
  return (
    <blockquote className="relative m-0 rounded-2xl border-l-4 border-brand bg-[#FCE7EF] px-5 py-4 pl-11">
      <Quote
        size={18}
        className="absolute left-4 top-4 text-brand"
        aria-hidden="true"
      />
      <p className="font-serif text-[18px] font-medium italic leading-[1.5] text-brand">
        {text}
      </p>
    </blockquote>
  );
}

function Paragraph({ item }) {
  if (typeof item === "object" && item.quote)
    return <PullQuote text={item.quote} />;

  return (
    <p className="text-[16px] leading-[1.75] text-muted">
      <RichText text={item} />
    </p>
  );
}

function Chapter({ chapter, index }) {
  const number = String(index + 1).padStart(2, "0");
  const isLeft = index % 2 === 0;

  return (
    <li className="relative grid grid-cols-[40px_1fr] items-start gap-4 pb-8 last:pb-0 min-[900px]:grid-cols-[1fr_80px_1fr] min-[900px]:gap-0 min-[900px]:pb-10">
      {/* Number marker */}
      <div className="relative z-[1] col-start-1 row-start-1 flex justify-center min-[900px]:col-start-2 min-[900px]:pt-6">
        <span className="flex size-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#e0174f,#CB0C4D)] font-serif text-[14px] font-bold text-white shadow-[0_0_0_6px_#FCE7EF,0_10px_22px_-8px_rgba(203,12,77,0.6)] min-[900px]:size-12 min-[900px]:text-[16px]">
          {number}
        </span>
      </div>

      {/* Card */}
      <article
        className={`group relative col-start-2 row-start-1 rounded-3xl border-2 border-[#f6d3dd] bg-white p-7 shadow-[0_20px_45px_-30px_rgba(203,12,77,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-brand max-[768px]:rounded-2xl max-[768px]:p-5 ${
          isLeft ? "min-[900px]:col-start-1" : "min-[900px]:col-start-3"
        }`}
      >
        {/* Pointer towards the timeline (desktop) */}
        <span
          aria-hidden="true"
          className={`absolute top-9 hidden size-4 rotate-45 border-[#f6d3dd] bg-white transition-colors group-hover:border-brand min-[900px]:block ${
            isLeft
              ? "-right-[10px] border-r-2 border-t-2"
              : "-left-[10px] border-b-2 border-l-2"
          }`}
        />

        <span className="mb-1.5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          <span className="h-[2px] w-5 rounded-full bg-brand" />
          Chapter {number}
        </span>

        <h3 className="mb-4 font-serif text-[23px] font-bold leading-[1.25] text-ink max-[768px]:text-[20px]">
          {chapter.title}
        </h3>

        <div className="flex flex-col gap-3">
          {chapter.paragraphs.map((item, i) => (
            <Paragraph key={i} item={item} />
          ))}
        </div>
      </article>
    </li>
  );
}

export default function OurStory() {
  return (
    <section
      aria-labelledby="our-story-title"
      className="bg-surface px-6 py-20 max-[768px]:px-4 max-[768px]:py-16"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <header className="mx-auto mb-12 max-w-[720px] text-center max-[768px]:mb-10">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FCE7EF] px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Our Story
          </span>
          <h2
            id="our-story-title"
            className="font-serif text-[44px] font-bold leading-[1.15] text-ink max-[768px]:text-[32px]"
          >
            The Story Behind{" "}
            <span className="text-brand">Mr. Andy’s Candy Wall</span>
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-1 w-20 rounded-full bg-brand"
          />
        </header>

        {/* Timeline */}
        <ol className="relative m-0 list-none p-0">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[19px] top-6 w-[3px] rounded-full bg-gradient-to-b from-brand via-[#f39ab6] to-[#FCE7EF] min-[900px]:left-1/2 min-[900px]:-translate-x-1/2"
          />
          {chapters.map((chapter, i) => (
            <Chapter key={chapter.title} chapter={chapter} index={i} />
          ))}
        </ol>

        {/* Closing */}
        <div className="mx-auto mt-12 max-w-[720px] rounded-3xl bg-[linear-gradient(135deg,#CB0C4D,#e0174f)] p-[2px] shadow-[0_24px_50px_-28px_rgba(203,12,77,0.6)]">
          <div className="flex flex-col items-center gap-3 rounded-[22px] bg-white px-8 py-8 text-center max-[768px]:px-5">
            <Heart
              size={24}
              className="fill-brand text-brand"
              aria-hidden="true"
            />
            <p className="max-w-[520px] text-[16px] leading-[1.7] text-muted">
              From making chocolate at home to designing his own candy wall,
              Andy&apos;s journey shows what happens when{" "}
              <strong className="font-bold text-brand">
                passion meets opportunity
              </strong>
              .
            </p>
            <p className="font-serif text-[24px] font-semibold italic leading-[1.35] text-brand max-[768px]:text-[20px]">
              A little sweetness, a lasting memory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
