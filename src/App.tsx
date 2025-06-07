import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
    
    // Add dark class if needed
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleLoadComplete = () => {
    setLoading(false);
    document.body.style.overflow = 'visible';
  };

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {loading ? (
        <Loader onLoadComplete={handleLoadComplete} />
      ) : (
        <>
          <Header isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Journey />
            <Blog />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;