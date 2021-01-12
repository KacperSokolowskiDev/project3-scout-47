import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import "./styles.css";
const ProfilPage = () => {
  return (
    <div className="profil-page">
      <Navbar />
      <div className="profil-page-container">
        <LateralBar />
        <div className="profil-page-content">
          <h1 className="profil-title">Profil Player</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
