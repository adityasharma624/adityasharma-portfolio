import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'Getting Started with Competitive Programming',
    excerpt: 'A comprehensive guide for beginners to start their competitive programming journey.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Programming',
    link: '#',
  },
  {
    title: 'Building a Modern Portfolio with React',
    excerpt: 'Learn how to create a stunning portfolio website using React and modern web technologies.',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Web Development',
    link: '#',
  },
  {
    title: 'Data Structures Every Programmer Should Know',
    excerpt: 'Essential data structures and their applications in real-world programming problems.',
    date: 'March 5, 2024',
    readTime: '10 min read',
    category: 'Computer Science',
    link: '#',
  },
];

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="blog" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">Blog</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I write about programming, technology, and my learning journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <a
                    href={post.link}
                    className="mt-4 inline-block text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Read more →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View All Posts
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 