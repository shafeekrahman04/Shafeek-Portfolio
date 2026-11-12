import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      VanillaTilt.init(imgRef.current, {
        max: 15,
      });
    }

    return () => {
      if (imgRef.current && imgRef.current.vanillaTilt) {
        imgRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            ref={imgRef}
            draggable="false"
            className="tilt"
            src="/assets/images/imgg.avif"
            alt=""
          />
        </div>
        <div className="content">
          <h3>I'm Shafeek Rahman</h3>
          <span className="tag">Software Engineer</span>

          <p>
            I am a Software Engineer based in TamilNadu, India.
            I am very passionate about improving my coding skills & developing applications & websites.
            I build WebApps and Websites using MERN Stack.
            Working for myself to improve my skills.
            Love to build Full-Stack clones.{' '}
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> age: </span> 25
              </p>
              <p>
                <span> phone : </span> +91 7094677840
              </p>
            </div>
            <div className="box">
              <p>
                <span> email : </span> shafeekrahman04@gmail.com
              </p>
              <p>
                <span> place : </span> TamilNadu, India - 627005{' '}
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="/assets/SHAFEEK RAHMAN SOFTWARE DEVELOPERS.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
