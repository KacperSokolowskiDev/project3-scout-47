import React from 'react';
import Profil from './Profil';
import Rapport from './Rapport';
import Critères from './Critères';
import Agenda from './Agenda';
import Navigation from './Navigation';
import {BrowserRouter as Router,Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>

        <Route path="/" exact component={Profil}/>
        <Route path="/Rapport" exact component={Rapport}/>
        <Route path="/Critères" exact component={Critères}/>
        <Route path="/Agenda" exact component={Agenda}/>

      </Router>
    </div>
  );
}

export default App;
