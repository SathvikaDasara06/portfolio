"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, ArrowRight, X, ExternalLink, Code2, Sparkles, FolderGit2 } from "lucide-react";
import { projectsList } from "@/data/projects";
import { profileConfig } from "@/data/profile";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = React.useState("");
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or shortcut
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { label: "Home", href: "/#home", category: "Navigation" },
    { label: "About Me", href: "/#about", category: "Navigation" },
    { label: "Research Impact & Metrics", href: "/#stats", category: "Navigation" },
    { label: "Professional Experience", href: "/#experience", category: "Navigation" },
    { label: "Featured Projects", href: "/#projects", category: "Navigation" },
    { label: "Research & Scientific Computing", href: "/#research", category: "Navigation" },
    { label: "Technical Skills", href: "/#skills", category: "Navigation" },
    { label: "Education & Academics", href: "/#education", category: "Navigation" },
    { label: "Beyond the Code (Achievements)", href: "/#achievements", category: "Navigation" },
    { label: "GitHub Open Source", href: "/#github", category: "Navigation" },
    { label: "Contact & Collaboration", href: "/#contact", category: "Navigation" },
  ];

  const filteredProjects = projectsList.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredNav = quickNav.filter((n) =>
    n.label.toLowerCase().includes(query.toLowerCase())
  );

  const navigateTo = (href: string) => {
    onClose();
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-2xl border border-white/15 dark:border-white/10 bg-[#070b14]/95 dark:bg-[#070b14]/95 text-slate-100 shadow-2xl overflow-hidden glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-[#38bdf8]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a section, project, skill, or press ESC..."
            className="flex-1 bg-transparent text-sm placeholder:text-slate-500 focus:outline-none text-slate-100"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs font-mono">
          {/* Navigation Items */}
          {filteredNav.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Sections
              </div>
              <div className="space-y-1 mt-1">
                {filteredNav.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => navigateTo(item.href)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-left font-sans text-sm group"
                  >
                    <div className="flex items-center gap-2.5">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#38bdf8] transition-colors" />
                      <span>{item.label}</span>
                    </div>
                    <span className="text-xs text-slate-500 font-mono">Jump</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Projects & Case Studies
              </div>
              <div className="space-y-1 mt-1">
                {filteredProjects.slice(0, 6).map((proj) => (
                  <button
                    key={proj.slug}
                    onClick={() => navigateTo(`/projects/${proj.slug}`)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-left font-sans text-sm group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#8b5cf6] transition-colors" />
                      <div>
                        <span className="font-medium text-slate-200">{proj.title}</span>
                        <span className="text-xs text-slate-400 ml-2">({proj.category})</span>
                      </div>
                    </div>
                    <span className="text-xs text-[#38bdf8] font-mono group-hover:underline">
                      View Case Study →
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div>
            <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              External & Documents
            </div>
            <div className="space-y-1 mt-1 font-sans text-sm">
              <button
                onClick={() => navigateTo(profileConfig.resume.url)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-left group"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-3.5 h-3.5 text-[#2dd4bf]" />
                  <span>View / Download Resume (PDF)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => navigateTo(profileConfig.social.github)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-left group"
              >
                <div className="flex items-center gap-2.5">
                  <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>GitHub Profile (SathvikaDasara06)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
              <button
                onClick={() => navigateTo(profileConfig.social.linkedin)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-left group"
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8b5cf6]" />
                  <span>LinkedIn Profile</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono bg-white/[0.02]">
          <span>Use ↑↓ to navigate, Enter to select</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
