import React from "react";
import { Link } from "react-router-dom";
import useContextAPI from "../../Hooks/useContextAPI";
import logo from "./../../assets/images/title-lg.png";

const Header = () => {
  const { user, logout, admin } = useContextAPI();

  console.log(admin);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white py-0">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Travel Avengers" className="logo" />
          </Link>
          <h2>Travel Avengers</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {user ? (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item d-flex align-items-center dropdown">
                  <img
                    src={
                      user.photoURL ||
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                    }
                    alt=""
                    className="user_photo dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    className="dropdown-menu custom_dropdown bg-dark text-center"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="nav-link fw-bold mb-2">
                      {user.displayName}
                    </li>
                    <li>
                      <button
                        className="nav-link btn fw-bold d-block text-center"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/login">
                    <button type="button" class="btn btn-success border border-success rounded">Login</button>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
