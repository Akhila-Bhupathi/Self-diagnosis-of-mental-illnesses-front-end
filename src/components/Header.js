import React from "react";
import "../css/Header.css";
import "./Header";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
      <NavLink to="/" className="header__link">
        <div className="header__item">
          <span>HealThyMind</span>
        </div>
      </NavLink>
      </div>
      <div className="header__right">
      <NavLink to="/about" className="header__link" activeClassName="active">
        <div className="header__item">
          <button>About</button>
        </div>
      </NavLink >
      <NavLink to="/contact" className="header__link" >
        <div className="header__item">
          <button>Contact</button>
        </div>
      </NavLink >
      <NavLink to="/login" className="header__link" activeClassName="active">
      <div className="header__item">
        <button>Login</button>
      </div>
      </NavLink>
      </div>
    </div>
  );
};

export default Header;
