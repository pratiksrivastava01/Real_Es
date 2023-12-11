import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Filter from "./Filter";
import Contact from "./Contact";
import Cards from "./Cards";

const Test = () => {
  return (
    <>
      <Navbar />
      <section className="relative">
        <img
          src="/bg1.jpg"
          alt="background"
          className="w-full h-auto md:h-full"
        />
        <h1 className="font-bold text-3xl sm:text-sm  text-center text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Kolkata&apos;s Largest NoBrokerage Property Site
        </h1>
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
