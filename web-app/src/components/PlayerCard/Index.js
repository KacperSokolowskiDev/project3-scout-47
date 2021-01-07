import axios from "axios";
import { useState, useEffect } from "react";
import "./Styles.css";

require("dotenv").config();

const PlayerCard = () => {
  const [playersList, setPlayersList] = useState([]);
  const [download, setDownload] = useState(false);

  const fetchPlayers = () => {
    console.log("Fetch");
    try {
      axios
        .get(process.env.REACT_APP_LOCALHOST_URL)
        .then((res) => {
          let result = res.data;
          setPlayersList(result);
          setDownload(true);
          console.log("res", result);
          console.log("data", res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("I'm here");
    fetchPlayers();
  }, []);

  return (
    <div className="all-players">
      <h1 className="playerCard-title">JOUEURS EN OBSERVATION :</h1>
      <div className="list-players">
        {playersList.map((player) => {
          return (
            <div className="player-card">
              <p>
                {player.firstname} {player.lastname}
              </p>
              <p>
                Taille: {player.height}cm, Poids: {player.weight}KG
              </p>
              <p>{player.birthdate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerCard;
