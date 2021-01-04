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
        <TextField color="secondary" id="standard-basic" label="E-mail" />
        <TextField color="secondary" id="standard-basic" label="Password" />
      </div>
      <div className="buttons">
        <Box mr="2.5rem">
          <Link className="btnLogin" to="/dashboard">
            <Button variant="contained" color="secondary">
              Log In
            </Button>
          </Link>
        </Box>
        <Button variant="contained" color="secondary">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default login;
