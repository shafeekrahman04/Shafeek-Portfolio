import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import { particlesConfig } from '../data/particlesConfig';

const Hero = () => {
  const typingRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        'React.js & Next.js Development',
        'TypeScript & JavaScript (ES6+)',
        'Node.js & Java Backend',
        'Enterprise ERP & Web Products'
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 800,
    });

    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig);
    }

    if (heroImgRef.current) {
      VanillaTilt.init(heroImgRef.current, {
        max: 12,
        speed: 400,
        glare: true,
        'max-glare': 0.15,
      });
    }

    return () => {
      typed.destroy();
      if (heroImgRef.current && heroImgRef.current.vanillaTilt) {
        heroImgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div id="particles-js"></div>

      <div className="content">
        <div className="badge-available">
          <span className="pulse-indicator"></span>
          <span>⚡ Immediate Joiner • Bengaluru, India</span>
        </div>

        <h2>
          Hi There,
          <br /> I'm Shafeek <span className="highlight-text">Rahman</span>
        </h2>
        <p>
          I build <span className="typing-text" ref={typingRef}></span>
        </p>

        <div className="hero-cta-group">
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, 'about')}
            className="btn btn-primary"
          >
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down"></i>
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="btn btn-outline"
          >
            <span>Contact Info</span>
            <i className="fas fa-envelope"></i>
          </a>
        </div>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/shafeekrahman04"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                className="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/shafeek.rahman.9047"
                target="_blank"
                rel="noreferrer"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me/shafeekrahman"
                target="_blank"
                rel="noreferrer"
                title="Telegram"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <div className="hero-profile-container">
          <div className="hero-profile-glow"></div>
          <div className="hero-profile-frame" ref={heroImgRef}>
            <img
              draggable="false"
              className="hero-profile-img"
              src="/assets/images/shafeek-profile.jpg"
              alt="Shafeek Rahman - Senior Frontend Developer"
            />
            <div className="hero-experience-badge">
              <span className="badge-icon"><i className="fas fa-laptop-code"></i></span>
              <div className="badge-text">
                <strong>Senior Frontend Dev</strong>
                <span>Asta Systech • 5+ Yrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
