import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Filter from "./Filter";
import Contact from "./Contact";
import Cards from "./Cards";
import Call from "./Call";

const Test = () => {
  return (
    <>
      <Navbar />
      <Call />
      {/* <section className="relative">
        <img
          src="/bg1.jpg"
          alt="background"
          className="w-full h-auto md:h-full sm:h-[20rem] sm:object-fill"
        />
        <h1 className="font-bold text-3xl sm:text-xl  text-center text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Kolkata&apos;s Largest NoBrokerage Property Site
        </h1>
      </section> */}
      <section className="max-container padding-container flex flex-col gap-10 md:gap-20 lg:gap-28 py-10 pb-16 lg:pb-20 bg-blue-800 rounded-xl sm:rounded-none xl:flex-row">
        <div className="flex flex-1 flex-col xl:w-1/2 text-center xl:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
            Kolkata&apos;s First{" "}
            <span className="text-blue-400">No Brokerage</span> Platform
          </h1>
          <span className="mt-3 text-lg text-blue-300">
            Simple - Unique - Friendly
          </span>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-10 mt-6 md:mt-10">
            <a href="#" className="text-blue-800">
              <button className="p-3 bg-white rounded-lg">Find a House</button>
            </a>
            <div className="flex items-center text-white">
              <img
                src="/play.png"
                alt="Play Icon"
                className="h-8 w-8 md:h-10 md:w-10 mr-2"
              />
              <h3 className="text-lg md:text-xl">Play a video</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-1 xl:w-1/2">
          <img
            src="/banner.jpg"
            alt="Kolkata"
            className="rounded-xl w-full h-auto"
          />
        </div>
      </section>

      <div className="bg-gray-10">
        <Cards />
      </div>
      <Card />
      <Gallery />
      <Testimonials />
      <div id="contact">
        <Contact />
      </div>
      <Filter />
      <Footer />
    </>
  );
};

export default Test;
