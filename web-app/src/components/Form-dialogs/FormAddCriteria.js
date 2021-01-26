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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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
  formControl: {
    margin: theme.spacing(0),
    minWidth: 200,
  },
}));

export default function FormAddCriteria({ fetchCriterias }) {
  const classes = useStyles();

  const initialState = {
    name: "",
    groupe: "",
    score: 1,
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
        .post("http://localhost:5000/api/criteria", state)
        .then((res) => {
          console.log("criteria posted", res.data);
          fetchCriterias();
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
            autoComplete="no"
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
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-dialog-select-label">Groupe</InputLabel>
            <Select
              labelId="demo-dialog-select-label"
              id="demo-dialog-select"
              onChange={(e) =>
                dispatch({
                  type: "fill_input",
                  fieldName: "groupe",
                  payload: e.target.value,
                })
              }
            >
              <MenuItem value={"Physique"}>Physique</MenuItem>
              <MenuItem value={"Technique"}>Technique</MenuItem>
              <MenuItem value={"Stratégique"}>Stratégique</MenuItem>
              <MenuItem value={"Psychologique"}>Psychologique</MenuItem>
            </Select>
          </FormControl>
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
