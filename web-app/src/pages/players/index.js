import React from "react";
import Navbar from "../../components/navbar/index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function index() {
  return (
    <div className="page-container">
      <LateralBar />
      <Navbar />
    </div>
  );
}

export default index;
