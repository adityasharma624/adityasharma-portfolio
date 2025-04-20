import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProps } from '../types';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface NavbarProps extends ThemeProps {
  activeSection: string;
}

const Navbar = ({ isDarkMode, setIsDarkMode, activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', path: '/#hero' },
    { id: 'skills', label: 'Skills', path: '/#skills' },
    { id: 'competitive-programming', label: 'Competitive Programming', path: '/#competitive-programming' },
    { id: 'projects', label: 'Projects', path: '/#projects' },
    { id: 'blog', label: 'Blog', path: '/#blog' }
  ];

  const handleNavClick = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (path.startsWith('/#')) {
      const sectionId = path.split('#')[1];
      
      // If we're not on the home page, navigate to home first
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        // If we're already on home page, just scroll to the section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleThemeToggle = () => {
    if (setIsDarkMode) {
      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/80 backdrop-blur-sm' 
        : 'bg-white/80 backdrop-blur-sm'
    } ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(item.path, e)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isDarkMode
                      ? activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                      : activeSection === item.id
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className={`p-2 rounded-md transition-colors duration-200 ${
              isDarkMode
                ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            {isDarkMode ? '🌞' : '🌙'}
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden transition-all duration-300 ${
          isDarkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(item.path, e)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isDarkMode
                    ? activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                    : activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 