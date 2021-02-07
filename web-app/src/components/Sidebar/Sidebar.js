import React, { useEffect } from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";
import logo from "../../assets/logo_scout47.png";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const [{ players }, dispatch] = useDataLayerValue();
  console.log("in sidebar", players);
  let history = useHistory();

  useEffect(() => {

  })

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={logo} alt="" />
      {/* <SidebarOption Icon={HomeIcon} title="Home" /> */}
      {/* <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" /> */}

      <br />
      <strong
        className="sidebar__title"
        onClick={() => history.push("/player")}
      >
        YOUR PLAYERS
      </strong>
      <hr />
      {players && players.map((player) => {
        console.log("go  go", player);
        return <SidebarOption onClick={() => history.push(`/player/${player.id}`)} {...player} />;
      })}
    </div>
  );
}

export default Sidebar;
