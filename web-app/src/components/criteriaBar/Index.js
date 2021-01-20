import React from "react";
import "./styles.css";

function Index({ text }) {
  return (
    <div className="criteriaBar-container">
      <div className="criteriaBar-text">{text}</div>
      <div className="criteriaBar-logo">H</div>
    </div>
  );
}

export default Index;
