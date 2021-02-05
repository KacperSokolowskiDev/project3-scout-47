import React, { useEffect, useState, UseContext } from "react";
import Dashboard from "./pages/dashboard/Index";
import Staff from "./pages/staff/Index";
import Player from "./pages/players/Index";
import Criteria from "./pages/criteria/Index";
import Agenda from "./pages/agenda/Index";
import ScoutsLayout from "./components/layouts/ScoutsLayout";
import LoginPage from "./pages/loginPage/Index"; //New Element
import ProfilPage from "./pages/profilPage/Index";
import StaffProfilePage from "./pages/staffProfilePage/Index";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import UserContext from "./context/UserContext";
import Scout47Api from "./components/Scout47Api";
import MediaPlayer from "./components/MediaPlayer";
import { useDataLayerValue } from "./components/DataLayer";
import PlayerDetail from "./pages/PlayerDetail/PlayerDetail";

//Colors for Material UI elements
import theme from "./colors/Index";

//Material UI
//import { ThemeProvider } from "@material-ui/core/styles";

const api = new Scout47Api();
const mediaPlayer = new MediaPlayer();

function App() {
  //const [isLogged, setIsLogged] = useState(false);
  //const [user, setUser] = useState(null);
  //const [token, setToken] = useState(null);
  //const history = useHistory();

  // const handleLogin = (user, token) => {
  //   setUser(user);
  //   setIsLogged(true);
  //   setToken(token);
  // };

  // const handleLogout = () => {
  //   setUser(null);
  //   setIsLogged(false);
  //   setToken(null);
  // };

  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token
    // const hash = getTokenFromUrl();
    //window.location.hash = "";
    // let _token = hash.access_token;

    // if (_token) {
    if (true) {
      // api.setAccessToken(_token);

      // dispatch({
      //   type: "SET_TOKEN",
      //   token: _token,
      // });

      api.getPlayer("1").then((response) =>
        dispatch({
          type: "SET_MY_PLAYERS",
          my_players: response,
        })
      );

      api.getMyTopPlayers().then((response) =>
        dispatch({
          type: "SET_TOP_PLAYERS",
          top_players: response,
        })
      );

      dispatch({
        type: "SET_SCOUT47",
        api: api,
      });

      api.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      api.getUserPlayers().then((players) => {
        console.log("yo ro");
        dispatch({
          type: "SET_PLAYERS",
          players,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {/* <UserContext.Provider
      // value={{
      //   isLogged,
      //   user,
      //   token,
      //   login: handleLogin,
      //   logout: handleLogout,
      // }}
      > */}
      {/* <ThemeProvider theme={theme}> */}
      <Router>
        <ScoutsLayout api={api} mediaPlayer={mediaPlayer}>
          <Route path="/" exact component={LoginPage} />
          <Route
            path="/"
            exact
            render={(props) => (
              <PlayerDetail {...props} api={api} mediaPlayer={mediaPlayer} />
            )}
          />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/criteria" exact component={Criteria} />
          <Route path="/player" exact component={Player} />
          <Route path="/agenda" exact component={Agenda} />
          <Route path="/players/profile" exact component={ProfilPage} />
          <Route path="/staffs/profile" exact component={StaffProfilePage} />
        </ScoutsLayout>
      </Router>
      {/* </ThemeProvider> */}
      {/* </UserContext.Provider> */}
    </div>
  );
}

export default App;
