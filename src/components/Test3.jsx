import { MdOutlineBathtub } from "react-icons/md";
import Navbar from "./Navbar";
import { IoBed } from "react-icons/io5";
import { SlSizeActual } from "react-icons/sl";
import { useEffect } from "react";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import House from "./House";

const Test3 = () => {
  useEffect(() => {
    document.title = "Property Platform "; // Set your desired page title here
  }, []);

  return (
    <>
      <Navbar />
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

            <button className="bg-[#7065F0] mt-5 text-white p-4 rounded-lg">
              Browse Properties
            </button>
          </div>
        </section>
        
      </div>

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
      </section>

      <div className="bg-[#F7F7FD]">
        <section className="py-5 ">
          <House />
        </section>
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
