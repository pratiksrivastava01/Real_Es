import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the required icons

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container  relative z-30 py-5">
      <a href="/">
        <img src="/Logo.png" alt="logo" width={100} height={50} />
      </a>

      {/* Toggle menu icon */}
      <div
        className={`cursor-pointer lg:hidden ${isMenuOpen ? "hidden" : ""}`}
        onClick={toggleMenu}
      >
        <FaBars />
      </div>
      <div
        className={`cursor-pointer lg:hidden ${isMenuOpen ? "" : "hidden"}`}
        onClick={toggleMenu}
      >
        <FaTimes />
      </div>

      <ul
        className={`hidden lg:flex h-full gap-12 ${
          isMenuOpen ? "absolute" : ""
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </a>
        ))}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
        >
          Contact
        </Link>
      </ul>

      {/* Responsive menu for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full h-[100vh]  left-48 right-0 bg-white shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              href={link.href}
              key={link.key}
              className="block py-2 px-4 text-gray-50 hover:font-bold"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="regular-16 text-gray-50 ml-4 cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
