import { BsWhatsapp } from "react-icons/bs";
const Cardss = ({
  imageUrl,
  price,
  address,
  bedCount,
  bathCount,
  area,
  isPopular,
  number,
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
              {price} <span className="text-gray-20 regular-16"></span>
            </p>
            <h1 className="font-bold bold-20">{address}</h1>
            <span className="text-gray-20">{address}</span>
            <div className="border-t border-gray-30" />
            <div className="flex justify-between  items-center">
              <div className="mt-2 mb-4 flexBetween">
                <div className="bg-[#7065F0] p-2 rounded-md text-white">
                  <a
                    href={`tel:%2B91${number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {number}
                  </a>
                </div>
              </div>
              <div className="bg-green-50 p-2 mt-[-5px] rounded-md">
                <a
                  href={`https://wa.me/+91${number}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex  items-center gap-3 text-white"
                >
                  <BsWhatsapp className="text-md text-white" />
                  Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardss;
