import Navbar from "./Navbar";
import Footer from "./Footer";
import House from "./House";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Test4 = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <img src="/bg1.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-[#7065F0] text-4xl sm:text-xl font-bold text-center p-4">
            Search and Buy Real Estate in{" "}
            <span className="text-black">Bengal</span>{" "}
          </h1>
        </div>
      </div>
      <div className="container p-7 sm:p-2 mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-200 rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Easy to Find</h2>
          <p className="text-blue-900">
            This is some content for Easy to Find.
          </p>
        </div>
        <div className="bg-green-200 rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">
            100 + Daily Transaction
          </h2>
          <p className="text-green-900">
            This is some content for 100 + Daily Transaction.
          </p>
        </div>
        <div className="bg-yellow-200 rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">
            Properties in Sell and Rent
          </h2>
          <p className="text-yellow-900">
            This is some content for Properties in Sell and Rent.
          </p>
        </div>
        <div className="bg-pink-200 rounded-lg p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">Expert Assistance</h2>
          <p className="text-pink-900">
            Get expert assistance for your real estate needs.
          </p>
        </div>
      </div>
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
    </div>
  );
};

export default Test4;
