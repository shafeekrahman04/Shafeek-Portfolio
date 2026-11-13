import React from 'react';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <p className="section-subtext">
        Technologies, frameworks, and tools I work with to bring ideas to life
      </p>

      <div className="container">
        <div className="row" id="skillsContainer">
          {skillsData.map((skill, index) => (
            <div className="bar skill-card" key={index}>
              <div className="info">
                <div className="skill-icon-wrapper">
                  <img src={skill.icon} alt={skill.name || 'skill'} loading="lazy" />
                </div>
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
