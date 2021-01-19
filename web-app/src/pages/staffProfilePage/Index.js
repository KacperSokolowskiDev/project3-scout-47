import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import React, { useState, useEffect } from "react";
import axios from "axios";
import noPic from "../../assets/user.png";
import "./styles.css";

const StaffProfilePage = () => {
  const [followedPlayers, setFollowedPlayers] = useState([]);
  const [download, setDownload] = useState(false);

  const fetchPlayers = async () => {
    await axios
      .get("http://localhost:5000/api/players")
      .then((res) => {
        let result = res.data;
        setFollowedPlayers(result);
        setDownload(true);
        console.log(followedPlayers, download);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="staff-profil-page">
      <Navbar />
      <div className="staff-profil-page-container">
        <LateralBar />
        <div className="staff-profil-page-content">
          <div className="staff-profil-header">
            <div>
              <img
                className="staff-profil-pic"
                src={noPic}
                alt="staffProfilPic"
              />
            </div>
            <div className="staff-profil-info">
              <h1 className="staff-profil-name">Profil Staff</h1>
              <h2 className="staff-profil-sub-title">Club Name</h2>
              <h3 className="staff-profil-sub-title">Email</h3>
              <h3 className="staff-profil-sub-title">Telephone</h3>
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
      </div>
    </div>
  );
};

export default StaffProfilePage;
