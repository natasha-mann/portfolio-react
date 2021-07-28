import "./intro.css";

import photo from "../../images/profile-image-salsa.jpg";

import TextPrinter from "../TextPrinter";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import FlexContainer from "../FlexContainer";

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

        <div className="centered-text">
          <FaRegArrowAltCircleDown size="2rem" />
        </div>
      </div>
    </FlexContainer>
  );
};

export default Intro;
