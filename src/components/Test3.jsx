import { MdOutlineBathtub } from "react-icons/md";
import Navbar from "./Navbar";
import { IoBed } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import DumDum from "./DumDum";
import Barasat from "./Barasat";
import NewTown from "./NewTown";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Call from "./Call";
import House from "./House";

const SaleComponent = () => (
  <div className="bg-white border-t-red-500 rounded-lg p-4 flex flex-wrap items-center gap-10">
    <div>
      <span className="text-gray-20">Location</span>
      <h1 className="text-lg font-bold">Kolkata, West Bengal</h1>
    </div>
    <div className="border-l border-gray-20 hidden lg:flex h-10 gap-3"></div>
    <button className="bg-[#7065F0] text-white p-4 rounded-lg">
      Browse Properties
    </button>
  </div>
);

const TenentComponent = () => (
  <div className="bg-white border-t-red-500 rounded-lg p-4 flex flex-wrap items-center gap-10 ">
    <div>
      <h1 className="bold-32 sm:items-center sm:text-center lg:bold-32">
        {" "}
        We make it easy for <br /> tenants and landlord .
      </h1>
      <p className="mt-5 text-gray-30 max-w-sm">
        Whether you find yourself in the process of selling your current home,
        seeking financing, or diving into the exciting venture of purchasing a
        new home, our website is designed to be your ultimate resource, making
        every step of your real estate journey easy and efficient. What sets us
        apart is not just our commitment to simplifying complex transactions but
        also the significant savings of both time and money that you&apos;ll
        experience by choosing our services.
      </p>
      <button className="bg-[#7065F0] px-10 rounded-lg p-4 text-white mt-10">
        See more
      </button>
    </div>
  </div>
);

const LandlordComponent = () => (
  <div className="bg-white border-t-red-500 rounded-lg p-4 flex flex-wrap items-center gap-10">
    hello
  </div>
);

