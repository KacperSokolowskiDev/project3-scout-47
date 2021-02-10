import React from "react";
import { useHistory } from "react-router-dom";
import "./SidebarOption.css";
// impoft { useHistory } from 'react-router-dom'
function SidebarOption({ Icon, firstname, lastname, id, title }) {
  const history = useHistory();

  return (
    <div
      className="sidebarOption"
      onClick={() => history.push(`/players/${id}`)}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {firstname ? <p>{`${firstname} ${lastname}`} </p> : <h4>{title} </h4>}
    </div>
  );
}

export default SidebarOption;
