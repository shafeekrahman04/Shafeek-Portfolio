import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h2>

      <p className="qoute">
        "Education is not the learning of facts, but the training of the mind to think."
      </p>

      <div className="box-container">
        <div className="box education-card">
          <div className="image">
            <img
              draggable="false"
              src="/assets/images/academic/Annamalai-University.jpg"
              alt="Annamalai University"
            />
          </div>
          <div className="content">
            <h3>Bachelor of Computer Applications (B.C.A)</h3>
            <p className="institution">Annamalai University</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Computer Programming & Specific Applications
            </p>
            <span className="edu-badge">
              <i className="far fa-calendar-check"></i> June 2021 - April 2024 | Completed
            </span>
          </div>
        </div>

        <div className="box education-card">
          <div className="image">
            <img
              draggable="false"
              src="/assets/images/academic/IRT_Polytechnic_College_1.jfif"
              alt="IRT Polytechnic College"
            />
          </div>
          <div className="content">
            <h3>Diploma in Computer Engineering (D.C.E)</h3>
            <p className="institution">IRT Polytechnic College</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Core Computer Engineering & Hardware Architecture
            </p>
            <span className="edu-badge">
              <i className="far fa-calendar-check"></i> June 2019 - April 2021 | Completed
            </span>
          </div>
        </div>

        <div className="box education-card">
          <div className="image">
            <img
              draggable="false"
              src="/assets/images/academic/time.jpg"
              alt="Time Matric Hr Sec School"
            />
          </div>
          <div className="content">
            <h3>Secondary School Leaving Certificate (SSLC)</h3>
            <p className="institution">Time Matric Hr Sec School</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              Secondary Education
            </p>
            <span className="edu-badge">
              <i className="far fa-calendar-check"></i> 2017 - 2018 | Completed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
