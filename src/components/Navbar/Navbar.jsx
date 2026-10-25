import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import { navLinks } from "../../data/navLinks";
import useLockBodyScroll from "../../hooks/useLockBodyScroll";
import { scrollToId } from "../../hooks/useScrollToHash";
import ContactModal from "../ContactModal/ContactModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleNavClick = (event, href) => {
    setIsOpen(false);

    if (href === "/#contact") {
      event.preventDefault();

      if (location.pathname === "/") {
        // On homepage: scroll to the contact section
        scrollToId("contact");
        if (location.hash !== "#contact") {
          window.history.replaceState(null, "", "/#contact");
        }
      } else {
        // On any other page: open the modal
        setModalOpen(true);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <Container className="flex h-24 items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)} aria-label="MR Andy home">
            <img src="/svg/logo.svg" alt="MR Andy" className="h-14" />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className="text-sm uppercase tracking-wider text-ink transition-colors duration-300 hover:text-brand"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-brand px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
            >
              Book Now
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 text-ink transition-colors hover:text-brand focus:outline-none lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>

        {/* Mobile overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
            isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile drawer */}
        <div
          id="mobile-navigation"
          className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col justify-between bg-white p-6 shadow-2xl transition-[transform,visibility] duration-300 ease-in-out lg:hidden ${
            isOpen ? "visible translate-x-0" : "invisible translate-x-full"
          }`}
          aria-hidden={!isOpen}
        >
          <div>
            <div className="mb-10 flex items-center justify-between">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand">Menu</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-ink transition-colors hover:text-brand focus:outline-none"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.href}
                      onClick={(event) => handleNavClick(event, link.href)}
                      className="block text-base font-semibold uppercase tracking-wider text-ink transition-colors duration-300 hover:text-brand"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-brand px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;