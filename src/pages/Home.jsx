import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ProjectsPreview from '../components/ProjectsPreview';
import ExperiencePreview from '../components/ExperiencePreview';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';
import Preloader from '../components/Preloader';

const Home = () => {
  useEffect(() => {
    document.title = 'Portfolio | Shafeek Rahman';

    try {
      const srtop = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 800,
        reset: false,
        viewFactor: 0.15,
      });

      srtop.reveal('.home .content h2', { delay: 100 });
      srtop.reveal('.home .content p', { delay: 200 });
      srtop.reveal('.home .hero-cta-group', { delay: 300 });
      srtop.reveal('.home .socials', { delay: 400 });
      srtop.reveal('.home .image', { delay: 300, origin: 'right' });

      srtop.reveal('.about .image', { delay: 200, origin: 'left' });
      srtop.reveal('.about .content', { delay: 300, origin: 'right' });

      srtop.reveal('.skills .container', { delay: 200 });
      srtop.reveal('.education .box-container', { delay: 200 });
      srtop.reveal('.work .box-container', { delay: 200 });
      srtop.reveal('.experience .timeline', { delay: 200 });

      return () => {
        try {
          srtop.destroy();
        } catch (e) {
          // ignore
        }
      };
    } catch (e) {
      // fallback gracefully if scrollreveal is unavailable
    }
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <ProjectsPreview />
      <ExperiencePreview />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default Home;
