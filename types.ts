
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  accent: string;
}
