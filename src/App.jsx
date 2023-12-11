import { useEffect } from "react";
import "./App.css";
import {
  Contact,
  Filter,
  Footer,
  Gallery,
  Hero,
  Nav2,
  Navbar,
  Offer,
  Spealize,
  Testimonials,
} from "./components";
import Call from "./components/Call";

function App() {
  useEffect(() => {
    document.title = "Flats || Your dream house"; // Set your desired page title here
  }, []);
  return (
    <>
      <Navbar />
      <Call />
      <Hero />
      <Spealize />
      <Offer />
      <Nav2 />
      {/* <Properties /> */}
      {/* <Why /> */}
      {/* <Details /> */}
      <Testimonials />
      <Gallery />
      <div id="contact">
        <Contact />
      </div>
      <Filter />
      <Footer />
    </>
  );
}

export default App;
