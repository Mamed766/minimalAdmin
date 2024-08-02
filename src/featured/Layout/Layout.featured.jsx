import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar.featured";
import Header from "../header/Header.featured";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all ${
          isOpen ? "ml-[280px]" : "ml-[80px]"
        }`}
      >
        <Header isOpen={isOpen} />
        <div className="pt-[60px] p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
