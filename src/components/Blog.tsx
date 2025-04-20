import { ThemeProps } from '../types';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding Machine Learning Algorithms",
    excerpt: "A deep dive into the fundamentals of machine learning algorithms and their applications in real-world scenarios.",
    date: "March 15, 2024",
    readTime: "5 min read",
    tags: ["Machine Learning", "AI", "Data Science"]
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Best practices and patterns for creating scalable and maintainable web applications using modern technologies.",
    date: "March 10, 2024",
    readTime: "4 min read",
    tags: ["Web Development", "Architecture", "Scalability"]
  },
  {
    title: "Competitive Programming Tips and Tricks",
    excerpt: "Essential strategies and techniques to improve your competitive programming skills and problem-solving abilities.",
    date: "March 5, 2024",
    readTime: "6 min read",
    tags: ["Competitive Programming", "Algorithms", "Problem Solving"]
  }
];

export default function Blog({ isDarkMode }: ThemeProps) {
  return (
    <div className="space-y-6">
      <h2 className={`text-xl font-semibold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg ${
              isDarkMode
                ? 'bg-gray-800'
                : 'bg-gray-50'
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
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
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
          </div>
        ))}
      </div>
    </div>
  );
} 