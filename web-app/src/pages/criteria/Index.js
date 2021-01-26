import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import FormAddCritetia from "../../components/Form-dialogs/FormAddCriteria";
import CriteriaBar from "../../components/criteriaBar/Index";
import CriteriasGroupeCard from "../../components/CriteriasGroupeCard/Index";
//Material UI
import { makeStyles } from "@material-ui/core/styles";

// import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";

// Style css
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
  const [listCriterias, setListCriterias] = useState([]);
  const [download, setDownload] = useState(false);
  const [showPhysic, setShowPhysic] = useState(false);

  const fetchCriterias = async () => {
    await axios
      .get("http://localhost:5000/api/criteria")
      .then((res) => {
        let result = res.data;
        setListCriterias(result);
        setDownload(true);
        console.log("criterias", listCriterias);
        console.log("download", download);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCriterias();
  }, []);

  const handleClickPhysic = () => {
    setShowPhysic(!showPhysic);
  };

  return (
    <div className="criteria-page">
      <Navbar />
      <div className="criteria-page-container">
        <LateralBar />
        <div className="criteria-page-content">
          <h1 className="criteria-title">CRITERES</h1>
          <div className="criteria-page-search-info">
            <TextField
              id="filled-basic"
              label="Search"
              variant="filled"
              color="secondary"
              autoComplete="off"
              className={classes.elementMT}
            />
            <FormAddCritetia fetchCriterias={fetchCriterias} />
            <Tooltip title="Filter" aria-label="filter">
              <Fab color="secondary" className={classes.buttons}>
                <FilterListIcon />
              </Fab>
            </Tooltip>
          </div>
          <div className="criteria-page-list">
            <CriteriasGroupeCard
              listCriterias={listCriterias}
              groupe={"Physique"}
              download={download}
            />
            <CriteriasGroupeCard
              listCriterias={listCriterias}
              groupe={"Technique"}
              download={download}
            />
            <CriteriasGroupeCard
              listCriterias={listCriterias}
              groupe={"Stratégique"}
              download={download}
            />
            <CriteriasGroupeCard
              listCriterias={listCriterias}
              groupe={"Psychologique"}
              download={download}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Index;
