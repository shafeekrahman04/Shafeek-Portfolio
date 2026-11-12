import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import projectsData from '../data/projects.json';

const ProjectsPreview = () => {
  const containerRef = useRef(null);

  const previewProjects = projectsData
    .filter((project) => project.category !== 'android')
    .slice(0, 10);

  useEffect(() => {
    if (containerRef.current) {
      const tiltNodes = containerRef.current.querySelectorAll('.tilt');
      VanillaTilt.init(tiltNodes, {
        max: 15,
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
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>
      <div className="box-container" ref={containerRef}>
        {previewProjects.map((project, index) => (
          <div className="box tilt" key={index}>
            <img draggable="false" src={project.image} alt={project.name || 'project'} />
            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>
              <div className="desc" style={{ fontSize: '14px' }}>
                <p>{project.desc}</p>
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
        ))}
      </div>
      <div className="viewall">
        <Link to="/projects" className="btn">
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPreview;
