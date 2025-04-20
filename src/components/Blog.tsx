import { ThemeProps } from '../types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../types/blog';

export default function Blog({ isDarkMode }: ThemeProps) {
  // Only show the first 3 blog posts on the home page
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="space-y-6">
      <h2 className={`text-xl font-semibold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPosts.map((post) => (
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
            <h3 className={`text-lg font-semibold mt-2 mb-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h3>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-6"
      >
        <Link
          to="/blogs"
          className={`px-4 py-2 rounded-lg font-medium ${
            isDarkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          } transition-colors`}
        >
          View More Blogs
        </Link>
      </motion.div>
    </div>
  );
} 