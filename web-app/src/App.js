import React from "react";
import Profil from "./components/Profil";
import Rapport from "./components/Rapport";
import Criteria from "./components/Criteria";
import Agenda from "./components/Agenda";
import Navigation from "./components/Navigation";
import AddPlayerPage from "./components/AddPlayerPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/" exact component={Profil} />
        <Route path="/Rapport" exact component={Rapport} />
        <Route path="/Criteria" exact component={Criteria} />
        <Route path="/Agenda" exact component={Agenda} />
        <Route path="/Addplayer" exact component={AddPlayerPage} />
      </Router>
    </div>
  );
}

export default App;
