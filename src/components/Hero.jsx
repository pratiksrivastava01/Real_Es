const Hero = () => {
  return (
    <div
      className="bg-blue-900 flex "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/bg-pattern.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the background image
        height: "90vh",
      }}
    >
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="font-bold text-4xl lg:text-6xl text-white">
            Find Your
          </h1>
          <h1 className="font-bold text-4xl lg:text-6xl text-blue-500">
            Dream House
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl xl:max-w-[520px]">
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app.
          </p>
          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <img
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                    className="text-yellow-500"
                  />
                ))}
            </div>
            <p className="font-bold text-lg lg:text-xl text-blue-700">
              198k
              <span className="text-lg lg:text-xl ml-1">Excellent Reviews</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Download App
            </button>
            <button
              type="button"
              className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-900"
            >
              How we work?
            </button>
          </div>
        </div>
      </section>
      <img
        src="/hero.png"
        alt="house"
        className="hidden md:w-full xl:w-auto xl:block self-end"
      />
    </div>
  );
};

export default Hero;
