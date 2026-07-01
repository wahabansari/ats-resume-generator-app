export interface PersonalDetails {
  fullName: string;
  jobTitle: string;
  linkedin: string;
  email: string;
  location: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  punchline: string;
  description: string[];
}

export interface Project {
  id: string;
  name: string;
  techStack: string;
  liveUrl: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  dateRange: string;
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
}

export interface Skills {
  frontend: string[];
  mobile: string[];
  uiFrameworks: string[];
  stateManagement: string[];
  backend: string[];
  databases: string[];
  authentication: string[];
  devops: string[];
  performance: string[];
  aiAutomation: string[];
  cms: string[];
}

export interface ResumeData {
  personalDetails: PersonalDetails;
  summary: string;
  experience: Experience[];
  skills: Skills;
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  references: string;
}

export type ResumeField =
  | "summary"
  | "experience"
  | "project"
  | "personalDetails"
  | "skills"
  | "education"
  | "certification"
  | "references";
