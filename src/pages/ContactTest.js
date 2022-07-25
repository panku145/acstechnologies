import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import emailJs from "emailjs-com";

const ContactTest = () => {
  function submitForm(e) {
    e.preventDefault();

    emailJs
      .sendForm(
        "service_erp8toi",
        "template_1ua1iwd",
        e.target,
        "user_2SAcb0CZsLc7ZE6gdP16Y"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="contact-form-sec">
      <Container>
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="name" type="text" placeholder="username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control name="message" as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactTest;
