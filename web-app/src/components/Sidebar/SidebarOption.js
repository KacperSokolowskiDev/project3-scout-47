import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, firstname, lastname, title }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {firstname ? (
        <p> {`Q19 – ${firstname} ${lastname}`} </p>
      ) : (
        <h4>{title} </h4>
      )}
    </div>
  );
}

export default SidebarOption;
