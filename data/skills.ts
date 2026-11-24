export interface SkillCategory {
  id: string;
  name: string;
  priority: number; // lower number = higher priority (Data Analytics & DB first)
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "data-analytics",
    name: "Data Analytics & Data Engineering",
    priority: 1,
    description: "Core specialization in transforming raw transactional and scientific data into structured, validated intelligence.",
    iconName: "BarChart3",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "SQL", isPrimary: true },
      { name: "Pandas", isPrimary: true },
      { name: "NumPy", isPrimary: true },
      { name: "Data Cleaning", isPrimary: true },
      { name: "Data Transformation", isPrimary: true },
      { name: "Exploratory Data Analysis" },
      { name: "Statistical Analysis" },
      { name: "Data Visualization" },
      { name: "Data Validation", isPrimary: true },
    ],
  },
  {
    id: "database-systems",
    name: "Database Systems",
    priority: 2,
    description: "Designing relational schemas, optimizing query performance, and implementing structured caching layers.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", isPrimary: true },
      { name: "MySQL", isPrimary: true },
      { name: "SQLite", isPrimary: true },
      { name: "Relational Database Design", isPrimary: true },
      { name: "Database Management Systems" },
      { name: "SQL Queries (Complex Joins & Aggregations)", isPrimary: true },
      { name: "Redis" },
    ],
  },
  {
    id: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    priority: 3,
    description: "Building predictive models, neural architectures, and integrating modern large language models into software.",
    iconName: "BrainCircuit",
    skills: [
      { name: "Scikit-learn", isPrimary: true },
      { name: "PyTorch" },
      { name: "Machine Learning (Supervised/Unsupervised)", isPrimary: true },
      { name: "Deep Learning" },
      { name: "CNN" },
      { name: "RNN" },
      { name: "LLM Integration", isPrimary: true },
    ],
  },
  {
    id: "backend-software",
    name: "Backend & Software Engineering",
    priority: 4,
    description: "Developing scalable REST APIs, microservices, asynchronous task queues, and clean OOP systems.",
    iconName: "Server",
    skills: [
      { name: "Python", isPrimary: true },
      { name: "Flask", isPrimary: true },
      { name: "Django", isPrimary: true },
      { name: "REST APIs", isPrimary: true },
      { name: "Go" },
      { name: "Celery" },
      { name: "Object-Oriented Programming" },
      { name: "Data Structures & Algorithms" },
    ],
  },
  {
    id: "scientific-computing",
    name: "Scientific Computing & Computational Biology",
    priority: 5,
    description: "Interdisciplinary scientific computation applied to genomic data, sequence alignment, and environmental DNA.",
    iconName: "Dna",
    skills: [
      { name: "Bioinformatics", isPrimary: true },
      { name: "BLAST", isPrimary: true },
      { name: "FASTA", isPrimary: true },
      { name: "Sequence Alignment" },
      { name: "Genomics Databases (NCBI, UniProt)" },
      { name: "Biological Data Analysis", isPrimary: true },
    ],
  },
  {
    id: "frontend-development",
    name: "Frontend Development",
    priority: 6,
    description: "Crafting responsive web interfaces, interactive dashboards, and client-side data representations.",
    iconName: "Layout",
    skills: [
      { name: "JavaScript", isPrimary: true },
      { name: "React" },
      { name: "Vue.js" },
      { name: "HTML5 & CSS3" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: "dev-tools",
    name: "Development Tools & Environments",
    priority: 7,
    description: "Containerization, version control, reproducible computing environments, and development workflows.",
    iconName: "Wrench",
    skills: [
      { name: "Git", isPrimary: true },
      { name: "GitHub", isPrimary: true },
      { name: "Linux", isPrimary: true },
      { name: "Docker" },
      { name: "Jupyter Notebook", isPrimary: true },
      { name: "VS Code", isPrimary: true },
    ],
  },
];
