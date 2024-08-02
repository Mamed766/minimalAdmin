import React from "react";
import Sidebar from "../sidebar/Sidebar.featured";
import Header from "../header/Header.featured";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex-grow ">
        <Header />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
