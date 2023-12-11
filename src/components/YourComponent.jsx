// YourComponent.jsx
import React from "react";
import PropertyCard from "./PropertyCard";

// Sample JSON data
const jsonData = [
  {
    results: 112975,
    location: "Kolkata / West Bengal",
    price: "₹3.98",
    area: "1,665 sq.ft",
    features: ["Features"],
    status: "UNDER CONSTRUCTION",
  },
  // Add more data as needed
];

const YourComponent = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      {jsonData.map((propertyData, index) => (
        <PropertyCard key={index} propertyData={propertyData} />
      ))}
    </section>
  );
};

export default YourComponent;
