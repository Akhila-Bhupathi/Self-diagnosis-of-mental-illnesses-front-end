import React from "react";
import "../css/Header.css";
import "./Header";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__item">
          <h1>Home</h1>
        </div>
      </Link>

      <Link to="/about" style={{ textDecoration: "none" }}>
        <div className="header__item">
          <h1>About</h1>
        </div>
      </Link>
      <div className="header__item">
        <h1>Contact us</h1>
      </div>
      <Link to="/login">
      <div className="header__item">
        <h1>Login</h1>
      </div>
      </Link>
    </div>
  );
};

export default Header;
