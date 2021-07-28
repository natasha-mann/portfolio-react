import "./Contact.css";
import Title from "../Title";
import FlexContainer from "../FlexContainer";

const Contact = (props) => {
  return (
    <FlexContainer position="center" id="contact">
      <div className="section-container">
        <Title text="CONTACT ME" />
        <div className="contact-row"></div>
      </div>
    </FlexContainer>
  );
};

export default Contact;
