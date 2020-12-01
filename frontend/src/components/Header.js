import React from "react";
import { NavLink } from "reactstrap";
import "../css/header.css";
import LoginModal from "./LoginModal";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo-container">
          <h1>
            <NavLink
              href="/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span>The</span> Auctionista
            </NavLink>
          </h1>
        </div>

        <ul className="navigation">
          <NavLink href="/" className="navlink">
            <li>Home</li>
          </NavLink>
          <NavLink href="/about" className="navlink">
            <li>About</li>
          </NavLink>
          <span className="navlink">
            <li>Login</li>
          </span>
          <span className="navlink">
            <li>Register</li>
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Header;
