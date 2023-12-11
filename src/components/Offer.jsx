const Offer = () => {
  return (
    <div className="mb-24 mt-12">
      <div className="p-4 ">
        <div className="padding-container max-container flex flex-col items-center">
          <h1 className="lg:text-5xl font-bold text-center text-blue-900 bold-40 mb-4">
            What Do We Offer?
          </h1>
          <span className="text-center text-blue-900">
            Tailored solutions for an exceptional online experience.
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:p-10 sm:gap-5 md:gap-10 max-w-screen-xl mx-auto mt-8 items-center justify-center">
          <div className="border shadow-lg w-full md:w-[28rem] h-[30rem] flex flex-col items-center hover:border-b-4 cursor-pointer hover:border-b-orange-50 rounded-lg p-4 bg-white">
            <img
              src="/21.png"
              alt="house"
              className="flex justify-center mt-10 items-center"
            />
            <h1 className="items-center flex justify-center mt-3 font-bold text-2xl md:text-3xl text-blue-900">
              Buy a House
            </h1>
            <p className="flex items-center text-gray-800 justify-center text-center mt-3 p-4 text-sm md:text-base">
              You are just one click away from buying your dream home.
              Searching, Budgeting will not be tedious now. We are at your
              service. We provide a World Class Facility in Our All Types of
              Properties With Various Types of Amenities Like Gym, Swimming
              Pool, Park, etc.
            </p>
          </div>
          <div className="border shadow-lg w-full md:w-[28rem] h-[30rem] flex flex-col items-center hover:border-b-4 cursor-pointer hover:border-b-orange-50 rounded-lg p-4 bg-white">
            <img
              src="/22.png"
              alt="house"
              className="flex justify-center mt-10 items-center"
            />
            <h1 className="items-center flex justify-center mt-3 font-bold text-2xl md:text-3xl text-blue-900">
              Rent a Property
            </h1>
            <p className="flex items-center text-gray-800 justify-center text-center mt-3 p-4 text-sm md:text-base">
              You are just one click away from buying your dream home.
              Searching, Budgeting will not be tedious now. We are at your
              service. We provide a World Class Facility in Our All Types of
              Properties With Various Types of Amenities Like Gym, Swimming
              Pool, Park, etc.
            </p>
          </div>
          <div className="border shadow-lg w-full md:w-[28rem] h-[30rem] flex flex-col items-center hover:border-b-4 cursor-pointer hover:border-b-orange-50 rounded-lg p-4 bg-white">
            <img
              src="/23.png"
              alt="house"
              className="flex justify-center mt-10 items-center"
            />
            <h1 className="items-center flex justify-center mt-3 font-bold text-2xl md:text-3xl text-blue-900">
              List a Property
            </h1>
            <p className="flex items-center text-gray-800 justify-center text-center mt-3 p-4 text-sm md:text-base">
              You are just one click away from buying your dream home.
              Searching, Budgeting will not be tedious now. We are at your
              service. We provide a World Class Facility in Our All Types of
              Properties With Various Types of Amenities Like Gym, Swimming
              Pool, Park, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
