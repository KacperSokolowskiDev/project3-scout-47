import React from "react";

import "./styles.css";

const Index = ({ playerInfo }) => {
  const { firstname, lastname, birthdate, picture, position } = {
    ...playerInfo,
  };
  console.log(playerInfo);
  console.log(firstname, lastname, birthdate, picture, position);
  return (
    <div className="player-card-container">
      <img alt="player staff" className="player-picture" src={`${picture}`} />
      <div className="player-card-info">
        <p className="player-card-text">{firstname}</p>
        <p className="player-card-text">{lastname}</p>
        <p className="player-card-text">{birthdate}</p>
        <p className="player-card-text">{position}</p>
      </div>
    </div>
  );
};

export default Index;
