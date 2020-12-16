import React, { useState, useEffect } from "react";
import axios from "axios";

function AddPlayerPage() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [club, setClub] = useState();
  const [strongFoot, setStrongFoot] = useState();

  const [player, setPlayer] = useState({});
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
    setStrongFoot(e.target.value);
  };

  useEffect(() => {
    let player = {
      firstname: firstname,
      lastname: lastname,
      club: club,
      strongFoot: strongFoot,
    };

    try {
      const response = axios.post("http://192.168.0.103:4000/menu/players", {
        player,
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  });

  const submitPlayer = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <div>
      <form onSubmit={submitPlayer}>
        <label>
          <input
            placeholder="firstname"
            value={firstname}
            onChange={(e) => handleFirstname(e)}
          />
        </label>
        <label>
          <input
            placeholder="lasttname"
            value={lastname}
            onChange={(e) => handleLastname(e)}
          />
        </label>
        <label>
          <input
            placeholder="club"
            value={club}
            onChange={(e) => handleClub(e)}
          />
        </label>
        <label>
          <input
            placeholder="Foot"
            value={strongFoot}
            onChange={(e) => handleStrongFoot(e)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{club}</p>
      <p>{strongFoot}</p>
    </div>
  );
}
export default AddPlayerPage;
