import React from "react";
import { Link } from "react-router-dom";
import "../scss/nav.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-wrap">
          <ul className="left-section">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
          <ul className="right-section">
            <li>
              <Link to="">Cart</Link>
            </li>
            <li>
              <Link to="">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
