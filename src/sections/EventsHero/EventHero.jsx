import { Link } from "react-router-dom";
import FloatingCard from "./FloatingCard";
import { floatingCards } from "./floatingCards";

const DOTS = [
  "left-[5%] top-[15%] bg-brand max-[600px]:left-[4%] max-[600px]:top-[12%]",
  "left-[8%] top-[40%] bg-gold-dark max-[600px]:left-[7%] max-[600px]:top-[42%]",
  "left-[15%] top-[80%] bg-leaf max-[600px]:left-[10%] max-[600px]:top-[78%]",
  "right-[10.94%] top-[20%] bg-brand max-[600px]:right-[5%] max-[600px]:top-1/4",
  "right-[5%] top-[88.48%] bg-gold max-[600px]:top-[88%]",
];

const btn =
  "flex h-[60px] items-center justify-center whitespace-nowrap rounded-full px-10 text-[16px] uppercase leading-6 tracking-[1.6px] no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 max-[600px]:h-14 max-[600px]:w-full max-[600px]:text-[14px] max-[600px]:leading-5 max-[600px]:tracking-[1.2px]";

export default function EventHero() {
  return (
    <section className="relative isolate flex min-h-[788px] w-full flex-col items-center justify-center overflow-hidden bg-page py-32 max-[1200px]:min-h-0 max-[1200px]:py-[100px] max-[900px]:px-6 max-[900px]:py-[90px] max-[600px]:px-5 max-[600px]:pb-20 max-[600px]:pt-[70px] max-[400px]:px-4 max-[400px]:pb-[70px] max-[400px]:pt-[60px]">
      {DOTS.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`pointer-events-none absolute z-0 size-4 rounded-md opacity-20 ${pos}`}
        />
      ))}

      <div className="relative z-[5] mx-auto grid w-full max-w-[1280px] grid-cols-[544px_544px] items-center justify-center gap-16 px-16 max-[1200px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[1200px]:gap-10 max-[1200px]:px-10 max-[900px]:flex max-[900px]:flex-col max-[900px]:gap-[70px] max-[900px]:p-0 max-[600px]:gap-[50px]">
        <div className="flex w-[544px] flex-col items-start max-[1200px]:w-full max-[900px]:mx-auto max-[900px]:max-w-[600px]">
          <div className="mb-6 inline-flex h-7 w-fit items-center whitespace-nowrap rounded-full bg-gold px-4 text-[12px] uppercase leading-4 tracking-[1.2px] text-[#705900] shadow-soft">
            Curated for Perfection
          </div>

          <h1 className="mb-[23px] w-full max-w-[501px] text-[72px] font-bold leading-[90px] tracking-[-1.44px] text-ink max-[1200px]:max-w-none max-[1200px]:text-[60px] max-[1200px]:leading-[72px] max-[600px]:mb-6 max-[600px]:text-[48px] max-[600px]:leading-[58px] max-[600px]:tracking-[-0.8px] max-[400px]:text-[42px] max-[400px]:leading-[51px]">
            Candy Walls for
            <br />
            Every
            <br />
            <span className="not-italic text-brand">Celebration</span>
          </h1>

          <p className="mb-6 w-full max-w-[522px] text-[18px] leading-[29px] text-muted max-[1200px]:text-[17px] max-[1200px]:leading-[27px] max-[600px]:mb-7 max-[600px]:text-[16px] max-[600px]:leading-[26px] max-[400px]:text-[15px] max-[400px]:leading-6">
            Whether you&apos;re planning a corporate gathering, milestone birthday, baby shower,
            wedding, or graduation party, Mr. Andy transforms events into unforgettable experiences.
          </p>

          <div className="flex w-full max-w-[504px] gap-4 pt-4 max-[600px]:max-w-none max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:pt-0">
            <Link
              to="/contact"
              className={`${btn} w-[254.08px] bg-[linear-gradient(180deg,#dd2a4b_0%,#eb436d_100%)] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_8px_20px_rgba(185,2,53,0.15)]`}
            >
              Book Your Event
            </Link>
            <Link
              to="/packages"
              className={`${btn} w-[233.05px] border-2 border-solid border-brand bg-page text-brand`}
            >
              View Packages
            </Link>
          </div>
        </div>

        <div className="relative flex h-[500px] w-[544px] items-center justify-center max-[1200px]:w-full max-[900px]:mx-auto max-[900px]:max-w-[544px] max-[600px]:h-[400px] max-[400px]:h-[340px]">
          <img
            src="/gallery/eventHero.webp"
            alt="Mr. Andy Candy Wall"
            className="absolute left-[13px] top-[-15.2px] z-[1] block h-[531px] w-[531px] rounded-[30px] object-cover max-[1200px]:left-1/2 max-[1200px]:h-[min(100%,500px)] max-[1200px]:w-[min(100%,500px)] max-[1200px]:-translate-x-1/2 max-[600px]:top-0 max-[600px]:h-[min(100%,400px)] max-[600px]:w-[min(100%,400px)] max-[600px]:rounded-3xl max-[400px]:h-[340px] max-[400px]:w-[340px]"
          />

          {floatingCards.map((card) => (
            <FloatingCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}