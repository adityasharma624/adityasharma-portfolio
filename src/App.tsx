import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { ThemeProps } from './types';

function MainContent({ isDarkMode, setIsDarkMode }: ThemeProps) {
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();

  useKeyboardNavigation();

  useEffect(() => {
    const handleScroll = () => {
      // Only track sections if we're on the home page
      if (location.pathname === '/') {
        const sections = ['hero', 'skills', 'competitive-programming', 'projects', 'blog'];
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
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Reset activeSection when navigating away from home
  useEffect(() => {
    if (location.pathname === '/blogs' || location.pathname.startsWith('/blog/')) {
      setActiveSection('blog');
    } else if (location.pathname !== '/') {
      setActiveSection('');
    }
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
    }`}>
      <Navbar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode}
        activeSection={activeSection}
      />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-500">
              <section id="hero" className="pt-24 py-16">
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
          } />
          <Route path="/blogs" element={<Blogs isDarkMode={isDarkMode} />} />
          <Route path="/blog/:slug" element={<BlogPost isDarkMode={isDarkMode} />} />
        </Routes>
      </div>

      <BackToTop />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router basename="/adityasharma-portfolio">
      <MainContent isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </Router>
  );
}

export default App;
