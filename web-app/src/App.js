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
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import UserContext from "./context/UserContext";
import Scout47Api from "./components/Scout47Api";
import MediaPlayer from "./components/MediaPlayer";
import { useDataLayerValue } from "./components/DataLayer";
import PlayerDetail from "./pages/Player/PlayerDetail";

//Colors for Material UI elements
import theme from "./colors/Index";
import { play } from "video-react/lib/actions/player";

//Material UI
//import { ThemeProvider } from "@material-ui/core/styles";

const api = new Scout47Api();
const mediaPlayer = new MediaPlayer();

function App() {
  // debugger
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

  const [{ token, isAuth }, dispatch] = useDataLayerValue();

  useEffect(async () => {
    // Set token
    try {
      api.setAccessToken(token);
      let players = await api.getUserPlayers();
      dispatch({
        type: "SET_MY_PLAYERS",
        players,
      });
    } catch (error) {
      console.log(error);
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <LoginPage {...props} api={api} />}
          />
          <ScoutsLayout api={api} mediaPlayer={mediaPlayer}>
            <Route
              path="/players/:id"
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
