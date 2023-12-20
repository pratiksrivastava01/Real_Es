import { useState } from "react";
import { NAV_LINKS } from "../constants";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Test2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-gradient-to-b from-[#A4BECF] to-[#C4D5E5] ">
        <nav className="flexBetween max-container padding-container relative z-30 py-5">
          <a href="/">
            <img src="/logo.svg" alt="logo" width={74} height={29} />
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
        <div>
          <iframe
            width="560"
            height="600"
            src="https://www.youtube.com/embed/wjcEh_w_qdI?si=E7C4e1kFUvMY55nK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="w-full "
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Test2;
