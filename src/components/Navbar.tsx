import { useState } from 'react';
import { ThemeProps } from '../types';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar({ isDarkMode, setIsDarkMode, activeSection }: ThemeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'competitive-programming', label: 'CP' },
    { id: 'projects', label: 'Projects' }
  ];

  const toggleDarkMode = () => {
    if (setIsDarkMode) {
      setIsDarkMode(!isDarkMode);
    }
  };

  return (
    <nav className={`w-full py-4 transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors duration-500 ${
                  activeSection === item.id
                    ? isDarkMode ? 'text-accent-turquoise' : 'text-accent-turquoise'
                    : isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-500 ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {isDarkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
} 