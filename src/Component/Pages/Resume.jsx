// src/components/pages/Resume.jsx

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Resume.css';

function Resume() {
  return (
    <Container className="resume-container py-5">
      <h2 className="text-center mb-4 resume-heading text-gradient animate-text">📄 My Resume</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 resume-card fade-in">
            <Card.Body>
              <Card.Text className="resume-section">
                <strong>Name:</strong> <span className="highlight">Saran</span>
              </Card.Text>
              <Card.Text className="resume-section">
                <strong>Role:</strong> <span className="highlight">Aspiring Full Stack Developer</span>
              </Card.Text>
              <Card.Text className="resume-section">
                <strong>Skills:</strong> <span className="highlight">React.js, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS</span>
              </Card.Text>
              <Card.Text className="resume-section">
                <strong>Education:</strong> <span className="highlight">Diploma + B.E in Computer Science, currently pursuing Full Stack Development course</span>
              </Card.Text>

              <div className="resume-section">
                <strong>Projects:</strong>
                <ul className="highlight-list">
                  <li>🌐 Portfolio Website</li>
                  <li>🛍️ E-commerce App (MERN Stack)</li>
                  <li>📬 Contact Form with NodeMailer</li>
                </ul>
              </div>

              <div className="text-center mt-4">
                <a
                  href="https://your-link.com/Saran_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn resume-button"
                >
                  📥 Download Resume (PDF)
                </a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
