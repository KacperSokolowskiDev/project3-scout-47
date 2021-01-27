import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
const Index = ({ staffInfo }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: "/staffs/profile",
      state: {
        ...staffInfo,
      },
    });
  };

  const { firstname, lastname, email, telephone, picture } = { ...staffInfo };
  return (
    <div className="staff-card-container" onClick={handleClick}>
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
