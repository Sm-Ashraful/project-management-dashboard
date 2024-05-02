"use client";
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Dashboard = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="relative ">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div
        className=" mt-16 transition-all duration-300 min-h-screen  " // Added transition
        style={{
          marginLeft: isSidebarOpen ? "256px" : "0", // Dynamic marginLeft
          width: isSidebarOpen ? "calc(100vw - 265px)" : "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
