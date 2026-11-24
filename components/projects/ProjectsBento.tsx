"use client";

import React, { useState } from "react";
import Link from "next/link";
import { projectsList, ProjectCategory, ProjectItem } from "@/data/projects";
import {
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Database,
  Terminal,
  Activity,
  Cpu,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Data Analytics",
  "Artificial Intelligence",
  "Machine Learning",
  "Backend Engineering",
  "Full Stack",
  "Research",
];

export function ProjectsBento() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: ProjectItem["status"], isConcept?: boolean) => {
    if (isConcept) {
      return (
        <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-violet-500/10 text-violet-300 border border-violet-500/30">
          Concept & Architecture
        </span>
      );
    }
    switch (status) {
      case "Completed":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Verified Complete
          </span>
        );
      case "In Development":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
            In Development
          </span>
        );
      case "Research Prototype":
        return (
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Research Prototype
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Portfolio & Engineering Showcase
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            End-to-end data pipelines, AI applications, relational database architectures, and computational research systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-8 pb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border",
                selectedCategory === cat
                  ? "bg-white text-slate-900 font-semibold border-white shadow-sm"
                  : "bg-white/5 text-slate-400 hover:text-white border-white/10 hover:bg-white/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Bento-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isFlagship = project.isFlagship;

            return (
              <div
                key={project.id}
                className={cn(
                  "glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300",
                  isFlagship
                    ? "md:col-span-2 lg:col-span-2 border-2 border-[#38bdf8]/40 bg-gradient-to-br from-[#070b14]/90 via-[#101827]/80 to-[#172337]/70"
                    : "border border-white/15 dark:border-white/10"
                )}
              >
                <div>
                  {/* Top Metadata & Status */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold">
                        {project.category}
                      </span>
                      {project.organization && (
                        <span className="text-xs font-mono text-slate-400">
                          · {project.organization}
                        </span>
                      )}
                    </div>
                    {getStatusBadge(project.status, project.isConcept)}
                  </div>

                  {/* Title & Domain */}
                  <div className="py-4 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#38bdf8] transition-colors font-sans">
                        {project.title}
                      </h3>
                      {isFlagship && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-[#38bdf8]/20 text-[#38bdf8] font-semibold border border-[#38bdf8]/30">
                          FLAGSHIP
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {project.domain}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-sans mb-6">
                    {project.shortDescription}
                  </p>

                  {/* Flagship Highlight Preview Bar (RetailPulse) */}
                  {isFlagship && (
                    <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                        <span>Planned Architecture</span>
                        <span className="text-[#38bdf8]">PostgreSQL Star Schema</span>
                      </div>
                      <div className="text-xs text-slate-300 font-sans">
                        Multi-channel order consolidation, Customer Lifetime Value (CLV), RFM cohort segmentation & Plotly BI dashboards.
                      </div>
                    </div>
                  )}

                  {/* Key Metrics / Highlights */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                          <div className="text-xs font-bold font-mono text-white">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400 truncate">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#38bdf8] transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                        title="View GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.liveDemo && (
                      <a
                        href={project.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-[#38bdf8] border border-white/10 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
