import React from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="criteria-page">
      <Navbar />
      <div className="criteria-page-container">
        <LateralBar />
        <div className="criteria-page-content">
          <h1 className="criteria-title">CRITERES</h1>
        </div>
      </div>
    </div>
  );
}
export default Index;
