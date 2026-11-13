import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import projectsData from '../data/projects.json';

const ProjectsPreview = () => {
  const containerRef = useRef(null);

  const previewProjects = projectsData
    .filter((project) => project.category !== 'android')
    .slice(0, 9);

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
  }, [previewProjects]);

  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Featured <span>Projects</span>
      </h2>
      <p className="section-subtext">
        A selection of commercial and personal applications I have built
      </p>

      <div className="box-container" ref={containerRef}>
        {previewProjects.map((project, index) => (
          <div className="box tilt project-card" key={index}>
            <div className="project-img-wrapper">
              <img draggable="false" src={project.image} alt={project.name || 'project'} loading="lazy" />
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

      <div className="viewall">
        <Link to="/projects" className="btn">
          <span>Explore All Projects ({projectsData.length})</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
