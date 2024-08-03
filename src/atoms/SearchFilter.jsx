import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchFilter = ({
  searchQuery,
  handleSearchChange,
  filter,
  handleFilterChange,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center mt-5 gap-2 border border-gray-200 w-[250px] p-3 rounded-lg">
        <FaSearch className="text-gray-400" />
        <input
          type="search"
          className="outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <div className="flex gap-2 mt-5 rounded-full">
          <div className="hover:bg-gray-100 transition-all duration-300 rounded-full ease-in-out p-2">
            <button className="flex gap-1">
              Filters
              <div className="flex flex-col gap-1 items-center mt-[7px]">
                <div className="w-4 h-[1px] bg-black"></div>
                <div className="w-3 h-[1px] bg-black"></div>
                <div className="w-1 h-[0.5px] bg-black"></div>
              </div>
            </button>
          </div>
          <div className="flex relative items-center hover:bg-gray-100 cursor-pointer transition-all duration-300 rounded-full ease-in-out p-2">
            <p>Sort by:</p>
            <select
              className="bg-transparent outline-none"
              value={filter}
              onChange={handleFilterChange}
            >
              <option className="bg-white w-[300px] p-2" value="Latest">
                Latest
              </option>
              <option value="Popular">Popular</option>
              <option value="Oldest">Oldest</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
