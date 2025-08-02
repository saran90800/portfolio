// src/components/pages/Home.jsx

import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import SaranImage from '../../assets/WhatsApp Image 2025-07-02 at 9.28.54 PM.jpeg';

function Home() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const loadVanta = async () => {
      if (!vantaEffect && window.VANTA?.CLOUDS) {
        setVantaEffect(
          window.VANTA.CLOUDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            backgroundColor: 0xed3b3b,
            skyColor: 0xb37788,
            cloudColor: 0xb37f7f,
            cloudShadowColor: 0x060707,
            sunColor: 0x0c0b07,
            sunGlareColor: 0xc8c8c8,
            sunlightColor: 0x914500,
          })
        );
      }
    };

    loadVanta();
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="vanta-home-wrapper">
      <Container className="home-container py-5 text-white">
        <Row className="align-items-center">
          {/* Text Section */}
          <Col md={6} className="mb-4 mb-md-0">
            <h1 className="home-title">
              👋 Hello, I'm <span className="highlighted-name">Saran</span>
            </h1>
            <h4 className="mb-3 home-subtitle">
              💼 Aspiring <span className="fullstack-highlight">Full Stack / MERN Stack Developer</span>
            </h4>
            <p className="home-description">
              🚀 I enjoy building full-stack applications with <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
              Currently exploring <strong>Express.js</strong>, REST APIs, and deployment strategies.
            </p>

            <p className="home-description">
              🧠 <strong>Self-motivated</strong> and passionate about practical learning. I believe in "learning by doing" and consistently challenge myself with real-world projects.
            </p>

            <p className="home-description">
              📍 I'm from <strong>Ooty, Tamil Nadu, India</strong>.
              <br />
              🎓 My education includes a <strong>Diploma + B.E. in Computer Science</strong>.
            </p>

            <p className="home-description">
              🗣️ Languages: <strong>Tamil</strong>, <strong>English</strong>
              <br />
              🎯 Hobbies: <strong>Web application development</strong>, <strong>cricket Playing</strong>, and <strong>playing football</strong>.
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
    </div>
  );
}

export default Home;
