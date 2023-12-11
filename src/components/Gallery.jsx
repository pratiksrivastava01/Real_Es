import { IoPersonOutline } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import { FaRegStar } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";

const Gallery = () => {
  return (
    <div className="mb-24">
      <div className="max-container p-4">
        <div className="padding-container max-container justify-center items-center max-container flex w-full flex-col">
          <h1 className="bold-40 lg:bold-64 text-blue-900">Our Gallery</h1>
          <span className="text-gray-600">
            Immerse Yourself in Visual Splendor: Discover the Essence of Our
            Gallery
          </span>
        </div>

        <div className="p-4 sm:p-0 padding-container">
          <img
            src="/1.jpg"
            alt="hi"
            className="h-60 sm:h-40 w-full object-cover rounded-lg"
          />

          <div className="flex mt-4 sm:mt-1 gap-4 sm:gap-1">
            <img
              src="/2.jpg"
              alt="house"
              className="w-[50%] h-64 sm:h-40 rounded-lg"
            />
            <img
              src="/3.jpg"
              alt="house"
              className="w-[50%] h-64 sm:h-40 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-blue-900 padding-container p-4 flex justify-center gap-[15%] sm:gap-[20%] flex-wrap rounded-b-lg">
        <div className="text-white text-center flex flex-col items-center">
          <IoPersonOutline className="font-bold mb-2" size={45} />
          <div>
            <span className="font-bold text-lg">500+</span>
          </div>
          <div>
            <span>Happy Clients</span>
          </div>
        </div>

        <div className="text-white text-center flex flex-col items-center">
          <GiNotebook className="font-bold mb-2" size={45} />
          <div>
            <span className="font-bold text-lg">500+</span>
          </div>
          <div>
            <span>Projects Completed</span>
          </div>
        </div>

        <div className="text-white text-center flex flex-col items-center">
          <FaRegStar className="font-bold mb-2" size={45} />
          <div>
            <span className="font-bold text-lg">500+</span>
          </div>
          <div>
            <span>5-Star Ratings</span>
          </div>
        </div>

        <div className="text-white text-center flex flex-col items-center">
          <SlBadge className="font-bold mb-2" size={45} />
          <div>
            <span className="font-bold text-lg">500+</span>
          </div>
          <div>
            <span>Awards Received</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
