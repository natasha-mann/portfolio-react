import { useState } from "react";

import logo from "../../images/favicon-32x32.png";

import "./navigationBar.css";
import "../../App.css";

const NavigationBar = (props) => {
  const [colourChange, setColourChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColourChange(true);
    } else {
      setColourChange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      id="navbar"
      className={
        colourChange
          ? "navbar navbar-expand-lg navigation-bar colourChange"
          : "navbar navbar-expand-lg navigation-bar"
      }
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#intro">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse justify-content-end navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link my-link" href="#about-me">
              About Me
            </a>
            <a className="nav-link my-link" href="#projects">
              My Projects
            </a>
            <a className="nav-link my-link" href="#contact">
              Contact
            </a>
            <a
              className="nav-link my-link"
              href="./assets/resume/NatashaMannCV.pdf"
              download="NatashaMannCV"
            >
              <i className="fas fa-file-download"></i> CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
