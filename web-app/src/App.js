import React from "react";
import Dashboard from "./pages/dashboard/Index";
import Staff from "./pages/staff/index";
import Player from "./pages/players/index";
import Criteria from "./pages/criteria/Index";
import Agenda from "./pages/agenda/Index";
import AddPlayerPage from "./components/AddPlayerPage";
import LoginPage from "./pages/loginPage/Index"; //New Element
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
          <Route path="/" exact component={LoginPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/criteria" exact component={Criteria} />
          <Route path="/player" exact component={Player} />
          <Route path="/agenda" exact component={Agenda} />
          <Route path="/Addplayer" exact component={AddPlayerPage} />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
