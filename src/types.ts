export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
