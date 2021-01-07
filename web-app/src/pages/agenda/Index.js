import React from "react";
import Navbar from "../../components/navbar/index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="agenda-page">
      <Navbar />
      <div className="agenda-page-container">
        <LateralBar />
        <div className="agenda-page-content">
          <h1 className="agenda-title">AGENDA</h1>
        </div>
      </div>
    </div>
  );
}
export default Index;
