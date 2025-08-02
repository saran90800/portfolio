import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skill.css';

function Skills() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
  setVantaEffect(window.VANTA.NET({
    el: vantaRef.current,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 100,
    minWidth: 100,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0xff416c,
    backgroundColor: 0x0a0a0a
  }));
}

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
// Removed misplaced <div> block from useEffect


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "HTML", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "MongoDB", level: 60, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ];

  return (
  <div ref={vantaRef} className="vanta-bg">
    <Container className="skills-container py-5" ref={containerRef}>
      <h2 className="text-center mb-2 skills-heading">💻 My Skills</h2>
      <p className="text-center mb-4 skills-subtitle">
        🚀 I love crafting apps with code & creativity! <span className="love-effect">❤️</span> Here are the tools I use daily.
      </p>
      <Row className="align-items-center">
        <Col md={6}>
          {skills.map((skill, index) => (
            <div key={index} className="skill-item mb-4 d-flex align-items-center gap-3">
              <img src={skill.logo} alt={`${skill.name} logo`} className="skill-icon-small" />
              <div className="w-100">
                <h6 className="mb-1 skill-name">💡 {skill.name}</h6>
                <ProgressBar
                  now={visible ? skill.level : 0}
                  label={visible ? `${skill.level}%` : ''}
                  className="custom-progress"
                  animated
                />
              </div>
            </div>
          ))}
        </Col>
        <Col md={6} className="text-center mt-4 mt-md-0">
          <img
            src="https://media.istockphoto.com/id/637711198/photo/hand-with-marker-writing-skill-concept.webp?s=1024x1024&w=is&k=20&c=lMLbXlQAYI-fMEfNSA_qJgiM3KjrXE1H3Lmh2lY8Ivo="
            alt="Skill illustration"
            className="coding-img"
            width={250}
          />
          <p className="mt-3 emoji-note">🔥 Code with passion. Build with heart. ❤️</p>
        </Col>
      </Row>
    </Container>
  </div>
);
}

export default Skills;
