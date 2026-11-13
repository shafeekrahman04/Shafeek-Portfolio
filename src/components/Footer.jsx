import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <footer className="footer">
      <div className="box-container">
        <div className="box footer-about">
          <h3>Shafeek Rahman</h3>
          <p>
            Senior Frontend Developer with 5+ years of experience architecting dynamic React, Next.js, and TypeScript web applications for enterprise ERPs and digital products.
          </p>
          <div className="footer-status">
            <span className="pulse-indicator"></span>
            <span>⚡ Immediate Joiner • Bengaluru, Karnataka, India</span>
          </div>
        </div>

        <div className="box footer-links">
          <h3>Quick Links</h3>
          <a href="/#home" onClick={(e) => handleNavClick(e, 'home')}>
            <i className="fas fa-chevron-right"></i> Home
          </a>
          <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>
            <i className="fas fa-chevron-right"></i> About
          </a>
          <a href="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            <i className="fas fa-chevron-right"></i> Skills
          </a>
          <a href="/#education" onClick={(e) => handleNavClick(e, 'education')}>
            <i className="fas fa-chevron-right"></i> Education
          </a>
          <a href="/#work" onClick={(e) => handleNavClick(e, 'work')}>
            <i className="fas fa-chevron-right"></i> Projects
          </a>
          <a href="/#experience" onClick={(e) => handleNavClick(e, 'experience')}>
            <i className="fas fa-chevron-right"></i> Experience
          </a>
        </div>

        <div className="box footer-contact">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+917094677840">+91 7094677840</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:shafeekrahman04@gmail.com">shafeekrahman04@gmail.com</a>
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i>
            <span>Bengaluru, Karnataka, India</span>
          </p>

          <div className="share">
            <a
              href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            ></a>
            <a
              href="https://github.com/shafeekrahman04"
              className="fab fa-github"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            ></a>
            <a
              href="mailto:shafeekrahman04@gmail.com"
              className="fas fa-envelope"
              aria-label="Email"
              target="_blank"
              rel="noreferrer"
              title="Email"
            ></a>
            <a
              href="https://t.me/shafeekrahman"
              className="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
              title="Telegram"
            ></a>
          </div>
        </div>
      </div>

      <div className="credit-bar">
        <p className="credit">
          Designed & Built with <i className="fa fa-heart pulse"></i> by{' '}
          <a
            href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
            target="_blank"
            rel="noreferrer"
          >
            Shafeek Rahman
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
