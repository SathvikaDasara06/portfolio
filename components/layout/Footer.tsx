"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { Monogram } from "@/components/ui/Monogram";
import { profileConfig } from "@/data/profile";

export function Footer() {
  const [year, setYear] = React.useState(2026);

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070b14]/80 backdrop-blur-lg pt-16 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#38bdf8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Identity Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Monogram size="sm" />
              <span className="font-bold text-lg text-slate-100 tracking-tight">
                {profileConfig.displayName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {profileConfig.brandStatement}
            </p>
            <p className="text-xs text-slate-400 max-w-md font-mono">
              Dual degree in Biotechnology (NIT Durgapur) & Data Science (IIT Madras).
              Research Intern at IIT Bombay.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#38bdf8] border border-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              {profileConfig.social.email && (
                <a
                  href={`mailto:${profileConfig.social.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#2dd4bf] border border-white/10 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <Link href="/#about" className="hover:text-[#38bdf8] transition-colors">
                  About Narrative
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#38bdf8] transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#38bdf8] transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#research" className="hover:text-[#38bdf8] transition-colors">
                  Research & Scientific Computing
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-[#38bdf8] transition-colors">
                  Technical Skills Matrix
                </Link>
              </li>
              <li>
                <Link href="/#achievements" className="hover:text-[#38bdf8] transition-colors">
                  Beyond the Code
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Status Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Status & Spec
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-slate-300">Production Build</span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Engineered with Next.js App Router, React 19, TypeScript, and Tailwind CSS.
              </p>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
          <div>
            © {year} {profileConfig.displayName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Designed with precision</span>
            <span>·</span>
            <span>Silicon Valley Editorial Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
