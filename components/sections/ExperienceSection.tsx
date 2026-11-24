"use client";

import React, { useState } from "react";
import { experienceList, ExperienceItem } from "@/data/experience";
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Layers, CheckCircle2, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string>("iit-bombay");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-white/10">
          <div>
            <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
              Industry & Research Experience
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
              Work & Fellowships
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md font-mono">
            Research fellowships, AI engineering internships, and specialized bioinformatics training.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 pt-12">
          {experienceList.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={cn(
                  "glass-card rounded-3xl transition-all duration-300 border border-white/15 dark:border-white/10",
                  isExpanded ? "ring-1 ring-[#38bdf8]/40 shadow-[0_10px_40px_rgba(56,189,248,0.08)]" : ""
                )}
              >
                {/* Header (Always Visible / Click to Toggle) */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8]/50 rounded-3xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] shrink-0">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-lg sm:text-xl font-bold text-white font-sans">
                          {exp.role}
                        </span>
                        <span className="text-slate-400 font-normal">at</span>
                        <span className="text-lg sm:text-xl font-semibold text-[#38bdf8] font-sans">
                          {exp.organization}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                        {exp.advisor && (
                          <span className="text-slate-300">
                            Guide: {exp.advisor} ({exp.department})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    {exp.isTraining ? (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        Training & Internship
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20">
                        {exp.type}
                      </span>
                    )}
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expandable Body */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 space-y-6 animate-in fade-in duration-200">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                      {exp.description}
                    </p>

                    {/* Research Impact Panel (Verified Metrics) */}
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                        <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Verified Impact Telemetry</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {exp.metrics.map((m, mIdx) => (
                            <div key={mIdx} className="space-y-0.5">
                              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                                {m.value}
                              </div>
                              <div className="text-xs text-slate-400 font-sans">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Responsibilities */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                        Core Contributions & Workflows
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed p-2.5 rounded-xl bg-white/[0.02] border border-white/5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-slate-400 mr-2">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Explicit Training Distinction Note */}
                    {exp.isTraining && (
                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 flex items-center gap-2">
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        <span>Academic training experience distinguished from enterprise employment.</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
