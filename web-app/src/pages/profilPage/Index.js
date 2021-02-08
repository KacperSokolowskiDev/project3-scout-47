import React, { useState } from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/logout-button/Index";
import { useLocation } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./styles.css";
import { DropzoneDialog } from "material-ui-dropzone";
import axios from "axios";

const ProfilPage = () => {
  const [open, setOpen] = useState();
  const location = useLocation();
  // const userContext = useContext(UserContext);
  const [listEvaluations, setListEvaluations] = useState([]);
  const playerId = location.state.id;
  console.log(location);
  console.log(location.state);

  // const [open, setOpen] = useState();
  //useParams -> l'ID de l'URL de react router
  //Component mount -> API call /api/players/1/evaluation

  const handleOpen = () => {
    setOpen(true);
    console.log("I'm Open");
  };

  const handleClose = () => {
    setOpen(false);
    console.log("I'm Close");
  };

  const handleSave = async (files) => {
    const playerCertificate = new FormData();
    playerCertificate.append("file", files[0]);

    try {
      await axios({
        method: "POST",
        url: "http://localhost:5000/api/upload",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer lol",
        },
        data: playerCertificate,
      });
    } catch (err) {
      console.log(err);
    }

    console.log(files);
    console.log("I'm Saved");
  };

  return (
    <div className="profil-page-content">
      <div className="profil-header">
        <div>
          <img
            className="profil-pic"
            src={location.state.picture}
            alt="profilPic"
          />
        </div>
        <div className="profil-player-info">
          <h1 className="profil-name">
            {location.state.firstname} {location.state.lastname}
          </h1>
          <h2 className="profil-sub-title">{location.state.position}</h2>
          <h2 className="profil-sub-title">{location.state.birthdate}</h2>
          <button className="add-button" onClick={handleOpen}>
            Add File
          </button>
          <DropzoneDialog
            open={open}
            acceptedFiles={[
              "application/pdf",
              "application/pdf",
              "application/pdf",
            ]}
            onSave={handleSave}
            onClose={handleClose}
          />
        </div>
      </div>
      <div className="stats-container">
        <div className="player-stats">
          <div className="info-player">
            <p className="stats-text">test</p>
          </div>
          <div className="MVP-stats">
            <p className="stats-text">test</p>
          </div>
        </div>
        <div className="stats-criteria">
          <p className="stats-text">test</p>
        </div>
      </div>
    </div>
  );
};
export default ProfilPage;
