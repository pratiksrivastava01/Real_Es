import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import Filter from "./Filter";
import Contact from "./Contact";

const Test = () => {
  return (
    <>
      <Navbar />
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
