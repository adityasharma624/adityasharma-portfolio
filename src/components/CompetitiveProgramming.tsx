import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CodeBracketIcon, TrophyIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const platforms = [
  {
    name: 'Codeforces',
    handle: 'aditya',
    rating: '1600+',
    icon: CodeBracketIcon,
    color: 'text-blue-600',
  },
  {
    name: 'CodeChef',
    handle: 'aditya',
    rating: '4 Star',
    icon: TrophyIcon,
    color: 'text-yellow-600',
  },
  {
    name: 'LeetCode',
    handle: 'aditya',
    rating: 'Top 10%',
    icon: ChartBarIcon,
    color: 'text-orange-600',
  },
];

export default function CompetitiveProgramming() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="competitive-programming" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">Competitive Programming</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            I actively participate in competitive programming contests and have achieved
            notable rankings across various platforms.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <platform.icon className={`h-12 w-12 ${platform.color} mb-4`} />
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                <p className="text-gray-600 mb-1">Handle: {platform.handle}</p>
                <p className="text-gray-600">Rating: {platform.rating}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="https://codeforces.com/profile/aditya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View Profile
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 