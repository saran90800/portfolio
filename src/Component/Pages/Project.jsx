import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/src/vanta.globe";
import { Card, Button, Container, Row, Col, Modal } from "react-bootstrap";
import { FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import './Project.css';

const projects = [
  {
    title: "💻 Speech Emotion Recognition",
    description: `Emotion recognition from speech signals is an important but challenging component of Human-Computer Interaction (HCI)...`,
    image: "https://images.unsplash.com/photo-1581090700227-1e8eab0a5aaf?auto=format&fit=crop&w=800&q=80",
    link: "https://yourprojectlink.com"
  },
];

function Project() {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 500.0,
          minWidth: 200.0,
          scale: 1.0,
          color: 0x308aa7,
          color2: 0xe62222,
          backgroundColor: 0x504550,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleMoreInfo = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  return (
    <div ref={vantaRef} className="portfolio-container text-white py-5">
      <Container>
        <h2 className="text-center mb-5">🚀 My Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card className="project-card h-100">
                <Card.Img variant="top" src={project.image} />
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

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{activeProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={activeProject?.image} alt="" className="img-fluid mb-3 rounded" />
            <p>{activeProject?.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary" href={activeProject?.link} target="_blank">
              Visit Project
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default Project;
