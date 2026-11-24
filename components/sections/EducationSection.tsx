"use client";

import React from "react";
import { educationList } from "@/data/education";
import { GraduationCap, BookOpen, MapPin, Calendar, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-12 border-b border-white/10">
          <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-widest font-semibold mb-2">
            Academic Foundations & Dual Degrees
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            Education Timeline
          </h2>
          <p className="text-sm text-slate-400 font-mono mt-2">
            Interdisciplinary synthesis of Biotechnology (NIT Durgapur) and Data Science (IIT Madras).
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12">
          {educationList.map((edu, idx) => (
            <div
              key={edu.id}
              className="glass-card rounded-3xl p-8 border border-white/15 dark:border-white/10 flex flex-col justify-between relative group"
            >
              {/* Institution Emblem Pill */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#38bdf8] group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#38bdf8] font-semibold">
                        {edu.shortName}
                      </span>
                      <h3 className="text-xl font-bold text-white font-sans">
                        {edu.institution}
                      </h3>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {edu.status}
                  </span>
                </div>

                {/* Degree & Location */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-base font-semibold text-slate-200">
                    {edu.degree}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Relevant Areas */}
                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Relevant Coursework & Focus Areas</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="pt-4 space-y-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed font-sans">
                      <span className="text-[#38bdf8] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CGPA display strictly hidden unless verified per prompt */}
              {edu.cgpa?.isVerified && (
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">Academic Standing</span>
                  <span className="text-[#38bdf8] font-bold">{edu.cgpa.value}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
