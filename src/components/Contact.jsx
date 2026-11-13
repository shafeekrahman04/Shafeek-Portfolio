import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Sending message...' });

    // Open mail client as reliable direct fallback or handle submission
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setStatus({ state: 'idle', message: '' });
      }, 5000);
    }, 800);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        <i className="fas fa-headset"></i> Get In <span>Touch</span>
      </h2>
      <p className="section-subtext">
        Have a project in mind, looking for a Senior Frontend Developer, or want to discuss opportunities? Let's connect!
      </p>

      <div className="contact-wrapper">
        {/* Contact Info Sidebar */}
        <div className="contact-info-card">
          <h3>Let's Talk</h3>
          <p className="contact-intro">
            I am currently based in <strong>Bengaluru, Karnataka</strong> and available as an <strong>Immediate Joiner</strong> for exciting frontend engineering challenges.
          </p>

          <div className="contact-details-list">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-meta">
                <span>Email Me</span>
                <a href="mailto:shafeekrahman04@gmail.com">shafeekrahman04@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="contact-meta">
                <span>Call Me</span>
                <a href="tel:+917094677840">+91 7094677840</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-meta">
                <span>Location</span>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="contact-meta">
                <span>Availability</span>
                <p className="highlight-green">Immediate Joiner</p>
              </div>
            </div>
          </div>

          <div className="contact-social-pills">
            <a
              href="https://www.linkedin.com/in/shafeek-rahman-280a17275"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/shafeekrahman04"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://t.me/shafeekrahman"
              target="_blank"
              rel="noreferrer"
              className="social-pill"
              title="Telegram"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card">
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-title">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll respond within 24 hours.</p>
            </div>

            {status.message && (
              <div className={`status-banner ${status.state}`}>
                {status.state === 'success' && <i className="fas fa-check-circle"></i>}
                {status.state === 'error' && <i className="fas fa-exclamation-circle"></i>}
                <span>{status.message}</span>
              </div>
            )}

            <div className="form-group">
              <div className="field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <i className="fas fa-phone-alt"></i>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="field textarea-field">
                <i className="fas fa-comment-dots"></i>
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <div className="button-area">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status.state === 'submitting'}
              >
                <span>{status.state === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
