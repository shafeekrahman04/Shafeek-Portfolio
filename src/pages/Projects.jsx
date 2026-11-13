import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import projectsData from '../data/projects.json';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Projects | Portfolio Shafeek Rahman';
    window.scrollTo(0, 0);
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'android') return project.category?.toLowerCase() === 'android';
    if (filter === 'web') return project.category?.toLowerCase() !== 'android';
    return true;
  });

  useEffect(() => {
    if (containerRef.current) {
      const tiltNodes = containerRef.current.querySelectorAll('.tilt');
      VanillaTilt.init(tiltNodes, {
        max: 12,
        speed: 300,
        glare: true,
        'max-glare': 0.15,
      });
    }

    return () => {
      if (containerRef.current) {
        const tiltNodes = containerRef.current.querySelectorAll('.tilt');
        tiltNodes.forEach((node) => {
          if (node.vanillaTilt) {
            node.vanillaTilt.destroy();
          }
        });
      }
    };
  }, [filteredProjects]);

  return (
    <>
      <Navbar activeOverride="work" />

      <section className="work page-section" id="work">
        <h2 className="heading">
          <i className="fas fa-laptop-code"></i> Projects <span>Portfolio</span>
        </h2>
        <p className="section-subtext">
          Browse through all {projectsData.length} client and showcase projects
        </p>

        <div className="filter-button-group">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects ({projectsData.length})
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Applications ({projectsData.filter((p) => p.category?.toLowerCase() !== 'android').length})
          </button>
          <button
            className={`filter-btn ${filter === 'android' ? 'active' : ''}`}
            onClick={() => setFilter('android')}
          >
            Mobile Apps ({projectsData.filter((p) => p.category?.toLowerCase() === 'android').length})
          </button>
        </div>

        <div className="box-container" ref={containerRef}>
          {filteredProjects.map((project, index) => (
            <div className="box tilt project-card" key={index}>
              <div className="project-img-wrapper">
                <img draggable="false" src={project.image} alt={project.name || 'project'} loading="lazy" />
                {project.category?.toLowerCase() === 'android' && (
                  <div className="project-category-badge">Mobile App</div>
                )}
              </div>
              <div className="content">
                <div className="tag">
                  <h3>{project.name}</h3>
                </div>
                <div className="desc">
                  <p>{project.desc}</p>
                  <div className="btns">
                    {project.showViewButton && (
                      <a
                        href={project.links?.view || '#'}
                        className="btn btn-view"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>Live Demo</span>
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
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
