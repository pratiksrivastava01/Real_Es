import { useState, useEffect } from "react";
import Properties from "./Properties";

const SaleComponent = () => (
  <div className="text-blue-500">
    <h1 className="text-center font-bold text-2xl lg:text-4xl">
      For Sale Properties
    </h1>
    {/* Add your "For Sale" component content here */}
    <Properties />
    <Properties />
    <Properties />
    <Properties />
  </div>
);

const RentComponent = () => (
  <div className="text-blue-500">
    <h1 className="text-center font-bold text-2xl lg:text-4xl">
      For Rent Component
    </h1>
    {/* Add your "For Rent" component content here */}
    <Properties />
    <Properties />
    <Properties />
    <Properties />
  </div>
);

const Card = () => {
  const [activeLink, setActiveLink] = useState("Basant");

  const Properties_Links = [
    { href: "", key: "home", label: "Basant" },
    { href: "", key: "about", label: "Dum Dum" },
    { href: "", key: "services", label: "New Town" },
  ];

  useEffect(() => {
    // Set the initial activeLink based on screen size
    const screenWidth = window.innerWidth;
    const initialActiveLink =
      screenWidth <= 768 ? Properties_Links[0].label : "";
    setActiveLink(initialActiveLink);
  }, []); // Run this effect only once on mount

  const handleLinkClick = (event, label) => {
    event.preventDefault();
    setActiveLink(label);
  };

  return (
    <>
      <nav className="items-center max-container padding-container relative z-30 py-5">
        <a href="/">
          <h1 className="font-bold text-2xl lg:text-4xl text-blue-900">
            Top Properties
          </h1>
        </a>
        <ul className="lg:flex h-full gap-12 mt-10 ml-5">
          {Properties_Links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.label)}
              className={`text-gray-50 cursor-pointer pb-1.5 p-2 transition-all ${
                activeLink === link.label
                  ? "font-bold bg-blue-700 p-2 text-white rounded-lg"
                  : "hover:bg-blue-500 p-2 rounded-lg hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
      <div>
        {/* Render the active component based on the selected link */}
        {activeLink === "Basant" && <SaleComponent />}
        {activeLink === "Dum Dum" && <RentComponent />}
        {activeLink === "New Town" && <SaleComponent />}
      </div>
    </>
  );
};

export default Card;
