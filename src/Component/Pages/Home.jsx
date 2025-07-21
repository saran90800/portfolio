// src/components/pages/Home.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import SaranImage from '../../assets/WhatsApp Image 2025-07-02 at 9.28.54 PM.jpeg';

function Home() {
  return (
    <Container className="home-container py-5">
      <Row className="align-items-center">
        {/* Text Section */}
        <Col md={6} className="mb-4 mb-md-0">
          <h1 className="home-title">
            👋 Hello, I'm <span className="highlighted-name">Saran</span>
          </h1>
          <h4 className="mb-3 home-subtitle">
            💼 Aspiring <span className="fullstack-highlight">Full Stack Developer</span>
          </h4>
          <p className="home-description">
            🚀 I enjoy building full-stack applications with <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            Currently exploring <strong>Express.js</strong>, REST APIs, and deployment strategies.
          </p>

          {/* Tech Stack Icons */}
          <div className="tech-icons my-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width={50} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width={50} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" width={50} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" width={50} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" width={50} />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width={50} />
          </div>

          {/* Action Buttons */}
          <div className="home-buttons mt-3">
            <Button as={Link} to="/portfolio" variant="primary" className="me-2 mb-2">
              🔍 View Projects
            </Button>
            <Button as={Link} to="/contact" variant="outline-primary" className="mb-2">
              ✉️ Contact Me
            </Button>
          </div>
        </Col>

        {/* Image Section */}
        <Col md={6} className="text-center">
          <img
            className="saran-image"
            src={SaranImage}
            alt="Saran - Full Stack Developer"
            width="300"
            height="300"
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
