import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [faded, setFaded] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFaded(true);
      const hideTimer = setTimeout(() => {
        setHidden(true);
      }, 1000);
      return () => clearTimeout(hideTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-container ${faded ? 'fade-out' : ''}`}>
      <img draggable="false" src="/assets/images/preloader.gif" alt="" />
    </div>
  );
};

export default Preloader;
