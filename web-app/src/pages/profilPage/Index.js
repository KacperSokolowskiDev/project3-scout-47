import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import noPic from "../../assets/user.png";
import { useLocation } from "react-router-dom";
import "./styles.css";
const ProfilPage = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.state);
  //useParams -> l'ID de l'URL de react router
  //Component mount -> API call /api/players/1/evaluation
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
              <div className="MVP-stats">
                <p className="stats-text">test</p>
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