const Test3 = () => {
  useEffect(() => {
    document.title = "Property Platform "; // Set your desired page title here
  }, []);
  const [activeLink, setActiveLink] = useState("Rent");
  const [activeeLink, setActiveeLink] = useState("For Tenents");

  const Properties_Links = [
    { href: "", key: "home", label: "Rent" },
    { href: "", key: "about", label: "Buy" },
    { href: "", key: "services", label: "Sell" },
  ];
  const Info_Links = [
    { href: "", key: "home", label: "For Tenents" },
    { href: "", key: "about", label: "For Landlords" },
  ];

  const handleLinkClick = (event, label) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    setActiveLink(label);
  };
  const handleeLinkClick = (event, label) => {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();
    setActiveeLink(label);
  };

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Option 2");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
    // You can perform additional actions based on the selected option if needed
  };

  return (
    <>
      <Navbar />
      {/* <Call /> */}
      <div className="bg-[#F7F7FD]">
        <section className="max-container padding-container flex flex-col gap-20 sm:pb-0 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
          <div className="hero-map" />

          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="bold-32 sm:items-center sm:text-center lg:bold-64">
              Ghar Dhundo Baare Aramse !!
            </h1>
            <p className="regular-20 sm:regular-16 font-bold sm:text-center mt-6 text-black xl:max-w-[520px]">
              Discover the ultimate platform to effortlessly buy, sell, or rent
              your dream property – a seamless marketplace for all your real
              estate needs.
            </p>
            {/* 
            <div className="flexStart gap-16 sm:items-center">
              <div className="my-5  flex flex-col ">
                <div className="bold-32 fkex text-[#7065F0]">
                  <div className="border-l border-gray-500  h-10 gap-3">
                    {" "}
                    <span className="ml-2">50k+</span>
                  </div>
                </div>
                <span className="text-gray-20 ml-2">renters</span>
              </div>
              <div className="my-5  flex flex-col ">
                <div className="bold-32 fkex flex-col text-[#7065F0]">
                  <div className="border-l border-gray-500  h-10 gap-3">
                    <span className="ml-2">50k+</span>
                  </div>
                </div>
                <span className="text-gray-20 ml-2">renters</span>
              </div>
            </div> */}

            {/* <div className="mt-5">
              <ul className="flex rounded-lg bg-white px-5 p-2 gap-12">
                {Properties_Links.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.label)}
                    className={`text-gray-50 text-xl cursor-pointer pb-1.5 transition-all ${
                      activeLink === link.label
                        ? "font-bold border-b-blue-400"
                        : ""
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </ul>
              {activeLink === "Rent" && <SaleComponent />}
              {activeLink === "Buy" && <SaleComponent />}
              {activeLink === "Sell" && <SaleComponent />} */}
            {/* <Button type="button" title="Download App" variant="btn_green" />
              <Button
                type="button"
                title="How we work?"
                icon="/play.svg"
                variant="btn_white_text"
              /> */}
            {/* </div> */}
            <button className="bg-[#7065F0] mt-5 text-white p-4 rounded-lg">
              Browse Properties
            </button>
          </div>
        </section>
        <div className="relative ml-[72rem] mt-[-20rem] mb-10 sm:mb-0 flex-1 hidden md:w-full xl:w-auto xl:block items-start">
          <div className="relative z-20 flex bg-white rounded-lg w-[200px] flex-col gap-8 ">
            <div className="flex flex-col">
              <div className="flexBetween">
                <img src="/house-bg.jpg" alt="house" className="rounded-lg" />
              </div>
            </div>

            <div className="">
              <div className="px-4">
                <p className="block bold-16 font-bold text-[#7065F0]">
                  ₹15,000{" "}
                  <span className="text-gray-20 regular-14">/month</span>
                </p>
                <h1 className="font-bold bold-16">Beverly Springfield</h1>
                <span className="text-gray-20 regular-14">
                  8, Alipore Park Pl, Alipore
                </span>
                <div className="border-t border-gray-30" />
                <div className="mt-2 mb-4 flexBetween">
                  <div className="flex items-center regular-14 gap-3">
                    <IoBed className="text-[#7065F0]" /> 4
                  </div>
                  <div className="flex items-center gap-3 regular-14">
                    <MdOutlineBathtub className="text-[#7065F0]" /> 2
                  </div>
                  <div className="flex items-center gap-3 regular-14">
                    <SlSizeActual className="text-[#7065F0]" /> 6 x 7.5 m²
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="max-container padding-container flex flex-col gap-20 py-10 pb-10 md:gap-28 lg:py-20 xl:flex-row">
        <video
          src="/vid.mp4"
          autoPlay={true}
          muted
          className="rounded-lg "
          loop={true}
        >
          Your browser does not support the video tag.
        </video>
      </section> */}

      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 justify-center p-4 rounded-lg xl:w-1/2 bg-[#F7F7FD] border-2">
          <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <h1 className="bold-20 sm:items-center ml-10 sm:ml-0 sm:text-start mt-5 sm:mt-0  lg:bold-52">
              The new way to find <br /> your new home
            </h1>
            <p className="regular-18 sm:regular-16 font-bold ml-10 sm:ml-0 sm:text-starat mt-6 text-gray-30 xl:max-w-[520px]">
              Discover your dream home among a diverse selection of over 10,000
              properties listed. Whether you&apos;re seeking a cozy apartment, a
              spacious house, or a stylish condominium, our platform offers a
              wide range of options to suit your unique preferences and
              lifestyle. Begin your journey to finding the perfect living space
              today!
            </p>
            <div className="flex  justify-center mt-5">
              <div className="ml-4 mt-5 flex flex-col items-center">
                <img src="/pin.png" alt="" className="w-[3rem]  h-[3rem]" />
                <span className="font-bold invisible">7.4%</span>
                <p className="text-gray-30">Easy to find</p>
              </div>
              <div className="ml-4 mt-5 flex flex-col items-center">
                <img
                  src="/property-1.png"
                  alt=""
                  className="w-[3rem] h-[3rem]"
                />
                <span className="font-bold invisible">3,856</span>
                <p className="text-gray-30">properties in sell and rent</p>
              </div>
              <div className="ml-4 mt-5 flex flex-col items-center">
                <img
                  src="/mobile-banking.png"
                  alt=""
                  className="w-[3rem] h-[3rem]"
                />
                <span className="font-bold">100 +</span>
                <p className="text-gray-30">Daily Transaction</p>
              </div>
            </div>
          </div>
          <img
            src="/bg-1.png"
            alt=""
            className="h-[30rem] w-[40rem] hidden md:w-full xl:w-auto xl:block self-end"
          />
        </div>

        {/* Side image hidden on smaller devices */}
      </section>

      <div className="bg-[#F7F7FD]">
        <section className="max-container  padding-container  gap-20 py-10 pb-32 sm:pb-0 md:gap-28 lg:py-20 xl:flex-row">
          <div className="flex flex-row  sm:flex-col sm:justify-start justify-between items-center">
            <div className="text-center sm:text-left">
              <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">
                Some of our Premium Properties
              </h1>
            </div>

            <div className="relative inline-block mt-4 sm:mt-0">
              <button
                onClick={toggleDropdown}
                className="bg-purple-600 px-6 py-3 rounded-lg text-white flex items-center invisible"
              >
                Browse more options
                {isDropdownOpen ? (
                  <RxCaretDown className="ml-2" />
                ) : (
                  <RxCaretUp className="ml-2" />
                )}
              </button>

              {isDropdownOpen && (
                <div className="absolute mt-2 z-50 w-full sm:w-auto bg-white shadow-lg rounded-md py-2 px-4">
                  {/* Dropdown content goes here */}
                  <a
                    className="block text-gray-800 font-bold hover:text-purple-600 py-1 cursor-pointer"
                    onClick={() => handleOptionSelect("Option 1")}
                  >
                    Dum Dum
                  </a>
                  <a
                    className="block text-gray-800 font-bold hover:text-purple-600 py-1 cursor-pointer"
                    onClick={() => handleOptionSelect("Option 2")}
                  >
                    Barasat
                  </a>
                  <a
                    className="block text-gray-800 font-bold hover:text-purple-600 py-1 cursor-pointer"
                    onClick={() => handleOptionSelect("Option 3")}
                  >
                    New Town
                  </a>
                </div>
              )}
            </div>

            {/* Render content based on the selected option */}
          </div>

          {selectedOption === "Option 1" && <DumDum />}
          {selectedOption === "Option 2" && <House />}
          {selectedOption === "Option 3" && <NewTown />}
          {/* <a href="/Bunglow">
            <button className="bg-[#7065F0] px-10 rounded-lg p-4 text-white mt-10">
              See more
            </button>
          </a> */}
        </section>
        {/* <section className="max-container  padding-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
          <div className="text-center">
            <h1 className="bold-32 sm:items-center sm:text-center lg:bold-52 text-center">
              Testimonials
            </h1>
            <p className="text-gray-20">
              See what our property manages, landlords, and tenents have to say
            </p>
          </div>
        </section> */}
      </div>
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Test3;
