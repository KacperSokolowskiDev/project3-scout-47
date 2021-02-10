import React, { useContext, useState, useReducer } from "react";

import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import UserContext from "../../context/UserContext";

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
export default function FormAddStaff({ fetchStaff }) {
  const userContext = useContext(UserContext);
  const classes = useStyles();
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "password",
    picture: "https://i.pravatar.cc/300",
    telephone: "",
    Privilege: {},
  };
  console.log(initialState);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const { firstname, lastname, email, telephone } = state;

  const [open, setOpen] = useState(false);
  const years = [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "fill_input":
        return { ...state, [action.fieldName]: action.payload };
      case "fill_checkbox":
        const newPrivilege = {
          ...state.Privilege,
          [action.fieldName]: action.payload,
        };
        // si action.payload false , supprimer la clé correspondante de Privileges
        console.log("ac", action.payload);
        if (!action.payload) {
          delete newPrivilege[action.fieldName];
        }
        return { ...state, Privilege: newPrivilege };
      default:
        return state;
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const submitStaff = async (e) => {
    e.preventDefault();
    try {
      console.log(firstname, lastname, email, telephone);
      const priv = Object.keys(state.Privilege);
      console.log("priv", priv);

      const data = {
        ...state,
        Privilege: {
          role: "scout",
          ageGrade: priv.map((year) => parseInt(year)),
        },
      };
      console.log(data);
      await axios
        .post("http://localhost:5000/api/users/signup", data)
        .then((res) => {
          console.log("player added", res.data);
          fetchStaff();
          handleClose();
        })
        .catch((error) => {
          console.log(error.toString());
        });
    } catch (error) {
      console.log("dans l'erreur", error);
    }
  };
  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={() => handleClickOpen()}>
        <Fab color="secondary" className={classes.buttons}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Ajout d'un membre du staff :
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez ajouter les informations du staff.
          </DialogContentText>
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Prénom"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "firstname",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Nom De Famille"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "lastname",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Email"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "email",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Telephone"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "telephone",
                payload: e.currentTarget.value,
              })
            }
          />
          {years.map((year) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.Privilege[year]}
                    onChange={(e) =>
                      dispatch({
                        type: "fill_checkbox",
                        fieldName: e.currentTarget.name,
                        payload: e.currentTarget.checked,
                      })
                    }
                    name={year}
                  />
                }
                label={year}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={submitStaff}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
