export interface ProfileConfig {
  fullName: string;
  displayName: string;
  monogram: string;
  headline: string;
  brandStatement: string;
  heroTagline: string;
  supportingIntro: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
    email?: string;
  };
  resume: {
    url: string;
    available: boolean;
  };
  availability: {
    enabled: boolean; // Do not display an employment availability badge unless explicitly enabled
    badgeText: string;
  };
  careerInterests: string[];
}

export const profileConfig: ProfileConfig = {
  fullName: "Dasara Thanmai Sri Sathvika",
  displayName: "Sathvika Dasara",
  monogram: "SD",
  headline: "Data Analytics | AI & Software Engineering | Research",
  brandStatement: "Turning complex data into intelligent solutions.",
  heroTagline:
    "Data analytics, AI development, database systems, and software engineering — backed by interdisciplinary research experience and a passion for solving real-world problems.",
  supportingIntro:
    "I am an interdisciplinary technology student with a strong interest in data analytics, database systems, artificial intelligence, and software development. My academic journey combines Biotechnology at NIT Durgapur with Data Science at IIT Madras, allowing me to approach technical problems from both scientific and computational perspectives. My research experience at IIT Bombay introduced me to large-scale biomedical data processing, automated workflows, metadata analysis, and reproducible computational systems. I enjoy working with complex datasets, designing structured databases, developing intelligent applications, and building software that solves meaningful problems.",
  location: "India",
  social: {
    github: "https://github.com/SathvikaDasara06",
    linkedin: "https://www.linkedin.com/in/sathvika-dasara/",
    email: "sathvikadasara06@gmail.com",
  },
  resume: {
    url: "/resume/Sathvika_Dasara_Resume.pdf",
    available: true,
  },
  availability: {
    enabled: false, // strictly false per configuration rule unless verified
    badgeText: "Available for Select Opportunities",
  },
  careerInterests: [
    "Data Analytics",
    "Data Science",
    "Data Engineering",
    "Database Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Backend Engineering",
    "Software Development",
    "Computational Biology",
  ],
};
