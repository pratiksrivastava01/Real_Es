const Cards = () => {
  return (
    <section className="max-container  padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="relative flex-1 p-4 bg-[#023E9A] rounded-md">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Rent a Property Via Us
          </h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            List Your Property
          </button>
          <img
            src="/b1.png"
            alt="bg"
            className="absolute bottom-0 right-0 max-w-full max-h-full"
          />
        </div>

        <div className="relative flex-1 p-4 bg-[#B5486D] rounded-md">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
            ⁠Buy a Property Via Us
          </h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            List Your Property
          </button>
          <img
            src="/b1.png"
            alt="bg"
            className="absolute bottom-0 right-0 max-w-full max-h-full"
          />
        </div>

        <div className="relative flex-1 p-4 bg-[#EED777] rounded-md">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
            ⁠List a Property Ad for Free Now!!!
          </h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            List Your Property
          </button>
          <img
            src="/b1.png"
            alt="bg"
            className="absolute bottom-0 right-0 max-w-full max-h-full"
          />
        </div>

        <div className="relative flex-1 p-4 bg-[#48A4B5] rounded-md">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-2">
            Post Your Property Ads for Free!!!
          </h1>
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-700 hover:text-white transition duration-300">
            List Your Property
          </button>
          <img
            src="/b1.png"
            alt="bg"
            className="absolute bottom-0 right-0 max-w-full max-h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Cards;
