import React from "react";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="container " to="/">
        React Gallery
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
         <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav-bar ms-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/upload">
              Upload an Image
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;