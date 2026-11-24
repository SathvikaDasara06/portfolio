export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: "Research Fellowship" | "Internship" | "Training & Internship";
  period: string;
  location: string;
  advisor?: string;
  department?: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  isTraining?: boolean; // Clearly distinguish training experience from formal employment
}

export const experienceList: ExperienceItem[] = [
  {
    id: "iit-bombay",
    organization: "IIT Bombay",
    role: "Data Analytics Research Intern",
    type: "Research Fellowship",
    period: "Summer 2026",
    location: "Mumbai, India",
    advisor: "Prof. Ganesh Viswanathan",
    department: "Department of Chemical Engineering",
    description:
      "Selected for the prestigious IASc-INSA-NASI Summer Research Fellowship to conduct computational data analytics and develop automated research data pipelines at IIT Bombay.",
    responsibilities: [
      "Developed Python-based automated workflows for large-scale biomedical research data processing.",
      "Worked with large-scale collections of biomedical research articles, structuring unstructured textual data.",
      "Processed and validated structured metadata using Python and Pandas libraries.",
      "Engineered reproducible computational workflows within Linux environments for research reproducibility.",
      "Reduced repetitive manual preprocessing effort by 60% through custom automation utilities.",
      "Facilitated standardized data retrieval, transformation, validation, and multi-tier output organization.",
    ],
    technologies: [
      "Python",
      "Pandas",
      "Linux",
      "Data Processing",
      "Automation",
      "Metadata Analysis",
      "Research Computing",
    ],
    metrics: [
      { label: "Articles Handled", value: "81,000+" },
      { label: "Metadata Parsed", value: "10,000+" },
      { label: "Manual Effort Cut", value: "60%" },
    ],
    isTraining: false,
  },
  {
    id: "infosys-springboard",
    organization: "Infosys Springboard",
    role: "Artificial Intelligence Intern",
    type: "Internship",
    period: "August – October 2025",
    location: "Remote (Virtual Internship 6.0)",
    description:
      "Engineered 'SmartQuizzer', an AI-powered adaptive quiz generation application that generates contextual educational assessments from learning resources.",
    responsibilities: [
      "Developed an AI-powered adaptive quiz generation application for personalized learning evaluations.",
      "Architected backend services using Django and Python, handling business logic and API requests.",
      "Integrated relational database systems with MySQL to persist user performance, question banks, and metrics.",
      "Implemented RESTful endpoints interfacing with LLM APIs for automated question synthesis.",
      "Formulated structured application workflows ensuring consistent output validation and error resilience.",
    ],
    technologies: [
      "Python",
      "Django",
      "MySQL",
      "REST APIs",
      "LLM Integration",
    ],
    metrics: [
      { label: "Platform", value: "SmartQuizzer" },
      { label: "Backend", value: "Django REST" },
      { label: "Database", value: "MySQL" },
    ],
    isTraining: false,
  },
  {
    id: "biotecnika",
    organization: "BioTecNika (in association with AIIMS Delhi)",
    role: "Bioinformatics Trainee & Intern",
    type: "Training & Internship",
    period: "May – July 2024",
    location: "Virtual / Hybrid",
    description:
      "Completed rigorous specialized training and hands-on internship in computational genomics and bioinformatics workflows in association with AIIMS Delhi.",
    responsibilities: [
      "Conducted biological sequence analysis on genomic and proteomic repositories.",
      "Utilized major biological databases including NCBI, GenBank, UniProt, and PDB.",
      "Executed sequence alignment, similarity scoring, and phylogenetic clustering using BLAST and FASTA.",
      "Authored Python scripts to automate sequence retrieval and parsing of FASTA headers and records.",
      "Explored computational workflows for target gene annotation and variant analysis.",
    ],
    technologies: [
      "Bioinformatics",
      "Python",
      "BLAST",
      "FASTA",
      "Genomics Databases",
      "Sequence Alignment",
    ],
    isTraining: true, // Clearly marked as training experience per guidelines
  },
];
