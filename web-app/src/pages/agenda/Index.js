import React from "react";
import Navbar from "../../components/navbar/Index";
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
          <h2 className="agenda-title">test</h2>
        </div>
      </div>
    </div>
  );
}
export default Index;
