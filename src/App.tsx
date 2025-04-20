import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'competitive-programming', 'projects', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} activeSection={activeSection} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section id="hero">
          <Hero isDarkMode={isDarkMode} />
        </section>
        <section id="skills">
          <Skills isDarkMode={isDarkMode} />
        </section>
        <section id="competitive-programming">
          <CompetitiveProgramming isDarkMode={isDarkMode} />
        </section>
        <section id="projects">
          <Projects isDarkMode={isDarkMode} />
        </section>
        <section id="blog">
          <Blog isDarkMode={isDarkMode} />
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
      <BackToTop />
    </div>
  );
}
