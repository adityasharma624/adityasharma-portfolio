import { motion } from 'framer-motion';
import { ThemeProps } from '../types';

const featuredProjects = [
  {
    title: "ML Research Paper",
    description: "Research on improving neural network architectures for image classification tasks.",
    tags: ["Machine Learning", "Python", "PyTorch"],
    link: "#"
  },
  {
    title: "Compiler Project",
    description: "A custom compiler for a subset of C language with optimization passes.",
    tags: ["C++", "Compiler Design", "LLVM"],
    link: "#"
  }
];

export default function Projects({ isDarkMode }: ThemeProps) {
  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-xl font-semibold mb-6 ${
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
            className={`p-4 rounded-lg ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-gray-100'
            } transition-all`}
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
        <a
          href="#"
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