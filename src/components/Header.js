import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__home">
        <Link to="/">
          <h2>Home</h2>
        </Link>
      </div>
      <div className="header__others">
        <Link to="/about">
          <h2>About</h2>
        </Link>
        <Link to="/projects">
          <h2>Projects</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
