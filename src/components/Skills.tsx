import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    category: 'Languages',
    items: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Java' },
    ],
  },
  {
    category: 'Technologies',
    items: [
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'HTML/CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'MongoDB' },
    ],
  },
  {
    category: 'CSE Subjects',
    items: [
      { name: 'Data Structures' },
      { name: 'Algorithms' },
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'Database Systems' },
      { name: 'Object-Oriented Programming' },
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">Skills</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here's a breakdown of my technical skills and expertise.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-6 text-primary-600">{category.category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="bg-gray-50 p-3 rounded-md text-center text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 