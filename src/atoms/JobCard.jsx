import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";
import { PiCellSignalFull } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import MenuOptions from "./MenuOptions";
const JobCard = ({
  job,
  index,
  openMenu,
  handleMenuToggle,
  handleEdit,
  handleView,
  handleDelete,
}) => {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-4 relative">
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
            <MenuOptions
              job={job}
              handleEdit={handleEdit}
              handleView={handleView}
              handleDelete={handleDelete}
            />
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
  );
};

export default JobCard;
