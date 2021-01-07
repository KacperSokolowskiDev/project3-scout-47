import Navbar from "../../components/navbar/index";
import LateralBar from "../../components/LateralBar/Index";
import PlayerCard from "../../components/PlayerCard/Index";

//Material UI
import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box"; //To use margin on buttons

//Style CSS
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  elementMR: {
    marginRight: theme.spacing(1),
  },
  elementML: {
    marginLeft: theme.spacing(2),
  },
  elementMT: {
    marginTop: theme.spacing(4),
  },
}));

function Index() {
  const classes = useStyles();
  return (
    <div className="player-page">
      <Navbar />
      <div className="player-page-elements">
        <LateralBar />
        <div className="players-info">
          <h1 className="player-title">JOUEURS</h1>
          <div className="player-search-selection">
            <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              color="secondary"
              autoComplete="off"
              className={classes.elementMT}
            />
            <Tooltip title="Add" aria-label="add">
              <Fab color="secondary" className={classes.buttons}>
                <AddIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Filter" aria-label="filter">
              <Fab color="secondary" className={classes.buttons}>
                <FilterListIcon />
              </Fab>
            </Tooltip>
          </div>
          <PlayerCard />
        </div>
      </div>
    </div>
  );
}

export default Index;
