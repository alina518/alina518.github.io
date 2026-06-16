
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
  },
  {
    id: '5',
    title: 'Alien Invasion Game',
    description: 'Developed a fully playable 2D arcade shooter in Python using Pygame, featuring progressive difficulty scaling, collision detection, and sprite animation. Engineered a clean game loop architecture with score tracking and dynamic enemy wave generation.',
    tech: ['Python', 'Pygame', 'OOP', 'Game Dev'],
    icon: 'Gamepad2'
  },
  {
    id: '6',
    title: 'Automated Rental Discovery System',
    description: 'Built an end-to-end web scraping and aggregation pipeline to automate rental property discovery. The system extracts, filters, and ranks listings based on user-defined criteria, eliminating hours of manual browsing with structured data output.',
    tech: ['Python', 'Web Scraping', 'Automation', 'Data Processing'],
    icon: 'Home'
  },
  {
    id: '7',
    title: 'Weather App',
    description: 'Created a real-time weather application that fetches live meteorological data via REST APIs and presents it through a clean, responsive interface. Features include location-based lookup, temperature unit conversion, and dynamic weather condition icons.',
    tech: ['Python', 'REST API', 'JSON', 'UI Design'],
    icon: 'Cloud'
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
