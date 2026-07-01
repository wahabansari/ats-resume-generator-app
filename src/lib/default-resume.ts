import { ResumeData } from "./types";

export const defaultResume: ResumeData = {
  personalDetails: {
    fullName: "John Smith",
    jobTitle: "Senior Software Engineer",
    linkedin: "https://linkedin.com/in/johnsmith",
    email: "john.smith@email.com",
    location: "San Francisco, CA",
  },
  summary:
    "Results-driven Software Engineer with 6+ years of experience building scalable web applications and distributed systems. Proven track record of improving system performance by 50%+, leading cross-functional teams, and delivering high-impact products. Passionate about clean architecture, mentoring engineers, and building reliable software at scale.",
  experience: [
    {
      id: "exp-1",
      company: "Acme Technologies",
      role: "Senior Software Engineer",
      punchline: "Led platform modernization that reduced infrastructure costs by 40% and improved response times by 60%",
      description: [
        "Architected and led development of a microservices platform serving 100K+ daily active users, achieving 99.9% uptime",
        "Reduced API response times by 60% through database optimization, caching strategies, and query refactoring",
        "Mentored a team of 5 junior engineers, establishing code review practices that reduced production bugs by 35%",
      ],
    },
    {
      id: "exp-2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      punchline: "Built core product features from 0 to 1, helping scale from 1K to 50K users in 12 months",
      description: [
        "Developed real-time collaborative features using WebSockets and Redis, processing 10K+ concurrent connections",
        "Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time from 30 min to 5 min",
        "Built analytics dashboard with React and D3.js, providing actionable insights for 200+ business users",
      ],
    },
  ],
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "Vue.js"],
    mobile: ["React Native", "Flutter"],
    uiFrameworks: ["Tailwind CSS", "Material UI", "Chakra UI"],
    stateManagement: ["Redux", "Zustand", "Pinia"],
    backend: ["Node.js", "Python", "Go", "REST APIs", "GraphQL"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    authentication: ["OAuth2", "SAML", "JWT"],
    devops: ["AWS", "Docker", "Kubernetes", "Terraform"],
    performance: ["Performance Optimization", "Load Testing"],
    aiAutomation: ["OpenAI API", "CI/CD Automation"],
    cms: ["Strapi", "Contentful"],
  },
  projects: [
    {
      id: "proj-1",
      name: "Real-Time Analytics Platform",
      techStack: "Next.js, Kafka, ClickHouse, Redis",
      liveUrl: "https://analytics-demo.vercel.app",
      description: [
        "Built a real-time analytics platform processing 1M+ events/day with sub-second dashboard updates",
        "Implemented event streaming pipeline with Kafka and ClickHouse for efficient time-series data storage",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      dateRange: "2016 - 2020",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Solutions Architect Associate",
      organization: "Amazon Web Services",
      date: "2023",
    },
  ],
  references:
    "Available upon request from previous employers and professional colleagues.",
};
