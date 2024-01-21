import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar bg-dark fixed-top navbar-expand-lg bg-body-tertiary mb-5"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <b>NewsX</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link mx-4" aria-current="page" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
