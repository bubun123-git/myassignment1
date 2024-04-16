import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import '../Components/Mainheader.css'

function Mainheader({isAuthenticated}) {
    
  return (
    <header className="main-header">
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/Home" className="nav-link">Login</NavLink>
        </li>
        {isAuthenticated && (
          <>
            <li className="nav-item">
              <NavLink to="/Welcome" className="nav-link">Welcome</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Employee" className="nav-link">Employee</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
  );
}

export default Mainheader;
