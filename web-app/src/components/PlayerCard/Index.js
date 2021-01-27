import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

const Index = ({ playerInfo }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/players/profile",
      state: {
        ...playerInfo,
      },
    });
    //"/players/profile"
  };

  const { firstname, lastname, birthdate, picture, position } = {
    ...playerInfo,
  };
  console.log(playerInfo);
  console.log(firstname, lastname, birthdate, picture, position);
  return (
    <div className="player-card-container" onClick={handleClick}>
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
