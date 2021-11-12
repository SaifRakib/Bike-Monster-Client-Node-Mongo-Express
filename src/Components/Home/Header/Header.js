import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            Monster Bike
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link
                  className="nav-link btn btn-light active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link btn btn-light active"
                  aria-current="page"
                  to="/explore"
                >
                  Explore
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link btn btn-light active"
                  aria-current="page"
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              {user.email ? (
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link btn btn-light active"
                    aria-current="page"
                    onClick={logOut}
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item mx-2">
                  <Link
                    className="nav-link btn btn-light active"
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
