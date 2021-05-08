import React from "react";
import "../css/Header.css";
import "./Header";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
      <Link to="/" className="header__link">
        <div className="header__item">
          <span>HealThyMind</span>
        </div>
      </Link>
      </div>
      <div className="header__right">
      <Link to="/about" className="header__link">
        <div className="header__item">
          <button>About</button>
        </div>
      </Link >
      <Link  className="header__link">
        <div className="header__item">
          <button>Contact</button>
        </div>
      </Link >
      <Link to="/login" className="header__link">
      <div className="header__item">
        <button>Login</button>
      </div>
      </Link>
      </div>
    </div>
  );
};

export default Header;
