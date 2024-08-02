import React from "react";
import { FaDotCircle, FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const JobList = () => {
  return (
    <div className="max-w-[1240px] m-auto">
      <div className="flex justify-between items-center  p-2">
        <div className="flex flex-col gap-3">
          <h2 className="text-[25px] font-bold">List</h2>
          <div className=" flex items-center gap-3">
            <p className="hover:underline">Dashboard</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
            <p className="hover:underline">Job</p>
            <div className="h-1 w-1 bg-gray-500 rounded-full"></div>

            <p className=" text-gray-400">List</p>
          </div>
        </div>

        <Link to={"/job-create"} className="flex mt-3 items-center gap-2">
          <div className="flex items-center gap-2 bg-black p-2 rounded text-white">
            <FaPlus />
            <p>New job</p>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex items-center  justify-between ">
          <div className="flex items-center mt-5 gap-2 border border-gray-200 w-[250px] p-3 rounded-lg">
            <FaSearch className="text-gray-400" />
            <input
              type="search"
              className="outline-none"
              placeholder="Search..."
            />
          </div>
          <div>
            <div className=" flex gap-2 mt-5 rounded-full ">
              <div className="hover:bg-gray-100  transition-all  duration-300 rounded-full ease-in-out p-2">
                <button className="flex gap-1">
                  Filters
                  <div className="flex flex-col gap-1 items-center mt-[7px]">
                    <div className="w-4 h-[1px] bg-black"></div>
                    <div className="w-3 h-[1px] bg-black"></div>
                    <div className="w-1 h-[0.5px] bg-black"></div>
                  </div>
                </button>
              </div>

              <div className="flex items-center hover:bg-gray-100 cursor-pointer  transition-all  duration-300 rounded-full ease-in-out p-2 ">
                <p>Sort by:</p>

                <select className="bg-transparent" name="" id="">
                  <option value="">Latest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
