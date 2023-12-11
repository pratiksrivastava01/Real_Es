import { useState, useEffect } from "react";
import {
  flatsData1,
  flatsData2,
  flatsData3,
  flatsData4,
  flatsData5,
  flatsData6,
  flatsData7,
  flatsData8,
  flatsData9,
  flatsData10,
} from "../constants";
import Call from "./Call";
import Footer from "./Footer";
import Navbaar from "./Navbaar";
import PropertyCard from "./PropertyCard";

const Hostels = () => {
  const itemsPerPage = 3; // Adjust the number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  const allFlatsData = [
    flatsData1,
    flatsData2,
    flatsData3,
    flatsData4,
    flatsData5,
    flatsData6,
    flatsData7,
    flatsData8,
    flatsData9,
    flatsData10,
  ];

  const totalItems = allFlatsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentData(allFlatsData.slice(startIndex, endIndex));
  }, [currentPage]);

  useEffect(() => {
    document.title = "Hostels"; // Set your desired page title here
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
          {totalItems} results | Flats rents in Kolkata / West Bengal
        </h1>
      </section>
      {currentData.map((flatsData, index) => (
        <section
          className="max-container padding-container flex flex-col md:gap-28 xl:flex-row"
          key={index}
        >
          <PropertyCard key={index} {...flatsData} />
        </section>
      ))}
      <div className="flex justify-center items-center mt-16  mb-10">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="mr-5"
        >
          Previous
        </button>
        {generatePageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={` ${
              pageNumber === currentPage ? "font-bold text-blue-500" : ""
            } mr-5`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Hostels;
