import React, { useState, useRef } from "react";
import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import { useLocation } from "react-router-dom";
import "./styles.css";
import { DropzoneDialog } from "material-ui-dropzone";
import axios from "axios";

const ProfilPage = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const [file, setFile] = useState(""); //storing the uploaded file
  //storing the received file from backend
  const [data, getFile] = useState({ name: "", path: "" });
  const [progress, setProgress] = useState(0); //progress bar
  const el = useRef(); //accessing input element

  const handleChange = (e) => {
    setProgress(0);
    const file = e.target.files[0]; //accessing file
    console.log(file);
    setFile(file); //storing file
  };

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("file", file); //appnding file
    axios
      .post("http://localhost:5000/upload", formData, {
        onUploadProgress: (ProgressEvent) => {
          let progress =
            Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100) +
            "%";
          setProgress(progress);
        },
      })
      .then((res) => {
        console.log(res);
        getFile({
          name: "res.data.name",
          path: "http://localhost:5000" + res.data.path,
        });
      })
      .catch((err) => console.log(err));
  };
  //useParams -> l'ID de l'URL de react router
  //Component mount -> API call /api/players/1/evaluation

  // const handleSave = async (files) => {
  //   const playerCertificate = new FormData();
  //   playerCertificate.append("file", files[0]);

  //   try {
  //     await axios({
  //       method: "POST",
  //       url: "http://localhost:5000/api/upload",
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: "Bearer lol",
  //       },
  //       data: playerCertificate,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   console.log(files);
  //   console.log("I'm Saved");
  // };

  return (
    <div className="profil-page">
      <Navbar />
      <div className="profil-page-container">
        <LateralBar />
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
            </div>
          </div>
          <div className="stats-container">
            <div className="player-stats">
              <div className="info-player">
                <p className="stats-text">test</p>
              </div>
              <div className="file-upload">
                <input
                  className="fileInput"
                  type="file"
                  ref={el}
                  onChange={handleChange}
                />
                <div className="progressBar" style={{ width: progress }}>
                  {progress}
                </div>
                <button onClick={uploadFile} className="upButton">
                  Upload
                </button>
              </div>
            </div>
            <div className="stats-criteria">
              <p className="stats-text">test</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilPage;
