import React, { Component} from "react"
import { Link } from "react-router-dom"

export default class Navbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">SoccerBuzz</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/clubs/all" className="nav-link">Clubs</Link>
                </li>
                <li className="navbar-item">
                <Link to="/clubs/create" className="nav-link">Create New Club</Link>
                </li>
                <li className="navbar-item">
                <Link to="/clubs" className="nav-link">Create player</Link>
                </li>
                <li className="navbar-item">
                <Link to="/players" className="nav-link">player List</Link>
                </li>
                </ul>
            </div>
        </nav>
        )
    }
}