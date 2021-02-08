import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Index() {
  return (
    <Link to="/">
      <div className="btn-logout"></div>
    </Link>
  );
}
export default Index;
