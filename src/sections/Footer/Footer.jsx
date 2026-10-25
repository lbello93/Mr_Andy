import { Link } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "Packages", to: "/packages" },
  { label: "Events", to: "/events" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "text-[16px] leading-5 text-white no-underline transition-[opacity,transform] duration-200 hover:translate-x-[3px] hover:opacity-75 max-[400px]:text-[15px]";

const itemClass =
  "mb-4 text-[16px] leading-5 text-white no-underline last:mb-0 hover:underline hover:underline-offset-[3px] max-[700px]:text-center max-[400px]:text-[15px]";

const headingClass =
  "mb-7 font-serif text-[20px] font-normal leading-7 text-white max-[700px]:mb-[22px] max-[400px]:text-[19px]";

export default function Footer() {
  return (
    <footer className="relative min-h-[402px] w-full overflow-hidden bg-rose-light text-white max-[700px]:min-h-0">
      <div className="mx-auto grid min-h-[402px] w-[83.6%] max-w-[1070px] grid-cols-[1.7fr_0.9fr_1fr] items-center gap-x-[70px] py-[60px] max-[900px]:w-[88%] max-[900px]:grid-cols-[1.3fr_1fr_1fr] max-[900px]:gap-x-10 max-[700px]:flex max-[700px]:min-h-0 max-[700px]:w-full max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-[50px] max-[700px]:px-7 max-[700px]:py-[70px] max-[400px]:gap-[42px] max-[400px]:px-5 max-[400px]:py-[60px]">
        <div className="flex items-center justify-start max-[700px]:w-full max-[700px]:justify-center">
          <Link to="/" aria-label="Mr. Andy Candy Wall home">
            <img
              src="/svg/footer.svg"
              alt="Mr. Andy Candy Wall"
              className="block h-auto w-[360px] max-w-full object-contain max-[900px]:w-[280px] max-[400px]:w-[240px]"
            />
          </Link>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-col items-start gap-4 max-[700px]:w-full max-[700px]:items-center max-[700px]:text-center"
        >
          <h3 className={headingClass}>Quick Links</h3>
          {QUICK_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} className={linkClass}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start max-[700px]:w-full max-[700px]:items-center max-[700px]:text-center">
          <h3 className={headingClass}>Contact Us</h3>
          <a href="tel:+18326332404" className={itemClass}>
            832-633-2404
          </a>
          <a href="mailto:mrandycandywall@gmail.com" className={itemClass}>
            mrandycandywall@gmail.com
          </a>
          <p className={itemClass}>Houston, TX</p>
        </div>
      </div>
    </footer>
  );
}