import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import logo from "../../../../images/logo.png";
import "./Header.css";

const Header = () => {
  // Get user from Context
  const { user, logOut } = useContext(AuthContext);

  // Dropdown State
  const [isOpen, setIsOpen] = useState(false);

  // Log Out Function
  const logoutHandler = () => {
    logOut();
  };

  return (
    <section id="Header">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <Link to="/" className="logo">
            <span>Travel</span>Guru
            <Image draggable="false" src={logo}></Image>
          </Link>
          <button
            className="navbar-toggler collapsed m-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav pl-md-5 mx-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tours" className="nav-link">
                  Tours
                </Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
            <div className="navbar-nav ml-auto">
              <div className="nav-buttons">
                {user ? (
                  <div className="position-relative">
                    <Image
                      onClick={() => setIsOpen(!isOpen)}
                      className="profile-picture"
                      src={user?.photoURL}
                    ></Image>
                    {isOpen && (
                      <div className="account">
                        <ul>
                          <li>
                            <Link onClick={logoutHandler}>Log Out</Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="login">
                      Login
                    </Link>
                    <Link to="/register" className="sign-up">
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
