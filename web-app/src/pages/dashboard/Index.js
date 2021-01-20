import React from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-page-container">
        <LateralBar />
        <div className="dashboard-page-content">
          <h1 className="dashboard-title">DASHBOARD</h1>
          <h1 className="dashboard-test">TEST</h1>
        </div>
      </div>
    </div>
  );
}
export default Index;
