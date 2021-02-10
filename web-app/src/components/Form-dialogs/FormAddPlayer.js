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

export default function FormAddPlayer({ fetchPlayers }) {
  const classes = useStyles();
  const userContext = useContext(UserContext);

  const initialState = {
    firstname: "",
    lastname: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { firstname, lastname } = state;
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

  const submitPlayer = async (e) => {
    e.preventDefault();
    try {
      console.log(firstname, lastname);
      await axios
        .post("http://localhost:5000/api/players", state, {
          headers: { Authorization: `Bearer ${userContext.token}` },
        })
        .then((res) => {
          console.log("player added", res.data);
          fetchPlayers();
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
        <DialogTitle id="form-dialog-title"> Ajout d'un joueur : </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Veuillez ajouter le nom et le prénom du nouveau joueur.
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
            label="Date de naissance"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "birthdate",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Taille"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "height",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            color="secondary"
            margin="dense"
            id="standard-basic"
            label="Poids"
            type="text"
            fullWidth
            autoComplete="no"
            required
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "weight",
                payload: e.currentTarget.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={submitPlayer}>Ajouter</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
