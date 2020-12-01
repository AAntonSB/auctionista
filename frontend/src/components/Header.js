import React from "react";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <div className="logo-container">
          <h1>
            <span>The</span> Auctionista
          </h1>
        </div>

        <ul className="navigation">
          <a>
            <li>Home</li>
          </a>
          <a>
            <li>About</li>
          </a>
          <a>
            <li>My page</li>
          </a>
          <a>
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
