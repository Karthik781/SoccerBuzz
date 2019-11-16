import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from "./components/home.component"
import Navbar from "./components/navbar.component"
import ClubsList from "./components/clubs-list.component"
import EditClub from "./components/edit-club.component"
import CreateClub from "./components/create-club.component"
import Playerslist from "./components/player-list.component"

function App() {
  return ( 
  <div>
    <Router>
      <Navbar />
      <Route path ="/" exact component = {Home} />
      <Route path = "/clubs/all" exact component = {ClubsList} />
      <Route path = "/clubs/edit/:id" component = {EditClub} />
      <Route path = "/clubs/create" component = {CreateClub} />
      <Route path = "/clubs/players" component ={Playerslist} />
    </Router>
  </div>
  );
}

export default App;
