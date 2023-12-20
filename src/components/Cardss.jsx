import { IoBed } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";
import { SlSizeActual } from "react-icons/sl";

const Cardss = ({
  imageUrl,
  price,
  address,
  bedCount,
  bathCount,
  area,
  isPopular,
}) => {
  return (
    <section className="relative flex-1 flex flex-wrap ">
      <div className="relative z-20 flex bg-white rounded-lg w-[300px] flex-col gap-8">
        {isPopular && (
          <div className="absolute top-2 right-2 bg-[#7065F0] text-white px-2 py-1 rounded-md">
            Popular
          </div>
        )}

        <div className="flex flex-col">
          <div className="flexBetween">
            <img src={`${imageUrl}`} alt="house" className="rounded-lg" />
          </div>
        </div>

        <div className="">
          <div className="px-4">
            <p className="block bold-20 font-bold text-[#7065F0]">
              {price} <span className="text-gray-20 regular-16">/month</span>
            </p>
            <h1 className="font-bold bold-20">{address}</h1>
            <span className="text-gray-20">{address}</span>
            <div className="border-t border-gray-30" />
            <div className="mt-2 mb-4 flexBetween">
              <div className="flex items-center gap-3">
                <IoBed className="text-[#7065F0]" /> {bedCount}
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineBathtub className="text-[#7065F0]" /> {bathCount}
              </div>
              <div className="flex items-center gap-3">
                <SlSizeActual className="text-[#7065F0]" /> {area}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardss;
