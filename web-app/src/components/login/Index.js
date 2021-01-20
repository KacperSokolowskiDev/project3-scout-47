import Logo from "../../assets/logo_scout47.png";
import { Link } from "react-router-dom";

//Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box"; //To use margin on buttons

import "./styles.css";

const login = () => {
  return (
    <div>
      <div className="logo-container">
        <img className="logoScout" src={Logo} alt="Logo" />
      </div>
      <div className="input">
        <TextField
          color="secondary"
          id="standard-basic"
          label="E-mail"
          autoComplete="off"
          required
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Password"
          autoComplete="off"
          required
        />
      </div>
      <div className="buttons">
        <Link className="btnLogin" to="/">
          <Button variant="contained" color="secondary">
            Log In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default login;
