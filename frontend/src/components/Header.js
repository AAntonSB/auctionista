import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const ShowLoginModal = () => {
    if (showLoginModal) {
      setShowRegisterModal(false);
      return <LoginModal />;
    } else {
      return <></>;
    }
  };

  const ShowRegisterModal = () => {
    if (showRegisterModal) {
      setShowLoginModal(false);
      return <RegisterModal />;
    } else {
      return <></>;
    }
  };

  return (
    <div>
      <div className="header">
        <div className="inner-header">
          <div className="logo-container">
            <h1>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <span>The</span> Auctionista
              </Link>
            </h1>
          </div>

          <ul className="navigation">
            <Link to="/" className="navlink">
              <li>Home</li>
            </Link>
            <Link to="/about" className="navlink">
              <li>About</li>
            </Link>
            <span className="navlink">
              <li onClick={toggleLoginModal}>Login</li>
            </span>
            <span className="navlink">
              <li onClick={toggleRegisterModal}>Register</li>
            </span>
          </ul>
        </div>
      </div>
      <ShowLoginModal />
      <ShowRegisterModal />
    </div>
  );
};

export default Header;
