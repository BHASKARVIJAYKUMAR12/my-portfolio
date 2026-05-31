// ============================================================
// PORTFOLIO CONFIGURATION - Edit this file to update your portfolio
// ============================================================

export const personalInfo = {
  name: "Bhaskar Vijay Kumar Golusu",
  title: "Full Stack Developer",
  tagline:
    "Building scalable enterprise applications with React, TypeScript & .NET",
  description:
    "Full Stack Developer with 2 years of experience building scalable enterprise applications in the pharmaceutical and clinical supply chain domain. Experienced in developing config-driven architectures, reusable component libraries, and micro-frontend systems using React, TypeScript, and .NET. Skilled in cloud infrastructure, CI/CD automation, containerized deployments, and AI-assisted development workflows.",
  email: "bhaskarvijaykumarofficial2024@gmail.com",
  phone: "+91-7013726136",
  location: "Hyderabad, India",
  resumeUrl: "/BhaskarVijayKumar_CV_20032026.pdf", // Place your resume.pdf in /public folder
  socialLinks: {
    github: "https://github.com/BHASKARVIJAYKUMAR12",
    linkedin:
      "https://www.linkedin.com/in/golusu-bhaskar-vijay-kumar-a0b7b6259",
    twitter: "",
  },
  avatarUrl: "/portfolio/public/Professional_pic.png", // Place your photo in /public folder (optional)
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  frontend: [
    { name: "ReactJS", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "Material UI", level: 85 },
    { name: "Fluent UI", level: 75 },
  ],
  backend: [
    { name: "ASP.NET Web API", level: 85 },
    { name: "C#", level: 85 },
    { name: "FastAPI", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub Actions", level: 90 },
    { name: "Azure", level: 75 },
    { name: "Google Cloud Platform (GCP)", level: 75 },
    { name: "Docker", level: 80 },
    { name: "Kubernetes (GKE)", level: 70 },
    { name: "Jest", level: 85 },
    { name: "GitHub Copilot & Prompt Eng.", level: 85 },
    { name: "Agile / Scrum", level: 85 },
  ],
};

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Pharma Supply Chain Platform",
    description:
      "Enterprise platform powering pharma supply chain workflows with shared reusable component libraries.",
    longDescription:
      "Enterprise platform built using React, TypeScript, and Material UI with shared reusable component libraries powering pharma supply chain workflows. Developed 15+ configurable UI components improving scalability while maintaining 90%+ unit test coverage using Jest. Reduced duplicate development by 40% across enterprise supply chain modules.",
    techStack: ["React", "TypeScript", "Material UI", "Jest", ".NET"],
    imageUrl: "/projects/pharma.png",
    featured: true,
  },
  {
    title: "Clinical Trial Supply Chain Platform",
    description:
      "Micro-frontend clinical supply chain system with Task Manager and Rule Engine automation.",
    longDescription:
      "Micro-frontend clinical supply chain system built with React and .NET. Implemented Task Manager and Rule Engine automation reducing manual workflow operations by 60%. Contributed to Docker, GCP, GKE, and CI/CD infrastructure. Built config-driven event-based architecture with shared component libraries, accelerating feature delivery across workflows by 30%.",
    techStack: ["React", ".NET", "Docker", "GCP", "GKE", "CI/CD"],
    imageUrl: "/projects/clinical.png",
    featured: true,
  },
  {
    title: "NearbyRent",
    description:
      "Full-stack SaaS rental platform with secure APIs and AI-assisted development.",
    longDescription:
      "Full-stack SaaS rental platform built with React, TypeScript, Material UI, and .NET using a monorepo architecture. Implemented secure APIs, multi-layer database security, and CI/CD pipelines leveraging AI-assisted development with GitHub Copilot.",
    techStack: ["React", "TypeScript", "Material UI", ".NET", "GitHub Copilot"],
    imageUrl: "/projects/nearbyrent.png",
    featured: true,
  },
];

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  techUsed: string[];
}

export const experiences: Experience[] = [
  {
    company: "Syren Cloud Technologies Pvt. Ltd.",
    role: "Full Stack Developer (Associate Software Engineer)",
    duration: "Feb 2024 – Present",
    location: "Hyderabad, India",
    description: [
      "Developed 15+ reusable configuration-driven UI components using React, TypeScript, and Material UI, reducing duplicate development by 40% across enterprise supply chain modules",
      "Contributed to a config-driven event-based architecture with shared component libraries, accelerating feature delivery across workflows by 30%",
      "Implemented Task Manager and Rule Engine services using .NET APIs, automating clinical supply workflows and reducing manual processing by 60%",
      "Built Jest test suites achieving 90%+ coverage and leveraged GitHub Copilot, reducing component and API development time by 50%",
      "Implemented Docker containerization, GCP infrastructure provisioning, Kubernetes (GKE) deployments, and CI/CD pipelines enabling reliable production deployments",
      "Optimized infrastructure usage through automated scheduling jobs, reducing daily cloud costs by 80%",
    ],
    techUsed: [
      "React",
      "TypeScript",
      "Material UI",
      ".NET",
      "Docker",
      "GCP",
      "GKE",
      "Jest",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Information Technology",
    institution:
      "Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam",
    duration: "2021 – 2024",
    grade: "",
  },
];

export const certifications = [
  "Microsoft Azure Fundamentals (AZ-900) — Microsoft Certified",
];
