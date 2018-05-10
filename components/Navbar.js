import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  constructor() {
    super()
  };

  render(){

    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Amazon</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="drivers">Drivers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="routes">Routes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="checkin">Check In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="assignroutes">Assign Routes</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="checkout">Check Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
