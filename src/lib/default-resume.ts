import { ResumeData } from "./types";

export const defaultResume: ResumeData = {
  personalDetails: {
    fullName: "Muhammad Wahab Ansari",
    jobTitle:
      "Frontend Engineer specializing in React.js & Next.js",
    linkedin: "https://linkedin.com/in/muhammadwahab",
    email: "wahab@example.com",
    location: "Pakistan",
  },
  summary:
    "Results-driven Frontend Engineer with 5+ years of experience building high-performance web applications using React.js and Next.js. Proven track record of improving Core Web Vitals scores by up to 40%, implementing accessible UI systems, and delivering pixel-perfect designs at scale. Passionate about clean architecture, performance optimization, and building seamless user experiences.",
  experience: [
    {
      id: "exp-1",
      company: "TechCorp Solutions",
      role: "Senior Frontend Engineer",
      punchline: "Led the frontend architecture overhaul that cut page load times by 40% and scaled the platform to 50K+ users",
      description: [
        "Architected and led development of a Next.js 14 App Router application serving 50K+ monthly active users, achieving a 95+ Lighthouse performance score",
        "Reduced initial bundle size by 42% through strategic code-splitting, dynamic imports, and tree-shaking optimization",
        "Implemented a reusable component library with TypeScript and Tailwind CSS, reducing UI development time by 35% across 3 product teams",
      ],
    },
    {
      id: "exp-2",
      company: "Digital Innovations Inc.",
      role: "Frontend Developer",
      punchline: "Migrated a legacy codebase to React, boosting performance by 60% and modernizing the entire product UI",
      description: [
        "Built responsive, accessible dashboards using React.js and Redux Toolkit, processing real-time data for 10K+ daily users",
        "Migrated legacy jQuery codebase to React, improving page load performance by 60% and reducing maintenance overhead",
        "Collaborated with UX team to implement a design system with 50+ reusable components using Storybook",
      ],
    },
  ],
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
    ],
    mobile: ["React Native", "Expo"],
    uiFrameworks: ["Tailwind CSS", "Bootstrap", "MUI"],
    stateManagement: ["Redux Toolkit", "Zustand", "Context API"],
    backend: ["Node.js", "Express.js", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Prisma", "Drizzle"],
    authentication: ["OAuth2", "JWT"],
    devops: ["Git", "Docker", "Vercel"],
    performance: ["Core Web Vitals", "SEO Optimization"],
    aiAutomation: ["Gemini API", "Automation Integrations"],
    cms: ["WordPress"],
  },
  projects: [
    {
      id: "proj-1",
      name: "E-Commerce Platform",
      techStack: "Next.js, Stripe, Prisma, PostgreSQL",
      liveUrl: "https://example-store.com",
      description: [
        "Developed a full-stack e-commerce platform with server-side rendering, achieving sub-second page loads and 99.9% uptime",
        "Integrated Stripe payment processing with webhook handling for real-time order status updates",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      dateRange: "2018 - 2022",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      date: "2024",
    },
  ],
  references:
    "Available upon request from previous employers and professional colleagues.",
};
