import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import VanillaTilt from 'vanilla-tilt';
import { particlesConfig } from '../data/particlesConfig';

const Hero = () => {
  const typingRef = useRef(null);
  const heroImgRef = useRef(null);

  useEffect(() => {
    // Typed.js
    const typed = new Typed(typingRef.current, {
      strings: [
        'frontend development',
        'backend development',
        'mobile app development',
        'web development',
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // Particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', particlesConfig);
    }

    // VanillaTilt
    if (heroImgRef.current) {
      VanillaTilt.init(heroImgRef.current, {
        max: 15,
      });
    }

    return () => {
      typed.destroy();
      if (heroImgRef.current && heroImgRef.current.vanillaTilt) {
        heroImgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const handleScrollToAbout = (e) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home" id="home">
      <div id="particles-js"></div>

      <div className="content">
        <h2>
          Hi There,
          <br /> I'm Shafeek <span>Rahman</span>
        </h2>
        <p>
          i am into <span className="typing-text" ref={typingRef}></span>
        </p>
        <a href="#about" onClick={handleScrollToAbout} className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>
        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/shafeek-rahman-280a17275/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="twitter"
                aria-label="Twitter"
                href="https://www.facebook.com/shafeek.rahman.9047"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                aria-label="Instagram"
                href="https://www.instagram.com/shafeek_rahman_13"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="telegram"
                aria-label="Telegram"
                href="https://t.me/shafeekrahman"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="image">
        <img
          ref={heroImgRef}
          draggable="false"
          className="tilt"
          src="/assets/images/hero.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
