import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [faded, setFaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFaded(true);
      const hideTimer = setTimeout(() => {
        setHidden(true);
      }, 700);
      return () => clearTimeout(hideTimer);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-container ${faded ? 'fade-out' : ''}`}>
      <div className="modern-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-core">
          <span className="spinner-initials">SR</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
