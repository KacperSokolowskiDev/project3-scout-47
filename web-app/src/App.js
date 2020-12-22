import React from "react";

import Dashboard from "./pages/dashboard/Index";
import Navigation from "./components/Navigation";
import AddPlayerPage from "./components/AddPlayerPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route path="/" exact component={Dashboard} />
        <Route path="/Addplayer" exact component={AddPlayerPage} />
      </Router>
    </div>
  );
}

export default App;
