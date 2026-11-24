export interface EducationItem {
  id: string;
  institution: string;
  shortName: string;
  degree: string;
  period: string;
  status: "Completed" | "In Progress" | "Pursuing";
  location: string;
  relevantAreas: string[];
  cgpa?: {
    value: string;
    isVerified: boolean; // Keep CGPA values configurable and hidden until verified
  };
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "nit-durgapur",
    institution: "National Institute of Technology Durgapur",
    shortName: "NIT Durgapur",
    degree: "Bachelor of Technology in Biotechnology",
    period: "2023 – 2027",
    status: "In Progress",
    location: "Durgapur, West Bengal, India",
    relevantAreas: [
      "Biotechnology",
      "Bioinformatics",
      "Computational Biology",
      "Scientific Research",
      "Biological Data Analysis",
    ],
    cgpa: {
      value: "",
      isVerified: false,
    },
    highlights: [
      "Training & Placement Representative representing the department",
      "Interdisciplinary focus bridging biological systems with computational modeling",
      "Top academic standing within the cohort",
    ],
  },
  {
    id: "iit-madras",
    institution: "Indian Institute of Technology Madras",
    shortName: "IIT Madras",
    degree: "Bachelor of Science in Data Science and Applications",
    period: "2023 – Present",
    status: "Pursuing",
    location: "Chennai, Tamil Nadu, India",
    relevantAreas: [
      "Data Science",
      "Statistics",
      "Machine Learning",
      "Database Management Systems",
      "Application Development",
      "Programming",
      "Data Analytics",
    ],
    cgpa: {
      value: "",
      isVerified: false,
    },
    highlights: [
      "Rigorous foundations in relational databases, data structures, and mathematical statistics",
      "Practical software engineering and full-stack application development coursework",
      "Dual-degree pursuit demonstrating exceptional academic bandwidth and commitment",
    ],
  },
];
