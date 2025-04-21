import { motion } from 'framer-motion';
import { ThemeProps } from '../types';
import { Link } from 'react-router-dom';

const featuredProjects = [
  {
    title: "Transparent Price Discovery for Agri-Commodities",
    description: "Research project leveraging machine learning models to enable transparent and accurate price discovery in agricultural commodity markets.",
    tags: ["Machine Learning", "Regression", "Python", "scikit-learn", "pandas", "matplotlib"],
    link: "https://github.com/adityasharma624/Transparent-Price-Discovery-for-Agri-Commodities"
  },
  {
    "title": "Real-Time Process Monitor",
    "description": "A real-time process monitoring tool built in Python that displays CPU and memory usage of running processes in a Linux environment.",
    "tags": ["Python", "Windows", "System Programming", "Process Management", "pyutil"],
    "link": "https://github.com/adityasharma624/Real-Time-Process-Monitor"
  }  
];

export default function Projects({ isDarkMode }: ThemeProps) {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-2xl font-semibold mb-6 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-white'
            }`}
          >
            <h3 className={`font-medium mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            
            <p className={`text-sm mb-3 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-2 py-1 text-xs rounded ${
                    isDarkMode
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className={`text-sm font-medium ${
                isDarkMode
                  ? 'text-accent-turquoise hover:text-accent-turquoise/80'
                  : 'text-accent-turquoise hover:text-accent-turquoise/80'
              }`}
            >
              Learn More →
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-6"
      >
        <Link
          to="/projects"
          className={`px-4 py-2 rounded-lg font-medium ${
            isDarkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          } transition-colors`}
        >
          View All Projects
        </a>
      </motion.div>
    </div>
  );
} 