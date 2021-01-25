import React, { useState, useReducer } from "react";
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
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

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
  const classes = useStyles();
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstname, lastname, email, telephone } = state;
  const [open, setOpen] = useState(false);
  function reducer(state, action) {
    switch (action.type) {
      case "fill_input":
        return { ...state, [action.fieldName]: action.payload };
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
      await axios
        .post("http://localhost:5000/api/scouts", state)
        .then((res) => {
          console.log("player added", res.data);
          fetchStaff();
          handleClose();
        })
        .catch((error) => {
          console.log(error);
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={submitStaff}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
