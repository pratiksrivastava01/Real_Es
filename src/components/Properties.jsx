import { MdBathtub } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { LuBoxSelect } from "react-icons/lu";

const PropertyCard = ({ imageSrc, title, baths, beds, size, price }) => (
  <div className="bg-white shadow-lg rounded-md overflow-hidden transform hover:scale-105 transition-transform cursor-pointer">
    <div className="relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-2xl font-bold text-white text-center">{title}</h1>
      </div>
    </div>
    <div className="p-4">
      <div className="flex items-center mb-4">
        <div className="flex items-center mr-4 text-gray-600">
          <MdBathtub className="mr-1" /> {baths}
        </div>
        <div className="flex items-center mr-4 text-gray-600">
          <MdOutlineBed className="mr-1" /> {beds}
        </div>
        <div className="flex items-center text-gray-600">
          <LuBoxSelect className="mr-1" /> {size}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-orange-500 font-bold">{price}</h3>
        <p className="text-blue-500 cursor-pointer">View Details</p>
      </div>
    </div>
  </div>
);

const Properties = () => {
  const commonProps = {
    baths: 4,
    beds: 5,
    size: "1234m",
    price: "$998K",
  };

  return (
    <>
      <section className="max-container padding-container flex flex-wrap justify-around gap-8 py-10 md:py-20">
        {[1, 2, 3].map((propertyNum) => (
          <PropertyCard
            key={propertyNum}
            imageSrc={`/${propertyNum}.jpg`}
            title={`Enter Name - Type ${propertyNum}`}
            {...commonProps}
          />
        ))}
      </section>
    </>
  );
};

export default Properties;
