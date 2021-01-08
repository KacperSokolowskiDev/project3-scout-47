import React from "react";
import Navbar from "../../components/navbar/index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="player-page">
      <Navbar />
      <div className="player-page-elements">
        <LateralBar />
        <div>
          <h1 className="test">test</h1>
        </div>
      </div>
    </div>
  );
}

export default Index;
