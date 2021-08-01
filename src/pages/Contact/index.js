import "./Contact.css";
import Title from "../../components/Title";
import FlexContainer from "../../components/FlexContainer";

import ContactForm from "../../components/ContactForm";

const Contact = (props) => {
  return (
    <FlexContainer position="center" padding="true" colour="grey" id="contact">
      <div className="section-container">
        <Title text="CONTACT ME" />
        <div className="contact-row">
          <div className="d-flex gap-5 contact-div">
            <div className="map-div w-50">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=birmingham&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </FlexContainer>
  );
};

export default Contact;
