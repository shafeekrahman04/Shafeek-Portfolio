import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import projectsData from '../data/projects.json';
import '../styles/projects.css';

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Projects | Portfolio Shafeek Rahman';
    window.scrollTo(0, 0);

    if (containerRef.current) {
      const tiltNodes = containerRef.current.querySelectorAll('.tilt');
      VanillaTilt.init(tiltNodes, {
        max: 20,
      });
    }

    const srtop = ScrollReveal({
      origin: 'bottom',
      distance: '80px',
      duration: 1000,
      reset: true,
    });

    srtop.reveal('.work .box', { interval: 200 });

    return () => {
      srtop.destroy();
      if (containerRef.current) {
        const tiltNodes = containerRef.current.querySelectorAll('.tilt');
        tiltNodes.forEach((node) => {
          if (node.vanillaTilt) {
            node.vanillaTilt.destroy();
          }
        });
      }
    };
  }, []);

  return (
    <>
      <Navbar activeOverride="work" />

      <section className="work" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>

        <div className="box-container" ref={containerRef}>
          {projectsData.map((project, index) => (
            <div className={`grid-item ${project.category}`} key={index}>
              <div className="box tilt" style={{ width: '380px', margin: '1rem' }}>
                <img draggable="false" src={project.image} alt={project.name || 'project'} />
                <div className="content">
                  <div className="tag">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="desc">
                    <p style={{ fontSize: '14px' }}>{project.desc}</p>
                    <div className="btns">
                      {project.showViewButton && (
                        <a
                          href={project.links?.view || '#'}
                          className="btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fas fa-eye"></i> View
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="backbtn">
          <Link to="/#work" className="btn">
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

export default Projects;
