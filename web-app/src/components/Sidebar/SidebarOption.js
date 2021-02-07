import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
// impoft { useHistory } from 'react-router-dom'
function SidebarOption({ Icon, firstname, lastname, id, title }) {
  const history = useHistory();

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {firstname ? (
        <p onClick={() => history.push(`/players/${id}`)}> {`Q19 – ${firstname} ${lastname}`} </p>
      ) : (
        <h4>{title} </h4>
      )}
    </div>
  );
}

export default SidebarOption;
