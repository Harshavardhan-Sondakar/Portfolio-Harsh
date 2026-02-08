export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  objective: string;
  skillCategories: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
  activities: string[];
}

export const portfolioData: PortfolioData = {
  name: "Harshavardhan Sondakar",
  title: "Software Engineer",
  tagline: "Building scalable, user-focused applications with modern web technologies",
  location: "Belgaum, Karnataka",
  phone: "+91 8277492748",
  email: "hmsondakar@gmail.com",
  linkedin: "https://linkedin.com/in/harshavardhan-sondakar",
  github: "https://github.com/Harshavardhan-Sondakar",
  objective:
    "Computer Science graduate and Software Engineer with hands-on experience in full-stack web development and scalable application design. Proficient in React, Angular, Node.js, Spring Boot, Python, REST APIs, and SQL/NoSQL databases. Experienced in Agile development, secure authentication, and building reliable, user-focused applications. Seeking an entry-level software engineering role to contribute to high-impact, production-grade solutions.",
  skillCategories: [
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Angular"],
    },
    {
      category: "Backend Technologies",
      skills: ["Node.js", "Express.js", "Spring Boot", "Flask"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Postman"],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Self-Motivation", "Adaptability"],
    },
  ],
  experience: [
    {
      title: "Software Engineer",
      company: "Comply",
      period: "Aug 2025 – Present",
      responsibilities: [
        "Developed a full-stack calendar management platform using React.js, TypeScript, Node.js, and PostgreSQL, supporting role-based access and real-time synchronization",
        "Implemented JWT-based authentication, secure APIs, and optimized backend workflows to improve system reliability and performance",
        "Enhanced UI/UX and document processing workflows across enterprise web applications",
        "Collaborated in an Agile environment, participating in sprint planning, code reviews, and feature optimization",
        "Contributed to scalable compliance management solutions leveraging modern web technologies",
      ],
    },
    {
      title: "Engineer Intern",
      company: "Comply",
      period: "Jun 2025 – Aug 2025",
      responsibilities: [
        "Enhanced Angular-based compliance systems by developing new features and refactoring existing modules",
        "Assisted in debugging, testing, and deployment, improving code efficiency and application stability",
        "Worked closely with senior engineers to understand enterprise compliance workflows",
      ],
    },
  ],
  projects: [
    {
      title: "Recruit Right – Automated Document Verification System",
      description:
        "Built an AI-powered system to automate candidate document verification, reducing manual screening effort using ML-based classification.",
      techStack: ["Python", "Flask", "MongoDB", "spaCy", "Machine Learning", "OCR"],
      highlights: [
        "Implemented OCR to extract text from documents",
        "Used NLP for eligibility validation",
        "Reduced manual screening effort with ML-based classification",
      ],
    },
    {
      title: "Enhancing Healthcare with Voice-to-Text Conversion and Disease Prediction",
      description:
        "Developed a voice-based healthcare assistant for transcription and diagnosis with integrated speech-to-text and ML prediction models.",
      techStack: ["Python", "Flask", "HTML/CSS", "JavaScript", "Machine Learning", "MySQL"],
      highlights: [
        "Integrated speech-to-text conversion",
        "NLP-based symptom extraction",
        "ML prediction models for disease diagnosis",
      ],
    },
    {
      title: "EcoTrade Hub – Recycling Marketplace Platform",
      description:
        "Designed a marketplace connecting buyers and sellers of recyclable materials with secure user flows and community features.",
      techStack: ["React.js", "Spring Boot", "MySQL", "REST APIs"],
      highlights: [
        "Designed secure user flows",
        "Community section for eco-ideas",
        "Enabled smooth and reliable transaction features",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science And Engineering",
      institution: "KLE Technological University's Dr. M. S. Sheshgiri Campus, Belagavi",
      score: "CGPA: 7.11",
      year: "2025",
    },
    {
      degree: "Pre-University College",
      institution: "Govindram Seksaria Science College, Belagavi",
      score: "Percentage: 71%",
      year: "2021",
    },
    {
      degree: "High School",
      institution: "KLS English Medium High School, Belagavi",
      score: "Percentage: 76%",
      year: "2019",
    },
  ],
  certificates: [
    {
      title: "Frontend Developer (React)",
      issuer: "Hackerrank",
      date: "May 2023",
    },
    {
      title: "Front-End Developer Capstone",
      issuer: "Meta, Coursera",
      date: "April 2023",
    },
    {
      title: "Software Testing",
      issuer: "NPTEL",
      date: "October 2024",
    },
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      date: "October 2024",
    },
  ],
  activities: [
    "Built and managed the official college fest website, handling event listings, registrations, and live updates",
    "Organized inter-college tech events with 400+ participants",
    "Core member of Community Development Club (CDC) – social initiatives and awareness programs",
  ],
};
