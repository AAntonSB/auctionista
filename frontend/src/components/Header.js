import React, { useState, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "../css/header.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { AuthContext } from "../contexts/AuthContextProvider";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const myHistory = useHistory()

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

  const logout = () => {
    fetch('/logout')
    setUser(null)
    myHistory.push("/")
  }
  /*
              <span className="navlink">
              <li onClick={toggleLoginModal}>Login</li>
            </span>
  */

  return (
    <div>
      <div className="header">
        <div className="inner-header">
          <div className="logo-container">
            <h1>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <span>The</span> Auctionista
              </Link>
            </h1>
          </div>

          <ul className="navigation">
            <Link to="/about" className="navlink">
              <li>About</li>
            </Link>
            {!user && (
            <Link to="/user-login" className="navlink">
              <li>Login</li>
            </Link>
            )}
            {!user && (
            <Link to="/register" className="navlink">
              <li >Register</li>
            </Link> )}
            {user && (
            <Link to="/upload-listing" className="navlink">
              <li>Make listing</li>
            </Link>)}
            {user && (<Link to="/userpage" className="navlink">
              <li>My listings</li>
            </Link>)}
            {user && (<Link to="/" className="navlink">
              <li onClick={logout}>Logout</li>
            </Link>)}
          </ul>
        </div>
      </div>
      <ShowLoginModal />
      <ShowRegisterModal />
    </div>
  );
};

export default Header;
