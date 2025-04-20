import { ThemeProps } from '../types';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Machine Learning Algorithms",
    excerpt: "A deep dive into the fundamentals of machine learning algorithms and their applications in real-world scenarios.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Machine Learning", "AI", "Data Science"],
    content: "Full content of the blog post...",
    slug: "understanding-machine-learning-algorithms"
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Best practices and patterns for creating scalable and maintainable web applications using modern technologies.",
    date: "March 10, 2024",
    readTime: "4 min read",
    tags: ["Web Development", "Architecture", "Scalability"],
    content: "Full content of the blog post...",
    slug: "building-scalable-web-applications"
  },
  {
    title: "Competitive Programming Tips and Tricks",
    excerpt: "Essential strategies and techniques to improve your competitive programming skills and problem-solving abilities.",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"],
    content: "Full content of the blog post...",
    slug: "competitive-programming-tips-and-tricks"
  }
];

export default function Blog({ isDarkMode }: ThemeProps) {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const handleReadMore = (slug: string) => {
    setExpandedPost(slug);
  };

  return (
    <div className="space-y-6">
      <h2 className={`text-xl font-semibold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
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
            <button
              onClick={() => handleReadMore(post.slug)}
              className={`mt-4 text-sm font-medium ${
                isDarkMode
                  ? 'text-accent-turquoise hover:text-accent-turquoise/80'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mt-6"
      >
        <a
          href="/blogs"
          className={`px-4 py-2 rounded-lg font-medium ${
            isDarkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          } transition-colors`}
        >
          View More Blogs
        </a>
      </motion.div>
    </div>
  );
} 