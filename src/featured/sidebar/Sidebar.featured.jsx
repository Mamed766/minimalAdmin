import React, { useState } from "react";
import SidebarIcon from "../../assets/icon";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaBriefcase,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 h-full border-r z-50 border-gray-200 transition-all ${
        isOpen ? "w-[280px]" : "w-20"
      }`}
    >
      <div className="flex relative items-center p-2">
        <SidebarIcon />
        <div
          onClick={toggleSidebar}
          className={`border cursor-pointer bg-white p-1 rounded-full  absolute ${
            isOpen ? "left-[260px]" : "left-[60px]"
          }`}
        >
          {isOpen ? <FaAngleLeft /> : <FaAngleRight />}
        </div>
      </div>
      <nav>
        <div
          className="flex items-center justify-between cursor-pointer gap-2 p-2 bg-[#EBF8F4]"
          onClick={() => setIsJobsOpen(!isJobsOpen)}
        >
          <div className="flex gap-2 items-center">
            <FaBriefcase size={20} className="text-green-700" />
            {isOpen && <span className="text-green-600">Job</span>}
          </div>
          <div className="text-green-600">
            {isOpen && (isJobsOpen ? <FaAngleDown /> : <FaAngleRight />)}
          </div>
        </div>
        {isOpen && isJobsOpen && (
          <div>
            <ul className="flex cursor-pointer flex-col gap-2 mt-5 ml-5 mr-5">
              <Link to={"/job-list"} className="p-2 rounded hover:bg-gray-100">
                List
              </Link>
              <Link
                to={"/job-create"}
                className="p-2 rounded hover:bg-gray-100"
              >
                Create
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
