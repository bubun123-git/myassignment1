import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import '../Components/Mainheader.css'

function Mainheader() {
  return (
    <header className="main-header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to="/Home" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Welcome" className="nav-link">Welcome</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Employee" className="nav-link">Employee</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Mainheader;
