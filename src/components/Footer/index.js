import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.css";
import IconLink from "../IconLink";

const Footer = () => {
  return (
    <footer className="footer border-top py-3 text-center">
      <div>Designed and Built by Natasha Mann</div>
      <div className="contact-icons mx-auto">
        <IconLink
          logo={<FaLinkedin size="2rem" className="contact-logo" />}
          link="http://www.linkedin.com/in/natasha-mann26"
        />
        <IconLink
          logo={<FaGithubSquare size="2rem" className="contact-logo" />}
          link="http://www.github.com/natasha-mann"
        />
        <IconLink
          logo={<FaInstagram size="2rem" className="contact-logo" />}
          link="http://www.instagram.com/salsatash"
        />
      </div>
    </footer>
  );
};

export default Footer;
