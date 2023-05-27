import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <nav>
          <ul>
            <li className="logo">Logo</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
