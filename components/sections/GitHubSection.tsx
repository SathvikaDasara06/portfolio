import React from "react";
import { fetchGitHubRepositories, GitHubRepo } from "@/lib/github";
import { profileConfig } from "@/data/profile";
import { FolderGit2, Star, GitFork, ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import { formatDate } from "@/lib/utils";

export async function GitHubSection() {
  const repos = await fetchGitHubRepositories();

  const getLanguageColor = (lang: string | null) => {
    switch (lang?.toLowerCase()) {
      case "python":
        return "#38bdf8";
      case "javascript":
        return "#facc15";
      case "typescript":
        return "#3b82f6";
      case "html":
        return "#f97316";
      case "go":
        return "#00add8";
      default:
        return "#8b5cf6";
    }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Open Source & Public Repositories
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              GitHub Activity
            </h2>
          </div>
          <a
            href={profileConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <span>github.com/SathvikaDasara06</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#38bdf8]" />
          </a>
        </div>

        {/* Repositories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-3xl p-6 sm:p-7 border border-white/15 dark:border-white/10 flex flex-col justify-between group space-y-4 hover:border-[#38bdf8]/40"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#38bdf8]" />
                    <span className="text-xs font-mono text-slate-400">Public</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#38bdf8] transition-colors font-mono tracking-tight break-all">
                  {repo.name}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
                  {repo.description || "Open source software project repository."}
                </p>
              </div>

              {/* Repo Stats & Language */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                  />
                  <span>{repo.language || "Code"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3 h-3 text-slate-400" />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
