import React, { useState} from "react";
import axios from "axios";


import "./AddPlayer.scss";
require("dotenv").config();

function AddPlayerPage() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [club, setClub] = useState();
  const [strongFoot, setStrongFoot] = useState();
  const [listPlayers, setListPlayers] = useState([]);
  const [download, setDownload] = useState(false);

  const handleFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleClub = (e) => {
    setClub(e.target.value);
  };

  const handleStrongFoot = (e) => {
    console.log(e.target.value);
    setStrongFoot(e.target.value);
  };

  const getPlayers = () => {
    axios
      .get(process.env.REACT_APP_BASE_URL)
      .then((res) => {
        let result = res.data;
        setListPlayers(result);
        setDownload(true);
        console.log(result);
        console.log(download);
      })
      .catch((error) => {
        console.log("Error !!");
        console.log(error);
      });
  };

  async function submitPlayer(e) {
    e.preventDefault();

    let params = {
      firstname: firstname,
      lastname: lastname,
      club: club,
      strongFoot: strongFoot,
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}`, params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("ERROR §§§§! : ", error);
      });
  }

  function showPlayer() {
    console.log("dans le showPlayer");

    listPlayers.map((player) => {
      return (
        <div>
          <p>{player.firstname}</p>
        </div>
      );
    });
  }

  return (
    <div className="form_container">
      <form onSubmit={submitPlayer}>
        <div className="input_wrapper">
          <label>Firstname</label>
          <input
            placeholder="firstname"
            value={firstname}
            onChange={(e) => handleFirstname(e)}
          />
        </div>
        <div className="input_wrapper">
          <label>Lastname</label>
          <input
            placeholder="lastname"
            value={lastname}
            onChange={(e) => handleLastname(e)}
          />
        </div>
        <div className="input_wrapper">
          <label>Club</label>
          <input
            placeholder="club"
            value={club}
            onChange={(e) => handleClub(e)}
          />
        </div>
        <div className="input_wrapper">
          <label>Strong Foot</label>
          <select
            placeholder="Strong Foot"
            value={strongFoot}
            onChange={(e) => handleStrongFoot(e)}
          >
            <option selected value="">
              Choix
            </option>
            <option value="gauche">gauche</option>
            <option value="droit">droit</option>
            <option value="ambidextre">Ambidextre</option>
          </select>
        </div>
        <button className="btn_submit" type="submit">
          Submit
        </button>
      </form>

      <button className="btn_data" onClick={getPlayers}>
        Get data
      </button>
      <div>
        {" "}
        {download
          ? listPlayers.map((player) => {
              return (
                <div>
                  {`${player.firstname} ${player.lastname}, ${player.club}, ${player.strongFoot}`}
                </div>
              );
            })
          : "no player loaded"}
      </div>
    </div>
  );
}
export default AddPlayerPage;
