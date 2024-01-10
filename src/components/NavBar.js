import React, { Component } from "react";
// import PropTypes from "prop-types";

export class NavBar extends Component {
  //   static propTypes = {};

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <b>NewsX</b>
            </a>
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
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link mx-4" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/business">
                    Business
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/entertainment">
                    Entertainment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/health">
                    Health
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/science">
                    Science
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/sports">
                    Sports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-4" href="/technology">
                    Technology
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
