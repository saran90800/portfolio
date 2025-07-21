// src/components/pages/About.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="about-container py-5">
      <h2 className="text-center mb-4 about-heading">👋 About Me</h2>
      <Row className="align-items-center">
        <Col md={6}>
          <img
                    src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
                    alt="Saran - animated developer working at desk"
                    className="img-fluid home-image"
                    width={500} // Adjust width as needed
                    height={500} // Adjust height as needed
        
                  />
        </Col>
        <Col md={6}>
          <Card className="p-4 about-card">
            <Card.Body>
              <Card.Text className="about-text">
                
                Hello! I'm <strong>Saran</strong>, a passionate aspiring <strong>Full Stack Developer</strong>. I enjoy building web applications using <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
              </Card.Text>
              <Card.Text className="about-text">
                I'm currently learning the <strong>MERN stack</strong> and creating user-friendly, efficient apps.
              </Card.Text>
              <Card.Text className="about-text">
                I'm always open to new opportunities to contribute and grow.
              </Card.Text>
              <Card.Text className="about-quote text-info mt-3">
                💡 <em>"Code is not just what a computer understands. It's what a human can maintain."</em>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
