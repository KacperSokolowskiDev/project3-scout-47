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

export default function FormDialog() {
  const classes = useStyles();

  const initialState = {
    name: "",
    groupe: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, groupe } = state;
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

  const submitCriteria = async (e) => {
    e.preventDefault();
    try {
      console.log(name, groupe, "dans le try");
      await axios
        .post("http://localhost:5000/api/criterias", state)
        .then((res) => {
          console.log("criteria posted", res.data);
          handleClose();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("dans le error", error);
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
        <DialogTitle id="form-dialog-title">Ajout d'un critère : </DialogTitle>
        <DialogContent>
          <DialogContentText color="white">
            Veuillez ajouter le nom et le groupe du nouveau critère
          </DialogContentText>
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="name"
            label="Nom"
            type="text"
            fullWidth
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "name",
                payload: e.currentTarget.value,
              })
            }
          />
          <TextField
            autoFocus
            color="secondary"
            margin="dense"
            id="groupe"
            label="Groupe"
            type="text"
            fullWidth
            onChange={(e) =>
              dispatch({
                type: "fill_input",
                fieldName: "groupe",
                payload: e.currentTarget.value,
              })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="white">
            Annuler
          </Button>
          <Button onClick={submitCriteria} color="white">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
