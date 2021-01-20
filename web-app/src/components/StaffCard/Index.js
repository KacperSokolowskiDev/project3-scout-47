import React from "react";
import "./styles.css";
const Index = ({ staffInfo }) => {
  const { firstname, lastname, email, telephone, picture } = { ...staffInfo };
  return (
    <div className="staff-card-container">
      <img alt="photo staff" className="staff-picture" src={`${picture}`} />
      <div className="staff-card-info">
        <p className="staff-card-text">{firstname}</p>
        <p className="staff-card-text">{lastname}</p>
        <p className="staff-card-text">{email}</p>
        <p className="staff-card-text">{telephone}</p>
      </div>
    </div>
  );
};
export default Index;
