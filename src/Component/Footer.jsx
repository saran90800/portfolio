// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'; // Custom CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Saran. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://github.com/saran90800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/mr-saran"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:saran@example.com" aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
