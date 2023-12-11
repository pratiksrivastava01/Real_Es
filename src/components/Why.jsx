const Why = () => {
  return (
    <div className="mb-24 bg-blue-400">
      <div className="  p-4">
        <div className="padding-container justify-center items-center max-container flex w-full flex-col ">
          <h1 className="bold-40 lg:bold-64 text-white items-center text-center">
            Why Should You <br /> Choose Us?
          </h1>
        </div>
        <div className="flex p-4 flex-wrap padding-container justify-center mt-8">
          <div className="flex flex-col bg-white p-4 rounded-lg justify-center w-[20rem] items-center mx-2 my-2 sm:mx-4 sm:my-4">
            <img
              src="/house.png"
              alt="house"
              className="w-32 h-32 sm:w-48 sm:h-48 mb-4"
            />
            <span className="text-blue-400 font-bold text-lg sm:text-xl mb-2">
              Buy Property
            </span>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-lg justify-center w-[20rem] items-center mx-2 my-2 sm:mx-4 sm:my-4">
            <img
              src="/money-bag.png"
              alt="money bag"
              className="w-32 h-32 sm:w-48 sm:h-48 mb-4"
            />
            <span className="text-blue-400 font-bold text-lg sm:text-xl mb-2">
              Rent Property
            </span>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-lg justify-center w-[20rem] items-center mx-2 my-2 sm:mx-4 sm:my-4">
            <img
              src="/insurance.png"
              alt="insurance"
              className="w-32 h-32 sm:w-48 sm:h-48 mb-4"
            />
            <span className="text-blue-400 font-bold text-lg sm:text-xl mb-2">
              List Property
            </span>
            <p className="text-center text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
