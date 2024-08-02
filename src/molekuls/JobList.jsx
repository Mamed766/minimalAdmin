import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { PiCellSignalFull } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { useQuery } from "react-query";
import { fetchData } from "../services/api";
import Modal from "./Modal";

const JobList = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const {
    data: jobs,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["jobs"],
    queryFn: fetchData,
  });

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleEdit = (id) => {
    navigate(`/job-edit/${id}`);
  };

  const handleView = (job) => {
    setSelectedJob(job);
  };

  const closeModal = () => {
    setSelectedJob(null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className="max-w-[1240px] m-auto">
      <div className="flex justify-between items-center p-2">
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
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-5 gap-2 border border-gray-200 w-[250px] p-3 rounded-lg">
            <FaSearch className="text-gray-400" />
            <input
              type="search"
              className="outline-none"
              placeholder="Search..."
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
                <select className="bg-transparent outline-none" name="" id="">
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
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobs &&
          jobs.map((job, index) => (
            <div
              key={index}
              className="w-full bg-white shadow-lg rounded-lg p-4 relative"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex justify-between">
                    <img className="w-10 rounded-lg" src={job.file} alt="" />
                    <BsThreeDotsVertical
                      className="text-[20px] cursor-pointer"
                      onClick={() => handleMenuToggle(index)}
                    />
                  </div>
                  {openMenu === index && (
                    <div className="absolute top-10 right-0 bg-white shadow-md rounded-lg p-2">
                      <ul className="flex flex-col">
                        <li
                          className="cursor-pointer hover:bg-gray-100 p-2"
                          onClick={() => handleEdit(job.id)}
                        >
                          Edit
                        </li>
                        <li
                          className="cursor-pointer hover:bg-gray-100 p-2"
                          onClick={() => handleView(job)}
                        >
                          View
                        </li>
                        <li className="cursor-pointer hover:bg-gray-100 p-2">
                          Delete
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="flex flex-col gap-1 mt-2">
                    <h3>{job.jobtitle}</h3>
                    <p className="text-gray-400 text-[12px]">
                      Posted date: {job.postedDate}
                    </p>
                    <p className="flex items-center gap-1 text-[12px] text-green-600">
                      <MdPeopleAlt /> {job.candidates} candidates
                    </p>
                  </div>
                </div>
                <div className="border-t-[1px] pt-2 border-t-gray">
                  <div className="flex text-gray-400 justify-between">
                    <p className="flex items-center gap-1 text-[12px]">
                      <PiCellSignalFull />
                      {job.experience}
                    </p>
                    <p className="flex items-center text-[12px] gap-1">
                      <FaClock />
                      {job.time}
                    </p>
                  </div>
                  <div className="flex text-gray-400 justify-between">
                    <p className="flex gap-1 items-center text-[12px]">
                      <GrMoney />
                      {job.cash}
                    </p>
                    <p className="flex items-center text-[12px] gap-1">
                      <IoPerson />
                      {job.profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Modal isOpen={!!selectedJob} onClose={closeModal} job={selectedJob} />
    </div>
  );
};

export default JobList;
