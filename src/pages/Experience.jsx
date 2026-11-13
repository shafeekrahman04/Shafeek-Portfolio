import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import experienceData from '../data/experience.json';

const Experience = () => {
  useEffect(() => {
    document.title = 'Experience | Portfolio Shafeek Rahman';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar activeOverride="experience" />

      <section className="experience page-section" id="experience">
        <h2 className="heading">
          <i className="fas fa-briefcase"></i> Work <span>Experience</span>
        </h2>
        <div className="quote">
          <span>
            Every experience in your life is being orchestrated to teach you something you need to know to move forward.
          </span>
        </div>

        <div className="timeline">
          {experienceData.map((item, index) => (
            <div className={`container ${item.side}`} key={index}>
              <div className="timeline-badge-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="content">
                <div className="tag">
                  <h2>{item.role}</h2>
                  <span className="period-pill">
                    <i className="far fa-calendar-alt"></i> {item.period}
                  </span>
                </div>
                <div className="desc">
                  <h3>
                    <i className="fas fa-building"></i> {item.company}
                  </h3>
                  {item.desc && <p>{item.desc}</p>}
                  {item.skills && (
                    <div className="skills-tags">
                      {item.skills.map((skill, sIdx) => (
                        <span className="skill-pill" key={sIdx}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="morebtn">
            <Link to="/#experience" className="btn">
              <i className="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
};

export default Experience;
