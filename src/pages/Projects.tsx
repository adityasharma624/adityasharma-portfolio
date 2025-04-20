import { ThemeProps } from '../types';
import { motion } from 'framer-motion';

interface Project {
  year: string;
  title: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}

const allProjects: Project[] = [
  {
    year: '2025',
    title: 'Transparent Price Discovery for Agri-Commodities',
    techStack: ['Machine Learning', 'Python', 'scikit-learn', 'pandas', 'matplotlib'],
    githubLink: 'https://github.com/adityasharma624/Transparent-Price-Discovery-for-Agri-Commodities'
  },
  {
    year: '2025',
    title: 'Real-Time Process Monitor',
    techStack: ['Python', 'Windows', 'System Programming', 'Process Management', 'pyutil'],
    githubLink: 'https://github.com/adityasharma624/Real-Time-Process-Monitor'
  }
];

export default function Projects({ isDarkMode }: ThemeProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-3xl font-semibold mb-6 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          All Projects
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={`border-b ${
                isDarkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <th className={`py-3 px-4 text-left text-sm font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Year</th>
                <th className={`py-3 px-4 text-left text-sm font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Project</th>
                <th className={`py-3 px-4 text-left text-sm font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Tech Stack</th>
                <th className={`py-3 px-4 text-left text-sm font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Links</th>
              </tr>
            </thead>
            <tbody>
              {allProjects.map((project, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    isDarkMode ? 'border-gray-800 hover:bg-gray-800' : 'border-gray-100 hover:bg-gray-50'
                  } transition-colors`}
                >
                  <td className={`py-4 px-4 text-sm ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {project.year}
                  </td>
                  <td className="py-4 px-4">
                    <h3 className={`text-sm font-medium ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkMode
                              ? 'bg-gray-700 text-gray-300'
                              : 'bg-gray-200 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${
                            isDarkMode
                              ? 'text-blue-400 hover:text-blue-300'
                              : 'text-blue-600 hover:text-blue-500'
                          } transition-colors`}
                        >
                          Live
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${
                            isDarkMode
                              ? 'text-gray-400 hover:text-gray-300'
                              : 'text-gray-600 hover:text-gray-500'
                          } transition-colors`}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 