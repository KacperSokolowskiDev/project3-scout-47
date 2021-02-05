import React from "react";
import "./Header.css";
import { useDataLayerValue } from "../DataLayer";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

function Header({ api }) {
  const [{ user }, dispatch] = useDataLayerValue();
  const history = useHistory();

  console.log("here", user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          onChange={() => {
            history.push("/player");
          }}
          placeholder="Search for Players, Evalutations, Criterions..."
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.firstname} src={user?.picture} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
