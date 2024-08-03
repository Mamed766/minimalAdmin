import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 mx-1 rounded bg-transparent"
      >
        <FaChevronLeft
          className={`cursor-pointer ${
            currentPage === 1 ? "text-gray-400" : "text-black"
          }`}
        />
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-3 py-1 mx-1 rounded-full ${
            currentPage === index + 1 ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 mx-1 rounded bg-transparent"
      >
        <FaChevronRight
          className={`cursor-pointer ${
            currentPage === totalPages ? "text-gray-400" : "text-black"
          }`}
        />
      </button>
    </div>
  );
};

export default Pagination;
