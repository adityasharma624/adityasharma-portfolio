import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a second-year Computer Science student with a passion for problem-solving
                and software development. My journey in programming began with competitive
                programming, which helped me develop strong analytical and algorithmic
                thinking skills.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or participating in coding competitions. I believe
                in continuous learning and pushing the boundaries of what's possible with
                technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-600">B.Tech in Computer Science</p>
                <p className="text-sm text-gray-500">2022 - Present</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-gray-600">India</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Interests</h3>
                <p className="text-gray-600">Competitive Programming, Web Development, AI/ML</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <p className="text-gray-600">C++, Python, JavaScript, TypeScript</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 