import React from "react";
import Dashboard from "./pages/dashboard/Index";
import Staff from "./pages/staff/Index";
import Player from "./pages/players/Index";
import Criteria from "./pages/criteria/Index";
import Agenda from "./pages/agenda/Index";
import AddPlayerPage from "./components/AddPlayerPage";
import LoginPage from "./pages/loginPage/Index"; //New Element
import ProfilPage from "./pages/profilPage/Index";
import StaffProfilePage from "./pages/staffProfilePage/Index";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Colors for Material UI elements
import theme from "./colors/Index";

//Material UI
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/criteria" exact component={Criteria} />
          <Route path="/player" exact component={Player} />
          <Route path="/agenda" exact component={Agenda} />
          <Route path="/Addplayer" exact component={AddPlayerPage} />
          <Route path="/players/profile" exact component={ProfilPage} />
          <Route path="/staffs/profile" exact component={StaffProfilePage} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
