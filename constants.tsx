
import { Project, SkillCategory, EducationItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Heart Disease Prediction',
    description: 'Engineered a high-precision ML diagnostic system achieving 92%+ accuracy. Overcame significant class imbalance in medical datasets using SMOTE and ensemble voting classifiers to ensure reliable patient risk assessment.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas'],
    icon: 'HeartPulse'
  },
  {
    id: '2',
    title: 'Ayurvedic Health Chatbot',
    description: 'Developed a contextual AI advisor bridging ancient wisdom and modern NLP. Integrated custom knowledge graphs to map symptoms to holistic treatments, solving the challenge of interpreting non-standardized medical terminology.',
    tech: ['AI', 'NLP', 'Python', 'Flask'],
    icon: 'Bot'
  },
  {
    id: '3',
    title: 'Music from Plants',
    description: 'Architected a bio-interactive IoT system translating galvanic plant responses into real-time MIDI harmonies. Engineered advanced signal filtering logic to distinguish delicate human touch from environmental noise.',
    tech: ['Arduino', 'C', 'IoT', 'Sensors'],
    icon: 'Music'
  },
  {
    id: '4',
    title: 'Chromecast Alternative',
    description: 'Built a low-latency media streaming server optimized for Raspberry Pi hardware. Fine-tuned packet buffering and network protocols to achieve seamless 1080p playback, earning recognition as a Top 100 Global Project.',
    tech: ['Raspberry Pi', 'Python', 'Media Streaming'],
    icon: 'MonitorPlay'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Java', 'C++', 'HTML', 'CSS'],
    icon: 'Code'
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
    icon: 'Database'
  },
  {
    title: 'Core Areas',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Data Analysis'],
    icon: 'Brain'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Tech in Artificial Intelligence',
    institution: 'REVA University (RACE), Bangalore',
    period: '2025 – 2027',
    accent: 'from-purple-200 to-blue-200'
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Presidency University, Bangalore',
    period: '2021 – 2025',
    accent: 'from-blue-200 to-mint-200'
  }
];

export const CERTIFICATIONS = [
  'IBM Python for Data Science – Cognitive Class',
  'IBM Database Management – Cognitive Class'
];
