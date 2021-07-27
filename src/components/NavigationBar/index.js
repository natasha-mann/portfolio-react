import { DocumentDownloadIcon } from "@heroicons/react/outline";

import logo from "../../images/favicon-32x32.png";

import "./NavigationBar.css";
import "../../App.css";

const NavigationBar = (props) => {
  return (
    <nav
      id="navbar"
      class="navbar p-3 fixed-top navbar-expand-lg navbar-light bg-light"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#intro">
          <img src={logo} alt="logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse justify-content-end navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link my-link" href="#about-me">
              About Me
            </a>
            <a class="nav-link my-link" href="#projects">
              My Projects
            </a>
            <a class="nav-link my-link" href="#contact">
              Contact
            </a>
            <a
              class="nav-link my-link"
              href="./assets/resume/NatashaMannCV.pdf"
              download="NatashaMannCV"
            >
              <DocumentDownloadIcon className="cv-icon" /> CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
