import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { DocumentDownloadIcon } from "@heroicons/react/outline";

import logo from "../../images/favicon-32x32.png";

import "./NavigationBar.css";
import "../../App.css";

const NavigationBar = (props) => {
  return (
    <Navbar bg="light" expand="md" className="navigation-bar">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="nav-link my-link" href="#about-me">
            About Me
          </Nav.Link>
          <Nav.Link className="nav-link my-link" href="#projects">
            My Projects
          </Nav.Link>
          <Nav.Link className="nav-link my-link" href="#contact">
            Contact
          </Nav.Link>
          <Nav.Link
            className="nav-link my-link"
            href="./assets/resume/NatashaMannCV.pdf"
            download="NatashaMannCV"
          >
            <DocumentDownloadIcon className="cv-icon" /> CV
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
