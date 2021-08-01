import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <Form
      action="https://formspree.io/f/xgernybk"
      method="POST"
      className="contact-form text-center"
    >
      <h4 className="text-center pb-3">GET IN TOUCH</h4>
      <Form.Group className="mb-3" controlId="email">
        <Form.Control
          name="_replyto"
          type="email"
          placeholder="Your email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="floatingTextarea2">
        <Form.Control
          as="textarea"
          name="message"
          placeholder="Leave your message here"
          style={{ height: "100px" }}
          required
        />
      </Form.Group>

      <Button className="form-btn w-50  mt-2" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContactForm;
