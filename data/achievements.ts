export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  category: "Fellowship" | "Hackathon" | "Scholarship" | "Leadership" | "Community" | "Academic";
  description: string;
  verified: boolean;
  badge?: string;
  link?: string;
}

export const achievementsList: AchievementItem[] = [
  {
    id: "sih-2025",
    title: "National Finalist — Smart India Hackathon 2025",
    organization: "Ministry of Education & AICTE, Government of India",
    period: "2025",
    category: "Hackathon",
    description:
      "Selected as a National Finalist for developing a computational machine learning solution for deep-sea environmental DNA (eDNA) classification and marine biodiversity assessment.",
    verified: true,
    badge: "National Finalist",
  },
  {
    id: "iasc-fellowship",
    title: "IASc-INSA-NASI Summer Research Fellowship 2026",
    organization: "Indian Academy of Sciences, INSA, NASI",
    period: "2026",
    category: "Fellowship",
    description:
      "Awarded prestigious national summer fellowship for research at the Department of Chemical Engineering, IIT Bombay under Prof. Ganesh Viswanathan.",
    verified: true,
    badge: "National Fellow",
  },
  {
    id: "ffe-scholar",
    title: "Foundation for Excellence (FFE) Scholar",
    organization: "Foundation for Excellence (supported by 3M India Limited)",
    period: "2023 – Present",
    category: "Scholarship",
    description:
      "Awarded merit-based scholarship sponsored by 3M India Limited recognizing outstanding academic excellence and commitment to technical innovation.",
    verified: true,
    badge: "Scholar",
  },
  {
    id: "google-ambassador",
    title: "Google Gemini Campus Ambassador / Student Ambassador",
    organization: "Google",
    period: "2024 – Present",
    category: "Leadership",
    description:
      "Representing Google developer and AI initiatives on campus, conducting workshops on generative AI, prompt engineering, and Gemini API integration for student developers.",
    verified: true,
    badge: "Campus Ambassador",
  },
  {
    id: "gssoc-contributor",
    title: "GirlScript Summer of Code (GSSoC) Contributor",
    organization: "GirlScript Foundation",
    period: "2024",
    category: "Community",
    description:
      "Active open-source contributor solving issues, writing documentation, and contributing modular features across community software repositories.",
    verified: true,
    badge: "Contributor",
  },
  {
    id: "infosys-pragathi",
    title: "Infosys Pragathi Mentee",
    organization: "Infosys Foundation",
    period: "2024 – 2025",
    category: "Leadership",
    description:
      "Selected for specialized industry mentorship program, receiving technical guidance and professional development from senior enterprise software architects.",
    verified: true,
    badge: "Mentee",
  },
  {
    id: "tnp-rep",
    title: "Training and Placement Representative",
    organization: "National Institute of Technology Durgapur",
    period: "2024 – Present",
    category: "Leadership",
    description:
      "Liaison between the Department of Biotechnology and university placement cell, facilitating campus recruitment drives, industry outreach, and student readiness.",
    verified: true,
    badge: "Representative",
  },
  {
    id: "academic-distinction",
    title: "Academic Distinction — Top 10% of Class",
    organization: "NIT Durgapur",
    period: "2023 – Present",
    category: "Academic",
    description:
      "Maintained top-tier academic standing within the Department of Biotechnology, balancing rigorous laboratory coursework with dual-degree data science studies.",
    verified: true,
    badge: "Honors",
  },
];
