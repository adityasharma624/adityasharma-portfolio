import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Blog from './components/Blog';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { ThemeProps } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useKeyboardNavigation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'competitive-programming', 'projects', 'blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
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
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
      />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-500">
        <section id="home" className="py-16">
          <Hero isDarkMode={isDarkMode} />
        </section>

        <section id="skills" className="py-16">
          <Skills isDarkMode={isDarkMode} />
        </section>

        <section id="competitive-programming" className="py-16">
          <CompetitiveProgramming isDarkMode={isDarkMode} />
        </section>

        <section id="projects" className="py-16">
          <Projects isDarkMode={isDarkMode} />
        </section>

        <section id="blog" className="py-16">
          <Blog isDarkMode={isDarkMode} />
        </section>
      </main>

      <BackToTop />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
