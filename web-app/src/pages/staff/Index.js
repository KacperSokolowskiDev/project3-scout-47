import React from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="page-container">
      <LateralBar />
      <Navbar />
    </div>
  );
}

export default Index;
