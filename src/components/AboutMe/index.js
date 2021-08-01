import "./AboutMe.css";
import Title from "../Title";
import FlexContainer from "../FlexContainer";
import IconLink from "../IconLink";

import {
  FaGithubSquare,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiGraphql, SiJavascript } from "react-icons/si";

import photo from "../../images/natasha.jpeg";

const AboutMe = (props) => {
  return (
    <FlexContainer position="center" padding="true" colour="grey" id="about-me">
      <div className="section-container">
        <Title text="ABOUT ME" />
        <div className="about-row">
          <img src={photo} alt="Natasha Mann" className="about-img" />
          <div className="about-content">
            <h4 className="about-text about-title">Hi, I'm Natasha.</h4>
            <div className="contact-icons">
              <IconLink
                logo={<FaLinkedin size="2rem" className="contact-logo" />}
                link="https://www.linkedin.com/in/natashamann2896/"
              />
              <IconLink
                logo={<FaGithubSquare size="2rem" className="contact-logo" />}
                link="http://www.github.com/natasha-mann"
              />
            </div>
            <p className="about-text">
              I'm a full stack web developer, confident in working with a MERN
              stack. I also have experience using other frameworks such as
              GraphQl and jQuery, relational databases with MySQL, and of course
              writing in Vanilla JavaScript.
            </p>
            <p className="about-text">
              When I'm not coding, I spend most of my time dancing salsa,
              learning foreign languages and travelling as much as possible!
            </p>
            <div className="skill-icons">
              <IconLink
                logo={<FaReact size="3rem" className="skill-logo" />}
                link="https://reactjs.org/"
              />
              <IconLink
                logo={<FaNodeJs size="3rem" className="skill-logo" />}
                link="https://nodejs.org/en/"
              />
              <IconLink
                logo={<SiGraphql size="3rem" className="skill-logo" />}
                link="https://graphql.org/"
              />
              <IconLink
                logo={<SiJavascript size="3rem" className="skill-logo" />}
                link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              />
              <IconLink
                logo={<FaHtml5 size="3rem" className="skill-logo" />}
                link="https://developer.mozilla.org/en-US/docs/Web/HTML"
              />
              <IconLink
                logo={<FaCss3Alt size="3rem" className="skill-logo" />}
                link="https://developer.mozilla.org/en-US/docs/Web/CSS"
              />
            </div>
          </div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default AboutMe;
