import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skill.css';

const skills = [
  {
    name: "HTML",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "JavaScript",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React.js",
    level: 75,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Express.js",
    level: 65,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    name: "MongoDB",
    level: 60,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }
];

function Skills() {
  return (
    <Container className="skills-container py-5">
      <h2 className="text-center mb-5 skills-heading">💻 My Skills</h2>
      <Row className="align-items-center">
        <Col md={6}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item mb-4 d-flex align-items-center gap-3">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-icon" />
              <div className="w-100">
                <h5 className="mb-1">{skill.name}</h5>
                <ProgressBar now={skill.level} label={`${skill.level}%`} animated />
              </div>
            </div>
          ))}
        </Col>
        <Col md={6} className="text-center">
          <img
            src="https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.webp?s=1024x1024&w=is&k=20&c=lMLbXlQAYI-fMEfNSA_qJgiM3KjrXE1H3Lmh2lY8Ivo="
            alt="Skill illustration"
            className="coding-img"
            width={300}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
