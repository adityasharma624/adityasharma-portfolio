import { ThemeProps } from '../types';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string;
}

const allProjects: Project[] = [
  {
    title: "ML Research Paper",
    description: "Research on improving neural network architectures for image classification tasks.",
    tags: ["Machine Learning", "Python", "PyTorch"],
    link: "#",
    image: "/project1.jpg"
  },
  {
    title: "Compiler Project",
    description: "A custom compiler for a subset of C language with optimization passes.",
    tags: ["C++", "Compiler Design", "LLVM"],
    link: "#",
    image: "/project2.jpg"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    image: "/project3.jpg"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    tags: ["TypeScript", "Firebase", "Material UI"],
    link: "#",
    image: "/project4.jpg"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing and visualizing complex datasets.",
    tags: ["D3.js", "React", "Python"],
    link: "#",
    image: "/project5.jpg"
  },
  {
    title: "Mobile Fitness App",
    description: "A fitness tracking application with workout plans and progress analytics.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    image: "/project6.jpg"
  }
];

export default function ProjectsPage({ isDarkMode }: ThemeProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          All Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50'
              } transition-all duration-300 shadow-lg`}
            >
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded-full ${
                        isDarkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 