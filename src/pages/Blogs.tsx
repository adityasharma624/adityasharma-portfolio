import { ThemeProps } from '../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../types/blog';

export default function Blogs({ isDarkMode }: ThemeProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={`text-3xl font-bold mb-8 ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          All Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className={`block p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                isDarkMode
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-gray-50 hover:bg-white'
              }`}
            >
              <div className={`text-sm ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {post.date} · {post.readTime}
              </div>
              <h2 className={`text-xl font-semibold mt-2 mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {post.title}
              </h2>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full ${
                      isDarkMode
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
} 