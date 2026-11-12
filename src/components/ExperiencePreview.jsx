import React from 'react';
import { Link } from 'react-router-dom';
import experienceData from '../data/experience.json';

const ExperiencePreview = () => {
  const previewItems = experienceData.slice(0, 3);

  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">
        {previewItems.map((item, index) => (
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

        <div className="morebtn">
          <Link to="/experience" className="btn">
            <span>View All</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
