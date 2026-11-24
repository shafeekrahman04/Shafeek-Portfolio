import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

const About = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      VanillaTilt.init(terminalRef.current, {
        max: 10,
        speed: 300,
        glare: true,
        'max-glare': 0.12,
      });
    }

    return () => {
      if (terminalRef.current && terminalRef.current.vanillaTilt) {
        terminalRef.current.vanillaTilt.destroy();
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
          <div className="developer-terminal-card tilt" ref={terminalRef}>
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="terminal-title">shafeek.config.ts</span>
            </div>
            <div className="terminal-body">
              <pre>
                <code>
                  <span className="code-keyword">const</span> <span className="code-var">developer</span>: <span className="code-type">FrontendEngineer</span> = &#123;{'\n'}
                  {'  '}name: <span className="code-str">"Shafeek Rahman"</span>,{'\n'}
                  {'  '}headline: <span className="code-str">"Senior Frontend Developer"</span>,{'\n'}
                  {'  '}experience: <span className="code-num">"5+ Years"</span>,{'\n'}
                  {'  '}currentCompany: <span className="code-str">"Asta Systech"</span>,{'\n'}
                  {'  '}topSkills: [{'\n'}
                  {'    '}<span className="code-str">"React.js"</span>, <span className="code-str">"Next.js"</span>, <span className="code-str">"Node.js"</span>,{'\n'}
                  {'    '}<span className="code-str">"TypeScript"</span>, <span className="code-str">"Java"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}location: <span className="code-str">"Bengaluru, Karnataka, India"</span>,{'\n'}
                  {'  '}status: <span className="code-str">"Immediate Joiner"</span>,{'\n'}
                  {'  '}openToWork: <span className="code-bool">true</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
            <div className="terminal-footer">
              <div className="terminal-stat">
                <strong>5+ Yrs</strong>
                <span>Experience</span>
              </div>
              <div className="terminal-stat">
                <strong>-30%</strong>
                <span>UI Bug Reduct.</span>
              </div>
              <div className="terminal-stat">
                <strong>Immediate</strong>
                <span>Joiner</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <h3>I'm Shafeek Rahman</h3>
          <span className="tag">Senior Frontend Developer • Immediate Joiner</span>

          <p>
            I am a <strong>Senior Frontend Developer</strong> with over <strong>5 years of dedicated industry experience</strong> currently based in <strong>Bengaluru, Karnataka, India</strong>.
          </p>
          <p>
            At <strong>Asta Systech</strong>, I spearheaded the transition from static templates to dynamic, scalable <strong>React-based architectures</strong> for client-facing apps. I have translated complex business requirements into intuitive, interactive user interfaces for large-scale <strong>construction and pharmaceutical ERP systems</strong>, reducing UI-related bug reports by <strong>30%</strong> through rigorous cross-browser testing and performance optimization.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span><i className="fas fa-bolt"></i> Availability:</span> Immediate Joiner
              </p>
              <p>
                <span><i className="fas fa-map-marker-alt"></i> Location:</span> Bengaluru, Karnataka, India
              </p>
            </div>
            <div className="box">
              <p>
                <span><i className="fas fa-envelope"></i> Email:</span>{' '}
                <a href="mailto:shafeekrahman04@gmail.com">shafeekrahman04@gmail.com</a>
              </p>
              <p>
                <span><i className="fas fa-phone-alt"></i> Phone:</span>{' '}
                <a href="tel:+917094677840">+91 7094677840</a>
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="/assets/Shafeek_Rahman_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>Download Resume</span>
              <i className="fas fa-file-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
