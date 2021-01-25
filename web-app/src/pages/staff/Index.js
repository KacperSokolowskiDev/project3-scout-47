import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Fab, TextField, Tooltip } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../../components/navbar/Index";
import LateralBar from "../../components/LateralBar/Index";
import StaffCard from "../../components/StaffCard/Index";
import FormAddStaff from "../../components/Form-dialogs/FormAddStaff";

import "./styles.css";
require("dotenv").config();

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

const Index = () => {
  const classes = useStyles();
  const [listStaff, setListStaff] = useState([]);
  const [download, setDownload] = useState(false);

  const fetchStaff = async () => {
    const staff = { id: 2 };
    console.log(staff);
    await axios
      .get("http://localhost:5000/api/users/search/roles", staff)
      .then((res) => {
        let result = res.data;
        console.log("eee", result);
        setListStaff(result);
        setDownload(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // useEffect(() => {
  //   console.log("useEffect --- Bool");
  //   fetchStaff();
  // }, [])

  return (
    <div className="staff-page">
      <Navbar />
      <div className="staff-page-container">
        <LateralBar />
        <div className="staff-page-content">
          <h1 className="staff-title">PERSONNELS</h1>
          <div className="staff-page-search-info">
            <TextField
              autoComplete="off"
              color="secondary"
              id="filled-basic"
              label="Recherche"
              variant="filled"
              className={classes.elementMT}
            />
            <FormAddStaff fetchStaff={fetchStaff} />
            <Tooltip title="Filter" aria-label="filter">
              <Fab color="secondary" className={classes.buttons}>
                <FilterListIcon />
              </Fab>
            </Tooltip>
          </div>
          <Link className="link-profile" to="/staffs/profile">
            <div className="staff-page-list">
              {download ? (
                listStaff.map((data) => {
                  return <StaffCard staffInfo={data} />;
                })
              ) : (
                <div>No staff in database</div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
