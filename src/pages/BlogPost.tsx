import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { blogPosts } from '../types/blog';
import { ThemeProps } from '../types';

export default function BlogPost({ isDarkMode }: ThemeProps) {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-4">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/blogs"
            className={`px-4 py-2 rounded-lg font-medium ${
              isDarkMode
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
            } transition-colors`}
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              to="/"
              className={`font-medium ${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Home
            </Link>
            <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>/</span>
            <Link
              to="/blogs"
              className={`font-medium ${
                isDarkMode
                  ? 'text-gray-400 hover:text-gray-300'
                  : 'text-gray-600 hover:text-gray-900'
              } transition-colors`}
            >
              Blog
            </Link>
            <span className={isDarkMode ? 'text-gray-600' : 'text-gray-400'}>/</span>
            <span className={isDarkMode ? 'text-gray-300' : 'text-gray-900'}>
              {post.title}
            </span>
          </div>
        </div>

        <article className="max-w-none">
          <header className="mb-8">
            <div className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {post.date} · {post.readTime}
            </div>
            <h1 className={`text-4xl font-bold mt-2 mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-2">
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
          </header>

          <div className={`prose prose-lg ${
            isDarkMode ? 'prose-invert' : ''
          } max-w-none`}>
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-3xl font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                code: ({ children }) => (
                  <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1 text-sm font-mono">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4 overflow-x-auto font-mono">
                    {children}
                  </pre>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </motion.div>
    </div>
  );
} 