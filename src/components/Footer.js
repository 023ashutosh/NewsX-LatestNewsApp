import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#20211A" }}
      >
        <div className="container p-4">
          <Link
            className="text-white text-decoration-none"
            to="https://github.com/023ashutosh/news_x"
            style={{ transition: "text-decoration 0.3s" }}
            onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
            onMouseOut={(e) => (e.target.style.textDecoration = "none")}
          >
            <b>NewsX : Ashutosh Pratap Singh</b>
          </Link>
        </div>
      </footer>
    );
  }
}

export default Footer;
