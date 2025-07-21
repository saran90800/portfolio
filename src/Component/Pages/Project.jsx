// src/components/pages/Portfolio.jsx
import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import './Project.css';

const projects = [
  {
    title: "💻 Speech Emotion Recognition",
    description: `Emotion recognition from speech signals is an important but challenging component of Human-Computer Interaction (HCI)...`,
    image: "https://images.unsplash.com/photo-1581090700227-1e8eab0a5aaf?auto=format&fit=crop&w=800&q=80",
    link: "https://yourprojectlink.com"
  },
  {
    title: "🛠️ Sign Language Recognition",
    description: `Talk to a man in a language he understands, that goes to his head. Talk to him in his own language, that goes to his heart...`,
    image: "https://images.unsplash.com/photo-1581091870634-475f0d419b96?auto=format&fit=crop&w=800&q=80",
    link: "https://yourprojectlink.com"
  },
  {
    title: "🔐 MERN Auth Project",
    description: "A full stack MERN project with login/logout, JWT authentication, and protected routes.",
    image: "https://images.unsplash.com/photo-1581092919530-9760a7b28a38?auto=format&fit=crop&w=800&q=80",
    link: "https://yourprojectlink.com"
  }
];

function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleMoreInfo = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <Container className="portfolio-container py-5">
      <h2 className="text-center mb-5">🚀 My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} sm={6} md={4} key={index} className="mb-4">
            <Card className="project-card h-100">
              <Card.Img variant="top" src={project.image} alt={project.title} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description.slice(0, 100)}...</Card.Text>
                <div className="mt-auto d-flex flex-wrap gap-2">
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    View
                  </Button>
                  <Button
                    variant="outline-light"
                    className="animated-button"
                    onClick={() => handleMoreInfo(project)}
                  >
                    <FaInfoCircle className="me-2" />
                    More Info
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {activeProject && (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="img-fluid mb-3 rounded"
            />
            <p>{activeProject.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button
              variant="primary"
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Project
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Portfolio;
