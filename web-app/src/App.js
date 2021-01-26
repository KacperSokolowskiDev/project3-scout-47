import React, { useState, UseContext } from "react";
import Dashboard from "./pages/dashboard/Index";
import Staff from "./pages/staff/Index";
import Players from "./pages/players/Index";
import Criteria from "./pages/criteria/Index";
import Agenda from "./pages/agenda/Index";
import LoginPage from "./pages/loginPage/Index"; //New Element
import ProfilPage from "./pages/profilPage/Index";
import StaffProfilePage from "./pages/staffProfilePage/Index";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import UserContext from "./context/UserContext";

//Colors for Material UI elements
import theme from "./colors/Index";

//Material UI
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  //const history = useHistory();

  const handleLogin = (user, token) => {
    setUser(user);
    setIsLogged(true);
    setToken(token);
  };

  const handleLogout = () => {
    setUser(null);
    setIsLogged(false);
    setToken(null);
  };

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          isLogged,
          user,
          token,
          login: handleLogin,
          logout: handleLogout,
        }}
      >
        <ThemeProvider theme={theme}>
          <Router>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/staff" exact component={Staff} />
            <Route path="/criteria" exact component={Criteria} />
            <Route path="/players" exact component={Players} />
            <Route path="/agenda" exact component={Agenda} />
            <Route path="/players/profile" exact component={ProfilPage} />
            {/* <Route path="/players/:id" exact component={ProfilPage} /> */}
            <Route path="/staffs/profile" exact component={StaffProfilePage} />
          </Router>
        </ThemeProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
