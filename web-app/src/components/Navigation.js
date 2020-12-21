import React from "react";
import { Link } from "react-router-dom";
import "./MainCss.css";
import logoScout47 from "../assets/logo_scout47.png";

function Navigation() {
  return (
    <div className="NavBar">
      <div className="logo">
        <img className="logoScout47" src={logoScout47} alt="y en a marre" />
      </div>
      <div className="list">
        <ul className="link_Wrapper">
          <Link className="navigation" to="/">
            <li className="list_item"> Profil |</li>
          </Link>

          <Link className="navigation" to="/Rapport">
            <li className="list_item"> Rapport |</li>
          </Link>

          <Link className="navigation" to="/Criteria">
            <li className="list_item"> Criteria |</li>
          </Link>

          <Link className="navigation" to="/Agenda">
            <li className="list_item"> Agenda |</li>
          </Link>

          <Link className="navigation" to="/AddPlayer">
            <li className="list_item"> AddPLayer |</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
