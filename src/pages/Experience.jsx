import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import experienceData from '../data/experience.json';
import '../styles/experience.css';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Portfolio Shafeek Rahman';
    window.scrollTo(0, 0);

    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    });

    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });

    return () => {
      srtop.destroy();
    };
  }, []);

  return (
    <>
      <Navbar activeOverride="experience" />

      <section className="experience" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase"></i> Experience
        </h2>
        <div className="quote">
          <span>
            every experience in your life is being orchestrated to teach you something you need to know to move
            forward.
          </span>
        </div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <div className={`container ${item.side}`} key={index}>
              <div className="content">
                <div className="tag">
                  <h2>{item.role}</h2>
                </div>
                <div className="desc">
                  <h3>{item.company}</h3>
                  <p>{item.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="morebtn">
          <Link to="/#experience" className="btn">
            <i className="fas fa-arrow-left"></i>
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default Experience;
