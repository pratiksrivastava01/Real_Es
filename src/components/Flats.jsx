import { useState, useEffect } from "react";
import {
  propertyData1,
  propertyData2,
  propertyData3,
  propertyData4,
  propertyData5,
  propertyData6,
  propertyData7,
  propertyData8,
  propertyData9,
  propertyData10,
} from "../constants";
import Call from "./Call";
import Footer from "./Footer";
import PropertyCard from "./PropertyCard";
import Navbaar from "./Navbaar";

const Flats = () => {
  const itemsPerPage = 3; // Adjust the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const allPropertyData = [
    propertyData1,
    propertyData2,
    propertyData3,
    propertyData4,
    propertyData5,
    propertyData6,
    propertyData7,
    propertyData8,
    propertyData9,
    propertyData10,
  ];

  const totalItems = allPropertyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(allPropertyData.slice(startIndex, endIndex));
  }, [currentPage]);

  useEffect(() => {
    document.title = "Flats"; // Set your desired page title here
  }, []);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <>
      <Navbaar />
      <Call />
      <section className="max-container padding-container mt-10">
        <h1 className="bold-20">
          {totalItems} results | Property in Kolkata / West Bengal
        </h1>
      </section>
      {currentData.map((propertyData, index) => (
        <section
          className="max-container padding-container flex flex-col md:gap-28 xl:flex-row"
          key={index}
        >
          <PropertyCard key={index} {...propertyData} />
        </section>
      ))}
      <div className="flex justify-center items-center mt-16 mb-10">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="font-bold mr-5"
        >
          Previous
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={`${
              pageNumber === currentPage ? "font-bold text-blue-500" : ""
            } mr-5`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="font-bold"
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Flats;
