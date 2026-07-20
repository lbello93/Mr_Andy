import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-[#B90235] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg"
          >
            Book Now
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#1C1B1B] hover:text-[#B90235] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-between items-center mb-10">
            <span className="font-semibold text-sm uppercase tracking-wider text-[#B90235]">
              Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#1C1B1B] hover:text-[#B90235] focus:outline-none"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav>
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-base font-semibold uppercase tracking-wider text-[#1C1B1B] transition-colors duration-300 hover:text-[#B90235]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile CTA inside Drawer */}
        <div className="pt-6 border-t border-gray-100">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center rounded-full bg-[#B90235] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
