import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <a
      href="#home"
      onClick={scrollToTop}
      aria-label="ScrollTop"
      className={`fas fa-angle-up ${active ? 'active' : ''}`}
      id="scroll-top"
    />
  );
};

export default ScrollTop;
