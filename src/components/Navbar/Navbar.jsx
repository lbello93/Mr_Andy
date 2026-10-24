import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Container from "../Container";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Prevent background scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Scroll to the contact section whenever the URL points to #contact.
  // This also works when navigating from another page to the homepage.
  useEffect(() => {
    if (location.hash !== "#contact") return;

    let attempts = 0;
    let animationFrameId;

    const scrollToContact = () => {
      const contactSection = document.getElementById("contact");

      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        return;
      }

      // Retry briefly in case the homepage section has not rendered yet.
      if (attempts < 30) {
        attempts += 1;
        animationFrameId = requestAnimationFrame(scrollToContact);
      }
    };

    animationFrameId = requestAnimationFrame(scrollToContact);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [location.pathname, location.hash]);

  // Handle navigation links
  const handleNavClick = (event, href) => {
    setIsOpen(false);

    if (href === "/#contact") {
      event.preventDefault();

      if (location.pathname === "/") {
        // Already on the homepage: scroll directly to the section.
        const contactSection = document.getElementById("contact");

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // Keep the URL hash in sync without triggering a route navigation.
        if (location.hash !== "#contact") {
          window.history.replaceState(null, "", "/#contact");
        }
      } else {
        // Navigate home. The location effect will scroll after rendering.
        navigate("/#contact");
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container className="flex h-24 items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} aria-label="MR Andy home">
          <img src="/svg/logo.svg" alt="MR Andy" className="h-14" />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="text-sm uppercase tracking-wider text-[#1C1B1B] transition-colors duration-300 hover:text-[#B90235]"
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
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-[#B90235] px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg sm:px-6 sm:py-3 sm:text-sm"
          >
            Book Now
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="p-2 text-[#1C1B1B] transition-colors hover:text-[#B90235] focus:outline-none lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col justify-between bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div>
          <div className="mb-10 flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#B90235]">
              Menu
            </span>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#1C1B1B] transition-colors hover:text-[#B90235] focus:outline-none"
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
                    tabIndex={isOpen ? 0 : -1}
                    className="block text-base font-semibold uppercase tracking-wider text-[#1C1B1B] transition-colors duration-300 hover:text-[#B90235]"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Book Now Button */}
        <div className="border-t border-gray-100 pt-6">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
            className="block rounded-full bg-[#B90235] px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#9f012d] hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
