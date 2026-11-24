import React, { useEffect } from 'react';
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
    document.title = 'Shafeek Rahman | Senior Frontend Developer';
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
