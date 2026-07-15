import { Link } from "react-router-dom";
import Container from "../Container";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="flex h-24 items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src="/svg/logo.svg" alt="MR Andy" className="h-14" />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  className="uppercase text-sm tracking-wider text-[#1C1B1B] transition-colors duration-300 hover:text-[#B90235]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="rounded-full bg-[#B90235] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg"
        >
          Book Now
        </Link>
      </Container>
    </header>
  );
};

export default Navbar;
