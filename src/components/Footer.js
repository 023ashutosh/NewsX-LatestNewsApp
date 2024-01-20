import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  const handleMouseOver = (e) => {
    e.target.style.textDecoration = "underline";
  };

  const handleMouseOut = (e) => {
    e.target.style.textDecoration = "none";
  };

  return (
    <footer
      className="fixed-bottom text-center text-white"
      style={{ backgroundColor: "#20211A" }}
    >
      <div className="container p-4">
        <Link
          className="text-white text-decoration-none"
          to="https://github.com/023ashutosh/news_x"
          style={{ transition: "text-decoration 0.3s" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <b>NewsX : Ashutosh Pratap Singh</b>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
