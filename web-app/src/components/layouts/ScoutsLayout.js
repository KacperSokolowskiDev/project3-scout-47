import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "./../../components/navbar/Index";
import "./Layout.css";

const ScoutsLayout = ({ children, api, mediaPlayer }) => {
  // useEffect()

  return (
    // <div className="app">
    <>
      <Navbar />
      <div className="view">
        <div className="view__body">
          <Sidebar />
          {children}
        </div>
      </div>
    </>
  );
};

export default ScoutsLayout;
