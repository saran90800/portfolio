// src/components/pages/Contact.jsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Card } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Container className="contact-container py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4 contact-heading">📬 Get in Touch</h2>

          {/* Personal Info Card */}
          <Card className="mb-4 contact-info-card shadow-sm">
            <Card.Body>
              <Card.Title>👤 Saran</Card.Title>
              <Card.Text>
                <strong>Email:</strong> <a href="mailto:saransumansn200110@gamail.com">saransumansn200110@gamail.com</a><br />
                <strong>Phone:</strong> <a href="tel:9080034922">9080034922</a><br />
                <strong>Message:</strong> I'm available for full stack development projects and collaborations. Feel free to drop a message below!
              </Card.Text>
            </Card.Body>
          </Card>

          {submitted && (
            <Alert variant="success" dismissible>
              ✅ Thanks! Your message has been sent.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Type your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="floating-objects">
              <span className="float circle"></span>
              <span className="float triangle"></span>
              <span className="float square"></span>
            </div>

            <div className="text-center">
              <Button type="submit" variant="primary" className="contact-button">
                🚀 Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
