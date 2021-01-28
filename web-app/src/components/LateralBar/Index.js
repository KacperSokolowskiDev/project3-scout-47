import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Index() {
  return (
    <div className="container">
      <div className="logo"></div>
      <Link to="/">
        <div className="btn-logout"></div>
      </Link>
    </div>
  );
}
export default Index;
