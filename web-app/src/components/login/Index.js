import React, { useState, useContext } from "react";
import Logo from "../../assets/logo_scout47.png";
import { Link, Router, useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";

//Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box"; //To use margin on buttons
import {useDataLayerValue} from "./../DataLayer"

import "./styles.css";


const Index = ({api} ) => {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const userContext = useContext(UserContext);
  const history = useHistory();

  const [{ token }, dispatch] = useDataLayerValue();


  const handleLogin = async (e) => {
    e.preventDefault();
    // const value = {
    //   email: email,
    //   password: password,
    // };
    try {
      const { data } = await api.login(email, password)
   // api.setAccessToken(_token);
      console.log("oo", data)

      dispatch({
        type: "SET_TOKEN",
        token: data.token,
      });

      dispatch({
        type: "SET_USER",
        user: data.user
      })
      
      history.push("/dashboard");


    } catch (error) {
      console.log(error)
    }
  };  

  const changeRender = () => {
    // GO dashboard
    history.push("/dashboard");
  };

  return (
    <>
      {userContext.isLogged ? (
        changeRender()
      ) : (
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
              onChange={(e) => setMail(e.currentTarget.value)}
            />
            <TextField
              color="secondary"
              id="standard-basic"
              label="Password"
              type="password"
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div className="buttons">
            <Link className="btnLogin" to="/">
              <Button
                variant="contained"
                color="secondary"
                onClick={(e) => handleLogin(e)}
              >
                Log In
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
