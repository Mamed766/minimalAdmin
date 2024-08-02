import React from "react";
import { PiCaretUpDown } from "react-icons/pi";
import { PiDrone } from "react-icons/pi";
import { FaBell, FaSearch } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
const Header = () => {
  return (
    <div className="flex justify-between pt-4 px-4">
      <div className="flex gap-2 items-center justify-center">
        <img
          className="w-5 cursor-pointer"
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp"
          alt=""
        />
        <p className="cursor-pointer">Team 1</p>
        <div className="bg-gray-200 py-0.5 px-2 rounded-lg flex items-center justify-center">
          <p className="text-gray-500 text-[12px]">Free</p>
        </div>
        <PiCaretUpDown className="text-gray-500 cursor-pointer" />
      </div>
      <div className="flex items-center gap-2 ">
        <div className="flex items-center cursor-pointer justify-between gap-2 w-[80px] bg-gray-100 py-1 px-2 rounded-full   ">
          <FaSearch className="text-gray-400" />
          <div className="flex  items-center  bg-white p-1 rounded-lg ">
            <PiDrone />
            <p>K</p>
          </div>
        </div>
        <img
          className="w-6 rounded cursor-pointer"
          src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/flagpack/gb.webp"
          alt=""
        />
        <div className="relative">
          <div
            className="bg-red-500 flex justify-center items-center w-[20px] h-[20px]  absolute bottom-3
              left-2
          rounded-full"
          >
            <p className="text-white">4</p>
          </div>
          <FaBell className="text-[20px] cursor-pointer text-gray-500" />
        </div>
        <MdPeopleAlt className="text-[20px] cursor-pointer text-gray-500" />
        <div className="animate-spin-custom">
          <AiFillSetting className="text-[20px] cursor-pointer text-gray-500" />
        </div>
        <div>
          <img
            className="w-10 rounded-full cursor-pointer"
            src="https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/mock/assets/images/avatar/avatar-25.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
