import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="section flex items-center">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello, I'm{' '}
              <span className="text-primary-600">Aditya</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate Computer Science student with a love for competitive programming
              and building innovative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary-100 rounded-full transform rotate-6"></div>
              <img
                src="/profile.jpg"
                alt="Aditya Sharma"
                className="relative w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 