import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import noPic from "../../assets/user.png";
import "./styles.css";
const StaffProfilePage = () => {
  const [followedPlayers, setFollowedPlayers] = useState([]);
  const [download, setDownload] = useState(false);
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  const fetchPlayers = async () => {
    await axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        let result = res.data;
        setFollowedPlayers(result);
        setDownload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchPlayers();
  }, []);
  return (
    <div className="staff-profil-page-content">
      <div className="staff-profil-header">
        <div>
          <img
            className="staff-profil-pic"
            src={location.state.picture}
            alt="staffProfilPic"
          />
        </div>
        <div className="staff-profil-info">
          <h1 className="staff-profil-name">
            {location.state.firstname} {location.state.lastname}
          </h1>
          <h3 className="staff-profil-sub-title">{location.state.email}</h3>
          <h3 className="staff-profil-sub-title">{location.state.telephone}</h3>
        </div>
      </div>
      <div className="staff-player-list">
        {download ? (
          followedPlayers.map((data) => {
            return (
              <img
                className="staff-player-img"
                src={data.picture}
                alt="player"
              />
            );
          })
        ) : (
          <div>No player in database</div>
        )}
      </div>
    </div>
  );
};
export default StaffProfilePage;
