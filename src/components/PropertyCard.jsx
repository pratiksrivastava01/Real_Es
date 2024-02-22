import React from "react";
import Slider from "react-slick";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyCard = ({
  images,
  location,
  owner,
  places,
  price1,
  price2,
  area1,
  area2,
  dimension1,
  dimension2,
  about,
  number,
  amt,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt=""
              className="rounded-xl h-96 w-50 sm:w-full sm:h-auto"
            />
          </div>
        ))}
      </Slider>
      <div className="bg-gray-900 mt-10 rounded-xl flex sm:flex-col shadow-pink-500 shadow-lg items-center">
        <div className="">
          <img
            src={`${images[0]}`}
            alt=""
            className="rounded-xl h-96 w-50 sm:w-full sm:h-auto"
          />
        </div>
        <div className="bg-white ml-[-5rem] rounded-xl p-5 h-[90%] sm:w-full sm:ml-0 sm:mt-0 w-[50%] ">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">{location}</h1>
          </div>
          <div className="">
            {/* <h1 className="font-bold">{owner}</h1> */}
            <div className="mt-2 text-blue-500 flex gap-1 items-center">
              <FaLocationDot />
              {places}
            </div>
          </div>
          <div className="flex justify-between sm:flex-col">
            <div className="mt-5">
              <div className="flex gap-1 items-baseline">
                <h1 className="text-2xl sm:text-lg font-bold">{price1}</h1>
                <span className="text-gray-50">{amt}</span>
              </div>
              {/* <h5 className="text-gray-20 text-xs">{price2}</h5> */}
            </div>
            <div className="mt-5">
              <div className="flex gap-1 items-baseline">
                <h1 className="text-2xl sm:text-lg font-bold">{area1}</h1>
                <span className="text-gray-50">sq.ft</span>
              </div>
              <h5 className="text-gray-20 text-xs">
                ({area2} sq.m) Super build-up Area
              </h5>
            </div>
            {/* <div className="mt-5">
              <div className="flex gap-1 items-baseline">
                <h1 className="text-2xl sm:text-lg font-bold">
                  {dimension1}BHK
                </h1>
              </div>
              <h5 className="text-gray-20 text-xs">{dimension2} Baths</h5>
            </div> */}
          </div>
          <div className="mt-10 sm:mt-5">{about}</div>
          {/* <div className="flex gap-2">
            <div className="bg-pink-300 object-cover rounded-md">
              <h5 className="text-[0.6rem] p-2">Features</h5>
            </div>
            <div className="bg-blue-300 object-cover rounded-md">
              <h1 className="text-[0.6rem] p-2 ">UNDER CONSTRUCTION</h1>
            </div>
          </div> */}
          <div className="mt-5 flex justify-end gap-5 items-center">
            <a
              href="tel:%2B918207637632"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="sm:text-sm">{number}</h1>
            </a>
            <a
              href={`https://wa.me/+91${number}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="bg-blue-600 rounded-md bold sm:text-sm text-white  p-2">
                Contact Agent
              </h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  places: PropTypes.number.isRequired,
  price1: PropTypes.number.isRequired,
  price2: PropTypes.number.isRequired,
  area1: PropTypes.number.isRequired,
  area2: PropTypes.number.isRequired,
  dimension1: PropTypes.string.isRequired,
  dimension2: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  amt: PropTypes.string.isRequired,
};

export default PropertyCard;
