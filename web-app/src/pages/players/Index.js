import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import PlayerCard from "../../components/PlayerCard/Index";
import FormAddPlayer from "../../components/Form-dialogs/FormAddPlayer";
import UserContext from "../../context/UserContext";

import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Material UI
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
import FilterListIcon from "@material-ui/icons/FilterList";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip"; //To use margin on buttons
//Style CSS
import "./styles.css";
const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(0),
  },
  elementMR: {
    marginRight: theme.spacing(1),
  },
  elementML: {
    marginLeft: theme.spacing(2),
  },
  elementMT: {
    marginTop: theme.spacing(0),
  },
}));
function Index() {
  const classes = useStyles();
  const [listPlayers, setListPlayers] = useState([]);
  const [download, setDownload] = useState(false);
  const userContext = useContext(UserContext);

  const fetchPlayers = async () => {
    await axios
      .get("http://localhost:5000/api/players", {
        headers: { Authorization: `Bearer ${userContext.token}` },
      })
      .then((res) => {
        let result = res.data;
        setListPlayers(result);
        setDownload(true);
        console.log(listPlayers, download);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);
  return (
    <div className="player-page">
      <Navbar />
      <div className="player-page-container">
        <LateralBar />
        <div className="player-page-content">
          <h1 className="player-title">JOUEURS</h1>
          <div className="player-page-search-info">
            <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              color="secondary"
              autoComplete="off"
              className={classes.elementMT}
            />
            <FormAddPlayer fetchPlayers={fetchPlayers} />
            <Tooltip title="Filter" aria-label="filter">
              <Fab color="secondary" className={classes.buttons}>
                <FilterListIcon />
              </Fab>
            </Tooltip>
          </div>
          <div className="player-page-list">
            {download ? (
              listPlayers.map((data) => {
                return <PlayerCard playerInfo={data} />;
              })
            ) : (
              <div>No player in database</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
