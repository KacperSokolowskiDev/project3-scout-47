import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

//Material UI
import Tooltip from "@material-ui/core/Tooltip";

function Index() {
  const [isToggle, SetIsToggle] = useState(false);
  const handleToggle = () => {
    console.log("Click", isToggle);
    SetIsToggle(!isToggle);
    console.log("updated", isToggle);
  };

  return (
    <div className="container-corner">
      <div className={isToggle ? "circle-menu circle-anim" : "circle-menu"}>
        <Tooltip title="Dashboard" placement="left">
          <Link className="links-circle" to="/">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/2285/2285559.svg"
              alt="Icon Dashboard"
            ></img>
          </Link>
        </Tooltip>
        <Tooltip title="Staff" placement="left">
          <Link className="links-circle" to="/staff">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/33/33308.svg"
              alt="Icon Staff"
            ></img>
          </Link>
        </Tooltip>
        <Tooltip title="Criteria" placement="left-end ">
          <Link className="links-circle" to="/criteria">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/726/726568.svg"
              alt="Icon Criteria"
            ></img>
          </Link>
        </Tooltip>
        <Tooltip title="Players" placement="bottom-start">
          <Link className="links-circle" to="/player">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/1654/1654387.svg"
              alt="Icon Player"
            ></img>
          </Link>
        </Tooltip>
        <Tooltip title="Agenda" placement="bottom">
          <Link className="links-circle" to="/agenda">
            <img
              src="https://www.flaticon.com/svg/static/icons/svg/860/860743.svg"
              alt="Icon Agenda"
            ></img>
          </Link>
        </Tooltip>
      </div>
      <div
        className={isToggle ? "btn-circle menu-anim" : "btn-circle"}
        onClick={handleToggle}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Index;
