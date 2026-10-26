import { Link } from "react-router-dom";

const btn =
  "inline-flex h-[53px] items-center justify-center whitespace-nowrap rounded-full px-7 text-[14px] font-bold leading-[17px] tracking-[0.7px] no-underline transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 max-[480px]:w-full max-[480px]:max-w-[300px]";

const primary =
  "w-[191px] text-white [background:linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%),#b90235] shadow-[0_12px_25px_rgba(185,2,53,0.12)] hover:shadow-[0_16px_30px_rgba(185,2,53,0.18)]";

const secondary =
  "w-[187px] border-2 border-solid border-brand bg-white text-brand hover:bg-blush";

export default function AboutHero() {
  return (
    <section className="flex min-h-[890px] w-full items-center justify-center overflow-hidden bg-white px-16 py-[100px] max-[1100px]:min-h-0 max-[1100px]:px-10 max-[1100px]:py-20 max-[768px]:px-6 max-[768px]:py-[70px] max-[480px]:px-[18px] max-[480px]:py-[55px]">
      <div className="grid w-full max-w-[1152px] grid-cols-2 items-center gap-12 max-[1100px]:gap-[35px] max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-[45px] max-[480px]:gap-[35px]">
        <div className="flex w-full min-w-0 flex-col items-start max-[768px]:items-center max-[768px]:text-center">
          <span className="block text-[16px] uppercase leading-6 tracking-[1.6px] text-brand max-[768px]:text-[14px] max-[768px]:leading-[22px] max-[768px]:tracking-[1.4px] max-[480px]:text-[12px] max-[480px]:leading-5 max-[480px]:tracking-[1.2px]">
            Crafting Sweet Memories
          </span>

          <h1 className="mt-6 w-full text-[72px] font-bold leading-[1.1] tracking-[-1.8px] text-ink max-[1100px]:text-[56px] max-[768px]:mt-5 max-[768px]:text-[48px] max-[768px]:leading-[1.08] max-[768px]:tracking-[-0.8px] max-[480px]:text-[39px] max-[480px]:leading-[1.1]">
            We Don&apos;t Just
            <br />
            Serve Candy.
            <br />
            <span className="text-brand">
              We Create
              <br />
              Moments.
            </span>
          </h1>

          <p className="mt-7 w-full max-w-[520px] text-[18px] leading-[29px] text-muted max-[1100px]:text-[16px] max-[1100px]:leading-[27px] max-[768px]:mt-[22px] max-[768px]:max-w-[550px] max-[768px]:leading-[26px] max-[480px]:mt-5 max-[480px]:text-[15px] max-[480px]:leading-6">
            At Mr. Andy, we believe every celebration deserves a little wonder.
            Our custom installations transform treats into high-end art.
          </p>

          <div className="mt-[30px] flex w-full items-center gap-4 max-[768px]:mt-[26px] max-[768px]:flex-wrap max-[768px]:justify-center max-[480px]:mt-[25px] max-[480px]:flex-col max-[480px]:gap-3">
            <Link to="/#gallery" className={`${btn} ${primary}`}>
              View Our Work
            </Link>
            <Link to="/packages" className={`${btn} ${secondary}`}>
              Our Packages
            </Link>
          </div>
        </div>

        <div className="isolate h-[690px] w-full overflow-hidden rounded-[32px] shadow-card max-[1100px]:h-[600px] max-[768px]:h-[550px] max-[768px]:rounded-[28px] max-[480px]:h-[450px] max-[480px]:rounded-3xl">
          <img
            src="/svg/abouthero.webp"
            alt="People interacting with a candy wall"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}