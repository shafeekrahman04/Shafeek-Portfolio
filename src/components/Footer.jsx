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
    <section className="footer" id="contact">
      <div className="box-container">
        <div className="box">
          <h3>Shafeek's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with me over socials.{' '}
            <br /> <br /> Keep Rising 🚀. Connect with me over live chat!
          </p>
        </div>
        <div className="box">
          <h3>quick links</h3>
          <a href="/#home" onClick={(e) => handleNavClick(e, 'home')}>
            <i className="fas fa-chevron-circle-right"></i> home
          </a>
          <a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>
            <i className="fas fa-chevron-circle-right"></i> about
          </a>
          <a href="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>
            <i className="fas fa-chevron-circle-right"></i> skills
          </a>
          <a href="/#education" onClick={(e) => handleNavClick(e, 'education')}>
            <i className="fas fa-chevron-circle-right"></i> education
          </a>
          <a href="/#work" onClick={(e) => handleNavClick(e, 'work')}>
            <i className="fas fa-chevron-circle-right"></i> work
          </a>
          <a href="/#experience" onClick={(e) => handleNavClick(e, 'experience')}>
            <i className="fas fa-chevron-circle-right"></i> experience
          </a>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <p>
            {' '}
            <i className="fas fa-phone"></i>+91 7094677840
          </p>
          <p>
            {' '}
            <i className="fas fa-envelope"></i>shafeekrahman04@gmail.com
          </p>
          <p>
            {' '}
            <i className="fas fa-map-marked-alt"></i>TN, India-627005
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
              className="fab fa-linkedin"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="mailto:shafeekrahman04@gmail.com"
              className="fas fa-envelope"
              aria-label="Mail"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://t.me/shafeekrahman"
              className="fab fa-telegram-plane"
              aria-label="Telegram"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{' '}
        <a
          href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
          target="_blank"
          rel="noreferrer"
        >
          shafeek rahman
        </a>
      </h1>
    </section>
  );
};

export default Footer;
