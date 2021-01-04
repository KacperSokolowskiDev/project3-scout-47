import React from "react";
import PlayersDisplay from "../../components/playersDisplay/Index";
import Navbar from "../../components/navbar/index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";

function Index() {
  return (
    <div className="player-page">
      <Navbar />
      <div className="player-page-elements">
        <LateralBar />
        <div className="players-info">
          <PlayersDisplay />
        </div>
      </div>
    </div>
  );
}

export default Index;
