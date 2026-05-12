import directFarmImg from "./assets/directfarm.png";
import smartTaskImg from "./assets/smarttask.png";

export const PROFILE_DATA = {
  name: "Manish Peshane",
  title: "Backend-Focused Full Stack Java Developer",
  subtitle: "Building scalable backend systems, secure REST APIs, and modern full-stack applications with production-level experience.",
  stats: [
    { label: "Experience", value: "1+ Years" },
    { label: "Projects", value: "4+" },
    { label: "Skills", value: "5+" }
  ],
  about: "I am an Associate Software Developer with hands-on experience building scalable full-stack applications using Java, Spring Boot, React.js, and Flutter. I specialize in backend API development, microservices, and production-level debugging.",
  specializations: [
    "Backend API development",
    "Spring Security",
    "JWT Authentication",
    "Microservices architecture",
    "Frontend-backend integration",
    "Redis caching",
    "Production debugging",
    "REST API development"
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React.js", "Flutter", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "REST APIs", "Spring Security", "JWT/OAuth2", "Microservices"]
    },
    {
      category: "Database",
      skills: ["Oracle", "MySQL", "Redis"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "Git", "GitHub", "Postman", "CI/CD"]
    },
    {
      category: "Core CS",
      skills: ["DSA Problem Solving", "DBMS", "OOP", "Operating Systems", "System Design Basics"]
    }
  ],
  experience: [
    {
      company: "Associate Software Developer",
      role: "Backend Focused Full Stack",
      duration: "Present",
      description: [
        "Developing scalable backend systems using Java and Spring Boot.",
        "Implementing security features with JWT and OAuth2.",
        "Optimizing data persistence with Redis caching strategies.",
        "Collaborating with cross-functional teams for end-to-end delivery."
      ]
    }
  ],
  projects: [
    {
      title: "DirectFarm",
      description: "A comprehensive agriculture platform with microservices architecture, implementing Eureka Server, Redis caching, and circuit breakers.",
      tech: ["Flutter", "Spring Boot", "Eureka", "Redis", "Microservices"],
        image: directFarmImg,
      github: "https://github.com/manishpeshane011?tab=repositories",
      demo: "#"
    },
    {
      title: "Car Washing Booking System",
  description: "Modern car wash booking platform with online slot scheduling, service selection, real-time booking updates, and customer management.",
  tech: ["React.js", "Spring Boot", "REST APIs", "MySQL"],
      image: smartTaskImg,
      github: "https://github.com/manishpeshane011?tab=repositories",
      demo: "#"
    }
  ],
  learningJourney: [
    "DSA Problem Solving",
    "System Design Basics",
    "Advanced Spring Security",
    "JWT & OAuth2",
    "Docker & Kubernetes",
    "CI/CD Pipelines",
    "Communication Confidence for Interviews"
  ],
  socials: {
    github: "https://github.com/manishpeshane011",
    linkedin: "https://www.linkedin.com/in/manish-peshane-574637289/",
    email: "mailto:manishpeshane011@gmail.com"
  }
};
