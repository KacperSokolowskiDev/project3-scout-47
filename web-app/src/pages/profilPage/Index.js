import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import noPic from "../../assets/user.png";
import "./styles.css";
const ProfilPage = () => {
  return (
    <div className="profil-page">
      <Navbar />
      <div className="profil-page-container">
        <LateralBar />
        <div className="profil-page-content">
          <div className="profil-header">
            <div>
              <img className="profil-pic" src={noPic} alt="profilPic" />
            </div>
            <div className="profil-player-info">
              <h1 className="profil-name">Profil Player</h1>
              <h2 className="profil-sub-title">Club Name</h2>
              <h2 className="profil-sub-title">BirthDate</h2>
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
