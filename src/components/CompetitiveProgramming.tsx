import { ThemeProps } from '../types';

interface PlatformStats {
  rating: string;
  problemsSolved: string;
  contests: string;
  rank: string;
  percentile: string;
  profileUrl: string;
  color: string;
}

const platforms = {
  leetcode: {
    name: 'LeetCode',
    rating: '1800+',
    problemsSolved: '500+',
    contests: '50+',
    rank: 'Top 5%',
    percentile: '95%',
    profileUrl: 'https://leetcode.com/otter_',
    logo: 'https://leetcode.com/static/images/LeetCode_logo_rvs.png',
    color: 'text-orange-500'
  },
  codeforces: {
    name: 'Codeforces',
    rating: '1600+',
    problemsSolved: '300+',
    contests: '30+',
    rank: 'Top 10%',
    percentile: '90%',
    profileUrl: 'https://codeforces.com/profile/otter_',
    logo: 'https://codeforces.org/s/0/favicon-96x96.png',
    color: 'text-blue-500'
  },
  codechef: {
    name: 'CodeChef',
    rating: '1700+',
    problemsSolved: '400+',
    contests: '40+',
    rank: 'Top 7%',
    percentile: '93%',
    profileUrl: 'https://www.codechef.com/users/otte_r',
    logo: 'https://cdn.codechef.com/sites/all/themes/abessive/cc-logo.png',
    color: 'text-green-500'
  }
};

export default function CompetitiveProgramming({ isDarkMode }: ThemeProps) {
  return (
    <div className="space-y-6">
      <h2 className={`text-xl font-semibold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Competitive Programming
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {Object.entries(platforms).map(([key, platform]) => (
          <div
            key={key}
            className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
              isDarkMode
                ? 'bg-gray-800 hover:bg-gray-700'
                : 'bg-gray-50 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <img 
                src={platform.logo} 
                alt={`${platform.name} logo`} 
                className="h-8 w-auto object-contain"
              />
              <div className="text-right">
                <span className={`text-lg font-semibold ${platform.color}`}>
                  {platform.rating}
                </span>
                <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {platform.rank}
                </p>
              </div>
            </div>
            
            <div className={`space-y-2 text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <div className="flex justify-between items-center">
                <span>Problems Solved</span>
                <span className="font-medium">{platform.problemsSolved}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Contests</span>
                <span className="font-medium">{platform.contests}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Percentile</span>
                <span className="font-medium">{platform.percentile}</span>
              </div>
              <a
                href={platform.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center mt-3 py-1 px-3 rounded-full text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 