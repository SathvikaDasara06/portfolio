export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics?: string[];
}

// Fallback verified repositories matching user's genuine public profile
export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: "Crop-Fertilizer-Recommendation-System-using-ML",
    full_name: "SathvikaDasara06/Crop-Fertilizer-Recommendation-System-using-ML",
    description:
      "Machine learning model recommending optimal crops and fertilizers based on soil nutrients and meteorological parameters.",
    html_url: "https://github.com/SathvikaDasara06/Crop-Fertilizer-Recommendation-System-using-ML",
    language: "Python",
    stargazers_count: 2,
    forks_count: 0,
    updated_at: "2025-08-15T12:00:00Z",
    topics: ["machine-learning", "python", "scikit-learn", "agriculture"],
  },
  {
    id: 2,
    name: "SmartQuizzer",
    full_name: "SathvikaDasara06/SmartQuizzer",
    description:
      "AI-powered adaptive quiz generation platform developed during Infosys Springboard Virtual Internship using Django & MySQL.",
    html_url: "https://github.com/SathvikaDasara06/SmartQuizzer",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2025-10-20T14:30:00Z",
    topics: ["django", "python", "mysql", "llm-integration", "quiz-generator"],
  },
  {
    id: 3,
    name: "Vehicle-Parking-App",
    full_name: "SathvikaDasara06/Vehicle-Parking-App",
    description:
      "Full-stack vehicle parking management web application with slot occupancy tracking, tariffs, and SQLite relational database.",
    html_url: "https://github.com/SathvikaDasara06/Vehicle-Parking-App",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    updated_at: "2024-11-10T09:15:00Z",
    topics: ["flask", "sqlite", "bootstrap", "database-management"],
  },
];

export async function fetchGitHubRepositories(username: string = "SathvikaDasara06"): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Sathvika-Portfolio",
      },
    });

    if (!res.ok) {
      // Graceful fallback on rate limit or offline
      return FALLBACK_REPOS;
    }

    const repos: GitHubRepo[] = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) {
      return FALLBACK_REPOS;
    }

    return repos.slice(0, 6);
  } catch {
    return FALLBACK_REPOS;
  }
}
