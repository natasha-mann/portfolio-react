import "./intro.css";
import "../../App.css";
import photo from "../../images/profile-image-salsa.jpg";

import TextPrinter from "../TextPrinter";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Intro = (props) => {
  return (
    <section className="container-fluid intro">
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
    </section>
  );
};

export default Intro;
