import { useState } from "react";
import Properties from "./Properties";

const SaleComponent = () => (
  <div className="text-blue-500">
    <h1 className="text-center font-bold text-2xl lg:text-4xl">
      For Sale Properties
    </h1>
    {/* Add your "For Sale" component content here */}
    <Properties />
  </div>
);

const RentComponent = () => (
  <div className="text-blue-500">
    <h1 className="text-center font-bold text-2xl lg:text-4xl">
      For Rent Component
    </h1>
    {/* Add your "For Rent" component content here */}
  </div>
);

const ViewAllComponent = () => (
  <div className="text-blue-500">
    <h1 className="text-center font-bold text-2xl lg:text-4xl">
      View All Component
    </h1>
    {/* Add your "View All" component content here */}
  </div>
);

const Nav2 = () => {
  const [activeLink, setActiveLink] = useState("For Sale");

  const Properties_Links = [
    { href: "", key: "home", label: "For Sale" },
    { href: "", key: "about", label: "For Rent" },
    { href: "", key: "services", label: "View All" },
  ];

  const handleLinkClick = (event, label) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    setActiveLink(label);
  };

  return (
    <>
      <nav className="flex items-center justify-between max-container padding-container relative z-30 py-5 ">
        <a href="/">
          <h1 className="font-bold text-2xl lg:text-4xl text-blue-900">
            Top Properties
          </h1>
        </a>
        <ul className="hidden lg:flex h-full gap-12">
          {Properties_Links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.label)}
              className={`text-gray-50 cursor-pointer pb-1.5 transition-all ${
                activeLink === link.label ? "font-bold" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </ul>
      </nav>
      <div>
        {/* Render the active component based on the selected link */}
        {activeLink === "For Sale" && <SaleComponent />}
        {activeLink === "For Rent" && <RentComponent />}
        {activeLink === "View All" && <ViewAllComponent />}
      </div>
    </>
  );
};

export default Nav2;
