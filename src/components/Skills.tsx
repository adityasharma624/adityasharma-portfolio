import { 
  CommandLineIcon,
  CodeBracketSquareIcon,
  CircleStackIcon,
  CpuChipIcon,
  ArrowPathIcon,
  WindowIcon
} from '@heroicons/react/24/outline';
import { ThemeProps } from '../types';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    name: 'Python',
    icon: <CommandLineIcon className="w-5 h-5" />
  },
  {
    name: 'Java',
    icon: <CodeBracketSquareIcon className="w-5 h-5" />
  },
  {
    name: 'C++',
    icon: <CodeBracketSquareIcon className="w-5 h-5" />
  },
  {
    name: 'C',
    icon: <CodeBracketSquareIcon className="w-5 h-5" />
  },
  {
    name: 'SQL',
    icon: <CircleStackIcon className="w-5 h-5" />
  },
  {
    name: 'NumPy',
    icon: <CpuChipIcon className="w-5 h-5" />
  },
  {
    name: 'Pandas',
    icon: <CpuChipIcon className="w-5 h-5" />
  },
  {
    name: 'Scikit-learn',
    icon: <CpuChipIcon className="w-5 h-5" />
  },
  {
    name: 'Git & GitHub',
    icon: <ArrowPathIcon className="w-5 h-5" />
  },
  {
    name: 'VS Code',
    icon: <WindowIcon className="w-5 h-5" />
  }
];

export default function Skills({ isDarkMode }: ThemeProps) {
  return (
    <div className="space-y-6">
      <h2 className={`text-xl font-semibold mb-6 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        Skills
      </h2>

      <div className="grid grid-cols-5 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`p-4 rounded-lg ${
              isDarkMode
                ? 'bg-gray-800'
                : 'bg-gray-50'
            }`}
          >
            <div className={`mb-3 ${
              isDarkMode ? 'text-accent-turquoise' : 'text-accent-turquoise'
            }`}>
              {skill.icon}
            </div>
            <h3 className={`text-sm font-medium ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
} 