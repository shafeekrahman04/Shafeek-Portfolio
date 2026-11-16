import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import ScrollToAnchor from './components/ScrollToAnchor';
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      const favicon = document.getElementById('favicon');
      if (document.visibilityState === 'visible') {
        document.title = 'Shafeek Rahman | Senior Frontend Developer';
        if (favicon) favicon.setAttribute('href', '/assets/images/favicon.png');
      } else {
        document.title = 'Come Back To Portfolio';
        if (favicon) favicon.setAttribute('href', '/assets/images/favicon.png');
      }
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <ScrollToAnchor />
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
