import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>

      <p className="qoute">
        Education is not the learning of facts, but the training of the mind to think.
      </p>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2FAnnamalai-University.jpg?alt=media&token=891776bf-ac25-4340-a608-9b7522f14615"
              alt="Annamalai University"
            />
          </div>
          <div className="content">
            <h3>Bachelor of Computer Application</h3>
            <p>Annamalai University</p>
            <h4>2021-2024 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2FIRT_Polytechnic_College_1.jfif?alt=media&token=038044d4-99fc-4dc0-bc42-b32b391cf64b"
              alt="IRT Polytechnic College"
            />
          </div>
          <div className="content">
            <h3>Diploma in Computer Science</h3>
            <p>IRT Ploytechnic College</p>
            <h4>2019-2021 | Completed</h4>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img
              draggable="false"
              src="https://firebasestorage.googleapis.com/v0/b/shafeek-portfolio.appspot.com/o/education%2Ftime.jpg?alt=media&token=73ede28e-0836-4a0c-84b0-7c9081f75fd0"
              alt="Time Matric Hr Sec School"
            />
          </div>
          <div className="content">
            <h3>Secondary Education</h3>
            <p>Time Matric Hr Sec School</p>
            <h4>2017-2018 | Completed</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
