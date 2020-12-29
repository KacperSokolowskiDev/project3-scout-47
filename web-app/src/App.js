import React from "react";

import Dashboard from "./pages/dashboard/Index";
import Staff from "./pages/staff/index";
import Player from "./pages/players/index";
import Criteria from "./pages/criteria/Index";
import Agenda from "./pages/agenda/Index";
import AddPlayerPage from "./components/AddPlayerPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/staff" exact component={Staff} />
        <Route path="/criteria" exact component={Criteria} />
        <Route path="/player" exact component={Player} />
        <Route path="/agenda" exact component={Agenda} />

        <Route path="/Addplayer" exact component={AddPlayerPage} />
      </Router>
    </div>
  );
}

export default App;
