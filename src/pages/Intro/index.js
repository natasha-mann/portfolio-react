import "./intro.css";

import photo from "../../images/profile-image-salsa.jpg";

import TextPrinter from "../../components/TextPrinter";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import FlexContainer from "../../components/FlexContainer";

const Intro = () => {
  return (
    <FlexContainer position="center" id="home">
      <div className="intro-content">
        <div>
          <img className="profile-img" src={photo} alt="Natasha Mann" />
          <div className="name-text">Natasha Mann</div>

          <TextPrinter />
          <div className="intro-text">Birmingham, UK</div>
        </div>

        <a className="arrow-icon" href="#about-me">
          <FaRegArrowAltCircleDown size="2rem" />
        </a>
      </div>
    </FlexContainer>
  );
};

export default Intro;
