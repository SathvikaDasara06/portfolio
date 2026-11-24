"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FileText, Terminal, Database, Activity, Cpu } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";
import { HeroCanvas } from "@/components/sections/HeroCanvas";
import { profileConfig } from "@/data/profile";

export function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Background Interactive Data Canvas */}
      <HeroCanvas />

      {/* Controlled Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[128px] pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] bg-[#8b5cf6]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Editorial Text (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Professional Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-[#38bdf8] backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span>DATA · INTELLIGENCE · ENGINEERING</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.08] font-sans">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Sathvika Dasara.
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight gradient-text font-sans">
                {profileConfig.brandStatement}
              </h2>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
              {profileConfig.heroTagline}
            </p>

            {/* Dual CTAs & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 hover:scale-[1.02] backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]"
              >
                <FileText className="w-4 h-4 text-[#38bdf8]" />
                <span>View Resume</span>
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={profileConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all duration-200 hover:scale-105"
                  aria-label="GitHub Profile (SathvikaDasara06)"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#38bdf8] border border-white/10 transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Verification checklist note: Availability badge is hidden by default per profileConfig */}
            {profileConfig.availability.enabled && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                {profileConfig.availability.badgeText}
              </div>
            )}
          </div>

          {/* Right Visual Artifact: Elegant Abstract Data Node Matrix (Right 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              {/* Corner tech accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#38bdf8]/15 via-transparent to-transparent pointer-events-none" />
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>pipeline::telemetry</span>
                </div>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
              </div>

              {/* Data Node Flow Diagram */}
              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-[#38bdf8]/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Biomedical Corpus (IIT Bombay)
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        81,000+ publications ingested
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#38bdf8]">60% Faster</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-[#8b5cf6]/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#8b5cf6]/10 text-[#8b5cf6]">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        AI Assessment Engine (SmartQuizzer)
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        Django · MySQL · LLM synthesis
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#8b5cf6]">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-[#2dd4bf]/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#2dd4bf]/10 text-[#2dd4bf]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-200">
                        Deep-Sea eDNA Classification
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        SIH 2025 National Finalist
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-[#2dd4bf]">Validated</span>
                </div>
              </div>

              {/* Monogram Crest Footnote */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>IDENTITY: DASARA T. S. S.</span>
                <span className="text-slate-300 font-semibold tracking-wider">NIT Dgp · IIT M</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="pt-16 flex flex-col items-center justify-center gap-2 text-slate-400">
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1.5 h-2 bg-[#38bdf8] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
