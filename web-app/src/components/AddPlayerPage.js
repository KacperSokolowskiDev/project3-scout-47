import React, { useState, useEffect } from "react";
import axios from "axios";

function AddPlayerPage() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [club, setClub] = useState();
  const [strongFoot, setStrongFoot] = useState();

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

  //   useEffect(() => {
  //     let player = {
  //       firstname: firstname,
  //       lastname: lastname,
  //       club: club,
  //       strongFoot: strongFoot,
  //     };

  //     try {
  //       const response = axios.post("http://192.168.0.103:4000/menu/players", {
  //         player,
  //       });
  //       console.log("👉 Returned data:", response);
  //     } catch (e) {
  //       console.log(`😱 Axios request failed: ${e}`);
  //     }
  //   });

  const getPlayers = () => {
    const url = `http://192.168.0.103:4000/menu/players`;

    axios
      .get(url)
      .then((res) => {
        let result = res.data;
        console.log(result);
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

    console.log(params);

    axios
      .post("http://192.168.0.103:4000/menu/players", params)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log("ERROR §§§§! : ", error);
      });
  }

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

      <button onClick={getPlayers}>Get data</button>
    </div>
  );
}
export default AddPlayerPage;
